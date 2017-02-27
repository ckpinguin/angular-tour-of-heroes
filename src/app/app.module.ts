import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';

@NgModule({
    imports: [ BrowserModule, FormsModule, AppRoutingModule ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [ HeroService ], // put providers here to have it available everywhere
    bootstrap: [ AppComponent ],
})
export class AppModule { }
