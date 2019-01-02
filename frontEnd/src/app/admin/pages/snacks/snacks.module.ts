import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './snacks.routing';
import { SharedModule } from '../../shared/shared.module';
import { SnacksComponent } from './snacks.component';
import { ModalModule } from 'ngx-modal';

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
        SnacksComponent
    ]
})
export class SnacksModule { }
