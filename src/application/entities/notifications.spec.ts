/* eslint-disable prettier/prettier */

import { Content } from "./content";
import { Notifications } from "./notification"


describe('Notifications content ', () => {
    it('it should be able to create a notification ',() => {
        const notification = new Notifications({
            
            content: new Content('Nova solicitaçao de amizade'),
            category: 'social',
            recipientId: '2'
         })
        
        expect(notification).toBeTruthy();
    })

})