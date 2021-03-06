import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerplanComponent } from './customerplan/customerplan.component';
import { CustomerplanweekComponent } from './customerplanweek/customerplanweek.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';

const childRoutes: Routes = [
    {
        path: '',
        component: CustomerComponent,
        children: [
            { path: '', component: CustomerdetailsComponent, pathMatch: 'full' },
            { path: 'customerInfo/:activePlanId', component: CustomerinfoComponent },
            { path: 'cust/:custid/plan/:planid', component: CustomerplanComponent },
            { path: 'cust/:custid/plan/:planid/week/:weekid', component: CustomerplanweekComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
