import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

//import { CompanyComponent } from './company/company.component';
//import { SnacksComponent } from './snacks/snacks.component';
// import { CustomerComponent } from './customer/customer.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing
    ],
    declarations: [
        PagesComponent,
        LoginComponent
    ],
    providers: [
        
    ]
})
export class PagesModule { }
