import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollaborateComponent } from './collaborate/collaborate.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RefundAndCancellationComponent } from './refund-and-cancellation/refund-and-cancellation.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "collaborate", component: CollaborateComponent },
  { path: "help", component: HelpComponent },
  { path: "contact", component: ContactComponent },
  { path: "signIn", component: SignInComponent },
  { path: "subscribe", component: SubscribeComponent },
  { path: "refund-and-cancellation", component: RefundAndCancellationComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
