import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class SeasonService {
  constructor(private prisma: PrismaService) { }
  
  async getAllSeasons() {
    return this.prisma.season.findMany();
  }

  async getSeasonById(id: number) {
    return this.prisma.season.findUnique({ where: { id } });
  }

  async createSeason(data: any) {
    return this.prisma.season.create({ data });
  }

  async updateSeason(id: number, data: any) {
    return this.prisma.season.update({ where: { id }, data });
  }

  async deleteSeason(id: number) {
    return this.prisma.season.delete({ where: { id } });
  }
}
