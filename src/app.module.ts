import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PlayerController } from './modules/players/player.controller';
import { PlayerService } from './modules/players/player.service';

@Module({
    controllers: [AppController, PlayerController],
    providers: [PrismaService, PlayerService],
})
export class AppModule {}
