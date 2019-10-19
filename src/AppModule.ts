import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {WebModule} from '@src/Modules/WebModule';

@Module({
	imports: [
		TypeOrmModule.forRoot(),
		WebModule,
	],
	controllers: [],
})
export class AppModule
{
}
