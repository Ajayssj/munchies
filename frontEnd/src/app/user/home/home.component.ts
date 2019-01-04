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
    if(email == '') {
      this.errorMessage = 'Please Enter Email Address';
    }
    else {
      this.http.get( this.authService.getDomainName() +  '/public/api/mailchimp/subscribeUser/' + email ,{}).subscribe((res : any) => {
        
        console.log(res);
        if(!res.isError) {     
          console.log(email);
          this.errorMessage = '';
          this.successMessage = res.body.title;
        }
        else{
          // console.log('Error : ', res.reason)
        }     

      },err => {

      })
    }
  }

}
