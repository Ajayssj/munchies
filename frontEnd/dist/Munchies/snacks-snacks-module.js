(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["snacks-snacks-module"],{

/***/ "./src/app/admin/pages/snacks/snacks.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/pages/snacks/snacks.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL3NuYWNrcy9zbmFja3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/pages/snacks/snacks.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/pages/snacks/snacks.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  snacks works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/pages/snacks/snacks.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/pages/snacks/snacks.component.ts ***!
  \********************************************************/
/*! exports provided: SnacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnacksComponent", function() { return SnacksComponent; });
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

var SnacksComponent = /** @class */ (function () {
    function SnacksComponent() {
    }
    SnacksComponent.prototype.ngOnInit = function () {
    };
    SnacksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snacks',
            template: __webpack_require__(/*! ./snacks.component.html */ "./src/app/admin/pages/snacks/snacks.component.html"),
            styles: [__webpack_require__(/*! ./snacks.component.css */ "./src/app/admin/pages/snacks/snacks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SnacksComponent);
    return SnacksComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/snacks/snacks.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/pages/snacks/snacks.module.ts ***!
  \*****************************************************/
/*! exports provided: SnacksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnacksModule", function() { return SnacksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _snacks_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snacks.routing */ "./src/app/admin/pages/snacks/snacks.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _snacks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snacks.component */ "./src/app/admin/pages/snacks/snacks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SnacksModule = /** @class */ (function () {
    function SnacksModule() {
    }
    SnacksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _snacks_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            declarations: [
                _snacks_component__WEBPACK_IMPORTED_MODULE_5__["SnacksComponent"]
            ]
        })
    ], SnacksModule);
    return SnacksModule;
}());



/***/ }),

/***/ "./src/app/admin/pages/snacks/snacks.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/pages/snacks/snacks.routing.ts ***!
  \******************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _snacks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snacks.component */ "./src/app/admin/pages/snacks/snacks.component.ts");


var childRoutes = [
    {
        path: '',
        component: _snacks_component__WEBPACK_IMPORTED_MODULE_1__["SnacksComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ })

}]);
//# sourceMappingURL=snacks-snacks-module.js.map