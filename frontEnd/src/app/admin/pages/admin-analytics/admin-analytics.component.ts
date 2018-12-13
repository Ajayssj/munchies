import { Component, OnInit } from '@angular/core';
import { ChartsService } from './pieCharts.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../user/auth.service';

@Component({
  selector: 'app-admin-analytics',
  templateUrl: './admin-analytics.component.html',
  styleUrls: ['./admin-analytics.component.css'],
  providers: [ChartsService]
})
export class AdminAnalyticsComponent implements OnInit {
  planSelectedOptions;
  allergyOptions;
  fruitOptions;
  width: number;
  totalAreaCount=0;
  areaInfo = [];
  monthWiseTrafficOption;
  Math: any;
  constructor(private chartsService: ChartsService, private http: HttpClient, private auth: AuthService) {
    this.planSelectedOptions = this.chartsService.getpPlanSelectedOptionsOption(); 
    this.allergyOptions = this.chartsService.getpAllergyOptionsOption(); 
    this.fruitOptions = this.chartsService.getpFruitOptionsOption(); 
    this.monthWiseTrafficOption = this.chartsService.getMonthWiseTrafficOptionsOption(); 
    console.log("plan", this.planSelectedOptions);
    this.Math = Math;
  }
  ngOnInit() {
    this.http.get(this.auth.getDomainName() + '/api/analysis/most/delivered/area')
    .subscribe((res: any) => {
        console.log(res.data);
        res.data.forEach(area => {
            // this.planSelectedOptions.legend.data.push(plan.planInfo.title);
            // this.planSelectedOptions.series[0].data.push({ value: plan.count, name: plan.planInfo.title });
            this.totalAreaCount += area.count;
            this.areaInfo.push({areaName: area._id, count: area.count});
        });
    },
    err => {

  });
  this.width = 40;
}
  
}
