import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { AuthService } from '../services/auth.service';

// import { RouterModule, ActivatedRoute, ParamMap, Router }   from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  providers: [EmployeeService]
  // styleUrls: ['.../styles.css']
})
export class RegistrationPageComponent {
  constructor(private employeeService: EmployeeService, public authService: AuthService ) {}

  portfolios = ['Services', 'Front End', 'Backend'];
  // register = {name: '', EmpId: '', email: '', password: '', cpassword: '', portfolio: this.portfolios[0], phnumber: ''};

  onSubmitRegisterForm(form: NgForm)
  {
    console.log(form.value);
    this.employeeService.insertEmployee(form.value);
    console.log(this.employeeService.currentEmployee.email);
    console.log(this.employeeService.currentEmployee.password);

    this.authService.signup(this.employeeService.currentEmployee.email, this.employeeService.currentEmployee.password);
    this.employeeService.currentEmployee.email = this.employeeService.currentEmployee.password = '';
  }
}
