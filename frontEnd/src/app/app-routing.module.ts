import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollaborateComponent } from './collaborate/collaborate.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RefundAndCancellationComponent } from './refund-and-cancellation/refund-and-cancellation.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ManageSubscriptionComponent } from './manage-subscription/manage-subscription.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SkipWeekComponent } from './skip-week/skip-week.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "collaborate", component: CollaborateComponent },
  { path: "help", component: HelpComponent },
  { path: "contact", component: ContactComponent },
  { path: "signIn", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "subscribe", component: SubscribeComponent },
  { path: "refund-and-cancellation", component: RefundAndCancellationComponent },
  { path: "delivery", component: DeliveryComponent },
  { path: "order-summary", component: OrderSummaryComponent },
  { path: "manage-subscription", component: ManageSubscriptionComponent },
  { path: "my-orders", component: MyOrdersComponent },
  { path: "skip-week", component: SkipWeekComponent },
  { path: "thank-you", component: ThankYouComponent },
  { path: "personal-details", component: PersonalDetailsComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "refund-and-cancellation", component: RefundAndCancellationComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
