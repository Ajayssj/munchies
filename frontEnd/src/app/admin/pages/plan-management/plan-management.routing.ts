import { Routes, RouterModule } from '@angular/router';
import { PlanManagementComponent } from './plan-management.component';

const childRoutes: Routes = [
    {
        path: '',
        component: PlanManagementComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
