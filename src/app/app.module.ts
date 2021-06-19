import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotpageComponent } from './notpage/notpage.component';
import { RoutingModule } from './app-routing.module';
import { PageModule } from './page/page.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NotpageComponent,
   
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    PageModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
