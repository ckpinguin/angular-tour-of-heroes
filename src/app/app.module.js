"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var core_module_1 = require("./core/core.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var hero_service_1 = require("./heroes/shared/hero.service");
var hero_list_component_1 = require("./heroes/hero-list.component/hero-list.component");
var hero_detail_component_1 = require("./heroes/hero-detail.component/hero-detail.component");
var dashboard_component_1 = require("./heroes/dashboard.component/dashboard.component");
var hero_search_component_1 = require("./heroes/hero-search.component/hero-search.component");
var hero_add_component_1 = require("./heroes/hero-add.component/hero-add.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            core_module_1.CoreModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule,
            ng2_bootstrap_1.AlertModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            hero_list_component_1.HeroListComponent,
            hero_detail_component_1.HeroDetailComponent,
            hero_search_component_1.HeroSearchComponent,
            hero_add_component_1.HeroAddComponent,
            dashboard_component_1.DashboardComponent
        ],
        exports: [app_component_1.AppComponent],
        entryComponents: [app_component_1.AppComponent],
        providers: [hero_service_1.HeroService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map