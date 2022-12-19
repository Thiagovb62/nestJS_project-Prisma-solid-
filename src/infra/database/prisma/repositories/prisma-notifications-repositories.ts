/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Notifications } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-Repository";
import {PrismaService} from "../prisma.service"

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    
    constructor(private prismaService: PrismaService){}
    
    async findById(notificationId: string): Promise<Notifications | null> {
        throw new Error("Method not implemented.");
    }
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
    async save(notification: Notifications): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

function injectable() {
    throw new Error("Function not implemented.");
}
