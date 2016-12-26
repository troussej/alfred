import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightsComponent } from '../lights/lights.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: LightsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
