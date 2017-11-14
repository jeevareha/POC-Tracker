import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  msg: any;
  user: Observable<firebase.User>;
  authState: any;
  // isError: Boolean;



  constructor(private firebaseAuth: AngularFireAuth, private authService: AuthService, private router: Router) {
    
    this.firebaseAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
   }
  //   then (user => {
  //       if(user) {
  //       // user is signed in
  //       this.user = authService.user;
  //       this.router.navigateByUrl("app-poc-page")
  //     } else {
  //       // user is signed out
  //       this.router.navigate(['/'])
  //     }
  //   }
  // )}
    // // this.errormsg = this.authService.msg;
    // // console.log('login.ts', this.authService.msg);
    // )}
    // signup() {
    //   this.authService.signup(this.email, this.password);
    //   this.email = this.password = '';
    // }

    login(email, password) {
      this.firebaseAuth
        .auth.onAuthStateChanged (value => {
        this.firebaseAuth.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(value => {
          console.log('Nice, it worked!');
          this.msg = 'Success';
          this.router.navigateByUrl('app-poc-page');
        }).catch(err => {
          this.msg = err.message;
          console.log('Something went wrong:', this.msg);
           
        }).catch(err => {
          console.log(this.msg = err.message);
      })
     })
      // return this.msg;
      
      // this.firebaseAuth.auth.signInWithEmailAndPassword(email,password).then(response => {return response});
    }
    logout() {
      this.authService.logout();
    }
}