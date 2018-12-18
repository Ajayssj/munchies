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
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomSearchPipe } from '../pipe/custom-search.pipe';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing,
        ModalModule,
        SelectModule,
        Ng2OrderModule,
        Ng2SearchPipeModule
    ],
    declarations: [
        CompanyComponent,
        ModalsComponent,
        FormComponent,
        FormInputsComponent,
        MultipleSelectComponent,
        CustomSearchPipe
    ]
})
export class CompanyModule { }
