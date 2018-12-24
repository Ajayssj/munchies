import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../user/auth.service';

@Component({
  selector: 'app-custinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css']
})
export class CustomerinfoComponent implements OnInit {
  customer = {};
  constructor(private http: HttpClient, private auth: AuthService, private router: Router,
  private activatedRoute: ActivatedRoute) { }
  // @HostListener('document:keypress', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   console.log(event.key === 'Delete');
  //   let x = event.keyCode;
  //   if (x === 27) {
  //       console.log('Escape!');
  //   }
  // }
  ngOnInit() {
    const routeParams = this.activatedRoute.snapshot.params;
    console.log(routeParams)
    this.http.get(this.auth.getDomainName() + '/api/plan/customer/info/' + routeParams.activePlanId).subscribe((res: any)=> {
      console.log(res);
      this.customer = res.data[0];
    },
    err => {

    });
    // this.customer = 
    // this.http.get(this.auth.getDomainName() + '/api/order/getAllOrders').subscribe((res: any) => {
    //   console.log("cust",res.data);
    //   this.users = res.data;
    // },
    //   err=> {
    //   console.log(err);
    // });
  }
  
  // endDate = currentDate
  getActiveWeek(startDate) {
    let start : any = new Date(startDate);
    let today : any = new Date();
    if( this.getCoreDate() >= this.getCoreDate(start))
      return Math.ceil(Math.abs(Math.floor(( start - today ) / 86400000)) / 7);
    else
      return 0;
  }
  
  getCoreDate(date = new Date(new Date().toUTCString())){
    // return (new Date(new Date(new Date( new Date(date).setHours(0)).setMinutes(0)).setSeconds(0)))
    return new Date(date.toLocaleDateString());
  }
  navigateBack() {
    window.history.back();
  }
}
