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

  constructor(public afAuth: AngularFireAuth, public http: HttpClient) {
  }

  isLoggedIn() {
    return localStorage.getItem("isLoggedIn");
  }
  getUserName() {
    return localStorage.getItem('username');
  }
  getDomainName() {
   return "https://dev-munchies.herokuapp.com";
    //  return "http://localhost:9191";
  }

  setLoggedIn(value) {
    localStorage.setItem("isLoggedIn", value);
  }
  setUserName(value) {
    localStorage.setItem('username', value);
  }
  verifyFirebaseToken = function (token, callback) {
    this.http.post(this.getDomainName() + '/api/user/verifyFirebaseToken', {token}).subscribe(resData => {
      console.log("data",resData);
      callback(resData);
    }, error => {
      console.log('error', 'Allow Signup', 'Server Error');
    });
  }
  doFacebookLogin() {
    const that = this;
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(fbres => {
          
          firebase.auth().currentUser.getIdToken(true).then(idToken => {
            that.verifyFirebaseToken(idToken, function (res) {
              console.log("res data",res);
              if (res.success) {
                var token = {
                  token: res
                  }
                  resolve(fbres)
                
                 
                console.log("verifyFirebaseToken response  ", token);
              } else {
                alert("Problem while login");
                console.log("res",res);
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
        }, error => {
          reject(error);
        });
    
    });
  }
  doGoogleLogin() {
    const that = this;
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      provider.addScope('https://www.googleapis.com/auth/plus.profile.emails.read');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(fbres => {
    
          firebase.auth().currentUser.getIdToken(true).then(idToken => {
            console.log("firbase login idToken==>", idToken );
          that.verifyFirebaseToken(idToken, function (res) {
            console.log("res data",res);
            if (res.success) {
              var token = {
                token: res
                }

                resolve(fbres);
         
               
              console.log("verifyFirebaseToken response  ", token);
            } else {
              alert("Problem while login");
              console.log("res",res);
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
        }, err => {
          reject(err);
        });
      
      
    });
  }

  
}
