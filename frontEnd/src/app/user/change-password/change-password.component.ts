import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

interface Res {
  success: boolean;
  error: string;
  message : string;
}
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  
  changePasswordForm: FormGroup;
  submitted = false;
  success = false;
  error = '';
  message = '';
  data = {};
  passwordNotMatch = false;
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private http : HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
      newPassword: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
      confirmPassword: ['', Validators.required]
  });
  }
  resetForm(){
    this.changePasswordForm.reset();
  }
  get f() { return this.changePasswordForm.controls; }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.changePasswordForm.invalid) {
      return;
    }
    else {
      this.currentPassword = this.changePasswordForm.get('currentPassword').value;
      this.newPassword = this.changePasswordForm.get('newPassword').value;
      this.confirmPassword = this.changePasswordForm.get('confirmPassword').value;
      if(this.confirmPassword != this.newPassword) {
        this.passwordNotMatch = true;
        return;
      }
      else {
        this.passwordNotMatch = false;
        this.data = {
          'currentPassword' : this.currentPassword,
          'newPassword': this.newPassword,
          'userId' : '5bd8445e2ee53b2af4b12107'
        }
        this.http.post(this.authService.getDomainName() + '/api/user/password/change', this.data).subscribe( (data:Res) => {
            this.success = data.success;
            this.error = data.error;
            // this.router.navigate(['/sign-up']);
            if(this.success){
              this.message = data.message
              this.resetForm();
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
