(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/admin/pages/profile/profile.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/pages/profile/profile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <profile></profile>\n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"row card card-block\">\n      <div class=\"col-md-6 form-group\">\n        <label class=\"control-label\">Username</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n      </div>\n      <div class=\"col-md-6 form-group\">\n        <label class=\"control-label\">Userpost</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Userpost\">\n      </div>\n      <div class=\"col-md-4 form-group\">\n        <label class=\"control-label\">Username</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n      </div>\n      <div class=\"col-md-4 form-group\">\n        <label class=\"control-label\">Username</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n      </div>\n      <div class=\"col-md-4 form-group\">\n        <label class=\"control-label\">Username</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label class=\"control-label\">Username</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label class=\"control-label\">Username</label>\n        <textarea class=\"form-control\" placeholder=\"Username\"></textarea>\n      </div>\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-primary\">Update Profile</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/pages/profile/profile.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/pages/profile/profile.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/pages/profile/profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/pages/profile/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/admin/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/admin/pages/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/profile/profile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/pages/profile/profile.module.ts ***!
  \*******************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.routing */ "./src/app/admin/pages/profile/profile.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/admin/pages/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _profile_routing__WEBPACK_IMPORTED_MODULE_2__["routing"]
            ],
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/admin/pages/profile/profile.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/pages/profile/profile.routing.ts ***!
  \********************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ "./src/app/admin/pages/profile/profile.component.ts");


var childRoutes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map