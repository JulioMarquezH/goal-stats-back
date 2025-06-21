import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) { }
  
  async getAllEvents() {
    return this.prisma.event.findMany();
  }

  async getEventById(id: number) {
    return this.prisma.event.findUnique({ where: { id } });
  }

  async createEvent(data: any) {
    return this.prisma.event.create({ data });
  }

  async updateEvent(id: number, data: any) {
    return this.prisma.event.update({ where: { id }, data });
  }

  async deleteEvent(id: number) {
    return this.prisma.event.delete({ where: { id } });
  }
}
