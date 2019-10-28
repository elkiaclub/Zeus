import { Injectable } from '@nestjs/common';
import { MinecraftServer } from '@src/Model/Entities/MinecraftServer';
import { getConnection } from 'typeorm';

@Injectable()
export class MinecraftServerResolver {
	// list all servers
	public getServers = async () => {
		const connection = await getConnection();
		return await connection
			.createQueryBuilder()
			.select('minecraft_server')
			.from(MinecraftServer, 'minecraft_server')
			.getMany();
	}

	// get server by id
	public getServer = async (id: string) => {
		const connection = await getConnection();
		return await connection
			.createQueryBuilder()
			.select('server')
			.from(MinecraftServer, 'server')
			.where('id = :id', { id })
			.getOne();
	}

}
