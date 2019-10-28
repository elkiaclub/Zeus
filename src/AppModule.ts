import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {WebModule} from '@src/Modules/WebModule';
import config from '@src/Config/config';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useFactory: () => {
				return config.database;
			},
		}),
		WebModule,
		ServicesModule,
	],
	controllers: [],
})
export class AppModule
{
}
