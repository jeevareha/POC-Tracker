import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap, Router }   from '@angular/router';
import { RegistrationPage } from '../registration-page/registration-page.component';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login {
  
  email: string;
  password: string;
  errormsg;
  
  constructor(public authService: AuthService) {
    this.errormsg= this.authService.msg;
    console.log("login.ts",this.authService.msg);
  }
    register(){
      this.email = this.password = '';
      let register = new RegistrationPage();
      
    }
    signup() {
      this.authService.signup(this.email, this.password);
      this.email = this.password = '';
    }
    login() {
      this.authService.login(this.email, this.password);
      this.email = this.password = '';   
      this.errormsg= this.authService.msg;
      console.log("Login.ts : ",this.authService.msg);
    }
    logout() {
      this.authService.logout();
    }

    }