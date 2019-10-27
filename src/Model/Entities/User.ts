import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User
{

	@PrimaryGeneratedColumn()
	public id: number;

	@Column({unique: true})
	public discordId: string;

	@Column()
	public displayName: string;

	@Column()
	public discordTag: string;

	@Column()
	public minecraftId?: string;

}
