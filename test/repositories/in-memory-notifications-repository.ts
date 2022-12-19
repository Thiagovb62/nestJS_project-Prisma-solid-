/* eslint-disable prettier/prettier */
import { Notifications } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-Repository";


export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notifications[] = [];
  async create(notification: Notifications) {
    this.notifications.push(notification);
  }
}
