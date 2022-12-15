/* eslint-disable prettier/prettier */
import { SendNotification } from "./send-notification";


describe('Send-Notification', () => {
    it('it should be able to send a notification', async() => {
        const sendNotification = new SendNotification();
        
       const {notification} = await sendNotification.execute({
            content: 'aula nova disponivel',
            category: 'social',
            recipientId:'example-recipientId'
            
        })
        
        expect(notification).toBeTruthy();
    })

})