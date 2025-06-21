import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class MatchService {
  constructor(private prisma: PrismaService) { }
  
  async getAllMatches() {
    return this.prisma.match.findMany();
  }

  async getMatchById(id: number) {
    return this.prisma.match.findUnique({ where: { id } });
  }

  async createMatch(data: any) {
    return this.prisma.match.create({ data });
  }

  async updateMatch(id: number, data: any) {
    return this.prisma.match.update({ where: { id }, data });
  }

  async deleteMatch(id: number) {
    return this.prisma.match.delete({ where: { id } });
  }
}
