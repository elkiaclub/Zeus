import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { MinecraftServer } from '@src/Model/Entities/MinecraftServer';

@Entity()
export class MinecraftPlayer {

	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column()
	public uuid: string;

	@Column()
	public ign: string;

	@Column()
	public lastSeen: Date;

	@ManyToOne((type) => MinecraftServer, (s) => s.id)
	public minecraftServer: MinecraftServer;
	/*
	@OneToMany((type) => MinecraftServer, (s) => s.id)
	public minecraftServer: MinecraftServer;
    */
}
