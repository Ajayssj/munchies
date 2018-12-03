import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private http: HttpClient) {
  }

  isLoggedIn() {
    return localStorage.getItem("isLoggedIn");
  }

  getDomainName() {
    return "http://dev-munchies.herokuapp.com";
  }

  setLoggedIn(value) {
    console.log(value)
    localStorage.setItem("isLoggedIn", value);
  }
  varifyFirebaseToken = function (token, callback) {
    console.log("hiiiiiiiiiii");
    this.http.post('https://dev-munchies.herokuapp.com/api/user/verifyFirebaseToken', token).subscribe(resData => {
      console.log(resData);
      callback(resData);
    }, error => {
      console.log('error', 'Allow Signup', 'Server Error');
    });
  }
  doFacebookLogin() {
    console.log("in do fb login");
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(fbres => {
          console.log(fbres);
          resolve(fbres);
        }, error => {
          reject(error);
        });
      this.afAuth.auth.currentUser.getIdToken(true).then(idToken => {
        console.log("loginwithFacebook==>idToken", idToken);
        this.varifyFirebaseToken(idToken, function (result) {
          console.log(result.data);
          if (result.success) {
            var token = {
              token: result.data
            }
            console.log("varifyFirebaseToken response  ", result);
          } else {
            alert(result.data)
          }
          console.log(result);
        })

      }).catch(function (error) {
        alert(error)
        console.log("login Error==>", error);

      }).catch(function (error) {
        alert(error)
        console.log("login Error sign in popup==>", error);

      });
    });
  }
  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      provider.addScope('https://www.googleapis.com/auth/plus.profile.emails.read');
      provider.addScope('email');
      this.afAuth.auth.currentUser.getIdToken(true).then(idToken => {
        console.log("firbase login idToken==>", idToken);

        this.varifyFirebaseToken(idToken, function (res) {
          if (res.success) {
            var token = {
              token: res.data
            }
            console.log("varifyFirebaseToken response  ", res);
          } else {
            alert(res.data)
          }
          console.log(res);
        })


      }).catch(function (error) {
        alert(error)
        console.log("login Error==>", error);

      }).catch(function (error) {
        alert(error)
        console.log("login Error sign in popup==>", error);

      });
    });
  }

  /* varifyFirebaseToken = function(token, callback) {
     console.log("hiiiiiiiiiii");
    this.http.post('/user/varifyFirebaseToken', token).subscibe( data => {
      console.log("data", data);
      callback(data);
    }, error => {
      console.log("error", error);
    }
    );
  }
   doFacebookLogin() {
    console.log("in do fb login");
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    provider.setCustomParameters({
      'display': 'popup'
    });
  
    firebase.auth().signInWithPopup(provider).then(function(temp) {
      firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
        console.log("loginwithFacebook==>idToken",idToken,temp);
        this.varifyFirebaseToken(idToken, function(res) {
          if (res.success) {
            var token = {
              token: res.data
            }
            console.log("varifyFirebaseToken response  ",res);             
          } else {
            alert(res.data)
          }
          console.log(res);
        })
             
      }).catch(function(error) {
        // Handle error
        alert(error)
      });
    })
   } */
}
