import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  msg: String;
  user: Observable<firebase.User>;
  
     constructor(private firebaseAuth: AngularFireAuth) {
      this.user = firebaseAuth.authState;
     }
      signup(email: string, password: string) {
        this.firebaseAuth
          .auth
          .createUserWithEmailAndPassword(email, password)
          .then(value => {
            console.log('Success!', value);
          })
          .catch(err => {
            console.log('Something went wrong:',err.message);
            
          });    
      }
    
      login(email: string, password: string) {
           var msg = this.firebaseAuth
          .auth
          .signInWithEmailAndPassword(email, password)
          .then(value => {
            console.log('Nice, it worked!');
            this.msg = "Success";
          }).catch(err => {
            console.log('Something went wrong:',err.message);
            this.msg = err.message; 
          });
          //let obj = JSON.parse(msg);
          console.log("MSG : "+msg);
        return this.msg;
        //this.firebaseAuth.auth.signInWithEmailAndPassword(email,password).then(response => {return response});
      }
          
      logout() {
        this.firebaseAuth
          .auth
          .signOut();
      }
      
    }

