import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) { }
  
  async getAllTeams() {
    return this.prisma.team.findMany();
  }

  async getTeamById(id: number) {
    return this.prisma.team.findUnique({ where: { id } });
  }

  async createTeam(data: any) {
    return this.prisma.team.create({ data });
  }

  async updateTeam(id: number, data: any) {
    return this.prisma.team.update({ where: { id }, data });
  }

  async deleteTeam(id: number) {
    return this.prisma.team.delete({ where: { id } });
  }
}
