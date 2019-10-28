import {Repository} from 'typeorm';
import {User} from '@src/Model/Entities/User';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class UserRepo
{

	public constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

	public async getByDiscordId(discordId: string): Promise<User|undefined>
	{
		return this.repository.findOne({
			where: {
				discordId: discordId,
			},
		});
	}

	public async getById(id: number): Promise<User|undefined>
	{
		return this.repository.findOne({
			where: {
				id: id,
			},
		});
	}

	public async createUser(discordId: string, username: string, discriminator: string): Promise<User>
	{
		const user = new User;
		user.discordId = discordId;
		user.displayName = username;
		user.discordTag = username + '#' + discriminator;
		await this.repository.save(user);
		return user;
	}

}
