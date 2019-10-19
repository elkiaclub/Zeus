import {Module} from '@nestjs/common';
import {HomepageController} from '@src/Controllers/HomepageController';

@Module({
	imports: [],
	providers: [],
	controllers: [HomepageController],
})
export class PublicModule
{
}
