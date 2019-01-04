import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscribeEmail = '';
  successMessage = '';
  errorMessage = '';
  constructor(private http : HttpClient, private authService : AuthService) { 

  }
  email : string;
  ngOnInit() {
  }
  mailchimp(email){
    this.errorMessage = '';
    this.successMessage = '';
    if(email == '') {
      this.errorMessage = 'Please Enter Email Address';
    }
    else {
      this.http.get( this.authService.getDomainName() +  '/public/api/mailchimp/subscribeUser/' + email ,{}).subscribe((res : any) => {
        
        console.log(res);
        if(res.isError) {     
          console.log(email);
          this.errorMessage = res.reason;
        }else if(res.body.status == 400 || res.body.status == 401){
          this.errorMessage = res.body.title;
          // console.log('Error : ', res.reason)
        }else{
          this.successMessage = 'User Subscribed';
        }     

      },err => {

      })
    }
  }

}
