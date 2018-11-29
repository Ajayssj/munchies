import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrdersType } from './orders-interface';

@Component({
  selector: 'app-manage-subscription',
  templateUrl: './manage-subscription.component.html',
  styleUrls: ['./manage-subscription.component.css']
})

export class ManageSubscriptionComponent implements OnInit {
  orders: [OrdersType];
  constructor(private http: HttpClient, private router: Router) {
    // console.log(sessionStorage.getItem('isLoggedIn') == 'false');
    // if(sessionStorage.getItem('isLoggedIn') == 'false') {
    //   this.router.navigate(['/signIn']);
    // }
  }

  ngOnInit() {

    this.http.get('http://localhost:9191/api/order/getMyorders').subscribe((resData: any) => {
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
