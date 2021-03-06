import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CollaborateComponent } from './collaborate/collaborate.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RefundAndCancellationComponent } from './refund-and-cancellation/refund-and-cancellation.component';
import { ManageSubscriptionComponent } from './manage-subscription/manage-subscription.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
//import { SkipWeekComponent } from './skip-week/skip-week.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import { AuthService} from './auth.service';
import { AuthGuard } from './auth/auth.guard';
import {ModalModule} from "ngx-modal";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';
import { ProfileComponent } from './profile/profile.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { ThankYouMailchimpComponent } from './thank-you-mailchimp/thank-you-mailchimp.component';

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CollaborateComponent,
    HelpComponent,
    ContactComponent,
    SignInComponent,
    SubscribeComponent,
    RefundAndCancellationComponent,
    ManageSubscriptionComponent,
    DeliveryComponent,
    MyOrdersComponent,
    OrderSummaryComponent,
    //SkipWeekComponent,
    ThankYouComponent,
    PersonalDetailsComponent,
    ChangePasswordComponent,
    SignUpComponent,
    PrivacyPolicyComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AlertPopupComponent,
    ProfileComponent,
    TermsAndConditionsComponent,
    CookiePolicyComponent,
    SubscribeFormComponent,
    ThankYouMailchimpComponent
  ],
  imports: [
    BrowserModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, "myApp"),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    ModalModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [UserComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule { }
