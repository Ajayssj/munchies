import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './plan-management.routing';
import { SharedModule } from '../../shared/shared.module';
import { PlanManagementComponent } from './plan-management.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        PlanManagementComponent
    ]
})
export class PlanManagementModule { }
