export interface IConfigSchema
{

	server: {
		port: number;
	};
	session: {
		secureCookie: boolean;
		secret: string;
	};
	database: {
		type: 'mysql';
		host: string;
		port: number;
		username: string;
		password: string;
		database: string;
		entities: string[];
		synchronize: boolean;
	};
	discord: {
		clientId: string;
		clientSecret: string;
		guildId: string;
		roles: {
			admins: string[];
		};
	};

}
