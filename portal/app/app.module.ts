import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {ColorPickerModule} from 'angular2-color-picker';



//twitterbootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { LightsComponent } from './lights/lights.component';
import { LightSmallEditorComponent } from './lights/small-editor/light-small-editor.component';
import { LightsService } from './lights/lights.service';
import { ColorService } from './shared/color.service';
import { InputDebounceComponent } from './shared/input-debounce.component'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        ColorPickerModule
    ],
    declarations: [
        AppComponent,
        LightsComponent,
        LightSmallEditorComponent,
        InputDebounceComponent
    ],
    providers: [LightsService, ColorService],
    bootstrap: [AppComponent]
})
export class AppModule { }
