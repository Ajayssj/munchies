import { Component, OnInit, OnChanges } from '@angular/core';
import { ChartsService } from './pieCharts.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../user/auth.service';

@Component({
  selector: 'app-admin-analytics',
  templateUrl: './admin-analytics.component.html',
  styleUrls: ['./admin-analytics.component.css'],
  providers: [ChartsService]
})
export class AdminAnalyticsComponent implements OnInit, OnChanges {
  GreenTeaSelectedOptions;
  planSelectedOptions;
  allergyOptions;
  fruitOptions;
  width: number;
  totalAreaCount=0;
  areaInfo = [];
  monthWiseTrafficOption;
  Math: any;
  numberOfSubscribers: number;
  orderValue: number;
  constructor(private chartsService: ChartsService, private http: HttpClient, private auth: AuthService) {
    this.Math = Math;
  }
  ngOnInit() {
    this.width = 40;
    this.chartsService.getAllPlans((options) => {
      this.planSelectedOptions = options;
      console.log(this.planSelectedOptions)
    });
    this.chartsService.getAllergic((options) => {
      this.allergyOptions = options;
    });
     this.chartsService.getFruitsLikedMost((options) => {
      this.fruitOptions = options;
    });
    this.chartsService.getGreentea((options) => {
      this.GreenTeaSelectedOptions = options;
    });
    console.log("plan", this.planSelectedOptions);
    this.http.get(this.auth.getDomainName() + '/api/analysis/most/delivered/area')
    .subscribe((res: any) => {
        console.log(res.data);
        this.totalAreaCount = res.data.reduce((a,b) => ({count: a.count + b.count})).count;
        console.log('Area Count  : ', this.totalAreaCount);
        res.data.forEach((area,index) => {
            // this.planSelectedOptions.legend.data.push(plan.planInfo.title);
            // this.planSelectedOptions.series[0].data.push({ value: plan.count, name: plan.planInfo.title });
            area.percent = (( area.count * 100) / this.totalAreaCount).toFixed(2);
            console.log('Percent  : ',  res.data[index].percent);
            this.areaInfo.push({areaName: area._id, count: area.count, percent: area.percent});
        });
    },
    err => {

  });
  this.http.get(this.auth.getDomainName() + '/api/analysis/subscribers')
  .subscribe((res:any) => {
    console.log(res.data.total);
    this.numberOfSubscribers = res.data.total;
  },
  err => {

  });
  this.http.get(this.auth.getDomainName() + '/api/analysis/total/order/value')
  .subscribe((res:any) => {
    console.log(res);
    this.orderValue = res.data.totalOrderValue;
  },
  err => {

  });
}
ngOnChanges() {  
}
  
}
