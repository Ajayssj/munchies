(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-analytics-admin-analytics-module"],{

/***/ "./src/app/admin/pages/admin-analytics/admin-analytics.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/admin-analytics.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question_block .card-header {\r\n    display: none;\r\n}\r\n.question_block h3 {\r\n    color: rgba(38, 37, 60, 0.7);\r\n}\r\n.area {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n.area_text {\r\n    display: inline-block;\r\n    width: auto;\r\n    margin-right: 3%;\r\n    font-size: 18px;\r\n    width: 12%;\r\n}\r\n.pbar_wrapper {\r\n    width: 85%;\r\n    display: inline-block;\r\n    background-color: #e2e2e2;\r\n}\r\n.area .pbar {\r\n    background-color: aqua;\r\n    text-align: center;\r\n}\r\n.area .pbar span {\r\n    font-size: 16px;\r\n    color: brown;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvYWRtaW4tYW5hbHl0aWNzL2FkbWluLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksNkJBQTZCO0NBQ2hDO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9wYWdlcy9hZG1pbi1hbmFseXRpY3MvYWRtaW4tYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rpb25fYmxvY2sgLmNhcmQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnF1ZXN0aW9uX2Jsb2NrIGgzIHtcclxuICAgIGNvbG9yOiByZ2JhKDM4LCAzNywgNjAsIDAuNyk7XHJcbn1cclxuLmFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5hcmVhX3RleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDEyJTtcclxufVxyXG4ucGJhcl93cmFwcGVyIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xyXG59XHJcbi5hcmVhIC5wYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFyZWEgLnBiYXIgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/pages/admin-analytics/admin-analytics.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/admin-analytics.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"question_block\">\n    <h3>Which plan is selected the most?</h3>\n    <card cardTitle='Pie Chart'>\n      <div *ngIf=\"planSelectedOptions\" echarts [options]=\"planSelectedOptions\" [loading]=\"showloading\" theme=\"light\" class=\"demo-chart\"></div>\n    </card>\n  </div>\n  <div class=\"question_block\">\n    <h3>Which area has the most delivery?</h3>\n    <card cardTitle='Most delivery'>\n      <div *ngFor=\"let area of areaInfo\" class=\"area\">\n        <div class=\"area_text\">{{area.areaName}}</div>\n        <div class=\"pbar_wrapper\">\n           <div title=\"{{area.percent}}%\" [ngStyle]=\"{'width.%': area.percent}\" class=\"pbar\"><span> {{area.percent}} %</span></div>\n        </div>\n      </div>\n    </card>\n  </div>\n  <div class=\"question_block\">\n    <h3>Are you allergic to any of these?</h3>\n    <card cardTitle='Pie Chart'>\n      <div *ngIf=\"allergyOptions\" echarts [options]=\"allergyOptions\" [loading]=\"showloading\" theme=\"light\" class=\"demo-chart\"></div>\n    </card>\n  </div>\n  <div class=\"question_block\">\n    <h3>Fruits liked the most?</h3>\n    <card cardTitle='Pie Chart'>\n      <div *ngIf=\"fruitOptions\" echarts [options]=\"fruitOptions\" [loading]=\"showloading\" theme=\"light\" class=\"demo-chart\"></div>\n    </card>\n  </div>\n  <!-- <div class=\"question_block\">\n    <h3>Month Wise website traffic</h3>\n    <card cardTitle='Line Chart'>\n      <div echarts [options]=\"monthWiseTrafficOption\" [loading]=\"showloading\" theme=\"light\" class=\"demo-chart\"></div>\n    </card>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/admin/pages/admin-analytics/admin-analytics.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/admin-analytics.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAnalyticsComponent", function() { return AdminAnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pieCharts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pieCharts.service */ "./src/app/admin/pages/admin-analytics/pieCharts.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user/auth.service */ "./src/app/user/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAnalyticsComponent = /** @class */ (function () {
    function AdminAnalyticsComponent(chartsService, http, auth) {
        this.chartsService = chartsService;
        this.http = http;
        this.auth = auth;
        this.totalAreaCount = 0;
        this.areaInfo = [];
        this.Math = Math;
    }
    AdminAnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.planSelectedOptions = this.chartsService.getpPlanSelectedOptionsOption();
        this.allergyOptions = this.chartsService.getpAllergyOptionsOption();
        this.fruitOptions = this.chartsService.getpFruitOptionsOption();
        this.monthWiseTrafficOption = this.chartsService.getMonthWiseTrafficOptionsOption();
        console.log("plan", this.planSelectedOptions);
        this.http.get(this.auth.getDomainName() + '/api/analysis/most/delivered/area')
            .subscribe(function (res) {
            console.log(res.data);
            _this.totalAreaCount = res.data.reduce(function (a, b) { return ({ count: a.count + b.count }); }).count;
            console.log('Area Count  : ', _this.totalAreaCount);
            res.data.forEach(function (area, index) {
                // this.planSelectedOptions.legend.data.push(plan.planInfo.title);
                // this.planSelectedOptions.series[0].data.push({ value: plan.count, name: plan.planInfo.title });
                area.percent = ((area.count * 100) / _this.totalAreaCount).toFixed(2);
                console.log('Percent  : ', res.data[index].percent);
                _this.areaInfo.push({ areaName: area._id, count: area.count, percent: area.percent });
            });
        }, function (err) {
        });
        this.width = 40;
    };
    AdminAnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-analytics',
            template: __webpack_require__(/*! ./admin-analytics.component.html */ "./src/app/admin/pages/admin-analytics/admin-analytics.component.html"),
            styles: [__webpack_require__(/*! ./admin-analytics.component.css */ "./src/app/admin/pages/admin-analytics/admin-analytics.component.css")],
            providers: [_pieCharts_service__WEBPACK_IMPORTED_MODULE_1__["ChartsService"]]
        }),
        __metadata("design:paramtypes", [_pieCharts_service__WEBPACK_IMPORTED_MODULE_1__["ChartsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AdminAnalyticsComponent);
    return AdminAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/admin-analytics/admin-analytics.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/admin-analytics.module.ts ***!
  \***********************************************************************/
/*! exports provided: AdminAnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAnalyticsModule", function() { return AdminAnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-analytics.component */ "./src/app/admin/pages/admin-analytics/admin-analytics.component.ts");
/* harmony import */ var _admin_analytics_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-analytics.routing */ "./src/app/admin/pages/admin-analytics/admin-analytics.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _charts_components_echarts_echarts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../charts/components/echarts/echarts.component */ "./src/app/admin/pages/charts/components/echarts/echarts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* components */

var AdminAnalyticsModule = /** @class */ (function () {
    function AdminAnalyticsModule() {
    }
    AdminAnalyticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"],
                _admin_analytics_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            declarations: [
                _admin_analytics_component__WEBPACK_IMPORTED_MODULE_2__["AdminAnalyticsComponent"],
                _charts_components_echarts_echarts_component__WEBPACK_IMPORTED_MODULE_6__["EChartsComponent"]
            ]
        })
    ], AdminAnalyticsModule);
    return AdminAnalyticsModule;
}());



