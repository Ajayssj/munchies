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

    this.http.get(this.auth.getDomainName() + '/api/order/getMyOrders').subscribe((resData: any) => {
    // this.http.get(this.auth.getDomainName() + '/api/plan/active/5bfbdcc51efad521746223ae').subscribe((resData: any) => {
      console.log('loll', resData.orderData);
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
  skipNextWeek(order, index, alertModal) {
    var actpId = order.plans._id;
    var weekNo = order.plans.weeks;
    var actweek = this.getActiveWeek(order.plans.startDate,order.plans.weeks);
    console.log(actpId, weekNo);
    // this.http.put(this.auth.getDomainName() + '/api/plan/active/'+actpId+'/skip-week/'+index,{}).subscribe((res: any) => {
    //   console.log("skipWeek",res);
    //   if (res.success) {
    //     this.alertText = 'Week Skiped Successfully!';
    //     this.openModal(alertModal);
    //     // alert('Week Skiped Successfully!');
    //   } else if (res.error) {
    //     // alert(res.error);
    //     this.alertText = res.error;
    //     this.openModal(alertModal);
    //   }
    // },
    //   err=> {
    //   console.log("skipWeek err",err);
    // });
  }

  // skipWeekAction(order, index, alertModal) {
  //   var actpId = order.plans._id;
  //   var weekNo = order.plans.weeks;
  //   var actweek = this.getActiveWeek(order.plans.startDate,order.plans.weeks);
  //   const isSkipRes = this.isSkip(order.plans.skipedWeeks,index);
  //   console.log(actpId, weekNo);
  //   if (actweek < index) {
  //     if (isSkipRes) {
  //       this.http.put(this.auth.getDomainName() + '/api/plan/active/'+actpId+'/undo-skip-week/'+index,{}).subscribe((res: any) => {
  //         console.log("skipWeek",res);
  //         if (res.success) {
  //           this.alertText = "Week Added Successfully!";
  //           this.openModal(alertModal);
  //           // alert('Week Added Successfully!');
  //         } else if (res.error) {
  //           // alert(res.error);
  //           this.alertText = res.error;
  //           this.openModal(alertModal);
  //         }
  //       },
  //         err=> {
  //         console.log("skipWeek err",err);
  //       });
  //     } else {
  //       this.http.put(this.auth.getDomainName() + '/api/plan/active/'+actpId+'/skip-week/'+index,{}).subscribe((res: any) => {
  //         console.log("skipWeek",res);
  //         if (res.success) {
  //           this.alertText = 'Week Skiped Successfully!';
  //           this.openModal(alertModal);
  //           // alert('Week Skiped Successfully!');
  //         } else if (res.error) {
  //           // alert(res.error);
  //           this.alertText = res.error;
  //           this.openModal(alertModal);
  //         }
  //       },
  //         err=> {
  //         console.log("skipWeek err",err);
  //       });
  //     }
  //   } else {
  //     this.alertText = "This week is over!";
  //     this.openModal(alertModal);
  //   }
    
  // }

  // skipWeek(param){
  //   console.log("skweek",param);
  // }

  // isSkip = (skipWeek,index) => skipWeek.indexOf(index) > -1;
  isSkip(skipWeek,index){
    for (let skw = 0; skw < skipWeek.length; skw++) {
      // skipWeek[skw].wNo
      // skipWeek[skw].wId
      if (skipWeek[skw].wNo == index) {
        return true;
      }
    }
    return false;
  }

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

  getNextMondayDate(date) {
    return date.setDate(date.getDate() + (1 + 7 - date.getDay()) % 7);
  }

  getActiveWeek(startDate,numOfWeeks){
    console.log("startDate,numOfWeeks",startDate,numOfWeeks);
    var end;
    var start;
    end = this.generateLastWeekDate(startDate,numOfWeeks);
    start = new Date(startDate);
    console.log("start,end",start, end);
    // return Math.ceil(Math.abs(Math.floor(( start - end ) / 86400000)) / 7);
    return this.getWeeksArrayForActiveWeek(start, end);
  }

  generateLastWeekDate(startDate,numOfWeeks){
    startDate = new Date(startDate);
    return new Date(startDate.setDate(startDate.getDate() + (numOfWeeks * 7)));
  }

  getMonday(){
    var d = new Date();
    var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  getWeeksArrayForActiveWeek(start, end) {
    var sDate;
    var eDate;
    var dateArr = [];
    while(start <= end){
      if (start.getDay() == 1 || (dateArr.length == 0 && !sDate)){
        sDate = new Date(start.getTime());
      }
      if ((sDate && start.getDay() == 0) || start.getTime() == end.getTime()){
            eDate = new Date(start.getTime());
      }
      if(sDate && eDate){
        dateArr.push({'startDate': sDate, 'endDate': eDate});
        sDate = undefined;
        eDate = undefined;
      }
      start.setDate(start.getDate() + 1);
    }
    var currentMonday = this.getMonday();
    console.log(currentMonday,dateArr);
    for (let da = 0; da < dateArr.length; da++) {
      const strd = dateArr[da].startDate;
      if (currentMonday.toUTCString().split(' ', 4).join(' ') == strd.toUTCString().split(' ', 4).join(' ')) {
        return da+1;
      }
    }
    return "Plan will be Activated from next week";
  }

  // skeepWeekBtns(orderId, skipedWeeks, numOfWeeks){
    
  //   var swStr = "";
  //   for (let nw = 1; nw < numOfWeeks; nw++) {
  //     for (let skw = 0; skw < skipedWeeks.length; skw++) {
  //       if (nw == skipedWeeks[skw]) {
  //         swStr += "";
  //       } else {
  //         swStr += "<button (click)='skipWeek("+orderId+","+numOfWeeks+")' class='btn btn-success'><i class='fa fa-check fa-fw'></i>"+nw+"</button>";
  //       }
  //     }
  //   }
  //   console.log(swStr);
  //   return swStr;
  // }
}
