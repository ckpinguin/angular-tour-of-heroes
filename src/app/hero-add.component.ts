import { Component, Input, OnInit }        from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
// import { AlertModule } from 'ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'hero-add',
    templateUrl: './hero-add.component.html',
    // directives: [AlertModule]
    styleUrls: [ './hero-add.component.css' ]
})
export class HeroAddComponent implements OnInit {
    newHero: Hero;
    @Input() selectedHero: Hero;
    powers = ['Really Smart', 'Super Flexible',
               'Super Hot', 'Weather Changer'];

    constructor(
        private heroService: HeroService,
    ) {}

    ngOnInit(): void {
        this.createEmptyHero();
    }

    createEmptyHero(): void {
        this.newHero = {
            id: null,
            name: null,
            alterEgo: null,
            power: null
        };
    }

    add(hero: Hero): void {
        if (!hero.name) { return; }
        console.log(JSON.stringify(hero, null, '   '));
        hero.name = hero.name.trim();
        this.heroService.create(hero)
            .then(() => {
                this.createEmptyHero();
                this.selectedHero = null;
            });
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.newHero); }
}
