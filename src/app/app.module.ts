import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { HeroService } from './hero.service';
import { AppComponent }  from './app.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroAddComponent } from './hero-add.component';

import { AlertModule } from 'ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        AlertModule.forRoot()
        ],
    declarations: [
        AppComponent,
        HeroListComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        HeroAddComponent,
        DashboardComponent
    ],
    providers: [ HeroService ], // put providers here to have it available everywhere
    bootstrap: [ AppComponent ]
})
export class AppModule { }
