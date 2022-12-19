/* eslint-disable prettier/prettier */
import { Notifications } from "@application/entities/notification";
import { Content } from "../entities/content";
import { CancelNotification } from './cancel-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';


describe('Cancel-Notification', () => {
    it('it should be able to Cancel a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotifications = new CancelNotification(notificationsRepository);
        
        const notification = new Notifications({
            category: 'test',
            content: new Content('nova solicitação de amizade'),
            recipientId: '123',
        });
        
        await notificationsRepository.create(notification);
        
        await cancelNotifications.execute({
            notificationId: notification.id,
        });
        
        expect(notificationsRepository.notifications[0].cancelAt).toEqual(expect.any(Date));
    });

    it('it should not be able to cancel a notification that does not exist', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotifications = new CancelNotification(notificationsRepository);
        
        await expect(
            cancelNotifications.execute({
                notificationId: '123',
            }),
        ).rejects.toThrowError('Notification not found');
    });

});