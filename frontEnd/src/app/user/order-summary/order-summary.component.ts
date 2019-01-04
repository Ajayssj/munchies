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
  info = [];
  constructor(
    private http: HttpClient, 
    private router: Router,
    private route: ActivatedRoute, 
    private auth: AuthService) { }

  ngOnInit() {
    this.customerData = JSON.parse(this.auth.getCustomerData());
    if(this.customerData == null) {
      this.router.navigate(['/subscribe']);
    }
    else {
        console.log(this.customerData)
        this.selectedPlanId = this.customerData.planId;
        this.planTitle = this.customerData.planName;
        this.subTotal = this.customerData.planRate;
        var extraInfo = JSON.parse(this.customerData.extraInfo);
        this.info =extraInfo;
        console.log(extraInfo)
        extraInfo.forEach((extraInfo) => {
          
           this.info =extraInfo;
          
          console.log(extraInfo);
          console.log(extraInfo.value);
         
        });
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
      }
      else {
        this.coupanCodeError = res.error;
        console.log(this.coupanCodeError)
        this.subTotal = this.subTotal;
      }
      console.log(this.subTotal)
    },
    err => {

    })
  }
}
