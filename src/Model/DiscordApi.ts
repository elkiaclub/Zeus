import {Request} from 'express';
import {LinkGenerator} from '@src/Utils/LinkGenerator';
import config from '@src/Config/config';
import {HttpService, Injectable} from '@nestjs/common';
import * as querystring from 'querystring';
import * as httpRequest from 'request-promise-native';

@Injectable()
export class DiscordApi
{

	public constructor(private readonly httpService: HttpService)
	{
	}

	public getLoginUrl(request: Request): string
	{
		return 'https://discordapp.com/api/oauth2/authorize?' + querystring.stringify({
			client_id: config.discord.clientId,
			redirect_uri: LinkGenerator.link(request, 'auth/callback'),
			response_type: 'code',
			scope: 'identify guilds',
		});
	}

	public async authenticate(request: Request, code: string): Promise<IAuthenticateResponse>
	{
		return this.formPost('oauth2/token', {
			grant_type: 'authorization_code',
			client_id: config.discord.clientId,
			client_secret: config.discord.clientSecret,
			redirect_uri: LinkGenerator.link(request, 'auth/callback'),
			code: code,
		});
	}

	public async getUserInfo(accessToken: string): Promise<IUserInfoResponse>
	{
		return this.get('users/@me', accessToken);
	}

	public async getUserGuilds(accessToken: string): Promise<IUserGuildResponse[]>
	{
		return this.get('users/@me/guilds', accessToken);
	}

	public async isUserInElkia(accessToken: string): Promise<boolean>
	{
		const guilds = await this.getUserGuilds(accessToken);
		for (const guild of guilds) {
			if (guild.id === config.discord.guildId) {
				return true;
			}
		}
		return false;
	}

	private async get(url: string, accessToken: string): Promise<any>
	{
		const result = await this.httpService.get('https://discordapp.com/api/' + url, {
			headers: {
				Authorization: 'Bearer ' + accessToken,
			},
		}).toPromise();
		return result.data;
	}

	private async formPost(url: string, data: {[key: string]: any}): Promise<any>
	{
		return httpRequest({
			method: 'POST',
			uri: 'https://discordapp.com/api/' + url,
			form: data,
			json: true,
		});
	}
}



export interface IAuthenticateResponse
{

	error?: string;
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token: string;
	scope: string;

}

export interface IUserInfoResponse
{

	username: string;
	locale: string;
	premium_type: number;
	mfa_enabled: boolean;
	flags: number;
	avatar: string;
	discriminator: string;
	id: string;

}

export interface IUserGuildResponse
{

	id: string;
	name: string;
	icon: string;
	owner: boolean;
	permissions: number;

}
