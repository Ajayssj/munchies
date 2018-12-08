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
import { AuthGuard } from './auth/auth.guard';
import { UserComponent } from './user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
  path: '',
  component: UserComponent,
  children: [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "collaborate", component: CollaborateComponent },
  { path: "help", component: HelpComponent },
  { path: "contact", component: ContactComponent },
  { path: "signIn", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "subscribe", component: SubscribeComponent },
  { path: "refund-and-cancellation", component: RefundAndCancellationComponent },
  { path : "forgot-password", component : ForgotPasswordComponent },
  { path : "reset-password/:token", component : ResetPasswordComponent},
  { path: "delivery", component: DeliveryComponent,
  canActivate: [
    AuthGuard
  ] },
  { path: "order-summary", component: OrderSummaryComponent,
  canActivate: [
    AuthGuard
  ]  },
  { path: "manage-subscription", component: ManageSubscriptionComponent,
  canActivate: [
    AuthGuard
  ]  },
  { path: "my-orders", component: MyOrdersComponent,
  canActivate: [
    AuthGuard
  ]  },
  { path: "skip-week", component: SkipWeekComponent,
  canActivate: [
    AuthGuard
  ]  },
  { path: "thank-you", component: ThankYouComponent,
  canActivate: [
    AuthGuard
  ] },
  { path: "personal-details", component: PersonalDetailsComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "refund-and-cancellation", component: RefundAndCancellationComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent }
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class UserRoutingModule { }
