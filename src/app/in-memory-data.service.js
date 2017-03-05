"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Windyfart', power: 'Hot winds' },
            { id: 2, name: 'Bomberman', power: 'Throwing Bombs' },
            { id: 3, name: 'Irontoe', power: 'Kicking hard' },
            { id: 4, name: 'TheTourist', power: 'Asking' },
            { id: 5, name: 'Mr. Mistery', power: '???' },
            { id: 6, name: 'Herr Mister', power: 'A big fork' },
            { id: 7, name: 'Traktormann', power: '4000 HP' },
            { id: 8, name: 'Wonderbra-Woman', power: 'B+' },
            { id: 9, name: 'Headache Hero', power: 'Pain' },
            { id: 10, name: 'Dr. Toro', power: 'Horns' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map