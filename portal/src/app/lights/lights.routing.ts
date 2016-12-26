
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LightsComponent } from './lights.component';

const routes: Route[] = [
    {
        path: '',
        component: LightsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
