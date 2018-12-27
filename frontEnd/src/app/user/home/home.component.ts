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
  constructor(private http : HttpClient, private authService : AuthService) { 

  }
  email : string;
  ngOnInit() {
  }
  mailchimp(email){
    this.http.get( this.authService.getDomainName() +  '/api/mailchimp/subscribeUser/' + email ,{}).subscribe((res : any) => {
       
      console.log(res.body.status);
      if(!res.isError) {     
        console.log(email);
        this.successMessage = 'Success';
      }
      else{
        // console.log('Error : ', res.reason)
      }     

    },err => {

    })
  }

}
