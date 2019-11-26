import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private angularAuth: AngularFireAuth) {}

  login() {
    this.angularAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        console.log('user info is ', res);
      });
  }
}
