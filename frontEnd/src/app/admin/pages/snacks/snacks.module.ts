import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './snacks.routing';
import { SharedModule } from '../../shared/shared.module';
import { SnacksComponent } from './snacks.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        SnacksComponent
    ]
})
export class SnacksModule { }
