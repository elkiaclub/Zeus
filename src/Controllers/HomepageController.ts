import {Controller, Get, Render, Req} from '@nestjs/common';
import {Request} from 'express';

@Controller()
export class HomepageController
{

	@Get()
	@Render('Public/homepage')
	public actionHomepage(@Req() request: Request)
	{
		return {
			user: request.session.user,
		};
	}

}
