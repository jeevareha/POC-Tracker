import { Component } from '@angular/core';
import { RegistrationPage } from './registration-page/registration-page.component';
import { RouterModule }   from '@angular/router';
import { Login } from "./login/login.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //regPage : RegistrationPage;
  title = 'POC Tracker';
  

}
