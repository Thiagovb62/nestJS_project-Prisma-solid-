/* eslint-disable prettier/prettier */
import { Notifications } from './../../../../application/entities/notification';
export class PrismaNotificationsMapper{
    static  toPrisma(notification:Notifications){
    return {
        id:notification.id,
        category:notification.category,
        content:notification.content,
        recipientId:notification.recipientId,
        readAt:notification.readAt,
        createdAt:notification.createdAt,
    }
  }
}