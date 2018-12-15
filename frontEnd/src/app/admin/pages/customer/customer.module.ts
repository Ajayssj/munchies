import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-modal';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './customer.routing';
import { SharedModule } from '../../shared/shared.module';
import { CustomerComponent } from './customer.component';
import { CustomerplanComponent } from './customerplan/customerplan.component';
import { CustomerplanweekComponent } from './customerplanweek/customerplanweek.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { NotificationComponent } from '../ui/components/notification/notification.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ModalModule,
        routing
    ],
    declarations: [
        CustomerComponent,
        CustomerdetailsComponent,
        CustomerplanweekComponent,
        CustomerplanComponent,
        CustomerinfoComponent,
        NotificationComponent
    ]
})
export class CustomerModule { }
