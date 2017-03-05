"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("../shared/hero.service");
var HeroListComponent = (function () {
    function HeroListComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroListComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroListComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroListComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    return HeroListComponent;
}());
HeroListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'toh-heroes',
        templateUrl: './hero-list.component.html',
        styleUrls: ['./hero-list.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router])
], HeroListComponent);
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map