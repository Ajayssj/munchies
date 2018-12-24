import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, Form, NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { from } from 'rxjs';
import { Subject } from "rxjs/Subject";
import { first } from 'rxjs/operators';
import swal from 'sweetalert2';
interface SignInRes {
  success: boolean;
  error: string;
  data : object;
}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  success = true;
  error = '';
  username = '';
  password = '';
  forgetPasswordMail = '';
  rememberMe = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient, private authService: AuthService) {
  }
  onChange(state : any) {
    this.rememberMe = state;
    console.log('Remember me : ', this.rememberMe);
  }
  async fbLogin() {
   let fbLoginRes = await this.authService.doFacebookLogin();
   if(fbLoginRes) {
       this.authService.setLoggedIn(true);
                  if(fbLoginRes.additionalUserInfo && fbLoginRes.additionalUserInfo.profile&&fbLoginRes.additionalUserInfo.profile.name) {
                    this.authService.setUserName(fbLoginRes.additionalUserInfo.profile.name);
                   window.location.pathname = "";
                  }
   }
   console.log("fbLogin",fbLoginRes )
  }
  
  async googleLogin() {
    let gLoginRes = await this.authService.doGoogleLogin();
    if(gLoginRes) {
        this.authService.setLoggedIn(true);
                   if(gLoginRes.additionalUserInfo && gLoginRes.additionalUserInfo.profile&&gLoginRes.additionalUserInfo.profile.name) {
                     this.authService.setUserName(gLoginRes.additionalUserInfo.profile.name);
                    window.location.pathname = "";
                   }
    }
    console.log("fbLogin",gLoginRes )
   }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = false;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.username = this.loginForm.get('username').value;
      this.password = this.loginForm.get('password').value;
      console.log(this.username + "\n");
      console.log(this.password);
      this.http.post(this.authService.getDomainName() + '/public/api/user/login', { 'email': this.username, 'password': this.password, rememberMe : this.rememberMe }).subscribe((data: any) => {
        console.log("PATCH Request is successful ", data);
        this.success = data.success;
        this.error = data.error;
        if (data.success) {
          this.authService.setLoggedIn(true);
          this.authService.setUserName(this.username);
          this.authService.setUserRole(data.data.role);
          
          console.log(this.authService.getUserName());
          console.log(this.username);
          if (this.authService.isLoggedIn()) {
            this.router.navigate(['/manage-subscription']);
          }
        }
        else {
          console.log("baddddddddddddd");
          return;
        }
      },
        err => {
          console.log("Err", err);
        }
      );
    }

  }

  sendForgetPasswordMail(forgetPasswordMail, forgetPasswordMailModal){
    console.log("forgetPasswordMail", forgetPasswordMail);
    

    // this.http.post(this.authService.getDomainName() + '/api/user/login', { 'email': this.username, 'password': this.password }).subscribe((data: SignInRes) => {
    //   console.log("is successful ", data);
    // },
    //   err => {
    //     console.log("Err", err);
    //   }
    // );
  }

  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
    window.location.reload();
    // this.router.navigate(['/manage-subscription']);
  }

  onClose() {
    window.location.reload();
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }

}
