import {IConfigSchema} from '@src/Config/IConfigSchema';

const config: IConfigSchema = {
	server: {
		port: 3000,
	},
	session: {
		secureCookie: false,
		secret: '',
	},
	database: {
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		username: 'root',
		password: '',
		database: 'elkia',
		entities: ['dist/src/Model/Entities/**.js'],
		synchronize: true,
	},
	discord: {
		clientId: '',
		clientSecret: '',
		guildId: '',
		roles: {
			admins: [
				'',
			],
		},
	},
};

export default config;
