/* eslint-disable prettier/prettier */
import { Notifications } from "../entities/notification";

export abstract class NotificationsRepository {
  abstract create(notification: Notifications): Promise<void>;
  abstract findById(notificationId:string): Promise<Notifications | null>;
  abstract save(notification: Notifications): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
}
