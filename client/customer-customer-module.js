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
/* harmony import */ var _customerinfo_customerinfo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customerinfo/customerinfo.component */ "./src/app/admin/pages/customer/customerinfo/customerinfo.component.ts");
/* harmony import */ var _ui_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/components/notification/notification.component */ "./src/app/admin/pages/ui/components/notification/notification.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
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
                _customer_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"]
            ],
            declarations: [
                _customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"],
                _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_9__["CustomerdetailsComponent"],
                _customerplanweek_customerplanweek_component__WEBPACK_IMPORTED_MODULE_8__["CustomerplanweekComponent"],
                _customerplan_customerplan_component__WEBPACK_IMPORTED_MODULE_7__["CustomerplanComponent"],
                _customerinfo_customerinfo_component__WEBPACK_IMPORTED_MODULE_10__["CustomerinfoComponent"],
                _ui_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"]
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
/* harmony import */ var _customerinfo_customerinfo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerinfo/customerinfo.component */ "./src/app/admin/pages/customer/customerinfo/customerinfo.component.ts");






var childRoutes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_1__["CustomerComponent"],
        children: [
            { path: '', component: _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_4__["CustomerdetailsComponent"], pathMatch: 'full' },
            { path: 'customerInfo/:activePlanId', component: _customerinfo_customerinfo_component__WEBPACK_IMPORTED_MODULE_5__["CustomerinfoComponent"] },
            { path: 'cust/:custid/plan/:planid', component: _customerplan_customerplan_component__WEBPACK_IMPORTED_MODULE_2__["CustomerplanComponent"] },
            { path: 'cust/:custid/plan/:planid/week/:weekid', component: _customerplanweek_customerplanweek_component__WEBPACK_IMPORTED_MODULE_3__["CustomerplanweekComponent"] },
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ }),

/***/ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerdetails/customerdetails.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- <a routerLink=\"/admin/pages/customer/cust/3423/plan/123\">cust Plan</a>\n  <a routerLink=\"/admin/pages/customer/cust/3423/plan/123/week/1\">Week Plan</a> -->\n  <div class=\"col-md-12\">\n    <card cardTitle=\"Customer Details\">\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Name</th>\n            <th>Address</th>\n            <th>Area of Delivery</th>\n            <th>Next Week</th>\n            <th>Accepted</th>\n            <!-- <th>Plan Detail</th> -->\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of users, let i=index\">\n            <td>{{ pageSize * (pageNumber - 1) + i+1 }}</td>\n            <td (click)=\"viewCustomerInfo(user.planInfo._id)\" style=\"cursor: pointer;\">{{user.user.firstName}} {{user.user.lastName}}</td>\n            <td>{{user.address}}</td>\n            <td>{{user.Area_of_delivery}}</td>\n            <!-- <td><a routerLink='/admin/pages/customer/cust/3423/plan/123/week/1/' class=\"btn btn-info\"><i class=\"fa fa-pencil fa-fw\"></i>{{user.planInfo.weeks}}</a></td>\n            <td><a routerLink=\"/admin/pages/customer/cust/3423/plan/123\" class=\"btn btn-warning\"><i class=\"fa fa-pencil fa-fw\"></i>View</a></td> -->\n            <td><a (click)=\"viewUserWeek(user)\" class=\"btn btn-info\"><i class=\"fa fa-pencil fa-fw\"></i>{{getNextWeek(user).value}}</a></td>\n            <td *ngIf=\"user.isAccepted\" ><a (click)=\"acceptOrder(user._id,false,i)\" class=\"btn btn-info\"><i class=\"\"></i>Yes</a></td>\n            <td *ngIf=\"!user.isAccepted\" ><a (click)=\"acceptOrder(user._id,true,i)\" class=\"btn btn-danger\"><i class=\"\"></i>No</a></td>\n            <!-- <td><a (click)=\"viewUserPlan(user.user._id,user.planInfo.planId)\" class=\"btn btn-warning\"><i class=\"fa fa-pencil fa-fw\"></i>View</a></td> -->\n          </tr>\n         \n        </tbody>\n      </table>\n      <div class=\"pagination-wrapper\">\n        <div class=\"form-group pages\">\n          <div class=\"my-pagination\">\n            <button [disabled]=\"pageNumber == 1\" (click)=\"pageChanged(pageNumber-1)\" class=\"btn btn-primary\">Prev</button>\n            <span class=\"page\" *ngFor=\"let page of pages; let i=index\" [ngClass]=\"{'active': pageNumber == (i+1)}\" (click)=\"pageChanged(i+1)\">{{i+1}}</span>\n            <button [disabled]=\"pageNumber == pages.length\" (click)=\"pageChanged(pageNumber+1)\" class=\"btn btn-primary\">Next</button>\n          </div>\n        </div>\n      </div>\n      <!-- <form class=\"pagination-wrapper\">\n        <div class=\"form-group pages\">\n          <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" directionLinks=\"true\"\n            autoHide=\"false\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n            screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n        </div>\n        <div class=\"form-group options pages\">\n          <div class=\"input-group input-group-sm\">\n            <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"limit\" (ngModelChange)=\"loadData()\">\n              <option>1</option>\n              <option>5</option>\n              <option>10</option>\n              <option>20</option>\n              <option>50</option>\n              <option>100</option>\n              <option>200</option>\n            </select>\n            <span class=\"input-group-addon addon-right\">Per Page</span>\n          </div>\n        </div>\n      </form> -->\n    </card>\n  </div>\n</div>\n<!-- <div class=\"row\">\n    <div class=\"col-md-12\">\n      <card cardTitle=\"Customer Details\">\n        <table class=\"table table-bordered table-hover\">\n          <thead>\n            <tr>\n              <th>No</th>\n              <th>Name</th>\n              <th>Address</th>\n              <th>Area of Delivery</th>\n              <th>Week Number</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of users, let i=index\">\n              <td>{{i+1}}</td>\n              <td>{{user.user.firstName}} {{user.user.lastName}}</td>\n              <td>{{user.address}}</td>\n              <td>{{user.Area_of_delivery}}</td>\n              <td><a (click)=\"viewUserWeek(user.user._id,user.planInfo.planId,user.planInfo.weeks,user.planInfo._id)\" class=\"btn btn-info\"><i class=\"fa fa-pencil fa-fw\"></i>{{user.planInfo.weeks}}</a></td>\n            </tr>\n           \n          </tbody>\n        </table>\n      </card>\n    </div>\n  </div> -->"

