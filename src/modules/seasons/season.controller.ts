import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SeasonService } from './season.service';

@Controller('seasons')
export class SeasonController {
  constructor(private readonly seasonService: SeasonService) { }

  @Get()
  async getSeasons() {
    return this.seasonService.getAllSeasons();
  }

  @Get(':id')
  async getSeasonById(@Param('id') id: string) {
    return this.seasonService.getSeasonById(parseInt(id));
  }

  @Post()
  async createSeason(@Body() data: any) {
    return this.seasonService.createSeason(data);
  }

  @Put(':id')
  async updateSeason(@Param('id') id: string, @Body() data: any) {
    return this.seasonService.updateSeason(parseInt(id), data);
  }

  @Delete(':id')
  async deleteSeason(@Param('id') id: string) {
    return this.seasonService.deleteSeason(parseInt(id));
  }
}