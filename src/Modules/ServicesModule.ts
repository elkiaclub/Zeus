import { Module } from '@nestjs/common';
import { MinecraftController } from '../Services/Minecraft/MinecraftController';
import { MinecraftService } from '../Services/Minecraft/MinecraftService';
import { MinecraftPlayerResolver } from '@src/Model/Services/MinecraftPlayer/MinecraftPlayerResolver';
import { MinecraftServerResolver } from '@src/Model/Services/MinecraftServer/MinecraftServerResolver';

@Module({
	providers: [MinecraftService, MinecraftPlayerResolver, MinecraftServerResolver],
	controllers: [MinecraftController],
})
export class ServicesModule {}
