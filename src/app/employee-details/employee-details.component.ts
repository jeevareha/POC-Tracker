import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularFire2/database';
import { EmployeeService } from '../services/employee.service';
import { EmployeeModel } from '../shared/employee.model';
import { FilterPipe } from '../shared/Pipe';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html'
})
export class EmployeeDetailsComponent implements OnInit {

  employeeList: EmployeeModel[];

  constructor(private employeeService: EmployeeService, private authService: AuthService) {

  }

  ngOnInit() {
    let x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeeList.push(y as EmployeeModel);
      }
      );

    });
  }
  logout() {
    this.authService.logout();
  }

  deleteAll() {
    this.employeeService.removeAll();
  }

}
