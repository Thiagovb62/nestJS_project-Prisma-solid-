/* eslint-disable prettier/prettier */
import { Notifications } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-Repository";


export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notifications[] = [];
  async create(notification: Notifications) {
    this.notifications.push(notification);
  }
  async findById(notificationId: string): Promise<Notifications | null> {
    const notification = this.notifications.find((item) => item.id === notificationId);

    if (!notification) {
      return null;
    }

    return notification;
  }

  async save(notification: Notifications): Promise<void> {
   
    const notificationIndex = this.notifications.findIndex((item) => item.id === notification.id);

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
      
  }
}
