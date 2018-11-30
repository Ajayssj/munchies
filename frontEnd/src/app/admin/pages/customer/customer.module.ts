import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './customer.routing';
import { SharedModule } from '../../shared/shared.module';
import { CustomerComponent } from './customer.component';
import { CustomerplanComponent } from './customerplan/customerplan.component';
import { CustomerplanweekComponent } from './customerplanweek/customerplanweek.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        CustomerComponent,
        CustomerdetailsComponent,
        CustomerplanweekComponent,
        CustomerplanComponent
    ]
})
export class CustomerModule { }
