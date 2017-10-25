import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  errormsg;
  isError: Boolean;



  constructor(public authService: AuthService, employee: EmployeeService) {
    this.errormsg = this.authService.msg;
    console.log('login.ts', this.authService.msg);
  }
    // signup() {
    //   this.authService.signup(this.email, this.password);
    //   this.email = this.password = '';
    // }
    login() {

      console.log('Calling auth');
      this.errormsg = this.authService.login(this.email, this.password);
      console.log(this.errormsg);
      this.email = this.password = '';

      // this.errormsg= this.authService.msg;
    }
    logout() {
      this.authService.logout();
    }
}