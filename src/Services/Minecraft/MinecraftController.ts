import { Controller } from '@nestjs/common';
import { MinecraftService } from './MinecraftService';

@Controller()
export class MinecraftController {
	constructor(private readonly minecraftService: MinecraftService) {
		minecraftService.startSchedule();
	}
}
