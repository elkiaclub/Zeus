import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { MinecraftPlayer } from '@src/Model/Entities/MinecraftPlayer';

@Entity()
export class MinecraftServer {

	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column()
	public host: string;

	@Column()
	public updatedAt: Date;

	@Column({ nullable: true })
	public maxPlayers: string;

	@OneToMany((type) => MinecraftPlayer, (p) => p.id)
	public players: MinecraftPlayer[];
}
