/* eslint-disable prettier/prettier */
import { Notifications } from "./../entities/notification";
import { SendNotification } from "./send-notification";

const notifications: Notifications[] = [];

const notificationsRepository = {
   async create(notification:Notifications){
        notifications.push(notification)
    }
}

describe('Send-Notification', () => {
    it('it should be able to send a notification', async() => {
        const sendNotification = new SendNotification(notificationsRepository);
        
         await sendNotification.execute({
            content: 'aula nova disponivel',
            category: 'social',
            recipientId:'example-recipientId'
            
        })
        
        expect(notifications).toHaveLength(1);
    })

})