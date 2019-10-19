import {Controller, Get, Render} from '@nestjs/common';

@Controller()
export class HomepageController
{

	@Get()
	@Render('Public/homepage')
	public getHello()
	{
		return {};
	}

}
