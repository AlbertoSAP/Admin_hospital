import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotpageComponent } from './page/notpage/notpage.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidevarComponent } from './shared/sidevar/sidevar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProgressComponent } from './page/progress/progress.component';
import { Grafica1Component } from './page/grafica1/grafica1.component';
import { RoutingModule } from './app-routing.module';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotpageComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    SidevarComponent,
    FooterComponent,
    ProgressComponent,
    Grafica1Component,
    PageComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
