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

  viewUserWeek(user) {
    var userId = user.user._id;
    var planId = user.planInfo.planId;
    var weekNo = user.planInfo.weeks;
    var activeplanID = user.planInfo._id;
    var weekIDArr = user.weekIds;
    var weekNoId = '';
    console.log(userId, planId, weekNo, activeplanID, weekIDArr);
    for (let wid = 0; wid < weekIDArr.length; wid++) {
      if (weekNo == weekIDArr[wid].week) {
        weekNoId =weekIDArr[wid]._id;
        break;
      }
    }
    this.router.navigateByUrl('/admin/pages/customer/cust/'+userId+'/plan/'+activeplanID+'/week/'+weekNoId);
  }
  viewUserPlan(userId, planId) {
    console.log(userId, planId);
    this.router.navigateByUrl('/admin/pages/customer/cust/'+userId+'/plan/'+planId);
  }

  changeView(view) {
    this.view = view;
  }
}
