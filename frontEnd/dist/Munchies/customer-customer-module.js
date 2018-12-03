(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./src/app/admin/pages/customer/customer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/pages/customer/customer.component.ts ***!
  \************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
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

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/customer/customer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/pages/customer/customer.module.ts ***!
  \*********************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-modal */ "./node_modules/ngx-modal/index.js");
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer.routing */ "./src/app/admin/pages/customer/customer.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.component */ "./src/app/admin/pages/customer/customer.component.ts");
/* harmony import */ var _customerplan_customerplan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customerplan/customerplan.component */ "./src/app/admin/pages/customer/customerplan/customerplan.component.ts");
/* harmony import */ var _customerplanweek_customerplanweek_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customerplanweek/customerplanweek.component */ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.ts");
/* harmony import */ var _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customerdetails/customerdetails.component */ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.ts");
/* harmony import */ var _ui_components_modals_modals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/components/modals/modals.component */ "./src/app/admin/pages/ui/components/modals/modals.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ngx_modal__WEBPACK_IMPORTED_MODULE_1__["ModalModule"],
                _customer_routing__WEBPACK_IMPORTED_MODULE_4__["routing"]
            ],
            declarations: [
                _customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"],
                _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_9__["CustomerdetailsComponent"],
                _customerplanweek_customerplanweek_component__WEBPACK_IMPORTED_MODULE_8__["CustomerplanweekComponent"],
                _customerplan_customerplan_component__WEBPACK_IMPORTED_MODULE_7__["CustomerplanComponent"],
                _ui_components_modals_modals_component__WEBPACK_IMPORTED_MODULE_10__["ModalsComponent"]
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/admin/pages/customer/customer.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/pages/customer/customer.routing.ts ***!
  \**********************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.component */ "./src/app/admin/pages/customer/customer.component.ts");
/* harmony import */ var _customerplan_customerplan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customerplan/customerplan.component */ "./src/app/admin/pages/customer/customerplan/customerplan.component.ts");
/* harmony import */ var _customerplanweek_customerplanweek_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerplanweek/customerplanweek.component */ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.ts");
/* harmony import */ var _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerdetails/customerdetails.component */ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.ts");





var childRoutes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_1__["CustomerComponent"],
        children: [
            { path: '', component: _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_4__["CustomerdetailsComponent"], pathMatch: 'full' },
            { path: 'cust/:custid/plan/:planid', component: _customerplan_customerplan_component__WEBPACK_IMPORTED_MODULE_2__["CustomerplanComponent"] },
            { path: 'cust/:custid/plan/:planid/week/:weekid', component: _customerplanweek_customerplanweek_component__WEBPACK_IMPORTED_MODULE_3__["CustomerplanweekComponent"] },
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ }),

