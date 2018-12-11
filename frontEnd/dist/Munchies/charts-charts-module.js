(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./src/app/admin/pages/charts/charts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/pages/charts/charts.component.ts ***!
  \********************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
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

var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charts',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/charts/charts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/pages/charts/charts.module.ts ***!
  \*****************************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _charts_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts.routing */ "./src/app/admin/pages/charts/charts.routing.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts.component */ "./src/app/admin/pages/charts/charts.component.ts");
/* harmony import */ var _components_echarts_echarts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/echarts/echarts.component */ "./src/app/admin/pages/charts/components/echarts/echarts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* components */


var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"],
                _charts_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            declarations: [
                _charts_component__WEBPACK_IMPORTED_MODULE_5__["ChartsComponent"],
                _components_echarts_echarts_component__WEBPACK_IMPORTED_MODULE_6__["EChartsComponent"]
            ]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/admin/pages/charts/charts.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/pages/charts/charts.routing.ts ***!
  \******************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts.component */ "./src/app/admin/pages/charts/charts.component.ts");
/* harmony import */ var _components_echarts_echarts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/echarts/echarts.component */ "./src/app/admin/pages/charts/components/echarts/echarts.component.ts");



var childRoutes = [
    {
        path: '',
        component: _charts_component__WEBPACK_IMPORTED_MODULE_1__["ChartsComponent"],
        children: [
            { path: '', redirectTo: 'echarts', pathMatch: 'full' },
            { path: 'echarts', component: _components_echarts_echarts_component__WEBPACK_IMPORTED_MODULE_2__["EChartsComponent"] },
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ })

}]);
//# sourceMappingURL=charts-charts-module.js.map