import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { routingComponents } from './app.routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginComponent } from './Login/login.component';
import { environment } from '../environments/environment';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PocPageComponent } from './poc-page/poc-page.component';
import { FilterPipe } from './shared/Pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    routingComponents,
    EmployeeDetailsComponent,
    PocPageComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    FilterPipe],
  bootstrap: [
    AppComponent
  ],
  exports:[
    PocPageComponent
  ]

})
export class AppModule { }
