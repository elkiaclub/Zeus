import {Controller, Get, Render, Req, Res} from '@nestjs/common';
import {DiscordApi} from '@src/Model/DiscordApi';
import {Request, Response} from 'express';
import {UserFacade} from '@src/Model/Facades/UserFacade';

@Controller('auth')
export class DiscordLoginController
{

	public constructor(private readonly discordApi: DiscordApi, private readonly userFacade: UserFacade) {}

	@Get('login')
	@Render('DiscordLogin/login')
	public actionLogin(@Req() request: Request)
	{
		return {
			discordLoginUrl: this.discordApi.getLoginUrl(request),
		};
	}

	@Get('callback')
	public async actionCallback(@Req() request: Request, @Res() response: Response): Promise<any>
	{
		if (request.query.error) {
			response.redirect('/');
		}

		const authentication = await this.discordApi.authenticate(request, request.query.code);
		if (!await this.discordApi.isUserInElkia(authentication.access_token)) {
			response.redirect('/');
		}

		const user = await this.userFacade.getDiscordUser(await this.discordApi.getUserInfo(authentication.access_token));

		request.session.userId = user.id;
		request.session.user = user;
		response.redirect('/');
	}

	@Get('logout')
	public actionLogout(@Req() request: Request, @Res() response: Response): void
	{
		request.session.userId = undefined;
		request.session.user = undefined;
		response.redirect('/');
	}

}
