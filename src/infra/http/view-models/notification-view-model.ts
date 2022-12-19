/* eslint-disable prettier/prettier */
import { Notifications } from '@application/entities/notification';
export class NotificationViewModel {
    static toHTTP(notification: Notifications){
        return {
            id: notification.id,
            content: notification.content,
            category: notification.category,
            recipientId: notification.recipientId,
        };
    }

}