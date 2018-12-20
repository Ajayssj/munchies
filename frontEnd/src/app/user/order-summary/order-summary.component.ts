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
  constructor(private http: HttpClient, private router: Router,
     private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {
    this.selectedPlanId = this.route.snapshot.queryParamMap.get('selectedPlan');
    this.question1 = this.route.snapshot.queryParamMap.get('question1');
    this.question2 = this.route.snapshot.queryParamMap.get('question2');
    this.http.get(this.auth.getDomainName() + '/api/plan/core').subscribe((res:any)=> {
    },
    err=> {

    })
  }

}
