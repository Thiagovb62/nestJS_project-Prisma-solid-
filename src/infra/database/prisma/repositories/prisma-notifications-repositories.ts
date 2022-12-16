/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Notifications } from "src/application/entities/notification";
import { NotificationsRepository } from "src/application/repositories/notifications-Repository";
import {PrismaService} from "../prisma.service"

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    constructor(private prismaService: PrismaService){}
    
    async create(notifications: Notifications): Promise<void> {
        await this.prismaService.notifications.create({
        
        data:{
            id:notifications.id,
            category:notifications.category,
            content:notifications.content.value,
            recipientId:notifications.recipientId,
            readAt:notifications.readAt,
            createdAt:notifications.createdAt,
          },
        })
    }
}

function injectable() {
    throw new Error("Function not implemented.");
}
