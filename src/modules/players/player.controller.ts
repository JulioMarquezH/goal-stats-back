import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) { }

  @Get()
  async getPlayers() {
    return this.playerService.getAllPlayers();
  }

  @Get(':id')
  async getPlayerById(@Param('id') id: string) {
    return this.playerService.getPlayerById(parseInt(id));
  }

  @Post()
  async createPlayer(@Body() data: any) {
    return this.playerService.createPlayer(data);
  }

  @Put(':id')
  async updatePlayer(@Param('id') id: string, @Body() data: any) {
    return this.playerService.updatePlayer(parseInt(id), data);
  }

  @Delete(':id')
  async deletePlayer(@Param('id') id: string) {
    return this.playerService.deletePlayer(parseInt(id));
  }
}