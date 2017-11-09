import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

// import { RouterModule, ActivatedRoute, ParamMap, Router }   from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  providers: [EmployeeService]
  // styleUrls: ['.../styles.css']
})
export class RegistrationPageComponent {
  constructor(private employeeService: EmployeeService, public authService: AuthService, private firebaseAuth: AngularFireAuth ) {}
  localForm: NgForm;
  authErrorMsg: string;
  msg: any;
  

  onSubmitRegisterForm(form: NgForm)
  {
      this.signup(this.employeeService.currentEmployee.email, this.employeeService.currentEmployee.password);
      this.localForm = form;
    console.log(form.value);
  }

  dbInsert()
  {
      this.employeeService.insertEmployee(this.localForm.value);
      this.authErrorMsg = 'Success';
      this.employeeService.currentEmployee.email = this.employeeService.currentEmployee.password = '';
  }

  blockDbInsert()
  {
    this.authErrorMsg = 'User details already exists';
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
}
