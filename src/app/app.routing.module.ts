import { PocPageComponent } from './poc-page/poc-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginComponent } from './Login/login.component';


const appRoutes: Routes = [
    { path: '', redirectTo : '/app-login', pathMatch : 'full'},
    { path: 'app-registration-page', component : RegistrationPageComponent },
    { path: 'app-login', component: LoginComponent },
    { path: 'app-poc-page', component: PocPageComponent}
  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true } )// <-- "enableTracing" debugging purposes only
        ],
    exports: [RouterModule]
  })

  export class AppRoutingModule {  }
<<<<<<< HEAD
  export const routingComponents = [LoginComponent, RegistrationPageComponent, PocPageComponent];
  
=======
  export const routingComponents = [LoginComponent, RegistrationPageComponent, EmployeeDetailsComponent];
>>>>>>> 6e101b68c4f371b55cdc300cdf9d467ba31cfcd8
