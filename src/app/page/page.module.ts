import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { ShareModule } from '../shared/share.module';
import { RoutingModule } from '../app-routing.module';
@NgModule({
    declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PageComponent,
    
    ],
    imports: [ 
        CommonModule,
        ShareModule,
        RoutingModule 
        ],
    exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PageComponent,
    ],
    providers: [],
})
export class PageModule {}