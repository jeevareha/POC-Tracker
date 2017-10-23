import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../services/employee.service'
// import { RouterModule, ActivatedRoute, ParamMap, Router }   from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  providers: [EmployeeService]
  // styleUrls: ['.../styles.css']
})
export class RegistrationPageComponent {
  constructor(private employeeService: EmployeeService) {}

  portfolios = ['Services', 'Front End', 'Backend'];
  register = {name: '', EmpId: '', email: '', password: '', cpassword: '', portfolio: this.portfolios[0], phnumber: ''};

  onSubmitRegisterForm(form: NgForm)
  {
    console.log(form.value);
    this.employeeService.insertEmployee(form.value);
  }
}
