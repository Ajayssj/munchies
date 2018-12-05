import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../user/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-plan-management',
  templateUrl: './plan-management.component.html',
  styleUrls: ['./plan-management.component.css']
})
export class PlanManagementComponent implements OnInit {

  constructor(private http: HttpClient, private auth: AuthService) { }
  selectPlan = '';
  allPlans: any;
  ngOnInit() {
    this.http.get(this.auth.getDomainName() + '/api/plan/core').subscribe(data=> {
      console.log(data);
      this.allPlans = data;
    }, 
    err=> {
      console.log(err);
    })
  }

}
