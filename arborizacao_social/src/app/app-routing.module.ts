import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { Routes } from '@angular/router'; // CLI imports router
import { Route } from '@angular/router';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
];

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

    {
        path: '',
        component: DashboardComponent
    }
];


export class AppRoutingModule { }