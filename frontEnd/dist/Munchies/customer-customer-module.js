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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.routing */ "./src/app/admin/pages/customer/customer.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer.component */ "./src/app/admin/pages/customer/customer.component.ts");
/* harmony import */ var _customerplan_customerplan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customerplan/customerplan.component */ "./src/app/admin/pages/customer/customerplan/customerplan.component.ts");
/* harmony import */ var _customerplanweek_customerplanweek_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customerplanweek/customerplanweek.component */ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.ts");
/* harmony import */ var _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customerdetails/customerdetails.component */ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.ts");
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
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _customer_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            declarations: [
                _customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"],
                _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_8__["CustomerdetailsComponent"],
                _customerplanweek_customerplanweek_component__WEBPACK_IMPORTED_MODULE_7__["CustomerplanweekComponent"],
                _customerplan_customerplan_component__WEBPACK_IMPORTED_MODULE_6__["CustomerplanComponent"]
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

module.exports = "<div class=\"row\">\n  <a routerLink=\"/admin/pages/customer/cust/3423/plan/123\">cust Plan</a>\n  <a routerLink=\"/admin/pages/customer/cust/3423/plan/123/week/1\">Week Plan</a>\n  <div class=\"col-md-12\">\n    <card cardTitle=\"Data Table\">\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Name</th>\n            <th>Email</th>\n            <th>Address</th>\n            <th>Preferences</th>\n            <th>Week Number</th>\n            <th>Plan Detail</th>\n          </tr>\n        </thead>\n        <tbody>\n          <!-- <tr *ngFor=\"let item of tableData | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber};let index = index\">\n              <td>{{index+1}}</td>\n              <td>{{item.name}}</td>\n              <td>{{item.email}}</td>\n              <td>{{item.preferences}}</td>\n              <td><button class=\"btn btn-info\">4</button>{{item.activeWeek}}</td>\n              <td>\n                <span class=\"label label-info\">info</span>\n              </td>\n            </tr> -->\n          <tr>\n            <td>1</td>\n            <td>Shashank Jaiswal</td>\n            <td>shashank@techinvento.com</td>\n            <td>Cidco</td>\n            <td>Mango</td>\n            <td><button class=\"btn btn-info\"><i class=\"fa fa-pencil fa-fw\"></i>4</button></td>\n            <td><button class=\"btn btn-warning\"><i class=\"fa fa-pencil fa-fw\"></i>View</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n  </div>\n</div>"

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
    function CustomerdetailsComponent() {
    }
    CustomerdetailsComponent.prototype.ngOnInit = function () {
    };
    CustomerdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custdetails',
            template: __webpack_require__(/*! ./customerdetails.component.html */ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.html"),
            styles: [__webpack_require__(/*! ./customerdetails.component.css */ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<p>\n  custplan works!\n</p>\n"

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
    function CustomerplanComponent() {
    }
    CustomerplanComponent.prototype.ngOnInit = function () {
    };
    CustomerplanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custplan',
            template: __webpack_require__(/*! ./customerplan.component.html */ "./src/app/admin/pages/customer/customerplan/customerplan.component.html"),
            styles: [__webpack_require__(/*! ./customerplan.component.css */ "./src/app/admin/pages/customer/customerplan/customerplan.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<p>\n  custplanweek works!\n</p>\n"

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
    function CustomerplanweekComponent() {
    }
    CustomerplanweekComponent.prototype.ngOnInit = function () {
    };
    CustomerplanweekComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custplanweek',
            template: __webpack_require__(/*! ./customerplanweek.component.html */ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.html"),
            styles: [__webpack_require__(/*! ./customerplanweek.component.css */ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerplanweekComponent);
    return CustomerplanweekComponent;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map