/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { Notifications } from "./../entities/notification";
import { SendNotification } from "./send-notification";


describe('Send-Notification', () => {
    it('it should be able to send a notification', async() => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository);
        
         await sendNotification.execute({
            content: 'aula nova disponivel',
            category: 'social',
            recipientId:'example-recipientId'
            
        })
        
        expect(notificationsRepository.notifications).toHaveLength(1);
    })

})