import { PrismaService } from './prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { prisma } from '@prisma/client';
import { randomUUID } from 'crypto';
import { createNotificationBody } from './create-notification-body';


@Controller('notifications')
export class AppController {
  constructor(private readonly Prisma:PrismaService) {}

  @Get()
  getHello() {
    return this.Prisma.notifications.findMany();
  }
  
  @Post()
  async create(@Body() body: createNotificationBody) {
  const { content, category, recipientId } = body;
    await this.Prisma.notifications.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
        
      },
    })
  }
}