/***/ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerdetails/customerdetails.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVyZGV0YWlscy9jdXN0b21lcmRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerdetails/customerdetails.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <!-- <a routerLink=\"/admin/pages/customer/cust/3423/plan/123\">cust Plan</a>\n    <a routerLink=\"/admin/pages/customer/cust/3423/plan/123/week/1\">Week Plan</a> -->\n    <div class=\"col-md-12\">\n      <card cardTitle=\"Customer Details\">\n        <table class=\"table table-bordered table-hover\">\n          <thead>\n            <tr>\n              <th>No</th>\n              <th>Name</th>\n              <th>Email</th>\n              <th>Address</th>\n              <th>Preferences</th>\n              <th>Week Number</th>\n              <th>Plan Detail</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of users, let i=index\">\n              <td>{{i+1}}</td>\n              <td>{{user.user.firstName}} {{user.user.lastName}}</td>\n              <td>{{user.user.email}}</td>\n              <td>{{user.address}}</td>\n              <td></td>\n              <!-- <td><a routerLink='/admin/pages/customer/cust/3423/plan/123/week/1/' class=\"btn btn-info\"><i class=\"fa fa-pencil fa-fw\"></i>{{user.planInfo.weeks}}</a></td>\n              <td><a routerLink=\"/admin/pages/customer/cust/3423/plan/123\" class=\"btn btn-warning\"><i class=\"fa fa-pencil fa-fw\"></i>View</a></td> -->\n              <td><a (click)=\"viewUserWeek(user.user._id,user.planInfo.planId,user.planInfo.weeks,user.planInfo._id)\" class=\"btn btn-info\"><i class=\"fa fa-pencil fa-fw\"></i>{{user.planInfo.weeks}}</a></td>\n              <td><a (click)=\"viewUserPlan(user.user._id,user.planInfo.planId)\" class=\"btn btn-warning\"><i class=\"fa fa-pencil fa-fw\"></i>View</a></td>\n            </tr>\n           \n          </tbody>\n        </table>\n      </card>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerdetails/customerdetails.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomerdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdetailsComponent", function() { return CustomerdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../user/auth.service */ "./src/app/user/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerdetailsComponent = /** @class */ (function () {
    function CustomerdetailsComponent(http, auth, router) {
        this.http = http;
        this.auth = auth;
        this.router = router;
        this.view = 'user';
        this.users = [];
        this.deleteMessage = '';
        this.data = {};
    }
    CustomerdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/order/getAllOrders').subscribe(function (res) {
            console.log("cust", res.data);
            _this.users = res.data;
        }, function (err) {
            console.log(err);
        });
    };
    CustomerdetailsComponent.prototype.viewUserWeek = function (userId, planId, weekNo, actpId) {
        console.log(userId, planId, weekNo, actpId);
        this.router.navigateByUrl('/admin/pages/customer/cust/' + userId + '/plan/' + planId + '/week/' + weekNo);
    };
    CustomerdetailsComponent.prototype.viewUserPlan = function (userId, planId) {
        console.log(userId, planId);
        this.router.navigateByUrl('/admin/pages/customer/cust/' + userId + '/plan/' + planId);
    };
    CustomerdetailsComponent.prototype.changeView = function (view) {
        this.view = view;
    };
    CustomerdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custdetails',
            template: __webpack_require__(/*! ./customerdetails.component.html */ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.html"),
            styles: [__webpack_require__(/*! ./customerdetails.component.css */ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomerdetailsComponent);
    return CustomerdetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/customer/customerplan/customerplan.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerplan/customerplan.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVycGxhbi9jdXN0b21lcnBsYW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/pages/customer/customerplan/customerplan.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerplan/customerplan.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  custplan works!\n</p> -->\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <card cardTitle=\"Plan Details\">\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>Week</th>\n            <th>PlanType</th>\n            <th>Status</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let plan of plans, let i=index\">\n            <td>{{plan.weeks}}</td>\n            <td>{{plan}}</td>\n            <td>{{plan}}</td>\n            <td><button (click)=\"editPlan(plan.activePlanId, plan.weeks)\" class=\"btn btn-warning\"><i class=\"fa fa-pencil fa-fw\"></i>Edit</button></td>\n          </tr>\n          <!-- <tr>\n            <td>4</td>\n            <td></td>\n            <td></td>\n            <td><button class=\"btn btn-warning\"><i class=\"fa fa-pencil fa-fw\"></i>Edit</button></td>\n          </tr> -->\n        </tbody>\n      </table>\n    </card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/pages/customer/customerplan/customerplan.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerplan/customerplan.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerplanComponent", function() { return CustomerplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerplanComponent = /** @class */ (function () {
    function CustomerplanComponent(http, auth, activeRoute, router) {
        this.http = http;
        this.auth = auth;
        this.activeRoute = activeRoute;
        this.router = router;
        this.view = 'plan';
        this.plans = [];
        this.deleteMessage = '';
        this.data = {};
    }
    CustomerplanComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeParams = this.activeRoute.snapshot.params;
        console.log(routeParams);
        this.http.get(this.auth.getDomainName() + '/api/plan/customize/' + routeParams.planid).subscribe(function (res) {
            console.log(res.data);
            _this.plans = res.data;
        }, function (err) {
            console.log(err);
        });
    };
    CustomerplanComponent.prototype.editPlan = function (activePlanId, weekNo) {
        console.log(activePlanId, weekNo);
        var routeParams = this.activeRoute.snapshot.params;
        console.log(routeParams);
        this.router.navigateByUrl('/admin/pages/customer/cust/' + routeParams.custid + '/plan/' + activePlanId + '/week/' + weekNo);
    };
    CustomerplanComponent.prototype.changeView = function (view) {
        this.view = view;
    };
    CustomerplanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custplan',
            template: __webpack_require__(/*! ./customerplan.component.html */ "./src/app/admin/pages/customer/customerplan/customerplan.component.html"),
            styles: [__webpack_require__(/*! ./customerplan.component.css */ "./src/app/admin/pages/customer/customerplan/customerplan.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomerplanComponent);
    return CustomerplanComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVycGxhbndlZWsvY3VzdG9tZXJwbGFud2Vlay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  custplanweek works!\n</p> -->\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <button (click)=\"openModal(thirdModal)\" class=\"btn btn-primary\" style=\"margin:20px\">Add Product</button>\n    <card cardTitle=\"Week Plan Details\">\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>Type</th>\n            <th>Product</th>\n            <th>MRP</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let weekprod of weeks, let i=index\">\n            <td>{{weekprod}}</td>\n            <td>{{weekprod.name}}</td>\n            <td>{{weekprod.price}}</td>\n            <td><button (click)=\"deleteWeekProd(weekprod._id)\" class=\"btn btn-danger\"><i class=\"fa fa-trash fa-fw\"></i>Delete</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n    <!-- <button class=\"btn btn-success\" style=\"margin:20px\">Save</button> -->\n  </div>\n</div>\n\n<modal #thirdModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n  <modal-header>\n    <h3>Add Products</h3>\n  </modal-header>\n  <modal-content>\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>Type</th>\n          <th>Product</th>\n          <th>MRP</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let prod of products, let i=index\">\n          <td>{{prod}}</td>\n          <td>{{prod.name}}</td>\n          <td>{{prod.price}}</td>\n          <td><button (click)=\"addProd(prod._id)\" class=\"btn btn-success\"><i class=\"fa fa-check fa-fw\"></i>Add</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </modal-content>\n  <modal-footer>\n    <button class=\"btn btn-primary\" (click)=\"closeModal(thirdModal)\">close</button>\n  </modal-footer>\n</modal>"

/***/ }),

/***/ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomerplanweekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerplanweekComponent", function() { return CustomerplanweekComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerplanweekComponent = /** @class */ (function () {
    function CustomerplanweekComponent(http, auth, activeRoute) {
        this.http = http;
        this.auth = auth;
        this.activeRoute = activeRoute;
        this.view = 'week';
        this.weeks = [];
        this.products = [];
        this.deleteMessage = '';
        this.data = {};
    }
    CustomerplanweekComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeParams = this.activeRoute.snapshot.params;
        console.log(routeParams);
        this.http.get(this.auth.getDomainName() + '/api/plan/customize/' + routeParams.planid + '/week/' + routeParams.weekid).subscribe(function (res) {
            console.log("weekProds", res.data);
            if (res.data && res.data.length) {
                _this.weeks = res.data[0].products;
            }
        }, function (err) {
            console.log(err);
        });
        this.http.get(this.auth.getDomainName() + '/api/product').subscribe(function (res) {
            console.log(res.data);
            _this.products = res.data;
        }, function (err) {
            console.log(err);
        });
    };
    CustomerplanweekComponent.prototype.deleteWeekProd = function (prodId) {
        console.log(prodId);
        var routeParams = this.activeRoute.snapshot.params;
        console.log(routeParams);
        this.http.delete(this.auth.getDomainName() + '/api/plan/active/' + routeParams.planid + '/product/' + prodId + '/week/' + routeParams.weekid, {}).subscribe(function (res) {
            console.log("deleteProd ", res);
            if (res.success) {
                alert('Product Deleted Successfully!');
            }
            else if (res.error) {
                alert(res.error);
            }
        }, function (err) {
            console.log("deleteProd err", err);
        });
    };
    CustomerplanweekComponent.prototype.addProd = function (prodId) {
        console.log(prodId);
        var routeParams = this.activeRoute.snapshot.params;
        console.log(routeParams);
        this.http.post(this.auth.getDomainName() + '/api/plan/active/' + routeParams.planid + '/product/' + prodId + '/week/' + routeParams.weekid, {}).subscribe(function (res) {
            console.log("addProd", res);
            if (res.success) {
                alert('Product Added Successfully!');
            }
            else if (res.error) {
                alert(res.error);
            }
        }, function (err) {
            console.log("addProd err", err);
        });
    };
    CustomerplanweekComponent.prototype.changeView = function (view) {
        this.view = view;
    };
    CustomerplanweekComponent.prototype.openModal = function (modal) {
        modal.open();
    };
    CustomerplanweekComponent.prototype.closeModal = function (modal) {
        modal.close();
    };
    CustomerplanweekComponent.prototype.onClose = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            type: 'success',
            title: 'Success!',
            text: 'close it!',
        });
    };
    CustomerplanweekComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custplanweek',
            template: __webpack_require__(/*! ./customerplanweek.component.html */ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.html"),
            styles: [__webpack_require__(/*! ./customerplanweek.component.css */ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CustomerplanweekComponent);
    return CustomerplanweekComponent;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map