import { Component, OnInit } from '@angular/core';
import { ChartsService } from './pieCharts.service';

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
  monthWiseTrafficOption;
  constructor(private chartsService: ChartsService) {
    this.planSelectedOptions = this.chartsService.getpPlanSelectedOptionsOption(); 
    this.allergyOptions = this.chartsService.getpAllergyOptionsOption(); 
    this.fruitOptions = this.chartsService.getpFruitOptionsOption(); 
    this.monthWiseTrafficOption = this.chartsService.getMonthWiseTrafficOptionsOption(); 
  }
  width: number;
  ngOnInit() {
    this.width = 40;
  }
  
}
