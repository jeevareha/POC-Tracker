import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeModel } from '../shared/employee.model';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../Login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html'
})
export class MyProfilePageComponent implements OnInit {


  employeeList: EmployeeModel[];
  currentEmp: any;
  emp: EmployeeModel;
  email: any;
  userId: string;
  testCurrent: any;
  currEmployee: AngularFireList<any> = null;

  constructor(private employeeService: EmployeeService,
              private auth: AuthService,
              private afAuth: AngularFireAuth,
              private firebase: AngularFireDatabase) {
    // this.currUser = this.login.currentUser;
    // console.log('Current User : ', this.currUser);
  }

  ngOnInit() {
    this.currentEmp = firebase.auth().currentUser;

    if (this.currentEmp != null) {
      this.email = this.currentEmp.email;  // email field here capture the current logged in employee
    }
    console.log('Current User : ');
    console.log(this.email);

    this.afAuth.authState.subscribe(user => {
      // tslint:disable-next-line:curly
      if (user) this.userId = user.uid;
      this.searchCurrentUser(this.userId);

    });
    console.log('UID INIT :');
    console.log(this.userId);

  }

  searchCurrentUser(userId: any) {
    // console.log('UID :', userId);
    // this.currEmployee = this.firebase.list(`employees/ ${userId}`, temp => {
    //   let q = temp.limitToLast(10);
    //   return q;
    // });
    //   console.log('CURRENT EMPLOYEE');
    //   console.log(this.currEmployee);
    //   return this.currEmployee;
    


    this.currentEmp = firebase.auth().currentUser;
    if (this.currentEmp) {
      this.testCurrent = firebase.database().ref('employees/' + this.currentEmp.uid);
      this.testCurrent.once('value', function (snapshot) {
      console.log(snapshot.val()); // returns net_worth, etc
  });
}


  }

  }

