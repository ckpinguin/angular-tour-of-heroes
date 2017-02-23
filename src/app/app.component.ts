import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <div><label>id: </label>{{myHero.id}}</div>
    <div><label>name: </label>{{myHero.name}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="myHero.name" placeholder="name">
    </div>
    <div>
        <h2>All Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes">{{hero.name}}</li>
        </ul>
    </div>
    `,
    //templateUrl: './app.component.html',
    //styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
    myHero = HEROES[1];
}

// Model class
export class Hero {
    id: number;
    name: string;
}

// Initial data state (later to be a service)
const HEROES: Hero[] = [
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
