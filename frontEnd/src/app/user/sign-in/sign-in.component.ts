import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { from } from 'rxjs';
import { Subject } from "rxjs/Subject";
import { first } from 'rxjs/operators';
interface SignInRes {
  success: boolean;
  error: string;
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient, private authService: AuthService) {
  }
  fbLogin() {
    this.authService.doFacebookLogin();
  }
  googleLogin() {
    this.authService.doGoogleLogin();
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
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.username = this.loginForm.get('username').value;
      this.password = this.loginForm.get('password').value;
      console.log(this.username + "\n");
      console.log(this.password);
      this.http.post('https://dev-munchies.herokuapp.com/api/user/login', { 'email': this.username, 'password': this.password }).subscribe((data: SignInRes) => {
        console.log("PATCH Request is successful ", data);
        this.success = data.success;
        this.error = data.error;
        if (data.success) {
          this.authService.setLoggedIn(true);
          console.log("gooooddddd");
          // this.http.get('https://dev-munchies.herokuapp.com/api/order/getMyorders').subscribe(resData => {
          //   console.log(resData);
          // }, error => {
          //   console.log('error', 'Allow Signup', 'Server Error');
          // });
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

}
