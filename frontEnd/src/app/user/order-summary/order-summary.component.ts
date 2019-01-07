import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  selectedPlanId = '';
  selectedPlan = '';
  question1 = '';
  question2 = '';
  question3 = '';
  customerData: any;
  planTitle = '';
  couponCode = '';
  subTotal: number;
  discount: number = 0;
  coupanId = '';
  coupanCodeError = '';
  extraInfo = [];
  coupanCodeSuccess = '';
  greenTea = '';
  weeks: number;
  urlParams: any;
  deliveryCharge: number;
  greenTeaCharge: number;
  constructor(
    private http: HttpClient, 
    private router: Router,
    private route: ActivatedRoute, 
    private auth: AuthService) { }

  ngOnInit() {
    this.customerData = JSON.parse(this.auth.getCustomerData());
    this.urlParams = JSON.parse(this.auth.getQueryParams());
    console.log(this.urlParams);
    this.deliveryCharge = this.urlParams.deliveryCharge;
    this.greenTeaCharge = this.urlParams.greenTeaCharge;
    if(this.customerData == null) {
      this.router.navigate(['/subscribe']);
    }
    else {
        this.selectedPlanId = this.urlParams.selectedPlan;
        this.planTitle = this.urlParams.selectedPlanName;
        console.log(this.planTitle);
        var question1 = this.urlParams.q1;
        var question2 = this.urlParams.q2;
        var question3 = this.urlParams.q3;
        if(question1 && question1.length > 0)  {
          question1.split(',').forEach(item => this.extraInfo.push({type: 'allergic', value: item}) )
          
        }
        if(question2 && question2.length > 0)  {
          question2.split(',').forEach(item => this.extraInfo.push({type: 'fruits', value: item}) )
        }
        if(question3 && question3.length > 0)  {
          question3.split(',').forEach(item => this.extraInfo.push({type: 'green_tea', value: item}) )
        }
        console.log(this.extraInfo);
        this.extraInfo.forEach(info=> {
          if(info.type == "green_tea") {
            this.greenTea = info.value;
          }
        });
        if(this.planTitle == 'Trial Week') {
          this.weeks = 1;
        }
        else if(this.planTitle == 'For 4 Weeks') {
          this.weeks = 4;
        }
        else {
          this.weeks = 12;
        }
        console.log(this.weeks);
        
        if(this.greenTea == 'Yes') {
          this.subTotal = (JSON.parse(this.urlParams.selectedPlanRate) + (this.deliveryCharge * this.weeks) + (this.greenTeaCharge * this.weeks));
        }
        else {
          this.subTotal = (JSON.parse(this.urlParams.selectedPlanRate) + (this.deliveryCharge * this.weeks));
        }
        console.log(this.subTotal);
        this.customerData['planId'] = this.selectedPlanId;
        this.customerData['extraInfo'] = this.extraInfo;
        // if(extraInfo && extraInfo[0]) {
        //   this.question1 = extraInfo[0].value;
        // }
        // if(extraInfo && extraInfo[1]) {
        //   this.question2 = extraInfo[1].value;
        // }
        // if(extraInfo && extraInfo[2]) {
        //   this.question3 = extraInfo[2].value;
        // }
        // console.log(this.customerData.planId)
        // console.log(this.question1)
        // console.log(this.question2)
        // console.log(this.question3)
        // console.log(this.customerData);
        // delete this.customerData.planName;
        // console.log(this.customerData);
    }
  }
  createOrder() {
    if(!this.coupanCodeError || this.couponCode == '') {
    this.customerData['coupanId'] = this.coupanId;
    console.log("hiiiiii", this.customerData);
    this.http.post(this.auth.getDomainName() + '/api/order/createOrder', this.customerData).subscribe((res : any) => {
      console.log("order created", res);
      if(res.success) {
        this.router.navigate(['/thank-you']);
      }
    },
      err => {
        if(err.status == 401)
          alert(err.error.error);
        console.log(err);
        this.router.navigate(['/signIn'], {queryParams: {backPage: "order-summary"}});
      });
    }
  }
  applyCoupon(code) {
    this.http.put(this.auth.getDomainName() + '/api/coupan/apply', {coupan: code}).subscribe((res: any) => {
      console.log(res);
      if(res.success) {
        this.coupanCodeError = '';
        this.coupanId = res.data._id;
        if(res.data.type == 2) {
          this.discount = res.data.discount;
        }
        else {
          this.discount = (this.subTotal * res.data.discount) / 100;
        }
        this.coupanCodeSuccess = 'Coupan code applied successfully';
      }
      else {
        this.coupanCodeSuccess = '';
        this.coupanCodeError = res.error;
        console.log(this.coupanCodeError);
        this.subTotal = this.subTotal;
        console.log(this.subTotal);
      }
    },
    err => {

    })
  }
}
