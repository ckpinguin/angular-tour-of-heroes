import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    providers: [], // put providers here to have it available everywhere
    bootstrap: [ AppComponent ],
})
export class AppModule { }
