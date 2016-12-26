import { NgModule } from '@angular/core';

import { LightsComponent } from './lights.component';
import { CommonModule } from '@angular/common';
import { routing } from './lights.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    LightsComponent,
  ],
  bootstrap: [
    LightsComponent
  ]
})
export class LightsModule { }
