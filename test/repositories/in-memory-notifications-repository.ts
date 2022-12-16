/* eslint-disable prettier/prettier */
import { Notifications } from "../../src/application/entities/notification";
import { NotificationsRepository } from "../../src/application/repositories/notifications-Repository";


export class InMemoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notifications[] = [];
  async create(notification: Notifications) {
    this.notifications.push(notification);
  }
}
