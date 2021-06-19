import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './page/progress/progress.component';
import { Grafica1Component } from './page/grafica1/grafica1.component';
import { NotpageComponent } from './notpage/notpage.component';
import { PageComponent } from './page/page.component';


const routes: Routes = [
    { path: '', component: PageComponent,
children:[
    { path: 'Dashboard', component: DashboardComponent },   
    { path: 'Progres', component: ProgressComponent },
    { path: 'Grafica1', component: Grafica1Component },
    { path: '', redirectTo: '/Dashboard', pathMatch:'full' },
]
    },
  

    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent },
 
   
    { path: '**', component: NotpageComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
