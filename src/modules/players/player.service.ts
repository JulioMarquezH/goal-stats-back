import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) { }
  
  async getAllPlayers() {
    return this.prisma.player.findMany();
  }

  async getPlayerById(id: number) {
    return this.prisma.player.findUnique({ where: { id } });
  }

  async createPlayer(data: any) {
    return this.prisma.player.create({ data });
  }

  async updatePlayer(id: number, data: any) {
    return this.prisma.player.update({ where: { id }, data });
  }

  async deletePlayer(id: number) {
    return this.prisma.player.delete({ where: { id } });
  }
}
