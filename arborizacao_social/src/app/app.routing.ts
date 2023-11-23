import { Route } from '@angular/router';
import { MainPageComponent } from './modules/landing/main-page/main-page.component';
import { PlantDetailsComponent } from './modules/landing/main-page/plants/plant-details/plant-details.component';

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'arborizacaoSocial' },
    {
        path: '',
        component: MainPageComponent,
        children: [
            {
                path: 'arborizacaoSocial',
                loadChildren: () =>
                    import('app/modules/landing/main-page/main-page.module').then(m => m.MainPageModule),
            },
           
        ]
    },
    {
        path: 'arborizacaoSocial',
        component: PlantDetailsComponent,
        children: [
            {
                path: ':scientific_name',
                loadChildren: () =>
                    import('app/modules/landing/main-page/plants/plant-details/plant-details.module').then(m => m.PlantDetailsModule),
            },

        ]
    },
];
