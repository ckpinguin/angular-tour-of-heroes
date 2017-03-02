import { Component, Input, OnInit }        from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
// import { AlertModule } from 'ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'hero-add',
    templateUrl: './hero-add.component.html',
    // directives: [AlertModule]
    // styleUrls: [ './hero-detail.component.css' ]
})
export class HeroAddComponent implements OnInit {
    newHero: Hero;
    heroes: Hero[];
    @Input() selectedHero: Hero;

    constructor(
        private heroService: HeroService,
    ) {}

    ngOnInit(): void {
        this.getHeroes();
        // this.newHero = {};
    }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    add(hero: Hero): void {
        // if (!hero.name) { return; }
        // hero.name = hero.name.trim();
        this.heroService.create(hero)
            .then(savedHero => {
                this.newHero = savedHero;
                this.heroes.push(savedHero);
                this.selectedHero = null;
            });
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.newHero); }
}
