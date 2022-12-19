/* eslint-disable prettier/prettier */
import { Notifications } from "@application/entities/notification";
import { Content } from "../entities/content";
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from "./count-recipient-notifications";


describe('Count recipients notifications', () => {
    it('it should be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotification = new CountRecipientNotification(notificationsRepository);
        
        await notificationsRepository.create(new Notifications({
            category: 'test',
            content: new Content('nova solicitação de amizade'),
            recipientId: '123',
        })
        );

        await notificationsRepository.create(new Notifications({
            category: 'test',
            content: new Content('nova solicitação de amizade'),
            recipientId: '12',
        })
    );
         await notificationsRepository.create(new Notifications({
            category: 'test',
            content: new Content('nova solicitação de amizade'),
            recipientId: '12',
        })
    );
        
        const { count } = await countRecipientNotification.execute({
            recipientId: '12',
        });
        expect(count).toEqual(2);
    });

});