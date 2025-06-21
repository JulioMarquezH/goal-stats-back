import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) { }

  @Get()
  async getTeams() {
    return this.teamService.getAllTeams();
  }

  @Get(':id')
  async getTeamById(@Param('id') id: string) {
    return this.teamService.getTeamById(parseInt(id));
  }

  @Post()
  async createTeam(@Body() data: any) {
    return this.teamService.createTeam(data);
  }

  @Put(':id')
  async updateTeam(@Param('id') id: string, @Body() data: any) {
    return this.teamService.updateTeam(parseInt(id), data);
  }

  @Delete(':id')
  async deleteTeam(@Param('id') id: string) {
    return this.teamService.deleteTeam(parseInt(id));
  }
}