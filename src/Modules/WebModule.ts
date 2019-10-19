import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from '@src/Model/Entities/User';
import {PublicModule} from '@src/Modules/PublicModule';
import {AdminModule} from '@src/Modules/AdminModule';

@Module({
	imports: [
		TypeOrmModule.forFeature([User]),
		PublicModule,
		AdminModule,
	],
	providers: [],
	controllers: [],
})
export class WebModule
{
}
