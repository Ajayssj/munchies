import { Routes, RouterModule } from '@angular/router';
import { AdminAnalyticsComponent } from './admin-analytics.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AdminAnalyticsComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
