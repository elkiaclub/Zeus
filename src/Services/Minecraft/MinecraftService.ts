import { Injectable } from '@nestjs/common';
import * as schedule from 'node-schedule';
import * as Gamedig from 'gamedig';
import { MinecraftPlayerResolver } from '@src/Model/Services/MinecraftPlayer/MinecraftPlayerResolver';
import { MinecraftServerResolver } from '@src/Model/Services/MinecraftServer/MinecraftServerResolver';

interface IQueryOptions {
	type: string;
	host: string;
}

@Injectable()
export class MinecraftService {
	constructor(
		private readonly minecraftPlayerResolver: MinecraftPlayerResolver,
		private readonly minecraftServerResolver: MinecraftServerResolver,
	) {
	}

	public startSchedule = () => {
		/* query every 10 seconds (response is cached every 5 secs) */
		schedule.scheduleJob('*/10 * * * * *', async () => {
			this.queryRunner();
		});
	}

	private queryRunner = async () => {
		// get servers
		const servers = await this.minecraftServerResolver.getServers();
		if (servers) {
			// query each server
			for (const server of servers) {
				const queryOptions = {
					type: 'minecraftping',
					host: server.host,
				};
				this.queryServer(queryOptions);
			}
		}
	}

	private queryServer = async (queryOptions: IQueryOptions) => {
		const queryResult = await Gamedig.query(queryOptions);
		if (queryResult && queryResult.raw && queryResult.raw.vanilla) {
			const {name, maxplayers, players, connect} = queryResult;
			// todo: update server status

			// go trough all players and update tracking values
			for (const player of players.filter((value) => Object.keys(value).length > 0)) { // filter out empty objects
				const getPlayer = await this.minecraftPlayerResolver.getPlayer({ign: player.name});
				// todo
				console.log(getPlayer);
				console.log(player);
			}
		} else { // server is offline
			// todo
		}

	}
}
