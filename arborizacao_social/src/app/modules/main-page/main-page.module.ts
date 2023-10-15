import { NgApexchartsModule } from 'ng-apexcharts';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainPageComponent } from 'app/modules/main-page/main-page.component';

const mainPageRoutes: Route[] = [
    {
        path: '',
        component: MainPageComponent
    }
];

@NgModule({
    declarations: [
        MainPageComponent
    ],
    imports: [
        RouterModule.forChild(mainPageRoutes),
        NgApexchartsModule
    ]
})
export class MainPageModule {
}
