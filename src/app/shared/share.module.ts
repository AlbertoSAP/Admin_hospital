import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { SidevarComponent } from './sidevar/sidevar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
    declarations: [
         BreadcrumbsComponent,
    HeaderComponent, 
    SidevarComponent,
    FooterComponent,
    ],
    imports: [ CommonModule ,],
    exports: [
         BreadcrumbsComponent,
    HeaderComponent, 
    SidevarComponent,
    FooterComponent,
    ],
    providers: [],
})
export class ShareModule {}