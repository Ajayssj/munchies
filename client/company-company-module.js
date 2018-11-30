(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./src/app/admin/pages/company/company.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/pages/company/company.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company_wrapper {\r\n  padding-right: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9wYWdlcy9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55X3dyYXBwZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/pages/company/company.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/pages/company/company.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"company_wrapper\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav nav-tabs\">\n      <li [ngClass]=\"{'active': view == 'company'}\" (click)=\"changeView('company')\"><a>Company</a></li>\n      <li [ngClass]=\"{'active': view == 'types'}\" (click)=\"changeView('types')\"><a>Types</a></li>\n      <li [ngClass]=\"{'active': view == 'product'}\" (click)=\"changeView('product')\"><a>Product</a></li>\n    </ul>\n  </div>\n\n  <div class=\"container-fluid content\">\n    <div *ngIf=\"view == 'company'\">\n      <div class=\"row\">\n        <button class=\"btn btn-primary\" style=\"margin:20px\">Add Company</button>\n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Company Name</th>\n            <th>Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>1</td>\n            <td>Charlie</td>\n            <td><button class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td>Bareball</td>\n            <td><button class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td>Whistle</td>\n            <td><button class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div *ngIf=\"view == 'types'\">\n      <div class=\"row\">\n        <button class=\"btn btn-primary\" style=\"margin:20px\">Add Product Type</button>\n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Product Type</th>\n            <th>Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>1</td>\n            <td>Laadu</td>\n            <td><button class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td>Makhana</td>\n            <td><button class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td>Enery Bars</td>\n            <td><button class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div *ngIf=\"view == 'product'\">\n      <div class=\"row\">\n        <button class=\"btn btn-primary\" style=\"margin:20px\">Add Product Type</button>\n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Product Name</th>\n            <th>Type</th>\n            <th>Company</th>\n            <th>Quantity</th>\n            <th>MRP</th>\n            <th>KCAL</th>\n            <th>Use in Week</th>\n            <th>Rate</th>\n            <th>Edit</th>\n            <th>Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>1</td>\n            <td>The Muscle</td>\n            <td>Makhana</td>\n            <td>Bareball</td>\n            <td>35gm</td>\n            <td>70</td>\n            <td>81</td>\n            <td>3</td>\n            <td>34</td>\n            <td><button class=\"btn btn-danger\">Edit</button></td>\n            <td><button class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td>The Brain</td>\n            <td>Laadu</td>\n            <td>Charlie</td>\n            <td>35gm</td>\n            <td>70</td>\n            <td>81</td>\n            <td>3</td>\n            <td>34</td>\n            <td><button class=\"btn btn-danger\">Edit</button></td>\n            <td><button class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td>Tough Nut Bar</td>\n            <td>Energy Bar</td>\n            <td>Eighty20</td>\n            <td>35gm</td>\n            <td>70</td>\n            <td>81</td>\n            <td>3</td>\n            <td>34</td>\n            <td><button class=\"btn btn-danger\">Edit</button></td>\n            <td><button class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/pages/company/company.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/pages/company/company.component.ts ***!
  \**********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
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

var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
        this.view = 'company';
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent.prototype.changeView = function (view) {
        this.view = view;
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/admin/pages/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/admin/pages/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/company/company.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/pages/company/company.module.ts ***!
  \*******************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _company_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.routing */ "./src/app/admin/pages/company/company.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company.component */ "./src/app/admin/pages/company/company.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _company_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            declarations: [
                _company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"]
            ]
        })
    ], CompanyModule);
    return CompanyModule;
}());



/***/ }),

/***/ "./src/app/admin/pages/company/company.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/pages/company/company.routing.ts ***!
  \********************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.component */ "./src/app/admin/pages/company/company.component.ts");


var childRoutes = [
    {
        path: '',
        component: _company_component__WEBPACK_IMPORTED_MODULE_1__["CompanyComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ })

}]);
//# sourceMappingURL=company-company-module.js.map