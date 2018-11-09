import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  username = '';
  password = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient) { 
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
    console.log(this.username +"\n");
    console.log(this.password);
    this.http.post('http://localhost:9191/api/user/login', {'email': this.username, 'password': this.password}).subscribe(data => {
        console.log("PATCH Request is successful ", data);
      },
      err => {
        console.log("Err", err);
      }
    );
    }
    
  } 

}