/***/ }),

/***/ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerdetails/customerdetails.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary, .pagination-wrapper .input-group .input-group-addon, .my-pagination ::ng-deep .ngx-pagination a:hover,\n.my-pagination ::ng-deep .ngx-pagination .current {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.page {\n  padding: 5px 10px;\n  cursor: pointer;\n  border: 1px solid #e2e2e2; }\n\n.page.active {\n  background-color: rgba(252, 164, 0, 0.5); }\n\n.pagination-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between; }\n\n.pagination-wrapper .input-group {\n    width: 150px; }\n\n.pagination-wrapper .input-group .input-group-addon {\n      color: #fff;\n      border: none; }\n\n.pagination-wrapper .form-group {\n    height: auto;\n    margin: 0;\n    padding: 0; }\n\n.my-pagination ::ng-deep .ngx-pagination {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  overflow: hidden;\n  font-size: 12px;\n  padding: 0; }\n\n.my-pagination ::ng-deep .ngx-pagination a,\n  .my-pagination ::ng-deep .ngx-pagination .current {\n    min-width: 30px;\n    text-decoration: none;\n    height: 35px;\n    text-align: center;\n    line-height: 33px;\n    margin: 0;\n    color: #26253c; }\n\n.my-pagination ::ng-deep .ngx-pagination a:last-child,\n    .my-pagination ::ng-deep .ngx-pagination .current:last-child {\n      border: none; }\n\n.my-pagination ::ng-deep .ngx-pagination a:hover,\n  .my-pagination ::ng-deep .ngx-pagination .current {\n    min-width: 30px;\n    color: #fff; }\n\n.my-pagination ::ng-deep .ngx-pagination .disabled {\n    color: rgba(38, 37, 60, 0.4);\n    cursor: not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvY3VzdG9tZXIvY3VzdG9tZXJkZXRhaWxzL0Q6XFxNYWhlc2hcXG11bmNoaWVzLWdpdGh1YlxcbXVuY2hpZXMuZ2l0XFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxjb2xvci1zY2hlbWVzXFxfZGVmYXVsdC5zY3NzIiwic3JjL2FwcC9hZG1pbi9wYWdlcy9jdXN0b21lci9jdXN0b21lcmRldGFpbHMvRDpcXE1haGVzaFxcbXVuY2hpZXMtZ2l0aHViXFxtdW5jaGllcy5naXRcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXG1peGluLnNjc3MiLCJzcmMvYXBwL2FkbWluL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVyZGV0YWlscy9EOlxcTWFoZXNoXFxtdW5jaGllcy1naXRodWJcXG11bmNoaWVzLmdpdFxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxccGFnZXNcXGN1c3RvbWVyXFxjdXN0b21lcmRldGFpbHNcXGN1c3RvbWVyZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxpQkFoQlMsRUFpQlo7O0FBRUQ7RUNNSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUDlDOztBQUVEOztFQ0VJLDREQUFtQztFQUduQyxvRUFBMkMsRURIOUM7O0FBRUQ7RUNGSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEQzlDOztBQUVEO0VDTkksNERBQW1DO0VBR25DLG9FQUEyQyxFREs5Qzs7QUFFRDtFQ1ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURTOUM7O0FBRUQ7RUNkSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEYTlDOztBRTVDRDtFQUNJLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLHlDQUFvQyxFQUN2Qzs7QUFDRDtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLCtCQUE4QixFQWNqQzs7QUFsQkQ7SUFNUSxhQUFZLEVBTWY7O0FBWkw7TUFTWSxZRlREO01FVUMsYUFBWSxFQUNmOztBQVhUO0lBY1EsYUFBWTtJQUNaLFVBQVM7SUFDVCxXQUFVLEVBQ2I7O0FBR0w7RUFDSSxxQ0ZwQk87RUVxQlAsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixnQkYvQlM7RUVnQ1QsV0FBVSxFQXdCYjs7QUE3QkQ7O0lBUVEsZ0JBQWU7SUFDZixzQkFBcUI7SUFDckIsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsVUFBUztJQUNULGVGOUJZLEVFa0NmOztBQWxCTDs7TUFnQlksYUFBWSxFQUNmOztBQWpCVDs7SUFxQlEsZ0JBQWU7SUFFZixZRjNDRyxFRTRDTjs7QUF4Qkw7SUEwQlEsNkJGMUNZO0lFMkNaLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVyZGV0YWlscy9jdXN0b21lcmRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9taXhpbic7XG4kZGVmYXVsdC10ZXh0OjE0cHg7XG4kc20tdGV4dDoxMnB4O1xuJGxnLXRleHQ6MTZweDtcbiRib2R5LWJnOiNmZmY7XG4kc2lkZWJhci1iZzojNDY1Mjk0O1xuJHNpZGViYXItZm9udHMtY29sb3I6I2ZmZjtcbiRjYXJkLWJnOiNmZmY7XG4kY2FyZC1ib3JkZXI6I2U0ZTNlMztcbiR3aGl0ZTojZmZmO1xuJGJsYWNrOiMwMDA7XG4kYm9yZGVyLWNvbG9yOnJnYmEoJGJsYWNrLCAuMSk7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiNlNmU2ZTY7XG4kZm9udHMtY29sb3I6IzI2MjUzYztcbiRwcmltYXJ5OiNmY2E0MDA7XG4kc3VjY2VzczojMTZiZTlhO1xuJGRhbmdlcjojZmE1MTY3O1xuJHdhcm5pbmc6I2ZmNzQwMztcbiRpbmZvOiMyY2MzZmY7XG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcbn1cblxuLmJnLWRlZmF1bHQge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIGRhcmtlbigkY2FyZC1iZywgNDAlKSwgZGFya2VuKCRjYXJkLWJnLCAzMCUpKTtcbn1cblxuLmJnLXByaW1hcnkge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRwcmltYXJ5LCAjZmZkMTdjKTtcbn1cblxuLmJnLXN1Y2Nlc3Mge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRzdWNjZXNzLCAjNDJlNjk3KTtcbn1cblxuLmJnLWRhbmdlciB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGRhbmdlciwgI2ZkYTA5Yyk7XG59XG5cbi5iZy13YXJuaW5nIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkd2FybmluZywgI2ZhYzk4MCk7XG59XG5cbi5iZy1pbmZvIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkaW5mbywgIzE1ZjhiZik7XG59IiwiQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIHRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtLi4uKSB7XG4gICAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDIgMztcbiAgICBib3JkZXItaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbiAgICBib3JkZXItaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbn1cblxuQG1peGluIGNlbnRlcigkd2lkdGgsICRoZWlnaHQpIHtcbiAgICB3aWR0aDogJHdpZHRoO1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC90aGVtZS9jb25mLnNjc3NcIjtcclxuLnBhZ2Uge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xyXG59XHJcbi5wYWdlLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwxNjQsMCwuNSk7XHJcbn1cclxuLnBhZ2luYXRpb24td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuICAgICAgICAgICAgQGV4dGVuZCAuYmctcHJpbWFyeTtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6ICRzbS10ZXh0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGEsXHJcbiAgICAuY3VycmVudCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogJGZvbnRzLWNvbG9yO1xyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhOmhvdmVyLFxyXG4gICAgLmN1cnJlbnQge1xyXG4gICAgICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICAgICBAZXh0ZW5kIC5iZy1wcmltYXJ5O1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuZGlzYWJsZWQge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKCRmb250cy1jb2xvciwgLjQpO1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbn0iXX0= */"

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
        /* pagination Info */
        this.pageSize = 10;
        this.pageNumber = 1;
        this.pages = [];
        this.limit = 10;
        this.getWeekArray = function (weekNo) { return new Array(weekNo); };
    }
    CustomerdetailsComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        console.log(pN);
        this.getData(this.pageNumber, this.limit);
    };
    CustomerdetailsComponent.prototype.acceptOrder = function (id, state, index) {
        var _this = this;
        this.http.put(this.auth.getDomainName() + '/api/order/accept/' + id + '/' + state, {}).subscribe(function (res) {
            if (res.success) {
                _this.users[index].isAccepted = state;
            }
            else {
                alert(res.error);
            }
        });
    };
    CustomerdetailsComponent.prototype.getNextWeek = function (user) {
        var activeWeek = this.getActiveWeek(user.planInfo.startDate);
        if (activeWeek) {
            if ((activeWeek + 1) <= user.planInfo.weeks) {
                return { success: true, value: activeWeek + 1 };
            }
            else {
                return { success: false, value: 'No Next Week' };
            }
        }
        else {
            return { success: true, value: 1 };
        }
    };
    CustomerdetailsComponent.prototype.getActiveWeek = function (startDate) {
        var start = new Date(startDate);
        var today = new Date();
        if (this.getCoreDate() >= this.getCoreDate(start))
            return Math.ceil(Math.abs(Math.floor((start - today) / 86400000)) / 7);
        else
            return 0;
    };
    CustomerdetailsComponent.prototype.getNextWeekId = function (weekNo, weekArray) {
        return weekArray.find(function (item) { return item.week == weekNo; });
    };
    CustomerdetailsComponent.prototype.skipThisWeek = function (weekObj, activePlanId) {
        return this.http.put(this.auth.getDomainName() + '/api/plan/active/' + activePlanId + '/skip-week/' + weekObj._id + '/' + weekObj.week, {});
    };
    CustomerdetailsComponent.prototype.getCoreDate = function (date) {
        if (date === void 0) { date = new Date(new Date().toUTCString()); }
        // return (new Date(new Date(new Date( new Date(date).setHours(0)).setMinutes(0)).setSeconds(0)))
        return new Date(date.toLocaleDateString());
    };
    CustomerdetailsComponent.prototype.skipNextWeek = function (order, index, alertModal) {
        var actweek;
        // order.planInfo.startDate = new Date('12-5-2018')
        if (this.getCoreDate() >= this.getCoreDate(new Date(order.plans.startDate))) {
            actweek = this.getActiveWeek(new Date(order.plans.startDate));
            var nextWeek = actweek + 1;
            if (this.notLastWeek(nextWeek, order.plans.weeks)) {
                console.log('Active Week : ' + actweek);
                var weekObj = this.getNextWeekId(nextWeek, order.weekIds);
                if (weekObj) {
                    if (!this.isThisWeekSkip(order.plans.skipedWeeks, weekObj._id)) {
                        this.skipThisWeek(weekObj, order.plans._id).subscribe(function (res) {
                            if (res.success) {
                                /* this.alertText = 'Week Skiped Successfully!';
                                this.openModal(alertModal); */
                                alert(res.message);
                                // window.location.reload();
                            }
                            else if (res.error) {
                                alert(res.error);
                                /*  this.alertText = res.error;
                                 this.openModal(alertModal); */
                            }
                        }, function (err) {
                            console.log("skipWeek err", err);
                        });
                    }
                    else {
                        alert('This Week was Skiped Already!');
                    }
                }
                else {
                    alert('No Week\'s Data Found');
                }
            }
            else {
                alert('This is last Week!');
            }
        }
        else {
            alert('Your Plan Not Activated Yet!');
        }
    };
    CustomerdetailsComponent.prototype.isThisWeekSkip = function (skipWeeks, weekId) {
        return skipWeeks.find(function (item) { return item.wId = weekId; });
    };
    CustomerdetailsComponent.prototype.notLastWeek = function (weekNo, maxWeek) {
        return (maxWeek > weekNo);
    };
    CustomerdetailsComponent.prototype.shouldButtonDisabled = function (user) {
        var actweek;
        // user.plans.startDate = new Date('12-5-2018')
        var currentDate = this.getCoreDate();
        var startDate = this.getCoreDate(new Date(user.planInfo.startDate));
        console.log(currentDate + ' : ' + startDate);
        console.log(currentDate.getTime() + '  > = ' + startDate.getTime());
        if (currentDate.getTime() >= startDate.getTime()) {
            actweek = this.getActiveWeek(new Date(user.planInfo.startDate));
            var nextWeek = actweek + 1;
            if (this.notLastWeek(nextWeek, user.planInfo.weeks)) {
                var weekObj = this.getNextWeekId(nextWeek, user.weekIds);
                if (weekObj) {
                    if (!this.isThisWeekSkip(user.planInfo.skipedWeeks, weekObj._id)) {
                        return { state: false, label: 'Skip Next Week' };
                    }
                    else {
                        return { state: true, label: 'Already Skiped' };
                    }
                }
                else {
                    return { state: true, label: 'Not Found' };
                }
            }
            else {
                return { state: true, label: 'No Next Week' };
            }
        }
        else {
            return { state: true, label: 'Not Started Yet' };
        }
    };
    CustomerdetailsComponent.prototype.ngOnInit = function () {
        //let params = new HttpParams();
        //params = params.set('pageNo', this.pageNumber)
        //this.http.get(url,  { params: params })
        this.getData(this.pageNumber, this.limit);
    };
    CustomerdetailsComponent.prototype.viewUserWeek = function (user) {
        var res = this.getNextWeek(user);
        if (res.success) {
            var nextWeek = this.getNextWeek(user).value;
            var userId = user.user._id;
            var activeplanID = user.planInfo._id;
            var weekId = this.getNextWeekId(nextWeek, user.weekIds)._id;
            this.router.navigateByUrl('/admin/pages/customer/cust/' + userId + '/plan/' + activeplanID + '/week/' + weekId);
        }
        else {
            alert(res.value);
        }
    };
    CustomerdetailsComponent.prototype.viewUserPlan = function (userId, planId) {
        console.log(userId, planId);
        this.router.navigateByUrl('/admin/pages/customer/cust/' + userId + '/plan/' + planId);
    };
    CustomerdetailsComponent.prototype.viewCustomerInfo = function (activePlanId) {
        this.router.navigateByUrl('/admin/pages/customer/customerInfo/' + activePlanId);
    };
    CustomerdetailsComponent.prototype.changeView = function (view) {
        this.view = view;
    };
    CustomerdetailsComponent.prototype.getData = function (pageNo, limit) {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/order/getAllOrders', {
            params: {
                pageNo: pageNo,
                size: limit
            }
        }).subscribe(function (res) {
            console.log("cust", res.data);
            _this.users = res.data.orders;
            var totalRecords = res.data.totalCount;
            var pages = Math.ceil(totalRecords / _this.limit);
            _this.pages = new Array(pages);
            console.log(pages);
            console.log(_this.pages);
        }, function (err) {
            console.log(err);
        });
    };
    CustomerdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custdetails',
            template: __webpack_require__(/*! ./customerdetails.component.html */ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.html"),
            styles: [__webpack_require__(/*! ./customerdetails.component.scss */ "./src/app/admin/pages/customer/customerdetails/customerdetails.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomerdetailsComponent);
    return CustomerdetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/customer/customerinfo/customerinfo.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerinfo/customerinfo.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVyaW5mby9jdXN0b21lcmluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/pages/customer/customerinfo/customerinfo.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerinfo/customerinfo.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- <a routerLink=\"/admin/pages/customer/cust/3423/plan/123\">cust Plan</a>\n  <a routerLink=\"/admin/pages/customer/cust/3423/plan/123/week/1\">Week Plan</a> -->\n  <div class=\"col-md-12\">\n    <card cardTitle=\"Customer Details\">\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Name</th>\n            <th>Contact</th>\n            <th>Area of Delivery</th>\n            <th>Area</th>\n            <th>Plan</th>\n            <th>Current Week</th>\n            <th>Skipped Week</th>\n            <!-- <th>Plan Detail</th> -->\n          </tr>\n        </thead>\n        <tbody>\n            <tr *ngIf=\"customer\">\n            <td>1</td>\n            <td>{{customer.order.customerData.firstName + ' ' + customer.order.customerData.lastName}}</td>\n            <td>{{customer.order.customerData.phoneNo}}</td>\n            <td>{{customer.order.Area_of_delivery}}</td>\n            <td>{{customer.order.address}}</td>\n            <td>{{customer.plan.title}}</td>\n            <td>{{(getActiveWeek(customer.startDate))?getActiveWeek(customer.startDate):'Not started'}}</td>\n            <td><span *ngFor=\"let weeks of customer.skipedWeeks let weekNoIndex = index\">{{weeks.wNo}}<span *ngIf=\"customer.skipedWeeks.length-1 != weekNoIndex\">,</span></span></td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/pages/customer/customerinfo/customerinfo.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerinfo/customerinfo.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerinfoComponent", function() { return CustomerinfoComponent; });
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




var CustomerinfoComponent = /** @class */ (function () {
    function CustomerinfoComponent(http, auth, router, activatedRoute) {
        this.http = http;
        this.auth = auth;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.customer = {};
    }
    CustomerinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeParams = this.activatedRoute.snapshot.params;
        console.log(routeParams);
        this.http.get(this.auth.getDomainName() + '/api/plan/customer/info/' + routeParams.activePlanId).subscribe(function (res) {
            console.log(res);
            _this.customer = res.data[0];
        }, function (err) {
        });
        // this.customer = 
        // this.http.get(this.auth.getDomainName() + '/api/order/getAllOrders').subscribe((res: any) => {
        //   console.log("cust",res.data);
        //   this.users = res.data;
        // },
        //   err=> {
        //   console.log(err);
        // });
    };
    // endDate = currentDate
    CustomerinfoComponent.prototype.getActiveWeek = function (startDate) {
        var start = new Date(startDate);
        var today = new Date();
        if (this.getCoreDate() >= this.getCoreDate(start))
            return Math.ceil(Math.abs(Math.floor((start - today) / 86400000)) / 7);
        else
            return 0;
    };
    CustomerinfoComponent.prototype.getCoreDate = function (date) {
        if (date === void 0) { date = new Date(new Date().toUTCString()); }
        // return (new Date(new Date(new Date( new Date(date).setHours(0)).setMinutes(0)).setSeconds(0)))
        return new Date(date.toLocaleDateString());
    };
    CustomerinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custinfo',
            template: __webpack_require__(/*! ./customerinfo.component.html */ "./src/app/admin/pages/customer/customerinfo/customerinfo.component.html"),
            styles: [__webpack_require__(/*! ./customerinfo.component.css */ "./src/app/admin/pages/customer/customerinfo/customerinfo.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CustomerinfoComponent);
    return CustomerinfoComponent;
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

module.exports = "<!-- <p>\n  custplan works!\n</p> -->\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <card cardTitle=\"Plan Details\">\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>Week</th>\n            <th>WeekType</th>\n            <!-- <th>Status</th> -->\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let plan of plans, let i=index\">\n            <td>{{plan.weeks}}</td>\n            <td>{{plan.isCustom ? 'Custom' : 'Default'}}</td>\n            <!-- <td>{{plan}}</td> -->\n            <td><button (click)=\"editPlan(plan.activePlanId, plan.weeks)\" class=\"btn btn-warning\"><i class=\"fa fa-pencil fa-fw\"></i>Edit</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n  </div>\n</div>"

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

module.exports = ".productmodal_body {\r\n    max-height: 400px;\r\n    overflow: auto;\r\n}\r\n@media only screen and (max-width:320px){\r\n    .productmodal_body {\r\n        margin-left: -10px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvY3VzdG9tZXIvY3VzdG9tZXJwbGFud2Vlay9jdXN0b21lcnBsYW53ZWVrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0k7UUFDSSxtQkFBbUI7S0FDdEI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVycGxhbndlZWsvY3VzdG9tZXJwbGFud2Vlay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Rtb2RhbF9ib2R5IHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KXtcclxuICAgIC5wcm9kdWN0bW9kYWxfYm9keSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  custplanweek works!\n</p> -->\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <button (click)=\"openModal(thirdModal)\" class=\"btn btn-primary\" style=\"margin:20px\">Add Product</button>\n    <card cardTitle=\"Week Plan Details\">\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>Type</th>\n            <th>Product</th>\n            <th>MRP</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let weekprod of weeks, let i=index\">\n            <td>{{weekprod.type}}</td>\n            <td>{{weekprod.name}}</td>\n            <td>{{weekprod.price}}</td>\n            <td><button (click)=\"deleteWeekProd(weekprod._id, i, alertModal)\" class=\"btn btn-danger\"><i class=\"fa fa-trash fa-fw\"></i>Delete</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n    <!-- <button class=\"btn btn-success\" style=\"margin:20px\">Save</button> -->\n  </div>\n</div>\n\n<modal #thirdModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\" >\n  <modal-header>\n    <h3>Add Products</h3>\n  </modal-header>\n  <modal-content>\n    <div class=\"productmodal_body\">\n        <table class=\"table table-bordered table-hover\">\n          <thead>\n            <tr>\n              <th>Type</th>\n              <th>Product</th>\n              <th>MRP</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let prod of products, let i=index\">\n              <td>{{prod.type}}</td>\n              <td>{{prod.name}}</td>\n              <td>{{prod.price}}</td>\n              <td><button (click)=\"addProd(prod._id, i, alertModal)\" class=\"btn btn-success\"><i class=\"fa fa-check fa-fw\"></i>Add</button></td>\n            </tr>\n          </tbody>\n        </table>\n    </div>\n  </modal-content>\n  <modal-footer>\n    <button class=\"btn btn-primary\" (click)=\"closeModal(thirdModal)\">close</button>\n  </modal-footer>\n</modal>\n\n<modal #alertModal modalClass=\"modal-sm\">\n  <modal-header>\n      <h3>Product Action</h3>\n  </modal-header>\n  <modal-content>\n      {{alertText}}\n  </modal-content>\n  <modal-footer>\n      <button class=\"btn btn-primary\" (click)=\"closeAlertModal(alertModal)\">close</button>\n  </modal-footer>\n</modal>"

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
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/global.service */ "./src/app/admin/shared/services/global.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
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
    function CustomerplanweekComponent(http, auth, activeRoute, _globalService) {
        this.http = http;
        this.auth = auth;
        this.activeRoute = activeRoute;
        this._globalService = _globalService;
        this.view = 'week';
        this.weeks = [];
        this.products = [];
        this.filterWeekProds = [];
        this.deleteMessage = '';
        this.data = {};
        this.addSuccess = false;
    }
    CustomerplanweekComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeParams = this.activeRoute.snapshot.params;
        console.log(routeParams);
        this.http.get(this.auth.getDomainName() + '/api/plan/customize/' + routeParams.planid + '/week/' + routeParams.weekid).subscribe(function (res) {
            console.log("weekProds", res.data);
            if (res.data && res.data.length) {
                _this.weeks = res.data[0].products;
                console.log("weeksProducts", _this.weeks);
                _this.getAllProducts();
            }
        }, function (err) {
            console.log(err);
            _this.getAllProducts();
        });
    };
    CustomerplanweekComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/product').subscribe(function (res) {
            console.log(res.data);
            if (res.data.products) {
                _this.filterWeekProds = res.data.products;
                for (var wp = 0; wp < _this.weeks.length; wp++) {
                    for (var p = 0; p < res.data.products.length; p++) {
                        if (_this.weeks[wp]["_id"] == res.data.products[p]["_id"]) {
                            _this.filterWeekProds.splice(p, 1);
                        }
                    }
                }
                console.log("this.products = this.filterWeekProds", _this.products, _this.filterWeekProds);
                _this.products = _this.filterWeekProds;
            }
        }, function (err) {
            console.log(err);
        });
    };
    CustomerplanweekComponent.prototype.deleteWeekProd = function (prodId, index, alertModal) {
        var _this = this;
        console.log(prodId);
        var routeParams = this.activeRoute.snapshot.params;
        console.log(routeParams);
        this.http.delete(this.auth.getDomainName() + '/api/plan/active/' + routeParams.planid + '/product/' + prodId + '/week/' + routeParams.weekid, {}).subscribe(function (res) {
            console.log("deleteProd ", res);
            if (res.success) {
                // alert('Product Deleted Successfully!');
                // this.alertText = "Product Deleted Successfully!";
                // this.openModal(alertModal);
                _this.notification('success', 'Product Deleted!', '');
                _this.products.push(_this.weeks[index]);
                _this.weeks.splice(index, 1);
            }
            else if (res.error) {
                // alert(res.error);
                // this.alertText = res.error;
                // this.openModal(alertModal);
                _this.notification('danger', 'Product Delete Error!', res.error);
            }
        }, function (err) {
            console.log("deleteProd err", err);
        });
    };
    CustomerplanweekComponent.prototype.addProd = function (prodId, index, alertModal) {
        var _this = this;
        console.log(prodId);
        var isExist = false;
        for (var wp = 0; wp < this.weeks.length; wp++) {
            if (this.weeks[wp]["_id"] == prodId) {
                isExist = true;
                // alert("Product already exist!");
            }
        }
        if (!isExist) {
            var routeParams = this.activeRoute.snapshot.params;
            console.log(routeParams);
            this.http.post(this.auth.getDomainName() + '/api/plan/active/' + routeParams.planid + '/product/' + prodId + '/week/' + routeParams.weekid, {}).subscribe(function (res) {
                console.log("addProd", res);
                if (res.success) {
                    // alert('Product Added Successfully!');
                    // this.alertText = "Product Added Successfully!";
                    // this.openModal(alertModal);
                    _this.notification('success', 'Product Added!', '');
                    _this.addSuccess = true;
                    _this.weeks.push(_this.products[index]);
                    _this.products.splice(index, 1);
                }
                else if (res.error) {
                    // alert(res.error);
                    // this.alertText = res.error;
                    // this.openModal(alertModal);
                    _this.notification('danger', 'Product Add Error!', res.error);
                }
            }, function (err) {
                console.log("addProd err", err);
            });
        }
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
    CustomerplanweekComponent.prototype.closeAlertModal = function (modal) {
        modal.close();
    };
    CustomerplanweekComponent.prototype.onClose = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            type: 'success',
            title: 'Success!',
            text: 'close it!',
        });
    };
    CustomerplanweekComponent.prototype.notification = function (type, title, text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            type: type,
            title: title,
            text: text,
        });
    };
    CustomerplanweekComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custplanweek',
            template: __webpack_require__(/*! ./customerplanweek.component.html */ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.html"),
            styles: [__webpack_require__(/*! ./customerplanweek.component.css */ "./src/app/admin/pages/customer/customerplanweek/customerplanweek.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], CustomerplanweekComponent);
    return CustomerplanweekComponent;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map