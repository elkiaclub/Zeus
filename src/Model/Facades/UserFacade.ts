import {Injectable} from '@nestjs/common';
import {UserRepo} from '@src/Model/Repositories/UserRepository';
import {IUserInfoResponse} from '@src/Model/DiscordApi';
import {User} from '@src/Model/Entities/User';

@Injectable()
export class UserFacade
{

	public constructor(private readonly userRepository: UserRepo) {}

	public async getDiscordUser(response: IUserInfoResponse): Promise<User>
	{
		let user = await this.userRepository.getByDiscordId(response.id);

		if (user === undefined) {
			user = await this.userRepository.createUser(response.id, response.username, response.discriminator);
		}

		return user;
	}

}
