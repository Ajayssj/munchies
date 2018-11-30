import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../user/auth.service';

@Component({
  selector: 'app-custdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  view: String = 'user';
  users = [];
  deleteMessage = '';
  data = {};
  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.http.get(this.auth.getDomainName() + '/api/order/getAllOrders').subscribe((res: any) => {
      console.log("cust",res.data);
      this.users = res.data;
    },
      err=> {
      console.log(err);
    });
  }

  viewUserWeek(userId, planId, weekNo) {
    console.log(userId, planId, weekNo);
    this.router.navigateByUrl('/admin/pages/customer/cust/'+userId+'/plan/'+planId+'/week/'+weekNo);
  }
  viewUserPlan(userId, planId) {
    console.log(userId, planId);
    this.router.navigateByUrl('/admin/pages/customer/cust/'+userId+'/plan/'+planId);
  }

  changeView(view) {
    this.view = view;
  }
}
