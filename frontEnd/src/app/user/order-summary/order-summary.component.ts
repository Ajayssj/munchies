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
  customerData: any;
  planTitle = '';
  constructor(
    private http: HttpClient, 
    private router: Router,
    private route: ActivatedRoute, 
    private auth: AuthService) { }

  ngOnInit() {
    this.customerData = JSON.parse(this.auth.getCustomerData());
    console.log(this.customerData)
    this.selectedPlanId = this.customerData.planId;
    this.planTitle = this.customerData.planName;
    var extraInfo = JSON.parse(this.customerData.extraInfo);
    console.log(extraInfo)
    if(extraInfo && extraInfo[0]) {
       this.question1 = extraInfo[0].value;
    }
    if(extraInfo && extraInfo[1]) {
      this.question2 = extraInfo[1].value;
    }
    console.log(this.customerData.planId)
    console.log(this.question1)
    console.log(this.question2)
    console.log(this.customerData);
    delete this.customerData.planName;
    console.log(this.customerData);
    this.customerData['coupanId'] = '';
  }
  createOrder() {
    console.log("hiiiiii", this.customerData)
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
