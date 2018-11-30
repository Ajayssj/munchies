import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrdersType } from './orders-interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-manage-subscription',
  templateUrl: './manage-subscription.component.html',
  styleUrls: ['./manage-subscription.component.css']
})

export class ManageSubscriptionComponent implements OnInit {
  orders: [OrdersType];
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) {
    // console.log(sessionStorage.getItem('isLoggedIn') == 'false');
    // if(sessionStorage.getItem('isLoggedIn') == 'false') {
    //   this.router.navigate(['/signIn']);
    // }
  }

  ngOnInit() {

    this.http.get(this.auth.getDomainName() + '/api/plan/active/null').subscribe((resData: any) => {
      console.log('loll', resData);
      this.orders = resData.orderData;
    }, error => {
      console.log('error', 'Allow Signup', 'Server Error');
    });
  }
  // logout() {
  //   sessionStorage.setItem('isLoggedIn', "false");
  //   sessionStorage.removeItem('token');
  //   this.router.navigate(['/signIn']);
  // }

}
