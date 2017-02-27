import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 1, name: 'Windyfart' },
            { id: 2, name: 'Bomberman' },
            { id: 3, name: 'Irontoe' },
            { id: 4, name: 'TheTourist' },
            { id: 5, name: 'Mr. Mistery' },
            { id: 6, name: 'Herr Mister' },
            { id: 7, name: 'Traktormann' },
            { id: 8, name: 'Wonderbra-Woman' },
            { id: 9, name: 'Headache Hero' },
            { id: 10, name: 'Dr. Toro'}
        ];
        return { heroes };
    }
}
