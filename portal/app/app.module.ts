import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './routing/routing.module';

// Imports for loading & configuring the in-memory web api

import { AppComponent } from './app.component';
import { LightsComponent } from './lights/lights.component';
import { LightsService } from './lights/lights.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LightsComponent
    ],
    providers: [LightsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
