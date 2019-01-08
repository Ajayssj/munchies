import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
interface Res {
  success: boolean;
  error: string;
  message : string;
}
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm : FormGroup;
  submitted = false;
  success = false;
  error = '';
  message = '';
  data = {};
  password = '';
  confirmPassword = '';
  passwordNotMatch = false;
  token = '';
  expiry = '';
  constructor(
    private route : ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router, 
    private http: HttpClient,
    private authService : AuthService
  ) { }

  ngOnInit() {
      this.resetPasswordForm = this.formBuilder.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
    });
    this.token = this.route.snapshot.params["token"];
    this.expiry = this.route.snapshot.params["expiry"];
  }
  resetForm(){
    this.submitted = false;
    this.resetPasswordForm.reset();
    // this.submitted = false;
  }
  get f() { return this.resetPasswordForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      return;
    }
    else {
      this.password = this.resetPasswordForm.get('password').value;
      this.confirmPassword = this.resetPasswordForm.get('confirmPassword').value;
      if(this.password != this.confirmPassword) {
        this.passwordNotMatch = true;
        return;
      }
      else {
        this.passwordNotMatch = false;
        this.data = {
          'password': this.password,
          'token' : this.token,
          'expiry' : this.expiry
        }
        this.http.post(this.authService.getDomainName() + '/public/api/user/password/reset', this.data).subscribe( (data:Res) => {
            this.success = data.success;
            this.error = data.error;
            // this.router.navigate(['/sign-up']);
            if(this.success){
              this.message = data.message
              
            setTimeout(() => {
              this.resetForm();
            },3000)
            }
          },
          error => {
            this.error = error;
          }
        );
      }
    }
  }
  // this.route.snapshot.params["page"]
}
