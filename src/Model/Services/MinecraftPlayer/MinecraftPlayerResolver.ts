import { Injectable } from '@nestjs/common';
import { MinecraftPlayer } from '@src/Model/Entities/MinecraftPlayer';
import { getConnection } from 'typeorm';

interface IGetPlayerInput {
	id?: string;    // internal id
	uuid?: string;  // minecraft unique id
	ign?: string;   // minecraft name
}

interface IAddPlayerInput {
	uuid: string;
	ign: string;
	lastSeen: Date;
}

@Injectable()
export class MinecraftPlayerResolver {
	public getPlayer = async (args: IGetPlayerInput) => {
		const { id, uuid, ign } = args;
		if (id || uuid || ign) {
			const connection = await getConnection();
			const firstUser = await connection
				.createQueryBuilder()
				.select('player')
				.from(MinecraftPlayer, 'player')
				.where('player.id = :id', { id } )
				.orWhere('player.uuid = :uuid', { uuid })
				.orWhere('player.ign = :ign',  { ign })
				.getOne();
		}
		return false;
	}

	public addPlayer = async (args: IAddPlayerInput) => {
		const connection = await getConnection();
		const insertQuery = await connection
			.createQueryBuilder()
			.insert()
			.into(MinecraftPlayer)
			.values(args)
			.execute();
		const playerId = insertQuery.identifiers[0];
		return playerId;
	}
}
