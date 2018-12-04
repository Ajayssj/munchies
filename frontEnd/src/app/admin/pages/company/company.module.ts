import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './company.routing';
import { SharedModule } from '../../shared/shared.module';
import { CompanyComponent } from './company.component';
import { ModalModule } from 'ngx-modal';
import { ModalsComponent } from '../ui/components/modals/modals.component';
import { FormComponent } from '../form/form.component';
import { FormInputsComponent } from '../form/components/form-inputs/form-inputs.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing,
        ModalModule
    ],
    declarations: [
        CompanyComponent,
        ModalsComponent,
        FormComponent,
        FormInputsComponent
    ]
})
export class CompanyModule { }
