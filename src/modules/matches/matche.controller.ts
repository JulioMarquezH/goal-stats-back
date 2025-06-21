import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MatchService } from './matche.service';

@Controller('matches')
export class MatchController {
  constructor(private readonly matchService: MatchService) { }

  @Get()
  async getMatches() {
    return this.matchService.getAllMatches();
  }

  @Get(':id')
  async getMatchById(@Param('id') id: string) {
    return this.matchService.getMatchById(parseInt(id));
  }

  @Post()
  async createMatch(@Body() data: any) {
    return this.matchService.createMatch(data);
  }

  @Put(':id')
  async updateMatch(@Param('id') id: string, @Body() data: any) {
    return this.matchService.updateMatch(parseInt(id), data);
  }

  @Delete(':id')
  async deleteMatch(@Param('id') id: string) {
    return this.matchService.deleteMatch(parseInt(id));
  }
}