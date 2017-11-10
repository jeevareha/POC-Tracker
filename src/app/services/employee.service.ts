import { Injectable } from '@angular/core';
import { EmployeeModel } from '../shared/employee.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class EmployeeService {

  employeeList: AngularFireList<any> = null;
  currentEmployee: EmployeeModel = new EmployeeModel();
  employeeList1;
  constructor(private firebase: AngularFireDatabase) { }

getData() {
  this.employeeList = this.firebase.list('employees', ref => {
    let q = ref.limitToLast(10)//.startAt(start).endAt(end);
    return q;
  });
  return this.employeeList;
}

  insertEmployee(employee: EmployeeModel)
  {
    let x = this.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList1 = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeeList1.push(y as EmployeeModel);
      }
      );
    });

    this.employeeList.push({
      name: employee.name,
      EmpId: employee.EmpId,
      email: employee.email,
      phnumber: employee.phnumber,
      // portfolio: employee.portfolio
    })
  }

  removeAll() {
    this.employeeList = this.firebase.list('employees');
    this.employeeList.remove();
    console.log('List deleted')
  }
}