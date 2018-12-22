import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

interface Res {
  success: boolean;
  error: string;
  message : string;
}
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm : FormGroup;
  submitted = false;
  email = '';
  success = false;
  error = '';
  message = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient,
    private authService : AuthService) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
  });
  }
  resetEmail(){
    this.submitted = false;
    this.forgotPasswordForm.reset()
  }
  get f() { return this.forgotPasswordForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    else {
      this.email = this.forgotPasswordForm.get('email').value;


      let data = {'email': this.email, 'siteUrl' : this.authService.getDomainName()};
      this.http.post(this.authService.getDomainName() + '/public/api/user/password/recover', data).subscribe( (data:Res) => {
          this.success = data.success;
          this.error = data.error;
          if(this.success){
            this.message = data.message;

            setTimeout(() => {
              this.resetEmail();
            },2000)
          }else{
            
          }
        },
        error => {
          this.error = error;
        }
        );
      }
    }
    
  } 
