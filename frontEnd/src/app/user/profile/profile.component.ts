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
  phone = '';
  address = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient,
    private authService : AuthService) { }

  ngOnInit() {
    this.http.get(this.authService.getDomainName() + '/api/user/getUserInfo').subscribe( (res:any) => {
      console.log("success", res.data);
      this.firstName = res.data.firstName;
      this.lastName = res.data.lastName;
      this.email = res.data.email;
      this.phone = res.data.phone;
      this.address = res.data.address;
    },
    error => {
      this.error = error;
    });


    this.userProfileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      phone: ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('[0-9]+')  // validates input is digit
      ]],
      address: ['', [Validators.required]],
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
      // this.email = this.userProfileForm.get('email').value;
      this.phone = this.userProfileForm.get('phone').value;
      this.address = this.userProfileForm.get('address').value;
      this.data = {
        'firstName': this.firstName, 
        'lastName': this.lastName,
        // 'email': this.email,
        'phone': this.phone,
        'address': this.address,
      }
      console.log(this.data);
      this.http.put(this.authService.getDomainName() + '/api/user/editUserInfo', this.data).subscribe( (data:SignUpRes) => {
          console.log("success", data.success);
          this.success = data.success;
          this.error = data.error;
          
        },
        error => {
          this.error = error;
        }
      );
    }
    
  } 

}


