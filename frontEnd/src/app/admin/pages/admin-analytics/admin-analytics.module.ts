import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAnalyticsComponent } from './admin-analytics.component';
import { routing } from './admin-analytics.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

/* components */
import { EChartsComponent } from '../charts/components/echarts/echarts.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        routing
    ],
    declarations: [
        AdminAnalyticsComponent,
        EChartsComponent
    ]
})
export class AdminAnalyticsModule { }
