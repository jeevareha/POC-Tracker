import { Component } from '@angular/core';
//import { RouterModule, ActivatedRoute, ParamMap, Router }   from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  //styleUrls: ['.../styles.css']
})
export class RegistrationPage {
 
  portfolios = ['Services', 'Front End', 'Backend'];
  
   register = {name: '', EmpId: '', email: '', password: '', cpassword: '', portfolio: this.portfolios[0], phnumber: ''};
 
}
