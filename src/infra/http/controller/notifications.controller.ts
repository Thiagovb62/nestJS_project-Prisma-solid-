/* eslint-disable prettier/prettier */
import { NotificationViewModel } from "./../view-models/notification-view-model";
import { PrismaService } from "../../database/prisma/prisma.service";
import { Body, Controller, Post } from "@nestjs/common";
import { createNotificationBody } from "../../dtos/create-notification-body";
import { SendNotification } from "src/application/use-cases/send-notification";

@Controller("notifications")
export class NotificationsController {
  
  constructor(private sendNotification:SendNotification){}
  
  @Post()
  async create(@Body() body: createNotificationBody) {
    const { content, category, recipientId } = body;
    
    const {notification} = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    })
    
    return {
      notification:NotificationViewModel.toHTTP(notification),
    }
  }
}
