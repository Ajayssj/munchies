(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-levels-menu-levels-module"],{

/***/ "./src/app/admin/pages/menu-levels/components/levels-2/levels-2.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/pages/menu-levels/components/levels-2/levels-2.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  levels-2 works!\n</p>"

/***/ }),

/***/ "./src/app/admin/pages/menu-levels/components/levels-2/levels-2.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/pages/menu-levels/components/levels-2/levels-2.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL21lbnUtbGV2ZWxzL2NvbXBvbmVudHMvbGV2ZWxzLTIvbGV2ZWxzLTIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/pages/menu-levels/components/levels-2/levels-2.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/pages/menu-levels/components/levels-2/levels-2.component.ts ***!
  \***********************************************************************************/
/*! exports provided: Levels2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Levels2Component", function() { return Levels2Component; });
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

var Levels2Component = /** @class */ (function () {
    function Levels2Component() {
    }
    Levels2Component.prototype.ngOnInit = function () {
    };
    Levels2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-levels-2',
            template: __webpack_require__(/*! ./levels-2.component.html */ "./src/app/admin/pages/menu-levels/components/levels-2/levels-2.component.html"),
            styles: [__webpack_require__(/*! ./levels-2.component.scss */ "./src/app/admin/pages/menu-levels/components/levels-2/levels-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Levels2Component);
    return Levels2Component;
}());



/***/ }),

/***/ "./src/app/admin/pages/menu-levels/menu-levels.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/pages/menu-levels/menu-levels.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuLevelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLevelsComponent", function() { return MenuLevelsComponent; });
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

var MenuLevelsComponent = /** @class */ (function () {
    function MenuLevelsComponent() {
    }
    MenuLevelsComponent.prototype.ngOnInit = function () {
    };
    MenuLevelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-levels',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], MenuLevelsComponent);
    return MenuLevelsComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/menu-levels/menu-levels.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/pages/menu-levels/menu-levels.module.ts ***!
  \***************************************************************/
/*! exports provided: MenuLevelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLevelsModule", function() { return MenuLevelsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_levels_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-levels.routing */ "./src/app/admin/pages/menu-levels/menu-levels.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _menu_levels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-levels.component */ "./src/app/admin/pages/menu-levels/menu-levels.component.ts");
/* harmony import */ var _components_levels_2_levels_2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/levels-2/levels-2.component */ "./src/app/admin/pages/menu-levels/components/levels-2/levels-2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* components */


var MenuLevelsModule = /** @class */ (function () {
    function MenuLevelsModule() {
    }
    MenuLevelsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _menu_levels_routing__WEBPACK_IMPORTED_MODULE_2__["routing"]
            ],
            declarations: [
                _menu_levels_component__WEBPACK_IMPORTED_MODULE_5__["MenuLevelsComponent"],
                _components_levels_2_levels_2_component__WEBPACK_IMPORTED_MODULE_6__["Levels2Component"]
            ]
        })
    ], MenuLevelsModule);
    return MenuLevelsModule;
}());



/***/ }),

/***/ "./src/app/admin/pages/menu-levels/menu-levels.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/pages/menu-levels/menu-levels.routing.ts ***!
  \****************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_levels_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-levels.component */ "./src/app/admin/pages/menu-levels/menu-levels.component.ts");
/* harmony import */ var _components_levels_2_levels_2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/levels-2/levels-2.component */ "./src/app/admin/pages/menu-levels/components/levels-2/levels-2.component.ts");



var childRoutes = [
    {
        path: '',
        component: _menu_levels_component__WEBPACK_IMPORTED_MODULE_1__["MenuLevelsComponent"],
        children: [
            { path: '', redirectTo: 'levels1', pathMatch: 'full' },
            { path: 'levels1', loadChildren: './components/levels-1/levels-1.module#Levels1Module' },
            { path: 'levels2', component: _components_levels_2_levels_2_component__WEBPACK_IMPORTED_MODULE_2__["Levels2Component"] },
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ })

}]);
//# sourceMappingURL=menu-levels-menu-levels-module.js.map