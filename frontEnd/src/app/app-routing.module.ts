import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThankYouComponent } from './user/thank-you/thank-you.component';

const routes: Routes = [
  { path: "**", component:ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class AppRoutingModule { }
