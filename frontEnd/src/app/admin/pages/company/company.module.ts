import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './company.routing';
import { SharedModule } from '../../shared/shared.module';
import { CompanyComponent } from './company.component';
import { ModalModule } from 'ngx-modal';
import { SelectModule } from 'ng2-select';
import { ModalsComponent } from '../ui/components/modals/modals.component';
import { FormComponent } from '../form/form.component';
import { FormInputsComponent } from '../form/components/form-inputs/form-inputs.component';
import { MultipleSelectComponent } from '../form/components/ng2-select/multiple-select/multiple-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing,
        ModalModule,
        SelectModule
    ],
    declarations: [
        CompanyComponent,
        ModalsComponent,
        FormComponent,
        FormInputsComponent,
        MultipleSelectComponent
    ]
})
export class CompanyModule { }
