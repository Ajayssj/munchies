import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrdersType } from './orders-interface';
import { AuthService } from '../auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-manage-subscription',
  templateUrl: './manage-subscription.component.html',
  styleUrls: ['./manage-subscription.component.css']
})

export class ManageSubscriptionComponent implements OnInit {
  orders: [OrdersType];
  alertText: String;
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) {
    // console.log(sessionStorage.getItem('isLoggedIn') == 'false');
    // if(sessionStorage.getItem('isLoggedIn') == 'false') {
    //   this.router.navigate(['/signIn']);
    // }
  }

  ngOnInit() {

    // this.http.get(this.auth.getDomainName() + '/api/order/getMyOrders').subscribe((resData: any) => {
    this.http.get(this.auth.getDomainName() + '/api/plan/active/5bfbdcc51efad521746223ae').subscribe((resData: any) => {
      console.log('loll', resData);
      this.orders = resData.data;
    }, error => {
      console.log('error', 'Allow Signup', 'Server Error');
    });
  }
  // logout() {
  //   sessionStorage.setItem('isLoggedIn', "false");
  //   sessionStorage.removeItem('token');
  //   this.router.navigate(['/signIn']);
  // }
  skipWeekAction(order, index, alertModal) {
    var actpId = order._id;
    var weekNo = order.weeks;
    const isSkipRes = this.isSkip(order.skipedWeeks,index);
    console.log(actpId, weekNo);
    if (isSkipRes) {
      this.http.put(this.auth.getDomainName() + '/api/plan/active/'+actpId+'/undo-skip-week/'+index,{}).subscribe((res: any) => {
        console.log("skipWeek",res);
        if (res.success) {
          this.alertText = "Week Added Successfully!";
          this.openModal(alertModal);
          // alert('Week Added Successfully!');
        } else if (res.error) {
          // alert(res.error);
          this.alertText = res.error;
          this.openModal(alertModal);
        }
      },
        err=> {
        console.log("skipWeek err",err);
      });
    } else {
      this.http.put(this.auth.getDomainName() + '/api/plan/active/'+actpId+'/skip-week/'+index,{}).subscribe((res: any) => {
        console.log("skipWeek",res);
        if (res.success) {
          this.alertText = 'Week Skiped Successfully!';
          this.openModal(alertModal);
          // alert('Week Skiped Successfully!');
        } else if (res.error) {
          // alert(res.error);
          this.alertText = res.error;
          this.openModal(alertModal);
        }
      },
        err=> {
        console.log("skipWeek err",err);
      });
    }
  }

  getActiveWeek(startDate,numOfWeeks){
    console.log("startDate,numOfWeeks",startDate,numOfWeeks);
    var start:any = new Date(startDate);
    var end:any = new Date(this.generateLastWeekDate(start,numOfWeeks));
    return Math.ceil(Math.abs(Math.floor(( start - end ) / 86400000)) / 7);
  }

  generateLastWeekDate(startDate,numOfWeeks){
    return startDate.setDate(startDate.getDate() + (numOfWeeks * 7));
  }

  skeepWeekBtns(orderId, skipedWeeks, numOfWeeks){
    
    var swStr = "";
    for (let nw = 1; nw < numOfWeeks; nw++) {
      for (let skw = 0; skw < skipedWeeks.length; skw++) {
        if (nw == skipedWeeks[skw]) {
          swStr += "";
        } else {
          swStr += "<button (click)='skipWeek("+orderId+","+numOfWeeks+")' class='btn btn-success'><i class='fa fa-check fa-fw'></i>"+nw+"</button>";
        }
      }
    }
    console.log(swStr);
    return swStr;
  }

  // getWeekNummber() {

  // }

  skipWeek(param){
    console.log("skweek",param);
  }

  isSkip = (skipWeek,index) => skipWeek.indexOf(index) > -1;

  getWeekArray = (weekNo) => new Array(weekNo);

  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
    window.location.reload();
    // this.router.navigate(['/manage-subscription']);
  }

  onClose() {
    window.location.reload();
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }

}
