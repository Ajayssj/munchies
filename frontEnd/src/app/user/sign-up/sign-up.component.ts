import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { from } from 'rxjs';
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
  //firstName = '';
 // lastName = '';
  //phone = '';
  email = '';
  password = '';
  //address = '';
  confirmPassword = '';
  passwordNotMatch = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient,
    private authService : AuthService) { }

  ngOnInit() {
    this.createAccountForm = this.formBuilder.group({
     // firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+')]],
      //lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.email]],
      password: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
      //phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      confirmPassword: ['', Validators.required],
     // address: ['']
   });
  }
  // convenience getter for easy access to form fields
  get f() { return this.createAccountForm.controls; }
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}
  onSubmit() {    
    this.submitted = false;
    if (this.createAccountForm.invalid) {
      return;
    }
    else {
     // this.firstName = this.createAccountForm.get('firstName').value;
     // this.lastName = this.createAccountForm.get('lastName').value;
      this.email = this.createAccountForm.get('email').value;
      this.password = this.createAccountForm.get('password').value;
      this.confirmPassword = this.createAccountForm.get('confirmPassword').value;
     // this.address = this.createAccountForm.get('address').value;
     // this.phone = this.createAccountForm.get('phone').value;
      if(this.password != this.confirmPassword) {
        this.passwordNotMatch = true;
        console.log(this.passwordNotMatch);
        return;
      }
      else {
        this.passwordNotMatch = false;
        this.data = {
         // 'firstName': this.firstName, 
         // 'lastName': this.lastName,
          'email': this.email,
          'password': this.password,
         // 'address': this.address,
         // 'phone': this.phone
         
        }
        console.log(this.data);
        this.http.post(this.authService.getDomainName() + '/public/api/user/register', this.data).subscribe( (data:SignUpRes) => {
            console.log("success", data.success);
            this.success = data.success;
            if(data.success){
              this.http.post(this.authService.getDomainName() + '/public/api/user/login', this.data).subscribe( (res: any) => {
                if(res.success){
                  this.authService.setLoggedIn(true);
                  this.authService.setUserName(res.data.email);
                  this.authService.setUserRole(res.data.role);
                  this.router.navigate(['/subscribe']);
                }
              },err => {})
            }else{
              this.error = data.error;
            }
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
