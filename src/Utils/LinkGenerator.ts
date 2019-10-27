import {Request} from 'express';
import {URL} from 'url';

export class LinkGenerator
{

	public static link(request: Request, target: string): string
	{
		const url = new URL(request.protocol + '://' + request.get('host') + request.originalUrl);
		url.pathname = target;
		url.search = '';
		url.searchParams.forEach((value, name, params) => {
			params.delete(name);
		});
		return url.toString();
	}

}
