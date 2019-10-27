import {Module} from '@nestjs/common';
import {PublicModule} from '@src/Modules/PublicModule';
import {AdminModule} from '@src/Modules/AdminModule';

@Module({
	imports: [
		PublicModule,
		AdminModule,
	],
	providers: [],
	controllers: [],
})
export class WebModule
{
}
