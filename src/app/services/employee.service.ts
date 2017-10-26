import { Injectable } from '@angular/core';
import { EmployeeModel } from '../shared/employee.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class EmployeeService {

  employeeList: AngularFireList<any> = null;
  currentEmployee: EmployeeModel = new EmployeeModel();
  constructor(private firebase: AngularFireDatabase) { }

getData(){
  this.employeeList = this.firebase.list('employees');
  return this.employeeList;
}

  insertEmployee(employee: EmployeeModel)
  {
    this.employeeList.push({
      name: employee.name,
      EmpId: employee.EmpId,
      email: employee.email,
      phnumber: employee.phnumber,
      portfolio: employee.portfolio
    })
  }
}