/* eslint-disable prettier/prettier */
import { NotificationNotFound } from "./errors/notification-not-found";
import { Content } from "../entities/content";
import { Notifications } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notifications-Repository";

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(
    request: CancelNotificationRequest
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }
    notification.cancel();
    
    await this.notificationsRepository.save(notification)
  }
}
