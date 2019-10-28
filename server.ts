import 'module-alias/register';
import {join} from 'path';
import * as nunjucks from 'nunjucks';
import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import {AppModule} from '@src/AppModule';
import * as session from 'express-session';
import flash = require('connect-flash');
import config from '@src/Config/config';

async function bootstrap()
{
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	const environment = nunjucks.configure(
		[
			join(__dirname, 'src', 'templates'),
			join(__dirname, 'system_template'),
		],
		{
			autoescape: true,
			throwOnUndefined: false,
			trimBlocks: false,
			lstripBlocks: false,
			watch: true,
			noCache: process.env.NODE_ENV === 'local',
			express: app,
		},
	);
	app.engine('njk', environment.render);

	app.useStaticAssets(join(__dirname, 'public'));
	app.setBaseViewsDir(join(__dirname, 'src', 'templates'));
	app.setViewEngine('nunjucks');
	app.set('view cache', true);

	app.use(session({
		secret: config.session.secret,
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: config.session.secureCookie,
		},
	}));
	app.use(flash());

	await app.listen(config.server.port);
}

bootstrap();
