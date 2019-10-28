import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {WebModule} from '@src/Modules/WebModule';
import {ServicesModule} from '@src/Modules/ServicesModule';

@Module({
	imports: [
		TypeOrmModule.forRoot(),
		WebModule,
		ServicesModule,
	],
	controllers: [],
})
export class AppModule
{
}
