import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationPage } from './registration-page/registration-page.component';
import { Login } from './login/login.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';

const appRoutes: Routes = [
  {   path:'app-registration-page', component : RegistrationPage },
  {   path: 'app-login', component: Login },
  { path:'', redirectTo : '/app-login', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPage,
    Login,
],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
