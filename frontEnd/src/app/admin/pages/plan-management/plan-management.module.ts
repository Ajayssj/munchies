import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './plan-management.routing';
import { SharedModule } from '../../shared/shared.module';
import { PlanManagementComponent } from './plan-management.component';
import { ModalModule } from 'ngx-modal';
import { AccordionModule } from 'ngx-accordion';
// import { AccordionGroupComponent } from './accordian/accordion-group.component';
// import { AccordionComponent } from './accordian/accordion.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing,
        ModalModule,
        AccordionModule
    ],
    declarations: [
        PlanManagementComponent
    ]
})
export class PlanManagementModule { }
