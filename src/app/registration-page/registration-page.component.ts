import { Component } from '@angular/core';
//import { RouterModule, ActivatedRoute, ParamMap, Router }   from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  //styleUrls: ['.../styles.css']
})
export class RegistrationPage {
 
  powers = ['Services', 'Front End', 'Backend'];
  
   hero = {name: '', alterEgo: '', email: '', password: '', power: this.powers[0], phnumber: ''};
 
}
