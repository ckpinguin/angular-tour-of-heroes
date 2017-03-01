import { Component, OnInit }        from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'hero-add',
    templateUrl: './hero-add.component.html',
    // styleUrls: [ './hero-detail.component.css' ]
})
export class HeroAddComponent implements OnInit {
    newHero: Hero;
    newHhero = {};

    constructor(
        private heroService: HeroService,
    ) {}

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }
}
