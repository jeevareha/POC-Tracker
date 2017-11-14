import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
// import { RouterModule, ActivatedRoute, ParamMap, Router }   from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  providers: [EmployeeService]
  // styleUrls: ['.../styles.css']
})
export class RegistrationPageComponent {
  constructor(private employeeService: EmployeeService, 
              public authService: AuthService, 
              private firebaseAuth: AngularFireAuth, 
              private router: Router) { }

  localForm: NgForm;
  authResponseMsg: string;
  msg: any;
  registrationCompleteFlag: boolean;

  onSubmitRegisterForm(form: NgForm) {
    this.signup(this.employeeService.currentEmployee.email, this.employeeService.currentEmployee.password);
    this.localForm = form;
    console.log(form.value);
  }

  dbInsert() {
    this.employeeService.insertEmployee(this.localForm.value);
    this.authResponseMsg = 'You have completed your registration.';
    this.registrationCompleteFlag = true;
    console.log('RegistrationFlg : ', this.registrationCompleteFlag);
    // this.employeeService.currentEmployee.email = this.employeeService.currentEmployee.password = '';
  }

  blockDbInsert() {
    this.authResponseMsg = 'Provided user details already exists. Please verify your details again.';
    this.registrationCompleteFlag = false;
    console.log('RegistrationFlg : ', this.registrationCompleteFlag);

  }

  logout() {
    this.authService.logout();
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.dbInsert();
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        this.blockDbInsert();
      });
  }

  // gotoPOCDetails() {
  //   this.router.navigateByUrl('app-poc-page');
  // }
}
