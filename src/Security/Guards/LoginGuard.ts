import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';

@Injectable()
export class LoginGuard implements CanActivate
{

	public canActivate(context: ExecutionContext): boolean
	{
		return !!context.switchToHttp().getRequest().session.userId;
	}

}
