import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
interface SignUpRes {
  success: boolean;
  error: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfileForm : FormGroup;
  submitted = false;
  success = false;
  error = '';
  data = {};
  firstName = '';
  lastName = '';
  email = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient,
    private authService : AuthService) { }

  ngOnInit() {
    this.userProfileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
  });
  }
  // convenience getter for easy access to form fields
  get f() { return this.userProfileForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userProfileForm.invalid) {
      return;
    }
    else {
      this.firstName = this.userProfileForm.get('firstName').value;
      this.lastName = this.userProfileForm.get('lastName').value;
      this.email = this.userProfileForm.get('email').value;
      this.data = {
        'firstName': this.firstName, 
        'lastName': this.lastName,
        'email': this.email,
      }
      console.log(this.data);
      this.http.post(this.authService.getDomainName() + '/api/user/register', this.data).subscribe( (data:SignUpRes) => {
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


