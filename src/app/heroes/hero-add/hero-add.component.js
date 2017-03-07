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
var hero_model_1 = require("../shared/hero.model");
var hero_service_1 = require("../shared/hero.service");
var HeroAddComponent = (function () {
    function HeroAddComponent(heroService) {
        this.heroService = heroService;
        this.submitted = false;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
    }
    HeroAddComponent.prototype.ngOnInit = function () {
        this.createEmptyHero();
    };
    HeroAddComponent.prototype.createEmptyHero = function () {
        this.newHero = {
            id: null,
            name: null,
            alterEgo: null,
            power: null
        };
    };
    // TODO: After submitting, the new hero is not shown in hero list (parent)
    // Why? The model has changed, so all Views using it (like the hero list)
    // should be invalidated...
    HeroAddComponent.prototype.onSubmit = function (hero) {
        var _this = this;
        if (!hero.name) {
            return;
        }
        console.log(JSON.stringify(hero, null, '   '));
        hero.name = hero.name.trim();
        this.heroService.create(hero)
            .then(function () {
            _this.selectedHero = null;
        });
        this.submitted = true;
    };
    Object.defineProperty(HeroAddComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.newHero); },
        enumerable: true,
        configurable: true
    });
    return HeroAddComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_model_1.Hero)
], HeroAddComponent.prototype, "selectedHero", void 0);
HeroAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'toh-hero-add',
        templateUrl: './hero-add.component.html',
        // directives: [AlertModule]
        styleUrls: ['./hero-add.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroAddComponent);
exports.HeroAddComponent = HeroAddComponent;
//# sourceMappingURL=hero-add.component.js.map