/***/ }),

/***/ "./src/app/admin/pages/admin-analytics/admin-analytics.routing.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/admin-analytics.routing.ts ***!
  \************************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_analytics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-analytics.component */ "./src/app/admin/pages/admin-analytics/admin-analytics.component.ts");


var childRoutes = [
    {
        path: '',
        component: _admin_analytics_component__WEBPACK_IMPORTED_MODULE_1__["AdminAnalyticsComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ }),

/***/ "./src/app/admin/pages/admin-analytics/pieCharts.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/pieCharts.service.ts ***!
  \******************************************************************/
/*! exports provided: ChartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsService", function() { return ChartsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/auth.service */ "./src/app/user/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartsService = /** @class */ (function () {
    function ChartsService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.planSelectedOptions = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                // data: ['1 week', '4 week', '12 week']
                data: []
            },
            roseType: 'angle',
            series: [
                {
                    name: 'Plans',
                    type: 'pie',
                    radius: [0, '50%'],
                    data: [
                    // { value: 235, name: '1 week' },
                    // { value: 210, name: '4 week' },
                    // { value: 162, name: '12 week' }
                    ]
                }
            ]
        };
        this.allergyOptions = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                // data: ['Milk', 'Eggs', 'Peanuts', 'Other Nuts', 'Wheat']
                data: []
            },
            roseType: 'angle',
            series: [
                {
                    name: 'Allergy',
                    type: 'pie',
                    radius: [0, '50%'],
                    data: [
                    // { value: 235, name: 'Milk' },
                    // { value: 210, name: 'Eggs' },
                    // { value: 162, name: 'Peanuts' },
                    // { value: 100, name: 'Other Nuts' },
                    // { value: 50, name: 'Wheat' }
                    ]
                }
            ]
        };
        this.fruitOptions = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                // data: ['Banana', 'Apple', 'Pear', 'Guava', 'Mango']
                data: []
            },
            roseType: 'angle',
            series: [
                {
                    name: 'Fruits',
                    type: 'pie',
                    radius: [0, '50%'],
                    data: [
                    // { value: 143, name: 'Banana' },
                    // { value: 178, name: 'Apple' },
                    // { value: 240, name: 'Pear' },
                    // { value: 100, name: 'Guava' },
                    // { value: 300, name: 'Mango' }
                    ]
                }
            ]
        };
        this.monthWiseTrafficOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    // type: 'value',
                    type: 'value',
                    data: [0, 1000, 2000],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            series: [
                {
                    name: 'abc',
                    type: 'bar',
                    barWidth: '20%',
                    data: [10, 1000, 200, 334]
                }
            ]
        };
        this.getAllPlans();
        this.getAllergic();
        this.getFruitsLikedMost();
    }
    ChartsService.prototype.getpPlanSelectedOptionsOption = function () {
        return this.planSelectedOptions;
    };
    ChartsService.prototype.getpAllergyOptionsOption = function () {
        return this.allergyOptions;
    };
    ChartsService.prototype.getpFruitOptionsOption = function () {
        return this.fruitOptions;
    };
    ChartsService.prototype.getMonthWiseTrafficOptionsOption = function () {
        return this.monthWiseTrafficOption;
    };
    ChartsService.prototype.getAllPlans = function () {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/analysis/most/used/plan')
            .subscribe(function (res) {
            console.log(res.data);
            res.data.forEach(function (plan) {
                _this.planSelectedOptions.legend.data.push(plan.planInfo.title.toUpperCase());
                _this.planSelectedOptions.series[0].data.push({ value: plan.count, name: plan.planInfo.title.toUpperCase() });
            });
            _this.planSelectedOptions.series[0].data = _this.planSelectedOptions.series[0].data.slice();
            console.log(_this.planSelectedOptions);
        }, function (err) {
        });
    };
    ChartsService.prototype.getAllergic = function () {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/analysis/most/allergic')
            .subscribe(function (res) {
            console.log(res.data);
            res.data.forEach(function (allergicItem) {
                _this.allergyOptions.legend.data.push(allergicItem._id.toUpperCase());
                _this.allergyOptions.series[0].data.push({ value: allergicItem.count, name: allergicItem._id.toUpperCase() });
            });
            console.log(_this.allergyOptions);
        }, function (err) {
        });
    };
    ChartsService.prototype.getFruitsLikedMost = function () {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/analysis/most/liked/fruits')
            .subscribe(function (res) {
            console.log(res.data);
            res.data.forEach(function (fruitsItem) {
                _this.fruitOptions.legend.data.push(fruitsItem._id.toUpperCase());
                _this.fruitOptions.series[0].data.push({ value: fruitsItem.count, name: fruitsItem._id.toUpperCase() });
            });
            console.log(_this.fruitOptions);
        }, function (err) {
        });
    };
    ChartsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ChartsService);
    return ChartsService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-analytics-admin-analytics-module.js.map