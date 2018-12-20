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
  constructor(
    private http: HttpClient, 
    private router: Router,
    private route: ActivatedRoute, 
    private auth: AuthService) { }

  ngOnInit() {
    this.customerData = this.auth.getCustomerData();
    this.selectedPlanId = this.customerData.planId;
    var extraInfo = JSON.parse(this.customerData.extraInfo);
    this.question1 = extraInfo[0].value;
    this.question2 = extraInfo[1].value;
    console.log(this.customerData.planId)
    console.log(this.question1)
    console.log(this.question2)
    console.log(this.customerData)
    // this.http.get(this.auth.getDomainName() + '/api/plan/core').subscribe((res:any)=> {
    // },
    // err=> {

    // })
  }

}
