import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
// import { HeroAddComponent } from './hero-add.component';

@Component({
    moduleId: module.id, // to have templateUrl, styleUrls relativ to this
    selector: 'my-heroes',
    // imports: 'HeroAddComponent',
    templateUrl: './heroes.component.html',
    styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
        ) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }
}
