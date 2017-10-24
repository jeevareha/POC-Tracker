import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginComponent } from './Login/login.component';
import { POCPageComponent } from './poc-page/poc-page.component';

const appRoutes: Routes = [
    {   path: 'app-registration-page', component : RegistrationPageComponent },
    {   path: 'app-login', component: LoginComponent },
    { path: '', redirectTo : '/app-login', pathMatch : 'full'},
    { path: 'app-poc-page', component: POCPageComponent}
  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true } )// <-- "enableTracing" debugging purposes only
        ],
    exports: [RouterModule]
  })

  export class AppRoutingModule {  }
  export const routingComponents = [LoginComponent, RegistrationPageComponent, POCPageComponent];
  