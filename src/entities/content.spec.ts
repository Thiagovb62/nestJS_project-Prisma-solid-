/* eslint-disable prettier/prettier */
import { Content } from "./content";

describe('Notifications content ', () => {
    it('it should be able to create a notification content',() => {
        const content = new Content('voce recebeu uma solicitaçao de amizade')
            
        expect(content).toBeTruthy();
    })
    
    it('it not should be able to create a notification content with less than 6 chacrt',() => {
            
        expect(() => new Content('vo')).toThrow();
    })
    
    it('it not should be able to create a notification content with more than 200 chacrt',() => {
            
        expect(() => new Content('v'.repeat(202))).toThrow();
    })
})