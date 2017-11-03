import { AngularFireAuth } from 'angularfire2/auth';
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
  msg: any;
  state: string='';
  // isError: Boolean;



  constructor(public firebaseAuth: AngularFireAuth, public authService: AuthService, private router: Router) {
    this.firebaseAuth.auth.onAuthStateChanged((user) => {
      if(user !=null) {
        this.router.navigateByUrl('app-poc-page');
      }
    }
    // this.errormsg = this.authService.msg;
    // console.log('login.ts', this.authService.msg);
    )}
    // signup() {
    //   this.authService.signup(this.email, this.password);
    //   this.email = this.password = '';
    // }

    login(email, password) {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(value => {
          console.log('Nice, it worked!');
          this.msg = 'Success';
          this.router.navigateByUrl('app-poc-page');
        }).catch(err => {
          this.msg = err.message;
          console.log('Something went wrong:', this.msg);
           
        });
      // return this.msg;
      
      // this.firebaseAuth.auth.signInWithEmailAndPassword(email,password).then(response => {return response});
    }
    logout() {
      this.authService.logout();
    }
}