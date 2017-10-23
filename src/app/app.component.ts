import { Component } from '@angular/core';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { EmployeeService } from './services/employee.service';
// import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]

})
export class AppComponent {

  constructor(employee: EmployeeService){}

}
