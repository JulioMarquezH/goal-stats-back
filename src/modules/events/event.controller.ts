import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Get()
  async getEvents() {
    return this.eventService.getAllEvents();
  }

  @Get(':id')
  async getEventById(@Param('id') id: string) {
    return this.eventService.getEventById(parseInt(id));
  }

  @Post()
  async createEvent(@Body() data: any) {
    return this.eventService.createEvent(data);
  }

  @Put(':id')
  async updateEvent(@Param('id') id: string, @Body() data: any) {
    return this.eventService.updateEvent(parseInt(id), data);
  }

  @Delete(':id')
  async deleteEvent(@Param('id') id: string) {
    return this.eventService.deleteEvent(parseInt(id));
  }
}