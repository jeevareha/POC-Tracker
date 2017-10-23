import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularFire2/database';
import { EmployeeService } from '../services/employee.service';
import { EmployeeModel } from '../shared/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html'
})
export class EmployeeDetailsComponent implements OnInit {

  employeeList: AngularFireList<EmployeeModel>;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getData();
  }

}
