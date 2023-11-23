import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { SearchModule } from 'app/modules/landing/component/search/search.module';
import { MainPageComponent } from 'app/modules/landing/main-page/main-page.component';
import { SharedModule } from 'app/shared/shared.module';
import { PlantsComponent } from './plants/plants.component';

@NgModule({
    declarations: [
        MainPageComponent,
        PlantsComponent,
    ],
    imports: [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        SearchModule,
        SharedModule,
        CommonModule,
    ],
    exports: [
        MainPageComponent,
    ],
})
export class MainPageModule {
}
