import {HttpModule, Module} from '@nestjs/common';
import {HomepageController} from '@src/Controllers/HomepageController';
import {DiscordLoginController} from '@src/Controllers/DiscordLoginController';
import {DiscordApi} from '@src/Model/DiscordApi';
import {UserRepo} from '@src/Model/Repositories/UserRepository';
import {UserFacade} from '@src/Model/Facades/UserFacade';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from '@src/Model/Entities/User';

@Module({
	imports: [
		HttpModule,
		TypeOrmModule.forFeature([
			User,
		]),
	],
	providers: [DiscordApi, UserRepo, UserFacade],
	controllers: [HomepageController, DiscordLoginController],
})
export class PublicModule
{
}
