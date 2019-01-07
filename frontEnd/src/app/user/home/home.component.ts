import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscribeEmail = '';
  successMessage = '';
  errorMessage = '';
  constructor(private http : HttpClient, private authService : AuthService,private router: Router) { 

  }
  email : string;
  ngOnInit() {
  }
  mailchimp(email,name){
    this.errorMessage = '';
    this.successMessage = '';
    if(email == '') {
      this.errorMessage = 'Please Enter Email Address';
    }
    else {
      this.http.get( this.authService.getDomainName() +  '/public/api/mailchimp/subscribeUser/' + email,{params:{name:name}}).subscribe((res : any) => {
        
        console.log(res);
        if(res.isError) {     
          console.log(email);
          console.log(name);
          this.errorMessage = res.reason;
        }else if(res.body.status == 400 || res.body.status == 401){
          this.errorMessage = res.body.title;
          // console.log('Error : ', res.reason)
        }else{
          this.successMessage = 'User Subscribed';
          this.router.navigate(['/thank-you-mailchimp']);
        }     

      },err => {

      })
    }
  }

}
