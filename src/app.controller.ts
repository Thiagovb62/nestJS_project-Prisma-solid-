import { PrismaService } from './prisma.service';
import { Controller, Get, Post } from '@nestjs/common';
import { prisma } from '@prisma/client';
import { randomUUID } from 'crypto';


@Controller('notifications')
export class AppController {
  constructor(private readonly Prisma:PrismaService) {}

  @Get()
  getHello() {
    return this.Prisma.notifications.findMany();
  }
  
  @Post()
  async create() {
    await this.Prisma.notifications.create({
      data: {
        id: randomUUID(),
        content: 'you hav a new notification',
        category: 'social',
        recipientId: randomUUID(),
        
      },
    })
  }
}
