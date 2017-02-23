import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
        <li *ngFor="let hero of heroes">
            {{ hero }}
        </li>
    </ul>
    `,
    //templateUrl: './app.component.html',
    //styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = ['Windyfart', 'Bomberman', 'Irontoe', 'TheTourist'];
    myHero = this.heroes[0];
}
