(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _collaborate_collaborate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collaborate/collaborate.component */ "./src/app/collaborate/collaborate.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _refund_and_cancellation_refund_and_cancellation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./refund-and-cancellation/refund-and-cancellation.component */ "./src/app/refund-and-cancellation/refund-and-cancellation.component.ts");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/delivery/delivery.component.ts");
/* harmony import */ var _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-summary/order-summary.component */ "./src/app/order-summary/order-summary.component.ts");
/* harmony import */ var _manage_subscription_manage_subscription_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-subscription/manage-subscription.component */ "./src/app/manage-subscription/manage-subscription.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var _skip_week_skip_week_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skip-week/skip-week.component */ "./src/app/skip-week/skip-week.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/thank-you/thank-you.component.ts");
/* harmony import */ var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./personal-details/personal-details.component */ "./src/app/personal-details/personal-details.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "collaborate", component: _collaborate_collaborate_component__WEBPACK_IMPORTED_MODULE_3__["CollaborateComponent"] },
    { path: "help", component: _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"] },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: "signIn", component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"] },
    { path: "sign-up", component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"] },
    { path: "subscribe", component: _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__["SubscribeComponent"] },
    { path: "refund-and-cancellation", component: _refund_and_cancellation_refund_and_cancellation_component__WEBPACK_IMPORTED_MODULE_8__["RefundAndCancellationComponent"] },
    { path: "delivery", component: _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_9__["DeliveryComponent"] },
    { path: "order-summary", component: _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_10__["OrderSummaryComponent"] },
    { path: "manage-subscription", component: _manage_subscription_manage_subscription_component__WEBPACK_IMPORTED_MODULE_11__["ManageSubscriptionComponent"] },
    { path: "my-orders", component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_12__["MyOrdersComponent"] },
    { path: "skip-week", component: _skip_week_skip_week_component__WEBPACK_IMPORTED_MODULE_13__["SkipWeekComponent"] },
    { path: "thank-you", component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_14__["ThankYouComponent"] },
    { path: "personal-details", component: _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_15__["PersonalDetailsComponent"] },
    { path: "change-password", component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"] },
    { path: "refund-and-cancellation", component: _refund_and_cancellation_refund_and_cancellation_component__WEBPACK_IMPORTED_MODULE_8__["RefundAndCancellationComponent"] },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@font-face {\r\n    font-family: 'MyWebFont';\r\n     src:  url('0078f486-8e52-42c0-ad81-3c8d3d43f48e.woff2') format('woff2'),\r\n          url('3c5beda8-45cc-4f76-abca-8eccfeb6220c.woff2') format('woff2'),\r\n          url('4021a3b9-f782-438b-aeb4-c008109a8b64.woff') format('woff'),\r\n          url('60be5c39-863e-40cb-9434-6ebafb62ab2b.woff') format('woff'),\r\n          url('69b40392-453a-438a-a121-a49e5fbc9213.woff2') format('woff2'),\r\n          url('aee74cb3-c913-4b54-9722-6001c92325f2.woff2') format('woff2'),\r\n          url('bc176270-17fa-4c78-a343-9fe52824e501.woff') format('woff'),\r\n          url('d513e15e-8f35-4129-ad05-481815e52625.woff2') format('woff2'); \r\n  }\r\n\r\n.main_wrapper {\r\n    width: 100%;\r\n}\r\n\r\nheader, .content, footer .content {\r\n    width: 72%;\r\n    margin: 0 auto;\r\n    left: 189px;\r\n    background-color: #fff;\r\n    font-family: 'MyWebFont' !important;\r\n}\r\n\r\n.content_position {\r\n    padding-top: 80px;\r\n    padding-bottom: 50px;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    display: block;\r\n    margin-bottom: 100px;\r\n  transition:all 1.0s ease-in-out;\r\n}\r\n\r\n.margin_bottom250 {\r\n    margin-bottom: 250px;\r\n}\r\n\r\n@media screen and (min-width: 300px) {\r\n    header, .content {\r\n        padding-top: 10px;\r\n        left: 0;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 480px) {\r\n\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    header, .content {\r\n        padding-top: 80px;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n    header, .content {\r\n        left: 137px;\r\n        width: 72%;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n    header, .content {\r\n        left: 137px;\r\n        width: 72%;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 1280px) {\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0tBQ3hCOzs7Ozs7OzRFQU9zRjtHQUN4Rjs7QUFFSDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixvQ0FBb0M7Q0FDdkM7O0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFCQUFxQjtFQUl2QixnQ0FBZ0M7Q0FDakM7O0FBQ0Q7SUFDSSxxQkFBcUI7Q0FDeEI7O0FBR0Q7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsWUFBWTtRQUNaLHVCQUF1QjtLQUMxQjtDQUNKOztBQUVEOztDQUVDOztBQUNEO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLG9CQUFvQjtLQUN2QjtDQUNKOztBQUNEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLHVCQUF1QjtLQUMxQjs7Q0FFSjs7QUFDRDtJQUNJO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCx1QkFBdUI7S0FDMUI7O0NBRUo7O0FBQ0Q7O0NBRUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXlXZWJGb250JztcclxuICAgICBzcmM6ICB1cmwoJy4uL2Fzc2V0cy9mb250LzAwNzhmNDg2LThlNTItNDJjMC1hZDgxLTNjOGQzZDQzZjQ4ZS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnQvM2M1YmVkYTgtNDVjYy00Zjc2LWFiY2EtOGVjY2ZlYjYyMjBjLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgdXJsKCcuLi9hc3NldHMvZm9udC80MDIxYTNiOS1mNzgyLTQzOGItYWViNC1jMDA4MTA5YThiNjQud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgICAgdXJsKCcuLi9hc3NldHMvZm9udC82MGJlNWMzOS04NjNlLTQwY2ItOTQzNC02ZWJhZmI2MmFiMmIud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgICAgdXJsKCcuLi9hc3NldHMvZm9udC82OWI0MDM5Mi00NTNhLTQzOGEtYTEyMS1hNDllNWZiYzkyMTMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250L2FlZTc0Y2IzLWM5MTMtNGI1NC05NzIyLTYwMDFjOTIzMjVmMi53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnQvYmMxNzYyNzAtMTdmYS00Yzc4LWEzNDMtOWZlNTI4MjRlNTAxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnQvZDUxM2UxNWUtOGYzNS00MTI5LWFkMDUtNDgxODE1ZTUyNjI1LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpOyBcclxuICB9XHJcblxyXG4ubWFpbl93cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oZWFkZXIsIC5jb250ZW50LCBmb290ZXIgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDcyJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbGVmdDogMTg5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeVdlYkZvbnQnICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbnRfcG9zaXRpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAxLjBzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjphbGwgMS4wcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOmFsbCAxLjBzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246YWxsIDEuMHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm1hcmdpbl9ib3R0b20yNTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjUwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkge1xyXG4gICAgaGVhZGVyLCAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgaGVhZGVyLCAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIGhlYWRlciwgLmNvbnRlbnQge1xyXG4gICAgICAgIGxlZnQ6IDEzN3B4O1xyXG4gICAgICAgIHdpZHRoOiA3MiU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgaGVhZGVyLCAuY29udGVudCB7XHJcbiAgICAgICAgbGVmdDogMTM3cHg7XHJcbiAgICAgICAgd2lkdGg6IDcyJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main_wrapper\">\n    <app-header></app-header>\n    <div class=\"content content_position\" [ngStyle] = \"styles\">\n        <router-outlet></router-outlet>\n    </div>\n</div>  \n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, location, http) {
        this.router = router;
        this.location = location;
        this.http = http;
        this.title = 'Munchies';
        this.styles = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        var browserHeight = window.innerHeight;
        var contentElementHeight = browserHeight - 275 + 'px';
        this.styles = {
            'min-height': contentElementHeight
        };
        this.http.get("http://localhost:9191/user/login").subscribe(function (response) {
            response = response;
            console.log(response);
        });
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            var scrollToTop = window.setInterval(function () {
                var pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop);
                }
            }, 16); // how fast to scroll (this equals roughly 60 fps)
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _collaborate_collaborate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collaborate/collaborate.component */ "./src/app/collaborate/collaborate.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _refund_and_cancellation_refund_and_cancellation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refund-and-cancellation/refund-and-cancellation.component */ "./src/app/refund-and-cancellation/refund-and-cancellation.component.ts");
/* harmony import */ var _manage_subscription_manage_subscription_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manage-subscription/manage-subscription.component */ "./src/app/manage-subscription/manage-subscription.component.ts");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/delivery/delivery.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order-summary/order-summary.component */ "./src/app/order-summary/order-summary.component.ts");
/* harmony import */ var _skip_week_skip_week_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./skip-week/skip-week.component */ "./src/app/skip-week/skip-week.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/thank-you/thank-you.component.ts");
/* harmony import */ var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./personal-details/personal-details.component */ "./src/app/personal-details/personal-details.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _collaborate_collaborate_component__WEBPACK_IMPORTED_MODULE_9__["CollaborateComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_10__["HelpComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__["SignInComponent"],
                _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_13__["SubscribeComponent"],
                _refund_and_cancellation_refund_and_cancellation_component__WEBPACK_IMPORTED_MODULE_14__["RefundAndCancellationComponent"],
                _manage_subscription_manage_subscription_component__WEBPACK_IMPORTED_MODULE_15__["ManageSubscriptionComponent"],
                _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_16__["DeliveryComponent"],
                _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_17__["MyOrdersComponent"],
                _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_18__["OrderSummaryComponent"],
                _skip_week_skip_week_component__WEBPACK_IMPORTED_MODULE_19__["SkipWeekComponent"],
                _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_20__["ThankYouComponent"],
                _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_21__["PersonalDetailsComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__["SignUpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/change-password/change-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".change_password_page_wrapper {\r\n    width: 100%;\r\n    display: block;\r\n\r\n}\r\n.change_password {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.change_password .circle {\r\n\twidth: 400px;\r\n    height: 400px;\r\n    background-color: rgb(125, 187, 195);\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    left: 80px;\r\n    top: 40px;\r\n}\r\n.change_password_content {\r\n\twidth: 60%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    z-index: 99;\r\n    padding: 30px 0px;\r\n}\r\n.change_password_content h2 {\r\n\tmargin-left: 90px;\r\n    margin-bottom: 30px;\r\n    color: #E5663D;\r\n    font-size: 23px;\r\n}\r\n.change_password_content form input {\r\n    width: 45%;\r\n    margin-bottom: 20px;\r\n    padding: 10px 20px;\r\n    display: block;\r\n    border: 2px solid #b7b4b4;\r\n    background-color: transparent;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7O0NBRWxCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CO0FBQ0Q7Q0FDQyxhQUFhO0lBQ1YsY0FBYztJQUNkLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0NBQ2I7QUFDRDtDQUNDLFdBQVc7SUFDUixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7QUFDRDtDQUNDLGtCQUFrQjtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLDhCQUE4QjtDQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFuZ2VfcGFzc3dvcmRfcGFnZV93cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG59XHJcbi5jaGFuZ2VfcGFzc3dvcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uY2hhbmdlX3Bhc3N3b3JkIC5jaXJjbGUge1xyXG5cdHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI1LCAxODcsIDE5NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG59XHJcbi5jaGFuZ2VfcGFzc3dvcmRfY29udGVudCB7XHJcblx0d2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcclxufVxyXG4uY2hhbmdlX3Bhc3N3b3JkX2NvbnRlbnQgaDIge1xyXG5cdG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcbi5jaGFuZ2VfcGFzc3dvcmRfY29udGVudCBmb3JtIGlucHV0IHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYjdiNGI0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"change_password_page_wrapper\">\n  <div class=\"change_password\">\n    <div class=\"circle\"></div>\n    <div class=\"change_password_content\">\n      <h2>Change Password</h2>\n      <form [formGroup]=\"changePasswordForm\" (onSubmit)=\"submit()\">\n        <input type=\"password\" formControlName=\"currentPassword\" name=\"currentPassword\" placeholder=\"Current Password\" />\n        <input type=\"password\" formControlName=\"newPassword\" name=\"newPassword\" placeholder=\"New Password\" />\n        <input type=\"password\" formControlName=\"reEnterNewPassword\" name=\"reEnterNewPassword\" placeholder=\"Re Enter New Password\" />\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reEnterNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/collaborate/collaborate.component.css":
/*!*******************************************************!*\
  !*** ./src/app/collaborate/collaborate.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.vendors_home_chefs {\r\n    padding: 30px 0px;\r\n    width: 100%;\r\n}\r\n.vendors_home_chefs .box {\r\n    padding: 20px;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n.vendors_home_chefs .box h2 {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n    margin-top: 70px;\r\n    text-transform: uppercase;\r\n    font-weight: normal;\r\n    font-size: 23px;\r\n}\r\n.heading_color {\r\n    color: #E5663D;\r\n}\r\n.vendors_home_chefs .box p {\r\n    color: #3F7CAC;\r\n    letter-spacing: 1px;\r\n    line-height: 25px;\r\n    font-size: 18px;\r\n}\r\n.vendors_home_chefs .box p {\r\n    margin: 0px;\r\n    font-size: 18px;\r\n}\r\n.vendors_home_chefs .box .btn {\r\n    text-align: center;\r\n    display: block;\r\n    margin: 60px 0px 20px 0px;\r\n    color: #E5663D;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.vendors_home_chefs .box a {\r\n    text-decoration: none;\r\n    color: #E5663D;\r\n    padding: 10px 20px 10px 5px;\r\n    border-radius: 20px;\r\n    background-color: transparent;\r\n    transition: color 0.4s ease 0s, background-color 0.4s ease 0s;\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGFib3JhdGUvY29sbGFib3JhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsOERBQThEO0lBQzlELGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbGxhYm9yYXRlL2NvbGxhYm9yYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnZlbmRvcnNfaG9tZV9jaGVmcyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi52ZW5kb3JzX2hvbWVfY2hlZnMgLmJveCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi52ZW5kb3JzX2hvbWVfY2hlZnMgLmJveCBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcbi5oZWFkaW5nX2NvbG9yIHtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG59XHJcbi52ZW5kb3JzX2hvbWVfY2hlZnMgLmJveCBwIHtcclxuICAgIGNvbG9yOiAjM0Y3Q0FDO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi52ZW5kb3JzX2hvbWVfY2hlZnMgLmJveCBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi52ZW5kb3JzX2hvbWVfY2hlZnMgLmJveCAuYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA2MHB4IDBweCAyMHB4IDBweDtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnZlbmRvcnNfaG9tZV9jaGVmcyAuYm94IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2UgMHMsIGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlIDBzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/collaborate/collaborate.component.html":
/*!********************************************************!*\
  !*** ./src/app/collaborate/collaborate.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vendors_home_chefs\">\n    <div class=\"box\">\n        <h2 class=\"heading_color\">New Vendors</h2>\n        <p>We are continuously looking for new and healthy products that can go in our snack bag. These products may include dry snacks, juices, teas and anything else with a minimum of 8-week shelf life.</p>\n        <p>Our website will list your company as a collaborator and you get the opportunity to get your product into the hands of more customers.</p>\n        <p>If you're a company that's interested in featuring your product in our bag, write to us! Please write a note about your company and product along with pricing details and we'll get back to you as soon as we can.</p>\n        <div class=\"btn\">Write to us at <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/collaborate/collaborate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/collaborate/collaborate.component.ts ***!
  \******************************************************/
/*! exports provided: CollaborateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaborateComponent", function() { return CollaborateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollaborateComponent = /** @class */ (function () {
    function CollaborateComponent() {
    }
    CollaborateComponent.prototype.ngOnInit = function () {
    };
    CollaborateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collaborate',
            template: __webpack_require__(/*! ./collaborate.component.html */ "./src/app/collaborate/collaborate.component.html"),
            styles: [__webpack_require__(/*! ./collaborate.component.css */ "./src/app/collaborate/collaborate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CollaborateComponent);
    return CollaborateComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact_page_wrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    margin-top: 40px;\r\n}\r\n.contact_information {\r\n    width: 400px;\r\n    height: 400px;\r\n    background-color: rgb(63, 124, 172);\r\n    color: #fff;\r\n    border-radius: 50%;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    margin-left: -35px;\r\n    margin-top: -50px;\r\n    letter-spacing: 1px;\r\n}\r\n.contact_information .email_id {\r\n    margin-top: 140px;\r\n    margin-left: 70px;\r\n}\r\n.contact_information .email_id a {\r\n    text-decoration: none;\r\n    color: #fff;\r\n}\r\n.contact_information .mobile_number {\r\n    margin-top: 30px;\r\n    margin-left: 70px;\r\n}\r\n.contact_us_text {\r\n    color: #E5663D;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    margin-top: 20px;\r\n    margin-left: 30px;\r\n}\r\n@media screen and (min-width: 300px) {\r\n    .contact_page_wrapper, .signin_page_wrapper {\r\n        flex-direction: column;\r\n    }\r\n    .contact_information {\r\n        width: 300px;\r\n        height: 300px;\r\n        margin: -50px auto 0 auto;\r\n    }\r\n    .contact_information .email_id {\r\n        padding-top: 0px;\r\n        font-size: 18px;\r\n        margin-top: 70px;\r\n        margin-left: 40px;\r\n    }\r\n    .contact_us_text {\r\n        margin: 30px auto;\r\n    }\r\n    .contact_information .mobile_number {\r\n        margin-top: 30px;\r\n        margin-left: 70px;\r\n    }\r\n}\r\n@media screen and (min-width: 480px) {\r\n    .contact_information .email_id {\r\n        padding-top: 0;\r\n        margin-top: 70px;\r\n        margin-left: 40px;\r\n    \r\n    }\r\n}\r\n@media screen and (min-width: 768px) {\r\n    \r\n    .contact_page_wrapper{\r\n        flex-direction: row;\r\n    }\r\n    .contact_information {\r\n\r\n        width: 400px;\r\n        height: 400px;\r\n        margin: -90px 0px 0px 25px;\r\n    \r\n    }\r\n    .contact_information .email_id {\r\n        padding-top: 0;\r\n        margin-top: 140px;\r\n        margin-left: 70px;\r\n    \r\n    }\r\n    .contact_us_text {\r\n        margin-left: 10px;\r\n        margin-top: 0;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n    \r\n}\r\n@media screen and (min-width: 1024px) {\r\n    \r\n}\r\n@media screen and (min-width: 1280px) {\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSTtRQUNJLHVCQUF1QjtLQUMxQjtJQUNEO1FBQ0ksYUFBYTtRQUNiLGNBQWM7UUFDZCwwQkFBMEI7S0FDN0I7SUFDRDtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0tBQ3JCO0NBQ0o7QUFFRDtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7O0tBRXJCO0NBQ0o7QUFDRDs7SUFFSTtRQUNJLG9CQUFvQjtLQUN2QjtJQUNEOztRQUVJLGFBQWE7UUFDYixjQUFjO1FBQ2QsMkJBQTJCOztLQUU5QjtJQUNEO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixrQkFBa0I7O0tBRXJCO0lBQ0Q7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztLQUNqQjtDQUNKO0FBQ0Q7O0NBRUM7QUFDRDs7Q0FFQztBQUNEOztDQUVDIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdF9wYWdlX3dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uY29udGFjdF9pbmZvcm1hdGlvbiB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCAxMjQsIDE3Mik7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi5jb250YWN0X2luZm9ybWF0aW9uIC5lbWFpbF9pZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG59XHJcbi5jb250YWN0X2luZm9ybWF0aW9uIC5lbWFpbF9pZCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jb250YWN0X2luZm9ybWF0aW9uIC5tb2JpbGVfbnVtYmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxufVxyXG4uY29udGFjdF91c190ZXh0IHtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuY29udGFjdF9wYWdlX3dyYXBwZXIsIC5zaWduaW5fcGFnZV93cmFwcGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfaW5mb3JtYXRpb24ge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogLTUwcHggYXV0byAwIGF1dG87XHJcbiAgICB9XHJcbiAgICAuY29udGFjdF9pbmZvcm1hdGlvbiAuZW1haWxfaWQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdF91c190ZXh0IHtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIH1cclxuICAgIC5jb250YWN0X2luZm9ybWF0aW9uIC5tb2JpbGVfbnVtYmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRhY3RfaW5mb3JtYXRpb24gLmVtYWlsX2lkIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIFxyXG4gICAgLmNvbnRhY3RfcGFnZV93cmFwcGVye1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdF9pbmZvcm1hdGlvbiB7XHJcblxyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogLTkwcHggMHB4IDBweCAyNXB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuY29udGFjdF9pbmZvcm1hdGlvbiAuZW1haWxfaWQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuY29udGFjdF91c190ZXh0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact_page_wrapper\">\n    <div class=\"contact_information\">\n        <div class=\"email_id\"><a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a></div>\n    </div>\n    <div class=\"contact_us_text\">Contact us</div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/delivery/delivery.component.css":
/*!*************************************************!*\
  !*** ./src/app/delivery/delivery.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select_delivery_address_wrapper {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    padding: 60px 0px;\r\n    display: block;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.delivery_content {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.select_delivery_address_wrapper h3 {\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.delivery_form form .row {\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 15px;\r\n}\r\n.delivery_form form .field1 {\r\n    width: 40%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n    border: 2px solid #e2e2e2;\r\n}\r\n.delivery_form form .field2 {\r\n    width: 56%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    margin-left: 4%;\r\n    padding: 10px;\r\n    border: 2px solid #e2e2e2;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n         appearance: none;\r\n}\r\n.delivery_form p {\r\n    float: left;\r\n    margin-top: 0;\r\n    font-size: 14px;\r\n    color: #E5663D;\r\n}\r\n.create_account {   \r\n    width: 50%;\r\n    float: left;\r\n}\r\n.create_account h2 {\r\n    color: #E5663D;\r\n    font-size: 23px;\r\n    margin-bottom: 30px;\r\n}\r\n.create_account form input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n    border: 2px solid #e2e2e2;\r\n}\r\n.make_payment_btn {\r\n    width: 100%;\r\n    float: left;\r\n    padding-left: 30px;\r\n    padding-bottom: 50px;\r\n    margin-top: 50px;\r\n}\r\n.make_payment_btn a {\r\n    text-decoration: none;\r\n    color: rgba(50, 50, 50, 1);\r\n    padding: 10px 20px;\r\n    background-color: #fff;\r\n    border-radius: 25px;\r\n    border: 2px solid rgba(50, 50, 50, 1);\r\n}\r\n.make_payment_btn a:hover {\r\n    color: #fff;\r\n    background-color: rgba(50, 50, 50, 1);\r\n    border: 2px solid rgba(50, 50, 50, 1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnkvZGVsaXZlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtDQUNmO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixzQkFBaUI7U0FBakIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixzQ0FBc0M7Q0FDekM7QUFDRDtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsc0NBQXNDO0NBQ3pDIiwiZmlsZSI6InNyYy9hcHAvZGVsaXZlcnkvZGVsaXZlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RfZGVsaXZlcnlfYWRkcmVzc193cmFwcGVyIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDYwcHggMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5kZWxpdmVyeV9jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnNlbGVjdF9kZWxpdmVyeV9hZGRyZXNzX3dyYXBwZXIgaDMge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbn1cclxuLmRlbGl2ZXJ5X2Zvcm0gZm9ybSAucm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5kZWxpdmVyeV9mb3JtIGZvcm0gLmZpZWxkMSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMmUyZTI7XHJcbn1cclxuLmRlbGl2ZXJ5X2Zvcm0gZm9ybSAuZmllbGQyIHtcclxuICAgIHdpZHRoOiA1NiU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UyZTJlMjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuLmRlbGl2ZXJ5X2Zvcm0gcCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxufVxyXG4uY3JlYXRlX2FjY291bnQgeyAgIFxyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jcmVhdGVfYWNjb3VudCBoMiB7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmNyZWF0ZV9hY2NvdW50IGZvcm0gaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTJlMmUyO1xyXG59XHJcbi5tYWtlX3BheW1lbnRfYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLm1ha2VfcGF5bWVudF9idG4gYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAxKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1MCwgNTAsIDUwLCAxKTtcclxufVxyXG4ubWFrZV9wYXltZW50X2J0biBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAxKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTAsIDUwLCA1MCwgMSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/delivery/delivery.component.html":
/*!**************************************************!*\
  !*** ./src/app/delivery/delivery.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select_delivery_address_wrapper\">\n  <div class=\"delivery_content\">\n      <h3>Munchies bag to this address</h3>\n      <div class=\"delivery_form\">\n          <form [formGroup] = \"deliveryForm\" (ngSubmit) = \"onSubmit()\">\n              <div class=\"row\">\n                  <input class=\"field1\" type=\"text\" name=\"name\" placeholder=\"Name\" />\n                  <select class=\"field2\" name=\"area\">\n                      <option value=\"Area of Delivery\">Area of Delivery</option>\n                  </select>\n              </div>\n              <div class=\"row\">\n                  <input class=\"field1\" type=\"text\" name=\"surname\" placeholder=\"Surname\" />\n                  <input class=\"field2\" type=\"text\" name=\"address\" placeholder=\"Address\" />\n              </div>\n              <div class=\"row\">\n                  <input class=\"field1\" type=\"text\" name=\"phone_number\" placeholder=\"Phone Number\" />\n                  <input class=\"field2\" type=\"text\" name=\"postal_code\" placeholder=\"Postal Code\" />\n              </div>\n          </form>\n          <p>*If you can't find you're area, we aren't delivering there yet. But we will be there soon :)</p>\n      </div>\n  </div>\n  <div class=\"create_account\">\n      <h2>Create an account</h2>\n      <form [formGroup] = \"createAccount\" (ngSubmit) = \"onSubmit()\">\n          <input type=\"email\" name=\"email\" placeholder=\"Email\" />\n          <input type=\"password\" name=\"createPassword\" placeholder=\"Create Password\" />\n          <input type=\"password\" name=\"confirmPassword\" placeholder=\"Confirm Password\" />\n      </form>\n  </div>\n  <div class=\"make_payment_btn\">\n      <a href=\"#\">Make Payment</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/delivery/delivery.component.ts":
/*!************************************************!*\
  !*** ./src/app/delivery/delivery.component.ts ***!
  \************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeliveryComponent = /** @class */ (function () {
    function DeliveryComponent() {
    }
    DeliveryComponent.prototype.ngOnInit = function () {
    };
    DeliveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delivery',
            template: __webpack_require__(/*! ./delivery.component.html */ "./src/app/delivery/delivery.component.html"),
            styles: [__webpack_require__(/*! ./delivery.component.css */ "./src/app/delivery/delivery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeliveryComponent);
    return DeliveryComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nheader, .content, footer .content {\r\n    width: 72%;\r\n    margin: 0 auto;\r\n    left: 189px;\r\n    background-color: rgb(240, 238, 235);\r\n}\r\nfooter {\r\n    font-family: 'MyWebFont' !important;\r\n    min-height: 175px;\r\n    background-color: #fe938c;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n}\r\nfooter .content {\r\n    background: transparent;\r\n}\r\n.social_media_icons {    \r\n    margin-bottom: 15px;\r\n    margin-top: 15px;\r\n}\r\n.social_media_icons a:first-child img {\r\n    margin-right: 10px;\r\n}\r\n.footer_line {\r\n    color: #fff;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.footer_line div {\r\n    text-align: center;\r\n    display: inline-block;\r\n    padding-right: 55px;\r\n}\r\n.copy_right {\r\n    letter-spacing: 1px;\r\n}\r\n.copy_right span {\r\n    margin-right: 10px;\r\n}\r\n.footer_line div a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n@media screen and (min-width: 300px) {\r\n    .footer_line {\r\n        float: none;\r\n    }\r\n    .social_media_icons {\r\n        text-align: center;\r\n    }\r\n    .footer_line div {\r\n        margin-right: 0px; \r\n        margin-bottom: 10px;\r\n        text-align: center;\r\n        padding-right: 0px;\r\n        display: block; \r\n    }\r\n    \r\n    footer .content {\r\n        width: 100%;\r\n    }\r\n}\r\n@media screen and (min-width: 480px) {\r\n\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .footer_line div {\r\n        padding-right: 0px;\r\n        margin-bottom: 0px;\r\n        text-align: left;\r\n        padding-right: 10px;\r\n        display: inline-block; \r\n        width: 20%;\r\n        margin-bottom: 10px;\r\n        box-sizing: border-box;\r\n    }\r\n    .footer_line {\r\n        float: left;\r\n    }\r\n    .social_media_icons {\r\n        text-align: center;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n\r\n    footer .content {\r\n        width: 72%;\r\n    }\r\n    .footer_line div {\r\n    }\r\n}\r\n@media screen and (min-width: 1024px) {\r\n\r\n}\r\n@media screen and (min-width: 1280px) {\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHFDQUFxQztDQUN4QztBQUNEO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSTtRQUNJLFlBQVk7S0FDZjtJQUNEO1FBQ0ksbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsZUFBZTtLQUNsQjs7SUFFRDtRQUNJLFlBQVk7S0FDZjtDQUNKO0FBRUQ7O0NBRUM7QUFDRDtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLHVCQUF1QjtLQUMxQjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxtQkFBbUI7S0FDdEI7Q0FDSjtBQUNEOztJQUVJO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7S0FDQztDQUNKO0FBQ0Q7O0NBRUM7QUFDRDtDQUNDIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmhlYWRlciwgLmNvbnRlbnQsIGZvb3RlciAuY29udGVudCB7XHJcbiAgICB3aWR0aDogNzIlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBsZWZ0OiAxODlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOCwgMjM1KTtcclxufVxyXG5mb290ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeVdlYkZvbnQnICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxNzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTkzOGM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5mb290ZXIgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNvY2lhbF9tZWRpYV9pY29ucyB7ICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLnNvY2lhbF9tZWRpYV9pY29ucyBhOmZpcnN0LWNoaWxkIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmZvb3Rlcl9saW5lIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uZm9vdGVyX2xpbmUgZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDU1cHg7XHJcbn1cclxuLmNvcHlfcmlnaHQge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4uY29weV9yaWdodCBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uZm9vdGVyX2xpbmUgZGl2IGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcclxuICAgIC5mb290ZXJfbGluZSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsX21lZGlhX2ljb25zIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyX2xpbmUgZGl2IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZm9vdGVyIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5mb290ZXJfbGluZSBkaXYge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyX2xpbmUge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbF9tZWRpYV9pY29ucyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblxyXG4gICAgZm9vdGVyIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogNzIlO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9saW5lIGRpdiB7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer>\n  <div class=\"content\">\n      <div class=\"social_media_icons\">\n          <a href=\"#\"><span><img src=\"../../assets/facebook.png\" /></span></a>\n          <a href=\"#\"><span><img src=\"../../assets/instagram.png\" /></span></a>\n      </div>\n      <div class=\"footer_line\">\n          <div class=\"copy_right\"><span>&copy; 2018 Munchies</span></div>\n          <div class=\"refund_and_cancel\"><a routerLink=\"/refund-and-cancellation\">Refund and Cancellation</a></div>\n          <div class=\"terms_and_conditions\">Terms & Conditions</div>\n          <div class=\"privacy_policy\">Privacy Policy</div>\n          <div class=\"Cookie_policy\">Cookie Policy</div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/delivery\">Delivery</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/order-summary\">Order Summary</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/manage-subscription\">Manage Subscription</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/my-orders\">My Orders</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/skip-week\">Skip a Week</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/thank-you\">Thank you</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/personal-details\">Personal Details</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/change-password\">Change Password</a></div>\n      </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header_wrapper {\r\n    width: 100%;\r\n    display: block;\r\n    height: 80px;\r\n    background: #fff;\r\n    z-index: 999;\r\n    position: fixed;\r\n    top: 0;\r\n}\r\nheader, .content, footer .content {\r\n    font-family: 'MyWebFont' !important;\r\n    width: 72%;\r\n    margin: 0 auto;\r\n    left: 189px;\r\n    background-color: #fff;\r\n}\r\n.site_header {\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 100;\r\n}\r\nnav .wrapper .logo {\r\n    height: 80px;\r\n    float: left;\r\n    width: 42%;\r\n}\r\nnav .wrapper .logo img {\r\n    width: 200px;\r\n    height: auto;\r\n}\r\nnav .wrapper ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;   \r\n    float: left;\r\n}\r\nnav .wrapper ul li.bars, nav .wrapper ul li.bars_cross {\r\n    display: none;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    padding: 15px 15px 10px;\r\n    transition: right 0.5s ease 0s;\r\n}\r\nnav .wrapper ul li.bars .bar1, nav .wrapper ul li.bars .bar2, nav .wrapper ul li.bars .bar3, nav .wrapper ul li.bars_cross .bar1, nav .wrapper ul li.bars_cross .bar2, nav .wrapper ul li.bars_cross .bar3 {\r\n    width: 25px;\r\n    height: 2px;\r\n    background: #FFF;\r\n    margin-bottom: 8px;\r\n    transition: all 0.6s;\r\n}\r\nnav .wrapper ul li {\r\n    text-decoration: none;\r\n    text-align: center;\r\n    display: inline-block;\r\n}\r\nnav .wrapper ul li:last-child {\r\n    margin-right: 0;\r\n    margin-left: 5px;\r\n}\r\n.responsive_menu {\r\n    position: absolute;\r\n    width: 230px;\r\n    right: -231px;\r\n    transition: right 0.4s ease 0s;\r\n    background-color: #fff;\r\n    border: 1px solid rgb(240, 238, 235);\r\n    top: 9px;\r\n    display: none;\r\n}\r\n.menu_item {\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n}\r\n.menu_item a {\r\n    text-decoration: none;\r\n    color: #292929;\r\n    transition: color 0.5s ease 0s, background-color 0.5s ease 0s;\r\n    width: 100%;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    display: block;\r\n}\r\n.menu_item a:hover {\r\n    background-color: #292929;\r\n    color: #fff;\r\n}\r\n.menu_item a.active {\r\n    background-color: #292929;\r\n    color: #fff;\r\n}\r\nnav .wrapper ul li a {\r\n    text-decoration: none;\r\n    color: #DE6B48;\r\n    line-height: 80px;\r\n    font-size: 16px;\r\n}\r\nnav .wrapper ul li:last-child a {\r\n    border: 2px solid red;\r\n    padding: 10px 20px;\r\n    border-radius: 40px;\r\n    font-weight: bold;\r\n}\r\n.subscribe_btn {\r\n    margin-top: 20px;\r\n    box-sizing: border-box;\r\n    float: left;\r\n    border: 2px solid red;\r\n    border-radius: 20px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n}\r\n.subscribe_btn a {\r\n    padding: 0 20px;\r\n    text-decoration: none;\r\n    color: red;\r\n}\r\n.snack_right_video {\r\n    margin: 150px auto 150px auto;\r\n    text-align: center;\r\n}\r\n.snack_right_video h2 {\r\n    color: #292929;\r\n    font-size: 2.5em;\r\n    font-weight: 100;\r\n    letter-spacing: 3.3px;\r\n}\r\n.snack_right_img {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 20px solid transparent;\r\n    border-bottom: 20px solid transparent;\r\n    border-left: 50px solid rgb(63, 124, 172);\r\n    margin: 0 auto;\r\n}\r\n.content_box {\r\n    background-color: #fff;\r\n    padding: 40px 20px 80px 80px;\r\n    margin-bottom: 20px;\r\n    float: left;\r\n}\r\n.content_box div {\r\n    float: left;\r\n    width: 22%;\r\n}\r\n.content_box img {\r\n    width: 150px;\r\n    height: auto;\r\n}\r\n.content_box .text {\r\n    margin-right: 20px;\r\n    line-height: 22px;\r\n    letter-spacing: 1px;\r\n    font-size: 18px;\r\n    float: left;\r\n    width: 53%;\r\n}\r\n.content_box_wrapper .content_box:nth-child(2) {\r\n    padding: 80px 0px 80px 15px;\r\n    background-color: rgba(125, 187, 195, 1);\r\n}\r\n.content_box_wrapper > h2 {\r\n    text-align: center;\r\n    color: #E5663D;\r\n    margin: 40px 0px;\r\n    display: block;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.text-upper {\r\n    text-transform: uppercase;\r\n}\r\n.boxes {\r\n    display: block;\r\n    float: left;\r\n}\r\n.boxes .box {\r\n    background-color: rgba(125, 187, 195, 0.85);\r\n    margin-right: 10px;\r\n    padding: 10px;\r\n    min-height: 400px;\r\n    float: left;\r\n    width: 24%;\r\n    box-sizing: border-box;\r\n}\r\n.boxes .box:nth-child(4) {\r\n    margin-right: 0px;\r\n}\r\n.boxes .box h3 {\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    font-size: 20px;\r\n}\r\n.boxes .box p {\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n    color: rgb(63, 61, 61);\r\n}\r\n.subscribe_btn2 {\r\n    margin: 80px 0px;\r\n    text-align: center;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.subscribe_btn2 a {\r\n    border: 4px solid;\r\n    border-color: rgba(63, 124, 172, 1);\r\n    padding: 5px 30px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: #fff;\r\n    background-color: rgba(63, 124, 172, 1);\r\n    font-size: 23px;\r\n    transition: border-color 0.4s ease 0s, background-color 0.4s ease 0s;\r\n}\r\n.subscribe_btn2 a:hover {\r\n    background-color: #fff;\r\n    color: #292929;\r\n    border-color: #fff;\r\n}\r\n.whats_inside {\r\n    text-align: center;\r\n}\r\n.whats_inside h2 {\r\n    color: #DE6B48;\r\n    margin-bottom: 40px;\r\n}\r\n.whats_inside p {\r\n    width: 80%;\r\n    margin: 50px auto;\r\n    letter-spacing: 1px;\r\n    line-height: 22px;\r\n}\r\n.whats_inside span {\r\n    color: #DE6B48;\r\n    text-decoration: underline;\r\n}\r\n.food_box {\r\n    display: block;\r\n    background: #fff;\r\n    padding: 10px 10px 5px 10px;\r\n    margin-bottom: 40px;\r\n}\r\n.food_box:nth-child(even) { \r\n    background-color: rgba(222, 107, 72, 1);\r\n    color: #fff;\r\n}\r\n.text_area {\r\n    width: 43%;\r\n    line-height: 22px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    margin-right: 24px;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n}\r\n.food_box:nth-child(even) .text_area{\r\n    margin-right: 0px;\r\n}\r\n.text_area h3 {\r\n    margin-top: 5px;\r\n}\r\n.text_area p:last-child {\r\n    margin-bottom: 0px;\r\n}\r\n.food_box .img {\r\n    display: inline-block;\r\n    width: 53%;\r\n    box-sizing: border-box;\r\n}\r\n.food_box .img img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.food_box:nth-child(even) .img {\r\n    margin-right: 20px;\r\n    background-color: rgba(222, 107, 72, 1);\r\n}\r\n.food_box:nth-child(4) .img {\r\n    width: 42%;\r\n}\r\n.food_box:nth-child(4) .text_area {\r\n    width: 52%;\r\n}\r\n.remove_margin_bottom {\r\n    margin-bottom: 0px;\r\n}\r\n.remove_margin_top {\r\n    margin-top: 0px;\r\n}\r\nnav .wrapper ul li.bars.open {\r\n    display: none;\r\n}\r\nnav .wrapper ul li.bars_cross {\r\n    right: 232px;\r\n    display: block;\r\n    z-index: 99999;\r\n}\r\nnav .wrapper ul li.bars_cross .bar1 {\r\n    -webkit-transform: rotate(45deg) translate(8px, 7px);\r\n            transform: rotate(45deg) translate(8px, 7px);\r\n}\r\nnav .wrapper ul li.bars_cross .bar2 {\r\n    opacity: 0;\r\n}\r\nnav .wrapper ul li.bars_cross .bar3 {\r\n    -webkit-transform: rotate(-45deg) translate(7px, -6px);\r\n            transform: rotate(-45deg) translate(7px, -6px);\r\n}\r\n.responsive_menu.openSideMenu {\r\n    right: 0px;\r\n}\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #292929;\r\n    display: none;\r\n}\r\n@media screen and (min-width: 300px) {\r\n    header, .content {\r\n        left: 0;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n    nav .wrapper ul li {\r\n        display: none;\r\n    }\r\n    nav .wrapper ul li.bars {\r\n        display: block;\r\n    }\r\n    nav .wrapper ul li.bars_cross.close {\r\n        display: block;\r\n    }\r\n    .responsive_menu {\r\n        display: block;\r\n    }\r\n    .overlay.showOverlay {\r\n        display: block;\r\n    }\r\n}\r\n@media screen and (min-width: 480px) {\r\n\r\n}\r\n@media screen and (min-width: 768px) {\r\n    nav .wrapper ul li {\r\n        margin-right: 20px;\r\n        display: inline-block;\r\n    }\r\n    nav .wrapper ul li.bars {\r\n        display: none;\r\n    }\r\n    nav .wrapper ul li.bars_cross.close {\r\n        display: none;\r\n    }\r\n    .responsive_menu {\r\n        display: none;\r\n    }\r\n    .overlay.showOverlay {\r\n        display: none;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n    nav .wrapper ul li.bars {\r\n        display: none;\r\n    }\r\n    .responsive_menu {\r\n        display: none;\r\n    }\r\n    header, .content {\r\n        left: 137px;\r\n        width: 72%;\r\n        box-sizing: border-box;\r\n    }\r\n    nav .wrapper ul li {\r\n        margin: 0px 14px;\r\n        display: inline-block;\r\n    }\r\n    \r\n    nav .wrapper .logo {\r\n        width: 33%;\r\n    }\r\n}\r\n@media screen and (min-width: 1024px) {\r\n\r\n    nav .wrapper .logo {\r\n        width: 37%;\r\n    }\r\n}\r\n@media screen and (min-width: 1280px) {\r\n    header {\r\n        left: 189px;\r\n    }\r\n    nav .wrapper .logo {\r\n        width: 50%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLE9BQU87Q0FDVjtBQUNEO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLCtCQUErQjtDQUNsQztBQUNEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBSW5CLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLFNBQVM7SUFDVCxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDhEQUE4RDtJQUM5RCxZQUFZO0lBQ1osY0FBYztJQUNkLHVCQUF1QjtJQUN2QixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFdBQVc7Q0FDZDtBQUdEO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMsMENBQTBDO0lBQzFDLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksWUFBWTtJQUNaLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztDQUNkO0FBQ0Q7SUFDSSw0QkFBNEI7SUFDNUIseUNBQXlDO0NBQzVDO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsWUFBWTtDQUNmO0FBQ0Q7SUFDSSw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixxRUFBcUU7Q0FDeEU7QUFDRDtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtDQUM5QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSx3Q0FBd0M7SUFDeEMsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHdDQUF3QztDQUMzQztBQUNEO0lBQ0ksV0FBVztDQUNkO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLHFEQUE2QztZQUE3Qyw2Q0FBNkM7Q0FDaEQ7QUFDRDtJQUNJLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksdURBQStDO1lBQS9DLCtDQUErQztDQUNsRDtBQUNEO0lBQ0ksV0FBVztDQUNkO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGNBQWM7Q0FDakI7QUFDRDtJQUNJO1FBQ0ksUUFBUTtRQUNSLFlBQVk7UUFDWix1QkFBdUI7S0FDMUI7SUFDRDtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLGVBQWU7S0FDbEI7SUFDRDtRQUNJLGVBQWU7S0FDbEI7SUFDRDtRQUNJLGVBQWU7S0FDbEI7SUFDRDtRQUNJLGVBQWU7S0FDbEI7Q0FDSjtBQUVEOztDQUVDO0FBQ0Q7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixzQkFBc0I7S0FDekI7SUFDRDtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLGNBQWM7S0FDakI7Q0FDSjtBQUNEO0lBQ0k7UUFDSSxjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLHVCQUF1QjtLQUMxQjtJQUNEO1FBQ0ksaUJBQWlCO1FBQ2pCLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLFdBQVc7S0FDZDtDQUNKO0FBQ0Q7O0lBRUk7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjtBQUNEO0lBQ0k7UUFDSSxZQUFZO0tBQ2Y7SUFDRDtRQUNJLFdBQVc7S0FDZDtDQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXJfd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxufVxyXG5oZWFkZXIsIC5jb250ZW50LCBmb290ZXIgLmNvbnRlbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeVdlYkZvbnQnICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNzIlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBsZWZ0OiAxODlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpdGVfaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5uYXYgLndyYXBwZXIgLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNDIlO1xyXG59XHJcbm5hdiAud3JhcHBlciAubG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbm5hdiAud3JhcHBlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDsgICBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbm5hdiAud3JhcHBlciB1bCBsaS5iYXJzLCBuYXYgLndyYXBwZXIgdWwgbGkuYmFyc19jcm9zcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweDtcclxuICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuNXMgZWFzZSAwcztcclxufVxyXG5uYXYgLndyYXBwZXIgdWwgbGkuYmFycyAuYmFyMSwgbmF2IC53cmFwcGVyIHVsIGxpLmJhcnMgLmJhcjIsIG5hdiAud3JhcHBlciB1bCBsaS5iYXJzIC5iYXIzLCBuYXYgLndyYXBwZXIgdWwgbGkuYmFyc19jcm9zcyAuYmFyMSwgbmF2IC53cmFwcGVyIHVsIGxpLmJhcnNfY3Jvc3MgLmJhcjIsIG5hdiAud3JhcHBlciB1bCBsaS5iYXJzX2Nyb3NzIC5iYXIzIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG59XHJcbm5hdiAud3JhcHBlciB1bCBsaSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxubmF2IC53cmFwcGVyIHVsIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4ucmVzcG9uc2l2ZV9tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIHJpZ2h0OiAtMjMxcHg7XHJcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjRzIGVhc2UgMHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MCwgMjM4LCAyMzUpO1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5tZW51X2l0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWVudV9pdGVtIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMyOTI5Mjk7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2UgMHMsIGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlIDBzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5tZW51X2l0ZW0gYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm1lbnVfaXRlbSBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxubmF2IC53cmFwcGVyIHVsIGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNERTZCNDg7XHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5uYXYgLndyYXBwZXIgdWwgbGk6bGFzdC1jaGlsZCBhIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc3Vic2NyaWJlX2J0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5zdWJzY3JpYmVfYnRuIGEge1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi5zbmFja19yaWdodF92aWRlbyB7XHJcbiAgICBtYXJnaW46IDE1MHB4IGF1dG8gMTUwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc25hY2tfcmlnaHRfdmlkZW8gaDIge1xyXG4gICAgY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzLjNweDtcclxufVxyXG4uc25hY2tfcmlnaHRfaW1nIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogNTBweCBzb2xpZCByZ2IoNjMsIDEyNCwgMTcyKTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jb250ZW50X2JveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4IDgwcHggODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY29udGVudF9ib3ggZGl2IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIyJTtcclxufVxyXG4uY29udGVudF9ib3ggaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uY29udGVudF9ib3ggLnRleHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTMlO1xyXG59XHJcbi5jb250ZW50X2JveF93cmFwcGVyIC5jb250ZW50X2JveDpudGgtY2hpbGQoMikge1xyXG4gICAgcGFkZGluZzogODBweCAwcHggODBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjUsIDE4NywgMTk1LCAxKTtcclxufVxyXG4uY29udGVudF9ib3hfd3JhcHBlciA+IGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgbWFyZ2luOiA0MHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4udGV4dC11cHBlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5ib3hlcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5ib3hlcyAuYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI1LCAxODcsIDE5NSwgMC44NSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5ib3hlcyAuYm94Om50aC1jaGlsZCg0KSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uYm94ZXMgLmJveCBoMyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uYm94ZXMgLmJveCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogcmdiKDYzLCA2MSwgNjEpO1xyXG59XHJcbi5zdWJzY3JpYmVfYnRuMiB7XHJcbiAgICBtYXJnaW46IDgwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc3Vic2NyaWJlX2J0bjIgYSB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg2MywgMTI0LCAxNzIsIDEpO1xyXG4gICAgcGFkZGluZzogNXB4IDMwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCAxMjQsIDE3MiwgMSk7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC40cyBlYXNlIDBzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZSAwcztcclxufVxyXG4uc3Vic2NyaWJlX2J0bjIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbn1cclxuLndoYXRzX2luc2lkZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLndoYXRzX2luc2lkZSBoMiB7XHJcbiAgICBjb2xvcjogI0RFNkI0ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLndoYXRzX2luc2lkZSBwIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG4ud2hhdHNfaW5zaWRlIHNwYW4ge1xyXG4gICAgY29sb3I6ICNERTZCNDg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uZm9vZF9ib3gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uZm9vZF9ib3g6bnRoLWNoaWxkKGV2ZW4pIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgMTA3LCA3MiwgMSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4udGV4dF9hcmVhIHtcclxuICAgIHdpZHRoOiA0MyU7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4uZm9vZF9ib3g6bnRoLWNoaWxkKGV2ZW4pIC50ZXh0X2FyZWF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4udGV4dF9hcmVhIGgzIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSBcclxuLnRleHRfYXJlYSBwOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5mb29kX2JveCAuaW1nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MyU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5mb29kX2JveCAuaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uZm9vZF9ib3g6bnRoLWNoaWxkKGV2ZW4pIC5pbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDEwNywgNzIsIDEpO1xyXG59XHJcbi5mb29kX2JveDpudGgtY2hpbGQoNCkgLmltZyB7XHJcbiAgICB3aWR0aDogNDIlO1xyXG59XHJcbi5mb29kX2JveDpudGgtY2hpbGQoNCkgLnRleHRfYXJlYSB7XHJcbiAgICB3aWR0aDogNTIlO1xyXG59XHJcbi5yZW1vdmVfbWFyZ2luX2JvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnJlbW92ZV9tYXJnaW5fdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5uYXYgLndyYXBwZXIgdWwgbGkuYmFycy5vcGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxubmF2IC53cmFwcGVyIHVsIGxpLmJhcnNfY3Jvc3Mge1xyXG4gICAgcmlnaHQ6IDIzMnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG5uYXYgLndyYXBwZXIgdWwgbGkuYmFyc19jcm9zcyAuYmFyMSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDhweCwgN3B4KTtcclxufVxyXG5uYXYgLndyYXBwZXIgdWwgbGkuYmFyc19jcm9zcyAuYmFyMiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbm5hdiAud3JhcHBlciB1bCBsaS5iYXJzX2Nyb3NzIC5iYXIzIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDdweCwgLTZweCk7XHJcbn1cclxuLnJlc3BvbnNpdmVfbWVudS5vcGVuU2lkZU1lbnUge1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgICBoZWFkZXIsIC5jb250ZW50IHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICBuYXYgLndyYXBwZXIgdWwgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBuYXYgLndyYXBwZXIgdWwgbGkuYmFycyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBuYXYgLndyYXBwZXIgdWwgbGkuYmFyc19jcm9zcy5jbG9zZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAucmVzcG9uc2l2ZV9tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5vdmVybGF5LnNob3dPdmVybGF5IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIG5hdiAud3JhcHBlciB1bCBsaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIG5hdiAud3JhcHBlciB1bCBsaS5iYXJzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgbmF2IC53cmFwcGVyIHVsIGxpLmJhcnNfY3Jvc3MuY2xvc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucmVzcG9uc2l2ZV9tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm92ZXJsYXkuc2hvd092ZXJsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIG5hdiAud3JhcHBlciB1bCBsaS5iYXJzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnJlc3BvbnNpdmVfbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGhlYWRlciwgLmNvbnRlbnQge1xyXG4gICAgICAgIGxlZnQ6IDEzN3B4O1xyXG4gICAgICAgIHdpZHRoOiA3MiU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIG5hdiAud3JhcHBlciB1bCBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTRweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5hdiAud3JhcHBlciAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbiAgICBuYXYgLndyYXBwZXIgLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAzNyU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICBoZWFkZXIge1xyXG4gICAgICAgIGxlZnQ6IDE4OXB4O1xyXG4gICAgfVxyXG4gICAgbmF2IC53cmFwcGVyIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header_wrapper\">\n    <header class=\"site_header\">\n        <nav>\n            <div class=\"wrapper\">\n                <div class=\"logo\">\n                    <a href=\"/home\"><img src=\"../assets/logo.png\" alt=\"No Image\" /></a>\n                </div>\n                <ul>\n                    <li class=\"bars\" id=\"open\" (click)=\"openSideMenu($event)\">\n                        <div class=\"bar1\"></div><div class=\"bar2\"></div><div class=\"bar3\"></div>\n                    </li>\n                    <li><a routerLink=\"/collaborate\">Collaborate</a></li>\n                    <li><a routerLink=\"/help\">Help</a></li>\n                    <li><a routerLink=\"/contact\">Contact</a></li>\n                    <li><a routerLink=\"/signIn\">Sign In</a></li>\n                    <li><a routerLink=\"/subscribe\">Get the Bag</a></li>\n                </ul>\n                <div class=\"overlay\" id=\"overlay\"></div>\n                <div class=\"responsive_menu\" id=\"responsive_menu\">\n                    <div class=\"menu_list\">\n                        <div class=\"menu_item\">\n                            <a class=\"active\" routerLink=\"/collaborate\">Collaborate</a>\n                        </div>\n                        <div class=\"menu_item\">\n                            <a routerLink=\"/help\">Help</a>\n                        </div>\n                        <div class=\"menu_item\">\n                            <a routerLink=\"/contact\">Contact</a>\n                        </div>\n                        <div class=\"menu_item\">\n                            <a routerLink=\"/signIn\">Sign IN</a>\n                        </div>\n                        <div class=\"menu_item\">\n                            <a routerLink=\"/subscribe\">Get the Bag</a>\n                        </div>\n                    </div>\n                </div>\n            <!-- <div class=\"subscribe_btn\"><a href=\"#\">Subscribe</a></div> --> \n            </div>\n        </nav>\n    </header>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.openSideMenu = function (event) {
        var openBtn = document.getElementById("open");
        console.log("hiiiiiiii");
        var overlay = document.getElementById("overlay");
        overlay.classList.toggle("showOverlay");
        openBtn.classList.toggle("bars_cross");
        var sideBarMenu = document.getElementById("responsive_menu");
        sideBarMenu.classList.toggle("openSideMenu");
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh2.faq {\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    letter-spacing: 2px;\r\n}\r\nol {\r\n    margin-top: 80px;\r\n    counter-reset: item;\r\n}\r\nol li {\r\n    line-height: 22px;\r\n    font-size: 18px;\r\n    color: #605E5E;\r\n    margin-bottom: 20px;\r\n    list-style-type:none;\r\n    counter-increment:item;\r\n}\r\nol li::before {\r\n    display:inline-block;\r\n    font-weight:bold;\r\n    content:counter(item) \".\";\r\n}\r\nol li span {\r\n    font-weight: bold;\r\n    margin-left: 8px;\r\n}\r\nol li p {\r\n    margin: 5px;\r\n    text-indent: 23px;\r\n}\r\nol li p a {\r\n    color: #605E5E;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQix1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDIuZmFxIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxub2wge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIGNvdW50ZXItcmVzZXQ6IGl0ZW07XHJcbn1cclxub2wgbGkge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzYwNUU1RTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICAgIGNvdW50ZXItaW5jcmVtZW50Oml0ZW07XHJcbn1cclxub2wgbGk6OmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBjb250ZW50OmNvdW50ZXIoaXRlbSkgXCIuXCI7XHJcbn1cclxub2wgbGkgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxub2wgbGkgcCB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHRleHQtaW5kZW50OiAyM3B4O1xyXG59XHJcbm9sIGxpIHAgYSB7XHJcbiAgICBjb2xvcjogIzYwNUU1RTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"faq\">Frequently Asked Questions</h2>\n<ol>\n    <li><span>What is Munchies?</span> <p>Munchies is the brand that delivers healthy snacks on a subscription basis by curating snacks from different existing vendors.</p></li>\n    <li><span>How much does it cost?</span><p> A one-week trial bag will cost Rs.500 while a 4-week plan will cost ......</p></li>\n    <li><span>How much does delivery cost?</span><p>Delivery is free throughout Bengaluru.</p></li>\n    <li><span>What is the refund/return policy?</span><p>Because we must order a specific quantity of items for our bags — most of which are non-returnable — we cannot offer refunds once orders have been placed. Please note cancellations is for future bags only, and not for the bags already paid for.</p></li>\n    <li><span>Who do you recommend Munchies for?</span><p>Munchies is for anyone who wants to change their snacking habits. Munchies products are healthier than their sugary and refined flour counterparts. Feel free to send your enquiries to <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a></p></li>\n    <li><span>What kind of snacks does Munchies select?</span><p>The Munchies team selects only the heartiest of snacks based on nutrition value and those snacks which are deemed healthy by the manufacturers. These typically contain less or no sugar, only olive or coconut oil, can be gluten-free and contain no refined flour. </p></li>\n    <li><span>How can I access my account? </span><p> After you have chosen one of our three subscription options, you’ll be required to create a Munchies account at checkout. Any time you want to check on your order, you can head over to the top right corner of our home page and click on ‘Log In’. Once there, a menu will prompt you to provide the email address and password you used when purchasing your subscription. Fill in the information and you’re in!</p></li>\n    <li><span>What is my account for? </span><p>In your account, you can update your contact information, credit card information, and password. You can also manage your subscriptions, including cancelling or skipping a week</p></li>\n    <li><span>I have a subscription, why can't I log into my account?</span><p>Problems with account logins might be due to an incorrect password or email. If you can’t remember your password, click on the ‘Forgot Password?’ option in the login page and a password reset link will be sent to the email address you used when subscribing to Munchies. In the case that you never receive an email, perhaps the email address associated with the account was typed wrong. This is a common issue, and we’d be glad to make necessary corrections. Just shoot us an email us at <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a> and we’ll make sure to dot the i’s and cross the t’s.</p></li>\n    <li><span>I don't live in Bengaluru, can I still subscribe?</span><p>Currently, due to the size of our company and logistics, we are only delivering in Bengaluru.</p></li>\n    <li><span>Is tracking available?</span><p>Currently tracking your delivery is unavailable, however we deliver only on Mondays and between 9am and 6pm. </p></li>\n    <li><span>What if my address has changed?</span><p>You can always update your shipping address in your account, but you must do so before any Thursday of the week to ensure your package arrives at the correct destination. Just log in and edit your information. Once you have done that, make sure your new address has been updated.</p></li>\n    <li><span>What if my bag is missing an item?</span><p>We sincerely apologize for sending out a bag without an item. Because we have a large amount of bags to pack every week, there’s always the chance we forget to pack an item by accident. Please let us know if you’re missing an item by sending us an email at <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a> and we’ll see what we can do to remedy the situation!</p></li>\n    <li><span>If an item in my bag seems damaged what do I do?</span><p>We are very careful in packaging each item into our bags as neat as possible, and we check that we secure each one tightly. We receive every item in new condition and expect to ship them in the same quality to our subscribers. But as a result of rough handling, our bags may be susceptible to damage. Please email us at <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a> and attach a photo of the damaged item, so we can try to send a replacement as soon as possible!</p></li>\n    <li><span>Can I skip a weeks bag without losing my subscription?</span><p>Yes! Simply log in to your account and under manage subscriptions click on skip a week. If you want to skip the coming weeks bags, please inform before any Friday. You will receive your skipped bag on the week after your skipped week.</p></li>\n    <li><span>If I'm a business wanting to partner with Munchies, how do I get in touch?</span><p>Thank you for your interest in working with us! Please email us at <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a>  with information about your services and products, along with a brief pitch explaining why we might be suitable for a partnership. Please use ‘Partnership Inquiry’ as the email subject line, and if able, please send us a sample of the items or services you’d like to promote with us. Also, keep in mind that we are unable to respond to every email we receive. We’ll try to reach back within a few days of you sending us an email if we’re interested in your business!</p></li>\n</ol>"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.snack_right_video {\r\n    margin: 150px auto 150px auto;\r\n    text-align: center;\r\n}\r\n.snack_right_video h2 {\r\n    color: #292929;\r\n    font-size: 40px;\r\n    font-weight: normal;\r\n    letter-spacing: 0em;\r\n    padding: 0px 15%;\r\n    line-height: 60px;\r\n}\r\n.watch_video {\r\n    text-align: center;\r\n    margin-bottom: 70px;\r\n}\r\n.watch_video h3 {\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    color: #E5663D;\r\n}\r\n.watch_video + h2 {\r\n    text-align: center;\r\n    color: #3F7CAC;\r\n    font-size: 38px;\r\n    font-weight: bold;\r\n}\r\n.snack_right_img {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 30px solid transparent;\r\n    border-bottom: 30px solid transparent;\r\n    border-left: 50px solid rgb(63, 124, 172);\r\n    margin: 0 auto;\r\n}\r\n.content_box {\r\n    background-color: #fff;\r\n    padding: 40px 20px 80px 80px;\r\n    margin-bottom: 20px;\r\n    float: left;\r\n}\r\n.content_box div {\r\n    float: left;\r\n    width: 22%;\r\n}\r\n.content_box img {\r\n    width: 150px;\r\n    height: auto;\r\n}\r\n.content_box .text {\r\n    margin-right: 20px;\r\n    line-height: 24px;\r\n    letter-spacing: 1px;\r\n    font-size: 18px;\r\n    float: left;\r\n    width: 53%;\r\n    color: #2F2E2E;\r\n}\r\n.content_box_wrapper .content_box:nth-child(1) {\r\n    background-color: rgba(125, 187, 195, 1);\r\n    margin-bottom: 0px;\r\n}\r\n.content_box_wrapper .content_box:nth-child(2) {\r\n    padding: 80px 0px 80px 15px;\r\n    background-color: rgba(125, 187, 195, 1);\r\n    margin-bottom: 50px;\r\n}\r\n.content_box_wrapper > h2, .munchers_have_spoken_text {\r\n    text-align: center;\r\n    color: #E5663D;\r\n    margin: 40px 0px;\r\n    display: block;\r\n    width: 100%;\r\n    font-size: 30px;\r\n}\r\n.text-upper {\r\n    text-transform: uppercase;\r\n}\r\n.boxes {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.boxes .box {\r\n    background-color: rgba(125, 187, 195, 0.85);\r\n    margin-right: 10px;\r\n    padding: 10px;\r\n    min-height: 475px;\r\n    float: left;\r\n    width: 24%;\r\n    box-sizing: border-box;\r\n}\r\n.boxes .box:nth-child(4) {\r\n    margin-right: 0px;\r\n}\r\n.boxes .box h3 {\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    font-size: 23px;\r\n    font-weight: normal;\r\n}\r\n.boxes .box p {\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n    color: rgb(63, 61, 61);\r\n}\r\n.subscribe_btn2 {\r\n    margin: 80px 0px;\r\n    text-align: center;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.subscribe_btn2 a {\r\n    border: 4px solid;\r\n    border-color: rgba(63, 124, 172, 1);\r\n    padding: 5px 30px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: #fff;\r\n    background-color: rgba(63, 124, 172, 1);\r\n    font-size: 23px;\r\n    transition: border-color 0.4s ease 0s, background-color 0.4s ease 0s;\r\n}\r\n.subscribe_btn2 a:hover {\r\n    background-color: #fff;\r\n    color: #292929;\r\n    border-color: #fff;\r\n}\r\n.whats_inside {\r\n    text-align: center;\r\n}\r\n.whats_inside h2 {\r\n    color: #DE6B48;\r\n    margin-bottom: 40px;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n.whats_inside p {\r\n    width: 80%;\r\n    margin: 50px auto;\r\n    letter-spacing: 1px;\r\n    line-height: 22px;\r\n    color: #292929;\r\n    font-size: 18px;\r\n}\r\n.whats_inside img {\r\n    height: 130px;\r\n    width: auto;\r\n}\r\n.whats_inside span {\r\n    color: #DE6B48;\r\n    text-decoration: underline;\r\n}\r\n.you_will_get {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n.you_will_get h3 {\r\n    margin-left: 30px;\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.list {\r\n    width: 100%;\r\n}\r\n.list_item {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-bottom: 30px;\r\n}\r\n.list_item .list_number {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: #3F7CAC;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    color: #fff;\r\n    margin-right: 30px;\r\n    font-size: 22px;\r\n}\r\n.list_item .list_text {\r\n    line-height: 50px;\r\n    font-size: 23px;\r\n    color: #605e5e;\r\n    font-weight: bold;\r\n}\r\n.munchers_have_spoken_box_wrapper {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.munchers_have_spoken_box {\r\n    width: 30%;\r\n    height: 250px;\r\n    background-color: rgb(125, 187, 195);\r\n    border-radius: 40px;\r\n    padding: 30px;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    position: relative;\r\n}\r\n.munchers_have_spoken_box:nth-child(2) {\r\n    margin: 0 5%;\r\n}\r\n.munchers_have_spoken_box span {\r\n    position: absolute;\r\n    width: 0;\r\n    border-top: 60px solid rgb(125, 187, 195);\r\n    border-left: 60px solid rgb(125, 187, 195);\r\n    bottom: -55px;\r\n    border-bottom: 100px solid transparent;\r\n}\r\n.page_down_content {\r\n\tmargin: 105px 0px 50px 0px;\r\n    text-align: center;\r\n}\r\n.page_down_content h2 {\r\n\tfont-size: 36px;\r\n    color: #605E5E;\r\n}\r\n.page_down_content input {\r\n\tpadding: 10px 20px;\r\n    width: 70%;\r\n    border: 2px solid rgba(82, 82, 82, 1);\r\n    margin-top: 40px;\r\n}\r\n.remove_margin_bottom {\r\n    margin-bottom: 0px;\r\n}\r\n.remove_margin_top {\r\n    margin-top: 0px;\r\n}\r\n.svg-img {\r\n    text-align: center;\r\n}\r\n.svg-img img{\r\n    height: 130px;\r\n    width: auto;\r\n}\r\n@media screen and (min-width: 300px) {\r\n    header, .content {\r\n        left: 0;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n    nav .wrapper ul li {\r\n        display: none;\r\n    }\r\n    nav .wrapper ul li.bars {\r\n        display: block;\r\n    }\r\n    .responsive_menu {\r\n        display: block;\r\n    }\r\n\r\n    .boxes .box {\r\n        margin-right: 0px;\r\n        margin-bottom: 10px;\r\n        width: 100%;\r\n        min-height: 200px;\r\n    }\r\n    .content_box {\r\n        padding: 20px;\r\n    }\r\n    .content_box div {\r\n        width: 100%;\r\n        text-align: center;\r\n        margin-bottom: 20px\r\n    }\r\n    .content_box .text {\r\n        width: 100%;\r\n    }\r\n    .content_box_wrapper .content_box:nth-child(2) {\r\n        padding: 20px;\r\n    }\r\n    .text_area {\r\n        width: 100%;\r\n    }\r\n    .footer_line div {\r\n        margin-right: 0px;  \r\n    }\r\n    .food_box .img {\r\n        width: 100%;\r\n    }\r\n    .food_box .img:nth-child(even) {\r\n        margin-top: 20px;\r\n    }\r\n    .food_box:nth-child(4) .img {\r\n        width: 100%;\r\n    }\r\n    .food_box:nth-child(4) .text_area {\r\n        width: 100%;\r\n    }\r\n}\r\n@media screen and (min-width: 480px) {\r\n\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .content_box {\r\n        padding: 30px 20px 80px 30px;\r\n    }\r\n    .content_box img {\r\n        width: 100px;\r\n    }\r\n    \r\n    .content_box div {\r\n        width: 22%;\r\n        text-align: left;\r\n    }\r\n    .content_box .text {\r\n        width: 53%;\r\n    }\r\n    .boxes .box {\r\n        width: 49%; \r\n        min-height: 375px;\r\n    }\r\n    .boxes .box:nth-child(odd) {\r\n        margin-right: 2%;\r\n    }\r\n    .text_area {\r\n        font-size: 14px;\r\n        width: 43%;\r\n    }\r\n    .food_box .img {\r\n        width: 53%;\r\n    }\r\n    .food_box .img:nth-child(even) {\r\n        margin-top: 0px;\r\n    }\r\n    .food_box:nth-child(4) .img {\r\n        width: 42%;\r\n    }\r\n    .food_box:nth-child(4) .text_area {\r\n        width: 52%;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n    nav .wrapper ul li.bars {\r\n        display: none;\r\n    }\r\n    .responsive_menu {\r\n        display: none;\r\n    }\r\n    header, .content {\r\n        left: 137px;\r\n        width: 72%;\r\n        box-sizing: border-box;\r\n    }\r\n    nav .wrapper ul li {\r\n        margin: 0px 14px;\r\n        display: inline-block;\r\n    }\r\n    \r\n    nav .wrapper .logo {\r\n        width: 33%;\r\n    }\r\n    footer .content {\r\n        width: 72%;\r\n    }\r\n    .content_box img {\r\n        width: 120px;\r\n    }\r\n    .text_area {\r\n        font-size: 16px;\r\n    }\r\n    .content_box_wrapper .content_box:nth-child(2) {\r\n        padding: 80px 0px 80px 15px;\r\n    }\r\n}\r\n@media screen and (min-width: 1024px) {\r\n\r\n}\r\n@media screen and (min-width: 1280px) {\r\n    \r\n    .boxes .box {\r\n        width: 24%;\r\n        min-height: 475px;\r\n    }\r\n    .boxes .box:nth-child(2n+1), .boxes .box:nth-child(2) {\r\n        margin-right: 1.3%;\r\n    }\r\n    \r\n    nav .wrapper .logo {\r\n        width: 49%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMsMENBQTBDO0lBQzFDLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksWUFBWTtJQUNaLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLHlDQUF5QztJQUN6QyxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLDRCQUE0QjtJQUM1Qix5Q0FBeUM7SUFDekMsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIscUVBQXFFO0NBQ3hFO0FBQ0Q7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLHFDQUFxQztJQUNyQyxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCwwQ0FBMEM7SUFDMUMsMkNBQTJDO0lBQzNDLGNBQWM7SUFDZCx1Q0FBdUM7Q0FDMUM7QUFFRDtDQUNDLDJCQUEyQjtJQUN4QixtQkFBbUI7Q0FDdEI7QUFDRDtDQUNDLGdCQUFnQjtJQUNiLGVBQWU7Q0FDbEI7QUFDRDtDQUNDLG1CQUFtQjtJQUNoQixXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksY0FBYztJQUNkLFlBQVk7Q0FDZjtBQUVEO0lBQ0k7UUFDSSxRQUFRO1FBQ1IsWUFBWTtRQUNaLHVCQUF1QjtLQUMxQjtJQUNEO1FBQ0ksY0FBYztLQUNqQjtJQUNEO1FBQ0ksZUFBZTtLQUNsQjtJQUNEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksY0FBYztLQUNqQjtJQUNEO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixtQkFBbUI7S0FDdEI7SUFDRDtRQUNJLFlBQVk7S0FDZjtJQUNEO1FBQ0ksY0FBYztLQUNqQjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxrQkFBa0I7S0FDckI7SUFDRDtRQUNJLFlBQVk7S0FDZjtJQUNEO1FBQ0ksaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxZQUFZO0tBQ2Y7SUFDRDtRQUNJLFlBQVk7S0FDZjtDQUNKO0FBRUQ7O0NBRUM7QUFDRDtJQUNJO1FBQ0ksNkJBQTZCO0tBQ2hDO0lBQ0Q7UUFDSSxhQUFhO0tBQ2hCOztJQUVEO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSxpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO0tBQ2Q7SUFDRDtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLFdBQVc7S0FDZDtDQUNKO0FBQ0Q7SUFDSTtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsdUJBQXVCO0tBQzFCO0lBQ0Q7UUFDSSxpQkFBaUI7UUFDakIsc0JBQXNCO0tBQ3pCOztJQUVEO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLGFBQWE7S0FDaEI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksNEJBQTRCO0tBQy9CO0NBQ0o7QUFDRDs7Q0FFQztBQUNEOztJQUVJO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksbUJBQW1CO0tBQ3RCOztJQUVEO1FBQ0ksV0FBVztLQUNkO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc25hY2tfcmlnaHRfdmlkZW8ge1xyXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDE1MHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNuYWNrX3JpZ2h0X3ZpZGVvIGgyIHtcclxuICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICBwYWRkaW5nOiAwcHggMTUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuLndhdGNoX3ZpZGVvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuLndhdGNoX3ZpZGVvIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbn1cclxuLndhdGNoX3ZpZGVvICsgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzRjdDQUM7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc25hY2tfcmlnaHRfaW1nIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMzBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDMwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogNTBweCBzb2xpZCByZ2IoNjMsIDEyNCwgMTcyKTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jb250ZW50X2JveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4IDgwcHggODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY29udGVudF9ib3ggZGl2IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIyJTtcclxufVxyXG4uY29udGVudF9ib3ggaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uY29udGVudF9ib3ggLnRleHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTMlO1xyXG4gICAgY29sb3I6ICMyRjJFMkU7XHJcbn1cclxuLmNvbnRlbnRfYm94X3dyYXBwZXIgLmNvbnRlbnRfYm94Om50aC1jaGlsZCgxKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNSwgMTg3LCAxOTUsIDEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5jb250ZW50X2JveF93cmFwcGVyIC5jb250ZW50X2JveDpudGgtY2hpbGQoMikge1xyXG4gICAgcGFkZGluZzogODBweCAwcHggODBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjUsIDE4NywgMTk1LCAxKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLmNvbnRlbnRfYm94X3dyYXBwZXIgPiBoMiwgLm11bmNoZXJzX2hhdmVfc3Bva2VuX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbiAgICBtYXJnaW46IDQwcHggMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4udGV4dC11cHBlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5ib3hlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5ib3hlcyAuYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI1LCAxODcsIDE5NSwgMC44NSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDc1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5ib3hlcyAuYm94Om50aC1jaGlsZCg0KSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uYm94ZXMgLmJveCBoMyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmJveGVzIC5ib3ggcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6IHJnYig2MywgNjEsIDYxKTtcclxufVxyXG4uc3Vic2NyaWJlX2J0bjIge1xyXG4gICAgbWFyZ2luOiA4MHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN1YnNjcmliZV9idG4yIGEge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNjMsIDEyNCwgMTcyLCAxKTtcclxuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgMTI0LCAxNzIsIDEpO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNHMgZWFzZSAwcywgYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2UgMHM7XHJcbn1cclxuLnN1YnNjcmliZV9idG4yIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG59XHJcbi53aGF0c19pbnNpZGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53aGF0c19pbnNpZGUgaDIge1xyXG4gICAgY29sb3I6ICNERTZCNDg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndoYXRzX2luc2lkZSBwIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi53aGF0c19pbnNpZGUgaW1nIHtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG4ud2hhdHNfaW5zaWRlIHNwYW4ge1xyXG4gICAgY29sb3I6ICNERTZCNDg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4ueW91X3dpbGxfZ2V0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ueW91X3dpbGxfZ2V0IGgzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbn1cclxuLmxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxpc3RfaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ubGlzdF9pdGVtIC5saXN0X251bWJlciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjdDQUM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5saXN0X2l0ZW0gLmxpc3RfdGV4dCB7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjNjA1ZTVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm11bmNoZXJzX2hhdmVfc3Bva2VuX2JveF93cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLm11bmNoZXJzX2hhdmVfc3Bva2VuX2JveCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjUsIDE4NywgMTk1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tdW5jaGVyc19oYXZlX3Nwb2tlbl9ib3g6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbjogMCA1JTtcclxufVxyXG4ubXVuY2hlcnNfaGF2ZV9zcG9rZW5fYm94IHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3JkZXItdG9wOiA2MHB4IHNvbGlkIHJnYigxMjUsIDE4NywgMTk1KTtcclxuICAgIGJvcmRlci1sZWZ0OiA2MHB4IHNvbGlkIHJnYigxMjUsIDE4NywgMTk1KTtcclxuICAgIGJvdHRvbTogLTU1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhZ2VfZG93bl9jb250ZW50IHtcclxuXHRtYXJnaW46IDEwNXB4IDBweCA1MHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGFnZV9kb3duX2NvbnRlbnQgaDIge1xyXG5cdGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiAjNjA1RTVFO1xyXG59XHJcbi5wYWdlX2Rvd25fY29udGVudCBpbnB1dCB7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoODIsIDgyLCA4MiwgMSk7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5yZW1vdmVfbWFyZ2luX2JvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnJlbW92ZV9tYXJnaW5fdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4uc3ZnLWltZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN2Zy1pbWcgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkge1xyXG4gICAgaGVhZGVyLCAuY29udGVudCB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgbmF2IC53cmFwcGVyIHVsIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgbmF2IC53cmFwcGVyIHVsIGxpLmJhcnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnJlc3BvbnNpdmVfbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmJveGVzIC5ib3gge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9ib3ggZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRfYm94IC50ZXh0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2JveF93cmFwcGVyIC5jb250ZW50X2JveDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dF9hcmVhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5mb290ZXJfbGluZSBkaXYge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4OyAgXHJcbiAgICB9XHJcbiAgICAuZm9vZF9ib3ggLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZm9vZF9ib3ggLmltZzpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9vZF9ib3g6bnRoLWNoaWxkKDQpIC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmZvb2RfYm94Om50aC1jaGlsZCg0KSAudGV4dF9hcmVhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250ZW50X2JveCB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAyMHB4IDgwcHggMzBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2JveCBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRlbnRfYm94IGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDIyJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRfYm94IC50ZXh0IHtcclxuICAgICAgICB3aWR0aDogNTMlO1xyXG4gICAgfVxyXG4gICAgLmJveGVzIC5ib3gge1xyXG4gICAgICAgIHdpZHRoOiA0OSU7IFxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM3NXB4O1xyXG4gICAgfVxyXG4gICAgLmJveGVzIC5ib3g6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICB9XHJcbiAgICAudGV4dF9hcmVhIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDQzJTtcclxuICAgIH1cclxuICAgIC5mb29kX2JveCAuaW1nIHtcclxuICAgICAgICB3aWR0aDogNTMlO1xyXG4gICAgfVxyXG4gICAgLmZvb2RfYm94IC5pbWc6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9vZF9ib3g6bnRoLWNoaWxkKDQpIC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiA0MiU7XHJcbiAgICB9XHJcbiAgICAuZm9vZF9ib3g6bnRoLWNoaWxkKDQpIC50ZXh0X2FyZWEge1xyXG4gICAgICAgIHdpZHRoOiA1MiU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIG5hdiAud3JhcHBlciB1bCBsaS5iYXJzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnJlc3BvbnNpdmVfbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGhlYWRlciwgLmNvbnRlbnQge1xyXG4gICAgICAgIGxlZnQ6IDEzN3B4O1xyXG4gICAgICAgIHdpZHRoOiA3MiU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIG5hdiAud3JhcHBlciB1bCBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTRweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5hdiAud3JhcHBlciAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgIH1cclxuICAgIGZvb3RlciAuY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDcyJTtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2JveCBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgIH1cclxuICAgIC50ZXh0X2FyZWEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2JveF93cmFwcGVyIC5jb250ZW50X2JveDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHBhZGRpbmc6IDgwcHggMHB4IDgwcHggMTVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICBcclxuICAgIC5ib3hlcyAuYm94IHtcclxuICAgICAgICB3aWR0aDogMjQlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ3NXB4O1xyXG4gICAgfVxyXG4gICAgLmJveGVzIC5ib3g6bnRoLWNoaWxkKDJuKzEpLCAuYm94ZXMgLmJveDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS4zJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmF2IC53cmFwcGVyIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"snack_right_video\">\n  <h2><b>Delicious</b> Wholesome <b>Healthy</b> Snacks Delivered to you every <b>Week!</b></h2>\n</div>\n<div class=\"watch_video\">\n    <h3>Watch the Video</h3>\n    <div class=\"snack_right_img\"></div>\n</div>\n<h2>ONLY IN NAMMA BENGALURU!</h2>\n<div class=\"content_box_wrapper\">\n  <div class=\"content_box\">\n      <div>\n          <img src=\"assets/hurry.png\" alt=\"No Image\"/>\n      </div>\n      <div>\n          <img src=\"assets/desk.png\" alt=\"No Image\"/>\n      </div>\n      <div class=\"text\">\n          <p>With a busy work schedule, it's hard to find time for all the things that make you fit and happy. Without a balanced life, it's easy to put your health on the sidelines and just keep going.</p>\n      </div>\n  </div>\n  <div class=\"content_box\">\n      <div class=\"text\">\n          <p>It's no news that good snacking habits can prevent overeating, keep blood sugar balanced, help you lose weight and improve mood and focus. </p>\n      </div>\n      <div>\n          <img src=\"assets/diet.png\" alt=\"No Image\"/>\n      </div>\n      <div>\n          <img src=\"assets/liposuction.png\" alt=\"No Image\"/>\n      </div>\n  </div>\n  <div class=\"content_box\">\n      <div>\n          <img src=\"assets/people.png\" alt=\"No Image\"/>\n      </div>\n      <div>\n          <img src=\"assets/free-delivery.png\" alt=\"No Image\"/>\n      </div>\n      <div class=\"text\">\n          <p>We observed that evening snack time was the most overlooked in terms of keeping things healthy. That's why Munchies brings to you a bag full of snacks you need for the whole week.</p>\n      </div>\n  </div>\n  <h2 class=\"text-upper\">How it works</h2>\n  </div>\n  <div class=\"boxes\">\n      <div class=\"box\">\n          <div class=\"img svg-img\">\n              <img src=\"../../assets/student-on-computer.png\" />\n          </div>\n          <h3 class=\"text-upper\">Click Subscribe</h3>\n          <p>Go ahead take that first step and subscribe. Try our one week trial pack today.</p>\n      </div>\n      <div class=\"box\">\n          <div class=\"img svg-img\">\n                <img src=\"../../assets/girl.png\" />\n          </div>\n          <h3 class=\"text-upper\">CUSTOMIZE</h3>\n          <p>Tell us what flavours and snacks you like and dislike and we will customize your munchies bag to your liking.</p>\n      </div>\n      <div class=\"box\">\n          <div class=\"img svg-img\">\n                <img src=\"../../assets/delivery-truck.png\" />\n          </div>\n          <h3 class=\"text-upper\">WE DELIVER</h3>\n          <p>We deliver a different set of snacks each week! It's easy to get bored with a healthy snacking regime. Our collaboration with various companies and home cooks allows us to provide just the right amount of variation.\n\n          </p>\n      </div>\n      <div class=\"box\">\n          <div class=\"img svg-img\">\n                <img src=\"../../assets/smiling-girl.png\" />\n          </div>\n          <h3 class=\"text-upper\">EXPERIENCE THE BENEFITS</h3>\n          <p>Whether you're at work or at home everyone gets hungry between 4pm and 7pm. Choose something healthy and wholesome instead and enjoy the health benefits!</p>\n      </div>\n  </div>\n  <div class=\"subscribe_btn2\">\n      <a href=\"#\" role=\"button\">Get the Bag!</a>\n  </div>\n  <div class=\"whats_inside\">\n      <h2 class=\"text-upper\">What's Inside</h2>\n      <img src=\"assets/give.png\" alt=\"No Image\"/>\n      <p>Inside every munchies bag is a mix of healthy and hearty snacks. We've collaborated with some of the best snacking companies and home chefs to give you the best experience. Depending on your customization we'll deliver a different set of snacks each week at your doorstep. <span>Try our one week trial pack today!</span></p>\n  </div>\n<div class=\"you_will_get\">\n    <h3>YOU WILL GET-</h3>\n    <div class=\"list\">\n        <div class=\"list_item\">\n            <div class=\"list_number\">1.</div>\n            <div class=\"list_text\">4 tasty healthy snacks optimized to your liking</div>\n        </div>\n        <div class=\"list_item\">\n            <div class=\"list_number\">2.</div>\n            <div class=\"list_text\">1 drink either cold-pressed juice or a smoothie</div>\n        </div>\n        <div class=\"list_item\">\n            <div class=\"list_number\">3.</div>\n            <div class=\"list_text\">3 bags of green tea with honey sachets </div>\n        </div>\n        <div class=\"list_item\">\n            <div class=\"list_number\">4.</div>\n            <div class=\"list_text\">1 delicious whole fruit</div>\n        </div>\n    </div>\n</div>\n<h2 class=\"munchers_have_spoken_text\">THE MUNCHERS HAVE SPOKEN</h2>\n<div class=\"munchers_have_spoken_box_wrapper\">\n    <div class=\"munchers_have_spoken_box\">\n        <p>Text here of this size</p>\n        <span></span>\n    </div>\n    <div class=\"munchers_have_spoken_box\">\n        <p>Text here of this size</p>\n        <span></span>\n    </div>\n    <div class=\"munchers_have_spoken_box\">\n        <p>Text here of this size</p>\n        <span></span>\n    </div>\n</div>\n<div class=\"page_down_content\">\n    <h2>Subscribe to get the latest news about products and healthy snacking recipes</h2>\n    <input type=\"email\" name=\"email\" placeholder=\"Email\" />\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/manage-subscription/manage-subscription.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/manage-subscription/manage-subscription.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manage_subscription_page_wrapper {\r\n    display: flex;\r\n}\r\n.manage_subscription {\r\n    width: 500px;\r\n    height: 500px;\r\n    border-radius: 50%;\r\n    background-color: #6aa7c4;\r\n    margin: -40px 0px 40px -35px;\r\n}\r\n.manage_subscription .block {\r\n    width: 52%;\r\n    margin: 0 auto;\r\n}\r\n.manage_subscription .block:first-child {\r\n    margin-top: 100px;\r\n}\r\n.manage_subscription .block h3 {\r\n    font-size: 17px;\r\n    margin-bottom: 10px;\r\n    font-weight: normal;\r\n}\r\n.manage_subscription .block a {\r\n    text-decoration: none;\r\n    color: #fff;\r\n}\r\n.manage_subscription .block p {\r\n    line-height: 24px;\r\n    font-size: 16px;\r\n    margin: 0;\r\n    color: #292929;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXN1YnNjcmlwdGlvbi9tYW5hZ2Utc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsNkJBQTZCO0NBQ2hDO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1zdWJzY3JpcHRpb24vbWFuYWdlLXN1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbmFnZV9zdWJzY3JpcHRpb25fcGFnZV93cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1hbmFnZV9zdWJzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YWE3YzQ7XHJcbiAgICBtYXJnaW46IC00MHB4IDBweCA0MHB4IC0zNXB4O1xyXG59XHJcbi5tYW5hZ2Vfc3Vic2NyaXB0aW9uIC5ibG9jayB7XHJcbiAgICB3aWR0aDogNTIlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLm1hbmFnZV9zdWJzY3JpcHRpb24gLmJsb2NrOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5tYW5hZ2Vfc3Vic2NyaXB0aW9uIC5ibG9jayBoMyB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4ubWFuYWdlX3N1YnNjcmlwdGlvbiAuYmxvY2sgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubWFuYWdlX3N1YnNjcmlwdGlvbiAuYmxvY2sgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjMjkyOTI5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/manage-subscription/manage-subscription.component.html":
/*!************************************************************************!*\
  !*** ./src/app/manage-subscription/manage-subscription.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"manage_subscription_page_wrapper\">\n  <div class=\"manage_subscription\">\n      <div class=\"block\">\n          <h3><a href=\"/my-orders\">My Orders</a></h3>\n          <p>See your order history</p>\n      </div>\n      <div class=\"block\">\n          <h3><a href=\"/skip-week\">Skeep the coming weeks bag</a></h3>\n          <p>you can skip a week's bag just give us a 2 day head's up</p>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/manage-subscription/manage-subscription.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/manage-subscription/manage-subscription.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManageSubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSubscriptionComponent", function() { return ManageSubscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageSubscriptionComponent = /** @class */ (function () {
    function ManageSubscriptionComponent() {
    }
    ManageSubscriptionComponent.prototype.ngOnInit = function () {
    };
    ManageSubscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-subscription',
            template: __webpack_require__(/*! ./manage-subscription.component.html */ "./src/app/manage-subscription/manage-subscription.component.html"),
            styles: [__webpack_require__(/*! ./manage-subscription.component.css */ "./src/app/manage-subscription/manage-subscription.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageSubscriptionComponent);
    return ManageSubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/my-orders/my-orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my_orders_page_circle {\r\n    width: 500px;\r\n    height: 500px;\r\n    background: rgb(125, 187, 195);\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: 80px;\r\n    top: 20px;\r\n}\r\n.my_orders_page_wrapper {\r\n    width: 90%;\r\n    min-height: 400px;\r\n    padding: 30px;\r\n    box-sizing: border-box;\r\n}\r\n.my_orders_page_wrapper > h2 {\r\n    color: #E5663D;\r\n    font-size: 23px;\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n.my_orders_page_wrapper .table {\r\n    position: relative;\r\n    z-index: 99;\r\n}\r\n.my_orders_page_wrapper .table_header, .my_orders_page_wrapper .table_content {\r\n    margin-left: 15px;\r\n}\r\n.my_orders_page_wrapper .table_header .heading, .my_orders_page_wrapper .table_content > .content_block {\r\n    width: 24%;\r\n    display: inline-block;\r\n    color: #E5663D;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n.my_orders_page_wrapper .table_content {\r\n}\r\n.my_orders_page_wrapper .table_content .content_block {\r\n    margin-top: 10px;\r\n    color: #292929;\r\n    font-weight: normal;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtDQUNiO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7Q0FDQztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9teS1vcmRlcnMvbXktb3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlfb3JkZXJzX3BhZ2VfY2lyY2xlIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTI1LCAxODcsIDE5NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogODBweDtcclxuICAgIHRvcDogMjBweDtcclxufVxyXG4ubXlfb3JkZXJzX3BhZ2Vfd3JhcHBlciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ubXlfb3JkZXJzX3BhZ2Vfd3JhcHBlciA+IGgyIHtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4ubXlfb3JkZXJzX3BhZ2Vfd3JhcHBlciAudGFibGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuLm15X29yZGVyc19wYWdlX3dyYXBwZXIgLnRhYmxlX2hlYWRlciwgLm15X29yZGVyc19wYWdlX3dyYXBwZXIgLnRhYmxlX2NvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLm15X29yZGVyc19wYWdlX3dyYXBwZXIgLnRhYmxlX2hlYWRlciAuaGVhZGluZywgLm15X29yZGVyc19wYWdlX3dyYXBwZXIgLnRhYmxlX2NvbnRlbnQgPiAuY29udGVudF9ibG9jayB7XHJcbiAgICB3aWR0aDogMjQlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubXlfb3JkZXJzX3BhZ2Vfd3JhcHBlciAudGFibGVfY29udGVudCB7XHJcbn1cclxuLm15X29yZGVyc19wYWdlX3dyYXBwZXIgLnRhYmxlX2NvbnRlbnQgLmNvbnRlbnRfYmxvY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my_orders_page_wrapper\">\n  <h2>My Orders</h2>\n  <div class=\"table\">\n      <div class=\"table_header\">\n          <div class=\"heading\">Order Id</div>\n          <div class=\"heading\">Plan</div>\n          <div class=\"heading\">Total</div>\n          <div class=\"heading\">Date</div>\n      </div>\n      <div class=\"table_content\">\n          <div class=\"content_block\">X00122</div>\n          <div class=\"content_block\">1 week</div>\n          <div class=\"content_block\">600</div>\n          <div class=\"content_block\">16.05.19</div>\n      </div>\n  </div>\n  <div class=\"my_orders_page_circle\"></div>\n</div>"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent() {
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/my-orders/my-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/order-summary/order-summary.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-summary/order-summary.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order_summary_wrapper {\r\n    box-sizing: border-box;\r\n}\r\n.order_summary_payment {\r\n    padding-bottom: 100px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.order_summary {\r\n    padding: 10px 20px;\r\n    width: 25%;\r\n    box-sizing: border-box;\r\n}\r\n.order_summary .plan {\r\n    margin-bottom: 40px;\r\n}\r\n.order_summary h2 {\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.order_summary .heading {\r\n    margin-bottom: 15px;\r\n    color: #E5663D;\r\n    font-size: 14px;\r\n}\r\n.order_summary .heading span:first-child {\r\n    margin-right: 25px;\r\n}\r\n.order_summary .week_plan {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n.order_summary .plan .selected_product {\r\n    font-size: 14px;\r\n    margin-bottom: 5px;\r\n}\r\n.sub_total_shipment {\r\n    margin-top: 60px;\r\n    color: #E5663D;\r\n}\r\n.sub_total_shipment .block {\r\n    margin-bottom: 10px;\r\n}\r\n.sub_total_shipment .block span:first-child {\r\n    width: 73%;\r\n    display: inline-block;\r\n}\r\n.payment {\r\n    box-sizing: border-box;\r\n    flex: 1;\r\n    text-align: right;\r\n    padding: 22px 100px;\r\n}\r\n.payment a {\r\n    font-size: 23px;    \r\n    font-weight: bold;\r\n    color: #E5663D;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n.order_summary_wrapper p {\r\n    text-align: center;\r\n    color: #E5663D;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXN1bW1hcnkvb3JkZXItc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyX3N1bW1hcnlfd3JhcHBlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5vcmRlcl9zdW1tYXJ5X3BheW1lbnQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ub3JkZXJfc3VtbWFyeSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ub3JkZXJfc3VtbWFyeSAucGxhbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5vcmRlcl9zdW1tYXJ5IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG59XHJcbi5vcmRlcl9zdW1tYXJ5IC5oZWFkaW5nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ub3JkZXJfc3VtbWFyeSAuaGVhZGluZyBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG4ub3JkZXJfc3VtbWFyeSAud2Vla19wbGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5vcmRlcl9zdW1tYXJ5IC5wbGFuIC5zZWxlY3RlZF9wcm9kdWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uc3ViX3RvdGFsX3NoaXBtZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxufVxyXG4uc3ViX3RvdGFsX3NoaXBtZW50IC5ibG9jayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zdWJfdG90YWxfc2hpcG1lbnQgLmJsb2NrIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDczJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ucGF5bWVudCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZmxleDogMTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMjJweCAxMDBweDtcclxufVxyXG4ucGF5bWVudCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDsgICAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5vcmRlcl9zdW1tYXJ5X3dyYXBwZXIgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/order-summary/order-summary.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-summary/order-summary.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"order_summary_wrapper\">\n  <div class=\"order_summary_payment\">\n      <div class=\"order_summary\">\n          <h2>Order Summary</h2>\n          <div class=\"plan\">\n              <div class=\"heading\">\n                  <span>Plan</span>\n                  <span>Change</span>\n              </div>\n              <div class=\"week_plan\">One Week Plan</div>\n          </div>\n          <div class=\"plan\">\n              <div class=\"heading\">\n                  <span>Dietary Selections</span>\n                  <span>Change</span>\n              </div>\n              <div class=\"selected_product\">No Chocolate</div>\n              <div class=\"selected_product\">No Eggs</div>\n          </div>\n          <div class=\"sub_total_shipment\">\n              <div class=\"block\">\n                  <span>Sub Total</span>\n                  <span>XXXX</span>\n              </div>\n              <div class=\"block\">\n                  <span>Shipping</span>\n                  <span>Free</span>\n              </div>\n          </div>\n      </div>\n      <div class=\"payment\">\n          <a>Payment</a>\n      </div>\n  </div>\n  <p>* Deliveries are only on Mondays, so you'll get bag at the closest Monday from when you place your order.</p>\n</div>"

/***/ }),

/***/ "./src/app/order-summary/order-summary.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-summary/order-summary.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function() { return OrderSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent() {
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
    };
    OrderSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-summary',
            template: __webpack_require__(/*! ./order-summary.component.html */ "./src/app/order-summary/order-summary.component.html"),
            styles: [__webpack_require__(/*! ./order-summary.component.css */ "./src/app/order-summary/order-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());



/***/ }),

/***/ "./src/app/personal-details/personal-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/personal-details/personal-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".personal_details_wrapper {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n.personal_details_wrapper h2 {\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.personal_details_wrapper form {\r\n    width: 60%;\r\n    padding: 0 15%;\r\n    margin: 0 auto;\r\n}\r\n.personal_details_wrapper form input {\r\n    width: 100%;\r\n    padding: 10px 20px;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n    border: 2px solid #efefef;\r\n}\r\n.personal_details_wrapper form button {\r\n    padding: 10px 40px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 2px solid #323232;\r\n    border-radius: 20px;\r\n    color: #323232;\r\n}\r\n.personal_details_wrapper form button:hover {\r\n    color: #fff;\r\n    border: 2px solid #fff;\r\n    background-color: #323232;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtZGV0YWlscy9wZXJzb25hbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9wZXJzb25hbC1kZXRhaWxzL3BlcnNvbmFsLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXJzb25hbF9kZXRhaWxzX3dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wZXJzb25hbF9kZXRhaWxzX3dyYXBwZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbn1cclxuLnBlcnNvbmFsX2RldGFpbHNfd3JhcHBlciBmb3JtIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAwIDE1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5wZXJzb25hbF9kZXRhaWxzX3dyYXBwZXIgZm9ybSBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VmZWZlZjtcclxufVxyXG4ucGVyc29uYWxfZGV0YWlsc193cmFwcGVyIGZvcm0gYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMyMzIzMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogIzMyMzIzMjtcclxufVxyXG4ucGVyc29uYWxfZGV0YWlsc193cmFwcGVyIGZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/personal-details/personal-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/personal-details/personal-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"personal_details_wrapper\">\n  <h2>Personal Details</h2>\n  <form [formGroup]=\"personalDetailsForm\" (ngSubmit)=\"onSubmit()\">\n    <input type=\"text\" name=\"name\" placeholder=\"Name\" />\n    <input type=\"text\" name=\"surname\" placeholder=\"Surname\" />\n    <input type=\"email\" name=\"email\" placeholder=\"Email\" />\n    <input type=\"tel\" name=\"phone\" placeholder=\"Phone Number\" />\n    <input type=\"text\" name=\"address\" placeholder=\"Address\" />\n    <input type=\"text\" name=\"postalCode\" placeholder=\"Postal Code\" />\n    <button name=\"btn\" class=\"btn\">Change</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/personal-details/personal-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/personal-details/personal-details.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function() { return PersonalDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalDetailsComponent = /** @class */ (function () {
    function PersonalDetailsComponent() {
    }
    PersonalDetailsComponent.prototype.ngOnInit = function () {
    };
    PersonalDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-details',
            template: __webpack_require__(/*! ./personal-details.component.html */ "./src/app/personal-details/personal-details.component.html"),
            styles: [__webpack_require__(/*! ./personal-details.component.css */ "./src/app/personal-details/personal-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalDetailsComponent);
    return PersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/refund-and-cancellation/refund-and-cancellation.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/refund-and-cancellation/refund-and-cancellation.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.rf_page_wrapper {\r\n    padding: 50px 0px;\r\n    font-size: 18px;\r\n}\r\n.rf_page_wrapper h2 {\r\n    color: #E5663D;\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n.rf_page_wrapper p {\r\n    line-height: 30px;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 50px;\r\n}\r\n.rf_page_wrapper h3 {\r\n    margin-bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmdW5kLWFuZC1jYW5jZWxsYXRpb24vcmVmdW5kLWFuZC1jYW5jZWxsYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlZnVuZC1hbmQtY2FuY2VsbGF0aW9uL3JlZnVuZC1hbmQtY2FuY2VsbGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnJmX3BhZ2Vfd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ucmZfcGFnZV93cmFwcGVyIGgyIHtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4ucmZfcGFnZV93cmFwcGVyIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4ucmZfcGFnZV93cmFwcGVyIGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/refund-and-cancellation/refund-and-cancellation.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/refund-and-cancellation/refund-and-cancellation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rf_page_wrapper\">\n    <h2>Refund and Cancellation</h2>\n    <p>We want you to be completely satisfied with your order from Munchies. If for any reason you are displeased with the snacks provided, we will try to make it right, provided the reasons are genuine and proved after an investigation. Please contact us if you don't like your purchase for any reason.</p>\n    <div class=\"policy_block\">\n        <h3>Refund Policy</h3>\n        <p>Please send us an email at admin@munchies.co.in. if you need to cancel your order. Let us know why you are unhappy. We’ll give you a refund or send out a replacement - whatever suits you best.\n\n                Your refund will be initiated by us within 2 business days of receiving the refund request and authorization of the refund. No refunds will be made after the 12 hours of cancellation window.</p>\n        \n    </div>\n    <div class=\"policy_block\">\n            <h3>Cancellation Policy</h3>\n            <p>We understand if you need to cancel your order. Circumstances change and a cancellation is the only thing that can be done. Before cancelling do reach out to us on admin@munchies.co.in and tell us why. No order will be cancelled after 12 hours of placing the order. </p>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/refund-and-cancellation/refund-and-cancellation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/refund-and-cancellation/refund-and-cancellation.component.ts ***!
  \******************************************************************************/
/*! exports provided: RefundAndCancellationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundAndCancellationComponent", function() { return RefundAndCancellationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RefundAndCancellationComponent = /** @class */ (function () {
    function RefundAndCancellationComponent() {
    }
    RefundAndCancellationComponent.prototype.ngOnInit = function () {
    };
    RefundAndCancellationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-refund-and-cancellation',
            template: __webpack_require__(/*! ./refund-and-cancellation.component.html */ "./src/app/refund-and-cancellation/refund-and-cancellation.component.html"),
            styles: [__webpack_require__(/*! ./refund-and-cancellation.component.css */ "./src/app/refund-and-cancellation/refund-and-cancellation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RefundAndCancellationComponent);
    return RefundAndCancellationComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin_page_wrapper {\r\n    display: flex;\r\n    margin-top: 80px;\r\n}\r\n.signin_page_first_box {\r\n    width: 400px;\r\n    height: 400px;\r\n    border-radius: 50%;\r\n    background-color: rgba(131, 167, 155, 1);\r\n    margin: 40px 0px 40px -35px;\r\n}\r\n.signin_page_first_box img {\r\n    margin: 180px 0 0 170px;\r\n}\r\n.signin_box {\r\n    width: 500px;\r\n    height: 500px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    right: -180px;\r\n    top: -30px;\r\n}\r\n.signin_box_content {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.signin_box_content h2 {\r\n    margin: 40px 0px 0px 115px;\r\n    color: #DE6B48;\r\n    font-size: 30px;\r\n}\r\n.signin_box_content input[type=\"email\"], .signin_box_content input[type=\"password\"] {\r\n    padding: 15px;\r\n    border: 0px;\r\n    width: 53%;\r\n    margin: 0px 0px 15px 70px;\r\n    color: rgba(63,124,172,1);\r\n}\r\n.signin_box_content input.border_bottom {\r\n    border-bottom: 2px solid rgba(63,124,172,1);\r\n}\r\n.forgot_remember_links, .sign_up_wrapper {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.remember_me {\r\n    margin: 20px 85px 20px 70px;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    color: #DE6B48;\r\n}\r\n.forgot_password {\r\n    display: inline-block;\r\n    color: #DE6B48;\r\n}\r\n.sign_in_button {\r\n    display: block;\r\n    margin: 20px 0px 35px 70px;\r\n}\r\n.sign_in_button button {\r\n    text-decoration: none;\r\n    padding: 10px 145px;\r\n    background: #fff;\r\n    color: #3F7CAC;\r\n    cursor: pointer;\r\n    border: 2px solid;\r\n    border-color: #3F7CAC;\r\n    box-shadow: -0.42px 1.96px 4px 0px rgba(0,0,0,0.6);\r\n    transition: border-color 0.4s ease 0s, color 0.4s ease 0s;\r\n}\r\n.sign_in_button a:hover {\r\n    color: #000;\r\n    border-color: #fff; \r\n}\r\n.dont_have_account_text {\r\n    font-size: 16px;\r\n    display: inline-block;\r\n    float: left;\r\n    margin: 0px 70px 20px 68px;\r\n    color: #DE6B48;\r\n}\r\n.sign_up_text {\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n.sign_up_text a {\r\n    text-decoration: none;\r\n    color: #2F2E2E;\r\n}\r\n.or_login_with {\r\n    margin-bottom: 10px;\r\n}\r\n.or {\r\n    width: 45%;\r\n    text-align: right;\r\n    color: #DE6B48;\r\n}\r\n.loginwith {\r\n    width: 58%;\r\n    text-align: right;\r\n    margin-top: 10px;\r\n    color: #DE6B48;\r\n}\r\n.facebook_google {\r\n    width: 60%;\r\n    text-align: right;\r\n}\r\n.facebook_google img:first-child {\r\n    margin-right: 22px;\r\n}\r\n.invalid-feedback {\r\n    margin-left: 70px;\r\n    color: red;\r\n    padding: 10px;\r\n    background-color: antiquewhite;\r\n    width: 55%;\r\n    border-radius: 5px;\r\n}\r\n@media screen and (min-width: 300px) {\r\n    .signin_page_first_box {\r\n        margin: 40px 0px 40px 40px;\r\n        display: none;\r\n    }\r\n    .signin_page_first_box img {\r\n        height: 200px;\r\n        margin: 250px 0 0px 180px;\r\n    }\r\n    .signin_box {\r\n        top: 0px;\r\n        right: 0px;\r\n        width: 600px;\r\n        height: 600px;\r\n    }\r\n    .signin_box_content h2 {\r\n        font-size: 26px;\r\n        margin: 40px 0px 0px 90px;\r\n    }\r\n    .remember_me {\r\n        margin: 20px 40px 20px 30px;\r\n    }\r\n    .sign_in_button {\r\n        margin: 20px 0px 35px 34px;\r\n    }\r\n    .sign_in_button a {\r\n        padding: 10px 100px;\r\n    }\r\n    .sign_up_text {\r\n        margin-left: 100px;\r\n        margin-bottom: 20px;\r\n    }\r\n    .facebook_google {\r\n        width: 63%;\r\n    }\r\n}\r\n@media screen and (min-width: 480px) {\r\n    .contact_information .email_id {\r\n        padding-top: 0;\r\n        margin-top: 70px;\r\n        margin-left: 40px;\r\n    \r\n    }\r\n    .signin_box {\r\n        top: 0px;\r\n        right: 0px;\r\n        width: 500px;\r\n        height: 500px;\r\n    }\r\n    .signin_box_content h2 {\r\n        font-size: 26px;\r\n        margin: 40px 0px 0px 115px;\r\n    }\r\n    .remember_me {\r\n        margin: 20px 85px 20px 70px;\r\n    }\r\n    .sign_in_button {\r\n        margin: 20px 0px 35px 70px;\r\n    }\r\n    .sign_in_button a {\r\n        padding: 10px 126px;\r\n    }\r\n    .sign_up_text {\r\n        margin-left: 0px;\r\n        margin-bottom: 0px;\r\n    }\r\n    .facebook_google {\r\n        width: 61%;\r\n    }\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .signin_page_first_box {\r\n        width: 300px;\r\n        height: 300px;\r\n        margin: 40px 0px 40px -35px;\r\n        display: block;\r\n    }\r\n    .signin_page_first_box img {\r\n        margin: 160px 0 0 110px;\r\n        height: 200px;\r\n    }\r\n    .signin_box {\r\n        right: -10px;\r\n        top: -30px;\r\n    }\r\n    .signin_box_content h2 {\r\n        font-size: 30px;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n    .signin_box {\r\n        right: -90px;\r\n    }\r\n    \r\n}\r\n@media screen and (min-width: 1024px) {\r\n    .signin_box {\r\n        right: -90px;\r\n    }\r\n}\r\n@media screen and (min-width: 1280px) {\r\n    .signin_page_first_box {\r\n        width: 400px;\r\n        height: 400px;\r\n    }\r\n    .signin_page_first_box img {\r\n        margin: 180px 0 0 170px;\r\n        height: auto;\r\n    }\r\n    .signin_box {\r\n        right: -180px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsNEJBQTRCO0NBQy9CO0FBQ0Q7SUFDSSx3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSw0Q0FBNEM7Q0FDL0M7QUFDRDtJQUNJLFlBQVk7SUFDWixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtDQUM5QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1EQUFtRDtJQUNuRCwwREFBMEQ7Q0FDN0Q7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCO0FBRUQ7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQixjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxjQUFjO1FBQ2QsMEJBQTBCO0tBQzdCO0lBQ0Q7UUFDSSxTQUFTO1FBQ1QsV0FBVztRQUNYLGFBQWE7UUFDYixjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxnQkFBZ0I7UUFDaEIsMEJBQTBCO0tBQzdCO0lBQ0Q7UUFDSSw0QkFBNEI7S0FDL0I7SUFDRDtRQUNJLDJCQUEyQjtLQUM5QjtJQUNEO1FBQ0ksb0JBQW9CO0tBQ3ZCO0lBQ0Q7UUFDSSxtQkFBbUI7UUFDbkIsb0JBQW9CO0tBQ3ZCO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjtBQUVEO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGtCQUFrQjs7S0FFckI7SUFDRDtRQUNJLFNBQVM7UUFDVCxXQUFXO1FBQ1gsYUFBYTtRQUNiLGNBQWM7S0FDakI7SUFDRDtRQUNJLGdCQUFnQjtRQUNoQiwyQkFBMkI7S0FDOUI7SUFDRDtRQUNJLDRCQUE0QjtLQUMvQjtJQUNEO1FBQ0ksMkJBQTJCO0tBQzlCO0lBQ0Q7UUFDSSxvQkFBb0I7S0FDdkI7SUFDRDtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7S0FDdEI7SUFDRDtRQUNJLFdBQVc7S0FDZDtDQUNKO0FBQ0Q7SUFDSTtRQUNJLGFBQWE7UUFDYixjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLGVBQWU7S0FDbEI7SUFDRDtRQUNJLHdCQUF3QjtRQUN4QixjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxhQUFhO1FBQ2IsV0FBVztLQUNkO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSjtBQUNEO0lBQ0k7UUFDSSxhQUFhO0tBQ2hCOztDQUVKO0FBQ0Q7SUFDSTtRQUNJLGFBQWE7S0FDaEI7Q0FDSjtBQUVEO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsY0FBYztLQUNqQjtJQUNEO1FBQ0ksd0JBQXdCO1FBQ3hCLGFBQWE7S0FDaEI7SUFDRDtRQUNJLGNBQWM7S0FDakI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ25pbl9wYWdlX3dyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuLnNpZ25pbl9wYWdlX2ZpcnN0X2JveCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDE2NywgMTU1LCAxKTtcclxuICAgIG1hcmdpbjogNDBweCAwcHggNDBweCAtMzVweDtcclxufVxyXG4uc2lnbmluX3BhZ2VfZmlyc3RfYm94IGltZyB7XHJcbiAgICBtYXJnaW46IDE4MHB4IDAgMCAxNzBweDtcclxufVxyXG4uc2lnbmluX2JveCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAtMTgwcHg7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG59XHJcbi5zaWduaW5fYm94X2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc2lnbmluX2JveF9jb250ZW50IGgyIHtcclxuICAgIG1hcmdpbjogNDBweCAwcHggMHB4IDExNXB4O1xyXG4gICAgY29sb3I6ICNERTZCNDg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnNpZ25pbl9ib3hfY29udGVudCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIC5zaWduaW5fYm94X2NvbnRlbnQgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIHdpZHRoOiA1MyU7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTVweCA3MHB4O1xyXG4gICAgY29sb3I6IHJnYmEoNjMsMTI0LDE3MiwxKTtcclxufVxyXG4uc2lnbmluX2JveF9jb250ZW50IGlucHV0LmJvcmRlcl9ib3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoNjMsMTI0LDE3MiwxKTtcclxufVxyXG4uZm9yZ290X3JlbWVtYmVyX2xpbmtzLCAuc2lnbl91cF93cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnJlbWVtYmVyX21lIHtcclxuICAgIG1hcmdpbjogMjBweCA4NXB4IDIwcHggNzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjREU2QjQ4O1xyXG59XHJcbi5mb3Jnb3RfcGFzc3dvcmQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNERTZCNDg7XHJcbn1cclxuLnNpZ25faW5fYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAzNXB4IDcwcHg7XHJcbn1cclxuLnNpZ25faW5fYnV0dG9uIGJ1dHRvbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE0NXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjM0Y3Q0FDO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMzRjdDQUM7XHJcbiAgICBib3gtc2hhZG93OiAtMC40MnB4IDEuOTZweCA0cHggMHB4IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjRzIGVhc2UgMHMsIGNvbG9yIDAuNHMgZWFzZSAwcztcclxufVxyXG4uc2lnbl9pbl9idXR0b24gYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjsgXHJcbn1cclxuLmRvbnRfaGF2ZV9hY2NvdW50X3RleHQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDBweCA3MHB4IDIwcHggNjhweDtcclxuICAgIGNvbG9yOiAjREU2QjQ4O1xyXG59XHJcbi5zaWduX3VwX3RleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnNpZ25fdXBfdGV4dCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMkYyRTJFO1xyXG59XHJcbi5vcl9sb2dpbl93aXRoIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLm9yIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjREU2QjQ4O1xyXG59XHJcbi5sb2dpbndpdGgge1xyXG4gICAgd2lkdGg6IDU4JTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjREU2QjQ4O1xyXG59XHJcbi5mYWNlYm9va19nb29nbGUge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5mYWNlYm9va19nb29nbGUgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjJweDtcclxufVxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcclxuICAgIC5zaWduaW5fcGFnZV9maXJzdF9ib3gge1xyXG4gICAgICAgIG1hcmdpbjogNDBweCAwcHggNDBweCA0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuc2lnbmluX3BhZ2VfZmlyc3RfYm94IGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXJnaW46IDI1MHB4IDAgMHB4IDE4MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZ25pbl9ib3gge1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lnbmluX2JveF9jb250ZW50IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgbWFyZ2luOiA0MHB4IDBweCAwcHggOTBweDtcclxuICAgIH1cclxuICAgIC5yZW1lbWJlcl9tZSB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDQwcHggMjBweCAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZ25faW5fYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDIwcHggMHB4IDM1cHggMzRweDtcclxuICAgIH1cclxuICAgIC5zaWduX2luX2J1dHRvbiBhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZ25fdXBfdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2tfZ29vZ2xlIHtcclxuICAgICAgICB3aWR0aDogNjMlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRhY3RfaW5mb3JtYXRpb24gLmVtYWlsX2lkIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuc2lnbmluX2JveCB7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIH1cclxuICAgIC5zaWduaW5fYm94X2NvbnRlbnQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBtYXJnaW46IDQwcHggMHB4IDBweCAxMTVweDtcclxuICAgIH1cclxuICAgIC5yZW1lbWJlcl9tZSB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDg1cHggMjBweCA3MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZ25faW5fYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDIwcHggMHB4IDM1cHggNzBweDtcclxuICAgIH1cclxuICAgIC5zaWduX2luX2J1dHRvbiBhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEyNnB4O1xyXG4gICAgfVxyXG4gICAgLnNpZ25fdXBfdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2tfZ29vZ2xlIHtcclxuICAgICAgICB3aWR0aDogNjElO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc2lnbmluX3BhZ2VfZmlyc3RfYm94IHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBtYXJnaW46IDQwcHggMHB4IDQwcHggLTM1cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuc2lnbmluX3BhZ2VfZmlyc3RfYm94IGltZyB7XHJcbiAgICAgICAgbWFyZ2luOiAxNjBweCAwIDAgMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC5zaWduaW5fYm94IHtcclxuICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgICAgdG9wOiAtMzBweDtcclxuICAgIH1cclxuICAgIC5zaWduaW5fYm94X2NvbnRlbnQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnNpZ25pbl9ib3gge1xyXG4gICAgICAgIHJpZ2h0OiAtOTBweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnNpZ25pbl9ib3gge1xyXG4gICAgICAgIHJpZ2h0OiAtOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuc2lnbmluX3BhZ2VfZmlyc3RfYm94IHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuICAgIC5zaWduaW5fcGFnZV9maXJzdF9ib3ggaW1nIHtcclxuICAgICAgICBtYXJnaW46IDE4MHB4IDAgMCAxNzBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuc2lnbmluX2JveCB7XHJcbiAgICAgICAgcmlnaHQ6IC0xODBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signin_page_wrapper\">\n    <div class=\"signin_page_first_box\">\n        <img src=\"../assets/a.png\" />\n    </div>\n    <div class=\"signin_box\">\n        <div class=\"signin_box_content\">\n            <h2>Welcome to Munchies!</h2>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <input class=\"border_bottom\" type=\"email\" formControlName=\"username\" name=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" placeholder=\"Email ID\" required />\n                <div *ngIf=\"submitted && (f.username.errors || f.username.invalid)\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    <div *ngIf=\"f.username.errors.email\">Email must be a valid email address</div>\n                </div>\n                <input class=\"border_bottom\" formControlName=\"password\" type=\"password\" name=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\" required />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n                <div class=\"forgot_remember_links\">\n                    <div class=\"remember_me\"><input type=\"checkbox\" name=\"chk\" checked /> <span>Remember Me</span></div>\n                    <div class=\"forgot_password\">Forgot Password</div>\n                </div>\n                <div class=\"sign_in_button\">\n                    <button type=\"submit\">Sign In</button>\n                </div>\n                <div class=\"sign_up_wrapper\">\n                    <div class=\"dont_have_account_text\">Don't have an account?</div>\n                    <div class=\"sign_up_text\"><a href=\"/sign-up\">Sign Up now</a></div>\n                </div>\n                <div class=\"or_login_with\">\n                    <div class=\"or\">or</div>\n                    <div class=\"loginwith\">Log in with</div>\n                </div>\n            </form>\n            <div class=\"facebook_google\">\n                <img src=\"../assets/fb.png\" alt=\"No Image\"/>\n                <img src=\"../assets/google_plus.png\" alt=\"No Image\"/>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = /** @class */ (function () {
    function SignInComponent(formBuilder, router, http) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.submitted = false;
        this.username = '';
        this.password = '';
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(SignInComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignInComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.username = this.loginForm.get('username').value;
            this.password = this.loginForm.get('password').value;
            console.log(this.username + "\n");
            console.log(this.password);
            this.http.post('http://localhost:9191/api/user/login', { 'email': this.username, 'password': this.password }).subscribe(function (data) {
                console.log("PATCH Request is successful ", data);
            }, function (err) {
                console.log("Err", err);
            });
        }
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.create_account {   \r\n    width: 50%;\r\n    margin: 0 auto;\r\n}\r\n.create_account h2 {\r\n    color: #E5663D;\r\n    font-size: 23px;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n}\r\n.create_account form input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n    border: 2px solid #e2e2e2;\r\n}\r\n.invalid-feedback {\r\n    color: red;\r\n    padding: 10px;\r\n    background-color: antiquewhite;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    margin-bottom: 20px;\r\n}\r\n.create_account_btn {\r\n    width: 150px;\r\n    padding: 10px 0px;\r\n    margin: 0 auto;\r\n}\r\n.create_account_btn button {\r\n    width: 150px;\r\n    padding: 10px 0px;\r\n    background-color: #fff;\r\n    border: 2px solid #292929;\r\n    border-radius: 20px;\r\n    color: #292929;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n    transition: background-color 0.5s ease 0s, color 0.5s ease 0s, border 0.5s ease 0s; \r\n}\r\n.create_account_btn button:hover {\r\n    background-color: #292929;\r\n    border: 2px solid #fff;\r\n    color: #fff;\r\n}\r\n.success, .error {\r\n    width: 100%;\r\n    display: block;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n}\r\n.success.color {\r\n    background-color: darkseagreen;\r\n    color: #fff;\r\n}\r\n.error.color {\r\n    background-color: #E5663D;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtRkFBbUY7Q0FDdEY7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jcmVhdGVfYWNjb3VudCB7ICAgXHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmNyZWF0ZV9hY2NvdW50IGgyIHtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY3JlYXRlX2FjY291bnQgZm9ybSBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMmUyZTI7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jcmVhdGVfYWNjb3VudF9idG4ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uY3JlYXRlX2FjY291bnRfYnRuIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjkyOTI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UgMHMsIGNvbG9yIDAuNXMgZWFzZSAwcywgYm9yZGVyIDAuNXMgZWFzZSAwczsgXHJcbn1cclxuLmNyZWF0ZV9hY2NvdW50X2J0biBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uc3VjY2VzcywgLmVycm9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1Y2Nlc3MuY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmVycm9yLmNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNTY2M0Q7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"create_account\">\n    <h2>Create an account</h2>\n    <form [formGroup] = \"createAccountForm\" (ngSubmit) = \"onSubmit()\">\n        <div *ngIf=\"submitted && success\" class=\"success color\">\n            Your have registered successfully!\n        </div>\n        <div *ngIf=\"submitted && error\" class=\"error color\">\n            {{error}}\n        </div>\n        <input type=\"text\" name=\"firstName\" formControlName=\"firstName\" placeholder=\"First Name\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n        <input type=\"text\" name=\"lastName\" formControlName=\"lastName\" placeholder=\"Last Name\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n        <input type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" />\n        <div *ngIf=\"submitted && (f.email.errors || f.email.invalid)\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Username is required</div>\n            <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n        </div>\n        <input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Create Password\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n        <input type=\"password\" name=\"confirmPassword\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\" />\n        <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n        </div>\n        <div *ngIf=\"submitted && passwordNotMatch\" class=\"invalid-feedback\">\n            <div *ngIf=\"passwordNotMatch\">Confirm Password not matched with password</div>\n        </div>\n        <div class=\"create_account_btn\">\n            <button>Create Account</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(formBuilder, router, http) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.submitted = false;
        this.success = false;
        this.error = '';
        this.data = {};
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.passwordNotMatch = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.createAccountForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(SignUpComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.createAccountForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.createAccountForm.invalid) {
            return;
        }
        else {
            this.firstName = this.createAccountForm.get('firstName').value;
            this.lastName = this.createAccountForm.get('lastName').value;
            this.email = this.createAccountForm.get('email').value;
            this.password = this.createAccountForm.get('password').value;
            this.confirmPassword = this.createAccountForm.get('confirmPassword').value;
            if (this.password != this.confirmPassword) {
                this.passwordNotMatch = true;
                console.log(this.passwordNotMatch);
                return;
            }
            else {
                this.passwordNotMatch = false;
                this.data = {
                    'firstName': this.firstName,
                    'lastName': this.lastName,
                    'email': this.email,
                    'password': this.password
                };
                console.log(this.data);
                this.http.post('http://localhost:9191/api/user/register', this.data).subscribe(function (data) {
                    console.log("success", data.success);
                    _this.success = data.success;
                    _this.error = data.error;
                    _this.router.navigate(['/sign-up']);
                    var pos = window.pageYOffset;
                    if (pos > 0) {
                        window.scrollTo(0, 0); // how far to scroll on each step
                        console.log(pos);
                    }
                }, function (error) {
                    _this.error = error;
                });
            }
        }
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/skip-week/skip-week.component.css":
/*!***************************************************!*\
  !*** ./src/app/skip-week/skip-week.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skip_week_page_wrapper {\r\n    \r\n}\r\n.skip_week_page_wrapper h2 {\r\n    text-align: center;\r\n    margin: 80px 0px 40px 0px;\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.skip_week_page_wrapper p {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpcC13ZWVrL3NraXAtd2Vlay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9za2lwLXdlZWsvc2tpcC13ZWVrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpcF93ZWVrX3BhZ2Vfd3JhcHBlciB7XHJcbiAgICBcclxufVxyXG4uc2tpcF93ZWVrX3BhZ2Vfd3JhcHBlciBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDgwcHggMHB4IDQwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbn1cclxuLnNraXBfd2Vla19wYWdlX3dyYXBwZXIgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skip-week/skip-week.component.html":
/*!****************************************************!*\
  !*** ./src/app/skip-week/skip-week.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skip_week_page_wrapper\">\n  <h2>We Understand!</h2>\n  <p>You won't receive a bag for the x week of May 2019</p>\n</div>"

/***/ }),

/***/ "./src/app/skip-week/skip-week.component.ts":
/*!**************************************************!*\
  !*** ./src/app/skip-week/skip-week.component.ts ***!
  \**************************************************/
/*! exports provided: SkipWeekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipWeekComponent", function() { return SkipWeekComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkipWeekComponent = /** @class */ (function () {
    function SkipWeekComponent() {
    }
    SkipWeekComponent.prototype.ngOnInit = function () {
    };
    SkipWeekComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skip-week',
            template: __webpack_require__(/*! ./skip-week.component.html */ "./src/app/skip-week/skip-week.component.html"),
            styles: [__webpack_require__(/*! ./skip-week.component.css */ "./src/app/skip-week/skip-week.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkipWeekComponent);
    return SkipWeekComponent;
}());



/***/ }),

/***/ "./src/app/subscribe/subscribe.component.css":
/*!***************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subscribe_page_wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n    padding: 80px 0px;\r\n}\r\n.subscribe_page_wrapper h2 {\r\n    text-align: center;\r\n    margin: 50px 0px;\r\n    color: #E5663D;\r\n    font-size: 30px;\r\n}\r\n.subscribe_page_wrapper h3 {\r\n    text-align: center;\r\n    font-size: 23px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    \r\n}\r\n.select_plan .plans {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.select_plan .plan {\r\n    box-sizing: border-box;\r\n    flex: 1 0 21%;\r\n    padding: 10px 22px;\r\n    background-color: rgb(125, 187, 195);\r\n    min-height: 270px;\r\n    letter-spacing: 1px;\r\n    line-height: 22px;\r\n    color: #2F2E2E;\r\n}\r\n.select_plan .plan h2 {\r\n    font-size: 26px;\r\n    color: #2F2E2E;\r\n    margin: 0px;\r\n    font-weight: normal;\r\n}\r\n.select_plan .plan:nth-child(2) {\r\n    margin: 0 8%;\r\n}\r\n.subscribe_page_wrapper .answer_questions h3 {\r\n    margin: 50px 0px;\r\n}\r\n.subscribe_page_wrapper .color_none {\r\n    color: #2F2E2E;\r\n}\r\n.answer_questions {\r\n    width: 100%;\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n.question_wrapper {\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 50px;\r\n}\r\n.question_wrapper p {\r\n    margin-left: 30px;\r\n    margin-bottom: 8px;\r\n    color: #E5663D;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n}\r\n.question_wrapper ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 40%;\r\n    float: left;\r\n}\r\n.question_wrapper ul li {\r\n    color: #525252;\r\n    line-height: 30px;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n}\r\n.question_wrapper ul li input {\r\n    margin-right: 10px;\r\n}\r\n.question_wrapper .product_images {\r\n    position: absolute;\r\n    left: 45%;\r\n}\r\n.question_wrapper .product_images img {\r\n    height: 120px;\r\n    width: 140px;\r\n}\r\n.question_wrapper .product_images.first_box img:first-child {\r\n    position: absolute;\r\n    top: -30px;\r\n}\r\n.question_wrapper .product_images.first_box img:last-child {\r\n    position: absolute;\r\n    top: 200px;\r\n    left: 200px;\r\n    height: 120px;\r\n}\r\n.question_wrapper .product_images.second_box img:first-child {\r\n    position: absolute;\r\n    top: 140px;\r\n}\r\n.question_wrapper .product_images.second_box img:last-child {\r\n    position: absolute;\r\n    top: 140px;\r\n    left: 300px;\r\n}\r\n.question_wrapper .product_images.third_box img:first-child {\r\n    position: absolute;\r\n    top: 70px;\r\n    left: 150px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7O0NBRWY7QUFDRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0NBQ2I7QUFDRDtJQUNJLGNBQWM7SUFDZCxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztDQUNkO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9zdWJzY3JpYmUvc3Vic2NyaWJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Vic2NyaWJlX3BhZ2Vfd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogODBweCAwcHg7XHJcbn1cclxuLnN1YnNjcmliZV9wYWdlX3dyYXBwZXIgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1MHB4IDBweDtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5zdWJzY3JpYmVfcGFnZV93cmFwcGVyIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBcclxufVxyXG4uc2VsZWN0X3BsYW4gLnBsYW5zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5zZWxlY3RfcGxhbiAucGxhbiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZmxleDogMSAwIDIxJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjUsIDE4NywgMTk1KTtcclxuICAgIG1pbi1oZWlnaHQ6IDI3MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICMyRjJFMkU7XHJcbn1cclxuLnNlbGVjdF9wbGFuIC5wbGFuIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjMkYyRTJFO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5zZWxlY3RfcGxhbiAucGxhbjpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luOiAwIDglO1xyXG59XHJcbi5zdWJzY3JpYmVfcGFnZV93cmFwcGVyIC5hbnN3ZXJfcXVlc3Rpb25zIGgzIHtcclxuICAgIG1hcmdpbjogNTBweCAwcHg7XHJcbn1cclxuLnN1YnNjcmliZV9wYWdlX3dyYXBwZXIgLmNvbG9yX25vbmUge1xyXG4gICAgY29sb3I6ICMyRjJFMkU7XHJcbn1cclxuLmFuc3dlcl9xdWVzdGlvbnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnF1ZXN0aW9uX3dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLnF1ZXN0aW9uX3dyYXBwZXIgcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi5xdWVzdGlvbl93cmFwcGVyIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5xdWVzdGlvbl93cmFwcGVyIHVsIGxpIHtcclxuICAgIGNvbG9yOiAjNTI1MjUyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5xdWVzdGlvbl93cmFwcGVyIHVsIGxpIGlucHV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ucXVlc3Rpb25fd3JhcHBlciAucHJvZHVjdF9pbWFnZXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDUlO1xyXG59XHJcbi5xdWVzdGlvbl93cmFwcGVyIC5wcm9kdWN0X2ltYWdlcyBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxufVxyXG4ucXVlc3Rpb25fd3JhcHBlciAucHJvZHVjdF9pbWFnZXMuZmlyc3RfYm94IGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG59XHJcbi5xdWVzdGlvbl93cmFwcGVyIC5wcm9kdWN0X2ltYWdlcy5maXJzdF9ib3ggaW1nOmxhc3QtY2hpbGQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG4ucXVlc3Rpb25fd3JhcHBlciAucHJvZHVjdF9pbWFnZXMuc2Vjb25kX2JveCBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNDBweDtcclxufVxyXG5cclxuLnF1ZXN0aW9uX3dyYXBwZXIgLnByb2R1Y3RfaW1hZ2VzLnNlY29uZF9ib3ggaW1nOmxhc3QtY2hpbGQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNDBweDtcclxuICAgIGxlZnQ6IDMwMHB4O1xyXG59XHJcbi5xdWVzdGlvbl93cmFwcGVyIC5wcm9kdWN0X2ltYWdlcy50aGlyZF9ib3ggaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzBweDtcclxuICAgIGxlZnQ6IDE1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.html":
/*!****************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subscribe_page_wrapper\">\n  <div class=\"subscribe_page_content\">\n    <h2>Snacking made simple and convenient!</h2>\n    <h3 class=\"color_none\">Select a Plan</h3>\n    <div class=\"select_plan\">\n      <div class=\"plans\">\n        <div class=\"plan\">\n          <h3>Trial Week</h3>\n          <h2 class=\"rate\">500Rs/bag</h2>\n          <p>Try our snack bag of one week. You'll get one bag with 6 healthy snacks that will take care of your evening hunger pangs.</p>\n        </div>\n        <div class=\"plan\">\n          <h3>For 4 Weeks</h3>\n          <h2 class=\"rate\">500Rs/bag</h2>\n          <p>\n            1 snack bag delivered each week for a period of 1 month</p>\n        </div>\n        <div class=\"plan\">\n          <h3>For 12 Weeks</h3>\n          <h2 class=\"rate\">500Rs/bag</h2>\n          <p>1 snack bag delivered each week for a period of 6 months</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"answer_questions\">\n      <h3 class=\"color_none\">Answer a few simple questions so we know what snacks are best for you</h3>\n      <div class=\"question_wrapper\">\n        <p>Are you allergic to any of the following?</p>\n        <ul>\n          <li><input type=\"radio\" value=\"milk\" name=\"q1\" />Milk</li>\n          <li><input type=\"radio\" value=\"eggs\" name=\"q1\" />EGGS</li>\n          <li><input type=\"radio\" value=\"peanuts\" name=\"q1\" />PEANUTS</li>\n          <li><input type=\"radio\" value=\"other nuts\" name=\"q1\" />OTHER NUTS</li>\n          <li><input type=\"radio\" value=\"wheat\" name=\"q1\" />WHEAT</li>\n          <li><input type=\"radio\" value=\"none\" name=\"q1\" />NONE</li>\n        </ul>\n        <div class=\"product_images first_box\">\n          <img src=\"../../assets/peanut.png\" alt=\"peanut.png\"/>\n          <img src=\"../../assets/chocolate-bar.png\" alt=\"chocolate_bar.png\"/>\n        </div>\n      </div>\n      <div class=\"question_wrapper\">\n        <p>Pick flavours you don't like </p>\n        <ul>\n          <li><input type=\"radio\" value=\"chocolate\" name=\"q2\" />CHOCOLATE</li>\n          <li><input type=\"radio\" value=\"strawberry\" name=\"q2\" />STRAWBERRY</li>\n          <li><input type=\"radio\" value=\"mint\" name=\"q2\" />MINT</li>\n          <li><input type=\"radio\" value=\"tomato\" name=\"q2\" />TOMATO</li>\n          <li><input type=\"radio\" value=\"no preference\" name=\"q2\" />NO PREFERENCE</li>\n        </ul>\n        <div class=\"product_images second_box\">\n          <img src=\"../../assets/harvest.png\" alt=\"banana.png\"/>\n          <img src=\"../../assets/cheese.png\" alt=\"cheese.png\"/>\n        </div>\n      </div>\n      <div class=\"question_wrapper\">\n        <p>Pick fruits you don't like </p>\n        <ul>\n          <li><input type=\"radio\" value=\"banana\" name=\"q3\" />BANANA</li>\n          <li><input type=\"radio\" value=\"apple\" name=\"q3\" />APPLE</li>\n          <li><input type=\"radio\" value=\"pear\" name=\"q3\" />PEAR</li>\n          <li><input type=\"radio\" value=\"guava\" name=\"q3\" />GUAVA</li>\n          <li><input type=\"radio\" value=\"mango\" name=\"q3\" />MANGO</li>\n          <li><input type=\"radio\" value=\"no preference\" name=\"q3\" />NO PREFERENCE</li>\n        </ul>\n        <div class=\"product_images third_box\">\n          <img src=\"../../assets/strawberry.png\" alt=\"strawberry.png\"/>\n        </div>\n      </div>  \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubscribeComponent = /** @class */ (function () {
    function SubscribeComponent() {
    }
    SubscribeComponent.prototype.ngOnInit = function () {
    };
    SubscribeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(/*! ./subscribe.component.html */ "./src/app/subscribe/subscribe.component.html"),
            styles: [__webpack_require__(/*! ./subscribe.component.css */ "./src/app/subscribe/subscribe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "./src/app/thank-you/thank-you.component.css":
/*!***************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thank_you_page_wrapper {\r\n    \r\n}\r\n.thank_you_page_wrapper h2 {\r\n    text-align: center;\r\n    margin: 80px 0px 40px 0px;\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.thank_you_page_wrapper p {\r\n    text-align: center;\r\n    color: #E5663D\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhhbmsteW91L3RoYW5rLXlvdS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RoYW5rLXlvdS90aGFuay15b3UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGFua195b3VfcGFnZV93cmFwcGVyIHtcclxuICAgIFxyXG59XHJcbi50aGFua195b3VfcGFnZV93cmFwcGVyIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogODBweCAwcHggNDBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxufVxyXG4udGhhbmtfeW91X3BhZ2Vfd3JhcHBlciBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRTU2NjNEXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/thank-you/thank-you.component.html":
/*!****************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"thank_you_page_wrapper\">\n  <h2>Thank you!</h2>\n  <p>You will receive an email with a payment acknowledgement</p>\n</div>\n"

/***/ }),

/***/ "./src/app/thank-you/thank-you.component.ts":
/*!**************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.ts ***!
  \**************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent() {
    }
    ThankYouComponent.prototype.ngOnInit = function () {
    };
    ThankYouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thank-you',
            template: __webpack_require__(/*! ./thank-you.component.html */ "./src/app/thank-you/thank-you.component.html"),
            styles: [__webpack_require__(/*! ./thank-you.component.css */ "./src/app/thank-you/thank-you.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankYouComponent);
    return ThankYouComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\projects\munchies\github_munchies\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map