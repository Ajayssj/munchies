import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface SignUpRes {
  success: boolean;
  error: string;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})



export class SignUpComponent implements OnInit {
  createAccountForm : FormGroup;
  submitted = false;
  success = false;
  error = '';
  data = {};
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  passwordNotMatch = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.createAccountForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
  });
  }
  // convenience getter for easy access to form fields
  get f() { return this.createAccountForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createAccountForm.invalid) {
      return;
    }
    else {
      this.firstName = this.createAccountForm.get('firstName').value;
      this.lastName = this.createAccountForm.get('lastName').value;
      this.email = this.createAccountForm.get('email').value;
      this.password = this.createAccountForm.get('password').value;
      this.confirmPassword = this.createAccountForm.get('confirmPassword').value;
      if(this.password != this.confirmPassword) {
        this.passwordNotMatch = true;
        console.log(this.passwordNotMatch);
        return;
      }
      else {
        this.passwordNotMatch = false;
        this.data = {
          'firstName': this.firstName, 
          'lastName': this.lastName,
          'email': this.email,
          'password': this.password
        }
        console.log(this.data);
        this.http.post('http://localhost:9191/api/user/register', this.data).subscribe( (data:SignUpRes) => {
            console.log("success", data.success);
            this.success = data.success;
            this.error = data.error;
            this.router.navigate(['/sign-up']);
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, 0); // how far to scroll on each step
                console.log(pos);
            }
          },
          error => {
            this.error = error;
          }
        );
      }
    }
    
  } 

}
