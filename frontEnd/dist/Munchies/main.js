(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./charts/charts.module": [
		"./src/app/admin/pages/charts/charts.module.ts",
		"default~charts-charts-module~index-index-module",
		"charts-charts-module"
	],
	"./company/company.module": [
		"./src/app/admin/pages/company/company.module.ts",
		"company-company-module"
	],
	"./components/levels-1/levels-1.module": [
		"./src/app/admin/pages/menu-levels/components/levels-1/levels-1.module.ts",
		"components-levels-1-levels-1-module"
	],
	"./customer/customer.module": [
		"./src/app/admin/pages/customer/customer.module.ts",
		"customer-customer-module"
	],
	"./editor/editor.module": [
		"./src/app/admin/pages/editor/editor.module.ts",
		"editor-editor-module"
	],
	"./form/form.module": [
		"./src/app/admin/pages/form/form.module.ts",
		"form-form-module"
	],
	"./icon/icon.module": [
		"./src/app/admin/pages/icon/icon.module.ts",
		"icon-icon-module"
	],
	"./index/index.module": [
		"./src/app/admin/pages/index/index.module.ts",
		"default~charts-charts-module~index-index-module",
		"index-index-module"
	],
	"./menu-levels/menu-levels.module": [
		"./src/app/admin/pages/menu-levels/menu-levels.module.ts",
		"menu-levels-menu-levels-module"
	],
	"./profile/profile.module": [
		"./src/app/admin/pages/profile/profile.module.ts",
		"profile-profile-module"
	],
	"./snacks/snacks.module": [
		"./src/app/admin/pages/snacks/snacks.module.ts",
		"snacks-snacks-module"
	],
	"./table/table.module": [
		"./src/app/admin/pages/table/table.module.ts",
		"table-table-module"
	],
	"./ui/ui.module": [
		"./src/app/admin/pages/ui/ui.module.ts",
		"ui-ui-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        this.title = 'app';
    }
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-root',
            template: "<router-outlet></router-outlet>"
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/admin/pages/pages.module.ts");
/* harmony import */ var _admin_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.routing */ "./src/app/admin/admin.routing.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"],
                _admin_routing__WEBPACK_IMPORTED_MODULE_4__["routing"]
            ],
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
            ],
            bootstrap: [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.routing.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.routing.ts ***!
  \****************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");


var adminRoutes = [
    {
        path: 'admin',
        //   redirectTo: '/admin/pages/index',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(adminRoutes);


/***/ }),

/***/ "./src/app/admin/pages/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/pages/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-block login-card\">\n  <h3 class=\"form-label\">Welcome Back</h3>\n  <span class=\"form-label\">sign in to continue to Lines</span>\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon addon-left\" id=\"username\">\n        <i class=\"fa fa-user fa-fw\"></i>\n      </span>\n      <input class=\"form-control with-primary-addon\" placeholder=\"User Account\" type=\"text\">\n    </div>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon addon-left\" id=\"password\">\n        <i class=\"fa fa-lock fa-fw\"></i>\n      </span>\n      <input class=\"form-control with-primary-addon\" placeholder=\"Password\" type=\"password\">\n    </div>\n    <button class=\"btn btn-lg btn-primary\">Login</button>\n    <a href=\"\" class=\"btn btn-link\">Register Now. →</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/pages/login/login.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/pages/login/login.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.login-card {\n  padding: 20px;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 400px;\n  height: auto; }\n\n.login-card .form-group {\n    padding: 0; }\n\n.login-card .form-label {\n    display: block;\n    color: #26253c;\n    padding: 0 10px; }\n\n.login-card span.form-label {\n    color: #625f9b; }\n\n.login-card .input-group {\n    padding: 0;\n    margin: 25px 0; }\n\n.login-card .form-control {\n    background: transparent;\n    color: #26253c; }\n\n.login-card .input-group-addon {\n    background: transparent;\n    border: none;\n    font-size: 16px;\n    color: #4e4c7b; }\n\n.login-card .btn {\n    width: 100%; }\n\n.login-card .btn-link {\n    margin: 10px 0;\n    color: #625f9b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvbG9naW4vRjpcXHByb2plY3RzXFxtdW5jaGllc1xcZ2l0aHViXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxjb2xvci1zY2hlbWVzXFxfZGVmYXVsdC5zY3NzIiwic3JjL2FwcC9hZG1pbi9wYWdlcy9sb2dpbi9GOlxccHJvamVjdHNcXG11bmNoaWVzXFxnaXRodWJcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXG1peGluLnNjc3MiLCJzcmMvYXBwL2FkbWluL3BhZ2VzL2xvZ2luL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxpQkFoQlMsRUFpQlo7O0FBRUQ7RUNNSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUDlDOztBQUVEO0VDRUksNERBQW1DO0VBR25DLG9FQUEyQyxFREg5Qzs7QUFFRDtFQ0ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURDOUM7O0FBRUQ7RUNOSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESzlDOztBQUVEO0VDVkksNERBQW1DO0VBR25DLG9FQUEyQyxFRFM5Qzs7QUFFRDtFQ2RJLDREQUFtQztFQUduQyxvRUFBMkMsRURhOUM7O0FFNUNEO0VBQ0ksY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsVUFBUztFQUNULHlDQUFnQztVQUFoQyxpQ0FBZ0M7RUFDaEMsYUFBWTtFQUNaLGFBQVksRUFpQ2Y7O0FBeENEO0lBU1EsV0FBVSxFQUNiOztBQVZMO0lBWVEsZUFBYztJQUNkLGVGRFk7SUVFWixnQkFBZSxFQUNsQjs7QUFmTDtJQWlCUSxlQUFpQyxFQUNwQzs7QUFsQkw7SUFvQlEsV0FBVTtJQUNWLGVBQWMsRUFDakI7O0FBdEJMO0lBd0JRLHdCQUF1QjtJQUN2QixlRmJZLEVFY2Y7O0FBMUJMO0lBNEJRLHdCQUF1QjtJQUN2QixhQUFZO0lBQ1osZ0JGNUJLO0lFNkJMLGVBQWlDLEVBQ3BDOztBQWhDTDtJQWtDUSxZQUFXLEVBQ2Q7O0FBbkNMO0lBcUNRLGVBQWM7SUFDZCxlQUFpQyxFQUNwQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xuJGRlZmF1bHQtdGV4dDoxNHB4O1xuJHNtLXRleHQ6MTJweDtcbiRsZy10ZXh0OjE2cHg7XG4kYm9keS1iZzojZmZmO1xuJHNpZGViYXItYmc6IzQ2NTI5NDtcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XG4kY2FyZC1iZzojZmZmO1xuJGNhcmQtYm9yZGVyOiNlNGUzZTM7XG4kd2hpdGU6I2ZmZjtcbiRibGFjazojMDAwO1xuJGJvcmRlci1jb2xvcjpyZ2JhKCRibGFjaywgLjEpO1xuJHRhYmxlLWJvcmRlci1jb2xvcjojZTZlNmU2O1xuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XG4kcHJpbWFyeTojZmNhNDAwO1xuJHN1Y2Nlc3M6IzE2YmU5YTtcbiRkYW5nZXI6I2ZhNTE2NztcbiR3YXJuaW5nOiNmZjc0MDM7XG4kaW5mbzojMmNjM2ZmO1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5iZy1kZWZhdWx0IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBkYXJrZW4oJGNhcmQtYmcsIDQwJSksIGRhcmtlbigkY2FyZC1iZywgMzAlKSk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkc3VjY2VzcywgIzQyZTY5Nyk7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRkYW5nZXIsICNmZGEwOWMpO1xufVxuXG4uYmctd2FybmluZyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xufVxuXG4uYmctaW5mbyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGluZm8sICMxNWY4YmYpO1xufSIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xuICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAyIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufSIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC90aGVtZS9jb25mJztcbi5sb2dpbi1jYXJkIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5mb3JtLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAkZm9udHMtY29sb3I7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG4gICAgc3Bhbi5mb3JtLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGZvbnRzLWNvbG9yLCAzMCUpO1xuICAgIH1cbiAgICAuaW5wdXQtZ3JvdXAge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDI1cHggMDtcbiAgICB9XG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogJGZvbnRzLWNvbG9yO1xuICAgIH1cbiAgICAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6ICRsZy10ZXh0O1xuICAgICAgICBjb2xvcjogbGlnaHRlbigkZm9udHMtY29sb3IsIDIwJSk7XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmJ0bi1saW5rIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGNvbG9yOiBsaWdodGVuKCRmb250cy1jb2xvciwgMzAlKTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/pages/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/pages/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/admin/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/menu.ts":
/*!*************************************!*\
  !*** ./src/app/admin/pages/menu.ts ***!
  \*************************************/
/*! exports provided: MENU_ITEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEM", function() { return MENU_ITEM; });
var MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        path: 'customer',
        title: 'Customer',
        icon: 'user'
    },
    {
        path: 'company',
        title: 'products',
        icon: 'building'
    },
    {
        path: 'snacks',
        title: 'Snacks',
        icon: 'cutlery'
    },
    {
        path: 'editor',
        title: 'Pell Editor',
        icon: 'pencil'
    },
    {
        path: 'icon',
        title: 'Icon',
        icon: 'diamond'
    },
    {
        path: 'profile',
        title: 'User Profile',
        icon: 'user'
    },
    {
        path: 'ui',
        title: 'UI Element',
        icon: 'paint-brush',
        children: [
            {
                path: 'grid',
                title: 'Bootstrap Grid'
            },
            {
                path: 'buttons',
                title: 'Buttons'
            },
            {
                path: 'notification',
                title: 'Notification'
            },
            {
                path: 'tabs',
                title: 'Tabs'
            },
            {
                path: 'file-tree',
                title: 'File Tree'
            },
            {
                path: 'modals',
                title: 'Modals'
            },
            {
                path: 'progress-bar',
                title: 'ProgressBar'
            },
        ]
    },
    {
        path: 'form',
        title: 'Forms',
        icon: 'check-square-o',
        children: [
            {
                path: 'form-inputs',
                title: 'Form Inputs'
            },
            {
                path: 'form-layouts',
                title: 'Form Layouts'
            },
            {
                path: 'file-upload',
                title: 'File Upload'
            },
            {
                path: 'ng2-select',
                title: 'Ng2-Select'
            }
        ]
    },
    {
        path: 'charts',
        title: 'Charts',
        icon: 'bar-chart',
        children: [
            {
                path: 'echarts',
                title: 'Echarts'
            }
        ]
    },
    {
        path: 'table',
        title: 'Tables',
        icon: 'table',
        children: [
            {
                path: 'basic-tables',
                title: 'Basic Tables'
            },
            {
                path: 'data-table',
                title: 'Data Table'
            }
        ]
    },
    {
        path: 'menu-levels',
        title: 'Menu Levels',
        icon: 'sitemap',
        children: [
            {
                path: 'levels1',
                title: 'Menu Level1',
                children: [
                    {
                        path: 'levels1-1',
                        title: 'Menu Level1-1'
                    }
                ]
            },
            {
                path: 'levels2',
                title: 'Menu Level2'
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/admin/pages/pages.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/pages/pages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pages-wrap\">\n  <pages-top></pages-top>\n  <div class=\"pages-body\">\n    <sidebar></sidebar>\n    \n    <div class=\"pages-content\">\n      <content-top></content-top>\n      <router-outlet></router-outlet>\n      <notification></notification>\n    </div>\n\n    <right-config></right-config>\n  </div>\n</div>\n<loading [loading]=\"false\"></loading>\n"

/***/ }),

/***/ "./src/app/admin/pages/pages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/pages/pages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.pages-wrap {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background: #fff; }\n\n.pages-body {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  background: transparent;\n  overflow-x: hidden; }\n\n.pages-body .pages-content {\n    padding: 15px;\n    flex: 1;\n    background: transparent;\n    border-left: 1px solid rgba(0, 0, 0, 0.1);\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    color: #26253c;\n    overflow-x: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvRjpcXHByb2plY3RzXFxtdW5jaGllc1xcZ2l0aHViXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxjb2xvci1zY2hlbWVzXFxfZGVmYXVsdC5zY3NzIiwic3JjL2FwcC9hZG1pbi9wYWdlcy9GOlxccHJvamVjdHNcXG11bmNoaWVzXFxnaXRodWJcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXG1peGluLnNjc3MiLCJzcmMvYXBwL2FkbWluL3BhZ2VzL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxccGFnZXNcXHBhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGlCQWhCUyxFQWlCWjs7QUFFRDtFQ01JLDREQUFtQztFQUduQyxvRUFBMkMsRURQOUM7O0FBRUQ7RUNFSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESDlDOztBQUVEO0VDRkksNERBQW1DO0VBR25DLG9FQUEyQyxFREM5Qzs7QUFFRDtFQ05JLDREQUFtQztFQUduQyxvRUFBMkMsRURLOUM7O0FBRUQ7RUNWSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUzlDOztBQUVEO0VDZEksNERBQW1DO0VBR25DLG9FQUEyQyxFRGE5Qzs7QUU1Q0Q7RUFDSSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGlCRkhTLEVFSVo7O0FBRUQ7RUFDSSxRQUFPO0VBQ1AsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsbUJBQWtCLEVBVXJCOztBQWZEO0lBT1EsY0FBYTtJQUNiLFFBQU87SUFDUCx3QkFBdUI7SUFDdkIsMENGVkc7SUVXSCx5Q0ZYRztJRVlILGVGVFk7SUVVWixtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL21peGluJztcbiRkZWZhdWx0LXRleHQ6MTRweDtcbiRzbS10ZXh0OjEycHg7XG4kbGctdGV4dDoxNnB4O1xuJGJvZHktYmc6I2ZmZjtcbiRzaWRlYmFyLWJnOiM0NjUyOTQ7XG4kc2lkZWJhci1mb250cy1jb2xvcjojZmZmO1xuJGNhcmQtYmc6I2ZmZjtcbiRjYXJkLWJvcmRlcjojZTRlM2UzO1xuJHdoaXRlOiNmZmY7XG4kYmxhY2s6IzAwMDtcbiRib3JkZXItY29sb3I6cmdiYSgkYmxhY2ssIC4xKTtcbiR0YWJsZS1ib3JkZXItY29sb3I6I2U2ZTZlNjtcbiRmb250cy1jb2xvcjojMjYyNTNjO1xuJHByaW1hcnk6I2ZjYTQwMDtcbiRzdWNjZXNzOiMxNmJlOWE7XG4kZGFuZ2VyOiNmYTUxNjc7XG4kd2FybmluZzojZmY3NDAzO1xuJGluZm86IzJjYzNmZjtcbmJvZHkge1xuICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xufVxuXG4uYmctZGVmYXVsdCB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgZGFya2VuKCRjYXJkLWJnLCA0MCUpLCBkYXJrZW4oJGNhcmQtYmcsIDMwJSkpO1xufVxuXG4uYmctcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHByaW1hcnksICNmZmQxN2MpO1xufVxuXG4uYmctc3VjY2VzcyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHN1Y2Nlc3MsICM0MmU2OTcpO1xufVxuXG4uYmctZGFuZ2VyIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkZGFuZ2VyLCAjZmRhMDljKTtcbn1cblxuLmJnLXdhcm5pbmcge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICR3YXJuaW5nLCAjZmFjOTgwKTtcbn1cblxuLmJnLWluZm8ge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRpbmZvLCAjMTVmOGJmKTtcbn0iLCJAbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0uLi4pIHtcbiAgICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMiAzO1xuICAgIGJvcmRlci1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xuICAgIGJvcmRlci1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xufVxuXG5AbWl4aW4gY2VudGVyKCR3aWR0aCwgJGhlaWdodCkge1xuICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogJGhlaWdodDtcbn0iLCJAaW1wb3J0ICcuLi9zaGFyZWQvdGhlbWUvY29uZic7XG4ucGFnZXMtd3JhcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5wYWdlcy1ib2R5IHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgLnBhZ2VzLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICAgICAgY29sb3I6ICRmb250cy1jb2xvcjtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/pages/pages.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/pages/pages.component.ts ***!
  \************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/admin/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/admin/pages/pages.component.scss")]
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/pages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/pages/pages.module.ts ***!
  \*********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.routing */ "./src/app/admin/pages/pages.routing.ts");
/* harmony import */ var _shared_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/layout.module */ "./src/app/admin/shared/layout.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.component */ "./src/app/admin/pages/pages.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* components */


//import { CompanyComponent } from './company/company.component';
//import { SnacksComponent } from './snacks/snacks.component';
// import { CustomerComponent } from './customer/customer.component';
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _pages_routing__WEBPACK_IMPORTED_MODULE_2__["routing"]
            ],
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/admin/pages/pages.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/pages/pages.routing.ts ***!
  \**********************************************/
/*! exports provided: childRoutes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childRoutes", function() { return childRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/admin/pages/pages.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.component */ "./src/app/admin/admin.component.ts");



var childRoutes = [
    {
        path: 'admin',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        children: [
            // {
            //     path: 'login',
            //     component: LoginComponent,
            // },
            {
                path: 'pages',
                component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
                // canActivate: [AuthGuard],
                children: [
                    { path: '', redirectTo: 'index', pathMatch: 'full' },
                    { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' },
                    { path: 'company', loadChildren: './company/company.module#CompanyModule' },
                    { path: 'snacks', loadChildren: './snacks/snacks.module#SnacksModule' },
                    { path: 'index', loadChildren: './index/index.module#IndexModule' },
                    { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
                    { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
                    { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
                    { path: 'form', loadChildren: './form/form.module#FormModule' },
                    { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
                    { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
                    { path: 'table', loadChildren: './table/table.module#TableModule' },
                    { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
                ]
            }
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(childRoutes, { enableTracing: true });


/***/ }),

/***/ "./src/app/admin/shared/animation/collapse-animate.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/shared/animation/collapse-animate.ts ***!
  \************************************************************/
/*! exports provided: collapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapse", function() { return collapse; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var collapse = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('collapse', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('init', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('off', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => on', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms cubic-bezier(.39,.8,.5,.95)')]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('on => off', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms cubic-bezier(.39,.8,.5,.95)')]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('init => off', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0s')])
    ])
];


/***/ }),

/***/ "./src/app/admin/shared/components/alert/alert.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/shared/components/alert/alert.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-wrap alert-wrap-{{type}}\" [ngStyle]=\"{'display':isClose?'none':'flex'}\">\n  <div class=\"alert-icon-wrap\">\n    <span class=\"alert-icon\">\n      <i class=\"fa fa-check alert-ico\" *ngIf=\"type==='success'\"></i>\n      <i class=\"fa fa-exclamation alert-ico\" *ngIf=\"type==='warning'\"></i>\n      <i class=\"fa fa-times alert-ico\" *ngIf=\"type==='danger'\"></i>\n      <i class=\"fa fa-info alert-ico\" *ngIf=\"type==='info'\"></i>\n    </span>\n  </div>\n  <p>\n    <ng-content></ng-content>\n  </p>\n  <button class=\"alert-close-btn\" (click)=\"close()\" *ngIf=\"isCloseAlert\">\n    <i class=\"fa fa-times alert-ico\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/alert/alert.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/shared/components/alert/alert.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success, .alert-wrap .alert-icon, .alert-wrap-success .alert-icon {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger, .alert-wrap-danger .alert-icon {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning, .alert-wrap-warning .alert-icon {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info, .alert-wrap-info .alert-icon {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.alert-wrap {\n  padding: 0;\n  display: flex;\n  margin: 10px 0 10px 10px;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  background: #fff;\n  border: 1px solid #16be9a;\n  border-radius: 3px;\n  min-height: 50px; }\n\n.alert-wrap .alert-icon-wrap {\n    width: 70px;\n    height: auto; }\n\n.alert-wrap .alert-icon {\n    display: inline-block;\n    border-radius: 5px;\n    font-size: 15px;\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg);\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    line-height: 30px; }\n\n.alert-wrap .alert-icon i {\n      color: #fff;\n      -webkit-transform: rotate(-30deg);\n              transform: rotate(-30deg); }\n\n.alert-wrap p {\n    flex: 1;\n    margin: 0;\n    padding: 13px 0;\n    color: #26253c; }\n\n.alert-wrap .alert-close-btn {\n    width: 40px;\n    background: transparent;\n    border: none;\n    outline: none;\n    color: rgba(38, 37, 60, 0.3); }\n\n.alert-wrap .alert-close-btn:hover {\n      color: #26253c; }\n\n.alert-wrap-success {\n  border: 1px solid #16be9a; }\n\n.alert-wrap-warning {\n  border: 1px solid #ff7403; }\n\n.alert-wrap-danger {\n  border: 1px solid #fa5167; }\n\n.alert-wrap-info {\n  border: 1px solid #2cc3ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvRjpcXHByb2plY3RzXFxtdW5jaGllc1xcZ2l0aHViXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxjb2xvci1zY2hlbWVzXFxfZGVmYXVsdC5zY3NzIiwic3JjL2FwcC9hZG1pbi9zaGFyZWQvY29tcG9uZW50cy9hbGVydC9GOlxccHJvamVjdHNcXG11bmNoaWVzXFxnaXRodWJcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXG1peGluLnNjc3MiLCJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFxhbGVydFxcYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksaUJBaEJTLEVBaUJaOztBQUVEO0VDTUksNERBQW1DO0VBR25DLG9FQUEyQyxFRFA5Qzs7QUFFRDtFQ0VJLDREQUFtQztFQUduQyxvRUFBMkMsRURIOUM7O0FBRUQ7RUNGSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEQzlDOztBQUVEO0VDTkksNERBQW1DO0VBR25DLG9FQUEyQyxFREs5Qzs7QUFFRDtFQ1ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURTOUM7O0FBRUQ7RUNkSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEYTlDOztBRTVDRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2IseUJBQXdCO0VBQ3hCLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsaUJGQVM7RUVDVCwwQkZPWTtFRU5aLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFpQ25COztBQTFDRDtJQVdRLFlBQVc7SUFDWCxhQUFZLEVBQ2Y7O0FBYkw7SUFlUSxzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsaUNBQXdCO1lBQXhCLHlCQUF3QjtJRHVCNUIsWUN0QndCO0lEdUJ4QixhQ3ZCOEI7SUR3QjlCLG1CQUFrQjtJQUNsQixrQkN6QjhCLEVBTTdCOztBQXpCTDtNQXNCWSxZRmREO01FZUMsa0NBQXlCO2NBQXpCLDBCQUF5QixFQUM1Qjs7QUF4QlQ7SUEyQlEsUUFBTztJQUNQLFVBQVM7SUFDVCxnQkFBZTtJQUNmLGVGbEJZLEVFbUJmOztBQS9CTDtJQWlDUSxZQUFXO0lBQ1gsd0JBQXVCO0lBQ3ZCLGFBQVk7SUFDWixjQUFhO0lBQ2IsNkJGekJZLEVFNkJmOztBQXpDTDtNQXVDWSxlRjNCUSxFRTRCWDs7QUFJVDtFQUNJLDBCRi9CWSxFRW1DZjs7QUFFRDtFQUNJLDBCRnBDWSxFRXdDZjs7QUFFRDtFQUNJLDBCRjVDVyxFRWdEZDs7QUFFRDtFQUNJLDBCRmpEUyxFRXFEWiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xuJGRlZmF1bHQtdGV4dDoxNHB4O1xuJHNtLXRleHQ6MTJweDtcbiRsZy10ZXh0OjE2cHg7XG4kYm9keS1iZzojZmZmO1xuJHNpZGViYXItYmc6IzQ2NTI5NDtcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XG4kY2FyZC1iZzojZmZmO1xuJGNhcmQtYm9yZGVyOiNlNGUzZTM7XG4kd2hpdGU6I2ZmZjtcbiRibGFjazojMDAwO1xuJGJvcmRlci1jb2xvcjpyZ2JhKCRibGFjaywgLjEpO1xuJHRhYmxlLWJvcmRlci1jb2xvcjojZTZlNmU2O1xuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XG4kcHJpbWFyeTojZmNhNDAwO1xuJHN1Y2Nlc3M6IzE2YmU5YTtcbiRkYW5nZXI6I2ZhNTE2NztcbiR3YXJuaW5nOiNmZjc0MDM7XG4kaW5mbzojMmNjM2ZmO1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5iZy1kZWZhdWx0IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBkYXJrZW4oJGNhcmQtYmcsIDQwJSksIGRhcmtlbigkY2FyZC1iZywgMzAlKSk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkc3VjY2VzcywgIzQyZTY5Nyk7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRkYW5nZXIsICNmZGEwOWMpO1xufVxuXG4uYmctd2FybmluZyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xufVxuXG4uYmctaW5mbyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGluZm8sICMxNWY4YmYpO1xufSIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xuICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAyIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufSIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lL2NvbmYnO1xuLmFsZXJ0LXdyYXAge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBiYWNrZ3JvdW5kOiAkY2FyZC1iZztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3VjY2VzcztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICAuYWxlcnQtaWNvbi13cmFwIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgLmFsZXJ0LWljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgICAgIEBpbmNsdWRlIGNlbnRlcigzMHB4LCAzMHB4KTtcbiAgICAgICAgQGV4dGVuZCAuYmctc3VjY2VzcztcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxM3B4IDA7XG4gICAgICAgIGNvbG9yOiAkZm9udHMtY29sb3I7XG4gICAgfVxuICAgIC5hbGVydC1jbG9zZS1idG4ge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGZvbnRzLWNvbG9yLCAuMyk7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRmb250cy1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFsZXJ0LXdyYXAtc3VjY2VzcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHN1Y2Nlc3M7XG4gICAgLmFsZXJ0LWljb24ge1xuICAgICAgICBAZXh0ZW5kIC5iZy1zdWNjZXNzO1xuICAgIH1cbn1cblxuLmFsZXJ0LXdyYXAtd2FybmluZyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHdhcm5pbmc7XG4gICAgLmFsZXJ0LWljb24ge1xuICAgICAgICBAZXh0ZW5kIC5iZy13YXJuaW5nO1xuICAgIH1cbn1cblxuLmFsZXJ0LXdyYXAtZGFuZ2VyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZGFuZ2VyO1xuICAgIC5hbGVydC1pY29uIHtcbiAgICAgICAgQGV4dGVuZCAuYmctZGFuZ2VyO1xuICAgIH1cbn1cblxuLmFsZXJ0LXdyYXAtaW5mbyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGluZm87XG4gICAgLmFsZXJ0LWljb24ge1xuICAgICAgICBAZXh0ZW5kIC5iZy1pbmZvO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/alert/alert.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/shared/components/alert/alert.component.ts ***!
  \******************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
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

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.type = 'success';
        this.isCloseAlert = false;
        this.isClose = false;
    }
    AlertComponent.prototype.ngOnInit = function () { };
    AlertComponent.prototype.close = function () {
        this.isClose = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AlertComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "isCloseAlert", void 0);
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/admin/shared/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/admin/shared/components/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/card/card.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/shared/components/card/card.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn\">\n  <div class=\"card-header\" *ngIf=\"cardTitle\">\n    <h4 class=\"card-title\">{{cardTitle}}</h4>\n    <div class=\"btn-group\" *ngIf=\"cardTitle&&isCollapse\">\n      <button class=\"collapse-btn\" (click)=\"collapseCard()\">\n        <i class=\"fa fa-minus fa-fw\" [ngClass]=\"{'collapse-on':collapse === 'on','collapse-off':collapse === 'off'}\"></i>\n        <i class=\"fa fa-plus fa-fw\" [ngClass]=\"{'collapse-on':collapse === 'off','collapse-off':collapse === 'on'}\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"content-wrap\" [@collapse]=\"collapse\">\n    <div class=\"card-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/card/card.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/shared/components/card/card.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.card-header {\n  width: 100%;\n  height: 40px;\n  padding: 0 10px;\n  display: flex;\n  justify-content: space-between; }\n\n.card-header .card-title {\n    display: inline-block;\n    margin: 0;\n    line-height: 40px;\n    font-size: 15px;\n    font-weight: 700;\n    text-transform: uppercase; }\n\n.collapse-btn {\n  position: relative;\n  right: 0;\n  top: 5px;\n  background: transparent;\n  outline: none;\n  border: none;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  line-height: 30px;\n  font-size: 16px;\n  color: rgba(38, 37, 60, 0.5);\n  letter-spacing: -16px; }\n\n.collapse-btn:hover {\n    color: #fca400; }\n\n.collapse-off {\n  transition: all 0.5s;\n  -o-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  transform: scale(0);\n  -o-transform: scale(0);\n  -moz-transform: scale(0);\n  -webkit-transform: scale(0);\n  width: 0; }\n\n.collapse-on {\n  transition: all 0.5s;\n  -o-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  transform: scale(1);\n  -o-transform: scale(1);\n  -moz-transform: scale(1);\n  -webkit-transform: scale(1); }\n\n.content-wrap {\n  height: auto;\n  overflow: hidden; }\n\n.card-content {\n  padding: 10px;\n  height: auto;\n  overflow-x: hidden; }\n\n.card-footer {\n  width: 100%;\n  height: auto;\n  min-height: 45px;\n  line-height: 45px;\n  border: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9GOlxccHJvamVjdHNcXG11bmNoaWVzXFxnaXRodWJcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXGNvbG9yLXNjaGVtZXNcXF9kZWZhdWx0LnNjc3MiLCJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvRjpcXHByb2plY3RzXFxtdW5jaGllc1xcZ2l0aHViXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9hZG1pbi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFxjYXJkXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGlCQWhCUyxFQWlCWjs7QUFFRDtFQ01JLDREQUFtQztFQUduQyxvRUFBMkMsRURQOUM7O0FBRUQ7RUNFSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESDlDOztBQUVEO0VDRkksNERBQW1DO0VBR25DLG9FQUEyQyxFREM5Qzs7QUFFRDtFQ05JLDREQUFtQztFQUduQyxvRUFBMkMsRURLOUM7O0FBRUQ7RUNWSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUzlDOztBQUVEO0VDZEksNERBQW1DO0VBR25DLG9FQUEyQyxFRGE5Qzs7QUU1Q0Q7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLCtCQUE4QixFQVNqQzs7QUFkRDtJQU9RLHNCQUFxQjtJQUNyQixVQUFTO0lBQ1Qsa0JBQWlCO0lBQ2pCLGdCQUEwQjtJQUMxQixpQkFBZ0I7SUFDaEIsMEJBQXlCLEVBQzVCOztBQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixTQUFRO0VBQ1Isd0JBQXVCO0VBQ3ZCLGNBQWE7RUFDYixhQUFZO0VEbUJaLFlDbEJvQjtFRG1CcEIsYUNuQjBCO0VEb0IxQixtQkFBa0I7RUFDbEIsa0JDckIwQjtFQUMxQixnQkZ0QlM7RUV1QlQsNkJGYmdCO0VFY2hCLHNCRnhCUyxFRTRCWjs7QUFkRDtJQVlRLGVGZlEsRUVnQlg7O0FBR0w7RURYSSxxQkNZMkI7RURYM0Isd0JDVzJCO0VEVjNCLDBCQ1UyQjtFRFQzQiw2QkNTMkI7RURuQjNCLG9CQ29CMkI7RURuQjNCLHVCQ21CMkI7RURsQjNCLHlCQ2tCMkI7RURqQjNCLDRCQ2lCMkI7RUFDM0IsU0FBUSxFQUNYOztBQUVEO0VEakJJLHFCQ2tCMkI7RURqQjNCLHdCQ2lCMkI7RURoQjNCLDBCQ2dCMkI7RURmM0IsNkJDZTJCO0VEekIzQixvQkMwQjJCO0VEekIzQix1QkN5QjJCO0VEeEIzQix5QkN3QjJCO0VEdkIzQiw0QkN1QjJCLEVBQzlCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWix5Q0ZuRE87RUVvRFAsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9taXhpbic7XG4kZGVmYXVsdC10ZXh0OjE0cHg7XG4kc20tdGV4dDoxMnB4O1xuJGxnLXRleHQ6MTZweDtcbiRib2R5LWJnOiNmZmY7XG4kc2lkZWJhci1iZzojNDY1Mjk0O1xuJHNpZGViYXItZm9udHMtY29sb3I6I2ZmZjtcbiRjYXJkLWJnOiNmZmY7XG4kY2FyZC1ib3JkZXI6I2U0ZTNlMztcbiR3aGl0ZTojZmZmO1xuJGJsYWNrOiMwMDA7XG4kYm9yZGVyLWNvbG9yOnJnYmEoJGJsYWNrLCAuMSk7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiNlNmU2ZTY7XG4kZm9udHMtY29sb3I6IzI2MjUzYztcbiRwcmltYXJ5OiNmY2E0MDA7XG4kc3VjY2VzczojMTZiZTlhO1xuJGRhbmdlcjojZmE1MTY3O1xuJHdhcm5pbmc6I2ZmNzQwMztcbiRpbmZvOiMyY2MzZmY7XG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcbn1cblxuLmJnLWRlZmF1bHQge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIGRhcmtlbigkY2FyZC1iZywgNDAlKSwgZGFya2VuKCRjYXJkLWJnLCAzMCUpKTtcbn1cblxuLmJnLXByaW1hcnkge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRwcmltYXJ5LCAjZmZkMTdjKTtcbn1cblxuLmJnLXN1Y2Nlc3Mge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRzdWNjZXNzLCAjNDJlNjk3KTtcbn1cblxuLmJnLWRhbmdlciB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGRhbmdlciwgI2ZkYTA5Yyk7XG59XG5cbi5iZy13YXJuaW5nIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkd2FybmluZywgI2ZhYzk4MCk7XG59XG5cbi5iZy1pbmZvIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkaW5mbywgIzE1ZjhiZik7XG59IiwiQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIHRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtLi4uKSB7XG4gICAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDIgMztcbiAgICBib3JkZXItaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbiAgICBib3JkZXItaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbn1cblxuQG1peGluIGNlbnRlcigkd2lkdGgsICRoZWlnaHQpIHtcbiAgICB3aWR0aDogJHdpZHRoO1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG59IiwiQGltcG9ydCAnLi4vLi4vdGhlbWUvY29uZic7XG4uY2FyZC1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogJGRlZmF1bHQtdGV4dCsxO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn1cblxuLmNvbGxhcHNlLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIEBpbmNsdWRlIGNlbnRlcigzMHB4LCAzMHB4KTtcbiAgICBmb250LXNpemU6ICRsZy10ZXh0O1xuICAgIGNvbG9yOiByZ2JhKCRmb250cy1jb2xvciwgLjUpO1xuICAgIGxldHRlci1zcGFjaW5nOiAtJGxnLXRleHQ7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICB9XG59XG5cbi5jb2xsYXBzZS1vZmYge1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIC41cyk7XG4gICAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlKDApKTtcbiAgICB3aWR0aDogMDtcbn1cblxuLmNvbGxhcHNlLW9uIHtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuNXMpO1xuICAgIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZSgxKSk7XG59XG5cbi5jb250ZW50LXdyYXAge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/card/card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/shared/components/card/card.component.ts ***!
  \****************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation_collapse_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animation/collapse-animate */ "./src/app/admin/shared/animation/collapse-animate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.isCollapse = false;
        this.collapse = 'on';
    }
    CardComponent.prototype.collapseCard = function () {
        this.collapse === 'on' ? this.collapse = 'off' : this.collapse = 'on';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "cardTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "isCollapse", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/admin/shared/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/admin/shared/components/card/card.component.scss")],
            animations: [_animation_collapse_animate__WEBPACK_IMPORTED_MODULE_1__["collapse"]]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/file-tree/file-tree.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/shared/components/file-tree/file-tree.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tree\">\n  <ul>\n    <li *ngFor=\"let item of model\" [ngClass]=\"{'children-list':isChild}\">\n      <div class=\"trees-items\" (click)=\"toggleItem(item)\">\n        <div class=\"file-ico\">\n          <i class=\"fa fa-file fa-fw ico\" *ngIf=\"!item.children\"></i>\n          <i class=\"fa fa-caret-right fa-fw ico\" *ngIf=\"item.children&&(item.toggle === 'off'||item.toggle === 'init')\"></i>\n          <i class=\"fa fa-folder fa-fw ico\" *ngIf=\"item.children&&(item.toggle === 'off'||item.toggle === 'init')\"></i>\n\n          <i class=\"fa fa-caret-down fa-fw ico\" *ngIf=\"item.children&&item.toggle === 'on'\"></i>\n          <i class=\"fa fa-folder-open fa-fw ico\" *ngIf=\"item.children&&item.toggle === 'on'\"></i>\n        </div>\n        <span>{{item.name}}</span>\n      </div>\n      <div class=\"item-children\" [@collapse]=\"item.toggle\">\n        <file-tree *ngIf=\"item.children\" [model]=\"item.children\" isChild=\"true\"></file-tree>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/file-tree/file-tree.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/admin/shared/components/file-tree/file-tree.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\nli {\n  font-size: 13px;\n  list-style: none; }\n\n.children-list {\n  padding: 0 10px;\n  margin-left: 30px;\n  position: relative;\n  border-left: 1px solid rgba(38, 37, 60, 0.3); }\n\n.children-list::before {\n    display: block;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 15px;\n    height: 20px;\n    border-bottom: 1px solid rgba(38, 37, 60, 0.3); }\n\n.trees-items {\n  padding: 11px 0 0 0; }\n\n.trees-items:hover {\n    cursor: pointer; }\n\n.trees-items:hover .ico {\n      color: #ffb730; }\n\n.file-ico {\n  display: inline-block;\n  width: 60px;\n  text-align: left; }\n\n.file-ico .ico {\n    font-size: 14px;\n    color: #fca400;\n    margin: 0; }\n\n.file-ico .fa-file {\n    margin-left: 21px; }\n\n.item-children {\n  overflow: hidden; }\n\n.check-label {\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvZmlsZS10cmVlL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcY29sb3Itc2NoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvZmlsZS10cmVlL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcbWl4aW4uc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvZmlsZS10cmVlL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFxmaWxlLXRyZWVcXGZpbGUtdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxpQkFoQlMsRUFpQlo7O0FBRUQ7RUNNSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUDlDOztBQUVEO0VDRUksNERBQW1DO0VBR25DLG9FQUEyQyxFREg5Qzs7QUFFRDtFQ0ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURDOUM7O0FBRUQ7RUNOSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESzlDOztBQUVEO0VDVkksNERBQW1DO0VBR25DLG9FQUEyQyxFRFM5Qzs7QUFFRDtFQ2RJLDREQUFtQztFQUduQyxvRUFBMkMsRURhOUM7O0FFNUNEO0VBQ0ksZ0JBQXFCO0VBQ3JCLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQiw2Q0ZHZ0IsRUVRbkI7O0FBZkQ7SUFNUSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sUUFBTztJQUNQLFlBQVc7SUFDWCxhQUFZO0lBQ1osK0NGTlksRUVPZjs7QUFHTDtFQUNJLG9CQUFtQixFQU90Qjs7QUFSRDtJQUdRLGdCQUFlLEVBSWxCOztBQVBMO01BS1ksZUFBNkIsRUFDaEM7O0FBSVQ7RUFDSSxzQkFBcUI7RUFDckIsWUFBVztFQUNYLGlCQUFnQixFQVNuQjs7QUFaRDtJQUtRLGdCRnJDVTtJRXNDVixlRnpCUTtJRTBCUixVQUFTLEVBQ1o7O0FBUkw7SUFVUSxrQkFBaUIsRUFDcEI7O0FBR0w7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zaGFyZWQvY29tcG9uZW50cy9maWxlLXRyZWUvZmlsZS10cmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xuJGRlZmF1bHQtdGV4dDoxNHB4O1xuJHNtLXRleHQ6MTJweDtcbiRsZy10ZXh0OjE2cHg7XG4kYm9keS1iZzojZmZmO1xuJHNpZGViYXItYmc6IzQ2NTI5NDtcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XG4kY2FyZC1iZzojZmZmO1xuJGNhcmQtYm9yZGVyOiNlNGUzZTM7XG4kd2hpdGU6I2ZmZjtcbiRibGFjazojMDAwO1xuJGJvcmRlci1jb2xvcjpyZ2JhKCRibGFjaywgLjEpO1xuJHRhYmxlLWJvcmRlci1jb2xvcjojZTZlNmU2O1xuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XG4kcHJpbWFyeTojZmNhNDAwO1xuJHN1Y2Nlc3M6IzE2YmU5YTtcbiRkYW5nZXI6I2ZhNTE2NztcbiR3YXJuaW5nOiNmZjc0MDM7XG4kaW5mbzojMmNjM2ZmO1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5iZy1kZWZhdWx0IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBkYXJrZW4oJGNhcmQtYmcsIDQwJSksIGRhcmtlbigkY2FyZC1iZywgMzAlKSk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkc3VjY2VzcywgIzQyZTY5Nyk7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRkYW5nZXIsICNmZGEwOWMpO1xufVxuXG4uYmctd2FybmluZyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xufVxuXG4uYmctaW5mbyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGluZm8sICMxNWY4YmYpO1xufSIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xuICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAyIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufSIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lL2NvbmYnO1xubGkge1xuICAgIGZvbnQtc2l6ZTogJHNtLXRleHQrMTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY2hpbGRyZW4tbGlzdCB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoJGZvbnRzLWNvbG9yLCAuMyk7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGZvbnRzLWNvbG9yLCAuMyk7XG4gICAgfVxufVxuXG4udHJlZXMtaXRlbXMge1xuICAgIHBhZGRpbmc6IDExcHggMCAwIDA7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLmljbyB7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkcHJpbWFyeSwgMTAlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpbGUtaWNvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAuaWNvIHtcbiAgICAgICAgZm9udC1zaXplOiAkZGVmYXVsdC10ZXh0O1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmZhLWZpbGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjFweDtcbiAgICB9XG59XG5cbi5pdGVtLWNoaWxkcmVuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2hlY2stbGFiZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/shared/components/file-tree/file-tree.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/shared/components/file-tree/file-tree.component.ts ***!
  \**************************************************************************/
/*! exports provided: FileTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTreeComponent", function() { return FileTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation_collapse_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animation/collapse-animate */ "./src/app/admin/shared/animation/collapse-animate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileTreeComponent = /** @class */ (function () {
    function FileTreeComponent() {
    }
    FileTreeComponent.prototype.ngOnInit = function () {
        this.model.forEach(function (element) {
            element.isSelect ? element.toggle = 'on' : element.toggle = 'init';
        });
    };
    FileTreeComponent.prototype.toggleItem = function (item) {
        item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileTreeComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FileTreeComponent.prototype, "isChild", void 0);
    FileTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'file-tree',
            template: __webpack_require__(/*! ./file-tree.component.html */ "./src/app/admin/shared/components/file-tree/file-tree.component.html"),
            styles: [__webpack_require__(/*! ./file-tree.component.scss */ "./src/app/admin/shared/components/file-tree/file-tree.component.scss")],
            animations: [_animation_collapse_animate__WEBPACK_IMPORTED_MODULE_1__["collapse"]]
        }),
        __metadata("design:paramtypes", [])
    ], FileTreeComponent);
    return FileTreeComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/loading/loading.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/shared/components/loading/loading.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-wrap\" *ngIf=\"loading\">\n  <div class=\"loading-box\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/loading/loading.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/shared/components/loading/loading.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.loading-wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.8); }\n\n.loading-box {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100px;\n  height: 100px; }\n\n.loading-box:before,\n.loading-box:after {\n  position: absolute;\n  display: block;\n  content: '';\n  width: 100px;\n  height: 100px;\n  background: rgba(252, 164, 0, 0.5);\n  border: none;\n  border-radius: 50%;\n  -webkit-animation: loader-10-2 2s infinite ease-in-out;\n  animation: loader-10-2 2s infinite ease-in-out; }\n\n.loading-box:after {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n@-webkit-keyframes loader-10-2 {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes loader-10-2 {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9GOlxccHJvamVjdHNcXG11bmNoaWVzXFxnaXRodWJcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXGNvbG9yLXNjaGVtZXNcXF9kZWZhdWx0LnNjc3MiLCJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmcvRjpcXHByb2plY3RzXFxtdW5jaGllc1xcZ2l0aHViXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9hZG1pbi9zaGFyZWQvY29tcG9uZW50cy9sb2FkaW5nL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFxsb2FkaW5nXFxsb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGlCQWhCUyxFQWlCWjs7QUFFRDtFQ01JLDREQUFtQztFQUduQyxvRUFBMkMsRURQOUM7O0FBRUQ7RUNFSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESDlDOztBQUVEO0VDRkksNERBQW1DO0VBR25DLG9FQUEyQyxFREM5Qzs7QUFFRDtFQ05JLDREQUFtQztFQUduQyxvRUFBMkMsRURLOUM7O0FBRUQ7RUNWSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUzlDOztBQUVEO0VDZEksNERBQW1DO0VBR25DLG9FQUEyQyxFRGE5Qzs7QUU1Q0Q7RUFDSSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxZQUFXO0VBQ1gsYUFBWTtFQUNaLFlBQVc7RUFDWCwrQkZFTyxFRURWOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QseUNBQWdDO1VBQWhDLGlDQUFnQztFQUNoQyxhQUFZO0VBQ1osY0FBYSxFQUNoQjs7QUFFRDs7RUFFSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLFlBQVc7RUFDWCxhQUFZO0VBQ1osY0FBYTtFQUNiLG1DRmJZO0VFY1osYUFBWTtFQUNaLG1CQUFrQjtFQUNsQix1REFBc0Q7RUFDdEQsK0NBQThDLEVBQ2pEOztBQUVEO0VBQ0ksNkJBQTRCO0VBQzVCLHFCQUFvQixFQUN2Qjs7QUFFRDtFQUNJOztJQUVJLDRCQUEyQjtJQUMzQixvQkFBbUIsRUFBQTtFQUV2QjtJQUNJLDRCQUEyQjtJQUMzQixvQkFBbUIsRUFBQSxFQUFBOztBQUkzQjtFQUNJOztJQUVJLDRCQUEyQjtJQUMzQixvQkFBbUIsRUFBQTtFQUV2QjtJQUNJLDRCQUEyQjtJQUMzQixvQkFBbUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xuJGRlZmF1bHQtdGV4dDoxNHB4O1xuJHNtLXRleHQ6MTJweDtcbiRsZy10ZXh0OjE2cHg7XG4kYm9keS1iZzojZmZmO1xuJHNpZGViYXItYmc6IzQ2NTI5NDtcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XG4kY2FyZC1iZzojZmZmO1xuJGNhcmQtYm9yZGVyOiNlNGUzZTM7XG4kd2hpdGU6I2ZmZjtcbiRibGFjazojMDAwO1xuJGJvcmRlci1jb2xvcjpyZ2JhKCRibGFjaywgLjEpO1xuJHRhYmxlLWJvcmRlci1jb2xvcjojZTZlNmU2O1xuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XG4kcHJpbWFyeTojZmNhNDAwO1xuJHN1Y2Nlc3M6IzE2YmU5YTtcbiRkYW5nZXI6I2ZhNTE2NztcbiR3YXJuaW5nOiNmZjc0MDM7XG4kaW5mbzojMmNjM2ZmO1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5iZy1kZWZhdWx0IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBkYXJrZW4oJGNhcmQtYmcsIDQwJSksIGRhcmtlbigkY2FyZC1iZywgMzAlKSk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkc3VjY2VzcywgIzQyZTY5Nyk7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRkYW5nZXIsICNmZGEwOWMpO1xufVxuXG4uYmctd2FybmluZyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xufVxuXG4uYmctaW5mbyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGluZm8sICMxNWY4YmYpO1xufSIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xuICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAyIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufSIsIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9jb25mXCI7XG4ubG9hZGluZy13cmFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGJsYWNrLCAuOCk7XG59XG5cbi5sb2FkaW5nLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmxvYWRpbmctYm94OmJlZm9yZSxcbi5sb2FkaW5nLWJveDphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJHByaW1hcnksIC41KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXItMTAtMiAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IGxvYWRlci0xMC0yIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9hZGluZy1ib3g6YWZ0ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkZXItMTAtMiB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkZXItMTAtMiB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/loading/loading.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/shared/components/loading/loading.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
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

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.loading = false;
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "loading", void 0);
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/admin/shared/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/admin/shared/components/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/notification/notification.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/shared/components/notification/notification.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alerts-wrap\" *ngIf=\"notificationItem.length>0\">\n  <div class=\"{{item.type}} alert-content animated fadeInRight\" *ngFor=\"let item of notificationItem;let i = index\">\n    <div class=\"close-toggle\" (click)=\"closeAlert(i)\">\n      <i class=\"fa fa-close\"></i>\n    </div>\n    <label class=\"alert-title\">\n      <span class=\"fa fa-exclamation alert-ico\" *ngIf=\"item.type==='default'\"></span>\n      <span class=\"fa fa-check-circle alert-ico\" *ngIf=\"item.type==='success'\"></span>\n      <span class=\"fa fa-exclamation-triangle alert-ico\" *ngIf=\"item.type==='warning'\"></span>\n      <span class=\"fa fa-times-circle alert-ico\" *ngIf=\"item.type==='danger'\"></span>\n      <span class=\"fa fa-info-circle alert-ico\" *ngIf=\"item.type==='info'\"></span>\n      {{item.title}}\n    </label>\n    <p class=\"alert-value\">{{item.value}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/notification/notification.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/shared/components/notification/notification.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary, .default {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success, .success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger, .danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning, .warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info, .info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.alerts-wrap {\n  padding: 20px 40px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 320px;\n  z-index: 100; }\n\n.alert-content {\n  padding: 10px;\n  margin-bottom: 10px;\n  position: relative;\n  width: 100%;\n  height: auto;\n  border-radius: 5px; }\n\n.alert-content .close-toggle {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    color: #fff;\n    cursor: pointer;\n    width: 20px;\n    height: 20px;\n    text-align: center;\n    line-height: 20px; }\n\n.alert-content .alert-title {\n    color: #fff;\n    font-size: 16px;\n    width: 85%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.alert-content .alert-ico {\n    margin-right: 10px; }\n\n.alert-content .alert-value {\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcY29sb3Itc2NoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcbWl4aW4uc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFxub3RpZmljYXRpb25cXG5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxpQkFoQlMsRUFpQlo7O0FBRUQ7RUNNSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUDlDOztBQUVEO0VDRUksNERBQW1DO0VBR25DLG9FQUEyQyxFREg5Qzs7QUFFRDtFQ0ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURDOUM7O0FBRUQ7RUNOSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESzlDOztBQUVEO0VDVkksNERBQW1DO0VBR25DLG9FQUEyQyxFRFM5Qzs7QUFFRDtFQ2RJLDREQUFtQztFQUduQyxvRUFBMkMsRURhOUM7O0FFNUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFNBQVE7RUFDUixhQUFZO0VBQ1osYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0IsRUF3QnJCOztBQTlCRDtJQVFRLG1CQUFrQjtJQUNsQixTQUFRO0lBQ1IsV0FBVTtJQUNWLFlGWkc7SUVhSCxnQkFBZTtJRG9CbkIsWUNuQndCO0lEb0J4QixhQ3BCOEI7SURxQjlCLG1CQUFrQjtJQUNsQixrQkN0QjhCLEVBQzdCOztBQWRMO0lBZ0JRLFlGakJHO0lFa0JILGdCRnhCSztJRXlCTCxXQUFVO0lBQ1YsaUJBQWdCO0lBQ2hCLHdCQUF1QjtJQUN2QixvQkFBbUIsRUFDdEI7O0FBdEJMO0lBd0JRLG1CQUFrQixFQUNyQjs7QUF6Qkw7SUEyQlEsZ0NGNUJHO0lFNkJILGdCRnBDSyxFRXFDUiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9taXhpbic7XG4kZGVmYXVsdC10ZXh0OjE0cHg7XG4kc20tdGV4dDoxMnB4O1xuJGxnLXRleHQ6MTZweDtcbiRib2R5LWJnOiNmZmY7XG4kc2lkZWJhci1iZzojNDY1Mjk0O1xuJHNpZGViYXItZm9udHMtY29sb3I6I2ZmZjtcbiRjYXJkLWJnOiNmZmY7XG4kY2FyZC1ib3JkZXI6I2U0ZTNlMztcbiR3aGl0ZTojZmZmO1xuJGJsYWNrOiMwMDA7XG4kYm9yZGVyLWNvbG9yOnJnYmEoJGJsYWNrLCAuMSk7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiNlNmU2ZTY7XG4kZm9udHMtY29sb3I6IzI2MjUzYztcbiRwcmltYXJ5OiNmY2E0MDA7XG4kc3VjY2VzczojMTZiZTlhO1xuJGRhbmdlcjojZmE1MTY3O1xuJHdhcm5pbmc6I2ZmNzQwMztcbiRpbmZvOiMyY2MzZmY7XG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcbn1cblxuLmJnLWRlZmF1bHQge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIGRhcmtlbigkY2FyZC1iZywgNDAlKSwgZGFya2VuKCRjYXJkLWJnLCAzMCUpKTtcbn1cblxuLmJnLXByaW1hcnkge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRwcmltYXJ5LCAjZmZkMTdjKTtcbn1cblxuLmJnLXN1Y2Nlc3Mge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRzdWNjZXNzLCAjNDJlNjk3KTtcbn1cblxuLmJnLWRhbmdlciB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGRhbmdlciwgI2ZkYTA5Yyk7XG59XG5cbi5iZy13YXJuaW5nIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkd2FybmluZywgI2ZhYzk4MCk7XG59XG5cbi5iZy1pbmZvIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkaW5mbywgIzE1ZjhiZik7XG59IiwiQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIHRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtLi4uKSB7XG4gICAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDIgMztcbiAgICBib3JkZXItaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbiAgICBib3JkZXItaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbn1cblxuQG1peGluIGNlbnRlcigkd2lkdGgsICRoZWlnaHQpIHtcbiAgICB3aWR0aDogJHdpZHRoO1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG59IiwiQGltcG9ydCAnLi4vLi4vdGhlbWUvY29uZic7XG4uYWxlcnRzLXdyYXAge1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5hbGVydC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLmNsb3NlLXRvZ2dsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgQGluY2x1ZGUgY2VudGVyKDIwcHgsIDIwcHgpO1xuICAgIH1cbiAgICAuYWxlcnQtdGl0bGUge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICBmb250LXNpemU6ICRsZy10ZXh0O1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gICAgLmFsZXJ0LWljbyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmFsZXJ0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAuOCk7XG4gICAgICAgIGZvbnQtc2l6ZTogJHNtLXRleHQ7XG4gICAgfVxufVxuXG4uZGVmYXVsdCB7XG4gICAgQGV4dGVuZCAuYmctcHJpbWFyeTtcbn1cblxuLnN1Y2Nlc3Mge1xuICAgIEBleHRlbmQgLmJnLXN1Y2Nlc3M7XG59XG5cbi53YXJuaW5nIHtcbiAgICBAZXh0ZW5kIC5iZy13YXJuaW5nO1xufVxuXG4uZGFuZ2VyIHtcbiAgICBAZXh0ZW5kIC5iZy1kYW5nZXI7XG59XG5cbi5pbmZvIHtcbiAgICBAZXh0ZW5kIC5iZy1pbmZvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/shared/components/notification/notification.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/shared/components/notification/notification.component.ts ***!
  \********************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/admin/shared/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(_globalService) {
        this._globalService = _globalService;
        this.notificationItem = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.getNewNotification();
    };
    NotificationComponent.prototype.getNewNotification = function () {
        var _this = this;
        /* this._globalService.notification$.subscribe(notification => {
          this.notificationItem.push(notification)
        }, error => {
          console.log('Error: ' + error);
        });
     */
        this._globalService.data$.subscribe(function (data) {
            if (data.ev === 'notification') {
                _this.notificationItem.push(data.value);
            }
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    NotificationComponent.prototype.closeAlert = function (index) {
        this.notificationItem.splice(index, 1);
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/admin/shared/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/admin/shared/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/pell-editor/pell-editor.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/shared/components/pell-editor/pell-editor.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pell\" class=\"pell\"></div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/pell-editor/pell-editor.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/shared/components/pell-editor/pell-editor.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL3BlbGwtZWRpdG9yL3BlbGwtZWRpdG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/pell-editor/pell-editor.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/shared/components/pell-editor/pell-editor.component.ts ***!
  \******************************************************************************/
/*! exports provided: PellEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PellEditorComponent", function() { return PellEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pell */ "./node_modules/pell/dist/pell.min.js");
/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pell__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PellEditorComponent = /** @class */ (function () {
    function PellEditorComponent() {
        this.defaultContent = '<i>Please enter content...</i>';
        this.content = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PellEditorComponent.prototype.ngOnInit = function () {
        this.editorInit();
    };
    PellEditorComponent.prototype.editorInit = function () {
        var that = this;
        function ensureHTTP(str) {
            return /^https?:\/\//.test(str) && str || "http://" + str;
        }
        var editor = pell__WEBPACK_IMPORTED_MODULE_1___default.a.init({
            element: document.getElementById('pell'),
            defaultParagraphSeparator: 'p',
            styleWithCSS: true,
            onChange: function (html) {
                that.content.emit(html);
            }
        });
        /* content init */
        editor.content.innerHTML = this.defaultContent;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PellEditorComponent.prototype, "defaultContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PellEditorComponent.prototype, "content", void 0);
    PellEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pell-editor',
            template: __webpack_require__(/*! ./pell-editor.component.html */ "./src/app/admin/shared/components/pell-editor/pell-editor.component.html"),
            styles: [__webpack_require__(/*! ./pell-editor.component.scss */ "./src/app/admin/shared/components/pell-editor/pell-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PellEditorComponent);
    return PellEditorComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/profile/profile.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/shared/components/profile/profile.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"profile-wrap animated fadeIn\">\n    <div class=\"info-wrap\">\n      <div class=\"avatar-wrap\">\n        <img src=\"{{avatarImgSrc}}\" alt=\"avatar\">\n      </div>\n      <span class=\"user-name\">{{userName}}</span>\n      <span class=\"user-post\">{{userPost}}</span>\n      <span class=\"map-location\">\n        <i class=\"fa fa-map-marker\"></i>\n        <span>Shen Zhen</span>\n      </span>\n    </div>\n    <div class=\"profile-head\">\n      <img src=\"{{avatarImgSrc}}\" alt=\"profile-head-bg\" class=\"profile-head-bg\">\n    </div>\n    <div class=\"profile-foot\">\n      <h4>Skills</h4>\n      <div class=\"skills-wrap\">\n        <a href=\"#\" class=\"skills-tag\">interface</a>\n        <a href=\"#\" class=\"skills-tag\">interface</a>\n        <a href=\"#\" class=\"skills-tag\">interface</a>\n        <a href=\"#\" class=\"skills-tag\">interface</a>\n        <a href=\"#\" class=\"skills-tag\">interface</a>\n        <a href=\"#\" class=\"skills-tag\">interface</a>\n        <a href=\"#\" class=\"skills-tag\">interface</a>\n      </div>\n      <h4>Social</h4>\n      <ul class=\"contact-way-item\">\n        <li class=\"contact-way-list\">\n          <a href=\"#\" class=\"info-icon fa fa-wechat\"></a>\n        </li>\n        <li class=\"contact-way-list\">\n          <a href=\"#\" class=\"info-icon fa fa-weibo\"></a>\n        </li>\n        <li class=\"contact-way-list\">\n          <a href=\"#\" class=\"info-icon fa fa-facebook\"></a>\n        </li>\n        <li class=\"contact-way-list\">\n          <a href=\"#\" class=\"info-icon fa fa-github\"></a>\n        </li>\n        <li class=\"contact-way-list\">\n          <a href=\"#\" class=\"info-icon fa fa-envelope\"></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/profile/profile.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/shared/components/profile/profile.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.profile-wrap {\n  padding: 0; }\n\n.profile-head {\n  height: 200px;\n  overflow: hidden; }\n\n.profile-head .profile-head-bg {\n    width: 100%;\n    height: auto;\n    filter: blur(20px);\n    -moz-filter: blur(20px);\n    -webkit-filter: blur(20px); }\n\n.info-wrap {\n  position: absolute;\n  top: 5%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  text-align: center;\n  z-index: 10; }\n\n.info-wrap .avatar-wrap {\n    margin: 0 auto;\n    border: 2px solid #fff;\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    overflow: hidden; }\n\n.info-wrap .avatar-wrap img {\n      width: 100%;\n      height: 100%; }\n\n.info-wrap .user-name,\n  .info-wrap .user-post {\n    display: block;\n    color: #fff; }\n\n.info-wrap .user-name {\n    font-size: 1.6em;\n    font-weight: normal; }\n\n.info-wrap .map-location {\n    color: #fff; }\n\n.info-wrap .map-location i {\n      font-size: 1.3em;\n      color: #fca400; }\n\n.profile-foot {\n  padding: 5px 10px 0 10px;\n  text-align: center; }\n\n.profile-foot h4 {\n    text-transform: uppercase;\n    line-height: 30px; }\n\n.skills-tag {\n  display: inline-block;\n  padding: .2em .4em;\n  margin: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  background: transparent;\n  text-decoration: none;\n  color: rgba(38, 37, 60, 0.7);\n  transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -webkit-transition: all 0.4s; }\n\n.skills-tag:hover {\n    border: 1px solid #fca400;\n    background: #fca400;\n    color: #fff; }\n\n.contact-way-item {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  width: 100%;\n  height: auto; }\n\n.contact-way-list {\n  list-style: none; }\n\n.contact-way-list a.info-icon {\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    line-height: 50px;\n    font-size: 22px;\n    color: rgba(38, 37, 60, 0.5);\n    transition: all 0.4s;\n    -o-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    -webkit-transition: all 0.4s; }\n\n.contact-way-list a.info-icon:hover {\n      background: #fca400;\n      color: #fff;\n      cursor: pointer;\n      text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvcHJvZmlsZS9GOlxccHJvamVjdHNcXG11bmNoaWVzXFxnaXRodWJcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXGNvbG9yLXNjaGVtZXNcXF9kZWZhdWx0LnNjc3MiLCJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL3Byb2ZpbGUvRjpcXHByb2plY3RzXFxtdW5jaGllc1xcZ2l0aHViXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9hZG1pbi9zaGFyZWQvY29tcG9uZW50cy9wcm9maWxlL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGlCQWhCUyxFQWlCWjs7QUFFRDtFQ01JLDREQUFtQztFQUduQyxvRUFBMkMsRURQOUM7O0FBRUQ7RUNFSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESDlDOztBQUVEO0VDRkksNERBQW1DO0VBR25DLG9FQUEyQyxFREM5Qzs7QUFFRDtFQ05JLDREQUFtQztFQUduQyxvRUFBMkMsRURLOUM7O0FBRUQ7RUNWSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUzlDOztBQUVEO0VDZEksNERBQW1DO0VBR25DLG9FQUEyQyxFRGE5Qzs7QUU1Q0Q7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IsaUJBQWdCLEVBUW5COztBQVZEO0lBSVEsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsd0JBQXVCO0lBQ3ZCLDJCQUEwQixFQUM3Qjs7QUFHTDtFQUNJLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsVUFBUztFQUNULG9DQUEyQjtVQUEzQiw0QkFBMkI7RUFDM0IsbUJBQWtCO0VBQ2xCLFlBQVcsRUE2QmQ7O0FBbkNEO0lBUVEsZUFBYztJQUNkLHVCRmpCRztJRWtCSCxZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixpQkFBZ0IsRUFLbkI7O0FBbEJMO01BZVksWUFBVztNQUNYLGFBQVksRUFDZjs7QUFqQlQ7O0lBcUJRLGVBQWM7SUFDZCxZRjlCRyxFRStCTjs7QUF2Qkw7SUF5QlEsaUJBQWdCO0lBQ2hCLG9CQUFtQixFQUN0Qjs7QUEzQkw7SUE2QlEsWUZyQ0csRUUwQ047O0FBbENMO01BK0JZLGlCQUFnQjtNQUNoQixlRm5DSSxFRW9DUDs7QUFJVDtFQUNJLHlCQUF1QjtFQUN2QixtQkFBa0IsRUFLckI7O0FBUEQ7SUFJUSwwQkFBeUI7SUFDekIsa0JBQWlCLEVBQ3BCOztBQUdMO0VBQ0ksc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gscUNGekRPO0VFMERQLG1CQUFrQjtFQUNsQix3QkFBdUI7RUFDdkIsc0JBQXFCO0VBQ3JCLDZCRjFEZ0I7RUNTaEIscUJDa0QyQjtFRGpEM0Isd0JDaUQyQjtFRGhEM0IsMEJDZ0QyQjtFRC9DM0IsNkJDK0MyQixFQU05Qjs7QUFmRDtJQVdRLDBCRjVEUTtJRTZEUixvQkY3RFE7SUU4RFIsWUZuRUcsRUVvRU47O0FBR0w7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQiw4QkFBNkI7RUFDN0IsWUFBVztFQUNYLGFBQVksRUFDZjs7QUFFRDtFQUNJLGlCQUFnQixFQWlCbkI7O0FBbEJEO0lBR1Esc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLDZCRnJGWTtJQ1NoQixxQkM2RStCO0lENUUvQix3QkM0RStCO0lEM0UvQiwwQkMyRStCO0lEMUUvQiw2QkMwRStCLEVBTzlCOztBQWpCTDtNQVlZLG9CRnZGSTtNRXdGSixZRjdGRDtNRThGQyxnQkFBZTtNQUNmLHNCQUFxQixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL21peGluJztcbiRkZWZhdWx0LXRleHQ6MTRweDtcbiRzbS10ZXh0OjEycHg7XG4kbGctdGV4dDoxNnB4O1xuJGJvZHktYmc6I2ZmZjtcbiRzaWRlYmFyLWJnOiM0NjUyOTQ7XG4kc2lkZWJhci1mb250cy1jb2xvcjojZmZmO1xuJGNhcmQtYmc6I2ZmZjtcbiRjYXJkLWJvcmRlcjojZTRlM2UzO1xuJHdoaXRlOiNmZmY7XG4kYmxhY2s6IzAwMDtcbiRib3JkZXItY29sb3I6cmdiYSgkYmxhY2ssIC4xKTtcbiR0YWJsZS1ib3JkZXItY29sb3I6I2U2ZTZlNjtcbiRmb250cy1jb2xvcjojMjYyNTNjO1xuJHByaW1hcnk6I2ZjYTQwMDtcbiRzdWNjZXNzOiMxNmJlOWE7XG4kZGFuZ2VyOiNmYTUxNjc7XG4kd2FybmluZzojZmY3NDAzO1xuJGluZm86IzJjYzNmZjtcbmJvZHkge1xuICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xufVxuXG4uYmctZGVmYXVsdCB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgZGFya2VuKCRjYXJkLWJnLCA0MCUpLCBkYXJrZW4oJGNhcmQtYmcsIDMwJSkpO1xufVxuXG4uYmctcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHByaW1hcnksICNmZmQxN2MpO1xufVxuXG4uYmctc3VjY2VzcyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHN1Y2Nlc3MsICM0MmU2OTcpO1xufVxuXG4uYmctZGFuZ2VyIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkZGFuZ2VyLCAjZmRhMDljKTtcbn1cblxuLmJnLXdhcm5pbmcge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICR3YXJuaW5nLCAjZmFjOTgwKTtcbn1cblxuLmJnLWluZm8ge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRpbmZvLCAjMTVmOGJmKTtcbn0iLCJAbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0uLi4pIHtcbiAgICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMiAzO1xuICAgIGJvcmRlci1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xuICAgIGJvcmRlci1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xufVxuXG5AbWl4aW4gY2VudGVyKCR3aWR0aCwgJGhlaWdodCkge1xuICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogJGhlaWdodDtcbn0iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9jb25mJztcbi5wcm9maWxlLXdyYXAge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9maWxlLWhlYWQge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAucHJvZmlsZS1oZWFkLWJnIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZmlsdGVyOiBibHVyKDIwcHgpO1xuICAgICAgICAtbW96LWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gICAgfVxufVxuXG4uaW5mby13cmFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcbiAgICAuYXZhdGFyLXdyYXAge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHdoaXRlO1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudXNlci1uYW1lLFxuICAgIC51c2VyLXBvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gICAgLnVzZXItbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIC5tYXAtbG9jYXRpb24ge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wcm9maWxlLWZvb3Qge1xuICAgIHBhZGRpbmc6NXB4IDEwcHggMCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoNCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIH1cbn1cblxuLnNraWxscy10YWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAuMmVtIC40ZW07XG4gICAgbWFyZ2luOiAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiByZ2JhKCRmb250cy1jb2xvciwgLjcpO1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIC40cyk7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG59XG5cbi5jb250YWN0LXdheS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29udGFjdC13YXktbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBhLmluZm8taWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBjb2xvcjogcmdiYSgkZm9udHMtY29sb3IsIC41KTtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjRzKTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/profile/profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/shared/components/profile/profile.component.ts ***!
  \**********************************************************************/
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
        this.avatarImgSrc = 'assets/images/avatar.png';
        this.userName = 'Folisise Chosielie';
        this.userPost = 'Musician, Player';
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/admin/shared/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/admin/shared/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/progress-bar/progress-bar.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/shared/components/progress-bar/progress-bar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"size === 'sm'\" class=\"progress-sm\">\n  <span class=\"progress-percent\" *ngIf=\"percent&&percentShow\" [ngStyle]=\"{'left':percent-3 + '%'}\">{{percent}}%</span>\n  <div class=\"progress\">\n    <div [class]=\"themeColor\" [ngStyle]=\"{'width':percent + '%'}\">\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"size === 'lg'\" class=\"progress-lg\">\n  <div class=\"progress\">\n    <div [class]=\"themeColor\" [ngStyle]=\"{'width':percent + '%'}\">\n      <span class=\"progress-percent\" *ngIf=\"percent&&percentShow\">{{percent}}%</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/progress-bar/progress-bar.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/shared/components/progress-bar/progress-bar.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary, .progress .progress-bar, .progress .progress-bar-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success, .progress .progress-bar-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger, .progress .progress-bar-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning, .progress .progress-bar-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info, .progress .progress-bar-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.progress {\n  display: block;\n  padding: 0;\n  margin: 5px 0;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 2px;\n  background: rgba(0, 0, 0, 0.1); }\n\n.progress .progress-bar {\n    transition: all 0.4s;\n    -o-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    -webkit-transition: all 0.4s;\n    border-radius: 2px; }\n\n.progress-sm .progress {\n  height: 4px; }\n\n.progress-sm .progress .progress-bar {\n    height: 4px; }\n\n.progress-sm .progress-percent {\n  padding: 0 .2em;\n  display: inline-block;\n  position: relative;\n  width: auto;\n  height: auto;\n  background: #26253c;\n  border-radius: 2px;\n  font-size: 12px;\n  color: #fff;\n  transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -webkit-transition: all 0.4s; }\n\n.progress-sm .progress-percent:after {\n    display: block;\n    content: '';\n    position: absolute;\n    bottom: -4px;\n    left: 45%;\n    width: 4px;\n    height: 4px;\n    background: #26253c;\n    -webkit-transform: rotate(45deg) translate(-50%, 0);\n            transform: rotate(45deg) translate(-50%, 0); }\n\n.progress-lg .progress {\n  height: 20px; }\n\n.progress-lg .progress .progress-bar {\n    height: 20px; }\n\n.progress-lg .progress-percent {\n  font-weight: 700;\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.4); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcY29sb3Itc2NoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcbWl4aW4uc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFxwcm9ncmVzcy1iYXJcXHByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxpQkFoQlMsRUFpQlo7O0FBRUQ7RUNNSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUDlDOztBQUVEO0VDRUksNERBQW1DO0VBR25DLG9FQUEyQyxFREg5Qzs7QUFFRDtFQ0ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURDOUM7O0FBRUQ7RUNOSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESzlDOztBQUVEO0VDVkksNERBQW1DO0VBR25DLG9FQUEyQyxFRFM5Qzs7QUFFRDtFQ2RJLDREQUFtQztFQUduQyxvRUFBMkMsRURhOUM7O0FFNUNEO0VBQ0ksZUFBYztFQUNkLFdBQVU7RUFDVixjQUFhO0VBQ2IsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsK0JGRU8sRUVtQlY7O0FBNUJEO0lEcUJJLHFCQ1grQjtJRFkvQix3QkNaK0I7SURhL0IsMEJDYitCO0lEYy9CLDZCQ2QrQjtJQUMzQixtQkFBa0IsRUFDckI7O0FBa0JMO0VBRVEsWUFBVyxFQUlkOztBQU5MO0lBSVksWUFBVyxFQUNkOztBQUxUO0VBUVEsZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JGL0JZO0VFZ0NaLG1CQUFrQjtFQUNsQixnQkY1Q0s7RUU2Q0wsWUZ4Q0s7RUNlVCxxQkMwQitCO0VEekIvQix3QkN5QitCO0VEeEIvQiwwQkN3QitCO0VEdkIvQiw2QkN1QitCLEVBWTlCOztBQTdCTDtJQW1CWSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osVUFBUztJQUNULFdBQVU7SUFDVixZQUFXO0lBQ1gsb0JGNUNRO0lFNkNSLG9EQUEyQztZQUEzQyw0Q0FBMkMsRUFDOUM7O0FBSVQ7RUFFUSxhQUFZLEVBSWY7O0FBTkw7SUFJWSxhQUFZLEVBQ2Y7O0FBTFQ7RUFRUSxpQkFBZ0I7RUFDaEIsOENGOURHLEVFK0ROIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL21peGluJztcbiRkZWZhdWx0LXRleHQ6MTRweDtcbiRzbS10ZXh0OjEycHg7XG4kbGctdGV4dDoxNnB4O1xuJGJvZHktYmc6I2ZmZjtcbiRzaWRlYmFyLWJnOiM0NjUyOTQ7XG4kc2lkZWJhci1mb250cy1jb2xvcjojZmZmO1xuJGNhcmQtYmc6I2ZmZjtcbiRjYXJkLWJvcmRlcjojZTRlM2UzO1xuJHdoaXRlOiNmZmY7XG4kYmxhY2s6IzAwMDtcbiRib3JkZXItY29sb3I6cmdiYSgkYmxhY2ssIC4xKTtcbiR0YWJsZS1ib3JkZXItY29sb3I6I2U2ZTZlNjtcbiRmb250cy1jb2xvcjojMjYyNTNjO1xuJHByaW1hcnk6I2ZjYTQwMDtcbiRzdWNjZXNzOiMxNmJlOWE7XG4kZGFuZ2VyOiNmYTUxNjc7XG4kd2FybmluZzojZmY3NDAzO1xuJGluZm86IzJjYzNmZjtcbmJvZHkge1xuICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xufVxuXG4uYmctZGVmYXVsdCB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgZGFya2VuKCRjYXJkLWJnLCA0MCUpLCBkYXJrZW4oJGNhcmQtYmcsIDMwJSkpO1xufVxuXG4uYmctcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHByaW1hcnksICNmZmQxN2MpO1xufVxuXG4uYmctc3VjY2VzcyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHN1Y2Nlc3MsICM0MmU2OTcpO1xufVxuXG4uYmctZGFuZ2VyIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkZGFuZ2VyLCAjZmRhMDljKTtcbn1cblxuLmJnLXdhcm5pbmcge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICR3YXJuaW5nLCAjZmFjOTgwKTtcbn1cblxuLmJnLWluZm8ge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRpbmZvLCAjMTVmOGJmKTtcbn0iLCJAbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0uLi4pIHtcbiAgICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMiAzO1xuICAgIGJvcmRlci1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xuICAgIGJvcmRlci1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xufVxuXG5AbWl4aW4gY2VudGVyKCR3aWR0aCwgJGhlaWdodCkge1xuICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogJGhlaWdodDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvY29uZlwiO1xuLnByb2dyZXNzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvcjtcbiAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgQGV4dGVuZCAuYmctcHJpbWFyeTtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjRzKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cbiAgICAucHJvZ3Jlc3MtYmFyLXByaW1hcnkge1xuICAgICAgICBAZXh0ZW5kIC5iZy1wcmltYXJ5O1xuICAgIH1cbiAgICAucHJvZ3Jlc3MtYmFyLXN1Y2Nlc3Mge1xuICAgICAgICBAZXh0ZW5kIC5iZy1zdWNjZXNzO1xuICAgIH1cbiAgICAucHJvZ3Jlc3MtYmFyLXdhcm5pbmcge1xuICAgICAgICBAZXh0ZW5kIC5iZy13YXJuaW5nO1xuICAgIH1cbiAgICAucHJvZ3Jlc3MtYmFyLWRhbmdlciB7XG4gICAgICAgIEBleHRlbmQgLmJnLWRhbmdlcjtcbiAgICB9XG4gICAgLnByb2dyZXNzLWJhci1pbmZvIHtcbiAgICAgICAgQGV4dGVuZCAuYmctaW5mbztcbiAgICB9XG59XG5cbi5wcm9ncmVzcy1zbSB7XG4gICAgLnByb2dyZXNzIHtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2dyZXNzLXBlcmNlbnQge1xuICAgICAgICBwYWRkaW5nOiAwIC4yZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZm9udHMtY29sb3I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgZm9udC1zaXplOiAkc20tdGV4dDtcbiAgICAgICAgY29sb3I6ICRjYXJkLWJnO1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuNHMpO1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IC00cHg7XG4gICAgICAgICAgICBsZWZ0OiA0NSU7XG4gICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZm9udHMtY29sb3I7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvZ3Jlc3MtbGcge1xuICAgIC5wcm9ncmVzcyB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2dyZXNzLXBlcmNlbnQge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKCRibGFjaywgLjQpO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/progress-bar/progress-bar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/shared/components/progress-bar/progress-bar.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
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

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.theme = 'primary';
        this.size = 'sm';
        this.percentShow = true;
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.themeColor = "progress-bar progress-bar-" + this.theme;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "percent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressBarComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressBarComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProgressBarComponent.prototype, "percentShow", void 0);
    ProgressBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./src/app/admin/shared/components/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/admin/shared/components/progress-bar/progress-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/switch/switch.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/shared/components/switch/switch.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"multiple !== undefined\">\n  <input type=\"checkbox\" class=\"switch\" id=\"{{switchId}}\" name=\"{{switchName}}\" [checked]=\"checked !== undefined\">\n  <label [class]=\"theme\" for=\"{{switchId}}\"></label>\n</ng-container>\n\n<ng-container *ngIf=\"multiple === undefined\">\n  <input type=\"radio\" class=\"switch\" id=\"{{switchId}}\" name=\"{{switchName}}\" [checked]=\"checked\">\n  <label [class]=\"theme\" for=\"{{switchId}}\"></label>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/switch/switch.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/shared/components/switch/switch.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.switch {\n  display: none; }\n\n.switch-wrap {\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n  border: 2px solid rgba(0, 0, 0, 0.05);\n  border-radius: 20px !important;\n  background: rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s;\n  -o-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -webkit-transition: all 0.3s; }\n\n.switch-wrap:after {\n  display: block;\n  content: '';\n  width: 18px;\n  height: 18px;\n  border-radius: 50% !important;\n  background: #fff;\n  position: relative;\n  top: 0;\n  left: 0;\n  transition: all 0.4s cubic-bezier(0.76, 0.43, 0.25, 1.64);\n  -o-transition: all 0.4s cubic-bezier(0.76, 0.43, 0.25, 1.64);\n  -moz-transition: all 0.4s cubic-bezier(0.76, 0.43, 0.25, 1.64);\n  -webkit-transition: all 0.4s cubic-bezier(0.76, 0.43, 0.25, 1.64);\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);\n  -o-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);\n  -moz-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15); }\n\n.switch:checked + .switch-wrap {\n  background: #fca400; }\n\n.switch:checked + .switch-wrap:after {\n  left: 16px; }\n\n.switch:checked + .switch-wrap-default {\n  background: #fca400; }\n\n.switch:checked + .switch-wrap-success {\n  background: #16be9a; }\n\n.switch:checked + .switch-wrap-warning {\n  background: #ff7403; }\n\n.switch:checked + .switch-wrap-danger {\n  background: #fa5167; }\n\n.switch:checked + .switch-wrap-info {\n  background: #2cc3ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvc3dpdGNoL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcY29sb3Itc2NoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvc3dpdGNoL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcbWl4aW4uc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvc3dpdGNoL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFxzd2l0Y2hcXHN3aXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxpQkFoQlMsRUFpQlo7O0FBRUQ7RUNNSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUDlDOztBQUVEO0VDRUksNERBQW1DO0VBR25DLG9FQUEyQyxFREg5Qzs7QUFFRDtFQ0ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURDOUM7O0FBRUQ7RUNOSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESzlDOztBQUVEO0VDVkksNERBQW1DO0VBR25DLG9FQUEyQyxFRFM5Qzs7QUFFRDtFQ2RJLDREQUFtQztFQUduQyxvRUFBMkMsRURhOUM7O0FFNUNEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsYUFBWTtFQUNaLHNDRkNPO0VFQVAsK0JBQThCO0VBQzlCLCtCRkRPO0VFRVAsZ0JBQWU7RUFDZixtQkFBa0I7RURTbEIscUJDUjJCO0VEUzNCLHdCQ1QyQjtFRFUzQiwwQkNWMkI7RURXM0IsNkJDWDJCLEVBQzlCOztBQUVEO0VBQ0ksZUFBYztFQUNkLFlBQVc7RUFDWCxZQUFXO0VBQ1gsYUFBWTtFQUNaLDhCQUE2QjtFQUM3QixpQkZkTztFRWVQLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFREpQLDBEQ0s2RDtFREo3RCw2RENJNkQ7RURIN0QsK0RDRzZEO0VERjdELGtFQ0U2RDtFRDFCN0QsNkNEU087RUNSUCxnRERRTztFQ1BQLGtERE9PO0VDTlAscURETU8sRUVtQlY7O0FBRUQ7RUFDSSxvQkZsQlksRUVtQmY7O0FBRUQ7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxvQkYxQlksRUUyQmY7O0FBRUQ7RUFDSSxvQkY3QlksRUU4QmY7O0FBRUQ7RUFDSSxvQkYvQlksRUVnQ2Y7O0FBRUQ7RUFDSSxvQkZwQ1csRUVxQ2Q7O0FBRUQ7RUFDSSxvQkZ0Q1MsRUV1Q1oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zaGFyZWQvY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xuJGRlZmF1bHQtdGV4dDoxNHB4O1xuJHNtLXRleHQ6MTJweDtcbiRsZy10ZXh0OjE2cHg7XG4kYm9keS1iZzojZmZmO1xuJHNpZGViYXItYmc6IzQ2NTI5NDtcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XG4kY2FyZC1iZzojZmZmO1xuJGNhcmQtYm9yZGVyOiNlNGUzZTM7XG4kd2hpdGU6I2ZmZjtcbiRibGFjazojMDAwO1xuJGJvcmRlci1jb2xvcjpyZ2JhKCRibGFjaywgLjEpO1xuJHRhYmxlLWJvcmRlci1jb2xvcjojZTZlNmU2O1xuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XG4kcHJpbWFyeTojZmNhNDAwO1xuJHN1Y2Nlc3M6IzE2YmU5YTtcbiRkYW5nZXI6I2ZhNTE2NztcbiR3YXJuaW5nOiNmZjc0MDM7XG4kaW5mbzojMmNjM2ZmO1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5iZy1kZWZhdWx0IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBkYXJrZW4oJGNhcmQtYmcsIDQwJSksIGRhcmtlbigkY2FyZC1iZywgMzAlKSk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkc3VjY2VzcywgIzQyZTY5Nyk7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRkYW5nZXIsICNmZGEwOWMpO1xufVxuXG4uYmctd2FybmluZyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xufVxuXG4uYmctaW5mbyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGluZm8sICMxNWY4YmYpO1xufSIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xuICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAyIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufSIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lL2NvbmYnO1xuLnN3aXRjaCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN3aXRjaC13cmFwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoJGJsYWNrLCAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRibGFjaywgLjEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjNzKTtcbn1cblxuLnN3aXRjaC13cmFwOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuNHMgY3ViaWMtYmV6aWVyKC43NiwgLjQzLCAuMjUsIDEuNjQpKTtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KDJweCAycHggMTBweCByZ2JhKCRibGFjaywgLjE1KSk7XG59XG5cbi5zd2l0Y2g6Y2hlY2tlZCsuc3dpdGNoLXdyYXAge1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xufVxuXG4uc3dpdGNoOmNoZWNrZWQrLnN3aXRjaC13cmFwOmFmdGVyIHtcbiAgICBsZWZ0OiAxNnB4O1xufVxuXG4uc3dpdGNoOmNoZWNrZWQrLnN3aXRjaC13cmFwLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xufVxuXG4uc3dpdGNoOmNoZWNrZWQrLnN3aXRjaC13cmFwLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQ6ICRzdWNjZXNzO1xufVxuXG4uc3dpdGNoOmNoZWNrZWQrLnN3aXRjaC13cmFwLXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQ6ICR3YXJuaW5nO1xufVxuXG4uc3dpdGNoOmNoZWNrZWQrLnN3aXRjaC13cmFwLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZDogJGRhbmdlcjtcbn1cblxuLnN3aXRjaDpjaGVja2VkKy5zd2l0Y2gtd3JhcC1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiAkaW5mbztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/switch/switch.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/shared/components/switch/switch.component.ts ***!
  \********************************************************************/
/*! exports provided: SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
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

var SwitchComponent = /** @class */ (function () {
    function SwitchComponent() {
        this.theme = 'default';
        this.checked = false;
    }
    SwitchComponent.prototype.ngOnInit = function () {
        this.theme = "switch-wrap switch-wrap-" + this.theme;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "switchName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "switchId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwitchComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SwitchComponent.prototype, "checked", void 0);
    SwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'switch',
            template: __webpack_require__(/*! ./switch.component.html */ "./src/app/admin/shared/components/switch/switch.component.html"),
            styles: [__webpack_require__(/*! ./switch.component.scss */ "./src/app/admin/shared/components/switch/switch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SwitchComponent);
    return SwitchComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/tabset/tab-content/tab-content.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/shared/components/tabset/tab-content/tab-content.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs-content\" [ngClass]=\"{'is-content-active':active}\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/admin/shared/components/tabset/tab-content/tab-content.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/shared/components/tabset/tab-content/tab-content.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.tabs-content {\n  display: none; }\n\n.is-content-active {\n  display: block;\n  width: 100%;\n  height: auto;\n  -webkit-animation: tabContentfadeIn 1.2s both;\n          animation: tabContentfadeIn 1.2s both; }\n\n@-webkit-keyframes tabContentfadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes tabContentfadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvdGFic2V0L3RhYi1jb250ZW50L0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcY29sb3Itc2NoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvdGFic2V0L3RhYi1jb250ZW50L0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcbWl4aW4uc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvdGFic2V0L3RhYi1jb250ZW50L0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFx0YWJzZXRcXHRhYi1jb250ZW50XFx0YWItY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxpQkFoQlMsRUFpQlo7O0FBRUQ7RUNNSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUDlDOztBQUVEO0VDRUksNERBQW1DO0VBR25DLG9FQUEyQyxFREg5Qzs7QUFFRDtFQ0ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURDOUM7O0FBRUQ7RUNOSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESzlDOztBQUVEO0VDVkksNERBQW1DO0VBR25DLG9FQUEyQyxFRFM5Qzs7QUFFRDtFQ2RJLDREQUFtQztFQUduQyxvRUFBMkMsRURhOUM7O0FFNUNEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxZQUFXO0VBQ1gsYUFBWTtFQUNaLDhDQUFxQztVQUFyQyxzQ0FBcUMsRUFDeEM7O0FBRUQ7RUFDSTtJQUNJLFdBQVUsRUFBQTtFQUVkO0lBQ0ksV0FBVSxFQUFBLEVBQUE7O0FBTGxCO0VBQ0k7SUFDSSxXQUFVLEVBQUE7RUFFZDtJQUNJLFdBQVUsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvdGFic2V0L3RhYi1jb250ZW50L3RhYi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xuJGRlZmF1bHQtdGV4dDoxNHB4O1xuJHNtLXRleHQ6MTJweDtcbiRsZy10ZXh0OjE2cHg7XG4kYm9keS1iZzojZmZmO1xuJHNpZGViYXItYmc6IzQ2NTI5NDtcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XG4kY2FyZC1iZzojZmZmO1xuJGNhcmQtYm9yZGVyOiNlNGUzZTM7XG4kd2hpdGU6I2ZmZjtcbiRibGFjazojMDAwO1xuJGJvcmRlci1jb2xvcjpyZ2JhKCRibGFjaywgLjEpO1xuJHRhYmxlLWJvcmRlci1jb2xvcjojZTZlNmU2O1xuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XG4kcHJpbWFyeTojZmNhNDAwO1xuJHN1Y2Nlc3M6IzE2YmU5YTtcbiRkYW5nZXI6I2ZhNTE2NztcbiR3YXJuaW5nOiNmZjc0MDM7XG4kaW5mbzojMmNjM2ZmO1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5iZy1kZWZhdWx0IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBkYXJrZW4oJGNhcmQtYmcsIDQwJSksIGRhcmtlbigkY2FyZC1iZywgMzAlKSk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkc3VjY2VzcywgIzQyZTY5Nyk7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRkYW5nZXIsICNmZGEwOWMpO1xufVxuXG4uYmctd2FybmluZyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xufVxuXG4uYmctaW5mbyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGluZm8sICMxNWY4YmYpO1xufSIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xuICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAyIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2NvbmYnO1xuLnRhYnMtY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlzLWNvbnRlbnQtYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYW5pbWF0aW9uOiB0YWJDb250ZW50ZmFkZUluIDEuMnMgYm90aDtcbn1cblxuQGtleWZyYW1lcyB0YWJDb250ZW50ZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/tabset/tab-content/tab-content.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/shared/components/tabset/tab-content/tab-content.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TabContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContentComponent", function() { return TabContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/global.service */ "./src/app/admin/shared/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabContentComponent = /** @class */ (function () {
    function TabContentComponent(_globalService) {
        this._globalService = _globalService;
        this.tabTitle = 'tab title';
        this.active = false;
        this.disabled = false;
    }
    TabContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._tabsTitle();
        /* this._globalService.tabsOrder$.subscribe(tabsOrder => {
          if (this.for === tabsOrder[0]) {
            this.active = false;
            if (this.tabTitle === tabsOrder[1]) {
              this.active = true;
            }
          }
        }, error => {
          console.log('Error: ' + error);
        }); */
        this._globalService.data$.subscribe(function (data) {
            if (data.ev === 'tabsOrder' && _this.for === data.value[0]) {
                _this.active = false;
                if (_this.tabTitle === data.value[1]) {
                    _this.active = true;
                }
            }
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    TabContentComponent.prototype._tabsTitle = function () {
        this.tabsMenu = {
            for: this.for,
            text: this.tabTitle,
            active: this.active,
            disabled: this.disabled
        };
        //this._globalService._tabsMenu(this.tabsMenu);
        this._globalService.dataBusChanged('tabsMenu', this.tabsMenu);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabContentComponent.prototype, "for", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabContentComponent.prototype, "tabTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TabContentComponent.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TabContentComponent.prototype, "disabled", void 0);
    TabContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tab-content',
            template: __webpack_require__(/*! ./tab-content.component.html */ "./src/app/admin/shared/components/tabset/tab-content/tab-content.component.html"),
            styles: [__webpack_require__(/*! ./tab-content.component.scss */ "./src/app/admin/shared/components/tabset/tab-content/tab-content.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], TabContentComponent);
    return TabContentComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/tabset/tabset.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/shared/components/tabset/tabset.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"theme\">\n  <div class=\"tabs-header\">\n    <button class=\"tabs-nav\" *ngFor=\"let item of tabsMenuItem;let i = index\" [ngClass]=\"{'active':item.active,'tabs-nav':!item.active}\"\n      [disabled]=\"item.disabled\" (click)=\"isActive(i)\">{{item.text}}</button>\n  </div>\n  <div class=\"tabs-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/tabset/tabset.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/shared/components/tabset/tabset.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.tabs-header {\n  width: 100%;\n  height: 41px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start; }\n\n.tabs-nav,\n.active {\n  background: transparent;\n  border: none;\n  min-width: 70px;\n  outline: none;\n  color: #26253c;\n  width: auto;\n  height: 40px;\n  text-align: center;\n  line-height: 40px; }\n\n.tabs-nav::after,\n  .active::after {\n    display: block;\n    content: '';\n    width: 100%;\n    height: 2px;\n    background: #fca400;\n    border: none;\n    border-radius: 2px;\n    position: relative;\n    bottom: 2px; }\n\n.tabs-nav:after {\n  transition: all 0.2s;\n  -o-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -webkit-transition: all 0.2s;\n  transform: scale(0, 1);\n  -o-transform: scale(0, 1);\n  -moz-transform: scale(0, 1);\n  -webkit-transform: scale(0, 1); }\n\n.active:after {\n  transition: all 0.2s;\n  -o-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -webkit-transition: all 0.2s;\n  transform: scale(1, 1);\n  -o-transform: scale(1, 1);\n  -moz-transform: scale(1, 1);\n  -webkit-transform: scale(1, 1); }\n\n.tabs-nav[disabled] {\n  color: rgba(38, 37, 60, 0.4);\n  cursor: not-allowed; }\n\n.tabs-wrap-default .tabs-header {\n  border: none; }\n\n.tabs-wrap-default .tabs-nav,\n.tabs-wrap-default .active {\n  position: relative;\n  top: 2px; }\n\n.tabs-wrap-default .tabs-nav::after,\n  .tabs-wrap-default .active::after {\n    display: none; }\n\n.tabs-wrap-default .active {\n  border-radius: 5px 5px 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid #fff;\n  color: #fca400; }\n\n.tabs-wrap-default .tabs-body {\n  border: 1px solid rgba(0, 0, 0, 0.1); }\n\n.tabs-wrap-justified .tabs-header {\n  justify-content: space-between; }\n\n.tabs-wrap-justified .tabs-nav,\n.tabs-wrap-justified .active {\n  flex: 1; }\n\n.tabs-body {\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvdGFic2V0L0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcY29sb3Itc2NoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvdGFic2V0L0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcbWl4aW4uc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvdGFic2V0L0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFx0YWJzZXRcXHRhYnNldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxpQkFoQlMsRUFpQlo7O0FBRUQ7RUNNSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUDlDOztBQUVEO0VDRUksNERBQW1DO0VBR25DLG9FQUEyQyxFREg5Qzs7QUFFRDtFQ0ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURDOUM7O0FBRUQ7RUNOSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESzlDOztBQUVEO0VDVkksNERBQW1DO0VBR25DLG9FQUEyQyxFRFM5Qzs7QUFFRDtFQ2RJLDREQUFtQztFQUduQyxvRUFBMkMsRURhOUM7O0FFNUNEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWiw0Q0ZNTztFRUxQLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLDRCQUEyQixFQUM5Qjs7QUFFRDs7RUFFSSx3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLGVGSmdCO0VDNkJoQixZQ3hCb0I7RUR5QnBCLGFDekIwQjtFRDBCMUIsbUJBQWtCO0VBQ2xCLGtCQzNCMEIsRUFZN0I7O0FBbkJEOztJQVNRLGVBQWM7SUFDZCxZQUFXO0lBQ1gsWUFBVztJQUNYLFlBQVc7SUFDWCxvQkZWUTtJRVdSLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLFlBQVcsRUFDZDs7QUFHTDtFRFZJLHFCQ1cyQjtFRFYzQix3QkNVMkI7RURUM0IsMEJDUzJCO0VEUjNCLDZCQ1EyQjtFRGxCM0IsdUJDbUI4QjtFRGxCOUIsMEJDa0I4QjtFRGpCOUIsNEJDaUI4QjtFRGhCOUIsK0JDZ0I4QixFQUNqQzs7QUFFRDtFRGZJLHFCQ2dCMkI7RURmM0Isd0JDZTJCO0VEZDNCLDBCQ2MyQjtFRGIzQiw2QkNhMkI7RUR2QjNCLHVCQ3dCOEI7RUR2QjlCLDBCQ3VCOEI7RUR0QjlCLDRCQ3NCOEI7RURyQjlCLCtCQ3FCOEIsRUFDakM7O0FBRUQ7RUFDSSw2QkY5QmdCO0VFK0JoQixvQkFBbUIsRUFDdEI7O0FBRUQ7RUFFUSxhQUFZLEVBQ2Y7O0FBSEw7O0VBTVEsbUJBQWtCO0VBQ2xCLFNBQVEsRUFJWDs7QUFYTDs7SUFTWSxjQUFhLEVBQ2hCOztBQVZUO0VBYVEsMkJBQTBCO0VBQzFCLHFDRm5ERztFRW9ESCw4QkZ2REs7RUV3REwsZUZqRFEsRUVrRFg7O0FBakJMO0VBbUJRLHFDRnhERyxFRXlETjs7QUFHTDtFQUVRLCtCQUE4QixFQUNqQzs7QUFITDs7RUFNUSxRQUFPLEVBQ1Y7O0FBR0w7RUFDSSxjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvdGFic2V0L3RhYnNldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL21peGluJztcbiRkZWZhdWx0LXRleHQ6MTRweDtcbiRzbS10ZXh0OjEycHg7XG4kbGctdGV4dDoxNnB4O1xuJGJvZHktYmc6I2ZmZjtcbiRzaWRlYmFyLWJnOiM0NjUyOTQ7XG4kc2lkZWJhci1mb250cy1jb2xvcjojZmZmO1xuJGNhcmQtYmc6I2ZmZjtcbiRjYXJkLWJvcmRlcjojZTRlM2UzO1xuJHdoaXRlOiNmZmY7XG4kYmxhY2s6IzAwMDtcbiRib3JkZXItY29sb3I6cmdiYSgkYmxhY2ssIC4xKTtcbiR0YWJsZS1ib3JkZXItY29sb3I6I2U2ZTZlNjtcbiRmb250cy1jb2xvcjojMjYyNTNjO1xuJHByaW1hcnk6I2ZjYTQwMDtcbiRzdWNjZXNzOiMxNmJlOWE7XG4kZGFuZ2VyOiNmYTUxNjc7XG4kd2FybmluZzojZmY3NDAzO1xuJGluZm86IzJjYzNmZjtcbmJvZHkge1xuICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xufVxuXG4uYmctZGVmYXVsdCB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgZGFya2VuKCRjYXJkLWJnLCA0MCUpLCBkYXJrZW4oJGNhcmQtYmcsIDMwJSkpO1xufVxuXG4uYmctcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHByaW1hcnksICNmZmQxN2MpO1xufVxuXG4uYmctc3VjY2VzcyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHN1Y2Nlc3MsICM0MmU2OTcpO1xufVxuXG4uYmctZGFuZ2VyIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkZGFuZ2VyLCAjZmRhMDljKTtcbn1cblxuLmJnLXdhcm5pbmcge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICR3YXJuaW5nLCAjZmFjOTgwKTtcbn1cblxuLmJnLWluZm8ge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRpbmZvLCAjMTVmOGJmKTtcbn0iLCJAbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0uLi4pIHtcbiAgICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMiAzO1xuICAgIGJvcmRlci1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xuICAgIGJvcmRlci1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xufVxuXG5AbWl4aW4gY2VudGVyKCR3aWR0aCwgJGhlaWdodCkge1xuICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogJGhlaWdodDtcbn0iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9jb25mJztcbi50YWJzLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi50YWJzLW5hdixcbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogJGZvbnRzLWNvbG9yO1xuICAgIEBpbmNsdWRlIGNlbnRlcihhdXRvLCA0MHB4KTtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiAycHg7XG4gICAgfVxufVxuXG4udGFicy1uYXY6YWZ0ZXIge1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIC4ycyk7XG4gICAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlKDAsIDEpKTtcbn1cblxuLmFjdGl2ZTphZnRlciB7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjJzKTtcbiAgICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGUoMSwgMSkpO1xufVxuXG4udGFicy1uYXZbZGlzYWJsZWRdIHtcbiAgICBjb2xvcjogcmdiYSgkZm9udHMtY29sb3IsIC40KTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4udGFicy13cmFwLWRlZmF1bHQge1xuICAgIC50YWJzLWhlYWRlciB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgLnRhYnMtbmF2LFxuICAgIC5hY3RpdmUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMnB4O1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hY3RpdmUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjYXJkLWJnO1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgfVxuICAgIC50YWJzLWJvZHkge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIH1cbn1cblxuLnRhYnMtd3JhcC1qdXN0aWZpZWQge1xuICAgIC50YWJzLWhlYWRlciB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLnRhYnMtbmF2LFxuICAgIC5hY3RpdmUge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cblxuLnRhYnMtYm9keSB7XG4gICAgcGFkZGluZzogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/tabset/tabset.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/shared/components/tabset/tabset.component.ts ***!
  \********************************************************************/
/*! exports provided: TabsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return TabsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/admin/shared/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(_globalService) {
        this._globalService = _globalService;
        this.theme = 'default';
        this.tabsMenuItem = [];
    }
    TabsetComponent.prototype.ngOnInit = function () {
        this._getTabMenu();
        this.theme = "tabs-wrap-" + this.theme;
    };
    TabsetComponent.prototype.isActive = function (index) {
        this.tabsMenuItem.forEach(function (item) {
            item.active = false;
        });
        this.tabsMenuItem[index].active = true;
        /* send checked info */
        //this._globalService._tabsOrder([this.tabsMenuItem[index].for, this.tabsMenuItem[index].text]);
        var serviceArray = [this.tabsMenuItem[index].for, this.tabsMenuItem[index].text];
        this._globalService.dataBusChanged('tabsOrder', serviceArray);
    };
    TabsetComponent.prototype._getTabMenu = function () {
        /* this._globalService.tabsMenu$.subscribe(tabsMenu => {
          if (tabsMenu.for === this.id)
            this.tabsMenuItem.push(tabsMenu);
        }, error => {
          console.log('Error:' + error);
        }); */
        var _this = this;
        this._globalService.data$.subscribe(function (data) {
            if (data.ev === 'tabsMenu' && data.value.for === _this.id) {
                _this.tabsMenuItem.push(data.value);
            }
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabsetComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabsetComponent.prototype, "theme", void 0);
    TabsetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tabset',
            template: __webpack_require__(/*! ./tabset.component.html */ "./src/app/admin/shared/components/tabset/tabset.component.html"),
            styles: [__webpack_require__(/*! ./tabset.component.scss */ "./src/app/admin/shared/components/tabset/tabset.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], TabsetComponent);
    return TabsetComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/todolist/todolist.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/shared/components/todolist/todolist.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todolist-wrap\">\n  <div class=\"form-group\" style=\"margin-bottom:7px\">\n    <input type=\"text\" class=\"new-task-input\" [(ngModel)]=\"newTaskText\" (keyup.enter)=\"creatNewTask()\">\n    <button class=\"btn btn-primary\" (click)=\"creatNewTask()\">\n      <i class=\"fa fa-plus\"></i>\n    </button>\n  </div>\n  <div class=\"form-group task-list\" *ngFor=\"let item of todolist;let i = index\">\n    <button class=\"over-btn\" (click)=\"overMatter(i)\" *ngIf=\"!item.isEdit\">\n      <i class=\"fa fa-square-o\" *ngIf=\"!item.isOver\"></i>\n      <i class=\"fa fa-check-square-o\" *ngIf=\"item.isOver\"></i>\n    </button>\n    <label class=\"list-text\" [ngClass]=\"{'list-over':item.isOver,'list-text':!item.isOver}\" (dblclick)=\"edit(i)\" *ngIf=\"!item.isEdit\"\n      title=\"{{item.text}}\">{{item.text}}</label>\n    <input type=\"text\" class=\"edit-input\" [(ngModel)]=\"item.editText\" *ngIf=\"item.isEdit\" (keyup.enter)=\"enterTaskEdit(i)\">\n    <button class=\"enter-task-edit\" *ngIf=\"item.isEdit\" (click)=\"enterTaskEdit(i)\">\n      <i class=\"fa fa-check\"></i>\n    </button>\n    <button class=\"cancel-task-edit\" *ngIf=\"item.isEdit\" (click)=\"cancelTaskEdit(i)\">\n      <i class=\"fa fa-close\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/todolist/todolist.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/shared/components/todolist/todolist.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.edit-input {\n  padding: 0 2%;\n  width: 100%;\n  height: 30px;\n  margin: 7px 0;\n  background: transparent;\n  border: 1px solid #26253c;\n  outline: none;\n  border-radius: 0; }\n\n.todolist-wrap {\n  padding-bottom: 13px; }\n\n.form-group {\n  margin: 0;\n  display: flex; }\n\n.new-task-input {\n  display: block;\n  margin: 0 10px;\n  flex: 1;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  outline: none;\n  transition: all 1s;\n  -o-transition: all 1s;\n  -moz-transition: all 1s;\n  -webkit-transition: all 1s; }\n\n.new-task-input:focus {\n    border-bottom: 1px solid #fca400; }\n\n.task-list {\n  border-radius: 5px;\n  transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -webkit-transition: all 0.4s; }\n\n.task-list:hover {\n    background: rgba(252, 164, 0, 0.8); }\n\n.task-list:hover .edit-input,\n    .task-list:hover .enter-task-edit,\n    .task-list:hover .cancel-task-edit {\n      border: 1px solid #fff; }\n\n.list-text,\n.list-over {\n  display: inline-block;\n  flex: 1;\n  width: 100%;\n  height: 39px;\n  line-height: 40px;\n  text-align: left;\n  font-size: 12px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.list-over {\n  text-decoration: line-through; }\n\n.cyclo-btn {\n  position: relative;\n  top: 19px;\n  right: 10px; }\n\n.over-btn {\n  padding: 0;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 15px;\n  width: 40px;\n  height: 39px;\n  text-align: center;\n  line-height: 39px; }\n\n.over-btn .fa-square-o {\n    margin-left: -2px; }\n\n.enter-task-edit,\n.cancel-task-edit {\n  width: 30px;\n  margin: 7px 0;\n  background: transparent;\n  border: 1px solid #26253c;\n  border-left: none;\n  border-radius: 0;\n  outline: none; }\n\n.enter-task-edit:hover,\n  .cancel-task-edit:hover {\n    background: rgba(255, 255, 255, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvdG9kb2xpc3QvRjpcXHByb2plY3RzXFxtdW5jaGllc1xcZ2l0aHViXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxjb2xvci1zY2hlbWVzXFxfZGVmYXVsdC5zY3NzIiwic3JjL2FwcC9hZG1pbi9zaGFyZWQvY29tcG9uZW50cy90b2RvbGlzdC9GOlxccHJvamVjdHNcXG11bmNoaWVzXFxnaXRodWJcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXG1peGluLnNjc3MiLCJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL3RvZG9saXN0L0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFx0b2RvbGlzdFxcdG9kb2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksaUJBaEJTLEVBaUJaOztBQUVEO0VDTUksNERBQW1DO0VBR25DLG9FQUEyQyxFRFA5Qzs7QUFFRDtFQ0VJLDREQUFtQztFQUduQyxvRUFBMkMsRURIOUM7O0FBRUQ7RUNGSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEQzlDOztBQUVEO0VDTkksNERBQW1DO0VBR25DLG9FQUEyQyxFREs5Qzs7QUFFRDtFQ1ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURTOUM7O0FBRUQ7RUNkSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEYTlDOztBRTVDRDtFQUNJLGNBQWE7RUFDYixZQUFXO0VBQ1gsYUFBWTtFQUNaLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsMEJGTWdCO0VFTGhCLGNBQWE7RUFDYixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxxQkFBb0IsRUFDdkI7O0FBRUQ7RUFDSSxVQUFTO0VBQ1QsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxlQUFjO0VBQ2QsUUFBTztFQUNQLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osNENGakJPO0VFa0JQLGNBQWE7RUROYixtQkNPMEI7RUROMUIsc0JDTTBCO0VETDFCLHdCQ0swQjtFREoxQiwyQkNJMEIsRUFJN0I7O0FBWkQ7SUFVUSxpQ0ZqQlEsRUVrQlg7O0FBR0w7RUFDSSxtQkFBa0I7RURkbEIscUJDZTRCO0VEZDVCLHdCQ2M0QjtFRGI1QiwwQkNhNEI7RURaNUIsNkJDWTRCLEVBUy9COztBQVhEO0lBSVEsbUNGekJRLEVFK0JYOztBQVZMOzs7TUFRWSx1QkZsQ0QsRUVtQ0Y7O0FBSVQ7O0VBRUksc0JBQXFCO0VBQ3JCLFFBQU87RUFDUCxZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLHdCQUNKLEVBQUM7O0FBRUQ7RUFDSSw4QkFBNkIsRUFDaEM7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFlBQVcsRUFDZDs7QUFFRDtFQUNJLFdBQVU7RUFDVixhQUFZO0VBQ1osY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixnQkFBZTtFRG5DZixZQ29Db0I7RURuQ3BCLGFDbUMwQjtFRGxDMUIsbUJBQWtCO0VBQ2xCLGtCQ2lDMEIsRUFJN0I7O0FBVkQ7SUFRUSxrQkFBaUIsRUFDcEI7O0FBR0w7O0VBRUksWUFBVztFQUNYLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsMEJGNUVnQjtFRTZFaEIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixjQUFhLEVBSWhCOztBQVpEOztJQVVRLHFDRnJGRyxFRXNGTiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL3RvZG9saXN0L3RvZG9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xuJGRlZmF1bHQtdGV4dDoxNHB4O1xuJHNtLXRleHQ6MTJweDtcbiRsZy10ZXh0OjE2cHg7XG4kYm9keS1iZzojZmZmO1xuJHNpZGViYXItYmc6IzQ2NTI5NDtcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XG4kY2FyZC1iZzojZmZmO1xuJGNhcmQtYm9yZGVyOiNlNGUzZTM7XG4kd2hpdGU6I2ZmZjtcbiRibGFjazojMDAwO1xuJGJvcmRlci1jb2xvcjpyZ2JhKCRibGFjaywgLjEpO1xuJHRhYmxlLWJvcmRlci1jb2xvcjojZTZlNmU2O1xuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XG4kcHJpbWFyeTojZmNhNDAwO1xuJHN1Y2Nlc3M6IzE2YmU5YTtcbiRkYW5nZXI6I2ZhNTE2NztcbiR3YXJuaW5nOiNmZjc0MDM7XG4kaW5mbzojMmNjM2ZmO1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5iZy1kZWZhdWx0IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBkYXJrZW4oJGNhcmQtYmcsIDQwJSksIGRhcmtlbigkY2FyZC1iZywgMzAlKSk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkc3VjY2VzcywgIzQyZTY5Nyk7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRkYW5nZXIsICNmZGEwOWMpO1xufVxuXG4uYmctd2FybmluZyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xufVxuXG4uYmctaW5mbyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGluZm8sICMxNWY4YmYpO1xufSIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xuICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAyIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufSIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lL2NvbmYnO1xuLmVkaXQtaW5wdXQge1xuICAgIHBhZGRpbmc6IDAgMiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogN3B4IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGZvbnRzLWNvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnRvZG9saXN0LXdyYXAge1xuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uZXctdGFzay1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAxcyk7XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkcHJpbWFyeTtcbiAgICB9XG59XG5cbi50YXNrLWxpc3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjRzKTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkcHJpbWFyeSwgLjgpO1xuICAgICAgICAuZWRpdC1pbnB1dCxcbiAgICAgICAgLmVudGVyLXRhc2stZWRpdCxcbiAgICAgICAgLmNhbmNlbC10YXNrLWVkaXQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubGlzdC10ZXh0LFxuLmxpc3Qtb3ZlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpc1xufVxuXG4ubGlzdC1vdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmN5Y2xvLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTlweDtcbiAgICByaWdodDogMTBweDtcbn1cblxuLm92ZXItYnRuIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBAaW5jbHVkZSBjZW50ZXIoNDBweCwgMzlweCk7XG4gICAgLmZhLXNxdWFyZS1vIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gICAgfVxufVxuXG4uZW50ZXItdGFzay1lZGl0LFxuLmNhbmNlbC10YXNrLWVkaXQge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbjogN3B4IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGZvbnRzLWNvbG9yO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkd2hpdGUsIC4xKTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/shared/components/todolist/todolist.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/shared/components/todolist/todolist.component.ts ***!
  \************************************************************************/
/*! exports provided: TodolistComponent, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistComponent", function() { return TodolistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todolist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist.service */ "./src/app/admin/shared/components/todolist/todolist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodolistComponent = /** @class */ (function () {
    function TodolistComponent(todoListService) {
        this.todoListService = todoListService;
        this.todolist = [];
    }
    TodolistComponent.prototype.ngOnInit = function () {
        this.todolist = this.todoListService.getTodoList();
        this.todolist.forEach(function (item) {
            item.isOver = false;
            item.isEdit = false;
            item.editText = item.text;
        });
    };
    TodolistComponent.prototype.edit = function (index) {
        if (!this.todolist[index].isOver) {
            this.todolist[index].editText = this.todolist[index].text;
            this.todolist[index].isEdit = true;
        }
    };
    TodolistComponent.prototype.overMatter = function (index) {
        if (!this.todolist[index].isEdit) {
            this.todolist[index].isOver = !this.todolist[index].isOver;
        }
    };
    TodolistComponent.prototype.enterTaskEdit = function (index) {
        this.todolist[index].text = this.todolist[index].editText;
        this.todolist[index].isEdit = false;
    };
    TodolistComponent.prototype.cancelTaskEdit = function (index) {
        this.todolist[index].isEdit = false;
    };
    TodolistComponent.prototype.creatNewTask = function () {
        var newTask = new List;
        newTask.isEdit = false;
        newTask.isOver = false;
        newTask.text = this.newTaskText;
        this.todolist.unshift(newTask);
    };
    TodolistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'du-todolist',
            template: __webpack_require__(/*! ./todolist.component.html */ "./src/app/admin/shared/components/todolist/todolist.component.html"),
            styles: [__webpack_require__(/*! ./todolist.component.scss */ "./src/app/admin/shared/components/todolist/todolist.component.scss")],
            providers: [_todolist_service__WEBPACK_IMPORTED_MODULE_1__["TodoListService"]]
        }),
        __metadata("design:paramtypes", [_todolist_service__WEBPACK_IMPORTED_MODULE_1__["TodoListService"]])
    ], TodolistComponent);
    return TodolistComponent;
}());

var List = /** @class */ (function () {
    function List() {
    }
    return List;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/todolist/todolist.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/shared/components/todolist/todolist.service.ts ***!
  \**********************************************************************/
/*! exports provided: TodoListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListService", function() { return TodoListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoListService = /** @class */ (function () {
    function TodoListService() {
        this._todoList = [
            { text: 'Check me out' },
            { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
            { text: 'Ex has semper alterum, expetenda dignissim' },
            { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.' },
            { text: 'Simul erroribus ad usu' },
            { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
            { text: 'Get in touch with akveo team' },
            { text: 'Write email to business cat' },
        ];
    }
    TodoListService.prototype.getTodoList = function () {
        return this._todoList;
    };
    TodoListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TodoListService);
    return TodoListService;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/weather/weather.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/shared/components/weather/weather.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"weather-wrap\">\n  <div class=\"weather-content\">\n    <i class=\"icon iconfont icon-{{today.type}} type\"></i>\n    <span class=\"low-high\">{{today.low}} ~ {{today.high}}</span>\n    <span class=\"wind\">\n      <i class=\"icon iconfont icon-tianqizitiku09\"></i>\n      {{today.fl}}</span>\n  </div>\n  <div class=\"weather-bottom\">\n    <button class=\"switch-btn forecast-item-wrap\" [ngClass]=\"{'active':item.isSelect}\" *ngFor=\"let item of data;let i = index\"\n      (click)=\"switch(i)\">\n      <i class=\"icon iconfont icon-{{item.type}}\"></i>\n      <span>{{item.date}}</span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/weather/weather.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/shared/components/weather/weather.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.weather-wrap {\n  display: flex;\n  flex-direction: column;\n  background: url(https://api.dujin.org/bing/1366.php); }\n\n.weather-content {\n  padding: 5px 0;\n  flex: 1;\n  height: auto;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.7), transparent);\n  background: -webkit-linear-gradient(to top, rgba(255, 255, 255, 0.7), transparent); }\n\n.weather-content .type {\n    display: block;\n    font-size: 10em;\n    text-align: center;\n    text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);\n    -o-text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);\n    -moz-text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);\n    -webkit-text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5); }\n\n.weather-content .low-high {\n    display: block;\n    font-size: 2em;\n    text-align: center; }\n\n.weather-bottom {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n  height: 100px;\n  background: rgba(255, 255, 255, 0.5);\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.weather-bottom .forecast-item-wrap {\n    flex: 1;\n    background: transparent;\n    border: none;\n    border-right: 1px solid rgba(0, 0, 0, 0.3);\n    outline: none;\n    text-align: center; }\n\n.weather-bottom .forecast-item-wrap .icon {\n      font-size: 3em; }\n\n.weather-bottom .forecast-item-wrap span {\n      display: block;\n      font-size: 12px; }\n\n.weather-bottom .forecast-item-wrap:last-child {\n      border-right: none; }\n\n.weather-bottom .active {\n    border-top: 2px solid #fca400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvd2VhdGhlci9GOlxccHJvamVjdHNcXG11bmNoaWVzXFxnaXRodWJcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXGNvbG9yLXNjaGVtZXNcXF9kZWZhdWx0LnNjc3MiLCJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL3dlYXRoZXIvRjpcXHByb2plY3RzXFxtdW5jaGllc1xcZ2l0aHViXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9hZG1pbi9zaGFyZWQvY29tcG9uZW50cy93ZWF0aGVyL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFx3ZWF0aGVyXFx3ZWF0aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGlCQWhCUyxFQWlCWjs7QUFFRDtFQ01JLDREQUFtQztFQUduQyxvRUFBMkMsRURQOUM7O0FBRUQ7RUNFSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESDlDOztBQUVEO0VDRkksNERBQW1DO0VBR25DLG9FQUEyQyxFREM5Qzs7QUFFRDtFQ05JLDREQUFtQztFQUduQyxvRUFBMkMsRURLOUM7O0FBRUQ7RUNWSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUzlDOztBQUVEO0VDZEksNERBQW1DO0VBR25DLG9FQUEyQyxFRGE5Qzs7QUU1Q0Q7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHFEQUFvRCxFQUN2RDs7QUFFRDtFQUNJLGVBQWM7RUFDZCxRQUFPO0VBQ1AsYUFBWTtFRG1CWiwyRUFBbUM7RUFHbkMsbUZBQTJDLEVDVDlDOztBQWhCRDtJQU1RLGVBQWM7SUFDZCxnQkFBZTtJQUNmLG1CQUFrQjtJRFB0Qiw2Q0RFTztJQ0RQLGdERENPO0lDQVAsa0REQU87SUNDUCxxRERETyxFRU9OOztBQVZMO0lBWVEsZUFBYztJQUNkLGVBQWM7SUFDZCxtQkFBa0IsRUFDckI7O0FBR0w7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsY0FBYTtFQUNiLHFDRnhCUztFRXlCVCx5Q0Z0Qk8sRUU0Q1Y7O0FBN0JEO0lBU1EsUUFBTztJQUNQLHdCQUF1QjtJQUN2QixhQUFZO0lBQ1osMkNGM0JHO0lFNEJILGNBQWE7SUFDYixtQkFBa0IsRUFXckI7O0FBekJMO01BZ0JZLGVBQWMsRUFDakI7O0FBakJUO01BbUJZLGVBQWM7TUFDZCxnQkYzQ0MsRUU0Q0o7O0FBckJUO01BdUJZLG1CQUFrQixFQUNyQjs7QUF4QlQ7SUEyQlEsOEJGdENRLEVFdUNYIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xuJGRlZmF1bHQtdGV4dDoxNHB4O1xuJHNtLXRleHQ6MTJweDtcbiRsZy10ZXh0OjE2cHg7XG4kYm9keS1iZzojZmZmO1xuJHNpZGViYXItYmc6IzQ2NTI5NDtcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XG4kY2FyZC1iZzojZmZmO1xuJGNhcmQtYm9yZGVyOiNlNGUzZTM7XG4kd2hpdGU6I2ZmZjtcbiRibGFjazojMDAwO1xuJGJvcmRlci1jb2xvcjpyZ2JhKCRibGFjaywgLjEpO1xuJHRhYmxlLWJvcmRlci1jb2xvcjojZTZlNmU2O1xuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XG4kcHJpbWFyeTojZmNhNDAwO1xuJHN1Y2Nlc3M6IzE2YmU5YTtcbiRkYW5nZXI6I2ZhNTE2NztcbiR3YXJuaW5nOiNmZjc0MDM7XG4kaW5mbzojMmNjM2ZmO1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5iZy1kZWZhdWx0IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBkYXJrZW4oJGNhcmQtYmcsIDQwJSksIGRhcmtlbigkY2FyZC1iZywgMzAlKSk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkc3VjY2VzcywgIzQyZTY5Nyk7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRkYW5nZXIsICNmZGEwOWMpO1xufVxuXG4uYmctd2FybmluZyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xufVxuXG4uYmctaW5mbyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGluZm8sICMxNWY4YmYpO1xufSIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xuICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAyIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufSIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lL2NvbmYnO1xuLndlYXRoZXItd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2FwaS5kdWppbi5vcmcvYmluZy8xMzY2LnBocCk7XG59XG5cbi53ZWF0aGVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoJGNhcmQtYmcsIC43KSwgdHJhbnNwYXJlbnQpO1xuICAgIC50eXBlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBAaW5jbHVkZSB0ZXh0LXNoYWRvdyggNnB4IDZweCAxMHB4IHJnYmEoJGJsYWNrLCAuNSkpO1xuICAgIH1cbiAgICAubG93LWhpZ2gge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi53ZWF0aGVyLWJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY2FyZC1iZywgLjUpO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKCRib3JkZXItY29sb3IsIC4zKTtcbiAgICAuZm9yZWNhc3QtaXRlbS13cmFwIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgkYm9yZGVyLWNvbG9yLCAuMyk7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHNtLXRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRwcmltYXJ5O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/shared/components/weather/weather.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/shared/components/weather/weather.component.ts ***!
  \**********************************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.service */ "./src/app/admin/shared/components/weather/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(_weatherService) {
        this._weatherService = _weatherService;
    }
    WeatherComponent.prototype.ngOnInit = function () {
        /* this._weatherService.getJSON().subscribe(data => {
          console.log(data);
        }); */
        this.data = this._weatherService.DATA;
        this.switch(0);
    };
    WeatherComponent.prototype.switch = function (index) {
        this.data.forEach(function (item) {
            item.isSelect = false;
        });
        this.data[index].isSelect = true;
        this.today = this.data[index];
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/admin/shared/components/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.scss */ "./src/app/admin/shared/components/weather/weather.component.scss")],
            providers: [_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]]
        }),
        __metadata("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/weather/weather.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/shared/components/weather/weather.service.ts ***!
  \********************************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = /** @class */ (function () {
    function WeatherService(jsonp) {
        this.jsonp = jsonp;
        this.baseUrl = 'https://www.sojson.com/open/api/weather/json.shtml?city=深圳';
        this.DATA = [
            {
                "date": "03-04",
                "high": "29.0℃",
                "low": "22.0℃",
                "fl": "<3级",
                "type": "dayu",
            }, {
                "date": "03-05",
                "high": "32.0℃",
                "low": "28.0℃",
                "fl": "<2级",
                "type": "duoyun",
            }, {
                "date": "03-06",
                "high": "19.0℃",
                "low": "17.0℃",
                "fl": "<3级",
                "type": "leidian",
            }, {
                "date": "03-07",
                "high": "32.0℃",
                "low": "25.0℃",
                "fl": "<2级",
                "type": "qing",
            }, {
                "date": "03-08",
                "high": "27.0℃",
                "low": "22.0℃",
                "fl": "<4级",
                "type": "yintian",
            }
        ];
    }
    WeatherService_1 = WeatherService;
    WeatherService.prototype.getJSON = function () {
        var callback = "&callback=" + "__ng_jsonp__.__req" + WeatherService_1.times + ".finished";
        WeatherService_1.times++;
        var url = this.baseUrl + callback;
        return this.jsonp.get(url).map(function (res) { return res.json(); });
    };
    var WeatherService_1;
    WeatherService.times = 0;
    WeatherService = WeatherService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Jsonp"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/admin/shared/layout.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/shared/layout.module.ts ***!
  \***********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/global.service */ "./src/app/admin/shared/services/global.service.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/admin/shared/components/notification/notification.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/admin/shared/components/loading/loading.component.ts");
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/menu/menu.component */ "./src/app/admin/shared/layouts/menu/menu.component.ts");
/* harmony import */ var _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/sidebar/sidebar.component */ "./src/app/admin/shared/layouts/sidebar/sidebar.component.ts");
/* harmony import */ var _layouts_content_top_content_top_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/content-top/content-top.component */ "./src/app/admin/shared/layouts/content-top/content-top.component.ts");
/* harmony import */ var _layouts_pages_top_pages_top_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/pages-top/pages-top.component */ "./src/app/admin/shared/layouts/pages-top/pages-top.component.ts");
/* harmony import */ var _layouts_right_config_right_config_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/right-config/right-config.component */ "./src/app/admin/shared/layouts/right-config/right-config.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            providers: [
                _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
            ],
            declarations: [
                _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _layouts_pages_top_pages_top_component__WEBPACK_IMPORTED_MODULE_10__["PagesTopComponent"],
                _layouts_content_top_content_top_component__WEBPACK_IMPORTED_MODULE_9__["ContentTopComponent"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"],
                _layouts_right_config_right_config_component__WEBPACK_IMPORTED_MODULE_11__["RightConfigComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]
            ],
            exports: [
                _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _layouts_pages_top_pages_top_component__WEBPACK_IMPORTED_MODULE_10__["PagesTopComponent"],
                _layouts_content_top_content_top_component__WEBPACK_IMPORTED_MODULE_9__["ContentTopComponent"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"],
                _layouts_right_config_right_config_component__WEBPACK_IMPORTED_MODULE_11__["RightConfigComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/admin/shared/layouts/content-top/content-top.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/shared/layouts/content-top/content-top.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrap\">\n  <a routerLink=\"/pages/index\" *ngIf=\"routeTitle !== 'Dashboard'\" (click)=\"returnHome()\">Dashboard</a>\n  <i *ngIf=\"routeTitle !== 'Dashboard'\">/</i>\n  <span>{{routeTitle}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/layouts/content-top/content-top.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/shared/layouts/content-top/content-top.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.content-wrap {\n  width: 100%;\n  height: auto; }\n\na,\nspan {\n  display: inline-block;\n  text-transform: uppercase;\n  color: rgba(38, 37, 60, 0.7);\n  font-size: 13px;\n  margin-bottom: 20px; }\n\na:hover {\n  color: #fca400;\n  text-decoration: none; }\n\ni {\n  font-size: 14px;\n  color: rgba(38, 37, 60, 0.5);\n  font-weight: 700;\n  margin: 0 3px; }\n\nspan {\n  color: #26253c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2xheW91dHMvY29udGVudC10b3AvRjpcXHByb2plY3RzXFxtdW5jaGllc1xcZ2l0aHViXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxjb2xvci1zY2hlbWVzXFxfZGVmYXVsdC5zY3NzIiwic3JjL2FwcC9hZG1pbi9zaGFyZWQvbGF5b3V0cy9jb250ZW50LXRvcC9GOlxccHJvamVjdHNcXG11bmNoaWVzXFxnaXRodWJcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXG1peGluLnNjc3MiLCJzcmMvYXBwL2FkbWluL3NoYXJlZC9sYXlvdXRzL2NvbnRlbnQtdG9wL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxsYXlvdXRzXFxjb250ZW50LXRvcFxcY29udGVudC10b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksaUJBaEJTLEVBaUJaOztBQUVEO0VDTUksNERBQW1DO0VBR25DLG9FQUEyQyxFRFA5Qzs7QUFFRDtFQ0VJLDREQUFtQztFQUduQyxvRUFBMkMsRURIOUM7O0FBRUQ7RUNGSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEQzlDOztBQUVEO0VDTkksNERBQW1DO0VBR25DLG9FQUEyQyxFREs5Qzs7QUFFRDtFQ1ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURTOUM7O0FBRUQ7RUNkSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEYTlDOztBRTVDRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBRUQ7O0VBRUksc0JBQXFCO0VBQ3JCLDBCQUF5QjtFQUN6Qiw2QkZHZ0I7RUVGaEIsZ0JBQXFCO0VBQ3JCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGVGRlk7RUVHWixzQkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSxnQkZwQmM7RUVxQmQsNkJGVGdCO0VFVWhCLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZUZmZ0IsRUVnQm5CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc2hhcmVkL2xheW91dHMvY29udGVudC10b3AvY29udGVudC10b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9taXhpbic7XG4kZGVmYXVsdC10ZXh0OjE0cHg7XG4kc20tdGV4dDoxMnB4O1xuJGxnLXRleHQ6MTZweDtcbiRib2R5LWJnOiNmZmY7XG4kc2lkZWJhci1iZzojNDY1Mjk0O1xuJHNpZGViYXItZm9udHMtY29sb3I6I2ZmZjtcbiRjYXJkLWJnOiNmZmY7XG4kY2FyZC1ib3JkZXI6I2U0ZTNlMztcbiR3aGl0ZTojZmZmO1xuJGJsYWNrOiMwMDA7XG4kYm9yZGVyLWNvbG9yOnJnYmEoJGJsYWNrLCAuMSk7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiNlNmU2ZTY7XG4kZm9udHMtY29sb3I6IzI2MjUzYztcbiRwcmltYXJ5OiNmY2E0MDA7XG4kc3VjY2VzczojMTZiZTlhO1xuJGRhbmdlcjojZmE1MTY3O1xuJHdhcm5pbmc6I2ZmNzQwMztcbiRpbmZvOiMyY2MzZmY7XG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcbn1cblxuLmJnLWRlZmF1bHQge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIGRhcmtlbigkY2FyZC1iZywgNDAlKSwgZGFya2VuKCRjYXJkLWJnLCAzMCUpKTtcbn1cblxuLmJnLXByaW1hcnkge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRwcmltYXJ5LCAjZmZkMTdjKTtcbn1cblxuLmJnLXN1Y2Nlc3Mge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRzdWNjZXNzLCAjNDJlNjk3KTtcbn1cblxuLmJnLWRhbmdlciB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGRhbmdlciwgI2ZkYTA5Yyk7XG59XG5cbi5iZy13YXJuaW5nIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkd2FybmluZywgI2ZhYzk4MCk7XG59XG5cbi5iZy1pbmZvIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkaW5mbywgIzE1ZjhiZik7XG59IiwiQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIHRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtLi4uKSB7XG4gICAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDIgMztcbiAgICBib3JkZXItaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbiAgICBib3JkZXItaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbn1cblxuQG1peGluIGNlbnRlcigkd2lkdGgsICRoZWlnaHQpIHtcbiAgICB3aWR0aDogJHdpZHRoO1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG59IiwiQGltcG9ydCBcIi4uLy4uL3RoZW1lL2NvbmZcIjtcbi5jb250ZW50LXdyYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuYSxcbnNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiByZ2JhKCRmb250cy1jb2xvciwgLjcpO1xuICAgIGZvbnQtc2l6ZTogJHNtLXRleHQrMTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5hOmhvdmVyIHtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pIHtcbiAgICBmb250LXNpemU6ICRkZWZhdWx0LXRleHQ7XG4gICAgY29sb3I6IHJnYmEoJGZvbnRzLWNvbG9yLCAuNSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDAgM3B4O1xufVxuXG5zcGFuIHtcbiAgICBjb2xvcjogJGZvbnRzLWNvbG9yO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/shared/layouts/content-top/content-top.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/shared/layouts/content-top/content-top.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContentTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTopComponent", function() { return ContentTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/admin/shared/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentTopComponent = /** @class */ (function () {
    function ContentTopComponent(_globalService) {
        this._globalService = _globalService;
        this.getRouteTitle();
    }
    ContentTopComponent.prototype.getRouteTitle = function () {
        /* this._globalService.isActived$.subscribe(isActived => {
          this.routeTitle = isActived.title;
        }, error => {
          console.log('Error: ' + error);
        }); */
        var _this = this;
        this._globalService.data$.subscribe(function (data) {
            if (data.ev === 'isActived') {
                _this.routeTitle = data.value.title;
            }
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    ContentTopComponent.prototype.returnHome = function () {
        //    this._globalService._isActived({ title: 'Dashboard' });
        this._globalService.dataBusChanged('isActived', { title: 'Dashboard' });
    };
    ContentTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'content-top',
            template: __webpack_require__(/*! ./content-top.component.html */ "./src/app/admin/shared/layouts/content-top/content-top.component.html"),
            styles: [__webpack_require__(/*! ./content-top.component.scss */ "./src/app/admin/shared/layouts/content-top/content-top.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], ContentTopComponent);
    return ContentTopComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/layouts/menu/menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/shared/layouts/menu/menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"menu-wrap animated fadeIn\">\n  <li *ngFor=\"let item of menuInfo;let i = index\" class=\"menu-item\" [ngClass]=\"{'item-toggle-on':item.toggle === 'on'}\">\n    <a [routerLink]=\"[item.path]\" *ngIf=\"item.routerLink\" routerLinkActive=\"active\" class=\"menu-link\" (click)=\"_selectItem(item)\">\n      <div class=\"placeholder\">\n        <i class=\"fa fa-{{item.icon}} fa-fw\"></i>\n      </div>\n      <span class=\"text\">{{item.title}}</span>\n    </a>\n\n    <a class=\"menu-link\" *ngIf=\"!item.routerLink\" (click)=\"isToggleOn(item)\">\n      <div class=\"placeholder\">\n        <i class=\"fa fa-{{item.icon}} fa-fw\" *ngIf=\"item.icon\"></i>\n      </div>\n      <span class=\"text\">{{item.title}}</span>\n      <span class=\"fa fa-angle-right fa-fw direction\"></span>\n    </a>\n\n    <div class=\"item-children\" [@collapse]=\"item.toggle\" *ngIf=\"item.children\">\n      <du-menu [menuInfo]=\"item.children\"></du-menu>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/admin/shared/layouts/menu/menu.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/shared/layouts/menu/menu.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.menu-wrap {\n  padding: 0;\n  width: 250px;\n  height: auto; }\n\n.menu-item {\n  margin: 0;\n  list-style: none;\n  width: 100%;\n  height: auto;\n  overflow: hidden; }\n\n.menu-item .menu-link {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    width: 100%;\n    height: 50px;\n    outline: none;\n    background: transparent;\n    border-left: 3px solid transparent;\n    color: #fff;\n    text-decoration: none;\n    overflow: hidden;\n    cursor: pointer; }\n\n.menu-item .menu-link:hover {\n      color: #fca400;\n      background: rgba(0, 0, 0, 0.1); }\n\n.menu-item .menu-link .placeholder,\n    .menu-item .menu-link .text,\n    .menu-item .menu-link .direction {\n      display: block;\n      height: 50px;\n      line-height: 50px;\n      font-size: 13px; }\n\n.menu-item .menu-link .placeholder {\n      width: 47px;\n      text-align: center;\n      margin-right: 10px; }\n\n.menu-item .menu-link .text {\n      flex: 1; }\n\n.menu-item .menu-link .direction {\n      width: 50px;\n      transition: -webkit-transform 0.2s;\n      transition: transform 0.2s;\n      transition: transform 0.2s, -webkit-transform 0.2s;\n      -o-transition: transform 0.2s;\n      -moz-transition: transform 0.2s;\n      -webkit-transition: transform 0.2s;\n      transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg); }\n\n.menu-item .menu-link.active {\n    border-left: 3px solid #fca400;\n    color: #fca400; }\n\n.item-toggle-on > .menu-link .direction {\n  transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -webkit-transform: rotate(90deg); }\n\n.item-children .menu-wrap {\n  background: rgba(0, 0, 0, 0.05); }\n\n@media (max-width: 1440px) {\n  .menu-wrap {\n    width: 210px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2xheW91dHMvbWVudS9GOlxccHJvamVjdHNcXG11bmNoaWVzXFxnaXRodWJcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXGNvbG9yLXNjaGVtZXNcXF9kZWZhdWx0LnNjc3MiLCJzcmMvYXBwL2FkbWluL3NoYXJlZC9sYXlvdXRzL21lbnUvRjpcXHByb2plY3RzXFxtdW5jaGllc1xcZ2l0aHViXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9hZG1pbi9zaGFyZWQvbGF5b3V0cy9tZW51L0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxsYXlvdXRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGlCQWhCUyxFQWlCWjs7QUFFRDtFQ01JLDREQUFtQztFQUduQyxvRUFBMkMsRURQOUM7O0FBRUQ7RUNFSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESDlDOztBQUVEO0VDRkksNERBQW1DO0VBR25DLG9FQUEyQyxFREM5Qzs7QUFFRDtFQ05JLDREQUFtQztFQUduQyxvRUFBMkMsRURLOUM7O0FBRUQ7RUNWSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUzlDOztBQUVEO0VDZEksNERBQW1DO0VBR25DLG9FQUEyQyxFRGE5Qzs7QUU1Q0Q7RUFDSSxXQUFVO0VBQ1YsYUFBWTtFQUNaLGFBQVksRUFDZjs7QUFFRDtFQUNJLFVBQVM7RUFDVCxpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0IsRUE4Q25COztBQW5ERDtJQU9RLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsa0JBQWlCO0lBQ2pCLDhCQUE2QjtJQUM3QixZQUFXO0lBQ1gsYUFBWTtJQUNaLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsbUNBQWtDO0lBQ2xDLFlGakJpQjtJRWtCakIsc0JBQXFCO0lBQ3JCLGlCQUFnQjtJQUNoQixnQkFBZSxFQTBCbEI7O0FBN0NMO01BcUJZLGVGZEk7TUVlSiwrQkZuQkQsRUVvQkY7O0FBdkJUOzs7TUEyQlksZUFBYztNQUNkLGFBQVk7TUFDWixrQkFBaUI7TUFDakIsZ0JBQXFCLEVBQ3hCOztBQS9CVDtNQWlDWSxZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLG1CQUFrQixFQUNyQjs7QUFwQ1Q7TUFzQ1ksUUFBTyxFQUNWOztBQXZDVDtNQXlDWSxZQUFXO01EMUJuQixtQ0MyQnlDO01EM0J6QywyQkMyQnlDO01EM0J6QyxtREMyQnlDO01EMUJ6Qyw4QkMwQnlDO01EekJ6QyxnQ0N5QnlDO01EeEJ6QyxtQ0N3QnlDO01EbEN6Qyx3QkNtQ3VDO01EbEN2QywyQkNrQ3VDO01EakN2Qyw2QkNpQ3VDO01EaEN2QyxnQ0NnQ3VDLEVBQ2xDOztBQTVDVDtJQWdEUSwrQkZ6Q1E7SUUwQ1IsZUYxQ1EsRUUyQ1g7O0FBR0w7RUQ3Q0kseUJDZ0R3QztFRC9DeEMsNEJDK0N3QztFRDlDeEMsOEJDOEN3QztFRDdDeEMsaUNDNkN3QyxFQUNuQzs7QUFJVDtFQUVRLGdDRjVERyxFRTZETjs7QUFHTDtFQUNJO0lBQ0ksYUFBWSxFQUNmLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zaGFyZWQvbGF5b3V0cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9taXhpbic7XG4kZGVmYXVsdC10ZXh0OjE0cHg7XG4kc20tdGV4dDoxMnB4O1xuJGxnLXRleHQ6MTZweDtcbiRib2R5LWJnOiNmZmY7XG4kc2lkZWJhci1iZzojNDY1Mjk0O1xuJHNpZGViYXItZm9udHMtY29sb3I6I2ZmZjtcbiRjYXJkLWJnOiNmZmY7XG4kY2FyZC1ib3JkZXI6I2U0ZTNlMztcbiR3aGl0ZTojZmZmO1xuJGJsYWNrOiMwMDA7XG4kYm9yZGVyLWNvbG9yOnJnYmEoJGJsYWNrLCAuMSk7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiNlNmU2ZTY7XG4kZm9udHMtY29sb3I6IzI2MjUzYztcbiRwcmltYXJ5OiNmY2E0MDA7XG4kc3VjY2VzczojMTZiZTlhO1xuJGRhbmdlcjojZmE1MTY3O1xuJHdhcm5pbmc6I2ZmNzQwMztcbiRpbmZvOiMyY2MzZmY7XG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcbn1cblxuLmJnLWRlZmF1bHQge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIGRhcmtlbigkY2FyZC1iZywgNDAlKSwgZGFya2VuKCRjYXJkLWJnLCAzMCUpKTtcbn1cblxuLmJnLXByaW1hcnkge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRwcmltYXJ5LCAjZmZkMTdjKTtcbn1cblxuLmJnLXN1Y2Nlc3Mge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRzdWNjZXNzLCAjNDJlNjk3KTtcbn1cblxuLmJnLWRhbmdlciB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGRhbmdlciwgI2ZkYTA5Yyk7XG59XG5cbi5iZy13YXJuaW5nIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkd2FybmluZywgI2ZhYzk4MCk7XG59XG5cbi5iZy1pbmZvIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkaW5mbywgIzE1ZjhiZik7XG59IiwiQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIHRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtLi4uKSB7XG4gICAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDIgMztcbiAgICBib3JkZXItaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbiAgICBib3JkZXItaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbn1cblxuQG1peGluIGNlbnRlcigkd2lkdGgsICRoZWlnaHQpIHtcbiAgICB3aWR0aDogJHdpZHRoO1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG59IiwiQGltcG9ydCAnLi4vLi4vdGhlbWUvY29uZic7XG4ubWVudS13cmFwIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tZW51LWl0ZW0ge1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC5tZW51LWxpbmsge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogJHNpZGViYXItZm9udHMtY29sb3I7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYWNlaG9sZGVyLFxuICAgICAgICAudGV4dCxcbiAgICAgICAgLmRpcmVjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAkc20tdGV4dCsxO1xuICAgICAgICB9XG4gICAgICAgIC5wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICB3aWR0aDogNDdweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5kaXJlY3Rpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKHRyYW5zZm9ybSAuMnMpO1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSgwZGVnKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1lbnUtbGluay5hY3RpdmUge1xuICAgICAgICAvL0BpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHByaW1hcnksICNlMGNiZmYpO1xuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICRwcmltYXJ5O1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgfVxufVxuXG4uaXRlbS10b2dnbGUtb24ge1xuICAgID4ubWVudS1saW5rIHtcbiAgICAgICAgLmRpcmVjdGlvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKDkwZGVnKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pdGVtLWNoaWxkcmVuIHtcbiAgICAubWVudS13cmFwIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkYmxhY2ssIC4wNSk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDoxNDQwcHgpIHtcbiAgICAubWVudS13cmFwIHtcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/shared/layouts/menu/menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/shared/layouts/menu/menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation_collapse_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animation/collapse-animate */ "./src/app/admin/shared/animation/collapse-animate.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/admin/shared/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(_globalService) {
        this._globalService = _globalService;
    }
    MenuComponent.prototype.isToggleOn = function (item) {
        item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
    };
    MenuComponent.prototype._selectItem = function (item) {
        //this._globalService._isActived(item);
        this._globalService.dataBusChanged('isActived', item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "menuInfo", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'du-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/admin/shared/layouts/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/admin/shared/layouts/menu/menu.component.scss")],
            animations: [_animation_collapse_animate__WEBPACK_IMPORTED_MODULE_1__["collapse"]]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/layouts/pages-top/pages-top.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/shared/layouts/pages-top/pages-top.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pages-top\">\n  <div class=\"avatar-wrap\">\n    <div class=\"avatar\">\n      <img src=\"{{avatarImgSrc}}\" alt=\"avatar\">\n    </div>\n    <div class=\"user-info-wrap\">\n      <span class=\"user-name\" title=\"{{userName}}\">{{userName}}</span>\n      <span class=\"user-post\" title=\"{{userPost}}\">{{userPost}}</span>\n    </div>\n  </div>\n\n  <div class=\"collapse-menu\" (click)=\"_sidebarToggle()\">\n    <!-- <i class=\"fa fa-navicon fa-fw\" [ngClass]=\"{'toggle-on':sidebarToggle,'toggle-off':!sidebarToggle}\"></i> -->\n    <i class=\"fa fa-dedent fa-fw\" *ngIf=\"sidebarToggle\"></i>\n    <i class=\"fa fa-indent fa-fw\" *ngIf=\"!sidebarToggle\"></i>\n  </div>\n\n\n  <div class=\"search-group\">\n    <input type=\"text\" class=\"search-input\" placeholder=\"Search project · · ·\">\n    <button class=\"search-btn\">\n      <i class=\"fa fa-search fa-fw\"></i>\n    </button>\n  </div>\n\n  <div class=\"msg-tips-wrap\">\n    <div class=\"msg-entrance ring\">\n      <span class=\"fa fa-bell fa-fw\"></span>\n      <span class=\"badge\" *ngIf=\"tip.ring\"></span>\n    </div>\n    <div class=\"msg-entrance email\">\n      <span class=\"fa fa-envelope fa-fw\"></span>\n      <span class=\"badge\" *ngIf=\"tip.email\"></span>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/layouts/pages-top/pages-top.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/shared/layouts/pages-top/pages-top.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.pages-top {\n  position: relative;\n  width: 100%;\n  height: 81px;\n  background: #465294;\n  border: none; }\n\n.avatar-wrap {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  padding: 15px 0;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  width: 240px;\n  height: auto;\n  min-height: 50px;\n  transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -webkit-transition: all 0.4s; }\n\n.avatar-wrap .avatar {\n    width: 50px;\n    height: 50px;\n    border-radius: 5px;\n    overflow: hidden;\n    transition: all 0.4s;\n    -o-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    -webkit-transition: all 0.4s; }\n\n.avatar-wrap .avatar img {\n      display: block;\n      width: 100%; }\n\n.avatar-wrap .user-info-wrap {\n    padding: 2px 14px;\n    width: 170px;\n    height: auto;\n    transition: all 0.4s;\n    -o-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    -webkit-transition: all 0.4s; }\n\n.avatar-wrap .user-name,\n  .avatar-wrap .user-post {\n    display: block;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n\n.avatar-wrap .user-name {\n    color: #fff;\n    font-size: 16px; }\n\n.avatar-wrap .user-post {\n    color: #fca400;\n    font-size: 12px;\n    margin-top: 5px; }\n\n.collapse-menu {\n  position: absolute;\n  top: 50%;\n  left: 250px;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  color: #fff;\n  font-size: 24px;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  transition: all 0.2s;\n  -o-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -webkit-transition: all 0.2s; }\n\n.collapse-menu:hover {\n    color: #fca400; }\n\n.collapse-menu .toggle-on {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n    transition: all 0.5s;\n    -o-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n    -webkit-transition: all 0.5s; }\n\n.collapse-menu .toggle-off {\n    -webkit-transform: rotate(-270deg);\n            transform: rotate(-270deg);\n    transition: all 0.5s;\n    -o-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n    -webkit-transition: all 0.5s; }\n\n.search-group {\n  position: absolute;\n  top: 50%;\n  right: 170px;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  width: 340px;\n  background: rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  overflow: hidden; }\n\n.search-group .search-input {\n    width: 300px;\n    height: 40px;\n    background: transparent;\n    border: none;\n    outline: none;\n    color: #fff;\n    font-size: 12px;\n    text-indent: 1.5em; }\n\n.search-group .search-btn {\n    position: relative;\n    top: -1px;\n    right: 1px;\n    width: 30px;\n    height: 30px;\n    background: #fca400;\n    border: 0;\n    border-radius: 50%;\n    outline: none;\n    line-height: 30px;\n    text-align: center;\n    color: #fff;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    transition: all .4s; }\n\n.search-group .search-btn:hover {\n      background: #ffb730;\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n\n.search-group .search-input:focus + .search-btn {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n\n.msg-tips-wrap {\n  display: flex;\n  flex-wrap: nowrap;\n  position: absolute;\n  top: 50%;\n  right: 60px;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  width: 100px;\n  height: 40px;\n  color: #fff;\n  transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -webkit-transition: all 0.4s; }\n\n.msg-entrance {\n  position: relative;\n  width: 50px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  color: #fff; }\n\n.msg-entrance:hover {\n    cursor: pointer;\n    color: #fca400; }\n\n.msg-entrance span.badge {\n    padding: 0;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    display: block;\n    width: 11px;\n    height: 11px;\n    background: #fca400;\n    border: 2px solid #465294;\n    border-radius: 50%; }\n\n@media (max-width: 414px) {\n  .avatar-wrap {\n    width: auto; }\n    .avatar-wrap .avatar {\n      border-radius: 50px; }\n    .avatar-wrap .user-info-wrap {\n      display: none; }\n  .collapse-menu {\n    left: 100px; }\n  .search-group {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2xheW91dHMvcGFnZXMtdG9wL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcY29sb3Itc2NoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2xheW91dHMvcGFnZXMtdG9wL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcbWl4aW4uc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2xheW91dHMvcGFnZXMtdG9wL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxsYXlvdXRzXFxwYWdlcy10b3BcXHBhZ2VzLXRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxpQkFoQlMsRUFpQlo7O0FBRUQ7RUNNSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUDlDOztBQUVEO0VDRUksNERBQW1DO0VBR25DLG9FQUEyQyxFREg5Qzs7QUFFRDtFQ0ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURDOUM7O0FBRUQ7RUNOSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESzlDOztBQUVEO0VDVkksNERBQW1DO0VBR25DLG9FQUEyQyxFRFM5Qzs7QUFFRDtFQ2RJLDREQUFtQztFQUduQyxvRUFBMkMsRURhOUM7O0FFNUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JGQWU7RUVDZixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFdBQVU7RUFDVixzQ0FBNkI7VUFBN0IsOEJBQTZCO0VBQzdCLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLGFBQVk7RUFDWixpQkFBZ0I7RURFaEIscUJDRDJCO0VERTNCLHdCQ0YyQjtFREczQiwwQkNIMkI7RURJM0IsNkJDSjJCLEVBa0M5Qjs7QUE5Q0Q7SUFjUSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixpQkFBZ0I7SURKcEIscUJDSytCO0lESi9CLHdCQ0krQjtJREgvQiwwQkNHK0I7SURGL0IsNkJDRStCLEVBSzlCOztBQXZCTDtNQW9CWSxlQUFjO01BQ2QsWUFBVyxFQUNkOztBQXRCVDtJQXlCUSxrQkFBaUI7SUFDakIsYUFBWTtJQUNaLGFBQVk7SURkaEIscUJDZStCO0lEZC9CLHdCQ2MrQjtJRGIvQiwwQkNhK0I7SURaL0IsNkJDWStCLEVBQzlCOztBQTdCTDs7SUFnQ1EsZUFBYztJQUNkLGlCQUFnQjtJQUNoQixvQkFBbUI7SUFDbkIsd0JBQ0osRUFBQzs7QUFwQ0w7SUFzQ1EsWUZ6Q2lCO0lFMENqQixnQkY3Q0ssRUU4Q1I7O0FBeENMO0lBMENRLGVGckNRO0lFc0NSLGdCRmxESztJRW1ETCxnQkFBZSxFQUNsQjs7QUFHTDtFQUNJLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsWUFBVztFQUNYLHNDQUE2QjtVQUE3Qiw4QkFBNkI7RUFDN0IsWUZ4RHFCO0VFeURyQixnQkFBZTtFQUNmLGdCQUFlO0VEdEJmLFlDdUJvQjtFRHRCcEIsYUNzQjBCO0VEckIxQixtQkFBa0I7RUFDbEIsa0JDb0IwQjtFRDNDMUIscUJDNEMyQjtFRDNDM0Isd0JDMkMyQjtFRDFDM0IsMEJDMEMyQjtFRHpDM0IsNkJDeUMyQixFQVk5Qjs7QUFyQkQ7SUFXUSxlRnREUSxFRXVEWDs7QUFaTDtJQWNRLDZCQUFvQjtZQUFwQixxQkFBb0I7SURqRHhCLHFCQ2tEK0I7SURqRC9CLHdCQ2lEK0I7SURoRC9CLDBCQ2dEK0I7SUQvQy9CLDZCQytDK0IsRUFDOUI7O0FBaEJMO0lBa0JRLG1DQUEwQjtZQUExQiwyQkFBMEI7SURyRDlCLHFCQ3NEK0I7SURyRC9CLHdCQ3FEK0I7SURwRC9CLDBCQ29EK0I7SURuRC9CLDZCQ21EK0IsRUFDOUI7O0FBR0w7RUFDSSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLGFBQVk7RUFDWixzQ0FBNkI7VUFBN0IsOEJBQTZCO0VBQzdCLGFBQVk7RUFDWiwrQkY1RU87RUU2RVAscUNGN0VPO0VFOEVQLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFrQ25COztBQTNDRDtJQVdRLGFBQVk7SUFDWixhQUFZO0lBQ1osd0JBQXVCO0lBQ3ZCLGFBQVk7SUFDWixjQUFhO0lBQ2IsWUYxRmlCO0lFMkZqQixnQkYvRks7SUVnR0wsbUJBQWtCLEVBQ3JCOztBQW5CTDtJQXFCUSxtQkFBa0I7SUFDbEIsVUFBUztJQUNULFdBQVU7SUFDVixZQUFXO0lBQ1gsYUFBWTtJQUNaLG9CRjVGUTtJRTZGUixVQUFTO0lBQ1QsbUJBQWtCO0lBQ2xCLGNBQWE7SUFDYixrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLFlGNUdLO0lFNkdMLDRCQUFtQjtZQUFuQixvQkFBbUI7SUFDbkIsb0JBQW1CLEVBS3RCOztBQXZDTDtNQW9DWSxvQkFBa0M7TUFDbEMsNEJBQW1CO2NBQW5CLG9CQUFtQixFQUN0Qjs7QUF0Q1Q7SUF5Q1EsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUN0Qjs7QUFHTDtFQUNJLGNBQWE7RUFDYixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixZQUFXO0VBQ1gsc0NBQTZCO1VBQTdCLDhCQUE2QjtFQUM3QixhQUFZO0VBQ1osYUFBWTtFQUNaLFlGaElxQjtFQ2dCckIscUJDaUgyQjtFRGhIM0Isd0JDZ0gyQjtFRC9HM0IsMEJDK0cyQjtFRDlHM0IsNkJDOEcyQixFQUM5Qjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixtQkFBa0I7RUR6SGxCLHFCQzBIMkI7RUR6SDNCLHdCQ3lIMkI7RUR4SDNCLDBCQ3dIMkI7RUR2SDNCLDZCQ3VIMkI7RUFDM0IsWUYzSXFCLEVFNEp4Qjs7QUF4QkQ7SUFTUSxnQkFBZTtJQUNmLGVGdElRLEVFdUlYOztBQVhMO0lBYVEsV0FBVTtJQUNWLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsWUFBVztJQUNYLGVBQWM7SUFDZCxZQUFXO0lBQ1gsYUFBWTtJQUNaLG9CRmhKUTtJRWlKUiwwQkYxSlc7SUUySlgsbUJBQWtCLEVBQ3JCOztBQUdMO0VBQ0k7SUFDSSxZQUFXLEVBT2Q7SUFSRDtNQUdRLG9CQUFtQixFQUN0QjtJQUpMO01BTVEsY0FBYSxFQUNoQjtFQUVMO0lBQ0ksWUFBVyxFQUNkO0VBQ0Q7SUFDSSxjQUFhLEVBQ2hCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zaGFyZWQvbGF5b3V0cy9wYWdlcy10b3AvcGFnZXMtdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xuJGRlZmF1bHQtdGV4dDoxNHB4O1xuJHNtLXRleHQ6MTJweDtcbiRsZy10ZXh0OjE2cHg7XG4kYm9keS1iZzojZmZmO1xuJHNpZGViYXItYmc6IzQ2NTI5NDtcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XG4kY2FyZC1iZzojZmZmO1xuJGNhcmQtYm9yZGVyOiNlNGUzZTM7XG4kd2hpdGU6I2ZmZjtcbiRibGFjazojMDAwO1xuJGJvcmRlci1jb2xvcjpyZ2JhKCRibGFjaywgLjEpO1xuJHRhYmxlLWJvcmRlci1jb2xvcjojZTZlNmU2O1xuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XG4kcHJpbWFyeTojZmNhNDAwO1xuJHN1Y2Nlc3M6IzE2YmU5YTtcbiRkYW5nZXI6I2ZhNTE2NztcbiR3YXJuaW5nOiNmZjc0MDM7XG4kaW5mbzojMmNjM2ZmO1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5iZy1kZWZhdWx0IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBkYXJrZW4oJGNhcmQtYmcsIDQwJSksIGRhcmtlbigkY2FyZC1iZywgMzAlKSk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkc3VjY2VzcywgIzQyZTY5Nyk7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRkYW5nZXIsICNmZGEwOWMpO1xufVxuXG4uYmctd2FybmluZyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xufVxuXG4uYmctaW5mbyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGluZm8sICMxNWY4YmYpO1xufSIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xuICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAyIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufSIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lL2NvbmYnO1xuLnBhZ2VzLXRvcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODFweDtcbiAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1iZztcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5hdmF0YXItd3JhcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjRzKTtcbiAgICAuYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuNHMpO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudXNlci1pbmZvLXdyYXAge1xuICAgICAgICBwYWRkaW5nOiAycHggMTRweDtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIC40cyk7XG4gICAgfVxuICAgIC51c2VyLW5hbWUsXG4gICAgLnVzZXItcG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpc1xuICAgIH1cbiAgICAudXNlci1uYW1lIHtcbiAgICAgICAgY29sb3I6ICRzaWRlYmFyLWZvbnRzLWNvbG9yO1xuICAgICAgICBmb250LXNpemU6ICRsZy10ZXh0O1xuICAgIH1cbiAgICAudXNlci1wb3N0IHtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICBmb250LXNpemU6ICRzbS10ZXh0O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxufVxuXG4uY29sbGFwc2UtbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDI1MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIGNvbG9yOiAkc2lkZWJhci1mb250cy1jb2xvcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIEBpbmNsdWRlIGNlbnRlcig0MHB4LCA0MHB4KTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuMnMpO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgfVxuICAgIC50b2dnbGUtb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjVzKTtcbiAgICB9XG4gICAgLnRvZ2dsZS1vZmYge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjcwZGVnKTtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjVzKTtcbiAgICB9XG59XG5cbi5zZWFyY2gtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMTcwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3I7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAkc2lkZWJhci1mb250cy1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiAkc20tdGV4dDtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDEuNWVtO1xuICAgIH1cbiAgICAuc2VhcmNoLWJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICByaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkYm9keS1iZztcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cztcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRwcmltYXJ5LCAxMCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2VhcmNoLWlucHV0OmZvY3VzKy5zZWFyY2gtYnRuIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbi5tc2ctdGlwcy13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogNjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAkc2lkZWJhci1mb250cy1jb2xvcjtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuNHMpO1xufVxuXG4ubXNnLWVudHJhbmNlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuNHMpO1xuICAgIGNvbG9yOiAkc2lkZWJhci1mb250cy1jb2xvcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgfVxuICAgIHNwYW4uYmFkZ2Uge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTFweDtcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNpZGViYXItYmc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjQxNHB4KSB7XG4gICAgLmF2YXRhci13cmFwIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAudXNlci1pbmZvLXdyYXAge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29sbGFwc2UtbWVudSB7XG4gICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgIH1cbiAgICAuc2VhcmNoLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/shared/layouts/pages-top/pages-top.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/shared/layouts/pages-top/pages-top.component.ts ***!
  \***********************************************************************/
/*! exports provided: PagesTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesTopComponent", function() { return PagesTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/admin/shared/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagesTopComponent = /** @class */ (function () {
    function PagesTopComponent(_globalService) {
        this._globalService = _globalService;
        this.avatarImgSrc = 'assets/images/avatar.png';
        this.userName = 'Folisise Chosielie';
        this.userPost = 'Musician, Player';
        this.sidebarToggle = true;
        this.tip = { ring: true, email: true };
    }
    PagesTopComponent.prototype._sidebarToggle = function () {
        /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
          this.sidebarToggle = sidebarToggle;
        }, error => {
          console.log('Error: ' + error);
        }); */
        var _this = this;
        this._globalService.data$.subscribe(function (data) {
            if (data.ev === 'sidebarToggle') {
                _this.sidebarToggle = data.value;
            }
        }, function (error) {
            console.log('Error: ' + error);
        });
        this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);
        //this._globalService._sidebarToggleState(!this.sidebarToggle);
    };
    PagesTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pages-top',
            template: __webpack_require__(/*! ./pages-top.component.html */ "./src/app/admin/shared/layouts/pages-top/pages-top.component.html"),
            styles: [__webpack_require__(/*! ./pages-top.component.scss */ "./src/app/admin/shared/layouts/pages-top/pages-top.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], PagesTopComponent);
    return PagesTopComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/layouts/right-config/right-config.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/shared/layouts/right-config/right-config.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"config-switch\" (click)=\"configToggle()\">\n  <i class=\"fa fa-tasks\" *ngIf=\"!isConfigToggle\"></i>\n  <i class=\"fa fa-chevron-right\" *ngIf=\"isConfigToggle\"></i>\n</button>\n<div class=\"right-config-wrap\" [ngClass]=\"{'right-config-wrap-on':isConfigToggle}\">\n  <div class=\"config-header\">\n    <h3 class=\"config-title\">\n      <i class=\"fa fa-cogs\"></i>\n      <span>Settings</span>\n    </h3>\n    <p class=\"desc\">Settings desc Settings desc Settings desc Settings desc.</p>\n  </div>\n  <ul class=\"config-content\">\n    <li class=\"config-list\">\n      <span>Config1</span>\n      <switch switchName=\"config1\" switchId=\"config1\" multiple [checked]=\"true\"></switch>\n    </li>\n    <li class=\"config-list\">\n      <span>Config2</span>\n      <switch switchName=\"config2\" switchId=\"config2\" multiple></switch>\n    </li>\n    <li class=\"config-list\">\n      <span>Config3</span>\n      <switch switchName=\"config3\" switchId=\"config3\" multiple></switch>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/layouts/right-config/right-config.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/shared/layouts/right-config/right-config.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.right-config-wrap {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 0;\n  height: 100%;\n  background: #465294;\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n  overflow-x: hidden;\n  transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -webkit-transition: all 0.4s; }\n\n.config-switch {\n  position: absolute;\n  top: 16px;\n  right: 10px;\n  width: 50px;\n  height: 50px;\n  background: #465294;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 16px;\n  transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -webkit-transition: all 0.4s; }\n\n.config-switch:hover {\n    color: #fca400; }\n\n.right-config-wrap-on {\n  width: 230px; }\n\n.config-header {\n  padding: 5px 10px;\n  width: 230px;\n  height: auto;\n  color: #fff; }\n\n.config-header .config-title {\n    border-left: 3px solid #fff;\n    padding: 0 10px; }\n\n.config-header .config-title span {\n      font-size: .8em; }\n\n.config-header .desc {\n    color: rgba(255, 255, 255, 0.7);\n    word-break: break-all;\n    font-size: 12px;\n    line-height: 22px; }\n\n.config-content {\n  flex: 1;\n  width: 230px;\n  color: #fff; }\n\n.config-content .config-list {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: auto;\n    padding: 20px 10px 10px 10px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n.config-content .config-list:first-child {\n      border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2xheW91dHMvcmlnaHQtY29uZmlnL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcY29sb3Itc2NoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2xheW91dHMvcmlnaHQtY29uZmlnL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFx0aGVtZVxcbWl4aW4uc2NzcyIsInNyYy9hcHAvYWRtaW4vc2hhcmVkL2xheW91dHMvcmlnaHQtY29uZmlnL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxsYXlvdXRzXFxyaWdodC1jb25maWdcXHJpZ2h0LWNvbmZpZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxpQkFoQlMsRUFpQlo7O0FBRUQ7RUNNSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUDlDOztBQUVEO0VDRUksNERBQW1DO0VBR25DLG9FQUEyQyxFREg5Qzs7QUFFRDtFQ0ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURDOUM7O0FBRUQ7RUNOSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESzlDOztBQUVEO0VDVkksNERBQW1DO0VBR25DLG9FQUEyQyxFRFM5Qzs7QUFFRDtFQ2RJLDREQUFtQztFQUduQyxvRUFBMkMsRURhOUM7O0FFM0NEO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLGFBQVk7RUFDWixvQkZIZTtFRUlmLDBDRkNPO0VFQVAsbUJBQWtCO0VEWWxCLHFCQ1gyQjtFRFkzQix3QkNaMkI7RURhM0IsMEJDYjJCO0VEYzNCLDZCQ2QyQixFQUM5Qjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsWUFBVztFQUNYLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JGZmU7RUVnQmYsYUFBWTtFQUNaLGNBQWE7RUFDYixZRmpCcUI7RUVrQnJCLGdCRnJCUztFQ21CVCxxQkNHMkI7RURGM0Isd0JDRTJCO0VERDNCLDBCQ0MyQjtFREEzQiw2QkNBMkIsRUFJOUI7O0FBZkQ7SUFhUSxlRmJRLEVFY1g7O0FBR0w7RUFDSSxhQS9CZSxFQWdDbEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsYUFwQ2U7RUFxQ2YsYUFBWTtFQUNaLFlGakNxQixFRStDeEI7O0FBbEJEO0lBTVEsNEJGbkNpQjtJRW9DakIsZ0JBQWUsRUFJbEI7O0FBWEw7TUFTWSxnQkFBZSxFQUNsQjs7QUFWVDtJQWFRLGdDRjFDaUI7SUUyQ2pCLHNCQUFxQjtJQUNyQixnQkZoREs7SUVpREwsa0JBQXdCLEVBQzNCOztBQUdMO0VBQ0ksUUFBTztFQUNQLGFBeERlO0VBeURmLFlGcERxQixFRWdFeEI7O0FBZkQ7SUFLUSxjQUFhO0lBQ2IsK0JBQThCO0lBQzlCLFlBQVc7SUFDWCxhQUFZO0lBQ1osNkJBQTRCO0lBQzVCLDRDRnZERyxFRTJETjs7QUFkTDtNQVlZLHlDRnpERCxFRTBERiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9sYXlvdXRzL3JpZ2h0LWNvbmZpZy9yaWdodC1jb25maWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9taXhpbic7XG4kZGVmYXVsdC10ZXh0OjE0cHg7XG4kc20tdGV4dDoxMnB4O1xuJGxnLXRleHQ6MTZweDtcbiRib2R5LWJnOiNmZmY7XG4kc2lkZWJhci1iZzojNDY1Mjk0O1xuJHNpZGViYXItZm9udHMtY29sb3I6I2ZmZjtcbiRjYXJkLWJnOiNmZmY7XG4kY2FyZC1ib3JkZXI6I2U0ZTNlMztcbiR3aGl0ZTojZmZmO1xuJGJsYWNrOiMwMDA7XG4kYm9yZGVyLWNvbG9yOnJnYmEoJGJsYWNrLCAuMSk7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiNlNmU2ZTY7XG4kZm9udHMtY29sb3I6IzI2MjUzYztcbiRwcmltYXJ5OiNmY2E0MDA7XG4kc3VjY2VzczojMTZiZTlhO1xuJGRhbmdlcjojZmE1MTY3O1xuJHdhcm5pbmc6I2ZmNzQwMztcbiRpbmZvOiMyY2MzZmY7XG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcbn1cblxuLmJnLWRlZmF1bHQge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIGRhcmtlbigkY2FyZC1iZywgNDAlKSwgZGFya2VuKCRjYXJkLWJnLCAzMCUpKTtcbn1cblxuLmJnLXByaW1hcnkge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRwcmltYXJ5LCAjZmZkMTdjKTtcbn1cblxuLmJnLXN1Y2Nlc3Mge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRzdWNjZXNzLCAjNDJlNjk3KTtcbn1cblxuLmJnLWRhbmdlciB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGRhbmdlciwgI2ZkYTA5Yyk7XG59XG5cbi5iZy13YXJuaW5nIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkd2FybmluZywgI2ZhYzk4MCk7XG59XG5cbi5iZy1pbmZvIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkaW5mbywgIzE1ZjhiZik7XG59IiwiQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIHRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtLi4uKSB7XG4gICAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDIgMztcbiAgICBib3JkZXItaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbiAgICBib3JkZXItaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbn1cblxuQG1peGluIGNlbnRlcigkd2lkdGgsICRoZWlnaHQpIHtcbiAgICB3aWR0aDogJHdpZHRoO1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG59IiwiQGltcG9ydCBcIi4uLy4uL3RoZW1lL2NvbmZcIjtcbiRjb25maWctd2lkdGg6MjMwcHg7XG4ucmlnaHQtY29uZmlnLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICRzaWRlYmFyLWJnO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjRzKTtcbn1cblxuLmNvbmZpZy1zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6ICRzaWRlYmFyLWJnO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiAkc2lkZWJhci1mb250cy1jb2xvcjtcbiAgICBmb250LXNpemU6ICRsZy10ZXh0O1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIC40cyk7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICB9XG59XG5cbi5yaWdodC1jb25maWctd3JhcC1vbiB7XG4gICAgd2lkdGg6ICRjb25maWctd2lkdGg7XG59XG5cbi5jb25maWctaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB3aWR0aDogJGNvbmZpZy13aWR0aDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY29sb3I6ICRzaWRlYmFyLWZvbnRzLWNvbG9yO1xuICAgIC5jb25maWctdGl0bGUge1xuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICRzaWRlYmFyLWZvbnRzLWNvbG9yO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kZXNjIHtcbiAgICAgICAgY29sb3I6IHJnYmEoJHNpZGViYXItZm9udHMtY29sb3IsIC43KTtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICBmb250LXNpemU6ICRzbS10ZXh0O1xuICAgICAgICBsaW5lLWhlaWdodDogJHNtLXRleHQrMTA7XG4gICAgfVxufVxuXG4uY29uZmlnLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6ICRjb25maWctd2lkdGg7XG4gICAgY29sb3I6ICRzaWRlYmFyLWZvbnRzLWNvbG9yO1xuICAgIC5jb25maWctbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/shared/layouts/right-config/right-config.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/shared/layouts/right-config/right-config.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RightConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightConfigComponent", function() { return RightConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/admin/shared/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RightConfigComponent = /** @class */ (function () {
    function RightConfigComponent(_globalService) {
        this._globalService = _globalService;
        this.isConfigToggle = false;
    }
    RightConfigComponent.prototype.ngOnInit = function () { };
    RightConfigComponent.prototype.configToggle = function () {
        this.isConfigToggle = !this.isConfigToggle;
        //this._globalService._sidebarToggleState(!this.isConfigToggle);
        this._globalService.dataBusChanged('sidebarToggle', !this.isConfigToggle);
    };
    RightConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'right-config',
            template: __webpack_require__(/*! ./right-config.component.html */ "./src/app/admin/shared/layouts/right-config/right-config.component.html"),
            styles: [__webpack_require__(/*! ./right-config.component.scss */ "./src/app/admin/shared/layouts/right-config/right-config.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], RightConfigComponent);
    return RightConfigComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/layouts/sidebar/sidebar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/shared/layouts/sidebar/sidebar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pages-sider\" [ngClass]=\"{'side-collapsed':!sidebarToggle}\">\n  <span class=\"sidebar-top-line\"></span>\n  <du-menu [menuInfo]=\"menuInfo\"></du-menu>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/layouts/sidebar/sidebar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/shared/layouts/sidebar/sidebar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.pages-sider {\n  width: 250px;\n  height: 100%;\n  background: #465294;\n  overflow-x: hidden;\n  transition: all 0.5s;\n  -o-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  border: none; }\n\n.pages-sider .sidebar-top-line {\n    display: block;\n    width: 80%;\n    position: relative;\n    left: 10%;\n    border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n.side-collapsed {\n  width: 0;\n  /* .avatar-wrap {\n        padding: 15px 4px;\n        border-bottom: 1px solid transparent;\n    }\n    .avatar {\n        width: 40px;\n        height: 40px;\n        border-radius: 50%;\n        margin: 5px 2px;\n    }\n    .user-info-wrap {\n        transform: scale(0, 0);\n    } */ }\n\n@media (max-width: 1440px) {\n  .pages-sider {\n    width: 210px; }\n  .side-collapsed {\n    width: 0; } }\n\n@media (max-width: 970px) {\n  .pages-sider {\n    width: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2xheW91dHMvc2lkZWJhci9GOlxccHJvamVjdHNcXG11bmNoaWVzXFxnaXRodWJcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXGNvbG9yLXNjaGVtZXNcXF9kZWZhdWx0LnNjc3MiLCJzcmMvYXBwL2FkbWluL3NoYXJlZC9sYXlvdXRzL3NpZGViYXIvRjpcXHByb2plY3RzXFxtdW5jaGllc1xcZ2l0aHViXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9hZG1pbi9zaGFyZWQvbGF5b3V0cy9zaWRlYmFyL0Y6XFxwcm9qZWN0c1xcbXVuY2hpZXNcXGdpdGh1YlxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxsYXlvdXRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGlCQWhCUyxFQWlCWjs7QUFFRDtFQ01JLDREQUFtQztFQUduQyxvRUFBMkMsRURQOUM7O0FBRUQ7RUNFSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESDlDOztBQUVEO0VDRkksNERBQW1DO0VBR25DLG9FQUEyQyxFREM5Qzs7QUFFRDtFQ05JLDREQUFtQztFQUduQyxvRUFBMkMsRURLOUM7O0FBRUQ7RUNWSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUzlDOztBQUVEO0VDZEksNERBQW1DO0VBR25DLG9FQUEyQyxFRGE5Qzs7QUU1Q0Q7RUFDSSxhQUFZO0VBQ1osYUFBWTtFQUNaLG9CRkNlO0VFQWYsbUJBQWtCO0VEaUJsQixxQkNoQjJCO0VEaUIzQix3QkNqQjJCO0VEa0IzQiwwQkNsQjJCO0VEbUIzQiw2QkNuQjJCO0VBQzNCLGFBQVksRUFRZjs7QUFkRDtJQVFRLGVBQWM7SUFDZCxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCx5Q0ZIRyxFRUlOOztBQUdMO0VBQ0ksU0FBUTtFQUNSOzs7Ozs7Ozs7Ozs7UUFZSSxFQUNQOztBQUVEO0VBQ0k7SUFDSSxhQUFZLEVBQ2Y7RUFDRDtJQUNJLFNBQVEsRUFDWCxFQUFBOztBQUdMO0VBQ0k7SUFDSSxTQUFRLEVBQ1gsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL21peGluJztcbiRkZWZhdWx0LXRleHQ6MTRweDtcbiRzbS10ZXh0OjEycHg7XG4kbGctdGV4dDoxNnB4O1xuJGJvZHktYmc6I2ZmZjtcbiRzaWRlYmFyLWJnOiM0NjUyOTQ7XG4kc2lkZWJhci1mb250cy1jb2xvcjojZmZmO1xuJGNhcmQtYmc6I2ZmZjtcbiRjYXJkLWJvcmRlcjojZTRlM2UzO1xuJHdoaXRlOiNmZmY7XG4kYmxhY2s6IzAwMDtcbiRib3JkZXItY29sb3I6cmdiYSgkYmxhY2ssIC4xKTtcbiR0YWJsZS1ib3JkZXItY29sb3I6I2U2ZTZlNjtcbiRmb250cy1jb2xvcjojMjYyNTNjO1xuJHByaW1hcnk6I2ZjYTQwMDtcbiRzdWNjZXNzOiMxNmJlOWE7XG4kZGFuZ2VyOiNmYTUxNjc7XG4kd2FybmluZzojZmY3NDAzO1xuJGluZm86IzJjYzNmZjtcbmJvZHkge1xuICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xufVxuXG4uYmctZGVmYXVsdCB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgZGFya2VuKCRjYXJkLWJnLCA0MCUpLCBkYXJrZW4oJGNhcmQtYmcsIDMwJSkpO1xufVxuXG4uYmctcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHByaW1hcnksICNmZmQxN2MpO1xufVxuXG4uYmctc3VjY2VzcyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHN1Y2Nlc3MsICM0MmU2OTcpO1xufVxuXG4uYmctZGFuZ2VyIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkZGFuZ2VyLCAjZmRhMDljKTtcbn1cblxuLmJnLXdhcm5pbmcge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICR3YXJuaW5nLCAjZmFjOTgwKTtcbn1cblxuLmJnLWluZm8ge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRpbmZvLCAjMTVmOGJmKTtcbn0iLCJAbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0uLi4pIHtcbiAgICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMiAzO1xuICAgIGJvcmRlci1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xuICAgIGJvcmRlci1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xufVxuXG5AbWl4aW4gY2VudGVyKCR3aWR0aCwgJGhlaWdodCkge1xuICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogJGhlaWdodDtcbn0iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9jb25mJztcbi5wYWdlcy1zaWRlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1iZztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjVzKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLnNpZGViYXItdG9wLWxpbmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIH1cbn1cblxuLnNpZGUtY29sbGFwc2VkIHtcbiAgICB3aWR0aDogMDtcbiAgICAvKiAuYXZhdGFyLXdyYXAge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW46IDVweCAycHg7XG4gICAgfVxuICAgIC51c2VyLWluZm8td3JhcCB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XG4gICAgfSAqL1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDoxNDQwcHgpIHtcbiAgICAucGFnZXMtc2lkZXIge1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgfVxuICAgIC5zaWRlLWNvbGxhcHNlZCB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6OTcwcHgpIHtcbiAgICAucGFnZXMtc2lkZXIge1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/shared/layouts/sidebar/sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/shared/layouts/sidebar/sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/menu.service */ "./src/app/admin/shared/services/menu.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/admin/shared/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_menuService, _globalService) {
        this._menuService = _menuService;
        this._globalService = _globalService;
        this.menuInfo = [];
        this.sidebarToggle = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuInfo = this._menuService.putSidebarJson();
        console.log(this.menuInfo);
        this._sidebarToggle();
        this._menuService.selectItem(this.menuInfo); /* ----->初始化判断路由isActive状态  未完成  待优化 */
        this._isSelectItem(this.menuInfo);
    };
    SidebarComponent.prototype._sidebarToggle = function () {
        var _this = this;
        // this._globalService._sidebarToggleState(true);
        /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
          this.sidebarToggle = sidebarToggle;
        }, error => {
          console.log('Error: ' + error);
        }); */
        this._globalService.data$.subscribe(function (data) {
            if (data.ev === 'sidebarToggle') {
                _this.sidebarToggle = data.value;
            }
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    /* 初始化 判断当前路由状态信息 首次加载菜单状态 */
    SidebarComponent.prototype._isSelectItem = function (item) {
        for (var i in item) {
            if (item[i].children) {
                for (var index in item[i].children) {
                    if (item[i].children[index].isActive || item[i].children[index].toggle === 'on') {
                        item[i].toggle = 'on';
                        break;
                    }
                    else {
                        this._isSelectItem(item[i].children);
                    }
                }
            }
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/admin/shared/layouts/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/admin/shared/layouts/sidebar/sidebar.component.scss")],
            providers: [_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["menuService"]]
        }),
        __metadata("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["menuService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/services/global.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/shared/services/global.service.ts ***!
  \*********************************************************/
/*! exports provided: GlobalService, DataSourceClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceClass", function() { return DataSourceClass; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/* models */
/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */
var GlobalService = /** @class */ (function () {
    function GlobalService() {
        /*private sidebarToggleSource = new Subject<boolean>();
        sidebarToggle$ = this.sidebarToggleSource.asObservable();
        _sidebarToggleState(sidebarToggle: boolean) {
            this.sidebarToggleSource.next(sidebarToggle);
        }*/
        /* private tabsMenuSource = new Subject<TabMenuModel>();
        tabsMenu$ = this.tabsMenuSource.asObservable();
        _tabsMenu(tabsMenu: TabMenuModel) {
            this.tabsMenuSource.next(tabsMenu);
        }
        private tabsOrderSource = new Subject<Array<any>>();
        tabsOrder$ = this.tabsOrderSource.asObservable();
        _tabsOrder(tabsOrder: Array<any>) {
            this.tabsOrderSource.next(tabsOrder);
        }*/
        /* private notificationSource = new Subject<NotificationModel>();
        notification$ = this.notificationSource.asObservable();
        _notification(notification: NotificationModel) {
            this.notificationSource.next(notification);
        } */
        /* private isActivedSource = new Subject<any>();
        isActived$ = this.isActivedSource.asObservable();
        _isActived(isActived) {
            this.isActivedSource.next(isActived);
        }*/
        this.dataSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.data$ = this.dataSource.asObservable();
    }
    GlobalService.prototype.dataBusChanged = function (ev, value) {
        this.dataSource.next({
            ev: ev,
            value: value
        });
    };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GlobalService);
    return GlobalService;
}());

var DataSourceClass = /** @class */ (function () {
    function DataSourceClass() {
    }
    return DataSourceClass;
}());



/***/ }),

/***/ "./src/app/admin/shared/services/menu.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/shared/services/menu.service.ts ***!
  \*******************************************************/
/*! exports provided: menuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuService", function() { return menuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/menu */ "./src/app/admin/pages/menu.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.service */ "./src/app/admin/shared/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var menuService = /** @class */ (function () {
    function menuService(_globalService, _router) {
        this._globalService = _globalService;
        this._router = _router;
        this.parent_node = null;
        this.node = null;
        this.path_item = [];
        this.getNodePath(_pages_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEM"]);
    }
    menuService.prototype.queryParentNode = function (json, node_id) {
        for (var i = 0; i < json.length; i++) {
            if (this.node)
                break;
            var object = json[i];
            if (!object || !object.path)
                continue;
            if (object.path === node_id) {
                this.node = object;
                break;
            }
            else {
                if (object.children) {
                    this.parent_node = object;
                    this.queryParentNode(object.children, node_id);
                }
                else {
                    continue;
                }
            }
        }
        if (!this.node)
            this.parent_node = null;
        return {
            parent_node: this.parent_node,
            node: this.node
        };
    };
    menuService.prototype.creatRouterLink = function (nodeId) {
        //  debugger;
        this.node = null;
        this.parent_node = null;
        var menuObj = this.queryParentNode(_pages_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEM"], nodeId);
        if (menuObj.parent_node && menuObj.parent_node.path) {
            this.path_item.unshift(menuObj.parent_node.path);
            return this.creatRouterLink(menuObj.parent_node.path);
        }
        else {
            return this.path_item;
        }
    };
    menuService.prototype.getNodePath = function (json) {
        var _this = this;
        json.forEach(function (index) {
            if (index.children) {
                //delete index.routerLink;
                _this.getNodePath(index.children);
                index.toggle = 'init';
            }
            else {
                _this.path_item = [index.path];
                index.routerLink = _this.creatRouterLink(index.path);
                index.routerLink.unshift('', 'pages');
            }
        });
    };
    menuService.prototype.putSidebarJson = function () {
        return _pages_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEM"];
    };
    menuService.prototype.selectItem = function (item) {
        var _this = this;
        item.forEach(function (element) {
            if (element.routerLink) {
                element.isActive = _this._router.isActive(_this._router.createUrlTree(element.routerLink), true);
                if (element.isActive)
                    //this._globalService._isActived(element);
                    _this._globalService.dataBusChanged('isActived', element);
            }
            else if (element.children)
                _this.selectItem(element.children);
        });
    };
    menuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], menuService);
    return menuService;
}());



/***/ }),

/***/ "./src/app/admin/shared/shared.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/shared/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/admin/shared/components/card/card.component.ts");
/* harmony import */ var _components_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/todolist/todolist.component */ "./src/app/admin/shared/components/todolist/todolist.component.ts");
/* harmony import */ var _components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tabset/tabset.component */ "./src/app/admin/shared/components/tabset/tabset.component.ts");
/* harmony import */ var _components_tabset_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tabset/tab-content/tab-content.component */ "./src/app/admin/shared/components/tabset/tab-content/tab-content.component.ts");
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/progress-bar/progress-bar.component */ "./src/app/admin/shared/components/progress-bar/progress-bar.component.ts");
/* harmony import */ var _components_file_tree_file_tree_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/file-tree/file-tree.component */ "./src/app/admin/shared/components/file-tree/file-tree.component.ts");
/* harmony import */ var _components_switch_switch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/switch/switch.component */ "./src/app/admin/shared/components/switch/switch.component.ts");
/* harmony import */ var _components_pell_editor_pell_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pell-editor/pell-editor.component */ "./src/app/admin/shared/components/pell-editor/pell-editor.component.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/admin/shared/components/alert/alert.component.ts");
/* harmony import */ var _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/weather/weather.component */ "./src/app/admin/shared/components/weather/weather.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/admin/shared/components/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* components */











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["JsonpModule"],
            ],
            declarations: [
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                _components_file_tree_file_tree_component__WEBPACK_IMPORTED_MODULE_10__["FileTreeComponent"],
                _components_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_6__["TodolistComponent"],
                _components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_7__["TabsetComponent"],
                _components_tabset_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_8__["TabContentComponent"],
                _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__["ProgressBarComponent"],
                _components_switch_switch_component__WEBPACK_IMPORTED_MODULE_11__["SwitchComponent"],
                _components_pell_editor_pell_editor_component__WEBPACK_IMPORTED_MODULE_12__["PellEditorComponent"],
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"],
                _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_14__["WeatherComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"]
            ],
            exports: [
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                _components_file_tree_file_tree_component__WEBPACK_IMPORTED_MODULE_10__["FileTreeComponent"],
                _components_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_6__["TodolistComponent"],
                _components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_7__["TabsetComponent"],
                _components_tabset_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_8__["TabContentComponent"],
                _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__["ProgressBarComponent"],
                _components_switch_switch_component__WEBPACK_IMPORTED_MODULE_11__["SwitchComponent"],
                _components_pell_editor_pell_editor_component__WEBPACK_IMPORTED_MODULE_12__["PellEditorComponent"],
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"],
                _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_14__["WeatherComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



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
/* harmony import */ var _user_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/thank-you/thank-you.component */ "./src/app/user/thank-you/thank-you.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "**", component: _user_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_2__["ThankYouComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
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

module.exports = "/*\r\nThis CSS resource incorporates links to font software which is the valuable copyrighted\r\nproperty of Monotype Imaging and/or its suppliers. You may not attempt to copy, install,\r\nredistribute, convert, modify or reverse engineer this font software. Please contact Monotype\r\nImaging with any questions regarding Web fonts:  http://webfonts.fonts.com\r\n*/\r\n\r\n/* latin */\r\n\r\n@font-face {\r\n  font-family: \"Helvetica-W01-Roman\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ea95b44a-eab7-4bd1-861c-e73535e7f652.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ea95b44a-eab7-4bd1-861c-e73535e7f652.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4021a3b9-f782-438b-aeb4-c008109a8b64.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/669f79ed-002c-4ff6-965c-9da453968504.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d17bc040-9e8b-4397-8356-8153f4a64edf.svg#d17bc040-9e8b-4397-8356-8153f4a64edf\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Helvetica-W01-Bold\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f70da45a-a05c-490c-ad62-7db4894b012a.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f70da45a-a05c-490c-ad62-7db4894b012a.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c5749443-93da-4592-b794-42f28d62ef72.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/73805f15-38e4-4fb7-8a08-d56bf29b483b.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/874bbc4a-0091-49f0-93ef-ea4e69c3cc7a.svg#874bbc4a-0091-49f0-93ef-ea4e69c3cc7a\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Braggadocio-W01\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f305266f-adfb-4e4f-9055-1d7328de8ce6.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f305266f-adfb-4e4f-9055-1d7328de8ce6.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/518e4577-eecc-4ecd-adb4-2ee21df35b20.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f46241ad-1f5d-4935-ad69-b0a78c2e191d.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b2a0a25d-e054-4c65-bffa-e5760b48dec3.svg#b2a0a25d-e054-4c65-bffa-e5760b48dec3\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Clarendon-W01-Medium-692107\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c6993450-d795-4fd3-b306-38481733894c.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c6993450-d795-4fd3-b306-38481733894c.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b6878f57-4d64-4d70-926d-fa4dec6173a5.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0a6b6eff-6b5d-46d4-b681-f356eef1e4c1.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/600b1038-76a8-43b4-a2f7-2a6eb0681f95.svg#600b1038-76a8-43b4-a2f7-2a6eb0681f95\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"DIN-Next-W01-Light\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3e0b2cd7-9657-438b-b4af-e04122e8f1f7.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3e0b2cd7-9657-438b-b4af-e04122e8f1f7.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bc176270-17fa-4c78-a343-9fe52824e501.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3516f91d-ac48-42cd-acfe-1be691152cc4.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d1b1e866-a411-42ba-8f75-72bf28e23694.svg#d1b1e866-a411-42ba-8f75-72bf28e23694\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"SnellRoundhandW01-Scrip\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/fea0fb7b-884b-4567-a6dc-addb8e67baaa.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/fea0fb7b-884b-4567-a6dc-addb8e67baaa.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/efbfc170-aaf0-4472-91f4-dbb5bc2f4c59.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d974669d-978c-4bcf-8843-b2b7c366d097.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5b2427b5-3c1e-4b17-9f3c-720a332c9142.svg#5b2427b5-3c1e-4b17-9f3c-720a332c9142\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Stencil-W01-Bold\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cc642b17-a005-4f1e-86e8-baffa4647445.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cc642b17-a005-4f1e-86e8-baffa4647445.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a9eddc47-990d-47a3-be4e-c8cdec0090c6.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8d108476-7a62-4664-821f-03c8a522c030.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7823e34c-67dc-467a-bbfb-efbb5f6c90f0.svg#7823e34c-67dc-467a-bbfb-efbb5f6c90f0\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Helvetica-W01-Light\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/717f8140-20c9-4892-9815-38b48f14ce2b.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/717f8140-20c9-4892-9815-38b48f14ce2b.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/03805817-4611-4dbc-8c65-0f73031c3973.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d5f9f72d-afb7-4c57-8348-b4bdac42edbb.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/05ad458f-263b-413f-b054-6001a987ff3e.svg#05ad458f-263b-413f-b054-6001a987ff3e\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Victoria-Titling-MT-W90\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2b6731dc-305d-4dcd-928e-805163e26288.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2b6731dc-305d-4dcd-928e-805163e26288.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/faceff42-b106-448b-b4cf-5b3a02ad61f1.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/82f103e4-7b1c-49af-862f-fe576da76996.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/46f6946a-4039-46e8-b001-be3e53068d46.svg#46f6946a-4039-46e8-b001-be3e53068d46\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"AmericanTypwrterITCW01--731025\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/dff8aebe-deee-47a7-8575-b2f39c8473f8.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/dff8aebe-deee-47a7-8575-b2f39c8473f8.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0c0f4d28-4c13-4e84-9a36-e63cd529ae86.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7f26a278-84b3-4587-bf07-c8cdf7e347a9.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/254ab931-e6d6-4307-9762-5914ded49f13.svg#254ab931-e6d6-4307-9762-5914ded49f13\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Soho-W01-Thin-Condensed\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b2d6b869-3f47-4c92-83d3-4546ffb860d0.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b2d6b869-3f47-4c92-83d3-4546ffb860d0.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f84b539d-ed34-4400-a139-c0f909af49aa.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9ef27401-09c0-434f-b0f0-784445b52ea2.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4ba3546a-32f7-4e7d-be64-8da01b23d46e.svg#4ba3546a-32f7-4e7d-be64-8da01b23d46e\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Pacifica-W00-Condensed\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e50a5bb1-8246-4412-8c27-4a18ba89a0fd.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e50a5bb1-8246-4412-8c27-4a18ba89a0fd.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6849614c-986c-45b1-a1a7-39c891759bb9.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8ccb835c-4668-432d-8d1d-099b48aafe4e.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/028040ec-b956-41d8-a07d-b4d3466b8ed8.svg#028040ec-b956-41d8-a07d-b4d3466b8ed8\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Avenida-W01\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a8138b05-e5ff-482f-a8f6-8be894e01fc3.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a8138b05-e5ff-482f-a8f6-8be894e01fc3.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/53f05821-c783-4593-bf20-c3d770f32863.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b7215bbe-7870-4733-9e81-28398fbed38b.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bc2def79-bd99-49b9-98b3-502e34cc5552.svg#bc2def79-bd99-49b9-98b3-502e34cc5552\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"ITC-Arecibo-W01-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/036d6c0b-d067-431a-ab39-be3b89b1322f.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/036d6c0b-d067-431a-ab39-be3b89b1322f.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5d6cd606-b520-4335-96e1-755691d666e8.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/03d7d783-5b99-4340-b373-97c00246ec27.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a5fab48f-93a0-403a-b60e-bfdb0b69d973.svg#a5fab48f-93a0-403a-b60e-bfdb0b69d973\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Droid-Serif-W01-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/de5702ce-174b-4ee6-a608-6482d5d7eb71.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/de5702ce-174b-4ee6-a608-6482d5d7eb71.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/83ae2051-dcdd-4931-9946-8be747a40d00.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/63f35b58-a40f-4f53-bb3e-20396f202214.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/19db6ebc-2d1b-4835-9588-3fa45ff36f4e.svg#19db6ebc-2d1b-4835-9588-3fa45ff36f4e\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Museo-W01-700\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3b3d99a2-6b36-4912-a93e-29277020a5cf.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3b3d99a2-6b36-4912-a93e-29277020a5cf.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/28d74e9b-4ea9-4e3c-b265-c67a72c66856.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b432b4e1-014a-4ed8-865c-249744f856b0.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8e63fd1e-adc9-460e-9ef7-bbf98ee32a71.svg#8e63fd1e-adc9-460e-9ef7-bbf98ee32a71\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Museo-Slab-W01-100\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/01ab709f-22cf-4831-b24a-8cf4eb852687.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/01ab709f-22cf-4831-b24a-8cf4eb852687.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cacc0862-f146-4746-92b1-60e6114a66c4.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/54006f54-b61e-4103-abf8-b1d0294a2a9c.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e5841f2e-b306-4583-bfc3-a0e06742fedd.svg#e5841f2e-b306-4583-bfc3-a0e06742fedd\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Geotica-W01-Four-Open\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/91cc94e6-2c98-4b42-aaec-086abb6a9370.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/91cc94e6-2c98-4b42-aaec-086abb6a9370.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cc0b2292-9358-41ee-b3b9-429952586f69.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8558b493-da55-4e6f-b473-56d9c7dff2a4.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ee507e8d-069a-4cb6-b184-62b1f3ab0102.svg#ee507e8d-069a-4cb6-b184-62b1f3ab0102\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Marzo-W00-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/45563891-20ab-4087-b16c-b3cfc26faac1.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/45563891-20ab-4087-b16c-b3cfc26faac1.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e947b76a-edcf-4519-bc3d-c2da35865717.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c09cb36e-5e79-4033-b854-41e57fbf44fa.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f4245069-28b7-43b7-8a10-708b9f3c398b.svg#f4245069-28b7-43b7-8a10-708b9f3c398b\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"ReklameScriptW00-Medium\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5af7511a-dccc-450d-b2a2-bb8e3bb62540.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5af7511a-dccc-450d-b2a2-bb8e3bb62540.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/05b176f5-c622-4c35-af98-c0c056dd5b66.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9dcb5a3c-1c64-4c9c-a402-995bed762eb7.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/1e87d66a-d7f1-4869-8430-51662777be57.svg#1e87d66a-d7f1-4869-8430-51662777be57\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Nimbus-Sans-TW01Con\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2101adaa-6a98-4fa9-b085-3b04c3722637.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2101adaa-6a98-4fa9-b085-3b04c3722637.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8fb1090e-b4d0-4685-ac8f-3d0c29d60130.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5d5fc44e-e84b-48ca-a5a7-bed8bdbf79a1.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/24512b2a-e22d-4ebb-887c-a334d039433c.svg#24512b2a-e22d-4ebb-887c-a334d039433c\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Bodoni-W01-Poster\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ab0e3d15-2f64-49c1-8898-817a2235e719.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ab0e3d15-2f64-49c1-8898-817a2235e719.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4d1b9848-7ebd-472c-9d31-4af0aa7faaea.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/197b5ef7-65e6-4af6-9fd9-bc9fc63038c7.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a9bda117-c293-40b5-a2d8-9f923f32623c.svg#a9bda117-c293-40b5-a2d8-9f923f32623c\") format(\"svg\");\r\n}\r\n\r\n/* Mobile system fallbacks */\r\n\r\n@font-face {\r\n  font-family: \"Comic-Sans-W01-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0d67e115-f220-4a6a-81c2-ae0035bda922.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0d67e115-f220-4a6a-81c2-ae0035bda922.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/234c98b8-36ae-45ab-8a55-77980708b2bc.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7ff2970c-1d51-47be-863d-b33afda8fb40.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f1afa7d8-abee-4268-9cf8-85d43150fdb1.svg#f1afa7d8-abee-4268-9cf8-85d43150fdb1\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Courier-PS-W01\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b2977c8d-4907-4cc3-b5ed-3dec9ca68102.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b2977c8d-4907-4cc3-b5ed-3dec9ca68102.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b059d02a-a222-4c63-9fd3-705eaeea1c16.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/52e3d484-7188-4c9e-964e-b7a75e9dfa2f.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c2182c36-8eb4-4a56-a0ff-dba7492ce96c.svg#c2182c36-8eb4-4a56-a0ff-dba7492ce96c\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Impact-W01-2010\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9ae7059b-dd17-4a4c-8872-5cb4dd551277.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9ae7059b-dd17-4a4c-8872-5cb4dd551277.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4cefdf47-0136-4169-9933-3225dbbec9d9.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f7450934-42f3-4193-befa-c825772a9454.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/25aa5449-ccc1-4f0e-ab3f-4cf3b959208f.svg#25aa5449-ccc1-4f0e-ab3f-4cf3b959208f\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Lucida-Console-W01\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/527cb305-deee-4810-b337-67756678c830.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/527cb305-deee-4810-b337-67756678c830.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/60f4a13f-3943-432a-bb51-b612e41239c5.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/38229089-ebec-4782-b8f2-304cfdcea8d8.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f855783c-1079-4396-a7b7-f7d9179145be.svg#f855783c-1079-4396-a7b7-f7d9179145be\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Tahoma-W01-Regular\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/1b155b1c-e651-4a51-9d03-0ca480aeaf9f.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/1b155b1c-e651-4a51-9d03-0ca480aeaf9f.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/20323430-24f4-4767-9d4d-060d1e89758a.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6e17e62d-30cb-4840-8e9d-328c6b62316e.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/04ab3894-45ce-42ef-aa11-e7c0cd7f7da9.svg#04ab3894-45ce-42ef-aa11-e7c0cd7f7da9\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Arial-W01-Black\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bf85e414-1b16-4cd1-8ce8-dad15daa7daa.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bf85e414-1b16-4cd1-8ce8-dad15daa7daa.eot?#iefix\") format(\"eot\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c6f5bcd6-66fc-44af-be95-bb1f2b38d080.woff\") format(\"woff\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7b5b436b-a511-402a-88d6-dbac700cee36.ttf\") format(\"truetype\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a5adcd35-c36a-4b18-953d-47c029de4ef6.svg#a5adcd35-c36a-4b18-953d-47c029de4ef6\") format(\"svg\");\r\n}\r\n\r\n/* Greek and others */\r\n\r\n@font-face{\r\n  font-family:\"Tahoma-W15--Regular\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f0dd334c-878c-442c-bda3-0dbd122e87f1.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f0dd334c-878c-442c-bda3-0dbd122e87f1.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ae844b11-5158-4caf-90b4-7ace49ac3440.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e63ef4f4-b7b9-4f13-8db5-d7f5cf89839f.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5ad2ed93-1ba0-4b2c-a421-22c5bcfb5b79.svg#5ad2ed93-1ba0-4b2c-a421-22c5bcfb5b79\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Tahoma-W99-Regular\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c3ebf729-2608-4787-9e5a-248f329aface.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c3ebf729-2608-4787-9e5a-248f329aface.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d3bbaa1b-d5e3-431f-93a7-9cea63601bb6.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/78cb924f-227d-4ab9-83d5-f2b2e6656da5.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ca045297-34e1-462e-acc8-75ef196ada02.svg#ca045297-34e1-462e-acc8-75ef196ada02\") format(\"svg\");\r\n}\r\n\r\n/*******************/\r\n\r\n@font-face {\r\n  font-family: \"Coquette-W00-Light\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b8c1ddea-29ea-42ec-8a48-32a89e792d3b.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b8c1ddea-29ea-42ec-8a48-32a89e792d3b.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4e5374b3-a214-41e5-81f0-a34c9292da7e.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c20581c8-0023-4888-aeaa-9d32636dc17f.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e514ed32-1687-47d8-8b39-423fb7664d33.svg#e514ed32-1687-47d8-8b39-423fb7664d33\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Rosewood-W01-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bd86870e-0679-4116-aa13-96aa1d6c5944.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bd86870e-0679-4116-aa13-96aa1d6c5944.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4d9bc879-ab51-45da-bf37-c9710cd1cc32.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a5564fdb-3616-4f27-a4e4-d932b6ae5b4a.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f128ef28-daf3-477b-8027-0fd8bdad2b91.svg#f128ef28-daf3-477b-8027-0fd8bdad2b91\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"segoe_printregular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/segoe_print-webfont.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/segoe_print-webfont.eot?#iefix\") format(\"eot\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/segoe_print-webfont.woff\") format(\"woff\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/segoe_print-webfont.ttf\") format(\"truetype\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/segoe_print-webfont.svg#f128ef28-daf3-477b-8027-0fd8bdad2b91\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-regular-webfont.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-regular-webfont.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-regular-webfont.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-regular-webfont.ttf') format('truetype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-regular-webfont.svg#open_sansregular') format('svg');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-bold-webfont.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-bold-webfont.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-bold-webfont.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-bold-webfont.ttf') format('truetype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-bold-webfont.svg#open_sansregular') format('svg');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-italic-webfont.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-italic-webfont.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-italic-webfont.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-italic-webfont.ttf') format('truetype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-italic-webfont.svg#open_sansregular') format('svg');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-bolditalic-webfont.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-bolditalic-webfont.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-bolditalic-webfont.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-bolditalic-webfont.ttf') format('truetype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-bolditalic-webfont.svg#open_sansregular') format('svg');\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Avenir-LT-W01_35-Light1475496\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/edefe737-dc78-4aa3-ad03-3c6f908330ed.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/edefe737-dc78-4aa3-ad03-3c6f908330ed.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0078f486-8e52-42c0-ad81-3c8d3d43f48e.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/908c4810-64db-4b46-bb8e-823eb41f68c0.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4577388c-510f-4366-addb-8b663bcc762a.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b0268c31-e450-4159-bfea-e0d20e2b5c0c.svg#b0268c31-e450-4159-bfea-e0d20e2b5c0c\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Avenir-LT-W01_85-Heavy1475544\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6af9989e-235b-4c75-8c08-a83bdaef3f66.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6af9989e-235b-4c75-8c08-a83bdaef3f66.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d513e15e-8f35-4129-ad05-481815e52625.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/61bd362e-7162-46bd-b67e-28f366c4afbe.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ccd17c6b-e7ed-4b73-b0d2-76712a4ef46b.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/20577853-40a7-4ada-a3fb-dd6e9392f401.svg#20577853-40a7-4ada-a3fb-dd6e9392f401\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"BaskervilleMTW01-SmBdIt\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0224f3fd-52d3-499a-ae2f-637a041f87f0.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0224f3fd-52d3-499a-ae2f-637a041f87f0.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c887df8e-b6c3-4c97-85b8-91cfdde77b07.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5c4d5432-75c4-4f6b-a6e7-8af4d54a33d1.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2ee46b89-b7cb-4bbe-9d60-b7ca4354b706.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9714d635-13b3-48b2-9315-5d0f72a69ab9.svg#9714d635-13b3-48b2-9315-5d0f72a69ab9\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Belinda-W00-Regular\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/63d38753-a8d9-4262-b844-3a007ad848b4.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/63d38753-a8d9-4262-b844-3a007ad848b4.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/242487aa-209a-4dbd-aca2-64a3c73a8946.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4381b252-d9f8-4201-bbf3-9440e21259e7.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/46c2c4f2-cd15-4b7b-a4b4-aa04dbbd1655.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/334f8999-3703-47f3-b147-96b6dc3bf4b2.svg#334f8999-3703-47f3-b147-96b6dc3bf4b2\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Brandon-Grot-W01-Light\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e00ba30a-0bf3-4c76-9392-8641fa237a92.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e00ba30a-0bf3-4c76-9392-8641fa237a92.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/69b40392-453a-438a-a121-a49e5fbc9213.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9362bca5-b362-4543-a051-2129e2def911.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/85060878-ca6c-43cc-ac31-7edccfdca71b.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/47f089a6-c8ce-46fa-b98f-03b8c0619d8a.svg#47f089a6-c8ce-46fa-b98f-03b8c0619d8a\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Bree-W01-Thin-Oblique\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4e33bf74-813a-4818-8313-6ea9039db056.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4e33bf74-813a-4818-8313-6ea9039db056.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ceb3b4a3-0083-44ae-95cb-e362f95cc91b.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4d716cea-5ba0-437a-b5a8-89ad159ea2be.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c458fc09-c8dd-4423-9767-e3e27082f155.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/85ffb31e-78ee-4e21-83d8-4313269135a9.svg#85ffb31e-78ee-4e21-83d8-4313269135a9\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Adobe-Caslon-W01-SmBd\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d2804130-67b0-4fcf-98fe-d781df92a56e.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d2804130-67b0-4fcf-98fe-d781df92a56e.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/becfadb1-eaca-4817-afbd-fe4d61e1f661.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6530bac7-21ac-4e52-a014-dce6a8d937ab.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b34e8a45-c92d-4402-89bc-43cc51c6b4e0.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0804bb4a-399c-4547-9fa8-0acf6268d8f6.svg#0804bb4a-399c-4547-9fa8-0acf6268d8f6\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Didot-W01-Italic\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9c2cfd19-472b-4ef5-ad73-43eee68dc43b.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9c2cfd19-472b-4ef5-ad73-43eee68dc43b.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/abe3d3a9-c990-459f-9407-54ac96cd2f00.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/09a4b57b-7400-4d30-b4ba-d6e303c57868.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a0cb08d5-975f-4c8d-bcdc-d771a014d92a.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/86d60a09-e8f8-4003-b688-0f8a2aba6532.svg#86d60a09-e8f8-4003-b688-0f8a2aba6532\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Futura-LT-W01-Light\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2b40e918-d269-4fd9-a572-19f5fec7cd7f.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2b40e918-d269-4fd9-a572-19f5fec7cd7f.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/26091050-06ef-4fd5-b199-21b27c0ed85e.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cca525a8-ad89-43ae-aced-bcb49fb271dc.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/88cc7a39-1834-4468-936a-f3c25b5d81a1.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/14d6bf5d-15f1-4794-b18e-c03fb9a5187e.svg#14d6bf5d-15f1-4794-b18e-c03fb9a5187e\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Futura-LT-W01-Book\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cf053eae-ba1f-44f3-940c-a34b68ccbbdf.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cf053eae-ba1f-44f3-940c-a34b68ccbbdf.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8bf38806-3423-4080-b38f-d08542f7e4ac.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e2b9cbeb-fa8e-41cd-8a6a-46044b29ba52.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c2a69697-4f06-4764-abd4-625031a84e31.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/dc423cc1-bf86-415c-bc7d-ad7dde416a34.svg#dc423cc1-bf86-415c-bc7d-ad7dde416a34\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Kepler-W03-Light-SCd-Cp\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/fc00d5ae-6d96-4b5c-b68b-4f5bdb562c98.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/fc00d5ae-6d96-4b5c-b68b-4f5bdb562c98.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b2b1472c-55f2-478a-a9c9-9373214a27e5.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/20f7861b-3ff7-47f3-b0f5-1e0626824a63.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5c51e7a0-6ecc-46eb-a9ee-376f8c4073af.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/37bea6d0-2f14-4e48-a76f-fd85171dcf26.svg#37bea6d0-2f14-4e48-a76f-fd85171dcf26\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Lulo-Clean-W01-One-Bold\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0163ac22-50a7-406e-aa64-c62ee6fbf3d7.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0163ac22-50a7-406e-aa64-c62ee6fbf3d7.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/aee74cb3-c913-4b54-9722-6001c92325f2.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/80de9d5d-ab5f-40ce-911b-104e51e93d7c.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/1b46b05b-cfdd-4d82-8c2f-5c6cfba1fe60.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/be340f0b-a2d4-41df-acb1-4dc124330a88.svg#be340f0b-a2d4-41df-acb1-4dc124330a88\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Proxima-N-W01-Reg\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7e90123f-e4a7-4689-b41f-6bcfe331c00a.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7e90123f-e4a7-4689-b41f-6bcfe331c00a.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/64017d81-9430-4cba-8219-8f5cc28b923e.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e56ecb6d-da41-4bd9-982d-2d295bec9ab0.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2aff4f81-3e97-4a83-9e6c-45e33c024796.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ab9cd062-380f-4b53-b1a7-c0bec7402235.svg#ab9cd062-380f-4b53-b1a7-c0bec7402235\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Trend-Sans-W00-Four\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/392aa98f-a1bf-4dc4-9def-a5d27c73a0de.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/392aa98f-a1bf-4dc4-9def-a5d27c73a0de.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/29c66f1e-5243-4f34-8a19-47405f72954c.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c81cca03-5f1a-4252-9950-096e60e2bde9.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/569b48ce-f71b-4e2d-a80a-1920efbd7187.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f284409f-3669-43df-bfe1-f9f9ee1bbc07.svg#f284409f-3669-43df-bfe1-f9f9ee1bbc07\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"DINNeuzeitGroteskLTW01-_812426\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b41558bd-2862-46c0-abf7-536d2542fa26.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b41558bd-2862-46c0-abf7-536d2542fa26.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/388ef902-2c31-4818-abb1-a40dcd81f6d6.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/29c60077-2614-4061-aa8d-5bcfdf7354bb.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/76250d27-b353-4f3b-90c6-0ff635fabaab.svg#76250d27-b353-4f3b-90c6-0ff635fabaab\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Peaches-and-Cream-Regular-W00\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2250f930-9a6d-4486-a0eb-6b407c5d6c9b.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2250f930-9a6d-4486-a0eb-6b407c5d6c9b.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3c5beda8-45cc-4f76-abca-8eccfeb6220c.woff2\") format(\"woff2\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b36b499f-d776-461c-bacb-fcbebe1cb9b4.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/896d3828-26ce-462a-9f70-62e0b5c90a70.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0dccbec2-a882-4dd9-8da0-3a035c808ce0.svg#0dccbec2-a882-4dd9-8da0-3a035c808ce0\") format(\"svg\");\r\n}\r\n\r\n/* latin-ext */\r\n\r\n@font-face {\r\n  font-family: \"Helvetica-W02-Roman\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e4bd4516-4480-43df-aa6e-4e9b9029f53e.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e4bd4516-4480-43df-aa6e-4e9b9029f53e.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b56b944e-bbe0-4450-a241-de2125d3e682.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7da02f05-ae8b-43a1-aeb9-83b3c0527c06.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/66cac56e-d017-4544-9d0c-f7d978f0c5c2.svg#66cac56e-d017-4544-9d0c-f7d978f0c5c2\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Helvetica-W02-Bold\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8c0d8b0f-d7d6-4a72-a418-c2373e4cbf27.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8c0d8b0f-d7d6-4a72-a418-c2373e4cbf27.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/192dac76-a6d9-413d-bb74-22308f2e0cc5.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/47584448-98c4-436c-89b9-8d6fbeb2a776.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/375c70e5-6822-492b-8408-7cd350440af7.svg#375c70e5-6822-492b-8408-7cd350440af7\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Clarendon-W02-Medium-693834\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/be976e1d-6edc-4a1b-b50e-a6d326b5a02f.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/be976e1d-6edc-4a1b-b50e-a6d326b5a02f.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/01681361-4a95-4651-a6c8-4005d0fc4a79.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/fdc26895-148e-4fa8-898d-5eb459dabecf.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d59136e2-c38a-4ad4-8dec-2d258c12fd80.svg#d59136e2-c38a-4ad4-8dec-2d258c12fd80\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"DIN-Next-W02-Light\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/48e5a0e1-2d56-46e5-8fc4-3d6d5c973cbf.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/48e5a0e1-2d56-46e5-8fc4-3d6d5c973cbf.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/07d62b21-8d7a-4c36-be86-d32ab1089972.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c0050890-bbed-44b9-94df-2611d72dbb06.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9f774d17-c03a-418e-a375-34f3beecbc7a.svg#9f774d17-c03a-418e-a375-34f3beecbc7a\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"AmericanTypwrterITCW02--737091\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/04bcef92-4ec9-4491-9f06-433987df0eea.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/04bcef92-4ec9-4491-9f06-433987df0eea.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4e5713c6-f9bf-44d7-bc17-775b7c102f1c.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/80e40eb9-815f-4b42-9e99-297117a6ef52.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/25bb0c90-be7f-4dfc-bfff-5cd159d09832.svg#25bb0c90-be7f-4dfc-bfff-5cd159d09832\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Helvetica-W02-Light\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ff80873b-6ac3-44f7-b029-1b4111beac76.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ff80873b-6ac3-44f7-b029-1b4111beac76.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/80c34ad2-27c2-4d99-90fa-985fd64ab81a.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b8cb02c2-5b58-48d8-9501-8d02869154c2.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/92c941ea-2b06-4b72-9165-17476d424d6c.svg#92c941ea-2b06-4b72-9165-17476d424d6c\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Soho-W02-Thin-Condensed\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/61d1e245-4016-4f23-ad7a-409a44cabe90.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/61d1e245-4016-4f23-ad7a-409a44cabe90.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/68eb3cfd-be6c-4f9e-8ca4-e13ce8d29329.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6db04d94-de0b-4bf0-bf94-113fd27e7440.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/84e110e9-fd29-4036-b9ad-27968a6ba793.svg#84e110e9-fd29-4036-b9ad-27968a6ba793\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Avenida-W02\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/131201ff-3951-4583-b4d9-2bc668927583.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/131201ff-3951-4583-b4d9-2bc668927583.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/582278da-0505-4fbe-9102-2b529c7c973a.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b82fbde2-1655-4728-96a9-90ef022c4590.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d325b64f-214b-4fc0-80d6-4c61621cd542.svg#d325b64f-214b-4fc0-80d6-4c61621cd542\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Droid-Serif-W02-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/872d17cf-70ac-4722-b8ef-0f1578125042.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/872d17cf-70ac-4722-b8ef-0f1578125042.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/764779cf-076d-427a-87b4-136ccc83fba0.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f32cc734-5673-41a1-bd6e-1900c78691f5.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f627e21b-c1a5-4e7a-b072-37391ee8dcef.svg#f627e21b-c1a5-4e7a-b072-37391ee8dcef\") format(\"svg\");\r\n}\r\n\r\n/* Mobile system fallbacks */\r\n\r\n@font-face {\r\n  font-family: \"Comic-Sans-W02-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6a8b1499-f534-46fe-a0af-835bc83226cd.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6a8b1499-f534-46fe-a0af-835bc83226cd.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/301e2ea2-8153-453c-9051-0a729098e682.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cbe882c0-2ac0-4a28-8fe7-14e527942047.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ec680f09-6b07-442d-ab11-cea208cc138d.svg#ec680f09-6b07-442d-ab11-cea208cc138d\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Courier-PS-W02\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/440875eb-e437-41fc-8aae-b5658bbea3b7.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/440875eb-e437-41fc-8aae-b5658bbea3b7.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bcc470b9-5a9b-45e9-bf60-6daca06bc70e.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f9018056-f579-4c4c-95ea-9bd02b859724.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f6d0e775-b2fc-4bc8-8967-cd78486d451c.svg#f6d0e775-b2fc-4bc8-8967-cd78486d451c\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Impact-W02-2010\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/02fb45ce-d7cc-491c-a176-e2a883a632b2.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/02fb45ce-d7cc-491c-a176-e2a883a632b2.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/eb1185bb-8f9d-4855-83fa-d06f0efef677.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5386718d-bec6-41c5-b998-12dd1c859c53.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/01aba52b-d32b-41fc-a681-d7b4dfa43041.svg#01aba52b-d32b-41fc-a681-d7b4dfa43041\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Lucida-Console-W02\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5606db21-eb18-48fa-979b-63bdf28555c0.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5606db21-eb18-48fa-979b-63bdf28555c0.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3e5b24ea-4345-4830-8c7d-0e7ef26b4e63.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7b175f51-ff6c-47d2-908c-ee8538c2880d.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bd1a6a52-e0c2-4a1b-b5a4-2d25ec2b5706.svg#bd1a6a52-e0c2-4a1b-b5a4-2d25ec2b5706\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Tahoma-W02-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bb223dcd-0a16-4e5a-b38b-4f2a29f2bcbb.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bb223dcd-0a16-4e5a-b38b-4f2a29f2bcbb.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/94e45703-fbd7-46e5-9fcd-228ae59d6266.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ef282b80-58de-4b03-a90f-c5703d54e3b7.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cb11dfc6-f3c4-4a58-83ac-df735ba9c428.svg#cb11dfc6-f3c4-4a58-83ac-df735ba9c428\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Rosewood-W08-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f432fcbc-ae52-4db1-a4b3-c7145e69b3b6.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f432fcbc-ae52-4db1-a4b3-c7145e69b3b6.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/62a23651-230c-4724-b2c0-087544ed1a27.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e46f32da-eb61-45e5-a1b8-49f3a5f782f8.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9e73fac6-b45b-4ac5-a601-9a0d70cd45b2.svg#9e73fac6-b45b-4ac5-a601-9a0d70cd45b2\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Arial-W02-Black\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c06088a2-994d-44b4-9b38-55d2ae9e13a9.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c06088a2-994d-44b4-9b38-55d2ae9e13a9.eot?#iefix\") format(\"eot\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/41280d6d-9240-4d82-9e98-3ea1a1913501.woff\") format(\"woff\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bc33f504-28ac-46ae-b258-d4fd1f599c47.ttf\") format(\"truetype\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0faa6338-fe10-42e6-9346-2c6626ddcd73.svg#0faa6338-fe10-42e6-9346-2c6626ddcd73\") format(\"svg\");\r\n}\r\n\r\n/* cyrillic */\r\n\r\n@font-face {\r\n  font-family: \"DIN-Next-W10-Light\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3d009cd7-c8fe-40c0-93da-74f4ea8c530b.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3d009cd7-c8fe-40c0-93da-74f4ea8c530b.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a9e95a29-98a7-404a-90ee-1929ad09c696.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0a7663fd-eae8-4e50-a67a-225271f8cceb.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/58ae9be9-5d95-44b6-8b6c-e6da6a46822c.svg#58ae9be9-5d95-44b6-8b6c-e6da6a46822c\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Helvetica-LT-W10-Bold\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9fe262dc-5a55-4d75-91a4-aed76bd32190.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9fe262dc-5a55-4d75-91a4-aed76bd32190.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0a3939d0-3833-4db3-8b85-f64c2b3350d2.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/1b128d6d-126f-4c9c-8f87-3e7d30a1671c.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b791c850-fde1-48b3-adf0-8998d55b0866.svg#b791c850-fde1-48b3-adf0-8998d55b0866\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Helvetica-LT-W10-Roman\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/686a6a06-e711-4bd2-b393-8504a497bb3c.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/686a6a06-e711-4bd2-b393-8504a497bb3c.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6f8d1983-4d34-4fa4-9110-988f6c495757.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7903ee3f-e9ab-4bdc-b7d2-d232de2da580.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9c58e9ea-fdea-4b9c-b0f9-0a2157389ed0.svg#9c58e9ea-fdea-4b9c-b0f9-0a2157389ed0\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Bodoni-Poster-W10\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3f2ac2b4-0662-446d-8b8a-51738492ea04.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3f2ac2b4-0662-446d-8b8a-51738492ea04.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e04da7b7-ccbf-4cbf-b19a-947551d17de6.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cb3483cd-190a-4634-b345-d88f22f1e6f5.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/fea2ad42-3ce1-43c4-b571-39159cc109a6.svg#fea2ad42-3ce1-43c4-b571-39159cc109a6\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Droid-Serif-W10-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d039cfc8-41eb-46d5-ad1a-faf4f0d26222.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d039cfc8-41eb-46d5-ad1a-faf4f0d26222.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/571d67cb-de3d-41af-8c0a-06a53d490466.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/70f941f5-d702-4e7b-8b15-ee65e6b855b9.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e0ffd68e-55a8-4537-b2d1-c51865ac15ee.svg#e0ffd68e-55a8-4537-b2d1-c51865ac15ee\") format(\"svg\");\r\n}\r\n\r\n/* Mobile system fallbacks */\r\n\r\n@font-face {\r\n  font-family: \"Comic-Sans-W10-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6ea78fbd-72da-406c-bd23-556297e62ebb.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6ea78fbd-72da-406c-bd23-556297e62ebb.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/73381861-eb6a-4f7c-8c14-cd34a714f943.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/93adf2cf-f54c-4a73-8ec7-43fe0b2c91a1.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a89d4dba-ce62-4aaa-8187-bea28a2b3a90.svg#a89d4dba-ce62-4aaa-8187-bea28a2b3a90\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Courier-PS-W10\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/efcef8d3-4e54-4965-a5f0-67f288d40c0a.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/efcef8d3-4e54-4965-a5f0-67f288d40c0a.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2593bfe2-2f34-4218-a1e2-fde3bdc686e1.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e84e67b7-d822-43f4-80a9-315fddffd712.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7bbc8148-b9e2-49ad-bd2a-b6a8ba78efa6.svg#7bbc8148-b9e2-49ad-bd2a-b6a8ba78efa6\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Impact-W10-2010\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2f6579cb-5ade-4b70-a96a-8fe9485fe73f.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2f6579cb-5ade-4b70-a96a-8fe9485fe73f.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/1c7b5ef1-5b09-4473-8003-a974846653a7.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/805172a0-d718-48ac-9053-873641b3e236.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/1979f98e-b074-4385-81b0-772f28a00668.svg#1979f98e-b074-4385-81b0-772f28a00668\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Lucida-Console-W10-0\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e9678295-b67a-4b01-bfb4-a357fa5dd939.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e9678295-b67a-4b01-bfb4-a357fa5dd939.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2c0bffef-a666-4646-a4bc-7faf1fa689f5.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4696d714-e3c0-4351-9df8-2e4449d30c3d.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/936712ee-6903-4ab8-b6ad-99e7ca1721d0.svg#936712ee-6903-4ab8-b6ad-99e7ca1721d0\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Tahoma-W10-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/50c03b26-fd3d-4fa1-96d0-d88b72129c4f.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/50c03b26-fd3d-4fa1-96d0-d88b72129c4f.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9ee00678-b6d7-4b4f-8448-70cfa267d36b.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6861fb60-a657-44e2-92fa-86bd26cd2657.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bf5f466c-6f51-449d-91b3-32f1f0c2b796.svg#bf5f466c-6f51-449d-91b3-32f1f0c2b796\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Arial-W10-Black\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/26819459-0b68-486b-ae05-2ecdbd222feb.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/26819459-0b68-486b-ae05-2ecdbd222feb.eot?#iefix\") format(\"eot\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7cfb7eb0-2332-4048-a7f4-2c3fa389c3a3.woff\") format(\"woff\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2edafc36-cb97-4b1a-8803-a7b2e6125929.ttf\") format(\"truetype\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/00760470-0987-4c68-844d-564282fc8ff9.svg#00760470-0987-4c68-844d-564282fc8ff9\") format(\"svg\");\r\n}\r\n\r\n/* korean */\r\n\r\n@font-face {\r\n  font-family: \"FBBlueGothicL\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/902109a4-ea36-40b3-a234-05747684a610.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/902109a4-ea36-40b3-a234-05747684a610.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/1a10c1c0-157a-4f57-96c1-1af2fc242e06.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/31b02a27-3c41-4593-bfbf-84702627c9fd.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e4aaa0ee-fcdd-4558-9d8e-be75c6b8c417.svg#e4aaa0ee-fcdd-4558-9d8e-be75c6b8c417\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"FBChamBlue\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3df084ed-47e4-4347-91c7-44d290c2c093.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3df084ed-47e4-4347-91c7-44d290c2c093.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/75c0e570-e4e0-4e86-a031-1ade01e5b3f5.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b9eacc4f-ef9b-4ff5-bf09-ffca8edc43e2.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/12333ad5-3ac0-4a7d-b109-6d8c8101515a.svg#12333ad5-3ac0-4a7d-b109-6d8c8101515a\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"FBGreen\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/89bbab6a-1291-4439-9384-bc7e36aae8e0.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/89bbab6a-1291-4439-9384-bc7e36aae8e0.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/399c1f00-ff31-4f87-868c-bcbfcabcdd51.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ad6cc8e5-052c-4d6c-ab7b-66b2f70edb5f.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0045c511-e366-4e81-bd42-131808ac750f.svg#0045c511-e366-4e81-bd42-131808ac750f\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"FBNeoGothic\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3323e5a2-cefa-4887-9de9-9fd287987664.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3323e5a2-cefa-4887-9de9-9fd287987664.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c52a9d59-984f-45b4-bfd7-6f6af54eb89f.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/58e6245d-754a-4a05-9bd2-25a655e31640.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/29c28905-cc56-4077-86f5-917ad8e34c1c.svg#29c28905-cc56-4077-86f5-917ad8e34c1c\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"FBPlum\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/837a8a7f-bb60-42ed-a5bc-c9368cc1ecba.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/837a8a7f-bb60-42ed-a5bc-c9368cc1ecba.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/101fd386-ed60-4ed9-8ac2-80d0492347ac.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5539addf-e60b-4fba-a356-cbab8abd16c6.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6329eea0-a953-45d7-9074-6f0594e27df7.svg#6329eea0-a953-45d7-9074-6f0594e27df7\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"NanumGothic-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/nanum-gothic-regular.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/nanum-gothic-regular.eot?#iefix\") format(\"eot\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/nanum-gothic-regular.woff\") format(\"woff\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/nanum-gothic-regular.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"BM-HANNA\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/bm-hanna.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/bm-hanna.eot?#iefix\") format(\"eot\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/bm-hanna.woff\") format(\"woff\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/bm-hanna.ttf\") format(\"truetype\");\r\n}\r\n\r\n/* arabic */\r\n\r\n@font-face {\r\n  font-family: \"AhmedLTW20-OutlineRegul\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3b019dda-5201-4a96-ab40-449f0785e578.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3b019dda-5201-4a96-ab40-449f0785e578.eot?#iefix\") format(\"eot\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bc9495bd-5edc-4c5b-be28-dfb45e27e688.woff\") format(\"woff\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bcaca41c-2840-4aef-9fb4-f0c66589e9cd.ttf\") format(\"truetype\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b5000ada-6fa4-4aae-8c7e-6e6abda2be56.svg#b5000ada-6fa4-4aae-8c7e-6e6abda2be56\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Arian-LT-W20-Light\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3e151393-e605-418c-8050-fb734e7b64b3.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3e151393-e605-418c-8050-fb734e7b64b3.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c977bad6-94c3-457c-9771-d8e0017a33c2.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a7bdf7c7-b425-4dae-b583-9f86ec510f9f.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/da80aad9-b3bc-417c-963f-b9033a872ec1.svg#da80aad9-b3bc-417c-963f-b9033a872ec1\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Arian-LT-W20-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/64ef878b-c690-447b-a020-f4491b2de821.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/64ef878b-c690-447b-a020-f4491b2de821.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c257a373-9919-458c-b7b2-83850775058d.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/afa67eb7-2358-4d1d-bdcd-da0436f5cfb2.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/57ba934e-c7af-4166-a22c-48eaf65f26bb.svg#57ba934e-c7af-4166-a22c-48eaf65f26bb\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Janna-LT-W20-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a9c47d30-0eca-434f-8082-ac141c4c97b3.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a9c47d30-0eca-434f-8082-ac141c4c97b3.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/26c24286-5aab-4747-81b9-54330e77fb14.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9c4c7fff-85b6-442f-9726-af5f49d49e53.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a24f53ee-e15e-4931-89a3-b6f17fbfcd72.svg#a24f53ee-e15e-4931-89a3-b6f17fbfcd72\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Kufi-LT-W20-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/774ebfa2-6ac0-48cf-8c15-1394d7bab265.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/774ebfa2-6ac0-48cf-8c15-1394d7bab265.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e0e311dc-5674-493c-8c19-f0a0a1422837.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/96829dee-2b11-4389-a3b6-35eabd423234.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e7b93a7e-e623-4628-809c-4ae5df08148b.svg#e7b93a7e-e623-4628-809c-4ae5df08148b\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"HelveticaNeueLTW20-Ligh\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ab7f002d-5f09-4a65-b7ad-9f01ec5bfaf0.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ab7f002d-5f09-4a65-b7ad-9f01ec5bfaf0.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b8ee7e47-48e4-4b5b-8a74-cf02708fb54a.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/074fa346-a8c5-4331-9d93-7a06123af067.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e953f49c-15a9-4394-97dd-a3f230e12e0b.svg#e953f49c-15a9-4394-97dd-a3f230e12e0b\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Midan-W20\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4d56c718-5282-4923-867f-763af2fa8575.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4d56c718-5282-4923-867f-763af2fa8575.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/be87d34b-77db-4286-87d9-d2964115c6c5.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/539016b8-1f78-4507-b542-c9e55b269ac6.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3b8c2857-0ab3-4ea6-90bc-9928bf53340c.svg#3b8c2857-0ab3-4ea6-90bc-9928bf53340c\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"TanseekModernW20-Light\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/73d94c9b-15bd-4af9-bda1-c5ee4ed1c409.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/73d94c9b-15bd-4af9-bda1-c5ee4ed1c409.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/688d77ff-8c0d-4baf-ac95-f45c034e1caf.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/177fb002-a619-4d25-8a79-af7d0e9a1ee6.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4fa09e39-beb9-46ca-bfcc-f9518ab4a9bd.svg#4fa09e39-beb9-46ca-bfcc-f9518ab4a9bd\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"DINNextLTW23-UltraLight\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b4a0535b-3a89-43bd-b3fb-b6619d0b0a09.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b4a0535b-3a89-43bd-b3fb-b6619d0b0a09.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/63b0b154-64e6-4846-be80-b601f3ce9b28.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f3f08f13-d46f-4589-90ac-70c0a21cd061.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/10870395-15e4-40b0-8f7e-5ffab7195224.svg#10870395-15e4-40b0-8f7e-5ffab7195224\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"ArabicTypesettingW23-Re\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/28b4ce0b-3a59-4f7c-ab3f-909d63dd0351.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/28b4ce0b-3a59-4f7c-ab3f-909d63dd0351.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5a32e87e-0f32-4971-a43f-4ec453bc74ca.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/50f516bf-5611-4134-9556-2131aaea2b78.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8db4ca73-82e1-4259-afcd-c1f15b14f62b.svg#8db4ca73-82e1-4259-afcd-c1f15b14f62b\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"CoHeadlineW23-ArabicBol\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/925638f2-9ed0-4f9a-a78d-61d6eddd2b54.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/925638f2-9ed0-4f9a-a78d-61d6eddd2b54.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b15a6899-c706-46a9-8c2b-a80b62ba301b.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/36ad9b9b-5fb9-49e6-ad2d-1daafccea16a.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/05e393a0-71df-4e02-b8ba-6f68f2b23b92.svg#05e393a0-71df-4e02-b8ba-6f68f2b23b92\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:'Amiri';\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/amiri-regular.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/amiri-regular.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/amiri-regular.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/amiri-regular.ttf') format('truetype');\r\n}\r\n\r\n@font-face{\r\n  font-family:'Droid-Naskh';\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/droidnaskh-regular.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/droidnaskh-regular.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/droidnaskh-regular.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/droidnaskh-regular.ttf') format('truetype');\r\n}\r\n\r\n/* hebrew */\r\n\r\n@font-face {\r\n  font-family: \"Adler-W26-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8fa9b915-180f-4b72-aee7-22fd066c52c6.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8fa9b915-180f-4b72-aee7-22fd066c52c6.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/fcb3f76f-a112-479e-ab7f-ab1c2be906c9.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ceda4e97-a631-4986-8cab-709e1775be33.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/353c7faf-0d58-475b-8caa-f1d863e0cf1d.svg#353c7faf-0d58-475b-8caa-f1d863e0cf1d\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Frank-Ruhl-W26-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/90882399-52f1-42a9-986b-c2c49d3fb409.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/90882399-52f1-42a9-986b-c2c49d3fb409.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0e834425-e268-4b38-b5a8-f24b8632d6ae.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/cb5aceab-5dbf-4c09-b650-7c9d526cc117.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/850e45c9-2003-49fa-8e3f-c7dfd6579acc.svg#850e45c9-2003-49fa-8e3f-c7dfd6579acc\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Haim-Arukeem-W26-Medium\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6de8df0c-23af-49b9-9578-42db4c756d2d.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6de8df0c-23af-49b9-9578-42db4c756d2d.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f70c24b0-d6be-4d04-99cd-46efc41d00b4.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/2dd64ac4-7c3a-47fb-acdb-063b811c93d5.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a7ab1444-5d94-4474-9d31-86df47d8d5c1.svg#a7ab1444-5d94-4474-9d31-86df47d8d5c1\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Miriam-W26-Medium\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/acfa87dd-5042-40e1-87e9-12e4a559269f.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/acfa87dd-5042-40e1-87e9-12e4a559269f.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/21aeb0a3-3309-4415-818b-36f94e2a1a3a.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c5acaffd-7553-42ff-a693-8b9be795b4b3.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/dd50d8fb-6769-469f-8bfa-9caed8e6df18.svg#dd50d8fb-6769-469f-8bfa-9caed8e6df18\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Nekudot-W26-Bold\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c0a57107-844c-4847-afc6-00f3cb3c4d5f.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c0a57107-844c-4847-afc6-00f3cb3c4d5f.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c28b65cd-9544-42f1-9ffc-d6ffa544e6fb.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9aa74607-c9af-4c4b-9a3f-fc76488dca25.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/00381de4-f82a-4939-b8e1-1bbde51ac4ce.svg#00381de4-f82a-4939-b8e1-1bbde51ac4ce\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Gulash-W26-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7c672276-1d07-4ff2-8b1d-3245af0dc5cc.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7c672276-1d07-4ff2-8b1d-3245af0dc5cc.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/64f53eeb-1d5e-493c-aa3b-aa8e2c066320.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7e32a874-81bc-4d38-87aa-ff626ce5a400.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/857d7efc-7a9c-457d-8aa5-44f0992e6441.svg#857d7efc-7a9c-457d-8aa5-44f0992e6441\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Shabazi-W26-Bold\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/dc7f3c57-fb2d-4656-9224-ef9f1c88477e.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/dc7f3c57-fb2d-4656-9224-ef9f1c88477e.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/09048cb1-f6a6-4b44-9d96-6d20013ef7e8.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/fec4486e-254a-4cb4-b1a0-859cf2190792.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b25da79b-ff9a-486e-bf4f-2893c47da939.svg#b25da79b-ff9a-486e-bf4f-2893c47da939\") format(\"svg\");\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Chips-W26-Normal\";\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/aa157336-ffa1-476e-9a72-e9f516e87ca3.eot?#iefix\");\r\n  src:url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/aa157336-ffa1-476e-9a72-e9f516e87ca3.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e526922d-4fe2-4e4d-834d-6b62ebd244da.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/03e7eb16-072f-4c53-b299-08535bff2421.ttf\") format(\"truetype\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b21a0ec6-8efb-40de-99f1-20a11d482401.svg#b21a0ec6-8efb-40de-99f1-20a11d482401\") format(\"svg\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Alef-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/alef-regular.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/alef-regular.eot?#iefix\") format(\"eot\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/alef-regular.woff\") format(\"woff\"),url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/alef-regular.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"OpenSansHebrewCondensed-Regular\";\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-hebrew-condensed-regular.eot?#iefix\");\r\n  src: url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-hebrew-condensed-regular.eot?#iefix\") format(\"eot\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-hebrew-condensed-regular.woff\") format(\"woff\"),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-hebrew-condensed-regular.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face{\r\n  font-family:'almoni-dl-aaa-300';\r\n  font-weight:300; /*(light)*/\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-300.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-300.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-300.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-300.ttf') format('truetype');\r\n}\r\n\r\n@font-face{\r\n  font-family:'almoni-dl-aaa-400';\r\n  font-weight:400; /*(regular)*/\r\n  font-style: normal;\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-400.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-400.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-400.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-400.ttf') format('truetype');\r\n}\r\n\r\n@font-face{\r\n  font-family:'almoni-dl-aaa-700';\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-700.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-700.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-700.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/almoni-dl-aaa-700.ttf') format('truetype');\r\n}\r\n\r\n@font-face{\r\n  font-family:'asimon-aaa-400';\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/asimon-aaa-400.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/asimon-aaa-400.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/asimon-aaa-400.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/asimon-aaa-400.ttf') format('truetype');\r\n}\r\n\r\n@font-face{\r\n  font-family:'atlas-aaa-500';\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/atlas-aaa-500.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/atlas-aaa-500.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/atlas-aaa-500.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/atlas-aaa-500.ttf') format('truetype');\r\n}\r\n\r\n@font-face{\r\n  font-family:'mixtape-aaa-400';\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/mixtape-aaa-400.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/mixtape-aaa-400.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/mixtape-aaa-400.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/mixtape-aaa-400.ttf') format('truetype');\r\n}\r\n\r\n@font-face{\r\n  font-family:'museum-aaa-400';\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/museum-aaa-400.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/museum-aaa-400.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/museum-aaa-400.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/museum-aaa-400.ttf') format('truetype');\r\n}\r\n\r\n@font-face{\r\n  font-family:'omes-aaa-400';\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/omes-aaa-400.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/omes-aaa-400.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/omes-aaa-400.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/omes-aaa-400.ttf') format('truetype');\r\n}\r\n\r\n@font-face{\r\n  font-family:'MeodedPashut-oeregular';\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/meodedpashut_oeregular.eot');\r\n  src: url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/meodedpashut_oeregular.eot?#iefix') format('embedded-opentype'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/meodedpashut_oeregular.woff') format('woff'),\r\n  url('//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/meodedpashut_oeregular.ttf') format('truetype'),\r\n  url(\"//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/meodedpashut_oeregular.svg#meodedpashut_oeregular\") format(\"svg\");\r\n}\r\n\r\n/*\r\n * Open Sans Hebrew (Hebrew) http://www.google.com/fonts/earlyaccess\r\n */\r\n\r\n@font-face {\r\n  font-family: 'Open Sans Hebrew';\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-LightItalic.eot);\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-LightItalic.eot?#iefix) format('embedded-opentype'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-LightItalic.woff2) format('woff2'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-LightItalic.woff) format('woff'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-LightItalic.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Open Sans Hebrew';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Light.eot);\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Light.eot?#iefix) format('embedded-opentype'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Light.woff2) format('woff2'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Light.woff) format('woff'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Light.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Open Sans Hebrew';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Italic.eot);\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Italic.eot?#iefix) format('embedded-opentype'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Italic.woff2) format('woff2'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Italic.woff) format('woff'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Italic.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Open Sans Hebrew';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Regular.eot);\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Regular.eot?#iefix) format('embedded-opentype'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Regular.woff2) format('woff2'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Regular.woff) format('woff'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Regular.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Open Sans Hebrew';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-BoldItalic.eot);\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-BoldItalic.eot?#iefix) format('embedded-opentype'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-BoldItalic.woff2) format('woff2'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-BoldItalic.woff) format('woff'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-BoldItalic.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Open Sans Hebrew';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Bold.eot);\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Bold.eot?#iefix) format('embedded-opentype'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Bold.woff2) format('woff2'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Bold.woff) format('woff'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-Bold.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Open Sans Hebrew';\r\n  font-style: italic;\r\n  font-weight: 800;\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-ExtraBoldItalic.eot);\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-ExtraBoldItalic.eot?#iefix) format('embedded-opentype'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-ExtraBoldItalic.woff2) format('woff2'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-ExtraBoldItalic.woff) format('woff'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-ExtraBoldItalic.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Open Sans Hebrew';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-ExtraBold.eot);\r\n  src: url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-ExtraBold.eot?#iefix) format('embedded-opentype'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-ExtraBold.woff2) format('woff2'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-ExtraBold.woff) format('woff'),\r\n       url(//fonts.gstatic.com/ea/opensanshebrew/v3/OpenSansHebrew-ExtraBold.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'MyWebFont';\r\n     src:  \r\n        url('bc176270-17fa-4c78-a343-9fe52824e501.woff') format('woff'),\r\n        url('69b40392-453a-438a-a121-a49e5fbc9213.woff2') format('woff2'),\r\n        url('60be5c39-863e-40cb-9434-6ebafb62ab2b.woff') format('woff'),\r\n        url('60be5c39-863e-40cb-9434-6ebafb62ab2b.woff') format('woff'),\r\n        url('3c5beda8-45cc-4f76-abca-8eccfeb6220c.woff2') format('woff2'),\r\n        url('4021a3b9-f782-438b-aeb4-c008109a8b64.woff') format('woff'),\r\n        url('0078f486-8e52-42c0-ad81-3c8d3d43f48e.woff2') format('woff2'),\r\n        url('aee74cb3-c913-4b54-9722-6001c92325f2.woff2') format('woff2'),\r\n        url('d513e15e-8f35-4129-ad05-481815e52625.woff2') format('woff2'); \r\n  }\r\n\r\n.main_wrapper {\r\n    width: 100%;\r\n}\r\n\r\nbody, html {\r\n    font-family: 'MyWebFont' !important;\r\n}\r\n\r\nheader, .content, footer .content {\r\n    width: 72%;\r\n    margin: 0 auto;\r\n    left: 189px;\r\n    background-color: #fff;\r\n    font-family: 'MyWebFont' !important;\r\n}\r\n\r\n.content_position {\r\n    padding-top: 80px;\r\n    padding-bottom: 50px;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    display: block;\r\n  transition:all 1.0s ease-in-out;\r\n}\r\n\r\n.margin_bottom250 {\r\n    margin-bottom: 250px;\r\n}\r\n\r\n@media screen and (min-width: 300px) {\r\n    header, .content {\r\n        padding-top: 10px;\r\n        left: 0;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 480px) {\r\n\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    header, .content {\r\n        padding-top: 80px;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n    header, .content {\r\n        left: 137px;\r\n        width: 72%;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n    header, .content {\r\n        left: 137px;\r\n        width: 72%;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 1280px) {\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2xhbmd1YWdlLmNzcyIsInNyYy9hc3NldHMvY3NzL29wZW5zYW5zaGVicmV3LmNzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0VBS0U7O0FBRUYsV0FBVzs7QUFDWDtFQUNFLG1DQUFtQztFQUNuQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0Usa0NBQWtDO0VBQ2xDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSwrQkFBK0I7RUFDL0Isc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLDJDQUEyQztFQUMzQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0Usa0NBQWtDO0VBQ2xDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSx1Q0FBdUM7RUFDdkMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLGdDQUFnQztFQUNoQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsbUNBQW1DO0VBQ25DLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSx1Q0FBdUM7RUFDdkMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLDhDQUE4QztFQUM5QyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxzQ0FBc0M7RUFDdEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQixzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSx1Q0FBdUM7RUFDdkMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLDZCQUE2QjtFQUM3QixzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0Usa0NBQWtDO0VBQ2xDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxxQ0FBcUM7RUFDckMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLGlDQUFpQztFQUNqQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLGlDQUFpQztFQUNqQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVELDZCQUE2Qjs7QUFFN0I7RUFDRSxzQ0FBc0M7RUFDdEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsK0JBQStCO0VBQy9CLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxrQ0FBa0M7RUFDbEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLGlDQUFpQztFQUNqQyxxSUFBcUk7RUFDckksdWxCQUF1bEI7Q0FDeGxCOztBQUVEO0VBQ0UsOEJBQThCO0VBQzlCLHFJQUFxSTtFQUNySTs7OytLQUc2SztDQUM5Szs7QUFFRCxzQkFBc0I7O0FBRXRCO0VBQ0Usa0NBQWtDO0VBQ2xDLHFJQUFxSTtFQUNySSx1bEJBQXVsQjtDQUN4bEI7O0FBRUQ7RUFDRSxpQ0FBaUM7RUFDakMscUlBQXFJO0VBQ3JJLHVsQkFBdWxCO0NBQ3hsQjs7QUFFRCxxQkFBcUI7O0FBRXJCO0VBQ0Usa0NBQWtDO0VBQ2xDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxvQ0FBb0M7RUFDcEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLGtDQUFrQztFQUNsQyxpSUFBaUk7RUFDakk7OzswS0FHd0s7Q0FDeks7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwrSEFBK0g7RUFDL0g7OzsySkFHeUo7Q0FDMUo7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0SEFBNEg7RUFDNUg7Ozt3SkFHc0o7Q0FDdko7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw4SEFBOEg7RUFDOUg7OzswSkFHd0o7Q0FDeko7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrSUFBa0k7RUFDbEk7Ozs4SkFHNEo7Q0FDN0o7O0FBRUQ7RUFDRSw0Q0FBNEM7RUFDNUMscUlBQXFJO0VBQ3JJLG11QkFBbXVCO0NBQ3B1Qjs7QUFDRDtFQUNFLDRDQUE0QztFQUM1QyxxSUFBcUk7RUFDckksbXVCQUFtdUI7Q0FDcHVCOztBQUNEO0VBQ0Usc0NBQXNDO0VBQ3RDLHFJQUFxSTtFQUNySSxtdUJBQW11QjtDQUNwdUI7O0FBQ0Q7RUFDRSxrQ0FBa0M7RUFDbEMscUlBQXFJO0VBQ3JJLG11QkFBbXVCO0NBQ3B1Qjs7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxxSUFBcUk7RUFDckksbXVCQUFtdUI7Q0FDcHVCOztBQUNEO0VBQ0Usb0NBQW9DO0VBQ3BDLHFJQUFxSTtFQUNySSxtdUJBQW11QjtDQUNwdUI7O0FBQ0Q7RUFDRSxvQ0FBb0M7RUFDcEMscUlBQXFJO0VBQ3JJLG11QkFBbXVCO0NBQ3B1Qjs7QUFDRDtFQUNFLCtCQUErQjtFQUMvQixxSUFBcUk7RUFDckksbXVCQUFtdUI7Q0FDcHVCOztBQUNEO0VBQ0Usa0NBQWtDO0VBQ2xDLHFJQUFxSTtFQUNySSxtdUJBQW11QjtDQUNwdUI7O0FBQ0Q7RUFDRSxpQ0FBaUM7RUFDakMscUlBQXFJO0VBQ3JJLG11QkFBbXVCO0NBQ3B1Qjs7QUFDRDtFQUNFLHNDQUFzQztFQUN0QyxxSUFBcUk7RUFDckksbXVCQUFtdUI7Q0FDcHVCOztBQUNEO0VBQ0Usc0NBQXNDO0VBQ3RDLHFJQUFxSTtFQUNySSxtdUJBQW11QjtDQUNwdUI7O0FBQ0Q7RUFDRSxnQ0FBZ0M7RUFDaEMscUlBQXFJO0VBQ3JJLG11QkFBbXVCO0NBQ3B1Qjs7QUFDRDtFQUNFLGtDQUFrQztFQUNsQyxxSUFBcUk7RUFDckksbXVCQUFtdUI7Q0FDcHVCOztBQUVEO0VBQ0UsNkNBQTZDO0VBQzdDLHFJQUFxSTtFQUNySSxtdUJBQW11QjtDQUNwdUI7O0FBQ0Q7RUFDRSw0Q0FBNEM7RUFDNUMscUlBQXFJO0VBQ3JJLG11QkFBbXVCO0NBQ3B1Qjs7QUFFRCxlQUFlOztBQUVmO0VBQ0UsbUNBQW1DO0VBQ25DLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxrQ0FBa0M7RUFDbEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLDJDQUEyQztFQUMzQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0Usa0NBQWtDO0VBQ2xDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSw4Q0FBOEM7RUFDOUMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0Isc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLHVDQUF1QztFQUN2QyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVELDZCQUE2Qjs7QUFFN0I7RUFDRSxzQ0FBc0M7RUFDdEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsK0JBQStCO0VBQy9CLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxrQ0FBa0M7RUFDbEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLGtDQUFrQztFQUNsQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0Usb0NBQW9DO0VBQ3BDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSw4QkFBOEI7RUFDOUIscUlBQXFJO0VBQ3JJOzs7K0tBRzZLO0NBQzlLOztBQUVELGNBQWM7O0FBQ2Q7RUFDRSxrQ0FBa0M7RUFDbEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0Usc0NBQXNDO0VBQ3RDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxpQ0FBaUM7RUFDakMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLHVDQUF1QztFQUN2QyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVELDZCQUE2Qjs7QUFFN0I7RUFDRSxzQ0FBc0M7RUFDdEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsK0JBQStCO0VBQy9CLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxvQ0FBb0M7RUFDcEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLGtDQUFrQztFQUNsQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsOEJBQThCO0VBQzlCLHFJQUFxSTtFQUNySTs7OytLQUc2SztDQUM5Szs7QUFFRCxZQUFZOztBQUNaO0VBQ0UsNkJBQTZCO0VBQzdCLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsMkJBQTJCO0VBQzNCLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyxrSUFBa0k7RUFDbEk7OzJJQUV5STtDQUMxSTs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixzSEFBc0g7RUFDdEg7OytIQUU2SDtDQUM5SDs7QUFFRCxZQUFZOztBQUNaO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNJQUFzSTtFQUN0STs7OytLQUc2SztDQUM5Szs7QUFFRDtFQUNFLGtDQUFrQztFQUNsQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0Usb0NBQW9DO0VBQ3BDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxvQ0FBb0M7RUFDcEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLHNDQUFzQztFQUN0QyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSx1Q0FBdUM7RUFDdkMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLHVDQUF1QztFQUN2QyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLG9IQUFvSDtFQUNwSDs7b0lBRWtJO0NBQ25JOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLHlIQUF5SDtFQUN6SDs7eUlBRXVJO0NBQ3hJOztBQUVELFlBQVk7O0FBQ1o7RUFDRSxpQ0FBaUM7RUFDakMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLHNDQUFzQztFQUN0QyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxpQ0FBaUM7RUFDakMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLGdDQUFnQztFQUNoQyxzSUFBc0k7RUFDdEksd2xCQUF3bEI7Q0FDemxCOztBQUVEO0VBQ0Usa0NBQWtDO0VBQ2xDLHNJQUFzSTtFQUN0SSx3bEJBQXdsQjtDQUN6bEI7O0FBRUQ7RUFDRSxnQ0FBZ0M7RUFDaEMsc0lBQXNJO0VBQ3RJLHdsQkFBd2xCO0NBQ3psQjs7QUFFRDtFQUNFLCtCQUErQjtFQUMvQixxSUFBcUk7RUFDckksdWxCQUF1bEI7Q0FDeGxCOztBQUVEO0VBQ0UsNEJBQTRCO0VBQzVCLDBIQUEwSDtFQUMxSCx1WUFBdVk7Q0FDeFk7O0FBRUQ7RUFDRSwrQ0FBK0M7RUFDL0MsK0lBQStJO0VBQy9JOzt3SkFFc0o7Q0FDdko7O0FBRUQ7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0JBQWdCLENBQUMsV0FBVztFQUM1Qix3SEFBd0g7RUFDeEg7O3dJQUVzSTtDQUN2STs7QUFFRDtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0IsQ0FBQyxhQUFhO0VBQzlCLG1CQUFtQjtFQUNuQix3SEFBd0g7RUFDeEg7O3dJQUVzSTtDQUN2STs7QUFFRDtFQUNFLGdDQUFnQztFQUNoQyx3SEFBd0g7RUFDeEg7O3dJQUVzSTtDQUN2STs7QUFFRDtFQUNFLDZCQUE2QjtFQUM3QixxSEFBcUg7RUFDckg7O3FJQUVtSTtDQUNwSTs7QUFFRDtFQUNFLDRCQUE0QjtFQUM1QixvSEFBb0g7RUFDcEg7O29JQUVrSTtDQUNuSTs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixzSEFBc0g7RUFDdEg7O3NJQUVvSTtDQUNySTs7QUFFRDtFQUNFLDZCQUE2QjtFQUM3QixxSEFBcUg7RUFDckg7O3FJQUVtSTtDQUNwSTs7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQixtSEFBbUg7RUFDbkg7O21JQUVpSTtDQUNsSTs7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyw2SEFBNkg7RUFDN0g7OzttSkFHaUo7Q0FDbEo7O0FDcnhCRDs7R0FFRzs7QUFDRjtFQUNDLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtGQUFrRjtFQUNsRjs7O3VHQUdxRztDQUN0Rzs7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDRFQUE0RTtFQUM1RTs7O2lHQUcrRjtDQUNoRzs7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDZFQUE2RTtFQUM3RTs7O2tHQUdnRztDQUNqRzs7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDhFQUE4RTtFQUM5RTs7O21HQUdpRztDQUNsRzs7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlGQUFpRjtFQUNqRjs7O3NHQUdvRztDQUNyRzs7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDJFQUEyRTtFQUMzRTs7O2dHQUc4RjtDQUMvRjs7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNGQUFzRjtFQUN0Rjs7OzJHQUd5RztDQUMxRzs7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdGQUFnRjtFQUNoRjs7O3FHQUdtRztDQUNwRzs7QUNoRkQ7SUFDSSx5QkFBeUI7S0FDeEI7Ozs7Ozs7OzswRUFTb0Y7R0FDdEY7O0FBQ0g7SUFDSSxZQUFZO0NBQ2Y7O0FBQ0Q7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsb0NBQW9DO0NBQ3ZDOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7RUFJakIsZ0NBQWdDO0NBQ2pDOztBQUNEO0lBQ0kscUJBQXFCO0NBQ3hCOztBQUdEO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFlBQVk7UUFDWix1QkFBdUI7S0FDMUI7Q0FDSjs7QUFFRDs7Q0FFQzs7QUFDRDtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixvQkFBb0I7S0FDdkI7Q0FDSjs7QUFDRDtJQUNJO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCx1QkFBdUI7S0FDMUI7O0NBRUo7O0FBQ0Q7SUFDSTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsdUJBQXVCO0tBQzFCOztDQUVKOztBQUNEOztDQUVDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5UaGlzIENTUyByZXNvdXJjZSBpbmNvcnBvcmF0ZXMgbGlua3MgdG8gZm9udCBzb2Z0d2FyZSB3aGljaCBpcyB0aGUgdmFsdWFibGUgY29weXJpZ2h0ZWRcclxucHJvcGVydHkgb2YgTW9ub3R5cGUgSW1hZ2luZyBhbmQvb3IgaXRzIHN1cHBsaWVycy4gWW91IG1heSBub3QgYXR0ZW1wdCB0byBjb3B5LCBpbnN0YWxsLFxyXG5yZWRpc3RyaWJ1dGUsIGNvbnZlcnQsIG1vZGlmeSBvciByZXZlcnNlIGVuZ2luZWVyIHRoaXMgZm9udCBzb2Z0d2FyZS4gUGxlYXNlIGNvbnRhY3QgTW9ub3R5cGVcclxuSW1hZ2luZyB3aXRoIGFueSBxdWVzdGlvbnMgcmVnYXJkaW5nIFdlYiBmb250czogIGh0dHA6Ly93ZWJmb250cy5mb250cy5jb21cclxuKi9cclxuXHJcbi8qIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYS1XMDEtUm9tYW5cIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZWE5NWI0NGEtZWFiNy00YmQxLTg2MWMtZTczNTM1ZTdmNjUyLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2VhOTViNDRhLWVhYjctNGJkMS04NjFjLWU3MzUzNWU3ZjY1Mi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzQwMjFhM2I5LWY3ODItNDM4Yi1hZWI0LWMwMDgxMDlhOGI2NC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy82NjlmNzllZC0wMDJjLTRmZjYtOTY1Yy05ZGE0NTM5Njg1MDQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZDE3YmMwNDAtOWU4Yi00Mzk3LTgzNTYtODE1M2Y0YTY0ZWRmLnN2ZyNkMTdiYzA0MC05ZThiLTQzOTctODM1Ni04MTUzZjRhNjRlZGZcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EtVzAxLUJvbGRcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZjcwZGE0NWEtYTA1Yy00OTBjLWFkNjItN2RiNDg5NGIwMTJhLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2Y3MGRhNDVhLWEwNWMtNDkwYy1hZDYyLTdkYjQ4OTRiMDEyYS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2M1NzQ5NDQzLTkzZGEtNDU5Mi1iNzk0LTQyZjI4ZDYyZWY3Mi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy83MzgwNWYxNS0zOGU0LTRmYjctOGEwOC1kNTZiZjI5YjQ4M2IudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvODc0YmJjNGEtMDA5MS00OWYwLTkzZWYtZWE0ZTY5YzNjYzdhLnN2ZyM4NzRiYmM0YS0wMDkxLTQ5ZjAtOTNlZi1lYTRlNjljM2NjN2FcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJCcmFnZ2Fkb2Npby1XMDFcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZjMwNTI2NmYtYWRmYi00ZTRmLTkwNTUtMWQ3MzI4ZGU4Y2U2LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2YzMDUyNjZmLWFkZmItNGU0Zi05MDU1LTFkNzMyOGRlOGNlNi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzUxOGU0NTc3LWVlY2MtNGVjZC1hZGI0LTJlZTIxZGYzNWIyMC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9mNDYyNDFhZC0xZjVkLTQ5MzUtYWQ2OS1iMGE3OGMyZTE5MWQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjJhMGEyNWQtZTA1NC00YzY1LWJmZmEtZTU3NjBiNDhkZWMzLnN2ZyNiMmEwYTI1ZC1lMDU0LTRjNjUtYmZmYS1lNTc2MGI0OGRlYzNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJDbGFyZW5kb24tVzAxLU1lZGl1bS02OTIxMDdcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYzY5OTM0NTAtZDc5NS00ZmQzLWIzMDYtMzg0ODE3MzM4OTRjLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2M2OTkzNDUwLWQ3OTUtNGZkMy1iMzA2LTM4NDgxNzMzODk0Yy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2I2ODc4ZjU3LTRkNjQtNGQ3MC05MjZkLWZhNGRlYzYxNzNhNS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wYTZiNmVmZi02YjVkLTQ2ZDQtYjY4MS1mMzU2ZWVmMWU0YzEudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNjAwYjEwMzgtNzZhOC00M2I0LWEyZjctMmE2ZWIwNjgxZjk1LnN2ZyM2MDBiMTAzOC03NmE4LTQzYjQtYTJmNy0yYTZlYjA2ODFmOTVcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJESU4tTmV4dC1XMDEtTGlnaHRcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvM2UwYjJjZDctOTY1Ny00MzhiLWI0YWYtZTA0MTIyZThmMWY3LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzNlMGIyY2Q3LTk2NTctNDM4Yi1iNGFmLWUwNDEyMmU4ZjFmNy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2JjMTc2MjcwLTE3ZmEtNGM3OC1hMzQzLTlmZTUyODI0ZTUwMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zNTE2ZjkxZC1hYzQ4LTQyY2QtYWNmZS0xYmU2OTExNTJjYzQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZDFiMWU4NjYtYTQxMS00MmJhLThmNzUtNzJiZjI4ZTIzNjk0LnN2ZyNkMWIxZTg2Ni1hNDExLTQyYmEtOGY3NS03MmJmMjhlMjM2OTRcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJTbmVsbFJvdW5kaGFuZFcwMS1TY3JpcFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9mZWEwZmI3Yi04ODRiLTQ1NjctYTZkYy1hZGRiOGU2N2JhYWEuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZmVhMGZiN2ItODg0Yi00NTY3LWE2ZGMtYWRkYjhlNjdiYWFhLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZWZiZmMxNzAtYWFmMC00NDcyLTkxZjQtZGJiNWJjMmY0YzU5LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2Q5NzQ2NjlkLTk3OGMtNGJjZi04ODQzLWIyYjdjMzY2ZDA5Ny50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81YjI0MjdiNS0zYzFlLTRiMTctOWYzYy03MjBhMzMyYzkxNDIuc3ZnIzViMjQyN2I1LTNjMWUtNGIxNy05ZjNjLTcyMGEzMzJjOTE0MlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlN0ZW5jaWwtVzAxLUJvbGRcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvY2M2NDJiMTctYTAwNS00ZjFlLTg2ZTgtYmFmZmE0NjQ3NDQ1LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2NjNjQyYjE3LWEwMDUtNGYxZS04NmU4LWJhZmZhNDY0NzQ0NS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2E5ZWRkYzQ3LTk5MGQtNDdhMy1iZTRlLWM4Y2RlYzAwOTBjNi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84ZDEwODQ3Ni03YTYyLTQ2NjQtODIxZi0wM2M4YTUyMmMwMzAudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNzgyM2UzNGMtNjdkYy00NjdhLWJiZmItZWZiYjVmNmM5MGYwLnN2ZyM3ODIzZTM0Yy02N2RjLTQ2N2EtYmJmYi1lZmJiNWY2YzkwZjBcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EtVzAxLUxpZ2h0XCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzcxN2Y4MTQwLTIwYzktNDg5Mi05ODE1LTM4YjQ4ZjE0Y2UyYi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy83MTdmODE0MC0yMGM5LTQ4OTItOTgxNS0zOGI0OGYxNGNlMmIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wMzgwNTgxNy00NjExLTRkYmMtOGM2NS0wZjczMDMxYzM5NzMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZDVmOWY3MmQtYWZiNy00YzU3LTgzNDgtYjRiZGFjNDJlZGJiLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzA1YWQ0NThmLTI2M2ItNDEzZi1iMDU0LTYwMDFhOTg3ZmYzZS5zdmcjMDVhZDQ1OGYtMjYzYi00MTNmLWIwNTQtNjAwMWE5ODdmZjNlXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVmljdG9yaWEtVGl0bGluZy1NVC1XOTBcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMmI2NzMxZGMtMzA1ZC00ZGNkLTkyOGUtODA1MTYzZTI2Mjg4LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzJiNjczMWRjLTMwNWQtNGRjZC05MjhlLTgwNTE2M2UyNjI4OC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2ZhY2VmZjQyLWIxMDYtNDQ4Yi1iNGNmLTViM2EwMmFkNjFmMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84MmYxMDNlNC03YjFjLTQ5YWYtODYyZi1mZTU3NmRhNzY5OTYudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNDZmNjk0NmEtNDAzOS00NmU4LWIwMDEtYmUzZTUzMDY4ZDQ2LnN2ZyM0NmY2OTQ2YS00MDM5LTQ2ZTgtYjAwMS1iZTNlNTMwNjhkNDZcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJBbWVyaWNhblR5cHdydGVySVRDVzAxLS03MzEwMjVcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZGZmOGFlYmUtZGVlZS00N2E3LTg1NzUtYjJmMzljODQ3M2Y4LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2RmZjhhZWJlLWRlZWUtNDdhNy04NTc1LWIyZjM5Yzg0NzNmOC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzBjMGY0ZDI4LTRjMTMtNGU4NC05YTM2LWU2M2NkNTI5YWU4Ni53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy83ZjI2YTI3OC04NGIzLTQ1ODctYmYwNy1jOGNkZjdlMzQ3YTkudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMjU0YWI5MzEtZTZkNi00MzA3LTk3NjItNTkxNGRlZDQ5ZjEzLnN2ZyMyNTRhYjkzMS1lNmQ2LTQzMDctOTc2Mi01OTE0ZGVkNDlmMTNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJTb2hvLVcwMS1UaGluLUNvbmRlbnNlZFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iMmQ2Yjg2OS0zZjQ3LTRjOTItODNkMy00NTQ2ZmZiODYwZDAuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjJkNmI4NjktM2Y0Ny00YzkyLTgzZDMtNDU0NmZmYjg2MGQwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZjg0YjUzOWQtZWQzNC00NDAwLWExMzktYzBmOTA5YWY0OWFhLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzllZjI3NDAxLTA5YzAtNDM0Zi1iMGYwLTc4NDQ0NWI1MmVhMi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy80YmEzNTQ2YS0zMmY3LTRlN2QtYmU2NC04ZGEwMWIyM2Q0NmUuc3ZnIzRiYTM1NDZhLTMyZjctNGU3ZC1iZTY0LThkYTAxYjIzZDQ2ZVwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBhY2lmaWNhLVcwMC1Db25kZW5zZWRcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZTUwYTViYjEtODI0Ni00NDEyLThjMjctNGExOGJhODlhMGZkLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2U1MGE1YmIxLTgyNDYtNDQxMi04YzI3LTRhMThiYTg5YTBmZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzY4NDk2MTRjLTk4NmMtNDViMS1hMWE3LTM5Yzg5MTc1OWJiOS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84Y2NiODM1Yy00NjY4LTQzMmQtOGQxZC0wOTliNDhhYWZlNGUudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDI4MDQwZWMtYjk1Ni00MWQ4LWEwN2QtYjRkMzQ2NmI4ZWQ4LnN2ZyMwMjgwNDBlYy1iOTU2LTQxZDgtYTA3ZC1iNGQzNDY2YjhlZDhcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJBdmVuaWRhLVcwMVwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9hODEzOGIwNS1lNWZmLTQ4MmYtYThmNi04YmU4OTRlMDFmYzMuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYTgxMzhiMDUtZTVmZi00ODJmLWE4ZjYtOGJlODk0ZTAxZmMzLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNTNmMDU4MjEtYzc4My00NTkzLWJmMjAtYzNkNzcwZjMyODYzLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2I3MjE1YmJlLTc4NzAtNDczMy05ZTgxLTI4Mzk4ZmJlZDM4Yi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iYzJkZWY3OS1iZDk5LTQ5YjktOThiMy01MDJlMzRjYzU1NTIuc3ZnI2JjMmRlZjc5LWJkOTktNDliOS05OGIzLTUwMmUzNGNjNTU1MlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIklUQy1BcmVjaWJvLVcwMS1SZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzAzNmQ2YzBiLWQwNjctNDMxYS1hYjM5LWJlM2I4OWIxMzIyZi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wMzZkNmMwYi1kMDY3LTQzMWEtYWIzOS1iZTNiODliMTMyMmYuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81ZDZjZDYwNi1iNTIwLTQzMzUtOTZlMS03NTU2OTFkNjY2ZTgud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDNkN2Q3ODMtNWI5OS00MzQwLWIzNzMtOTdjMDAyNDZlYzI3LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2E1ZmFiNDhmLTkzYTAtNDAzYS1iNjBlLWJmZGIwYjY5ZDk3My5zdmcjYTVmYWI0OGYtOTNhMC00MDNhLWI2MGUtYmZkYjBiNjlkOTczXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRHJvaWQtU2VyaWYtVzAxLVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZGU1NzAyY2UtMTc0Yi00ZWU2LWE2MDgtNjQ4MmQ1ZDdlYjcxLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2RlNTcwMmNlLTE3NGItNGVlNi1hNjA4LTY0ODJkNWQ3ZWI3MS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzgzYWUyMDUxLWRjZGQtNDkzMS05OTQ2LThiZTc0N2E0MGQwMC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy82M2YzNWI1OC1hNDBmLTRmNTMtYmIzZS0yMDM5NmYyMDIyMTQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMTlkYjZlYmMtMmQxYi00ODM1LTk1ODgtM2ZhNDVmZjM2ZjRlLnN2ZyMxOWRiNmViYy0yZDFiLTQ4MzUtOTU4OC0zZmE0NWZmMzZmNGVcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJNdXNlby1XMDEtNzAwXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzNiM2Q5OWEyLTZiMzYtNDkxMi1hOTNlLTI5Mjc3MDIwYTVjZi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zYjNkOTlhMi02YjM2LTQ5MTItYTkzZS0yOTI3NzAyMGE1Y2YuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8yOGQ3NGU5Yi00ZWE5LTRlM2MtYjI2NS1jNjdhNzJjNjY4NTYud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjQzMmI0ZTEtMDE0YS00ZWQ4LTg2NWMtMjQ5NzQ0Zjg1NmIwLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzhlNjNmZDFlLWFkYzktNDYwZS05ZWY3LWJiZjk4ZWUzMmE3MS5zdmcjOGU2M2ZkMWUtYWRjOS00NjBlLTllZjctYmJmOThlZTMyYTcxXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW8tU2xhYi1XMDEtMTAwXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzAxYWI3MDlmLTIyY2YtNDgzMS1iMjRhLThjZjRlYjg1MjY4Ny5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wMWFiNzA5Zi0yMmNmLTQ4MzEtYjI0YS04Y2Y0ZWI4NTI2ODcuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9jYWNjMDg2Mi1mMTQ2LTQ3NDYtOTJiMS02MGU2MTE0YTY2YzQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNTQwMDZmNTQtYjYxZS00MTAzLWFiZjgtYjFkMDI5NGEyYTljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2U1ODQxZjJlLWIzMDYtNDU4My1iZmMzLWEwZTA2NzQyZmVkZC5zdmcjZTU4NDFmMmUtYjMwNi00NTgzLWJmYzMtYTBlMDY3NDJmZWRkXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiR2VvdGljYS1XMDEtRm91ci1PcGVuXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzkxY2M5NGU2LTJjOTgtNGI0Mi1hYWVjLTA4NmFiYjZhOTM3MC5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85MWNjOTRlNi0yYzk4LTRiNDItYWFlYy0wODZhYmI2YTkzNzAuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9jYzBiMjI5Mi05MzU4LTQxZWUtYjNiOS00Mjk5NTI1ODZmNjkud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvODU1OGI0OTMtZGE1NS00ZTZmLWI0NzMtNTZkOWM3ZGZmMmE0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2VlNTA3ZThkLTA2OWEtNGNiNi1iMTg0LTYyYjFmM2FiMDEwMi5zdmcjZWU1MDdlOGQtMDY5YS00Y2I2LWIxODQtNjJiMWYzYWIwMTAyXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWFyem8tVzAwLVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNDU1NjM4OTEtMjBhYi00MDg3LWIxNmMtYjNjZmMyNmZhYWMxLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzQ1NTYzODkxLTIwYWItNDA4Ny1iMTZjLWIzY2ZjMjZmYWFjMS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2U5NDdiNzZhLWVkY2YtNDUxOS1iYzNkLWMyZGEzNTg2NTcxNy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9jMDljYjM2ZS01ZTc5LTQwMzMtYjg1NC00MWU1N2ZiZjQ0ZmEudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZjQyNDUwNjktMjhiNy00M2I3LThhMTAtNzA4YjlmM2MzOThiLnN2ZyNmNDI0NTA2OS0yOGI3LTQzYjctOGExMC03MDhiOWYzYzM5OGJcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJSZWtsYW1lU2NyaXB0VzAwLU1lZGl1bVwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81YWY3NTExYS1kY2NjLTQ1MGQtYjJhMi1iYjhlM2JiNjI1NDAuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNWFmNzUxMWEtZGNjYy00NTBkLWIyYTItYmI4ZTNiYjYyNTQwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDViMTc2ZjUtYzYyMi00YzM1LWFmOTgtYzBjMDU2ZGQ1YjY2LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzlkY2I1YTNjLTFjNjQtNGM5Yy1hNDAyLTk5NWJlZDc2MmViNy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8xZTg3ZDY2YS1kN2YxLTQ4NjktODQzMC01MTY2Mjc3N2JlNTcuc3ZnIzFlODdkNjZhLWQ3ZjEtNDg2OS04NDMwLTUxNjYyNzc3YmU1N1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5pbWJ1cy1TYW5zLVRXMDFDb25cIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMjEwMWFkYWEtNmE5OC00ZmE5LWIwODUtM2IwNGMzNzIyNjM3LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzIxMDFhZGFhLTZhOTgtNGZhOS1iMDg1LTNiMDRjMzcyMjYzNy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzhmYjEwOTBlLWI0ZDAtNDY4NS1hYzhmLTNkMGMyOWQ2MDEzMC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81ZDVmYzQ0ZS1lODRiLTQ4Y2EtYTVhNy1iZWQ4YmRiZjc5YTEudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMjQ1MTJiMmEtZTIyZC00ZWJiLTg4N2MtYTMzNGQwMzk0MzNjLnN2ZyMyNDUxMmIyYS1lMjJkLTRlYmItODg3Yy1hMzM0ZDAzOTQzM2NcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJCb2RvbmktVzAxLVBvc3RlclwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9hYjBlM2QxNS0yZjY0LTQ5YzEtODg5OC04MTdhMjIzNWU3MTkuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYWIwZTNkMTUtMmY2NC00OWMxLTg4OTgtODE3YTIyMzVlNzE5LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNGQxYjk4NDgtN2ViZC00NzJjLTlkMzEtNGFmMGFhN2ZhYWVhLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzE5N2I1ZWY3LTY1ZTYtNGFmNi05ZmQ5LWJjOWZjNjMwMzhjNy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9hOWJkYTExNy1jMjkzLTQwYjUtYTJkOC05ZjkyM2YzMjYyM2Muc3ZnI2E5YmRhMTE3LWMyOTMtNDBiNS1hMmQ4LTlmOTIzZjMyNjIzY1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbi8qIE1vYmlsZSBzeXN0ZW0gZmFsbGJhY2tzICovXHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJDb21pYy1TYW5zLVcwMS1SZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzBkNjdlMTE1LWYyMjAtNGE2YS04MWMyLWFlMDAzNWJkYTkyMi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wZDY3ZTExNS1mMjIwLTRhNmEtODFjMi1hZTAwMzViZGE5MjIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8yMzRjOThiOC0zNmFlLTQ1YWItOGE1NS03Nzk4MDcwOGIyYmMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvN2ZmMjk3MGMtMWQ1MS00N2JlLTg2M2QtYjMzYWZkYThmYjQwLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2YxYWZhN2Q4LWFiZWUtNDI2OC05Y2Y4LTg1ZDQzMTUwZmRiMS5zdmcjZjFhZmE3ZDgtYWJlZS00MjY4LTljZjgtODVkNDMxNTBmZGIxXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllci1QUy1XMDFcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjI5NzdjOGQtNDkwNy00Y2MzLWI1ZWQtM2RlYzljYTY4MTAyLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2IyOTc3YzhkLTQ5MDctNGNjMy1iNWVkLTNkZWM5Y2E2ODEwMi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2IwNTlkMDJhLWEyMjItNGM2My05ZmQzLTcwNWVhZWVhMWMxNi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81MmUzZDQ4NC03MTg4LTRjOWUtOTY0ZS1iN2E3NWU5ZGZhMmYudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYzIxODJjMzYtOGViNC00YTU2LWEwZmYtZGJhNzQ5MmNlOTZjLnN2ZyNjMjE4MmMzNi04ZWI0LTRhNTYtYTBmZi1kYmE3NDkyY2U5NmNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJJbXBhY3QtVzAxLTIwMTBcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvOWFlNzA1OWItZGQxNy00YTRjLTg4NzItNWNiNGRkNTUxMjc3LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzlhZTcwNTliLWRkMTctNGE0Yy04ODcyLTVjYjRkZDU1MTI3Ny5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzRjZWZkZjQ3LTAxMzYtNDE2OS05OTMzLTMyMjVkYmJlYzlkOS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9mNzQ1MDkzNC00MmYzLTQxOTMtYmVmYS1jODI1NzcyYTk0NTQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMjVhYTU0NDktY2NjMS00ZjBlLWFiM2YtNGNmM2I5NTkyMDhmLnN2ZyMyNWFhNTQ0OS1jY2MxLTRmMGUtYWIzZi00Y2YzYjk1OTIwOGZcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJMdWNpZGEtQ29uc29sZS1XMDFcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNTI3Y2IzMDUtZGVlZS00ODEwLWIzMzctNjc3NTY2NzhjODMwLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzUyN2NiMzA1LWRlZWUtNDgxMC1iMzM3LTY3NzU2Njc4YzgzMC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzYwZjRhMTNmLTM5NDMtNDMyYS1iYjUxLWI2MTJlNDEyMzljNS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zODIyOTA4OS1lYmVjLTQ3ODItYjhmMi0zMDRjZmRjZWE4ZDgudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZjg1NTc4M2MtMTA3OS00Mzk2LWE3YjctZjdkOTE3OTE0NWJlLnN2ZyNmODU1NzgzYy0xMDc5LTQzOTYtYTdiNy1mN2Q5MTc5MTQ1YmVcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OlwiVGFob21hLVcwMS1SZWd1bGFyXCI7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMWIxNTViMWMtZTY1MS00YTUxLTlkMDMtMGNhNDgwYWVhZjlmLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMWIxNTViMWMtZTY1MS00YTUxLTlkMDMtMGNhNDgwYWVhZjlmLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMjAzMjM0MzAtMjRmNC00NzY3LTlkNGQtMDYwZDFlODk3NThhLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzZlMTdlNjJkLTMwY2ItNDg0MC04ZTlkLTMyOGM2YjYyMzE2ZS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wNGFiMzg5NC00NWNlLTQyZWYtYWExMS1lN2MwY2Q3ZjdkYTkuc3ZnIzA0YWIzODk0LTQ1Y2UtNDJlZi1hYTExLWU3YzBjZDdmN2RhOVwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2V7XHJcbiAgZm9udC1mYW1pbHk6XCJBcmlhbC1XMDEtQmxhY2tcIjtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iZjg1ZTQxNC0xYjE2LTRjZDEtOGNlOC1kYWQxNWRhYTdkYWEuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iZjg1ZTQxNC0xYjE2LTRjZDEtOGNlOC1kYWQxNWRhYTdkYWEuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksXHJcbiAgdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9jNmY1YmNkNi02NmZjLTQ0YWYtYmU5NS1iYjFmMmIzOGQwODAud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxyXG4gIHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvN2I1YjQzNmItYTUxMS00MDJhLTg4ZDYtZGJhYzcwMGNlZTM2LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcclxuICB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2E1YWRjZDM1LWMzNmEtNGIxOC05NTNkLTQ3YzAyOWRlNGVmNi5zdmcjYTVhZGNkMzUtYzM2YS00YjE4LTk1M2QtNDdjMDI5ZGU0ZWY2XCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuLyogR3JlZWsgYW5kIG90aGVycyAqL1xyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTpcIlRhaG9tYS1XMTUtLVJlZ3VsYXJcIjtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9mMGRkMzM0Yy04NzhjLTQ0MmMtYmRhMy0wZGJkMTIyZTg3ZjEuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9mMGRkMzM0Yy04NzhjLTQ0MmMtYmRhMy0wZGJkMTIyZTg3ZjEuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9hZTg0NGIxMS01MTU4LTRjYWYtOTBiNC03YWNlNDlhYzM0NDAud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZTYzZWY0ZjQtYjdiOS00ZjEzLThkYjUtZDdmNWNmODk4MzlmLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzVhZDJlZDkzLTFiYTAtNGIyYy1hNDIxLTIyYzViY2ZiNWI3OS5zdmcjNWFkMmVkOTMtMWJhMC00YjJjLWE0MjEtMjJjNWJjZmI1Yjc5XCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTpcIlRhaG9tYS1XOTktUmVndWxhclwiO1xyXG4gIHNyYzp1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2MzZWJmNzI5LTI2MDgtNDc4Ny05ZTVhLTI0OGYzMjlhZmFjZS5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzp1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2MzZWJmNzI5LTI2MDgtNDc4Ny05ZTVhLTI0OGYzMjlhZmFjZS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2QzYmJhYTFiLWQ1ZTMtNDMxZi05M2E3LTljZWE2MzYwMWJiNi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy83OGNiOTI0Zi0yMjdkLTRhYjktODNkNS1mMmIyZTY2NTZkYTUudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvY2EwNDUyOTctMzRlMS00NjJlLWFjYzgtNzVlZjE5NmFkYTAyLnN2ZyNjYTA0NTI5Ny0zNGUxLTQ2MmUtYWNjOC03NWVmMTk2YWRhMDJcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvcXVldHRlLVcwMC1MaWdodFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iOGMxZGRlYS0yOWVhLTQyZWMtOGE0OC0zMmE4OWU3OTJkM2IuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjhjMWRkZWEtMjllYS00MmVjLThhNDgtMzJhODllNzkyZDNiLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNGU1Mzc0YjMtYTIxNC00MWU1LTgxZjAtYTM0YzkyOTJkYTdlLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2MyMDU4MWM4LTAwMjMtNDg4OC1hZWFhLTlkMzI2MzZkYzE3Zi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9lNTE0ZWQzMi0xNjg3LTQ3ZDgtOGIzOS00MjNmYjc2NjRkMzMuc3ZnI2U1MTRlZDMyLTE2ODctNDdkOC04YjM5LTQyM2ZiNzY2NGQzM1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvc2V3b29kLVcwMS1SZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2JkODY4NzBlLTA2NzktNDExNi1hYTEzLTk2YWExZDZjNTk0NC5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iZDg2ODcwZS0wNjc5LTQxMTYtYWExMy05NmFhMWQ2YzU5NDQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy80ZDliYzg3OS1hYjUxLTQ1ZGEtYmYzNy1jOTcxMGNkMWNjMzIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYTU1NjRmZGItMzYxNi00ZjI3LWE0ZTQtZDkzMmI2YWU1YjRhLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2YxMjhlZjI4LWRhZjMtNDc3Yi04MDI3LTBmZDhiZGFkMmI5MS5zdmcjZjEyOGVmMjgtZGFmMy00NzdiLTgwMjctMGZkOGJkYWQyYjkxXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwic2Vnb2VfcHJpbnRyZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL3NlZ29lX3ByaW50LXdlYmZvbnQuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvc2Vnb2VfcHJpbnQtd2ViZm9udC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSxcclxuICB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL3NlZ29lX3ByaW50LXdlYmZvbnQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxyXG4gIHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvc2Vnb2VfcHJpbnQtd2ViZm9udC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksXHJcbiAgdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9zZWdvZV9wcmludC13ZWJmb250LnN2ZyNmMTI4ZWYyOC1kYWYzLTQ3N2ItODAyNy0wZmQ4YmRhZDJiOTFcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgc3JjOiB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvb3BlbnNhbnMtcmVndWxhci13ZWJmb250LmVvdCcpO1xyXG4gIHNyYzogdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL29wZW5zYW5zLXJlZ3VsYXItd2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9vcGVuc2Fucy1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9vcGVuc2Fucy1yZWd1bGFyLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9vcGVuc2Fucy1yZWd1bGFyLXdlYmZvbnQuc3ZnI29wZW5fc2Fuc3JlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgc3JjOiB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvb3BlbnNhbnMtYm9sZC13ZWJmb250LmVvdCcpO1xyXG4gIHNyYzogdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL29wZW5zYW5zLWJvbGQtd2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9vcGVuc2Fucy1ib2xkLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9vcGVuc2Fucy1ib2xkLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9vcGVuc2Fucy1ib2xkLXdlYmZvbnQuc3ZnI29wZW5fc2Fuc3JlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgc3JjOiB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvb3BlbnNhbnMtaXRhbGljLXdlYmZvbnQuZW90Jyk7XHJcbiAgc3JjOiB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvb3BlbnNhbnMtaXRhbGljLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvb3BlbnNhbnMtaXRhbGljLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9vcGVuc2Fucy1pdGFsaWMtd2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXHJcbiAgdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL29wZW5zYW5zLWl0YWxpYy13ZWJmb250LnN2ZyNvcGVuX3NhbnNyZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHNyYzogdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL29wZW5zYW5zLWJvbGRpdGFsaWMtd2ViZm9udC5lb3QnKTtcclxuICBzcmM6IHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9vcGVuc2Fucy1ib2xkaXRhbGljLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvb3BlbnNhbnMtYm9sZGl0YWxpYy13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvb3BlbnNhbnMtYm9sZGl0YWxpYy13ZWJmb250LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcclxuICB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvb3BlbnNhbnMtYm9sZGl0YWxpYy13ZWJmb250LnN2ZyNvcGVuX3NhbnNyZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTpcIkF2ZW5pci1MVC1XMDFfMzUtTGlnaHQxNDc1NDk2XCI7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZWRlZmU3MzctZGM3OC00YWEzLWFkMDMtM2M2ZjkwODMzMGVkLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZWRlZmU3MzctZGM3OC00YWEzLWFkMDMtM2M2ZjkwODMzMGVkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDA3OGY0ODYtOGU1Mi00MmMwLWFkODEtM2M4ZDNkNDNmNDhlLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvOTA4YzQ4MTAtNjRkYi00YjQ2LWJiOGUtODIzZWI0MWY2OGMwLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzQ1NzczODhjLTUxMGYtNDM2Ni1hZGRiLThiNjYzYmNjNzYyYS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iMDI2OGMzMS1lNDUwLTQxNTktYmZlYS1lMGQyMGUyYjVjMGMuc3ZnI2IwMjY4YzMxLWU0NTAtNDE1OS1iZmVhLWUwZDIwZTJiNWMwY1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTpcIkF2ZW5pci1MVC1XMDFfODUtSGVhdnkxNDc1NTQ0XCI7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNmFmOTk4OWUtMjM1Yi00Yzc1LThjMDgtYTgzYmRhZWYzZjY2LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNmFmOTk4OWUtMjM1Yi00Yzc1LThjMDgtYTgzYmRhZWYzZjY2LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZDUxM2UxNWUtOGYzNS00MTI5LWFkMDUtNDgxODE1ZTUyNjI1LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNjFiZDM2MmUtNzE2Mi00NmJkLWI2N2UtMjhmMzY2YzRhZmJlLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2NjZDE3YzZiLWU3ZWQtNGI3My1iMGQyLTc2NzEyYTRlZjQ2Yi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8yMDU3Nzg1My00MGE3LTRhZGEtYTNmYi1kZDZlOTM5MmY0MDEuc3ZnIzIwNTc3ODUzLTQwYTctNGFkYS1hM2ZiLWRkNmU5MzkyZjQwMVwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTpcIkJhc2tlcnZpbGxlTVRXMDEtU21CZEl0XCI7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDIyNGYzZmQtNTJkMy00OTlhLWFlMmYtNjM3YTA0MWY4N2YwLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDIyNGYzZmQtNTJkMy00OTlhLWFlMmYtNjM3YTA0MWY4N2YwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYzg4N2RmOGUtYjZjMy00Yzk3LTg1YjgtOTFjZmRkZTc3YjA3LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNWM0ZDU0MzItNzVjNC00ZjZiLWE2ZTctOGFmNGQ1NGEzM2QxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzJlZTQ2Yjg5LWI3Y2ItNGJiZS05ZDYwLWI3Y2E0MzU0YjcwNi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85NzE0ZDYzNS0xM2IzLTQ4YjItOTMxNS01ZDBmNzJhNjlhYjkuc3ZnIzk3MTRkNjM1LTEzYjMtNDhiMi05MzE1LTVkMGY3MmE2OWFiOVwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTpcIkJlbGluZGEtVzAwLVJlZ3VsYXJcIjtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy82M2QzODc1My1hOGQ5LTQyNjItYjg0NC0zYTAwN2FkODQ4YjQuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy82M2QzODc1My1hOGQ5LTQyNjItYjg0NC0zYTAwN2FkODQ4YjQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8yNDI0ODdhYS0yMDlhLTRkYmQtYWNhMi02NGEzYzczYTg5NDYud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy80MzgxYjI1Mi1kOWY4LTQyMDEtYmJmMy05NDQwZTIxMjU5ZTcud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNDZjMmM0ZjItY2QxNS00YjdiLWE0YjQtYWEwNGRiYmQxNjU1LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzMzNGY4OTk5LTM3MDMtNDdmMy1iMTQ3LTk2YjZkYzNiZjRiMi5zdmcjMzM0Zjg5OTktMzcwMy00N2YzLWIxNDctOTZiNmRjM2JmNGIyXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OlwiQnJhbmRvbi1Hcm90LVcwMS1MaWdodFwiO1xyXG4gIHNyYzp1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2UwMGJhMzBhLTBiZjMtNGM3Ni05MzkyLTg2NDFmYTIzN2E5Mi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzp1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2UwMGJhMzBhLTBiZjMtNGM3Ni05MzkyLTg2NDFmYTIzN2E5Mi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzY5YjQwMzkyLTQ1M2EtNDM4YS1hMTIxLWE0OWU1ZmJjOTIxMy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzkzNjJiY2E1LWIzNjItNDU0My1hMDUxLTIxMjllMmRlZjkxMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84NTA2MDg3OC1jYTZjLTQzY2MtYWMzMS03ZWRjY2ZkY2E3MWIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNDdmMDg5YTYtYzhjZS00NmZhLWI5OGYtMDNiOGMwNjE5ZDhhLnN2ZyM0N2YwODlhNi1jOGNlLTQ2ZmEtYjk4Zi0wM2I4YzA2MTlkOGFcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcbkBmb250LWZhY2V7XHJcbiAgZm9udC1mYW1pbHk6XCJCcmVlLVcwMS1UaGluLU9ibGlxdWVcIjtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy80ZTMzYmY3NC04MTNhLTQ4MTgtODMxMy02ZWE5MDM5ZGIwNTYuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy80ZTMzYmY3NC04MTNhLTQ4MTgtODMxMy02ZWE5MDM5ZGIwNTYuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9jZWIzYjRhMy0wMDgzLTQ0YWUtOTVjYi1lMzYyZjk1Y2M5MWIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy80ZDcxNmNlYS01YmEwLTQzN2EtYjVhOC04OWFkMTU5ZWEyYmUud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYzQ1OGZjMDktYzhkZC00NDIzLTk3NjctZTNlMjcwODJmMTU1LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzg1ZmZiMzFlLTc4ZWUtNGUyMS04M2Q4LTQzMTMyNjkxMzVhOS5zdmcjODVmZmIzMWUtNzhlZS00ZTIxLTgzZDgtNDMxMzI2OTEzNWE5XCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OlwiQWRvYmUtQ2FzbG9uLVcwMS1TbUJkXCI7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZDI4MDQxMzAtNjdiMC00ZmNmLTk4ZmUtZDc4MWRmOTJhNTZlLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZDI4MDQxMzAtNjdiMC00ZmNmLTk4ZmUtZDc4MWRmOTJhNTZlLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYmVjZmFkYjEtZWFjYS00ODE3LWFmYmQtZmU0ZDYxZTFmNjYxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNjUzMGJhYzctMjFhYy00ZTUyLWEwMTQtZGNlNmE4ZDkzN2FiLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2IzNGU4YTQ1LWM5MmQtNDQwMi04OWJjLTQzY2M1MWM2YjRlMC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wODA0YmI0YS0zOTljLTQ1NDctOWZhOC0wYWNmNjI2OGQ4ZjYuc3ZnIzA4MDRiYjRhLTM5OWMtNDU0Ny05ZmE4LTBhY2Y2MjY4ZDhmNlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTpcIkRpZG90LVcwMS1JdGFsaWNcIjtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85YzJjZmQxOS00NzJiLTRlZjUtYWQ3My00M2VlZTY4ZGM0M2IuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85YzJjZmQxOS00NzJiLTRlZjUtYWQ3My00M2VlZTY4ZGM0M2IuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9hYmUzZDNhOS1jOTkwLTQ1OWYtOTQwNy01NGFjOTZjZDJmMDAud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wOWE0YjU3Yi03NDAwLTRkMzAtYjRiYS1kNmUzMDNjNTc4Njgud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYTBjYjA4ZDUtOTc1Zi00YzhkLWJjZGMtZDc3MWEwMTRkOTJhLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzg2ZDYwYTA5LWU4ZjgtNDAwMy1iNjg4LTBmOGEyYWJhNjUzMi5zdmcjODZkNjBhMDktZThmOC00MDAzLWI2ODgtMGY4YTJhYmE2NTMyXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OlwiRnV0dXJhLUxULVcwMS1MaWdodFwiO1xyXG4gIHNyYzp1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzJiNDBlOTE4LWQyNjktNGZkOS1hNTcyLTE5ZjVmZWM3Y2Q3Zi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzp1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzJiNDBlOTE4LWQyNjktNGZkOS1hNTcyLTE5ZjVmZWM3Y2Q3Zi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzI2MDkxMDUwLTA2ZWYtNGZkNS1iMTk5LTIxYjI3YzBlZDg1ZS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2NjYTUyNWE4LWFkODktNDNhZS1hY2VkLWJjYjQ5ZmIyNzFkYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84OGNjN2EzOS0xODM0LTQ0NjgtOTM2YS1mM2MyNWI1ZDgxYTEudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMTRkNmJmNWQtMTVmMS00Nzk0LWIxOGUtYzAzZmI5YTUxODdlLnN2ZyMxNGQ2YmY1ZC0xNWYxLTQ3OTQtYjE4ZS1jMDNmYjlhNTE4N2VcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcbkBmb250LWZhY2V7XHJcbiAgZm9udC1mYW1pbHk6XCJGdXR1cmEtTFQtVzAxLUJvb2tcIjtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9jZjA1M2VhZS1iYTFmLTQ0ZjMtOTQwYy1hMzRiNjhjY2JiZGYuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9jZjA1M2VhZS1iYTFmLTQ0ZjMtOTQwYy1hMzRiNjhjY2JiZGYuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84YmYzODgwNi0zNDIzLTQwODAtYjM4Zi1kMDg1NDJmN2U0YWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9lMmI5Y2JlYi1mYThlLTQxY2QtOGE2YS00NjA0NGIyOWJhNTIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYzJhNjk2OTctNGYwNi00NzY0LWFiZDQtNjI1MDMxYTg0ZTMxLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2RjNDIzY2MxLWJmODYtNDE1Yy1iYzdkLWFkN2RkZTQxNmEzNC5zdmcjZGM0MjNjYzEtYmY4Ni00MTVjLWJjN2QtYWQ3ZGRlNDE2YTM0XCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OlwiS2VwbGVyLVcwMy1MaWdodC1TQ2QtQ3BcIjtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9mYzAwZDVhZS02ZDk2LTRiNWMtYjY4Yi00ZjViZGI1NjJjOTguZW90PyNpZWZpeFwiKTtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9mYzAwZDVhZS02ZDk2LTRiNWMtYjY4Yi00ZjViZGI1NjJjOTguZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iMmIxNDcyYy01NWYyLTQ3OGEtYTljOS05MzczMjE0YTI3ZTUud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8yMGY3ODYxYi0zZmY3LTQ3ZjMtYjBmNS0xZTA2MjY4MjRhNjMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNWM1MWU3YTAtNmVjYy00NmViLWE5ZWUtMzc2ZjhjNDA3M2FmLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzM3YmVhNmQwLTJmMTQtNGU0OC1hNzZmLWZkODUxNzFkY2YyNi5zdmcjMzdiZWE2ZDAtMmYxNC00ZTQ4LWE3NmYtZmQ4NTE3MWRjZjI2XCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OlwiTHVsby1DbGVhbi1XMDEtT25lLUJvbGRcIjtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wMTYzYWMyMi01MGE3LTQwNmUtYWE2NC1jNjJlZTZmYmYzZDcuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wMTYzYWMyMi01MGE3LTQwNmUtYWE2NC1jNjJlZTZmYmYzZDcuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9hZWU3NGNiMy1jOTEzLTRiNTQtOTcyMi02MDAxYzkyMzI1ZjIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84MGRlOWQ1ZC1hYjVmLTQwY2UtOTExYi0xMDRlNTFlOTNkN2Mud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMWI0NmIwNWItY2ZkZC00ZDgyLThjMmYtNWM2Y2ZiYTFmZTYwLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2JlMzQwZjBiLWEyZDQtNDFkZi1hY2IxLTRkYzEyNDMzMGE4OC5zdmcjYmUzNDBmMGItYTJkNC00MWRmLWFjYjEtNGRjMTI0MzMwYTg4XCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OlwiUHJveGltYS1OLVcwMS1SZWdcIjtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy83ZTkwMTIzZi1lNGE3LTQ2ODktYjQxZi02YmNmZTMzMWMwMGEuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6dXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy83ZTkwMTIzZi1lNGE3LTQ2ODktYjQxZi02YmNmZTMzMWMwMGEuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy82NDAxN2Q4MS05NDMwLTRjYmEtODIxOS04ZjVjYzI4YjkyM2Uud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9lNTZlY2I2ZC1kYTQxLTRiZDktOTgyZC0yZDI5NWJlYzlhYjAud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMmFmZjRmODEtM2U5Ny00YTgzLTllNmMtNDVlMzNjMDI0Nzk2LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2FiOWNkMDYyLTM4MGYtNGI1My1iMWE3LWMwYmVjNzQwMjIzNS5zdmcjYWI5Y2QwNjItMzgwZi00YjUzLWIxYTctYzBiZWM3NDAyMjM1XCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OlwiVHJlbmQtU2Fucy1XMDAtRm91clwiO1xyXG4gIHNyYzp1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzM5MmFhOThmLWExYmYtNGRjNC05ZGVmLWE1ZDI3YzczYTBkZS5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzp1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzM5MmFhOThmLWExYmYtNGRjNC05ZGVmLWE1ZDI3YzczYTBkZS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzI5YzY2ZjFlLTUyNDMtNGYzNC04YTE5LTQ3NDA1ZjcyOTU0Yy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2M4MWNjYTAzLTVmMWEtNDI1Mi05OTUwLTA5NmU2MGUyYmRlOS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81NjliNDhjZS1mNzFiLTRlMmQtYTgwYS0xOTIwZWZiZDcxODcudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZjI4NDQwOWYtMzY2OS00M2RmLWJmZTEtZjlmOWVlMWJiYzA3LnN2ZyNmMjg0NDA5Zi0zNjY5LTQzZGYtYmZlMS1mOWY5ZWUxYmJjMDdcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OlwiRElOTmV1emVpdEdyb3Rlc2tMVFcwMS1fODEyNDI2XCI7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjQxNTU4YmQtMjg2Mi00NmMwLWFiZjctNTM2ZDI1NDJmYTI2LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjQxNTU4YmQtMjg2Mi00NmMwLWFiZjctNTM2ZDI1NDJmYTI2LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNWNlZThkNmUtODlhZC00ZDhjLWEwYWMtNTg0ZDMxNmIxNWFlLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMzg4ZWY5MDItMmMzMS00ODE4LWFiYjEtYTQwZGNkODFmNmQ2LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzI5YzYwMDc3LTI2MTQtNDA2MS1hYThkLTViY2ZkZjczNTRiYi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy83NjI1MGQyNy1iMzUzLTRmM2ItOTBjNi0wZmY2MzVmYWJhYWIuc3ZnIzc2MjUwZDI3LWIzNTMtNGYzYi05MGM2LTBmZjYzNWZhYmFhYlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTpcIlBlYWNoZXMtYW5kLUNyZWFtLVJlZ3VsYXItVzAwXCI7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMjI1MGY5MzAtOWE2ZC00NDg2LWEwZWItNmI0MDdjNWQ2YzliLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMjI1MGY5MzAtOWE2ZC00NDg2LWEwZWItNmI0MDdjNWQ2YzliLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvM2M1YmVkYTgtNDVjYy00Zjc2LWFiY2EtOGVjY2ZlYjYyMjBjLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjM2YjQ5OWYtZDc3Ni00NjFjLWJhY2ItZmNiZWJlMWNiOWI0LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzg5NmQzODI4LTI2Y2UtNDYyYS05ZjcwLTYyZTBiNWM5MGE3MC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wZGNjYmVjMi1hODgyLTRkZDktOGRhMC0zYTAzNWM4MDhjZTAuc3ZnIzBkY2NiZWMyLWE4ODItNGRkOS04ZGEwLTNhMDM1YzgwOGNlMFwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbi8qIGxhdGluLWV4dCAqL1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhLVcwMi1Sb21hblwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9lNGJkNDUxNi00NDgwLTQzZGYtYWE2ZS00ZTliOTAyOWY1M2UuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZTRiZDQ1MTYtNDQ4MC00M2RmLWFhNmUtNGU5YjkwMjlmNTNlLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjU2Yjk0NGUtYmJlMC00NDUwLWEyNDEtZGUyMTI1ZDNlNjgyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzdkYTAyZjA1LWFlOGItNDNhMS1hZWI5LTgzYjNjMDUyN2MwNi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy82NmNhYzU2ZS1kMDE3LTQ1NDQtOWQwYy1mN2Q5NzhmMGM1YzIuc3ZnIzY2Y2FjNTZlLWQwMTctNDU0NC05ZDBjLWY3ZDk3OGYwYzVjMlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYS1XMDItQm9sZFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84YzBkOGIwZi1kN2Q2LTRhNzItYTQxOC1jMjM3M2U0Y2JmMjcuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvOGMwZDhiMGYtZDdkNi00YTcyLWE0MTgtYzIzNzNlNGNiZjI3LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMTkyZGFjNzYtYTZkOS00MTNkLWJiNzQtMjIzMDhmMmUwY2M1LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzQ3NTg0NDQ4LTk4YzQtNDM2Yy04OWI5LThkNmZiZWIyYTc3Ni50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zNzVjNzBlNS02ODIyLTQ5MmItODQwOC03Y2QzNTA0NDBhZjcuc3ZnIzM3NWM3MGU1LTY4MjItNDkyYi04NDA4LTdjZDM1MDQ0MGFmN1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNsYXJlbmRvbi1XMDItTWVkaXVtLTY5MzgzNFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iZTk3NmUxZC02ZWRjLTRhMWItYjUwZS1hNmQzMjZiNWEwMmYuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYmU5NzZlMWQtNmVkYy00YTFiLWI1MGUtYTZkMzI2YjVhMDJmLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDE2ODEzNjEtNGE5NS00NjUxLWE2YzgtNDAwNWQwZmM0YTc5LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2ZkYzI2ODk1LTE0OGUtNGZhOC04OThkLTVlYjQ1OWRhYmVjZi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9kNTkxMzZlMi1jMzhhLTRhZDQtOGRlYy0yZDI1OGMxMmZkODAuc3ZnI2Q1OTEzNmUyLWMzOGEtNGFkNC04ZGVjLTJkMjU4YzEyZmQ4MFwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkRJTi1OZXh0LVcwMi1MaWdodFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy80OGU1YTBlMS0yZDU2LTQ2ZTUtOGZjNC0zZDZkNWM5NzNjYmYuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNDhlNWEwZTEtMmQ1Ni00NmU1LThmYzQtM2Q2ZDVjOTczY2JmLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDdkNjJiMjEtOGQ3YS00YzM2LWJlODYtZDMyYWIxMDg5OTcyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2MwMDUwODkwLWJiZWQtNDRiOS05NGRmLTI2MTFkNzJkYmIwNi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85Zjc3NGQxNy1jMDNhLTQxOGUtYTM3NS0zNGYzYmVlY2JjN2Euc3ZnIzlmNzc0ZDE3LWMwM2EtNDE4ZS1hMzc1LTM0ZjNiZWVjYmM3YVwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFtZXJpY2FuVHlwd3J0ZXJJVENXMDItLTczNzA5MVwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wNGJjZWY5Mi00ZWM5LTQ0OTEtOWYwNi00MzM5ODdkZjBlZWEuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDRiY2VmOTItNGVjOS00NDkxLTlmMDYtNDMzOTg3ZGYwZWVhLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNGU1NzEzYzYtZjliZi00NGQ3LWJjMTctNzc1YjdjMTAyZjFjLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzgwZTQwZWI5LTgxNWYtNGI0Mi05ZTk5LTI5NzExN2E2ZWY1Mi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8yNWJiMGM5MC1iZTdmLTRkZmMtYmZmZi01Y2QxNTlkMDk4MzIuc3ZnIzI1YmIwYzkwLWJlN2YtNGRmYy1iZmZmLTVjZDE1OWQwOTgzMlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYS1XMDItTGlnaHRcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZmY4MDg3M2ItNmFjMy00NGY3LWIwMjktMWI0MTExYmVhYzc2LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2ZmODA4NzNiLTZhYzMtNDRmNy1iMDI5LTFiNDExMWJlYWM3Ni5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzgwYzM0YWQyLTI3YzItNGQ5OS05MGZhLTk4NWZkNjRhYjgxYS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iOGNiMDJjMi01YjU4LTQ4ZDgtOTUwMS04ZDAyODY5MTU0YzIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvOTJjOTQxZWEtMmIwNi00YjcyLTkxNjUtMTc0NzZkNDI0ZDZjLnN2ZyM5MmM5NDFlYS0yYjA2LTRiNzItOTE2NS0xNzQ3NmQ0MjRkNmNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJTb2hvLVcwMi1UaGluLUNvbmRlbnNlZFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy82MWQxZTI0NS00MDE2LTRmMjMtYWQ3YS00MDlhNDRjYWJlOTAuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNjFkMWUyNDUtNDAxNi00ZjIzLWFkN2EtNDA5YTQ0Y2FiZTkwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNjhlYjNjZmQtYmU2Yy00ZjllLThjYTQtZTEzY2U4ZDI5MzI5LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzZkYjA0ZDk0LWRlMGItNGJmMC1iZjk0LTExM2ZkMjdlNzQ0MC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84NGUxMTBlOS1mZDI5LTQwMzYtYjlhZC0yNzk2OGE2YmE3OTMuc3ZnIzg0ZTExMGU5LWZkMjktNDAzNi1iOWFkLTI3OTY4YTZiYTc5M1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pZGEtVzAyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzEzMTIwMWZmLTM5NTEtNDU4My1iNGQ5LTJiYzY2ODkyNzU4My5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8xMzEyMDFmZi0zOTUxLTQ1ODMtYjRkOS0yYmM2Njg5Mjc1ODMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81ODIyNzhkYS0wNTA1LTRmYmUtOTEwMi0yYjUyOWM3Yzk3M2Eud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjgyZmJkZTItMTY1NS00NzI4LTk2YTktOTBlZjAyMmM0NTkwLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2QzMjViNjRmLTIxNGItNGZjMC04MGQ2LTRjNjE2MjFjZDU0Mi5zdmcjZDMyNWI2NGYtMjE0Yi00ZmMwLTgwZDYtNGM2MTYyMWNkNTQyXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRHJvaWQtU2VyaWYtVzAyLVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvODcyZDE3Y2YtNzBhYy00NzIyLWI4ZWYtMGYxNTc4MTI1MDQyLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzg3MmQxN2NmLTcwYWMtNDcyMi1iOGVmLTBmMTU3ODEyNTA0Mi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzc2NDc3OWNmLTA3NmQtNDI3YS04N2I0LTEzNmNjYzgzZmJhMC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9mMzJjYzczNC01NjczLTQxYTEtYmQ2ZS0xOTAwYzc4NjkxZjUudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZjYyN2UyMWItYzFhNS00ZTdhLWIwNzItMzczOTFlZThkY2VmLnN2ZyNmNjI3ZTIxYi1jMWE1LTRlN2EtYjA3Mi0zNzM5MWVlOGRjZWZcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG4vKiBNb2JpbGUgc3lzdGVtIGZhbGxiYWNrcyAqL1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29taWMtU2Fucy1XMDItUmVndWxhclwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy82YThiMTQ5OS1mNTM0LTQ2ZmUtYTBhZi04MzViYzgzMjI2Y2QuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNmE4YjE0OTktZjUzNC00NmZlLWEwYWYtODM1YmM4MzIyNmNkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMzAxZTJlYTItODE1My00NTNjLTkwNTEtMGE3MjkwOThlNjgyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2NiZTg4MmMwLTJhYzAtNGEyOC04ZmU3LTE0ZTUyNzk0MjA0Ny50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9lYzY4MGYwOS02YjA3LTQ0MmQtYWIxMS1jZWEyMDhjYzEzOGQuc3ZnI2VjNjgwZjA5LTZiMDctNDQyZC1hYjExLWNlYTIwOGNjMTM4ZFwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXItUFMtVzAyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzQ0MDg3NWViLWU0MzctNDFmYy04YWFlLWI1NjU4YmJlYTNiNy5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy80NDA4NzVlYi1lNDM3LTQxZmMtOGFhZS1iNTY1OGJiZWEzYjcuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iY2M0NzBiOS01YTliLTQ1ZTktYmY2MC02ZGFjYTA2YmM3MGUud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZjkwMTgwNTYtZjU3OS00YzRjLTk1ZWEtOWJkMDJiODU5NzI0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2Y2ZDBlNzc1LWIyZmMtNGJjOC04OTY3LWNkNzg0ODZkNDUxYy5zdmcjZjZkMGU3NzUtYjJmYy00YmM4LTg5NjctY2Q3ODQ4NmQ0NTFjXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW1wYWN0LVcwMi0yMDEwXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzAyZmI0NWNlLWQ3Y2MtNDkxYy1hMTc2LWUyYTg4M2E2MzJiMi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wMmZiNDVjZS1kN2NjLTQ5MWMtYTE3Ni1lMmE4ODNhNjMyYjIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9lYjExODViYi04ZjlkLTQ4NTUtODNmYS1kMDZmMGVmZWY2Nzcud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNTM4NjcxOGQtYmVjNi00MWM1LWI5OTgtMTJkZDFjODU5YzUzLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzAxYWJhNTJiLWQzMmItNDFmYy1hNjgxLWQ3YjRkZmE0MzA0MS5zdmcjMDFhYmE1MmItZDMyYi00MWZjLWE2ODEtZDdiNGRmYTQzMDQxXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhLUNvbnNvbGUtVzAyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzU2MDZkYjIxLWViMTgtNDhmYS05NzliLTYzYmRmMjg1NTVjMC5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81NjA2ZGIyMS1lYjE4LTQ4ZmEtOTc5Yi02M2JkZjI4NTU1YzAuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zZTViMjRlYS00MzQ1LTQ4MzAtOGM3ZC0wZTdlZjI2YjRlNjMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvN2IxNzVmNTEtZmY2Yy00N2QyLTkwOGMtZWU4NTM4YzI4ODBkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2JkMWE2YTUyLWUwYzItNGExYi1iNWE0LTJkMjVlYzJiNTcwNi5zdmcjYmQxYTZhNTItZTBjMi00YTFiLWI1YTQtMmQyNWVjMmI1NzA2XCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGFob21hLVcwMi1SZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2JiMjIzZGNkLTBhMTYtNGU1YS1iMzhiLTRmMmEyOWYyYmNiYi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iYjIyM2RjZC0wYTE2LTRlNWEtYjM4Yi00ZjJhMjlmMmJjYmIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85NGU0NTcwMy1mYmQ3LTQ2ZTUtOWZjZC0yMjhhZTU5ZDYyNjYud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZWYyODJiODAtNThkZS00YjAzLWE5MGYtYzU3MDNkNTRlM2I3LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2NiMTFkZmM2LWYzYzQtNGE1OC04M2FjLWRmNzM1YmE5YzQyOC5zdmcjY2IxMWRmYzYtZjNjNC00YTU4LTgzYWMtZGY3MzViYTljNDI4XCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9zZXdvb2QtVzA4LVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZjQzMmZjYmMtYWU1Mi00ZGIxLWE0YjMtYzcxNDVlNjliM2I2LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2Y0MzJmY2JjLWFlNTItNGRiMS1hNGIzLWM3MTQ1ZTY5YjNiNi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzYyYTIzNjUxLTIzMGMtNDcyNC1iMmMwLTA4NzU0NGVkMWEyNy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9lNDZmMzJkYS1lYjYxLTQ1ZTUtYTFiOC00OWYzYTVmNzgyZjgudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvOWU3M2ZhYzYtYjQ1Yi00YWM1LWE2MDEtOWEwZDcwY2Q0NWIyLnN2ZyM5ZTczZmFjNi1iNDViLTRhYzUtYTYwMS05YTBkNzBjZDQ1YjJcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OlwiQXJpYWwtVzAyLUJsYWNrXCI7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYzA2MDg4YTItOTk0ZC00NGI0LTliMzgtNTVkMmFlOWUxM2E5LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYzA2MDg4YTItOTk0ZC00NGI0LTliMzgtNTVkMmFlOWUxM2E5LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLFxyXG4gIHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNDEyODBkNmQtOTI0MC00ZDgyLTllOTgtM2VhMWExOTEzNTAxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcclxuICB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2JjMzNmNTA0LTI4YWMtNDZhZS1iMjU4LWQ0ZmQxZjU5OWM0Ny50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksXHJcbiAgdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8wZmFhNjMzOC1mZTEwLTQyZTYtOTM0Ni0yYzY2MjZkZGNkNzMuc3ZnIzBmYWE2MzM4LWZlMTAtNDJlNi05MzQ2LTJjNjYyNmRkY2Q3M1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbi8qIGN5cmlsbGljICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkRJTi1OZXh0LVcxMC1MaWdodFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zZDAwOWNkNy1jOGZlLTQwYzAtOTNkYS03NGY0ZWE4YzUzMGIuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvM2QwMDljZDctYzhmZS00MGMwLTkzZGEtNzRmNGVhOGM1MzBiLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYTllOTVhMjktOThhNy00MDRhLTkwZWUtMTkyOWFkMDljNjk2LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzBhNzY2M2ZkLWVhZTgtNGU1MC1hNjdhLTIyNTI3MWY4Y2NlYi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81OGFlOWJlOS01ZDk1LTQ0YjYtOGI2Yy1lNmRhNmE0NjgyMmMuc3ZnIzU4YWU5YmU5LTVkOTUtNDRiNi04YjZjLWU2ZGE2YTQ2ODIyY1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYS1MVC1XMTAtQm9sZFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85ZmUyNjJkYy01YTU1LTRkNzUtOTFhNC1hZWQ3NmJkMzIxOTAuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvOWZlMjYyZGMtNWE1NS00ZDc1LTkxYTQtYWVkNzZiZDMyMTkwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMGEzOTM5ZDAtMzgzMy00ZGIzLThiODUtZjY0YzJiMzM1MGQyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzFiMTI4ZDZkLTEyNmYtNGM5Yy04Zjg3LTNlN2QzMGExNjcxYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iNzkxYzg1MC1mZGUxLTQ4YjMtYWRmMC04OTk4ZDU1YjA4NjYuc3ZnI2I3OTFjODUwLWZkZTEtNDhiMy1hZGYwLTg5OThkNTViMDg2NlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYS1MVC1XMTAtUm9tYW5cIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNjg2YTZhMDYtZTcxMS00YmQyLWIzOTMtODUwNGE0OTdiYjNjLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzY4NmE2YTA2LWU3MTEtNGJkMi1iMzkzLTg1MDRhNDk3YmIzYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzZmOGQxOTgzLTRkMzQtNGZhNC05MTEwLTk4OGY2YzQ5NTc1Ny53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy83OTAzZWUzZi1lOWFiLTRiZGMtYjdkMi1kMjMyZGUyZGE1ODAudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvOWM1OGU5ZWEtZmRlYS00YjljLWIwZjktMGEyMTU3Mzg5ZWQwLnN2ZyM5YzU4ZTllYS1mZGVhLTRiOWMtYjBmOS0wYTIxNTczODllZDBcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJCb2RvbmktUG9zdGVyLVcxMFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zZjJhYzJiNC0wNjYyLTQ0NmQtOGI4YS01MTczODQ5MmVhMDQuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvM2YyYWMyYjQtMDY2Mi00NDZkLThiOGEtNTE3Mzg0OTJlYTA0LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZTA0ZGE3YjctY2NiZi00Y2JmLWIxOWEtOTQ3NTUxZDE3ZGU2LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2NiMzQ4M2NkLTE5MGEtNDYzNC1iMzQ1LWQ4OGYyMmYxZTZmNS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9mZWEyYWQ0Mi0zY2UxLTQzYzQtYjU3MS0zOTE1OWNjMTA5YTYuc3ZnI2ZlYTJhZDQyLTNjZTEtNDNjNC1iNTcxLTM5MTU5Y2MxMDlhNlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkRyb2lkLVNlcmlmLVcxMC1SZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2QwMzljZmM4LTQxZWItNDZkNS1hZDFhLWZhZjRmMGQyNjIyMi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9kMDM5Y2ZjOC00MWViLTQ2ZDUtYWQxYS1mYWY0ZjBkMjYyMjIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81NzFkNjdjYi1kZTNkLTQxYWYtOGMwYS0wNmE1M2Q0OTA0NjYud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNzBmOTQxZjUtZDcwMi00ZTdiLThiMTUtZWU2NWU2Yjg1NWI5LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2UwZmZkNjhlLTU1YTgtNDUzNy1iMmQxLWM1MTg2NWFjMTVlZS5zdmcjZTBmZmQ2OGUtNTVhOC00NTM3LWIyZDEtYzUxODY1YWMxNWVlXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuLyogTW9iaWxlIHN5c3RlbSBmYWxsYmFja3MgKi9cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljLVNhbnMtVzEwLVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNmVhNzhmYmQtNzJkYS00MDZjLWJkMjMtNTU2Mjk3ZTYyZWJiLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzZlYTc4ZmJkLTcyZGEtNDA2Yy1iZDIzLTU1NjI5N2U2MmViYi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzczMzgxODYxLWViNmEtNGY3Yy04YzE0LWNkMzRhNzE0Zjk0My53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85M2FkZjJjZi1mNTRjLTRhNzMtOGVjNy00M2ZlMGIyYzkxYTEudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYTg5ZDRkYmEtY2U2Mi00YWFhLTgxODctYmVhMjhhMmIzYTkwLnN2ZyNhODlkNGRiYS1jZTYyLTRhYWEtODE4Ny1iZWEyOGEyYjNhOTBcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJDb3VyaWVyLVBTLVcxMFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9lZmNlZjhkMy00ZTU0LTQ5NjUtYTVmMC02N2YyODhkNDBjMGEuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZWZjZWY4ZDMtNGU1NC00OTY1LWE1ZjAtNjdmMjg4ZDQwYzBhLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMjU5M2JmZTItMmYzNC00MjE4LWExZTItZmRlM2JkYzY4NmUxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2U4NGU2N2I3LWQ4MjItNDNmNC04MGE5LTMxNWZkZGZmZDcxMi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy83YmJjODE0OC1iOWUyLTQ5YWQtYmQyYS1iNmE4YmE3OGVmYTYuc3ZnIzdiYmM4MTQ4LWI5ZTItNDlhZC1iZDJhLWI2YThiYTc4ZWZhNlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkltcGFjdC1XMTAtMjAxMFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8yZjY1NzljYi01YWRlLTRiNzAtYTk2YS04ZmU5NDg1ZmU3M2YuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMmY2NTc5Y2ItNWFkZS00YjcwLWE5NmEtOGZlOTQ4NWZlNzNmLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMWM3YjVlZjEtNWIwOS00NDczLTgwMDMtYTk3NDg0NjY1M2E3LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzgwNTE3MmEwLWQ3MTgtNDhhYy05MDUzLTg3MzY0MWIzZTIzNi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8xOTc5Zjk4ZS1iMDc0LTQzODUtODFiMC03NzJmMjhhMDA2Njguc3ZnIzE5NzlmOThlLWIwNzQtNDM4NS04MWIwLTc3MmYyOGEwMDY2OFwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYS1Db25zb2xlLVcxMC0wXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2U5Njc4Mjk1LWI2N2EtNGIwMS1iZmI0LWEzNTdmYTVkZDkzOS5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9lOTY3ODI5NS1iNjdhLTRiMDEtYmZiNC1hMzU3ZmE1ZGQ5MzkuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8yYzBiZmZlZi1hNjY2LTQ2NDYtYTRiYy03ZmFmMWZhNjg5ZjUud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNDY5NmQ3MTQtZTNjMC00MzUxLTlkZjgtMmU0NDQ5ZDMwYzNkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzkzNjcxMmVlLTY5MDMtNGFiOC1iNmFkLTk5ZTdjYTE3MjFkMC5zdmcjOTM2NzEyZWUtNjkwMy00YWI4LWI2YWQtOTllN2NhMTcyMWQwXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGFob21hLVcxMC1SZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzUwYzAzYjI2LWZkM2QtNGZhMS05NmQwLWQ4OGI3MjEyOWM0Zi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81MGMwM2IyNi1mZDNkLTRmYTEtOTZkMC1kODhiNzIxMjljNGYuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85ZWUwMDY3OC1iNmQ3LTRiNGYtODQ0OC03MGNmYTI2N2QzNmIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNjg2MWZiNjAtYTY1Ny00NGUyLTkyZmEtODZiZDI2Y2QyNjU3LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2JmNWY0NjZjLTZmNTEtNDQ5ZC05MWIzLTMyZjFmMGMyYjc5Ni5zdmcjYmY1ZjQ2NmMtNmY1MS00NDlkLTkxYjMtMzJmMWYwYzJiNzk2XCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTpcIkFyaWFsLVcxMC1CbGFja1wiO1xyXG4gIHNyYzp1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzI2ODE5NDU5LTBiNjgtNDg2Yi1hZTA1LTJlY2RiZDIyMmZlYi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzp1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzI2ODE5NDU5LTBiNjgtNDg2Yi1hZTA1LTJlY2RiZDIyMmZlYi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSxcclxuICB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzdjZmI3ZWIwLTIzMzItNDA0OC1hN2Y0LTJjM2ZhMzg5YzNhMy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXHJcbiAgdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8yZWRhZmMzNi1jYjk3LTRiMWEtODgwMy1hN2IyZTYxMjU5MjkudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLFxyXG4gIHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDA3NjA0NzAtMDk4Ny00YzY4LTg0NGQtNTY0MjgyZmM4ZmY5LnN2ZyMwMDc2MDQ3MC0wOTg3LTRjNjgtODQ0ZC01NjQyODJmYzhmZjlcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG4vKiBrb3JlYW4gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRkJCbHVlR290aGljTFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85MDIxMDlhNC1lYTM2LTQwYjMtYTIzNC0wNTc0NzY4NGE2MTAuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvOTAyMTA5YTQtZWEzNi00MGIzLWEyMzQtMDU3NDc2ODRhNjEwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMWExMGMxYzAtMTU3YS00ZjU3LTk2YzEtMWFmMmZjMjQyZTA2LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzMxYjAyYTI3LTNjNDEtNDU5My1iZmJmLTg0NzAyNjI3YzlmZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9lNGFhYTBlZS1mY2RkLTQ1NTgtOWQ4ZS1iZTc1YzZiOGM0MTcuc3ZnI2U0YWFhMGVlLWZjZGQtNDU1OC05ZDhlLWJlNzVjNmI4YzQxN1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZCQ2hhbUJsdWVcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvM2RmMDg0ZWQtNDdlNC00MzQ3LTkxYzctNDRkMjkwYzJjMDkzLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzNkZjA4NGVkLTQ3ZTQtNDM0Ny05MWM3LTQ0ZDI5MGMyYzA5My5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzc1YzBlNTcwLWU0ZTAtNGU4Ni1hMDMxLTFhZGUwMWU1YjNmNS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iOWVhY2M0Zi1lZjliLTRmZjUtYmYwOS1mZmNhOGVkYzQzZTIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMTIzMzNhZDUtM2FjMC00YTdkLWIxMDktNmQ4YzgxMDE1MTVhLnN2ZyMxMjMzM2FkNS0zYWMwLTRhN2QtYjEwOS02ZDhjODEwMTUxNWFcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJGQkdyZWVuXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzg5YmJhYjZhLTEyOTEtNDQzOS05Mzg0LWJjN2UzNmFhZThlMC5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84OWJiYWI2YS0xMjkxLTQ0MzktOTM4NC1iYzdlMzZhYWU4ZTAuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zOTljMWYwMC1mZjMxLTRmODctODY4Yy1iY2JmY2FiY2RkNTEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYWQ2Y2M4ZTUtMDUyYy00ZDZjLWFiN2ItNjZiMmY3MGVkYjVmLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzAwNDVjNTExLWUzNjYtNGU4MS1iZDQyLTEzMTgwOGFjNzUwZi5zdmcjMDA0NWM1MTEtZTM2Ni00ZTgxLWJkNDItMTMxODA4YWM3NTBmXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRkJOZW9Hb3RoaWNcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMzMyM2U1YTItY2VmYS00ODg3LTlkZTktOWZkMjg3OTg3NjY0LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzMzMjNlNWEyLWNlZmEtNDg4Ny05ZGU5LTlmZDI4Nzk4NzY2NC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2M1MmE5ZDU5LTk4NGYtNDViNC1iZmQ3LTZmNmFmNTRlYjg5Zi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81OGU2MjQ1ZC03NTRhLTRhMDUtOWJkMi0yNWE2NTVlMzE2NDAudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMjljMjg5MDUtY2M1Ni00MDc3LTg2ZjUtOTE3YWQ4ZTM0YzFjLnN2ZyMyOWMyODkwNS1jYzU2LTQwNzctODZmNS05MTdhZDhlMzRjMWNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJGQlBsdW1cIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvODM3YThhN2YtYmI2MC00MmVkLWE1YmMtYzkzNjhjYzFlY2JhLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzgzN2E4YTdmLWJiNjAtNDJlZC1hNWJjLWM5MzY4Y2MxZWNiYS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzEwMWZkMzg2LWVkNjAtNGVkOS04YWMyLTgwZDA0OTIzNDdhYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81NTM5YWRkZi1lNjBiLTRmYmEtYTM1Ni1jYmFiOGFiZDE2YzYudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNjMyOWVlYTAtYTk1My00NWQ3LTkwNzQtNmYwNTk0ZTI3ZGY3LnN2ZyM2MzI5ZWVhMC1hOTUzLTQ1ZDctOTA3NC02ZjA1OTRlMjdkZjdcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJOYW51bUdvdGhpYy1SZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL25hbnVtLWdvdGhpYy1yZWd1bGFyLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL25hbnVtLWdvdGhpYy1yZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLFxyXG4gIHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvbmFudW0tZ290aGljLXJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxyXG4gIHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvbmFudW0tZ290aGljLXJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJCTS1IQU5OQVwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9ibS1oYW5uYS5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9ibS1oYW5uYS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSxcclxuICB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2JtLWhhbm5hLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcclxuICB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2JtLWhhbm5hLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuLyogYXJhYmljICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFobWVkTFRXMjAtT3V0bGluZVJlZ3VsXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzNiMDE5ZGRhLTUyMDEtNGE5Ni1hYjQwLTQ0OWYwNzg1ZTU3OC5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zYjAxOWRkYS01MjAxLTRhOTYtYWI0MC00NDlmMDc4NWU1NzguZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksXHJcbiAgdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iYzk0OTViZC01ZWRjLTRjNWItYmUyOC1kZmI0NWUyN2U2ODgud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxyXG4gIHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYmNhY2E0MWMtMjg0MC00YWVmLTlmYjQtZjBjNjY1ODllOWNkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcclxuICB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2I1MDAwYWRhLTZmYTQtNGFhZS04YzdlLTZlNmFiZGEyYmU1Ni5zdmcjYjUwMDBhZGEtNmZhNC00YWFlLThjN2UtNmU2YWJkYTJiZTU2XCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQXJpYW4tTFQtVzIwLUxpZ2h0XCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzNlMTUxMzkzLWU2MDUtNDE4Yy04MDUwLWZiNzM0ZTdiNjRiMy5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zZTE1MTM5My1lNjA1LTQxOGMtODA1MC1mYjczNGU3YjY0YjMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9jOTc3YmFkNi05NGMzLTQ1N2MtOTc3MS1kOGUwMDE3YTMzYzIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYTdiZGY3YzctYjQyNS00ZGFlLWI1ODMtOWY4NmVjNTEwZjlmLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2RhODBhYWQ5LWIzYmMtNDE3Yy05NjNmLWI5MDMzYTg3MmVjMS5zdmcjZGE4MGFhZDktYjNiYy00MTdjLTk2M2YtYjkwMzNhODcyZWMxXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQXJpYW4tTFQtVzIwLVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNjRlZjg3OGItYzY5MC00NDdiLWEwMjAtZjQ0OTFiMmRlODIxLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzY0ZWY4NzhiLWM2OTAtNDQ3Yi1hMDIwLWY0NDkxYjJkZTgyMS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2MyNTdhMzczLTk5MTktNDU4Yy1iN2IyLTgzODUwNzc1MDU4ZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9hZmE2N2ViNy0yMzU4LTRkMWQtYmRjZC1kYTA0MzZmNWNmYjIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNTdiYTkzNGUtYzdhZi00MTY2LWEyMmMtNDhlYWY2NWYyNmJiLnN2ZyM1N2JhOTM0ZS1jN2FmLTQxNjYtYTIyYy00OGVhZjY1ZjI2YmJcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJKYW5uYS1MVC1XMjAtUmVndWxhclwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9hOWM0N2QzMC0wZWNhLTQzNGYtODA4Mi1hYzE0MWM0Yzk3YjMuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYTljNDdkMzAtMGVjYS00MzRmLTgwODItYWMxNDFjNGM5N2IzLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMjZjMjQyODYtNWFhYi00NzQ3LTgxYjktNTQzMzBlNzdmYjE0LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzljNGM3ZmZmLTg1YjYtNDQyZi05NzI2LWFmNWY0OWQ0OWU1My50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9hMjRmNTNlZS1lMTVlLTQ5MzEtODlhMy1iNmYxN2ZiZmNkNzIuc3ZnI2EyNGY1M2VlLWUxNWUtNDkzMS04OWEzLWI2ZjE3ZmJmY2Q3MlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkt1ZmktTFQtVzIwLVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNzc0ZWJmYTItNmFjMC00OGNmLThjMTUtMTM5NGQ3YmFiMjY1LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzc3NGViZmEyLTZhYzAtNDhjZi04YzE1LTEzOTRkN2JhYjI2NS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2UwZTMxMWRjLTU2NzQtNDkzYy04YzE5LWYwYTBhMTQyMjgzNy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85NjgyOWRlZS0yYjExLTQzODktYTNiNi0zNWVhYmQ0MjMyMzQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZTdiOTNhN2UtZTYyMy00NjI4LTgwOWMtNGFlNWRmMDgxNDhiLnN2ZyNlN2I5M2E3ZS1lNjIzLTQ2MjgtODA5Yy00YWU1ZGYwODE0OGJcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlTFRXMjAtTGlnaFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9hYjdmMDAyZC01ZjA5LTRhNjUtYjdhZC05ZjAxZWM1YmZhZjAuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYWI3ZjAwMmQtNWYwOS00YTY1LWI3YWQtOWYwMWVjNWJmYWYwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjhlZTdlNDctNDhlNC00YjViLThhNzQtY2YwMjcwOGZiNTRhLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzA3NGZhMzQ2LWE4YzUtNDMzMS05ZDkzLTdhMDYxMjNhZjA2Ny50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9lOTUzZjQ5Yy0xNWE5LTQzOTQtOTdkZC1hM2YyMzBlMTJlMGIuc3ZnI2U5NTNmNDljLTE1YTktNDM5NC05N2RkLWEzZjIzMGUxMmUwYlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1pZGFuLVcyMFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy80ZDU2YzcxOC01MjgyLTQ5MjMtODY3Zi03NjNhZjJmYTg1NzUuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNGQ1NmM3MTgtNTI4Mi00OTIzLTg2N2YtNzYzYWYyZmE4NTc1LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYmU4N2QzNGItNzdkYi00Mjg2LTg3ZDktZDI5NjQxMTVjNmM1LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzUzOTAxNmI4LTFmNzgtNDUwNy1iNTQyLWM5ZTU1YjI2OWFjNi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zYjhjMjg1Ny0wYWIzLTRlYTYtOTBiYy05OTI4YmY1MzM0MGMuc3ZnIzNiOGMyODU3LTBhYjMtNGVhNi05MGJjLTk5MjhiZjUzMzQwY1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRhbnNlZWtNb2Rlcm5XMjAtTGlnaHRcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNzNkOTRjOWItMTViZC00YWY5LWJkYTEtYzVlZTRlZDFjNDA5LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzczZDk0YzliLTE1YmQtNGFmOS1iZGExLWM1ZWU0ZWQxYzQwOS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzY4OGQ3N2ZmLThjMGQtNGJhZi1hYzk1LWY0NWMwMzRlMWNhZi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8xNzdmYjAwMi1hNjE5LTRkMjUtOGE3OS1hZjdkMGU5YTFlZTYudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNGZhMDllMzktYmViOS00NmNhLWJmY2MtZjk1MThhYjRhOWJkLnN2ZyM0ZmEwOWUzOS1iZWI5LTQ2Y2EtYmZjYy1mOTUxOGFiNGE5YmRcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJESU5OZXh0TFRXMjMtVWx0cmFMaWdodFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iNGEwNTM1Yi0zYTg5LTQzYmQtYjNmYi1iNjYxOWQwYjBhMDkuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYjRhMDUzNWItM2E4OS00M2JkLWIzZmItYjY2MTlkMGIwYTA5LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNjNiMGIxNTQtNjRlNi00ODQ2LWJlODAtYjYwMWYzY2U5YjI4LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2YzZjA4ZjEzLWQ0NmYtNDU4OS05MGFjLTcwYzBhMjFjZDA2MS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8xMDg3MDM5NS0xNWU0LTQwYjAtOGY3ZS01ZmZhYjcxOTUyMjQuc3ZnIzEwODcwMzk1LTE1ZTQtNDBiMC04ZjdlLTVmZmFiNzE5NTIyNFwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFyYWJpY1R5cGVzZXR0aW5nVzIzLVJlXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzI4YjRjZTBiLTNhNTktNGY3Yy1hYjNmLTkwOWQ2M2RkMDM1MS5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8yOGI0Y2UwYi0zYTU5LTRmN2MtYWIzZi05MDlkNjNkZDAzNTEuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy81YTMyZTg3ZS0wZjMyLTQ5NzEtYTQzZi00ZWM0NTNiYzc0Y2Eud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvNTBmNTE2YmYtNTYxMS00MTM0LTk1NTYtMjEzMWFhZWEyYjc4LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzhkYjRjYTczLTgyZTEtNDI1OS1hZmNkLWMxZjE1YjE0ZjYyYi5zdmcjOGRiNGNhNzMtODJlMS00MjU5LWFmY2QtYzFmMTViMTRmNjJiXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29IZWFkbGluZVcyMy1BcmFiaWNCb2xcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvOTI1NjM4ZjItOWVkMC00ZjlhLWE3OGQtNjFkNmVkZGQyYjU0LmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzkyNTYzOGYyLTllZDAtNGY5YS1hNzhkLTYxZDZlZGRkMmI1NC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2IxNWE2ODk5LWM3MDYtNDZhOS04YzJiLWE4MGI2MmJhMzAxYi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy8zNmFkOWI5Yi01ZmI5LTQ5ZTYtYWQyZC0xZGFhZmNjZWExNmEudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDVlMzkzYTAtNzFkZi00ZTAyLWI4YmEtNmY2OGYyYjIzYjkyLnN2ZyMwNWUzOTNhMC03MWRmLTRlMDItYjhiYS02ZjY4ZjJiMjNiOTJcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OidBbWlyaSc7XHJcbiAgc3JjOiB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvYW1pcmktcmVndWxhci5lb3QnKTtcclxuICBzcmM6IHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9hbWlyaS1yZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2FtaXJpLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9hbWlyaS1yZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTonRHJvaWQtTmFza2gnO1xyXG4gIHNyYzogdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2Ryb2lkbmFza2gtcmVndWxhci5lb3QnKTtcclxuICBzcmM6IHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9kcm9pZG5hc2toLXJlZ3VsYXIuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvZHJvaWRuYXNraC1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvZHJvaWRuYXNraC1yZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuLyogaGVicmV3ICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFkbGVyLVcyNi1SZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzhmYTliOTE1LTE4MGYtNGI3Mi1hZWU3LTIyZmQwNjZjNTJjNi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84ZmE5YjkxNS0xODBmLTRiNzItYWVlNy0yMmZkMDY2YzUyYzYuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9mY2IzZjc2Zi1hMTEyLTQ3OWUtYWI3Zi1hYjFjMmJlOTA2Yzkud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvY2VkYTRlOTctYTYzMS00OTg2LThjYWItNzA5ZTE3NzViZTMzLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzM1M2M3ZmFmLTBkNTgtNDc1Yi04Y2FhLWYxZDg2M2UwY2YxZC5zdmcjMzUzYzdmYWYtMGQ1OC00NzViLThjYWEtZjFkODYzZTBjZjFkXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmstUnVobC1XMjYtUmVndWxhclwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy85MDg4MjM5OS01MmYxLTQyYTktOTg2Yi1jMmM0OWQzZmI0MDkuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvOTA4ODIzOTktNTJmMS00MmE5LTk4NmItYzJjNDlkM2ZiNDA5LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMGU4MzQ0MjUtZTI2OC00YjM4LWI1YTgtZjI0Yjg2MzJkNmFlLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2NiNWFjZWFiLTVkYmYtNGMwOS1iNjUwLTdjOWQ1MjZjYzExNy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy84NTBlNDVjOS0yMDAzLTQ5ZmEtOGUzZi1jN2RmZDY1NzlhY2Muc3ZnIzg1MGU0NWM5LTIwMDMtNDlmYS04ZTNmLWM3ZGZkNjU3OWFjY1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhhaW0tQXJ1a2VlbS1XMjYtTWVkaXVtXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzZkZThkZjBjLTIzYWYtNDliOS05NTc4LTQyZGI0Yzc1NmQyZC5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy82ZGU4ZGYwYy0yM2FmLTQ5YjktOTU3OC00MmRiNGM3NTZkMmQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9mNzBjMjRiMC1kNmJlLTRkMDQtOTljZC00NmVmYzQxZDAwYjQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMmRkNjRhYzQtN2MzYS00N2ZiLWFjZGItMDYzYjgxMWM5M2Q1LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2E3YWIxNDQ0LTVkOTQtNDQ3NC05ZDMxLTg2ZGY0N2Q4ZDVjMS5zdmcjYTdhYjE0NDQtNWQ5NC00NDc0LTlkMzEtODZkZjQ3ZDhkNWMxXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWlyaWFtLVcyNi1NZWRpdW1cIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYWNmYTg3ZGQtNTA0Mi00MGUxLTg3ZTktMTJlNGE1NTkyNjlmLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2FjZmE4N2RkLTUwNDItNDBlMS04N2U5LTEyZTRhNTU5MjY5Zi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzIxYWViMGEzLTMzMDktNDQxNS04MThiLTM2Zjk0ZTJhMWEzYS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9jNWFjYWZmZC03NTUzLTQyZmYtYTY5My04YjliZTc5NWI0YjMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZGQ1MGQ4ZmItNjc2OS00NjlmLThiZmEtOWNhZWQ4ZTZkZjE4LnN2ZyNkZDUwZDhmYi02NzY5LTQ2OWYtOGJmYS05Y2FlZDhlNmRmMThcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJOZWt1ZG90LVcyNi1Cb2xkXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2MwYTU3MTA3LTg0NGMtNDg0Ny1hZmM2LTAwZjNjYjNjNGQ1Zi5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9jMGE1NzEwNy04NDRjLTQ4NDctYWZjNi0wMGYzY2IzYzRkNWYuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9jMjhiNjVjZC05NTQ0LTQyZjEtOWZmYy1kNmZmYTU0NGU2ZmIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvOWFhNzQ2MDctYzlhZi00YzRiLTlhM2YtZmM3NjQ4OGRjYTI1LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzAwMzgxZGU0LWY4MmEtNDkzOS1iOGUxLTFiYmRlNTFhYzRjZS5zdmcjMDAzODFkZTQtZjgyYS00OTM5LWI4ZTEtMWJiZGU1MWFjNGNlXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiR3VsYXNoLVcyNi1SZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzdjNjcyMjc2LTFkMDctNGZmMi04YjFkLTMyNDVhZjBkYzVjYy5lb3Q/I2llZml4XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy83YzY3MjI3Ni0xZDA3LTRmZjItOGIxZC0zMjQ1YWYwZGM1Y2MuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy82NGY1M2VlYi0xZDVlLTQ5M2MtYWEzYi1hYThlMmMwNjYzMjAud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvN2UzMmE4NzQtODFiYy00ZDM4LTg3YWEtZmY2MjZjZTVhNDAwLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzg1N2Q3ZWZjLTdhOWMtNDU3ZC04YWE1LTQ0ZjA5OTJlNjQ0MS5zdmcjODU3ZDdlZmMtN2E5Yy00NTdkLThhYTUtNDRmMDk5MmU2NDQxXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2hhYmF6aS1XMjYtQm9sZFwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9kYzdmM2M1Ny1mYjJkLTQ2NTYtOTIyNC1lZjlmMWM4ODQ3N2UuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZGM3ZjNjNTctZmIyZC00NjU2LTkyMjQtZWY5ZjFjODg0NzdlLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvMDkwNDhjYjEtZjZhNi00YjQ0LTlkOTYtNmQyMDAxM2VmN2U4LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL2ZlYzQ0ODZlLTI1NGEtNGNiNC1iMWEwLTg1OWNmMjE5MDc5Mi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iMjVkYTc5Yi1mZjlhLTQ4NmUtYmY0Zi0yODkzYzQ3ZGE5Mzkuc3ZnI2IyNWRhNzliLWZmOWEtNDg2ZS1iZjRmLTI4OTNjNDdkYTkzOVwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2V7XHJcbiAgZm9udC1mYW1pbHk6XCJDaGlwcy1XMjYtTm9ybWFsXCI7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYWExNTczMzYtZmZhMS00NzZlLTlhNzItZTlmNTE2ZTg3Y2EzLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOnVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvYWExNTczMzYtZmZhMS00NzZlLTlhNzItZTlmNTE2ZTg3Y2EzLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvZTUyNjkyMmQtNGZlMi00ZTRkLTgzNGQtNmI2MmViZDI0NGRhLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzLzAzZTdlYjE2LTA3MmYtNGM1My1iMjk5LTA4NTM1YmZmMjQyMS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9iMjFhMGVjNi04ZWZiLTQwZGUtOTlmMS0yMGExMWQ0ODI0MDEuc3ZnI2IyMWEwZWM2LThlZmItNDBkZS05OWYxLTIwYTExZDQ4MjQwMVwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFsZWYtUmVndWxhclwiO1xyXG4gIHNyYzogdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9hbGVmLXJlZ3VsYXIuZW90PyNpZWZpeFwiKTtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvYWxlZi1yZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvYWxlZi1yZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSx1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2FsZWYtcmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zSGVicmV3Q29uZGVuc2VkLVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcIi8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvb3BlbnNhbnMtaGVicmV3LWNvbmRlbnNlZC1yZWd1bGFyLmVvdD8jaWVmaXhcIik7XHJcbiAgc3JjOiB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL29wZW5zYW5zLWhlYnJldy1jb25kZW5zZWQtcmVndWxhci5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSxcclxuICB1cmwoXCIvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL29wZW5zYW5zLWhlYnJldy1jb25kZW5zZWQtcmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXHJcbiAgdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9vcGVuc2Fucy1oZWJyZXctY29uZGVuc2VkLXJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OidhbG1vbmktZGwtYWFhLTMwMCc7XHJcbiAgZm9udC13ZWlnaHQ6MzAwOyAvKihsaWdodCkqL1xyXG4gIHNyYzogdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2FsbW9uaS1kbC1hYWEtMzAwLmVvdCcpO1xyXG4gIHNyYzogdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2FsbW9uaS1kbC1hYWEtMzAwLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2FsbW9uaS1kbC1hYWEtMzAwLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvYWxtb25pLWRsLWFhYS0zMDAudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OidhbG1vbmktZGwtYWFhLTQwMCc7XHJcbiAgZm9udC13ZWlnaHQ6NDAwOyAvKihyZWd1bGFyKSovXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHNyYzogdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2FsbW9uaS1kbC1hYWEtNDAwLmVvdCcpO1xyXG4gIHNyYzogdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2FsbW9uaS1kbC1hYWEtNDAwLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2FsbW9uaS1kbC1hYWEtNDAwLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvYWxtb25pLWRsLWFhYS00MDAudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OidhbG1vbmktZGwtYWFhLTcwMCc7XHJcbiAgc3JjOiB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvYWxtb25pLWRsLWFhYS03MDAuZW90Jyk7XHJcbiAgc3JjOiB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvYWxtb25pLWRsLWFhYS03MDAuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvYWxtb25pLWRsLWFhYS03MDAud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9hbG1vbmktZGwtYWFhLTcwMC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2V7XHJcbiAgZm9udC1mYW1pbHk6J2FzaW1vbi1hYWEtNDAwJztcclxuICBzcmM6IHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9hc2ltb24tYWFhLTQwMC5lb3QnKTtcclxuICBzcmM6IHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9hc2ltb24tYWFhLTQwMC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9hc2ltb24tYWFhLTQwMC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2FzaW1vbi1hYWEtNDAwLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTonYXRsYXMtYWFhLTUwMCc7XHJcbiAgc3JjOiB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvYXRsYXMtYWFhLTUwMC5lb3QnKTtcclxuICBzcmM6IHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9hdGxhcy1hYWEtNTAwLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL2F0bGFzLWFhYS01MDAud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9hdGxhcy1hYWEtNTAwLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTonbWl4dGFwZS1hYWEtNDAwJztcclxuICBzcmM6IHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9taXh0YXBlLWFhYS00MDAuZW90Jyk7XHJcbiAgc3JjOiB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvbWl4dGFwZS1hYWEtNDAwLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL21peHRhcGUtYWFhLTQwMC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL21peHRhcGUtYWFhLTQwMC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2V7XHJcbiAgZm9udC1mYW1pbHk6J211c2V1bS1hYWEtNDAwJztcclxuICBzcmM6IHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9tdXNldW0tYWFhLTQwMC5lb3QnKTtcclxuICBzcmM6IHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9tdXNldW0tYWFhLTQwMC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9tdXNldW0tYWFhLTQwMC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL211c2V1bS1hYWEtNDAwLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTonb21lcy1hYWEtNDAwJztcclxuICBzcmM6IHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9vbWVzLWFhYS00MDAuZW90Jyk7XHJcbiAgc3JjOiB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2Uvb21lcy1hYWEtNDAwLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL29tZXMtYWFhLTQwMC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL29tZXMtYWFhLTQwMC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2V7XHJcbiAgZm9udC1mYW1pbHk6J01lb2RlZFBhc2h1dC1vZXJlZ3VsYXInO1xyXG4gIHNyYzogdXJsKCcvL3N0YXRpYy5wYXJhc3RvcmFnZS5jb20vc2VydmljZXMvdGhpcmQtcGFydHkvZm9udHMvdXNlci1zaXRlLWZvbnRzL2ZvbnRzL29wZW4tc291cmNlL21lb2RlZHBhc2h1dF9vZXJlZ3VsYXIuZW90Jyk7XHJcbiAgc3JjOiB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvbWVvZGVkcGFzaHV0X29lcmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gIHVybCgnLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9vcGVuLXNvdXJjZS9tZW9kZWRwYXNodXRfb2VyZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICB1cmwoJy8vc3RhdGljLnBhcmFzdG9yYWdlLmNvbS9zZXJ2aWNlcy90aGlyZC1wYXJ0eS9mb250cy91c2VyLXNpdGUtZm9udHMvZm9udHMvb3Blbi1zb3VyY2UvbWVvZGVkcGFzaHV0X29lcmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXHJcbiAgdXJsKFwiLy9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL3RoaXJkLXBhcnR5L2ZvbnRzL3VzZXItc2l0ZS1mb250cy9mb250cy9tZW9kZWRwYXNodXRfb2VyZWd1bGFyLnN2ZyNtZW9kZWRwYXNodXRfb2VyZWd1bGFyXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG4iLCIvKlxyXG4gKiBPcGVuIFNhbnMgSGVicmV3IChIZWJyZXcpIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9mb250cy9lYXJseWFjY2Vzc1xyXG4gKi9cclxuIEBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldyc7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgc3JjOiB1cmwoLy9mb250cy5nc3RhdGljLmNvbS9lYS9vcGVuc2Fuc2hlYnJldy92My9PcGVuU2Fuc0hlYnJldy1MaWdodEl0YWxpYy5lb3QpO1xyXG4gIHNyYzogdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctTGlnaHRJdGFsaWMuZW90PyNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctTGlnaHRJdGFsaWMud29mZjIpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgIHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUxpZ2h0SXRhbGljLndvZmYpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctTGlnaHRJdGFsaWMudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3JztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBzcmM6IHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUxpZ2h0LmVvdCk7XHJcbiAgc3JjOiB1cmwoLy9mb250cy5nc3RhdGljLmNvbS9lYS9vcGVuc2Fuc2hlYnJldy92My9PcGVuU2Fuc0hlYnJldy1MaWdodC5lb3Q/I2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgICAgICB1cmwoLy9mb250cy5nc3RhdGljLmNvbS9lYS9vcGVuc2Fuc2hlYnJldy92My9PcGVuU2Fuc0hlYnJldy1MaWdodC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctTGlnaHQud29mZikgZm9ybWF0KCd3b2ZmJyksXHJcbiAgICAgICB1cmwoLy9mb250cy5nc3RhdGljLmNvbS9lYS9vcGVuc2Fuc2hlYnJldy92My9PcGVuU2Fuc0hlYnJldy1MaWdodC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHNyYzogdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctSXRhbGljLmVvdCk7XHJcbiAgc3JjOiB1cmwoLy9mb250cy5nc3RhdGljLmNvbS9lYS9vcGVuc2Fuc2hlYnJldy92My9PcGVuU2Fuc0hlYnJldy1JdGFsaWMuZW90PyNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctSXRhbGljLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICAgICB1cmwoLy9mb250cy5nc3RhdGljLmNvbS9lYS9vcGVuc2Fuc2hlYnJldy92My9PcGVuU2Fuc0hlYnJldy1JdGFsaWMud29mZikgZm9ybWF0KCd3b2ZmJyksXHJcbiAgICAgICB1cmwoLy9mb250cy5nc3RhdGljLmNvbS9lYS9vcGVuc2Fuc2hlYnJldy92My9PcGVuU2Fuc0hlYnJldy1JdGFsaWMudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3JztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBzcmM6IHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LVJlZ3VsYXIuZW90KTtcclxuICBzcmM6IHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LVJlZ3VsYXIuZW90PyNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgIHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3JztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBzcmM6IHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUJvbGRJdGFsaWMuZW90KTtcclxuICBzcmM6IHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUJvbGRJdGFsaWMuZW90PyNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctQm9sZEl0YWxpYy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctQm9sZEl0YWxpYy53b2ZmKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgIHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUJvbGRJdGFsaWMudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3JztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBzcmM6IHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUJvbGQuZW90KTtcclxuICBzcmM6IHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUJvbGQuZW90PyNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctQm9sZC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctQm9sZC53b2ZmKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgIHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3JztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBzcmM6IHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUV4dHJhQm9sZEl0YWxpYy5lb3QpO1xyXG4gIHNyYzogdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctRXh0cmFCb2xkSXRhbGljLmVvdD8jaWVmaXgpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICAgICAgIHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUV4dHJhQm9sZEl0YWxpYy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctRXh0cmFCb2xkSXRhbGljLndvZmYpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgdXJsKC8vZm9udHMuZ3N0YXRpYy5jb20vZWEvb3BlbnNhbnNoZWJyZXcvdjMvT3BlblNhbnNIZWJyZXctRXh0cmFCb2xkSXRhbGljLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgc3JjOiB1cmwoLy9mb250cy5nc3RhdGljLmNvbS9lYS9vcGVuc2Fuc2hlYnJldy92My9PcGVuU2Fuc0hlYnJldy1FeHRyYUJvbGQuZW90KTtcclxuICBzcmM6IHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUV4dHJhQm9sZC5lb3Q/I2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgICAgICB1cmwoLy9mb250cy5nc3RhdGljLmNvbS9lYS9vcGVuc2Fuc2hlYnJldy92My9PcGVuU2Fuc0hlYnJldy1FeHRyYUJvbGQud29mZjIpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgIHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUV4dHJhQm9sZC53b2ZmKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgIHVybCgvL2ZvbnRzLmdzdGF0aWMuY29tL2VhL29wZW5zYW5zaGVicmV3L3YzL09wZW5TYW5zSGVicmV3LUV4dHJhQm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uL2Fzc2V0cy9jc3MvbGFuZ3VhZ2UuY3NzJztcclxuQGltcG9ydCAnLi8uLi9hc3NldHMvY3NzL29wZW5zYW5zaGVicmV3LmNzcyc7XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeVdlYkZvbnQnO1xyXG4gICAgIHNyYzogIFxyXG4gICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnQvYmMxNzYyNzAtMTdmYS00Yzc4LWEzNDMtOWZlNTI4MjRlNTAxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250LzY5YjQwMzkyLTQ1M2EtNDM4YS1hMTIxLWE0OWU1ZmJjOTIxMy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250LzYwYmU1YzM5LTg2M2UtNDBjYi05NDM0LTZlYmFmYjYyYWIyYi53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgICAgICAgdXJsKCcuLi9hc3NldHMvZm9udC82MGJlNWMzOS04NjNlLTQwY2ItOTQzNC02ZWJhZmI2MmFiMmIud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnQvM2M1YmVkYTgtNDVjYy00Zjc2LWFiY2EtOGVjY2ZlYjYyMjBjLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnQvNDAyMWEzYjktZjc4Mi00MzhiLWFlYjQtYzAwODEwOWE4YjY0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250LzAwNzhmNDg2LThlNTItNDJjMC1hZDgxLTNjOGQzZDQzZjQ4ZS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250L2FlZTc0Y2IzLWM5MTMtNGI1NC05NzIyLTYwMDFjOTIzMjVmMi53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250L2Q1MTNlMTVlLThmMzUtNDEyOS1hZDA1LTQ4MTgxNWU1MjYyNS53b2ZmMicpIGZvcm1hdCgnd29mZjInKTsgXHJcbiAgfVxyXG4ubWFpbl93cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmJvZHksIGh0bWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeVdlYkZvbnQnICFpbXBvcnRhbnQ7XHJcbn1cclxuaGVhZGVyLCAuY29udGVudCwgZm9vdGVyIC5jb250ZW50IHtcclxuICAgIHdpZHRoOiA3MiU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGxlZnQ6IDE4OXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXlXZWJGb250JyAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250ZW50X3Bvc2l0aW9uIHtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIDEuMHMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOmFsbCAxLjBzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246YWxsIDEuMHMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjphbGwgMS4wcyBlYXNlLWluLW91dDtcclxufVxyXG4ubWFyZ2luX2JvdHRvbTI1MCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNTBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgICBoZWFkZXIsIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoZWFkZXIsIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgaGVhZGVyLCAuY29udGVudCB7XHJcbiAgICAgICAgbGVmdDogMTM3cHg7XHJcbiAgICAgICAgd2lkdGg6IDcyJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBoZWFkZXIsIC5jb250ZW50IHtcclxuICAgICAgICBsZWZ0OiAxMzdweDtcclxuICAgICAgICB3aWR0aDogNzIlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
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

/***/ "./src/app/user/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, http) {
        this.afAuth = afAuth;
        this.http = http;
        this.varifyFirebaseToken = function (token, callback) {
            console.log("hiiiiiiiiiii");
            this.http.post('https://dev-munchies.herokuapp.com/api/user/verifyFirebaseToken', token).subscribe(function (resData) {
                console.log(resData);
                callback(resData);
            }, function (error) {
                console.log('error', 'Allow Signup', 'Server Error');
            });
        };
    }
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem("isLoggedIn");
    };
    AuthService.prototype.getDomainName = function () {
        return "http://localhost:9191";
    };
    AuthService.prototype.setLoggedIn = function (value) {
        console.log(value);
        localStorage.setItem("isLoggedIn", value);
    };
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        console.log("in do fb login");
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider();
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (fbres) {
                console.log(fbres);
                resolve(fbres);
            }, function (error) {
                reject(error);
            });
            _this.afAuth.auth.currentUser.getIdToken(true).then(function (idToken) {
                console.log("loginwithFacebook==>idToken", idToken);
                _this.varifyFirebaseToken(idToken, function (result) {
                    console.log(result.data);
                    if (result.success) {
                        var token = {
                            token: result.data
                        };
                        console.log("varifyFirebaseToken response  ", result);
                    }
                    else {
                        alert(result.data);
                    }
                    console.log(result);
                });
            }).catch(function (error) {
                alert(error);
                console.log("login Error==>", error);
            }).catch(function (error) {
                alert(error);
                console.log("login Error sign in popup==>", error);
            });
        });
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
            provider.addScope('https://www.googleapis.com/auth/plus.login');
            provider.addScope('https://www.googleapis.com/auth/plus.profile.emails.read');
            provider.addScope('email');
            _this.afAuth.auth.currentUser.getIdToken(true).then(function (idToken) {
                console.log("firbase login idToken==>", idToken);
                _this.varifyFirebaseToken(idToken, function (res) {
                    if (res.success) {
                        var token = {
                            token: res.data
                        };
                        console.log("varifyFirebaseToken response  ", res);
                    }
                    else {
                        alert(res.data);
                    }
                    console.log(res);
                });
            }).catch(function (error) {
                alert(error);
                console.log("login Error==>", error);
            }).catch(function (error) {
                alert(error);
                console.log("login Error sign in popup==>", error);
            });
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/user/auth/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/user/auth/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/user/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log(this.auth.isLoggedIn());
        if (this.auth.isLoggedIn()) {
            return true;
        }
        else {
            alert("You are not Logged In");
            this.router.navigate(['signIn']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/user/change-password/change-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".change_password_page_wrapper {\r\n    width: 100%;\r\n    display: block;\r\n\r\n}\r\n.change_password {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.change_password .circle {\r\n\twidth: 400px;\r\n    height: 400px;\r\n    background-color: rgb(125, 187, 195);\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    left: 80px;\r\n    top: 40px;\r\n}\r\n.change_password_content {\r\n\twidth: 60%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    z-index: 99;\r\n    padding: 30px 0px;\r\n}\r\n.change_password_content h2 {\r\n\tmargin-left: 90px;\r\n    margin-bottom: 30px;\r\n    color: #E5663D;\r\n    font-size: 23px;\r\n}\r\n.change_password_content form input {\r\n    width: 45%;\r\n    margin-bottom: 20px;\r\n    padding: 10px 20px;\r\n    display: block;\r\n    border: 2px solid #b7b4b4;\r\n    background-color: transparent;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTs7Q0FFbEI7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFDRDtDQUNDLGFBQWE7SUFDVixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7Q0FDYjtBQUNEO0NBQ0MsV0FBVztJQUNSLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtDQUNyQjtBQUNEO0NBQ0Msa0JBQWtCO0lBQ2Ysb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsOEJBQThCO0NBQ2pDIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbmdlX3Bhc3N3b3JkX3BhZ2Vfd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG4uY2hhbmdlX3Bhc3N3b3JkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmNoYW5nZV9wYXNzd29yZCAuY2lyY2xlIHtcclxuXHR3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNSwgMTg3LCAxOTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogODBweDtcclxuICAgIHRvcDogNDBweDtcclxufVxyXG4uY2hhbmdlX3Bhc3N3b3JkX2NvbnRlbnQge1xyXG5cdHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgcGFkZGluZzogMzBweCAwcHg7XHJcbn1cclxuLmNoYW5nZV9wYXNzd29yZF9jb250ZW50IGgyIHtcclxuXHRtYXJnaW4tbGVmdDogOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG4uY2hhbmdlX3Bhc3N3b3JkX2NvbnRlbnQgZm9ybSBpbnB1dCB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2I3YjRiNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"change_password_page_wrapper\">\n  <div class=\"change_password\">\n    <div class=\"circle\"></div>\n    <div class=\"change_password_content\">\n      <h2>Change Password</h2>\n      <form [formGroup]=\"changePasswordForm\" (onSubmit)=\"submit()\">\n        <input type=\"password\" formControlName=\"currentPassword\" name=\"currentPassword\" placeholder=\"Current Password\" />\n        <input type=\"password\" formControlName=\"newPassword\" name=\"newPassword\" placeholder=\"New Password\" />\n        <input type=\"password\" formControlName=\"reEnterNewPassword\" name=\"reEnterNewPassword\" placeholder=\"Re Enter New Password\" />\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.ts ***!
  \*******************************************************************/
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
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/user/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/user/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/collaborate/collaborate.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/collaborate/collaborate.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.vendors_home_chefs {\r\n    width: 100%;\r\n}\r\n.vendors_home_chefs .box {\r\n    padding: 20px;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n.vendors_home_chefs .box h2 {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 23px;\r\n}\r\n.heading_color {\r\n    color: #E5663D;\r\n}\r\n.vendors_home_chefs .box p {\r\n    color: #3F7CAC;\r\n    letter-spacing: 1px;\r\n    line-height: 25px;\r\n    font-size: 18px;\r\n}\r\n.vendors_home_chefs .box p {\r\n    margin: 0px;\r\n    font-size: 18px;\r\n}\r\n.vendors_home_chefs .box .btn {\r\n    text-align: center;\r\n    display: block;\r\n    margin: 60px 0px 20px 0px;\r\n    color: #E5663D;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.vendors_home_chefs .box a {\r\n    text-decoration: none;\r\n    color: #E5663D;\r\n    padding: 10px 20px 10px 5px;\r\n    border-radius: 20px;\r\n    background-color: transparent;\r\n    transition: color 0.4s ease 0s, background-color 0.4s ease 0s;\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb2xsYWJvcmF0ZS9jb2xsYWJvcmF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWix1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsOERBQThEO0lBQzlELGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29sbGFib3JhdGUvY29sbGFib3JhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udmVuZG9yc19ob21lX2NoZWZzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi52ZW5kb3JzX2hvbWVfY2hlZnMgLmJveCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi52ZW5kb3JzX2hvbWVfY2hlZnMgLmJveCBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcbi5oZWFkaW5nX2NvbG9yIHtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG59XHJcbi52ZW5kb3JzX2hvbWVfY2hlZnMgLmJveCBwIHtcclxuICAgIGNvbG9yOiAjM0Y3Q0FDO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi52ZW5kb3JzX2hvbWVfY2hlZnMgLmJveCBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi52ZW5kb3JzX2hvbWVfY2hlZnMgLmJveCAuYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA2MHB4IDBweCAyMHB4IDBweDtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnZlbmRvcnNfaG9tZV9jaGVmcyAuYm94IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2UgMHMsIGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlIDBzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/collaborate/collaborate.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/collaborate/collaborate.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vendors_home_chefs\">\n    <div class=\"box\">\n        <h2 class=\"heading_color\">New Vendors</h2>\n        <p>We are continuously looking for new and healthy products that can go in our snack bag. These products may include dry snacks, juices, teas and anything else with a minimum of 8-week shelf life.</p>\n        <p>Our website will list your company as a collaborator and you get the opportunity to get your product into the hands of more customers.</p>\n        <p>If you're a company that's interested in featuring your product in our bag, write to us! Please write a note about your company and product along with pricing details and we'll get back to you as soon as we can.</p>\n        <div class=\"btn\">Write to us at <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/collaborate/collaborate.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/collaborate/collaborate.component.ts ***!
  \***********************************************************/
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
            template: __webpack_require__(/*! ./collaborate.component.html */ "./src/app/user/collaborate/collaborate.component.html"),
            styles: [__webpack_require__(/*! ./collaborate.component.css */ "./src/app/user/collaborate/collaborate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CollaborateComponent);
    return CollaborateComponent;
}());



/***/ }),

/***/ "./src/app/user/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/contact/contact.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact_page_wrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    margin-top: 40px;\r\n}\r\n.contact_information {\r\n    width: 400px;\r\n    height: 400px;\r\n    background-color: rgb(63, 124, 172);\r\n    color: #fff;\r\n    border-radius: 50%;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    margin-left: -35px;\r\n    margin-top: -50px;\r\n    letter-spacing: 1px;\r\n}\r\n.contact_information .email_id {\r\n    margin-top: 140px;\r\n    margin-left: 70px;\r\n}\r\n.contact_information .email_id a {\r\n    text-decoration: none;\r\n    color: #fff;\r\n}\r\n.contact_information .mobile_number {\r\n    margin-top: 30px;\r\n    margin-left: 70px;\r\n}\r\n.contact_us_text {\r\n    color: #E5663D;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    margin-top: 20px;\r\n    margin-left: 30px;\r\n}\r\n@media screen and (min-width: 300px) {\r\n    .contact_page_wrapper, .signin_page_wrapper {\r\n        flex-direction: column;\r\n        margin-top: 90px;\r\n    }\r\n    .contact_information {\r\n        width: 300px;\r\n        height: 300px;\r\n        margin: -50px auto 0 auto;\r\n    }\r\n    .contact_information .email_id {\r\n        padding-top: 0px;\r\n        font-size: 18px;\r\n        margin-top: 70px;\r\n        margin-left: 40px;\r\n    }\r\n    .contact_us_text {\r\n        margin: 30px auto;\r\n    }\r\n    .contact_information .mobile_number {\r\n        margin-top: 30px;\r\n        margin-left: 70px;\r\n    }\r\n}\r\n@media screen and (min-width: 480px) {\r\n    .contact_information .email_id {\r\n        padding-top: 0;\r\n        margin-top: 70px;\r\n        margin-left: 40px;\r\n    \r\n    }\r\n}\r\n@media screen and (min-width: 768px) {\r\n    \r\n    .contact_page_wrapper{\r\n        flex-direction: row;\r\n        margin-top: 40px;\r\n    }\r\n    .contact_information {\r\n\r\n        width: 400px;\r\n        height: 400px;\r\n        margin: -90px 0px 0px 25px;\r\n    \r\n    }\r\n    .contact_information .email_id {\r\n        padding-top: 0;\r\n        margin-top: 140px;\r\n        margin-left: 70px;\r\n    \r\n    }\r\n    .contact_us_text {\r\n        margin-left: 50px;\r\n        margin-top: 0;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n    \r\n}\r\n@media screen and (min-width: 1024px) {\r\n    \r\n}\r\n@media screen and (min-width: 1280px) {\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJO1FBQ0ksdUJBQXVCO1FBQ3ZCLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksYUFBYTtRQUNiLGNBQWM7UUFDZCwwQkFBMEI7S0FDN0I7SUFDRDtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0tBQ3JCO0NBQ0o7QUFFRDtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7O0tBRXJCO0NBQ0o7QUFDRDs7SUFFSTtRQUNJLG9CQUFvQjtRQUNwQixpQkFBaUI7S0FDcEI7SUFDRDs7UUFFSSxhQUFhO1FBQ2IsY0FBYztRQUNkLDJCQUEyQjs7S0FFOUI7SUFDRDtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsa0JBQWtCOztLQUVyQjtJQUNEO1FBQ0ksa0JBQWtCO1FBQ2xCLGNBQWM7S0FDakI7Q0FDSjtBQUNEOztDQUVDO0FBQ0Q7O0NBRUM7QUFDRDs7Q0FFQyIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdF9wYWdlX3dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uY29udGFjdF9pbmZvcm1hdGlvbiB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCAxMjQsIDE3Mik7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi5jb250YWN0X2luZm9ybWF0aW9uIC5lbWFpbF9pZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG59XHJcbi5jb250YWN0X2luZm9ybWF0aW9uIC5lbWFpbF9pZCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jb250YWN0X2luZm9ybWF0aW9uIC5tb2JpbGVfbnVtYmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxufVxyXG4uY29udGFjdF91c190ZXh0IHtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuY29udGFjdF9wYWdlX3dyYXBwZXIsIC5zaWduaW5fcGFnZV93cmFwcGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdF9pbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAtNTBweCBhdXRvIDAgYXV0bztcclxuICAgIH1cclxuICAgIC5jb250YWN0X2luZm9ybWF0aW9uIC5lbWFpbF9pZCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0X3VzX3RleHQge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfaW5mb3JtYXRpb24gLm1vYmlsZV9udW1iZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGFjdF9pbmZvcm1hdGlvbiAuZW1haWxfaWQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgXHJcbiAgICAuY29udGFjdF9wYWdlX3dyYXBwZXJ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfaW5mb3JtYXRpb24ge1xyXG5cclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBtYXJnaW46IC05MHB4IDBweCAwcHggMjVweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfaW5mb3JtYXRpb24gLmVtYWlsX2lkIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfdXNfdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact_page_wrapper\">\n    <div class=\"contact_information\">\n        <div class=\"email_id\"><a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a></div>\n    </div>\n    <div class=\"contact_us_text\">Contact us</div>\n</div>"

/***/ }),

/***/ "./src/app/user/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/contact/contact.component.ts ***!
  \***************************************************/
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
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/user/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/user/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/user/delivery/delivery.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/delivery/delivery.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select_delivery_address_wrapper {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    padding: 60px 0px;\r\n    display: block;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.delivery_content {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.select_delivery_address_wrapper h3 {\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.delivery_form form .row:first-child {\r\n    width: 40%;\r\n    float: left;\r\n}\r\n.delivery_form form .row:nth-child(2) {\r\n    width: 56%;\r\n    float: left;\r\n    margin-left: 4%;\r\n}\r\n.form_control {\r\n    width: 100%;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    margin-bottom: 20px;\r\n    border: 2px solid #e2e2e2;\r\n}\r\n.invalid-feedback {    \r\n    color: red;\r\n    background-color: antiquewhite;\r\n    border: 2px solid antiquewhite !important;\r\n    margin-bottom: 20px;\r\n}\r\n.delivery_form p {\r\n    float: left;\r\n    margin-top: 0;\r\n    font-size: 14px;\r\n    color: #E5663D;\r\n}\r\n.btns .btn:first-child {\r\n    margin-right: 30px;\r\n}\r\n.btn {\r\n    text-decoration: none;\r\n    color: rgba(50, 50, 50, 1);\r\n    padding: 10px 20px;\r\n    background-color: #fff;\r\n    border-radius: 25px;\r\n    border: 2px solid rgba(50, 50, 50, 1);\r\n    font-weight: bold;\r\n    margin-top: 50px;\r\n    cursor: pointer;\r\n    outline: none;\r\n    float: left;\r\n}\r\n.btn a {\r\n    text-decoration: none;\r\n    color: rgba(50, 50, 50, 1);\r\n    padding: 10px 20px;\r\n    background-color: #fff;\r\n    border-radius: 25px;\r\n    border: 2px solid rgba(50, 50, 50, 1);\r\n    font-weight: bold;\r\n}\r\n.btn:hover {\r\n    color: #fff;\r\n    background-color: rgba(50, 50, 50, 1);\r\n    border: 2px solid rgba(50, 50, 50, 1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9kZWxpdmVyeS9kZWxpdmVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLFlBQVk7SUFDWixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtJQUMvQiwwQ0FBMEM7SUFDMUMsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0NBQ2Y7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxzQ0FBc0M7Q0FDekMiLCJmaWxlIjoic3JjL2FwcC91c2VyL2RlbGl2ZXJ5L2RlbGl2ZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0X2RlbGl2ZXJ5X2FkZHJlc3Nfd3JhcHBlciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA2MHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZGVsaXZlcnlfY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5zZWxlY3RfZGVsaXZlcnlfYWRkcmVzc193cmFwcGVyIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG59XHJcbi5kZWxpdmVyeV9mb3JtIGZvcm0gLnJvdzpmaXJzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmRlbGl2ZXJ5X2Zvcm0gZm9ybSAucm93Om50aC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogNTYlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNCU7XHJcbn1cclxuLmZvcm1fY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMmUyZTI7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2sgeyAgICBcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBhbnRpcXVld2hpdGUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmRlbGl2ZXJ5X2Zvcm0gcCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxufVxyXG4uYnRucyAuYnRuOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG4uYnRuIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDEpO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDUwLCA1MCwgNTAsIDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5idG4gYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAxKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1MCwgNTAsIDUwLCAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5idG46aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDEpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1MCwgNTAsIDUwLCAxKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/delivery/delivery.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/delivery/delivery.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select_delivery_address_wrapper\">\n  <div class=\"delivery_content\">\n      <h3>Munchies bag to this address</h3>\n      <div class=\"delivery_form\">\n          <form [formGroup] = \"deliveryForm\" (ngSubmit) = \"onSubmit()\">\n              <div class=\"row\">\n                  <div class=\"fields\">\n                      <div>\n                        <input class=\"form_control\" formControlName=\"name\" type=\"text\" name=\"name\" placeholder=\"Name\" />\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback form_control\">\n                            <div *ngIf=\"submitted && f.name.errors.required\">Name is required</div>\n                        </div>\n                      </div>\n                      <div>\n                        <input class=\"form_control\" type=\"text\" formControlName=\"surName\" name=\"surName\" placeholder=\"Surname\" />\n                        <div *ngIf=\"submitted && f.surName.errors\" class=\"invalid-feedback form_control\">\n                            <div *ngIf=\"submitted && f.surName.errors.required\">SurName is required</div>\n                        </div>\n                      </div>\n                      <div>\n                        <input class=\"form_control\" type=\"text\" formControlName=\"phone\" name=\"phone\" minlength=\"10\" maxlength=\"10\" placeholder=\"Phone Number\" />\n                        <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback form_control\">\n                            <div *ngIf=\"submitted && f.phone.errors.required\">Phone Number is required</div>\n                            <div *ngIf=\"submitted && f.phone.errors.maxlength\">Maxlength</div>\n                            <div *ngIf=\"submitted && f.phone.errors.pattern\">Please enter valid Phone Number</div>\n                        </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                    <div class=\"fields\">\n                        <div>\n                            <select class=\"form_control\" formControlName=\"area\" name=\"area\" placeholder=\"Area\">\n                                <option value=\"Area of Delivery\">Area of Delivery</option>\n                            </select>\n                            <div *ngIf=\"submitted && f.area.errors\" class=\"invalid-feedback form_control\">\n                                <div *ngIf=\"submitted && f.area.errors.required\">Area is required</div>\n                            </div>\n                        </div>\n                        <div>\n                            <input class=\"form_control\" type=\"text\" formControlName=\"address\" name=\"address\" placeholder=\"Address...\" />\n                            <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback form_control\">\n                                <div *ngIf=\"submitted && f.address.errors.required\">Address is required</div>\n                            </div>\n                        </div>\n                        <div>\n                            <input class=\"form_control\" type=\"text\" formControlName=\"postalCode\" name=\"postalCode\" placeholder=\"Postal Code\" />\n                            <div *ngIf=\"submitted && f.postalCode.errors\" class=\"invalid-feedback form_control\">\n                                <div *ngIf=\"submitted && f.postalCode.errors.required\">Postal Code is required</div>\n                                <div *ngIf=\"submitted && f.postalCode.errors.pattern\">Please Enter Valid postal Code</div>\n                            </div>\n                        </div>\n                    </div>\n              </div>\n          <p>*If you can't find you're area, we aren't delivering there yet. But we will be there soon :)</p>\n          <div *ngIf=\"!isLoggedIn\" class=\"btns\">\n             <a routerLink=\"/signIn\" class=\"btn\">Sign In</a>\n             <a routerLink=\"/sign-up\" class=\"btn\">Sign Up</a>\n          </div>\n          <button *ngIf=\"isLoggedIn\" class=\"btn\">Make Payment</button>          \n        </form>\n      </div>\n  </div>\n  <!-- <div class=\"create_account\">\n      <h2>Create an account</h2>\n      <form [formGroup] = \"createAccount\" (ngSubmit) = \"onSubmit()\">\n          <input type=\"email\" name=\"email\" placeholder=\"Email\" />\n          <input type=\"password\" name=\"createPassword\" placeholder=\"Create Password\" />\n          <input type=\"password\" name=\"confirmPassword\" placeholder=\"Confirm Password\" />\n      </form>\n  </div> -->\n  <!-- <div class=\"make_payment_btn\">\n      <a href=\"/order-summary\">Make Payment</a>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/user/delivery/delivery.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/delivery/delivery.component.ts ***!
  \*****************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/user/auth.service.ts");
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
    function DeliveryComponent(router, formBuilder, http, auth, route) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.auth = auth;
        this.route = route;
        this.submitted = false;
        this.name = "";
        this.surName = "";
        this.area = "";
        this.address = "";
        this.phone = "";
        this.postalCode = "";
        this.data = {};
        this.httpOptions = {};
        this.isLoggedIn = this.auth.isLoggedIn();
    }
    DeliveryComponent.prototype.ngOnInit = function () {
        this.deliveryForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+') // validates input is digit
                ]],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{6}(?:-[0-9]{4})?$')]],
        });
    };
    Object.defineProperty(DeliveryComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.deliveryForm.controls; },
        enumerable: true,
        configurable: true
    });
    DeliveryComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.deliveryForm.invalid) {
            return;
        }
        this.data = {
            name: this.f.name.value,
            surName: this.f.surName.value,
            area: this.f.area.value,
            address: this.f.address.value,
            phoneNumber: this.f.phone.value,
            postalCode: this.f.postalCode.value,
            planId: this.route.snapshot.queryParamMap.get('selectedPlan')
        };
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Cache-Control': 'no-cache'
            })
        };
        console.log("route params", this.data);
        this.http.post(this.auth.getDomainName() + '/api/order/createOrder', this.data, this.httpOptions).subscribe(function (data) {
            console.log("order created", data);
        }, function (err) {
            console.log(err);
        });
        //this.http('', )
    };
    DeliveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delivery',
            template: __webpack_require__(/*! ./delivery.component.html */ "./src/app/user/delivery/delivery.component.html"),
            styles: [__webpack_require__(/*! ./delivery.component.css */ "./src/app/user/delivery/delivery.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DeliveryComponent);
    return DeliveryComponent;
}());



/***/ }),

/***/ "./src/app/user/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@font-face {\r\n    font-family: 'Brandon-Grot-W01-Light';\r\n     src:url('e00ba30a-0bf3-4c76-9392-8641fa237a92.eot') format(\"eot\"),\r\n\t url('69b40392-453a-438a-a121-a49e5fbc92131.woff2') format(\"woff2\"),\r\n\t url('9362bca5-b362-4543-a051-2129e2def911.woff') format(\"woff\"),\r\n\t url('85060878-ca6c-43cc-ac31-7edccfdca71b.ttf') format(\"truetype\");\r\n  }\r\nheader, .content, footer .content {\r\n    width: 72%;\r\n    margin: 0 auto;\r\n    left: 189px;\r\n    background-color: rgb(240, 238, 235);\r\n}\r\nfooter {\r\n    font-family: 'Brandon-Grot-W01-Light' !important;\r\n    min-height: 120px;\r\n    background-color: #fe938c;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n}\r\nfooter .content {\r\n    background: transparent;\r\n}\r\n.social_media_icons {    \r\n    margin-bottom: 15px;\r\n    margin-top: 15px;\r\n}\r\n.social_media_icons a:first-child img {\r\n    margin-right: 10px;\r\n}\r\n.footer_line {\r\n    color: #fff;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n}\r\n.footer_line div {\r\n    text-align: center;\r\n    display: inline-block;\r\n    padding-right: 55px;\r\n    flex: auto;\r\n}\r\n.copy_right {\r\n    letter-spacing: 1px;\r\n}\r\n.copy_right span {\r\n    margin-right: 10px;\r\n}\r\n.footer_line div a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n@media screen and (min-width: 300px) {\r\n    .footer_line {\r\n        flex-direction: column;\r\n    }\r\n    .social_media_icons {\r\n        text-align: center;\r\n    }\r\n    .footer_line div {\r\n        margin-right: 0px; \r\n        margin-bottom: 10px;\r\n        text-align: center;\r\n        padding-right: 0px;\r\n        display: block; \r\n    }\r\n    \r\n    footer .content {\r\n        width: 100%;\r\n    }\r\n}\r\n@media screen and (min-width: 480px) {\r\n\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .footer_line div {\r\n        padding-right: 0px;\r\n        margin-bottom: 0px;\r\n        text-align: left;\r\n        padding-right: 10px;\r\n        display: inline-block; \r\n        margin-bottom: 10px;\r\n        box-sizing: border-box;\r\n    }\r\n    .footer_line {\r\n        flex-direction: row;\r\n    }\r\n    .social_media_icons {\r\n        text-align: center;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n\r\n    footer .content {\r\n        width: 72%;\r\n    }\r\n}\r\n@media screen and (min-width: 1024px) {\r\n\r\n}\r\n@media screen and (min-width: 1280px) {\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0NBQXNDO0tBQ3JDOzs7cUVBR3FGO0dBQ3ZGO0FBQ0g7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixxQ0FBcUM7Q0FDeEM7QUFDRDtJQUNJLGlEQUFpRDtJQUNqRCxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSx3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSTtRQUNJLHVCQUF1QjtLQUMxQjtJQUNEO1FBQ0ksbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsZUFBZTtLQUNsQjs7SUFFRDtRQUNJLFlBQVk7S0FDZjtDQUNKO0FBRUQ7O0NBRUM7QUFDRDtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsdUJBQXVCO0tBQzFCO0lBQ0Q7UUFDSSxvQkFBb0I7S0FDdkI7SUFDRDtRQUNJLG1CQUFtQjtLQUN0QjtDQUNKO0FBQ0Q7O0lBRUk7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjtBQUNEOztDQUVDO0FBQ0Q7Q0FDQyIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCcmFuZG9uLUdyb3QtVzAxLUxpZ2h0JztcclxuICAgICBzcmM6dXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnQvZTAwYmEzMGEtMGJmMy00Yzc2LTkzOTItODY0MWZhMjM3YTkyLmVvdFwiKSBmb3JtYXQoXCJlb3RcIiksXHJcblx0IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250LzY5YjQwMzkyLTQ1M2EtNDM4YS1hMTIxLWE0OWU1ZmJjOTIxMzEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXHJcblx0IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250LzkzNjJiY2E1LWIzNjItNDU0My1hMDUxLTIxMjllMmRlZjkxMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXHJcblx0IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250Lzg1MDYwODc4LWNhNmMtNDNjYy1hYzMxLTdlZGNjZmRjYTcxYi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbiAgfVxyXG5oZWFkZXIsIC5jb250ZW50LCBmb290ZXIgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDcyJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbGVmdDogMTg5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzgsIDIzNSk7XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQnJhbmRvbi1Hcm90LVcwMS1MaWdodCcgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlOTM4YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmZvb3RlciAuY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc29jaWFsX21lZGlhX2ljb25zIHsgICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uc29jaWFsX21lZGlhX2ljb25zIGE6Zmlyc3QtY2hpbGQgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uZm9vdGVyX2xpbmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uZm9vdGVyX2xpbmUgZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDU1cHg7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG59XHJcbi5jb3B5X3JpZ2h0IHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLmNvcHlfcmlnaHQgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmZvb3Rlcl9saW5lIGRpdiBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuZm9vdGVyX2xpbmUge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAuc29jaWFsX21lZGlhX2ljb25zIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyX2xpbmUgZGl2IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZm9vdGVyIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5mb290ZXJfbGluZSBkaXYge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9saW5lIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbF9tZWRpYV9pY29ucyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblxyXG4gICAgZm9vdGVyIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogNzIlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer>\n  <div class=\"content\">\n      <div class=\"social_media_icons\">\n          <a href=\"#\"><span><img src=\"../../assets/facebook.png\" /></span></a>\n          <a href=\"#\"><span><img src=\"../../assets/instagram.png\" /></span></a>\n      </div>\n      <div class=\"footer_line\">\n          <div class=\"copy_right\"><span>&copy; 2018 Amedes Pvt. Ltd</span></div>\n          <div class=\"refund_and_cancel\"><a routerLink=\"/refund-and-cancellation\">Refund and Cancellation</a></div>\n          <div class=\"terms_and_conditions\">Terms & Conditions</div>\n          <div class=\"privacy_policy\"><a routerLink=\"/privacy-policy\">Privacy Policy</a></div>\n          <div class=\"Cookie_policy\">Cookie Policy</div>\n         <!-- <div class=\"Cookie_policy\"><a routerLink=\"/delivery\">Delivery</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/order-summary\">Order Summary</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/manage-subscription\">Manage Subscription</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/my-orders\">My Orders</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/skip-week\">Skip a Week</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/thank-you\">Thank you</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/personal-details\">Personal Details</a></div>\n          <div class=\"Cookie_policy\"><a routerLink=\"/change-password\">Change Password</a></div> -->\n      </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/user/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/footer/footer.component.ts ***!
  \*************************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/user/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/user/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/user/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header_wrapper {\r\n    width: 100%;\r\n    display: block;\r\n    height: 80px;\r\n    background: #fff;\r\n    z-index: 999;\r\n    position: fixed;\r\n    top: 0;\r\n}\r\nheader, .content, footer .content {\r\n    font-family: 'MyWebFont' !important;\r\n    width: 72%;\r\n    margin: 0 auto;\r\n    left: 189px;\r\n    background-color: #fff;\r\n}\r\n.site_header {\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 100;\r\n}\r\nnav .wrapper .logo {\r\n    height: 80px;\r\n    float: left;\r\n    padding-left: 10px;\r\n}\r\nnav .wrapper .logo img {\r\n    width: auto;\r\n    height: 80px;\r\n}\r\nnav .wrapper ul {\r\n    list-style: none;\r\n    padding-right: 10px;\r\n    margin: 0;   \r\n    float: right;\r\n}\r\nnav .wrapper ul li.bars, nav .wrapper ul li.bars_cross {\r\n    display: none;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    padding: 15px 15px 10px;\r\n    transition: right 0.5s ease 0s;\r\n}\r\nnav .wrapper ul li.bars .bar1, nav .wrapper ul li.bars .bar2, nav .wrapper ul li.bars .bar3, nav .wrapper ul li.bars_cross .bar1, nav .wrapper ul li.bars_cross .bar2, nav .wrapper ul li.bars_cross .bar3 {\r\n    width: 25px;\r\n    height: 2px;\r\n    background: #FFF;\r\n    margin-bottom: 8px;\r\n    transition: all 0.6s;\r\n}\r\nnav .wrapper ul li {\r\n    text-decoration: none;\r\n    text-align: center;\r\n    display: inline-block;\r\n}\r\nnav .wrapper ul li:last-child {\r\n    margin-right: 0;\r\n    margin-left: 5px;\r\n}\r\n.responsive_menu {\r\n    position: absolute;\r\n    width: 230px;\r\n    right: -231px;\r\n    transition: right 0.4s ease 0s;\r\n    background-color: #fff;\r\n    border: 1px solid rgb(240, 238, 235);\r\n    top: 9px;\r\n    display: none;\r\n}\r\n.menu_item {\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n}\r\n.menu_item a {\r\n    text-decoration: none;\r\n    color: #292929;\r\n    transition: color 0.5s ease 0s, background-color 0.5s ease 0s;\r\n    width: 100%;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    display: block;\r\n}\r\n.menu_item a:hover {\r\n    background-color: #292929;\r\n    color: #fff;\r\n}\r\n.menu_item a.active {\r\n    background-color: #292929;\r\n    color: #fff;\r\n}\r\nnav .wrapper ul li a {\r\n    text-decoration: none;\r\n    color: #DE6B48;\r\n    line-height: 80px;\r\n    font-size: 16px;\r\n    font-family: din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif;\r\n}\r\nnav .wrapper ul li:last-child a {\r\n    border: 2px solid red;\r\n    padding: 8px 25px;\r\n    border-radius: 40px;\r\n    font-weight: bold;\r\n}\r\nnav .wrapper ul li:last-child a:hover {\r\n    color: #fff;\r\n    background-color: rgba(50, 50, 50, 1);\r\n    border: 2px solid rgba(50, 50, 50, 1);\r\n}\r\n.subscribe_btn {\r\n    margin-top: 20px;\r\n    box-sizing: border-box;\r\n    float: left;\r\n    border: 2px solid red;\r\n    border-radius: 20px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n}\r\n.subscribe_btn a {\r\n    padding: 0 20px;\r\n    text-decoration: none;\r\n    color: red;\r\n}\r\n.snack_right_video {\r\n    margin: 150px auto 150px auto;\r\n    text-align: center;\r\n}\r\n.snack_right_video h2 {\r\n    color: #292929;\r\n    font-size: 2.5em;\r\n    font-weight: 100;\r\n    letter-spacing: 3.3px;\r\n}\r\n.snack_right_img {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 20px solid transparent;\r\n    border-bottom: 20px solid transparent;\r\n    border-left: 50px solid rgb(63, 124, 172);\r\n    margin: 0 auto;\r\n}\r\n.content_box {\r\n    background-color: #fff;\r\n    padding: 40px 20px 80px 80px;\r\n    margin-bottom: 20px;\r\n    float: left;\r\n}\r\n.content_box div {\r\n    float: left;\r\n    width: 22%;\r\n}\r\n.content_box img {\r\n    width: 150px;\r\n    height: auto;\r\n}\r\n.content_box .text {\r\n    margin-right: 20px;\r\n    line-height: 22px;\r\n    letter-spacing: 1px;\r\n    font-size: 18px;\r\n    float: left;\r\n    width: 53%;\r\n}\r\n.content_box_wrapper .content_box:nth-child(2) {\r\n    padding: 80px 0px 80px 15px;\r\n    background-color: rgba(125, 187, 195, 1);\r\n}\r\n.content_box_wrapper > h2 {\r\n    text-align: center;\r\n    color: #E5663D;\r\n    margin: 40px 0px;\r\n    display: block;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.text-upper {\r\n    text-transform: uppercase;\r\n}\r\n.boxes {\r\n    display: block;\r\n    float: left;\r\n}\r\n.boxes .box {\r\n    background-color: rgba(125, 187, 195, 0.85);\r\n    margin-right: 10px;\r\n    padding: 10px;\r\n    min-height: 400px;\r\n    float: left;\r\n    width: 24%;\r\n    box-sizing: border-box;\r\n}\r\n.boxes .box:nth-child(4) {\r\n    margin-right: 0px;\r\n}\r\n.boxes .box h3 {\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    font-size: 20px;\r\n}\r\n.boxes .box p {\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n    color: rgb(63, 61, 61);\r\n}\r\n.subscribe_btn2 {\r\n    margin: 80px 0px;\r\n    text-align: center;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.subscribe_btn2 a {\r\n    border: 4px solid;\r\n    border-color: rgba(63, 124, 172, 1);\r\n    padding: 5px 30px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: #fff;\r\n    background-color: rgba(63, 124, 172, 1);\r\n    font-size: 23px;\r\n    transition: border-color 0.4s ease 0s, background-color 0.4s ease 0s;\r\n}\r\n.subscribe_btn2 a:hover {\r\n    background-color: #fff;\r\n    color: #292929;\r\n    border-color: #fff;\r\n}\r\n.whats_inside {\r\n    text-align: center;\r\n}\r\n.whats_inside h2 {\r\n    color: #DE6B48;\r\n    margin-bottom: 40px;\r\n}\r\n.whats_inside p {\r\n    width: 80%;\r\n    margin: 50px auto;\r\n    letter-spacing: 1px;\r\n    line-height: 22px;\r\n}\r\n.whats_inside span {\r\n    color: #DE6B48;\r\n    text-decoration: underline;\r\n}\r\n.food_box {\r\n    display: block;\r\n    background: #fff;\r\n    padding: 10px 10px 5px 10px;\r\n    margin-bottom: 40px;\r\n}\r\n.food_box:nth-child(even) { \r\n    background-color: rgba(222, 107, 72, 1);\r\n    color: #fff;\r\n}\r\n.text_area {\r\n    width: 43%;\r\n    line-height: 22px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    margin-right: 24px;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n}\r\n.food_box:nth-child(even) .text_area{\r\n    margin-right: 0px;\r\n}\r\n.text_area h3 {\r\n    margin-top: 5px;\r\n}\r\n.text_area p:last-child {\r\n    margin-bottom: 0px;\r\n}\r\n.food_box .img {\r\n    display: inline-block;\r\n    width: 53%;\r\n    box-sizing: border-box;\r\n}\r\n.food_box .img img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.food_box:nth-child(even) .img {\r\n    margin-right: 20px;\r\n    background-color: rgba(222, 107, 72, 1);\r\n}\r\n.food_box:nth-child(4) .img {\r\n    width: 42%;\r\n}\r\n.food_box:nth-child(4) .text_area {\r\n    width: 52%;\r\n}\r\n.remove_margin_bottom {\r\n    margin-bottom: 0px;\r\n}\r\n.remove_margin_top {\r\n    margin-top: 0px;\r\n}\r\nnav .wrapper ul li.bars.open {\r\n    display: none;\r\n}\r\nnav .wrapper ul li.bars_cross {\r\n    right: 232px;\r\n    display: block;\r\n    z-index: 99999;\r\n}\r\nnav .wrapper ul li.bars_cross .bar1 {\r\n    -webkit-transform: rotate(45deg) translate(8px, 7px);\r\n            transform: rotate(45deg) translate(8px, 7px);\r\n}\r\nnav .wrapper ul li.bars_cross .bar2 {\r\n    opacity: 0;\r\n}\r\nnav .wrapper ul li.bars_cross .bar3 {\r\n    -webkit-transform: rotate(-45deg) translate(7px, -6px);\r\n            transform: rotate(-45deg) translate(7px, -6px);\r\n}\r\n.responsive_menu.openSideMenu {\r\n    right: 0px;\r\n}\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #292929;\r\n    display: none;\r\n}\r\n@media screen and (min-width: 300px) {\r\n    header, .content {\r\n        left: 0;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n    nav .wrapper ul li {\r\n        display: none;\r\n    }\r\n    nav .wrapper ul li.bars {\r\n        display: block;\r\n    }\r\n    nav .wrapper ul li.bars_cross.close {\r\n        display: block;\r\n    }\r\n    .responsive_menu {\r\n        display: block;\r\n    }\r\n    .overlay.showOverlay {\r\n        display: block;\r\n    }\r\n}\r\n@media screen and (min-width: 480px) {\r\n\r\n}\r\n@media screen and (min-width: 768px) {\r\n    nav .wrapper ul li {\r\n        margin-right: 20px;\r\n        display: inline-block;\r\n    }\r\n    nav .wrapper ul li.bars {\r\n        display: none;\r\n    }\r\n    nav .wrapper ul li.bars_cross.close {\r\n        display: none;\r\n    }\r\n    .responsive_menu {\r\n        display: none;\r\n    }\r\n    .overlay.showOverlay {\r\n        display: none;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n    nav .wrapper ul li.bars {\r\n        display: none;\r\n    }\r\n    .responsive_menu {\r\n        display: none;\r\n    }\r\n    header, .content {\r\n        left: 137px;\r\n        width: 72%;\r\n        box-sizing: border-box;\r\n    }\r\n    nav .wrapper ul li {\r\n        margin: 0px 14px;\r\n        display: inline-block;\r\n    }\r\n}\r\n@media screen and (min-width: 1024px) {\r\n\r\n}\r\n@media screen and (min-width: 1280px) {\r\n    header {\r\n        left: 189px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsT0FBTztDQUNWO0FBQ0Q7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLCtCQUErQjtDQUNsQztBQUNEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBSW5CLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLFNBQVM7SUFDVCxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDhEQUE4RDtJQUM5RCxZQUFZO0lBQ1osY0FBYztJQUNkLHVCQUF1QjtJQUN2QixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUZBQWlGO0NBQ3BGO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsc0NBQXNDO0NBQ3pDO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztDQUNkO0FBR0Q7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QywwQ0FBMEM7SUFDMUMsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osV0FBVztDQUNkO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0NBQ2Q7QUFDRDtJQUNJLDRCQUE0QjtJQUM1Qix5Q0FBeUM7Q0FDNUM7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtDQUNmO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGVBQWU7SUFDZixZQUFZO0NBQ2Y7QUFDRDtJQUNJLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtDQUNmO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLHFFQUFxRTtDQUN4RTtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLHdDQUF3QztJQUN4QyxZQUFZO0NBQ2Y7QUFDRDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsd0NBQXdDO0NBQzNDO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtDQUNsQjtBQUNEO0lBQ0kscURBQTZDO1lBQTdDLDZDQUE2QztDQUNoRDtBQUNEO0lBQ0ksV0FBVztDQUNkO0FBQ0Q7SUFDSSx1REFBK0M7WUFBL0MsK0NBQStDO0NBQ2xEO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsY0FBYztDQUNqQjtBQUNEO0lBQ0k7UUFDSSxRQUFRO1FBQ1IsWUFBWTtRQUNaLHVCQUF1QjtLQUMxQjtJQUNEO1FBQ0ksY0FBYztLQUNqQjtJQUNEO1FBQ0ksZUFBZTtLQUNsQjtJQUNEO1FBQ0ksZUFBZTtLQUNsQjtJQUNEO1FBQ0ksZUFBZTtLQUNsQjtJQUNEO1FBQ0ksZUFBZTtLQUNsQjtDQUNKO0FBRUQ7O0NBRUM7QUFDRDtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLHNCQUFzQjtLQUN6QjtJQUNEO1FBQ0ksY0FBYztLQUNqQjtJQUNEO1FBQ0ksY0FBYztLQUNqQjtJQUNEO1FBQ0ksY0FBYztLQUNqQjtJQUNEO1FBQ0ksY0FBYztLQUNqQjtDQUNKO0FBQ0Q7SUFDSTtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsdUJBQXVCO0tBQzFCO0lBQ0Q7UUFDSSxpQkFBaUI7UUFDakIsc0JBQXNCO0tBQ3pCO0NBQ0o7QUFDRDs7Q0FFQztBQUNEO0lBQ0k7UUFDSSxZQUFZO0tBQ2Y7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXJfd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxufVxyXG5oZWFkZXIsIC5jb250ZW50LCBmb290ZXIgLmNvbnRlbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeVdlYkZvbnQnICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNzIlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBsZWZ0OiAxODlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpdGVfaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5uYXYgLndyYXBwZXIgLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxubmF2IC53cmFwcGVyIC5sb2dvIGltZyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5uYXYgLndyYXBwZXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDA7ICAgXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxubmF2IC53cmFwcGVyIHVsIGxpLmJhcnMsIG5hdiAud3JhcHBlciB1bCBsaS5iYXJzX2Nyb3NzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogcmlnaHQgMC41cyBlYXNlIDBzO1xyXG59XHJcbm5hdiAud3JhcHBlciB1bCBsaS5iYXJzIC5iYXIxLCBuYXYgLndyYXBwZXIgdWwgbGkuYmFycyAuYmFyMiwgbmF2IC53cmFwcGVyIHVsIGxpLmJhcnMgLmJhcjMsIG5hdiAud3JhcHBlciB1bCBsaS5iYXJzX2Nyb3NzIC5iYXIxLCBuYXYgLndyYXBwZXIgdWwgbGkuYmFyc19jcm9zcyAuYmFyMiwgbmF2IC53cmFwcGVyIHVsIGxpLmJhcnNfY3Jvc3MgLmJhcjMge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbn1cclxubmF2IC53cmFwcGVyIHVsIGxpIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5uYXYgLndyYXBwZXIgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5yZXNwb25zaXZlX21lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgcmlnaHQ6IC0yMzFweDtcclxuICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgZWFzZSAwcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQwLCAyMzgsIDIzNSk7XHJcbiAgICB0b3A6IDlweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1lbnVfaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tZW51X2l0ZW0gYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzI5MjkyOTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZSAwcywgYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UgMHM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm1lbnVfaXRlbSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubWVudV9pdGVtIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5uYXYgLndyYXBwZXIgdWwgbGkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI0RFNkI0ODtcclxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGRpbi1uZXh0LXcwMS1saWdodCxkaW4tbmV4dC13MDItbGlnaHQsZGluLW5leHQtdzEwLWxpZ2h0LHNhbnMtc2VyaWY7XHJcbn1cclxubmF2IC53cmFwcGVyIHVsIGxpOmxhc3QtY2hpbGQgYSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5uYXYgLndyYXBwZXIgdWwgbGk6bGFzdC1jaGlsZCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAxKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTAsIDUwLCA1MCwgMSk7XHJcbn1cclxuLnN1YnNjcmliZV9idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG4uc3Vic2NyaWJlX2J0biBhIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4uc25hY2tfcmlnaHRfdmlkZW8ge1xyXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDE1MHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNuYWNrX3JpZ2h0X3ZpZGVvIGgyIHtcclxuICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMy4zcHg7XHJcbn1cclxuLnNuYWNrX3JpZ2h0X2ltZyB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgcmdiKDYzLCAxMjQsIDE3Mik7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uY29udGVudF9ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDQwcHggMjBweCA4MHB4IDgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNvbnRlbnRfYm94IGRpdiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMiU7XHJcbn1cclxuLmNvbnRlbnRfYm94IGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmNvbnRlbnRfYm94IC50ZXh0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUzJTtcclxufVxyXG4uY29udGVudF9ib3hfd3JhcHBlciAuY29udGVudF9ib3g6bnRoLWNoaWxkKDIpIHtcclxuICAgIHBhZGRpbmc6IDgwcHggMHB4IDgwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI1LCAxODcsIDE5NSwgMSk7XHJcbn1cclxuLmNvbnRlbnRfYm94X3dyYXBwZXIgPiBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxuICAgIG1hcmdpbjogNDBweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnRleHQtdXBwZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYm94ZXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uYm94ZXMgLmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNSwgMTg3LCAxOTUsIDAuODUpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjQlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uYm94ZXMgLmJveDpudGgtY2hpbGQoNCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmJveGVzIC5ib3ggaDMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmJveGVzIC5ib3ggcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6IHJnYig2MywgNjEsIDYxKTtcclxufVxyXG4uc3Vic2NyaWJlX2J0bjIge1xyXG4gICAgbWFyZ2luOiA4MHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN1YnNjcmliZV9idG4yIGEge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNjMsIDEyNCwgMTcyLCAxKTtcclxuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgMTI0LCAxNzIsIDEpO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNHMgZWFzZSAwcywgYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2UgMHM7XHJcbn1cclxuLnN1YnNjcmliZV9idG4yIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG59XHJcbi53aGF0c19pbnNpZGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53aGF0c19pbnNpZGUgaDIge1xyXG4gICAgY29sb3I6ICNERTZCNDg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi53aGF0c19pbnNpZGUgcCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuLndoYXRzX2luc2lkZSBzcGFuIHtcclxuICAgIGNvbG9yOiAjREU2QjQ4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmZvb2RfYm94IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCA1cHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLmZvb2RfYm94Om50aC1jaGlsZChldmVuKSB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDEwNywgNzIsIDEpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnRleHRfYXJlYSB7XHJcbiAgICB3aWR0aDogNDMlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLmZvb2RfYm94Om50aC1jaGlsZChldmVuKSAudGV4dF9hcmVhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLnRleHRfYXJlYSBoMyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn0gXHJcbi50ZXh0X2FyZWEgcDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uZm9vZF9ib3ggLmltZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTMlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZm9vZF9ib3ggLmltZyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmZvb2RfYm94Om50aC1jaGlsZChldmVuKSAuaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLCAxMDcsIDcyLCAxKTtcclxufVxyXG4uZm9vZF9ib3g6bnRoLWNoaWxkKDQpIC5pbWcge1xyXG4gICAgd2lkdGg6IDQyJTtcclxufVxyXG4uZm9vZF9ib3g6bnRoLWNoaWxkKDQpIC50ZXh0X2FyZWEge1xyXG4gICAgd2lkdGg6IDUyJTtcclxufVxyXG4ucmVtb3ZlX21hcmdpbl9ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5yZW1vdmVfbWFyZ2luX3RvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxubmF2IC53cmFwcGVyIHVsIGxpLmJhcnMub3BlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbm5hdiAud3JhcHBlciB1bCBsaS5iYXJzX2Nyb3NzIHtcclxuICAgIHJpZ2h0OiAyMzJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbn1cclxubmF2IC53cmFwcGVyIHVsIGxpLmJhcnNfY3Jvc3MgLmJhcjEge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg4cHgsIDdweCk7XHJcbn1cclxubmF2IC53cmFwcGVyIHVsIGxpLmJhcnNfY3Jvc3MgLmJhcjIge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5uYXYgLndyYXBwZXIgdWwgbGkuYmFyc19jcm9zcyAuYmFyMyB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSg3cHgsIC02cHgpO1xyXG59XHJcbi5yZXNwb25zaXZlX21lbnUub3BlblNpZGVNZW51IHtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkge1xyXG4gICAgaGVhZGVyLCAuY29udGVudCB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgbmF2IC53cmFwcGVyIHVsIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgbmF2IC53cmFwcGVyIHVsIGxpLmJhcnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgbmF2IC53cmFwcGVyIHVsIGxpLmJhcnNfY3Jvc3MuY2xvc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnJlc3BvbnNpdmVfbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAub3ZlcmxheS5zaG93T3ZlcmxheSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBuYXYgLndyYXBwZXIgdWwgbGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBuYXYgLndyYXBwZXIgdWwgbGkuYmFycyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIG5hdiAud3JhcHBlciB1bCBsaS5iYXJzX2Nyb3NzLmNsb3NlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnJlc3BvbnNpdmVfbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5vdmVybGF5LnNob3dPdmVybGF5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBuYXYgLndyYXBwZXIgdWwgbGkuYmFycyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5yZXNwb25zaXZlX21lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIsIC5jb250ZW50IHtcclxuICAgICAgICBsZWZ0OiAxMzdweDtcclxuICAgICAgICB3aWR0aDogNzIlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICBuYXYgLndyYXBwZXIgdWwgbGkge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDE0cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgbGVmdDogMTg5cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header_wrapper\">\n    <header class=\"site_header\">\n        <nav>\n            <div class=\"wrapper\">\n                <div class=\"logo\">\n                    <a routerLink=\"/home\"><img src=\"../assets/logo.png\" alt=\"No Image\" /></a>\n                </div>\n                <ul>\n                    <li class=\"bars\" id=\"open\" (click)=\"openSideMenu($event)\">\n                        <div class=\"bar1\"></div>\n                        <div class=\"bar2\"></div>\n                        <div class=\"bar3\"></div>\n                    </li>\n                    <li><a routerLink=\"/collaborate\">Collaborate</a></li>\n                    <li><a routerLink=\"/admin/pages/\">Admin</a></li>\n                    <li><a routerLink=\"/ manage-subscription\">MS</a></li>\n\n                    <li><a routerLink=\"/help\">Help</a></li>\n                    <li><a routerLink=\"/contact\">Contact</a></li>\n                    <li>\n                        <a *ngIf=\"!isLoggedIn\" routerLink=\"/signIn\">Sign In</a>\n                        <a *ngIf=\"isLoggedIn\" (click)=\"logout()\">Logout</a>\n                    </li>\n                    <li><a routerLink=\"/subscribe\">Get the Bag</a></li>\n                </ul>\n                <div class=\"overlay\" id=\"overlay\"></div>\n                <div class=\"responsive_menu\" id=\"responsive_menu\">\n                    <div class=\"menu_list\">\n                        <div class=\"menu_item\">\n                            <a class=\"active\" routerLink=\"/collaborate\">Collaborate</a>\n                        </div>\n                        <div class=\"menu_item\">\n                            <a routerLink=\"/help\">Help</a>\n                        </div>\n                        <div class=\"menu_item\">\n                            <a routerLink=\"/contact\">Contact</a>\n                        </div>\n                        <div class=\"menu_item\">\n                            <a routerLink=\"/signIn\">Sign IN</a>\n                        </div>\n                        <div class=\"menu_item\">\n                            <a routerLink=\"/subscribe\">Get the Bag</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </nav>\n    </header>\n</div>"

/***/ }),

/***/ "./src/app/user/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/user/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.isLoggedIn = JSON.parse(this.auth.isLoggedIn());
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
    HeaderComponent.prototype.logout = function () {
        this.auth.setLoggedIn(false);
        this.router.navigate(['/signIn']);
    };
    // toggleIsLoggedIn() {
    //   this.isLoggedIn = !this.isLoggedIn;
    // }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(this.isLoggedIn);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/user/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/user/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/user/help/help.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/help/help.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh2.faq {\r\n    font-size: 30px;\r\n    color: #E5663D;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    letter-spacing: 2px;\r\n}\r\nol {\r\n    margin-top: 80px;\r\n    counter-reset: item;\r\n}\r\nol li {\r\n    line-height: 22px;\r\n    font-size: 18px;\r\n    color: #605E5E;\r\n    margin-bottom: 20px;\r\n    list-style-type:none;\r\n    counter-increment:item;\r\n}\r\nol li::before {\r\n    display:inline-block;\r\n    font-weight:bold;\r\n    content:counter(item) \".\";\r\n}\r\nol li span {\r\n    font-weight: bold;\r\n    margin-left: 8px;\r\n}\r\nol li p {\r\n    margin: 5px;\r\n    text-indent: 23px;\r\n}\r\nol li p a {\r\n    color: #605E5E;\r\n}\r\n@media screen and (min-width: 300px) {\r\n    h2.faq {\r\n        margin-top: 120px;\r\n    }\r\n    ol {\r\n        margin-top: 35px;\r\n    }\r\n}\r\n@media screen and (min-width: 768px) {\r\n    h2.faq {\r\n        margin-top: 50px;\r\n    }\r\n    ol {\r\n        margin-top: 80px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJO1FBQ0ksa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSxpQkFBaUI7S0FDcEI7Q0FDSjtBQUNEO0lBQ0k7UUFDSSxpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLGlCQUFpQjtLQUNwQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oMi5mYXEge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5vbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgY291bnRlci1yZXNldDogaXRlbTtcclxufVxyXG5vbCBsaSB7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNjA1RTVFO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG4gICAgY291bnRlci1pbmNyZW1lbnQ6aXRlbTtcclxufVxyXG5vbCBsaTo6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGNvbnRlbnQ6Y291bnRlcihpdGVtKSBcIi5cIjtcclxufVxyXG5vbCBsaSBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5vbCBsaSBwIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgdGV4dC1pbmRlbnQ6IDIzcHg7XHJcbn1cclxub2wgbGkgcCBhIHtcclxuICAgIGNvbG9yOiAjNjA1RTVFO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkge1xyXG4gICAgaDIuZmFxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICAgIH1cclxuICAgIG9sIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoMi5mYXEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBvbCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/help/help.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/help/help.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"faq\">Frequently Asked Questions</h2>\n<ol>\n    <li><span>What is Munchies?</span> <p>Munchies is the brand that delivers healthy snacks on a subscription basis by curating snacks from different existing vendors.</p></li>\n    <li><span>How much does it cost?</span><p> A one-week trial bag will cost Rs.500 while a 4-week plan will cost ......</p></li>\n    <li><span>How much does delivery cost?</span><p>Delivery is free throughout Bengaluru.</p></li>\n    <li><span>What is the refund/return policy?</span><p>Because we must order a specific quantity of items for our bags — most of which are non-returnable — we cannot offer refunds once orders have been placed. Please note cancellations is for future bags only, and not for the bags already paid for.</p></li>\n    <li><span>Who do you recommend Munchies for?</span><p>Munchies is for anyone who wants to change their snacking habits. Munchies products are healthier than their sugary and refined flour counterparts. Feel free to send your enquiries to <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a></p></li>\n    <li><span>What kind of snacks does Munchies select?</span><p>The Munchies team selects only the heartiest of snacks based on nutrition value and those snacks which are deemed healthy by the manufacturers. These typically contain less or no sugar, only olive or coconut oil, can be gluten-free and contain no refined flour. </p></li>\n    <li><span>How can I access my account? </span><p> After you have chosen one of our three subscription options, you’ll be required to create a Munchies account at checkout. Any time you want to check on your order, you can head over to the top right corner of our home page and click on ‘Log In’. Once there, a menu will prompt you to provide the email address and password you used when purchasing your subscription. Fill in the information and you’re in!</p></li>\n    <li><span>What is my account for? </span><p>In your account, you can update your contact information, credit card information, and password. You can also manage your subscriptions, including cancelling or skipping a week</p></li>\n    <li><span>I have a subscription, why can't I log into my account?</span><p>Problems with account logins might be due to an incorrect password or email. If you can’t remember your password, click on the ‘Forgot Password?’ option in the login page and a password reset link will be sent to the email address you used when subscribing to Munchies. In the case that you never receive an email, perhaps the email address associated with the account was typed wrong. This is a common issue, and we’d be glad to make necessary corrections. Just shoot us an email us at <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a> and we’ll make sure to dot the i’s and cross the t’s.</p></li>\n    <li><span>I don't live in Bengaluru, can I still subscribe?</span><p>Currently, due to the size of our company and logistics, we are only delivering in Bengaluru.</p></li>\n    <li><span>Is tracking available?</span><p>Currently tracking your delivery is unavailable, however we deliver only on Mondays and between 9am and 6pm. </p></li>\n    <li><span>What if my address has changed?</span><p>You can always update your shipping address in your account, but you must do so before any Thursday of the week to ensure your package arrives at the correct destination. Just log in and edit your information. Once you have done that, make sure your new address has been updated.</p></li>\n    <li><span>What if my bag is missing an item?</span><p>We sincerely apologize for sending out a bag without an item. Because we have a large amount of bags to pack every week, there’s always the chance we forget to pack an item by accident. Please let us know if you’re missing an item by sending us an email at <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a> and we’ll see what we can do to remedy the situation!</p></li>\n    <li><span>If an item in my bag seems damaged what do I do?</span><p>We are very careful in packaging each item into our bags as neat as possible, and we check that we secure each one tightly. We receive every item in new condition and expect to ship them in the same quality to our subscribers. But as a result of rough handling, our bags may be susceptible to damage. Please email us at <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a> and attach a photo of the damaged item, so we can try to send a replacement as soon as possible!</p></li>\n    <li><span>Can I skip a weeks bag without losing my subscription?</span><p>Yes! Simply log in to your account and under manage subscriptions click on skip a week. If you want to skip the coming weeks bags, please inform before any Friday. You will receive your skipped bag on the week after your skipped week.</p></li>\n    <li><span>If I'm a business wanting to partner with Munchies, how do I get in touch?</span><p>Thank you for your interest in working with us! Please email us at <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a>  with information about your services and products, along with a brief pitch explaining why we might be suitable for a partnership. Please use ‘Partnership Inquiry’ as the email subject line, and if able, please send us a sample of the items or services you’d like to promote with us. Also, keep in mind that we are unable to respond to every email we receive. We’ll try to reach back within a few days of you sending us an email if we’re interested in your business!</p></li>\n</ol>"

/***/ }),

/***/ "./src/app/user/help/help.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/help/help.component.ts ***!
  \*********************************************/
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
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/user/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/user/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/user/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.snack_right_video {\r\n    margin: 150px auto 150px auto;\r\n    text-align: center;\r\n}\r\n.snack_right_video h2 {\r\n    color: #292929;\r\n    font-size: 40px;\r\n    font-weight: normal;\r\n    letter-spacing: 0em;\r\n    padding: 0px 15%;\r\n    line-height: 60px;\r\n}\r\n.watch_video {\r\n    text-align: center;\r\n    margin-bottom: 70px;\r\n}\r\n.watch_video h3 {\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    color: #E5663D;\r\n}\r\n.watch_video + h2 {\r\n    text-align: center;\r\n    color: #3F7CAC;\r\n    font-size: 38px;\r\n    font-weight: bold;\r\n}\r\n.snack_right_img {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 30px solid transparent;\r\n    border-bottom: 30px solid transparent;\r\n    border-left: 50px solid rgb(63, 124, 172);\r\n    margin: 0 auto;\r\n}\r\n.content_box {\r\n    background-color: #fff;\r\n    padding: 40px 20px 80px 80px;\r\n    margin-bottom: 20px;\r\n    float: left;\r\n}\r\n.content_box div {\r\n    float: left;\r\n    width: 22%;\r\n}\r\n.content_box img {\r\n    width: 150px;\r\n    height: auto;\r\n}\r\n.content_box .text {\r\n    margin-right: 20px;\r\n    line-height: 24px;\r\n    letter-spacing: 1px;\r\n    font-size: 18px;\r\n    float: left;\r\n    width: 53%;\r\n    color: #2F2E2E;\r\n}\r\n.content_box_wrapper .content_box:nth-child(1) {\r\n    background-color: rgba(125, 187, 195, 1);\r\n    margin-bottom: 0px;\r\n}\r\n.content_box_wrapper .content_box:nth-child(2) {\r\n    padding: 80px 0px 80px 15px;\r\n    background-color: rgba(125, 187, 195, 1);\r\n    margin-bottom: 50px;\r\n}\r\n.content_box_wrapper > h2, .munchers_have_spoken_text {\r\n    text-align: center;\r\n    color: #E5663D;\r\n    margin: 40px 0px;\r\n    display: block;\r\n    width: 100%;\r\n    font-size: 30px;\r\n}\r\n.text-upper {\r\n    text-transform: uppercase;\r\n}\r\n.boxes {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.boxes .box {\r\n    background-color: rgba(125, 187, 195, 0.85);\r\n    margin-right: 10px;\r\n    padding: 10px 15px;\r\n    min-height: 475px;\r\n    float: left;\r\n    width: 24%;\r\n    box-sizing: border-box;\r\n}\r\n.boxes .box:nth-child(4) {\r\n    margin-right: 0px;\r\n}\r\n.boxes .box h3 {\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    font-size: 23px;\r\n    font-weight: normal;\r\n}\r\n.boxes .box p {\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n    color: rgb(63, 61, 61);\r\n}\r\n.subscribe_btn2 {\r\n    margin: 80px 0px;\r\n    text-align: center;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.subscribe_btn2 a {\r\n    border: 4px solid;\r\n    border-color: rgba(63, 124, 172, 1);\r\n    padding: 5px 30px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: #fff;\r\n    background-color: rgba(63, 124, 172, 1);\r\n    font-size: 23px;\r\n    transition: border-color 0.4s ease 0s, background-color 0.4s ease 0s;\r\n}\r\n.subscribe_btn2 a:hover {\r\n    background-color: #fff;\r\n    color: #292929;\r\n    border-color: #fff;\r\n}\r\n.whats_inside {\r\n    text-align: center;\r\n}\r\n.whats_inside h2 {\r\n    color: #DE6B48;\r\n    margin-bottom: 40px;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n.whats_inside p {\r\n    width: 80%;\r\n    margin: 50px auto;\r\n    letter-spacing: 1px;\r\n    line-height: 22px;\r\n    color: #292929;\r\n    font-size: 18px;\r\n}\r\n.whats_inside img {\r\n    height: 130px;\r\n    width: auto;\r\n}\r\n.whats_inside span {\r\n    color: #DE6B48;\r\n    text-decoration: underline;\r\n}\r\n.you_will_get {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n.you_will_get h3 {\r\n    margin-left: 90px;\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.list {\r\n    width: 100%;\r\n}\r\n.list_item {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-bottom: 30px;\r\n}\r\n.list_item .list_number {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: #3F7CAC;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    color: #fff;\r\n    margin-right: 30px;\r\n    font-size: 22px;\r\n}\r\n.list_item .list_text {\r\n    line-height: 50px;\r\n    font-size: 23px;\r\n    color: #605e5e;\r\n    font-weight: bold;\r\n}\r\n.munchers_have_spoken_box_wrapper {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.munchers_have_spoken_box {\r\n    width: 30%;\r\n    height: 250px;\r\n    background-color: rgb(125, 187, 195);\r\n    border-radius: 40px;\r\n    padding: 30px;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    position: relative;\r\n}\r\n.munchers_have_spoken_box:nth-child(2) {\r\n    margin: 0 5%;\r\n}\r\n.munchers_have_spoken_box span {\r\n    position: absolute;\r\n    width: 0;\r\n    border-top: 60px solid rgb(125, 187, 195);\r\n    border-left: 60px solid rgb(125, 187, 195);\r\n    bottom: -55px;\r\n    border-bottom: 100px solid transparent;\r\n}\r\n.page_down_content {\r\n\tmargin: 105px 0px 50px 0px;\r\n    text-align: center;\r\n}\r\n.page_down_content h2 {\r\n\tfont-size: 36px;\r\n    color: #605E5E;\r\n}\r\n.page_down_content input {\r\n\tpadding: 10px 20px;\r\n    width: 70%;\r\n    border: 2px solid rgba(82, 82, 82, 1);\r\n    margin-top: 40px;\r\n}\r\n.remove_margin_bottom {\r\n    margin-bottom: 0px;\r\n}\r\n.remove_margin_top {\r\n    margin-top: 0px;\r\n}\r\n.svg-img {\r\n    text-align: center;\r\n}\r\n.svg-img img{\r\n    height: 130px;\r\n    width: auto;\r\n}\r\n@media screen and (min-width: 300px) {\r\n    header, .content {\r\n        left: 0;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n    nav .wrapper ul li {\r\n        display: none;\r\n    }\r\n    nav .wrapper ul li.bars {\r\n        display: block;\r\n    }\r\n    .responsive_menu {\r\n        display: block;\r\n    }\r\n    .snack_right_video h2 {\r\n        font-size: 22px;\r\n        line-height: 35px;\r\n    }\r\n    .watch_video + h2, .whats_inside h2, .munchers_have_spoken_text, .page_down_content h2 {\r\n        font-size: 25px;\r\n    }\r\n    .list_item {\r\n        display: block;\r\n    }\r\n    .list_item .list_number {\r\n        width: 30px;\r\n        height: 30px;\r\n        line-height: 30px;\r\n        font-size: 18px;\r\n        vertical-align: top;\r\n        margin-right: 15px;\r\n        display: inline-block;\r\n    }\r\n    .list_item .list_text {\r\n        width: 80%;\r\n        display: inline-block;\r\n        font-size: 16px;\r\n        line-height: 22px;\r\n    }\r\n    .munchers_have_spoken_box_wrapper {\r\n        flex-direction: column;\r\n    }\r\n    .munchers_have_spoken_box {\r\n        width: 75%;\r\n        margin: 0 auto 70px auto;\r\n    }\r\n    .munchers_have_spoken_box:nth-child(2) {\r\n        margin: 0 auto 70px auto;\r\n    }\r\n    .content_box_wrapper > h2 {\r\n        font-size: 25px;\r\n    }\r\n    .boxes .box {\r\n        margin-right: 0px;\r\n        margin-bottom: 10px;\r\n        width: 100%;\r\n        min-height: 200px;\r\n    }\r\n    .content_box {\r\n        padding: 20px;\r\n    }\r\n    .content_box div {\r\n        width: 100%;\r\n        text-align: center;\r\n        margin-bottom: 20px\r\n    }\r\n    .content_box .text {\r\n        width: 100%;\r\n    }\r\n    .content_box_wrapper .content_box:nth-child(2) {\r\n        padding: 20px;\r\n    }\r\n    .text_area {\r\n        width: 100%;\r\n    }\r\n    .footer_line div {\r\n        margin-right: 0px;  \r\n    }\r\n    .food_box .img {\r\n        width: 100%;\r\n    }\r\n    .food_box .img:nth-child(even) {\r\n        margin-top: 20px;\r\n    }\r\n    .food_box:nth-child(4) .img {\r\n        width: 100%;\r\n    }\r\n    .food_box:nth-child(4) .text_area {\r\n        width: 100%;\r\n    }\r\n}\r\n@media screen and (min-width: 480px) {\r\n\r\n}\r\n@media screen and (min-width: 768px) {\r\n    \r\n    .snack_right_video h2 {\r\n        font-size: 40px;\r\n        line-height: 60px;\r\n    }\r\n    .watch_video + h2 {\r\n        font-size: 38px;\r\n    }\r\n    .whats_inside h2, .munchers_have_spoken_text {\r\n        font-size: 30px;\r\n    }\r\n    .page_down_content h2 {\r\n        font-size: 36px;\r\n    }\r\n    .list_item {\r\n        display: flex;\r\n    }\r\n    .list_item .list_number {\r\n        width: 58px;\r\n        height: 58px;\r\n        line-height: 58px;\r\n        font-size: 23px;\r\n        vertical-align: top;\r\n        margin-right: 30px;\r\n        font-weight: bold;\r\n    }\r\n    .list_item .list_text {\r\n        width: auto;\r\n        font-size: 23px;\r\n        line-height: 50px;\r\n    }\r\n    .munchers_have_spoken_box_wrapper {\r\n        flex-direction: row;\r\n    }\r\n    .munchers_have_spoken_box {\r\n        width: 30%;\r\n        margin: 0;\r\n    }\r\n    .munchers_have_spoken_box:nth-child(2) {\r\n        margin: 0 5%;\r\n    }\r\n    .content_box {\r\n        padding: 30px 20px 80px 30px;\r\n    }\r\n    .content_box img {\r\n        width: 100px;\r\n    }\r\n    \r\n    .content_box div {\r\n        width: 22%;\r\n        text-align: left;\r\n    }\r\n    .content_box .text {\r\n        width: 53%;\r\n    }\r\n    .boxes .box {\r\n        width: 49%; \r\n        min-height: 375px;\r\n    }\r\n    .boxes .box:nth-child(odd) {\r\n        margin-right: 2%;\r\n    }\r\n    .text_area {\r\n        font-size: 14px;\r\n        width: 43%;\r\n    }\r\n    .food_box .img {\r\n        width: 53%;\r\n    }\r\n    .food_box .img:nth-child(even) {\r\n        margin-top: 0px;\r\n    }\r\n    .food_box:nth-child(4) .img {\r\n        width: 42%;\r\n    }\r\n    .food_box:nth-child(4) .text_area {\r\n        width: 52%;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n    nav .wrapper ul li.bars {\r\n        display: none;\r\n    }\r\n    .responsive_menu {\r\n        display: none;\r\n    }\r\n    header, .content {\r\n        left: 137px;\r\n        width: 72%;\r\n        box-sizing: border-box;\r\n    }\r\n    nav .wrapper ul li {\r\n        margin: 0px 14px;\r\n        display: inline-block;\r\n    }\r\n    \r\n    nav .wrapper .logo {\r\n        width: 33%;\r\n    }\r\n    footer .content {\r\n        width: 72%;\r\n    }\r\n    .content_box img {\r\n        width: 120px;\r\n    }\r\n    .text_area {\r\n        font-size: 16px;\r\n    }\r\n    .content_box_wrapper .content_box:nth-child(2) {\r\n        padding: 0px 0px 80px 30px;\r\n    }\r\n}\r\n@media screen and (min-width: 1024px) {\r\n\r\n}\r\n@media screen and (min-width: 1280px) {\r\n    \r\n    .boxes .box {\r\n        width: 24%;\r\n        min-height: 475px;\r\n    }\r\n    .boxes .box:nth-child(2n+1), .boxes .box:nth-child(2) {\r\n        margin-right: 1.3%;\r\n    }\r\n    \r\n    nav .wrapper .logo {\r\n        width: 49%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QywwQ0FBMEM7SUFDMUMsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osV0FBVztDQUNkO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtDQUNsQjtBQUNEO0lBQ0kseUNBQXlDO0lBQ3pDLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksNEJBQTRCO0lBQzVCLHlDQUF5QztJQUN6QyxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixxRUFBcUU7Q0FDeEU7QUFDRDtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGNBQWM7SUFDZCxZQUFZO0NBQ2Y7QUFDRDtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7Q0FDOUI7QUFDRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULDBDQUEwQztJQUMxQywyQ0FBMkM7SUFDM0MsY0FBYztJQUNkLHVDQUF1QztDQUMxQztBQUVEO0NBQ0MsMkJBQTJCO0lBQ3hCLG1CQUFtQjtDQUN0QjtBQUNEO0NBQ0MsZ0JBQWdCO0lBQ2IsZUFBZTtDQUNsQjtBQUNEO0NBQ0MsbUJBQW1CO0lBQ2hCLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsWUFBWTtDQUNmO0FBRUQ7SUFDSTtRQUNJLFFBQVE7UUFDUixZQUFZO1FBQ1osdUJBQXVCO0tBQzFCO0lBQ0Q7UUFDSSxjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxlQUFlO0tBQ2xCO0lBQ0Q7UUFDSSxlQUFlO0tBQ2xCO0lBQ0Q7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLGVBQWU7S0FDbEI7SUFDRDtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtLQUN6QjtJQUNEO1FBQ0ksV0FBVztRQUNYLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSx1QkFBdUI7S0FDMUI7SUFDRDtRQUNJLFdBQVc7UUFDWCx5QkFBeUI7S0FDNUI7SUFDRDtRQUNJLHlCQUF5QjtLQUM1QjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLFlBQVk7UUFDWixrQkFBa0I7S0FDckI7SUFDRDtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxZQUFZO0tBQ2Y7SUFDRDtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLFlBQVk7S0FDZjtJQUNEO1FBQ0ksa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSxZQUFZO0tBQ2Y7SUFDRDtRQUNJLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxZQUFZO0tBQ2Y7Q0FDSjtBQUVEOztDQUVDO0FBQ0Q7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixrQkFBa0I7S0FDckI7SUFDRDtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSxvQkFBb0I7S0FDdkI7SUFDRDtRQUNJLFdBQVc7UUFDWCxVQUFVO0tBQ2I7SUFDRDtRQUNJLGFBQWE7S0FDaEI7SUFDRDtRQUNJLDZCQUE2QjtLQUNoQztJQUNEO1FBQ0ksYUFBYTtLQUNoQjs7SUFFRDtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjtBQUNEO0lBQ0k7UUFDSSxjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLHVCQUF1QjtLQUMxQjtJQUNEO1FBQ0ksaUJBQWlCO1FBQ2pCLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxhQUFhO0tBQ2hCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLDJCQUEyQjtLQUM5QjtDQUNKO0FBQ0Q7O0NBRUM7QUFDRDs7SUFFSTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7S0FDckI7SUFDRDtRQUNJLG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJLFdBQVc7S0FDZDtDQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc25hY2tfcmlnaHRfdmlkZW8ge1xyXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDE1MHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNuYWNrX3JpZ2h0X3ZpZGVvIGgyIHtcclxuICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICBwYWRkaW5nOiAwcHggMTUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuLndhdGNoX3ZpZGVvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuLndhdGNoX3ZpZGVvIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbn1cclxuLndhdGNoX3ZpZGVvICsgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzRjdDQUM7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc25hY2tfcmlnaHRfaW1nIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMzBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDMwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogNTBweCBzb2xpZCByZ2IoNjMsIDEyNCwgMTcyKTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jb250ZW50X2JveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4IDgwcHggODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY29udGVudF9ib3ggZGl2IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIyJTtcclxufVxyXG4uY29udGVudF9ib3ggaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uY29udGVudF9ib3ggLnRleHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTMlO1xyXG4gICAgY29sb3I6ICMyRjJFMkU7XHJcbn1cclxuLmNvbnRlbnRfYm94X3dyYXBwZXIgLmNvbnRlbnRfYm94Om50aC1jaGlsZCgxKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNSwgMTg3LCAxOTUsIDEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5jb250ZW50X2JveF93cmFwcGVyIC5jb250ZW50X2JveDpudGgtY2hpbGQoMikge1xyXG4gICAgcGFkZGluZzogODBweCAwcHggODBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjUsIDE4NywgMTk1LCAxKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLmNvbnRlbnRfYm94X3dyYXBwZXIgPiBoMiwgLm11bmNoZXJzX2hhdmVfc3Bva2VuX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbiAgICBtYXJnaW46IDQwcHggMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4udGV4dC11cHBlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5ib3hlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5ib3hlcyAuYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI1LCAxODcsIDE5NSwgMC44NSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0NzVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI0JTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmJveGVzIC5ib3g6bnRoLWNoaWxkKDQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5ib3hlcyAuYm94IGgzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4uYm94ZXMgLmJveCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogcmdiKDYzLCA2MSwgNjEpO1xyXG59XHJcbi5zdWJzY3JpYmVfYnRuMiB7XHJcbiAgICBtYXJnaW46IDgwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc3Vic2NyaWJlX2J0bjIgYSB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg2MywgMTI0LCAxNzIsIDEpO1xyXG4gICAgcGFkZGluZzogNXB4IDMwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCAxMjQsIDE3MiwgMSk7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC40cyBlYXNlIDBzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZSAwcztcclxufVxyXG4uc3Vic2NyaWJlX2J0bjIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbn1cclxuLndoYXRzX2luc2lkZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLndoYXRzX2luc2lkZSBoMiB7XHJcbiAgICBjb2xvcjogI0RFNkI0ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ud2hhdHNfaW5zaWRlIHAge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLndoYXRzX2luc2lkZSBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbi53aGF0c19pbnNpZGUgc3BhbiB7XHJcbiAgICBjb2xvcjogI0RFNkI0ODtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi55b3Vfd2lsbF9nZXQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi55b3Vfd2lsbF9nZXQgaDMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxufVxyXG4ubGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubGlzdF9pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5saXN0X2l0ZW0gLmxpc3RfbnVtYmVyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGN0NBQztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLmxpc3RfaXRlbSAubGlzdF90ZXh0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICM2MDVlNWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubXVuY2hlcnNfaGF2ZV9zcG9rZW5fYm94X3dyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ubXVuY2hlcnNfaGF2ZV9zcG9rZW5fYm94IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNSwgMTg3LCAxOTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm11bmNoZXJzX2hhdmVfc3Bva2VuX2JveDpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luOiAwIDUlO1xyXG59XHJcbi5tdW5jaGVyc19oYXZlX3Nwb2tlbl9ib3ggc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvcmRlci10b3A6IDYwcHggc29saWQgcmdiKDEyNSwgMTg3LCAxOTUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDYwcHggc29saWQgcmdiKDEyNSwgMTg3LCAxOTUpO1xyXG4gICAgYm90dG9tOiAtNTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDEwMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFnZV9kb3duX2NvbnRlbnQge1xyXG5cdG1hcmdpbjogMTA1cHggMHB4IDUwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wYWdlX2Rvd25fY29udGVudCBoMiB7XHJcblx0Zm9udC1zaXplOiAzNnB4O1xyXG4gICAgY29sb3I6ICM2MDVFNUU7XHJcbn1cclxuLnBhZ2VfZG93bl9jb250ZW50IGlucHV0IHtcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4MiwgODIsIDgyLCAxKTtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLnJlbW92ZV9tYXJnaW5fYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ucmVtb3ZlX21hcmdpbl90b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5zdmctaW1nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3ZnLWltZyBpbWd7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgICBoZWFkZXIsIC5jb250ZW50IHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICBuYXYgLndyYXBwZXIgdWwgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBuYXYgLndyYXBwZXIgdWwgbGkuYmFycyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAucmVzcG9uc2l2ZV9tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5zbmFja19yaWdodF92aWRlbyBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLndhdGNoX3ZpZGVvICsgaDIsIC53aGF0c19pbnNpZGUgaDIsIC5tdW5jaGVyc19oYXZlX3Nwb2tlbl90ZXh0LCAucGFnZV9kb3duX2NvbnRlbnQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIC5saXN0X2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmxpc3RfaXRlbSAubGlzdF9udW1iZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmxpc3RfaXRlbSAubGlzdF90ZXh0IHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbiAgICAubXVuY2hlcnNfaGF2ZV9zcG9rZW5fYm94X3dyYXBwZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAubXVuY2hlcnNfaGF2ZV9zcG9rZW5fYm94IHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDcwcHggYXV0bztcclxuICAgIH1cclxuICAgIC5tdW5jaGVyc19oYXZlX3Nwb2tlbl9ib3g6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byA3MHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9ib3hfd3JhcHBlciA+IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuYm94ZXMgLmJveCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2JveCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2JveCBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9ib3ggLnRleHQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRfYm94X3dyYXBwZXIgLmNvbnRlbnRfYm94Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIC50ZXh0X2FyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9saW5lIGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7ICBcclxuICAgIH1cclxuICAgIC5mb29kX2JveCAuaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5mb29kX2JveCAuaW1nOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIC5mb29kX2JveDpudGgtY2hpbGQoNCkgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZm9vZF9ib3g6bnRoLWNoaWxkKDQpIC50ZXh0X2FyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgXHJcbiAgICAuc25hY2tfcmlnaHRfdmlkZW8gaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIC53YXRjaF92aWRlbyArIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICB9XHJcbiAgICAud2hhdHNfaW5zaWRlIGgyLCAubXVuY2hlcnNfaGF2ZV9zcG9rZW5fdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnBhZ2VfZG93bl9jb250ZW50IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcbiAgICAubGlzdF9pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmxpc3RfaXRlbSAubGlzdF9udW1iZXIge1xyXG4gICAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICAgIGhlaWdodDogNThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNThweDtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAubGlzdF9pdGVtIC5saXN0X3RleHQge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5tdW5jaGVyc19oYXZlX3Nwb2tlbl9ib3hfd3JhcHBlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC5tdW5jaGVyc19oYXZlX3Nwb2tlbl9ib3gge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLm11bmNoZXJzX2hhdmVfc3Bva2VuX2JveDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIG1hcmdpbjogMCA1JTtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2JveCB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAyMHB4IDgwcHggMzBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2JveCBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRlbnRfYm94IGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDIyJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRfYm94IC50ZXh0IHtcclxuICAgICAgICB3aWR0aDogNTMlO1xyXG4gICAgfVxyXG4gICAgLmJveGVzIC5ib3gge1xyXG4gICAgICAgIHdpZHRoOiA0OSU7IFxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM3NXB4O1xyXG4gICAgfVxyXG4gICAgLmJveGVzIC5ib3g6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICB9XHJcbiAgICAudGV4dF9hcmVhIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDQzJTtcclxuICAgIH1cclxuICAgIC5mb29kX2JveCAuaW1nIHtcclxuICAgICAgICB3aWR0aDogNTMlO1xyXG4gICAgfVxyXG4gICAgLmZvb2RfYm94IC5pbWc6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9vZF9ib3g6bnRoLWNoaWxkKDQpIC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiA0MiU7XHJcbiAgICB9XHJcbiAgICAuZm9vZF9ib3g6bnRoLWNoaWxkKDQpIC50ZXh0X2FyZWEge1xyXG4gICAgICAgIHdpZHRoOiA1MiU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIG5hdiAud3JhcHBlciB1bCBsaS5iYXJzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnJlc3BvbnNpdmVfbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGhlYWRlciwgLmNvbnRlbnQge1xyXG4gICAgICAgIGxlZnQ6IDEzN3B4O1xyXG4gICAgICAgIHdpZHRoOiA3MiU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIG5hdiAud3JhcHBlciB1bCBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTRweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5hdiAud3JhcHBlciAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgIH1cclxuICAgIGZvb3RlciAuY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDcyJTtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2JveCBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgIH1cclxuICAgIC50ZXh0X2FyZWEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50X2JveF93cmFwcGVyIC5jb250ZW50X2JveDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggODBweCAzMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIFxyXG4gICAgLmJveGVzIC5ib3gge1xyXG4gICAgICAgIHdpZHRoOiAyNCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDc1cHg7XHJcbiAgICB9XHJcbiAgICAuYm94ZXMgLmJveDpudGgtY2hpbGQoMm4rMSksIC5ib3hlcyAuYm94Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjMlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuYXYgLndyYXBwZXIgLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"snack_right_video\">\n  <h2><b>Delicious</b> Wholesome <b>Healthy</b> Snacks Delivered to you every <b>Week!</b></h2>\n</div>\n<div class=\"watch_video\">\n    <h3>Watch the Video</h3>\n    <div class=\"snack_right_img\"></div>\n</div>\n<h2>ONLY IN NAMMA BENGALURU!</h2>\n<div class=\"content_box_wrapper\">\n  <div class=\"content_box\">\n      <div>\n          <img src=\"assets/hurry.png\" alt=\"No Image\"/>\n      </div>\n      <div>\n          <img src=\"assets/desk.png\" alt=\"No Image\"/>\n      </div>\n      <div class=\"text\">\n          <p>With a busy work schedule, it's hard to find time for all the things that make you fit and happy. Without a balanced life, it's easy to put your health on the sidelines and just keep going.</p>\n      </div>\n  </div>\n  <div class=\"content_box\">\n      <div class=\"text\">\n          <p>It's no news that good snacking habits can prevent overeating, keep blood sugar balanced, help you lose weight and improve mood and focus. </p>\n      </div>\n      <div>\n          <img src=\"assets/diet.png\" alt=\"No Image\"/>\n      </div>\n      <div>\n          <img src=\"assets/liposuction.png\" alt=\"No Image\"/>\n      </div>\n  </div>\n  <div class=\"content_box\">\n      <div>\n          <img src=\"assets/people.png\" alt=\"No Image\"/>\n      </div>\n      <div>\n          <img src=\"assets/free-delivery.png\" alt=\"No Image\"/>\n      </div>\n      <div class=\"text\">\n          <p>We observed that evening snack time was the most overlooked in terms of keeping things healthy. That's why Munchies brings to you a bag full of snacks you need for the whole week.</p>\n      </div>\n  </div>\n  <h2 class=\"text-upper\">How it works</h2>\n  </div>\n  <div class=\"boxes\">\n      <div class=\"box\">\n          <div class=\"img svg-img\">\n              <img src=\"../../assets/student-on-computer.png\" />\n          </div>\n          <h3 class=\"text-upper\">Click Subscribe</h3>\n          <p>Go ahead take that first step and subscribe. Try our one week trial pack today.</p>\n      </div>\n      <div class=\"box\">\n          <div class=\"img svg-img\">\n                <img src=\"../../assets/girl.png\" />\n          </div>\n          <h3 class=\"text-upper\">CUSTOMIZE</h3>\n          <p>Tell us what flavours and snacks you like and dislike and we will customize your munchies bag to your liking.</p>\n      </div>\n      <div class=\"box\">\n          <div class=\"img svg-img\">\n                <img src=\"../../assets/delivery-truck.png\" />\n          </div>\n          <h3 class=\"text-upper\">WE DELIVER</h3>\n          <p>We deliver a different set of snacks each week! It's easy to get bored with a healthy snacking regime. Our collaboration with various companies and home cooks allows us to provide just the right amount of variation.\n\n          </p>\n      </div>\n      <div class=\"box\">\n          <div class=\"img svg-img\">\n                <img src=\"../../assets/smiling-girl.png\" />\n          </div>\n          <h3 class=\"text-upper\">EXPERIENCE THE BENEFITS</h3>\n          <p>Whether you're at work or at home everyone gets hungry between 4pm and 7pm. Choose something healthy and wholesome instead and enjoy the health benefits!</p>\n      </div>\n  </div>\n  <div class=\"subscribe_btn2\">\n      <a href=\"/subscribe\" role=\"button\">Get the Bag!</a>\n  </div>\n  <div class=\"whats_inside\">\n      <h2 class=\"text-upper\">What's Inside</h2>\n      <img src=\"assets/give.png\" alt=\"No Image\"/>\n      <p>Inside every munchies bag is a mix of healthy and hearty snacks. We've collaborated with some of the best snacking companies and home chefs to give you the best experience. Depending on your customization we'll deliver a different set of snacks each week at your doorstep. <a href=\"/subscribe\"><span>Try our one week trial pack today!</span></a></p>\n  </div>\n<div class=\"you_will_get\">\n    <h3>YOU WILL GET-</h3>\n    <div class=\"list\">\n        <div class=\"list_item\">\n            <div class=\"list_number\">1.</div>\n            <div class=\"list_text\">4 tasty healthy snacks optimized to your liking</div>\n        </div>\n        <div class=\"list_item\">\n            <div class=\"list_number\">2.</div>\n            <div class=\"list_text\">1 drink either cold-pressed juice or a smoothie</div>\n        </div>\n        <div class=\"list_item\">\n            <div class=\"list_number\">3.</div>\n            <div class=\"list_text\">3 bags of green tea with honey sachets </div>\n        </div>\n        <div class=\"list_item\">\n            <div class=\"list_number\">4.</div>\n            <div class=\"list_text\">1 delicious whole fruit</div>\n        </div>\n    </div>\n</div>\n<h2 class=\"munchers_have_spoken_text\">THE MUNCHERS HAVE SPOKEN</h2>\n<div class=\"munchers_have_spoken_box_wrapper\">\n    <div class=\"munchers_have_spoken_box\">\n        <p>Text here of this size</p>\n        <span></span>\n    </div>\n    <div class=\"munchers_have_spoken_box\">\n        <p>Text here of this size</p>\n        <span></span>\n    </div>\n    <div class=\"munchers_have_spoken_box\">\n        <p>Text here of this size</p>\n        <span></span>\n    </div>\n</div>\n<div class=\"page_down_content\">\n    <h2>Subscribe to get the latest news about products and healthy snacking recipes</h2>\n    <input type=\"email\" name=\"email\" placeholder=\"E-mail Address\" />\n</div>"

/***/ }),

/***/ "./src/app/user/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/home/home.component.ts ***!
  \*********************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/user/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/user/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/user/manage-subscription/manage-subscription.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/user/manage-subscription/manage-subscription.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manage_subscription_page_wrapper {\r\n    display: flex;\r\n}\r\n.manage_subscription {\r\n    width: 500px;\r\n    height: 500px;\r\n    border-radius: 50%;\r\n    background-color: #6aa7c4;\r\n    margin: -40px 0px 40px -35px;\r\n}\r\n.manage_subscription .block {\r\n    width: 52%;\r\n    margin: 0 auto;\r\n}\r\n.manage_subscription .block:first-child {\r\n    margin-top: 100px;\r\n}\r\n.manage_subscription .block h3 {\r\n    font-size: 17px;\r\n    margin-bottom: 10px;\r\n    font-weight: normal;\r\n}\r\n.manage_subscription .block a {\r\n    text-decoration: none;\r\n    color: #fff;\r\n}\r\n.manage_subscription .block p {\r\n    line-height: 24px;\r\n    font-size: 16px;\r\n    margin: 0;\r\n    color: #292929;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9tYW5hZ2Utc3Vic2NyaXB0aW9uL21hbmFnZS1zdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQiw2QkFBNkI7Q0FDaEM7QUFDRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9tYW5hZ2Utc3Vic2NyaXB0aW9uL21hbmFnZS1zdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW5hZ2Vfc3Vic2NyaXB0aW9uX3BhZ2Vfd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tYW5hZ2Vfc3Vic2NyaXB0aW9uIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhN2M0O1xyXG4gICAgbWFyZ2luOiAtNDBweCAwcHggNDBweCAtMzVweDtcclxufVxyXG4ubWFuYWdlX3N1YnNjcmlwdGlvbiAuYmxvY2sge1xyXG4gICAgd2lkdGg6IDUyJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5tYW5hZ2Vfc3Vic2NyaXB0aW9uIC5ibG9jazpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4ubWFuYWdlX3N1YnNjcmlwdGlvbiAuYmxvY2sgaDMge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLm1hbmFnZV9zdWJzY3JpcHRpb24gLmJsb2NrIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm1hbmFnZV9zdWJzY3JpcHRpb24gLmJsb2NrIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzI5MjkyOTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/manage-subscription/manage-subscription.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/user/manage-subscription/manage-subscription.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"manage_subscription_page_wrapper\">\n    <div class=\"manage_subscription\">\n        <div class=\"block\">\n            <h3><a href=\"/my-orders\">My Orders</a></h3>\n            <table class=\"table table-bordered\">\n                <thead>\n                    <tr>\n                        <th>Date</th>\n                        <th>Name</th>\n                        <th>Phone</th>\n                        <th>Address</th>\n                        <th>Plan</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let order of orders\">\n                        <td>{{order.date | date: 'dd/MM/yyyy'}}</td>\n                        <td>{{order.customerData.name}}</td>\n                        <td>{{order.customerData.phoneNumber}}</td>\n                        <td>{{order.address}}</td>\n                        <td>{{order.planId}}</td>\n\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"block\">\n            <h3><a href=\"/skip-week\">Skip the coming weeks bag</a></h3>\n            <p>you can skip a week's bag just give us a 2 day head's up</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/manage-subscription/manage-subscription.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/user/manage-subscription/manage-subscription.component.ts ***!
  \***************************************************************************/
/*! exports provided: ManageSubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSubscriptionComponent", function() { return ManageSubscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/user/auth.service.ts");
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
    function ManageSubscriptionComponent(http, router, auth) {
        this.http = http;
        this.router = router;
        this.auth = auth;
        // console.log(sessionStorage.getItem('isLoggedIn') == 'false');
        // if(sessionStorage.getItem('isLoggedIn') == 'false') {
        //   this.router.navigate(['/signIn']);
        // }
    }
    ManageSubscriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/plan/active/null').subscribe(function (resData) {
            console.log('loll', resData);
            _this.orders = resData.orderData;
        }, function (error) {
            console.log('error', 'Allow Signup', 'Server Error');
        });
    };
    ManageSubscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-subscription',
            template: __webpack_require__(/*! ./manage-subscription.component.html */ "./src/app/user/manage-subscription/manage-subscription.component.html"),
            styles: [__webpack_require__(/*! ./manage-subscription.component.css */ "./src/app/user/manage-subscription/manage-subscription.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ManageSubscriptionComponent);
    return ManageSubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/user/my-orders/my-orders.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/my-orders/my-orders.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my_orders_page_circle {\r\n    width: 500px;\r\n    height: 500px;\r\n    background: rgb(125, 187, 195);\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: 80px;\r\n    top: 20px;\r\n}\r\n.my_orders_page_wrapper {\r\n    width: 90%;\r\n    min-height: 400px;\r\n    padding: 30px;\r\n    box-sizing: border-box;\r\n}\r\n.my_orders_page_wrapper > h2 {\r\n    color: #E5663D;\r\n    font-size: 23px;\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n.my_orders_page_wrapper .table {\r\n    position: relative;\r\n    z-index: 99;\r\n}\r\n.my_orders_page_wrapper .table_header, .my_orders_page_wrapper .table_content {\r\n    margin-left: 15px;\r\n}\r\n.my_orders_page_wrapper .table_header .heading, .my_orders_page_wrapper .table_content > .content_block {\r\n    width: 24%;\r\n    display: inline-block;\r\n    color: #E5663D;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n.my_orders_page_wrapper .table_content {\r\n}\r\n.my_orders_page_wrapper .table_content .content_block {\r\n    margin-top: 10px;\r\n    color: #292929;\r\n    font-weight: normal;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9teS1vcmRlcnMvbXktb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0NBQ2I7QUFDRDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7QUFDRDtDQUNDO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15X29yZGVyc19wYWdlX2NpcmNsZSB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEyNSwgMTg3LCAxOTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDgwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuLm15X29yZGVyc19wYWdlX3dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLm15X29yZGVyc19wYWdlX3dyYXBwZXIgPiBoMiB7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLm15X29yZGVyc19wYWdlX3dyYXBwZXIgLnRhYmxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcbi5teV9vcmRlcnNfcGFnZV93cmFwcGVyIC50YWJsZV9oZWFkZXIsIC5teV9vcmRlcnNfcGFnZV93cmFwcGVyIC50YWJsZV9jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5teV9vcmRlcnNfcGFnZV93cmFwcGVyIC50YWJsZV9oZWFkZXIgLmhlYWRpbmcsIC5teV9vcmRlcnNfcGFnZV93cmFwcGVyIC50YWJsZV9jb250ZW50ID4gLmNvbnRlbnRfYmxvY2sge1xyXG4gICAgd2lkdGg6IDI0JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm15X29yZGVyc19wYWdlX3dyYXBwZXIgLnRhYmxlX2NvbnRlbnQge1xyXG59XHJcbi5teV9vcmRlcnNfcGFnZV93cmFwcGVyIC50YWJsZV9jb250ZW50IC5jb250ZW50X2Jsb2NrIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogIzI5MjkyOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/my-orders/my-orders.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/my-orders/my-orders.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my_orders_page_wrapper\">\n  <h2>My Orders</h2>\n  <div class=\"table\">\n      <div class=\"table_header\">\n          <div class=\"heading\">Order Id</div>\n          <div class=\"heading\">Plan</div>\n          <div class=\"heading\">Total</div>\n          <div class=\"heading\">Date</div>\n      </div>\n      <div class=\"table_content\">\n          <div class=\"content_block\">X00122</div>\n          <div class=\"content_block\">1 week</div>\n          <div class=\"content_block\">600</div>\n          <div class=\"content_block\">16.05.19</div>\n      </div>\n  </div>\n  <div class=\"my_orders_page_circle\"></div>\n</div>"

/***/ }),

/***/ "./src/app/user/my-orders/my-orders.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/my-orders/my-orders.component.ts ***!
  \*******************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function MyOrdersComponent(http) {
        this.http = http;
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/user/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/user/my-orders/my-orders.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/user/order-summary/order-summary.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/order-summary/order-summary.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order_summary_wrapper {\r\n    box-sizing: border-box;\r\n}\r\n.order_summary_payment {\r\n    padding-bottom: 100px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.order_summary {\r\n    padding: 10px 20px;\r\n    width: 25%;\r\n    box-sizing: border-box;\r\n}\r\n.order_summary .plan {\r\n    margin-bottom: 40px;\r\n}\r\n.order_summary h2 {\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.order_summary .heading {\r\n    margin-bottom: 15px;\r\n    color: #E5663D;\r\n    font-size: 14px;\r\n}\r\n.order_summary .heading span:first-child {\r\n    margin-right: 25px;\r\n}\r\n.order_summary .week_plan {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n.order_summary .plan .selected_product {\r\n    font-size: 14px;\r\n    margin-bottom: 5px;\r\n}\r\n.sub_total_shipment {\r\n    margin-top: 60px;\r\n    color: #E5663D;\r\n}\r\n.sub_total_shipment .block {\r\n    margin-bottom: 10px;\r\n}\r\n.sub_total_shipment .block span:first-child {\r\n    width: 73%;\r\n    display: inline-block;\r\n}\r\n.payment {\r\n    box-sizing: border-box;\r\n    flex: 1;\r\n    text-align: right;\r\n    padding: 22px 100px;\r\n}\r\n.payment a {\r\n    font-size: 23px;    \r\n    font-weight: bold;\r\n    color: #E5663D;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n.order_summary_wrapper p {\r\n    text-align: center;\r\n    color: #E5663D;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSx1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlcl9zdW1tYXJ5X3dyYXBwZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ub3JkZXJfc3VtbWFyeV9wYXltZW50IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLm9yZGVyX3N1bW1hcnkge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLm9yZGVyX3N1bW1hcnkgLnBsYW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4ub3JkZXJfc3VtbWFyeSBoMiB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxufVxyXG4ub3JkZXJfc3VtbWFyeSAuaGVhZGluZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm9yZGVyX3N1bW1hcnkgLmhlYWRpbmcgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuLm9yZGVyX3N1bW1hcnkgLndlZWtfcGxhbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ub3JkZXJfc3VtbWFyeSAucGxhbiAuc2VsZWN0ZWRfcHJvZHVjdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLnN1Yl90b3RhbF9zaGlwbWVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbn1cclxuLnN1Yl90b3RhbF9zaGlwbWVudCAuYmxvY2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uc3ViX3RvdGFsX3NoaXBtZW50IC5ibG9jayBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiA3MyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnBheW1lbnQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmc6IDIycHggMTAwcHg7XHJcbn1cclxuLnBheW1lbnQgYSB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7ICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ub3JkZXJfc3VtbWFyeV93cmFwcGVyIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/order-summary/order-summary.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/order-summary/order-summary.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"order_summary_wrapper\">\n  <div class=\"order_summary_payment\">\n      <div class=\"order_summary\">\n          <h2>Order Summary</h2>\n          <div class=\"plan\">\n              <div class=\"heading\">\n                  <span>Plan</span>\n                  <span>Change</span>\n              </div>\n              <div class=\"week_plan\">One Week Plan</div>\n          </div>\n          <div class=\"plan\">\n              <div class=\"heading\">\n                  <span>Dietary Selections</span>\n                  <span>Change</span>\n              </div>\n              <div class=\"selected_product\">No Chocolate</div>\n              <div class=\"selected_product\">No Eggs</div>\n          </div>\n          <div class=\"sub_total_shipment\">\n              <div class=\"block\">\n                  <span>Sub Total</span>\n                  <span>XXXX</span>\n              </div>\n              <div class=\"block\">\n                  <span>Shipping</span>\n                  <span>Free</span>\n              </div>\n          </div>\n      </div>\n      <div class=\"payment\">\n          <a>Payment</a>\n      </div>\n  </div>\n  <p>* Deliveries are only on Mondays, so you'll get bag at the closest Monday from when you place your order.</p>\n</div>"

/***/ }),

/***/ "./src/app/user/order-summary/order-summary.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/order-summary/order-summary.component.ts ***!
  \***************************************************************/
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
            template: __webpack_require__(/*! ./order-summary.component.html */ "./src/app/user/order-summary/order-summary.component.html"),
            styles: [__webpack_require__(/*! ./order-summary.component.css */ "./src/app/user/order-summary/order-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());



/***/ }),

/***/ "./src/app/user/personal-details/personal-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/user/personal-details/personal-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".personal_details_wrapper {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n.personal_details_wrapper h2 {\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.personal_details_wrapper form {\r\n    width: 60%;\r\n    padding: 0 15%;\r\n    margin: 0 auto;\r\n}\r\n.personal_details_wrapper form input {\r\n    width: 100%;\r\n    padding: 10px 20px;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n    border: 2px solid #efefef;\r\n}\r\n.personal_details_wrapper form button {\r\n    padding: 10px 40px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 2px solid #323232;\r\n    border-radius: 20px;\r\n    color: #323232;\r\n}\r\n.personal_details_wrapper form button:hover {\r\n    color: #fff;\r\n    border: 2px solid #fff;\r\n    background-color: #323232;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wZXJzb25hbC1kZXRhaWxzL3BlcnNvbmFsLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGVyc29uYWwtZGV0YWlscy9wZXJzb25hbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVyc29uYWxfZGV0YWlsc193cmFwcGVyIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGVyc29uYWxfZGV0YWlsc193cmFwcGVyIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG59XHJcbi5wZXJzb25hbF9kZXRhaWxzX3dyYXBwZXIgZm9ybSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMCAxNSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ucGVyc29uYWxfZGV0YWlsc193cmFwcGVyIGZvcm0gaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZmVmZWY7XHJcbn1cclxuLnBlcnNvbmFsX2RldGFpbHNfd3JhcHBlciBmb3JtIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMjMyMzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6ICMzMjMyMzI7XHJcbn1cclxuLnBlcnNvbmFsX2RldGFpbHNfd3JhcHBlciBmb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/personal-details/personal-details.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/user/personal-details/personal-details.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"personal_details_wrapper\">\n  <h2>Personal Details</h2>\n  <form [formGroup]=\"personalDetailsForm\" (ngSubmit)=\"onSubmit()\">\n    <input type=\"text\" name=\"name\" placeholder=\"Name\" />\n    <input type=\"text\" name=\"surname\" placeholder=\"Surname\" />\n    <input type=\"email\" name=\"email\" placeholder=\"Email\" />\n    <input type=\"tel\" name=\"phone\" placeholder=\"Phone Number\" />\n    <input type=\"text\" name=\"address\" placeholder=\"Address\" />\n    <input type=\"text\" name=\"postalCode\" placeholder=\"Postal Code\" />\n    <button name=\"btn\" class=\"btn\">Change</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/user/personal-details/personal-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/personal-details/personal-details.component.ts ***!
  \*********************************************************************/
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
            template: __webpack_require__(/*! ./personal-details.component.html */ "./src/app/user/personal-details/personal-details.component.html"),
            styles: [__webpack_require__(/*! ./personal-details.component.css */ "./src/app/user/personal-details/personal-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalDetailsComponent);
    return PersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user/privacy-policy/privacy-policy.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/privacy-policy/privacy-policy.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".policy_block {\r\n\tmargin-top: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvbGljeV9ibG9jayB7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/privacy-policy/privacy-policy.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/privacy-policy/privacy-policy.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"privacy_policy_wrapper\">\n  <div class=\"policy_block\">\n    <p><b>This Privacy Policy applies to the www.Munchies.co.in</b></p>\n    <p>www.Munchies.co.in recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on https://www.munchies.co.in and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy.</p>\n    <p>Munchies.co.in is a property of AMedes Foods Private Limited (OPC), an Indian Company registered under the Companies Act, 2013 having its registered office at Top floor, Simhadri Mansion, Ramkrishnappa Road, Cox Town, Bengaluru 560005</p>\n  </div>\n  <div class=\"policy_block\">\n    <p><b>Information we collect</b></p>\n    <p><b>Contact information. </b> We might collect your name, email, mobile number, phone number, street, city, state, pincode,  country and ip address.</p>\n    <p><b>Payment and billing information. </b>We might collect your billing name, billing address and payment method when you buy our products. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our online payment partner CC Avenue.</p>\n    <p><b>Information you post. </b>We collect information you post in a public space on our website or on a third-party social media site belonging to munchies.co.in.</p>\n    <p><b>Demographic information. </b>We may collect demographic information about you, events you like, events you intend to participate in, tickets you buy, or any other information provided by your during the use of our website. We might collect this as a part of a survey also.</p>\n    <p><b>Other information. </b>If you use our website, we may collect information about your IP address and the browser you're using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running. </p>\n    <p><b>We collect information in different ways.</b></p>\n    <p><b>We collect information directly from you. </b>We collect information directly from you when you buy products from us. We also collect information if you post a comment on our websites or ask us a question through phone or email.</p>\n    <p><b>We collect information from you passively. </b>We use tracking tools like Google Analytics, browser cookies and web beacons for collecting information about your usage of our website. </p>\n    <p><b>We get information about you from third parties. </b>For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.</p>\n  </div>\n  <div class=\"policy_block\">\n    <p><b>Use of your personal information</b></p>\n    <p><b>We use information to contact you: </b> We might use the information you provide to contact you for confirmation of a purchase on our website or for other promotional purposes.</p>\n    <p><b>We use information to respond to your requests or questions. </b>We might use your information to confirm your order by sending you an email or message.</p>\n    <p><b>We use information to improve our products and services.  </b>We might use your information to customize your experience with us. This could include displaying content based upon your preferences.</p>\n    <p><b>We use information to look at site trends and customer interests. </b>We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.</p>\n    <p><b>We use information for security purposes. </b>We may use information to protect our company, our customers, or our websites.</p>\n    <p><b>We use information for marketing purposes. </b>We might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting. Or, for example, if you buy our product from us we'll enroll you in our newsletter. </p>\n    <p><b>We use information to send you transactional communications. </b>We might send you emails or SMS about your account or a ticket purchase. </p>\n    <p>We use information as otherwise permitted by law.</p>\n  </div>\n  <div class=\"policy_block\">\n    <p><b>Sharing of information with third-parties</b></p>\n    <p><b>We will share information with third parties who perform services on our behalf. </b>We share information with vendors who help us manage our online registration process or payment processors or transactional message processors. Some vendors may be located outside of India.</p>\n    <p><b>We will share information with the event organizers. </b>We share your information with event organizers and other parties responsible for fulfilling the purchase obligation. The event organizers and other parties may use the information we give them as described in their privacy policies. </p>\n    <p><b>We will share information with our business partners. </b>This includes a third party who provide or sponsor an event, or who operates a venue where we hold events. Our partners use the information we give them as described in their privacy policies. </p>\n    <p><b>We may share information if we think we have to in order to comply with the law or to protect ourselves. </b>We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we might also share information when we are investigating potential fraud. </p>\n    <p><b>We may share information with any successor to all or part of our business. </b>For example, if part of our business is sold we may give our customer list as part of that transaction.</p>\n    <p><b>We may share your information for reasons not described in this policy. </b>We will tell you before we do this.</p>\n    <p><b>Email Opt-Out</b></p>\n    <p><b>You can opt out of receiving our marketing emails. </b>To stop receiving our promotional emails, please email admin@munchies.co.in. It may take about ten days to process your request. Even if you opt out of getting marketing messages, we will still be sending you transactional messages through email and SMS about your purchases. </p>\n  </div>\n  <div class=\"policy_block\">\n    <p><b>Third party sites </b></p>\n    <p>If you click on one of the links to third party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third party sites.</p>\n  </div>\n  <div class=\"policy_block\">\n    <p><b>Grievance Officer</b></p>\n    <p>In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</p>\n    <address>\n        Nivedita R.<br> \n        Top floor, Simhardri Mansion<br>\n        Ramkrishnappa road, <br>\n        Cox Town, Bengaluru<br>\n        560005\n    </address>\n  </div>\n  <div class=\"policy_block\">\n    <p>If you have any questions about this Policy or other privacy concerns, you can also email us at <a href=\"mailto:admin@munchies.co.in\">admin@munchies.co.in</a></p>\n  </div>\n  <div class=\"policy_block\">\n    <p><b>Updates to this policy</b></p>\n    <p>This Privacy Policy was last updated on 09.11.18. From time to time we may change our privacy practices. We will notify you of any material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates.</p>\n  </div>\n  <div class=\"policy_block\">\n    <p><b>Jurisdiction</b></p>\n    <p>If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and the website's terms of use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India.</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/privacy-policy/privacy-policy.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/privacy-policy/privacy-policy.component.ts ***!
  \*****************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
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

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/user/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/user/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/user/refund-and-cancellation/refund-and-cancellation.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/user/refund-and-cancellation/refund-and-cancellation.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.rf_page_wrapper {\r\n    padding: 50px 0px;\r\n    font-size: 18px;\r\n}\r\n.rf_page_wrapper h2 {\r\n    color: #E5663D;\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n.rf_page_wrapper p {\r\n    line-height: 30px;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 50px;\r\n}\r\n.rf_page_wrapper h3 {\r\n    margin-bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWZ1bmQtYW5kLWNhbmNlbGxhdGlvbi9yZWZ1bmQtYW5kLWNhbmNlbGxhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZWZ1bmQtYW5kLWNhbmNlbGxhdGlvbi9yZWZ1bmQtYW5kLWNhbmNlbGxhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yZl9wYWdlX3dyYXBwZXIge1xyXG4gICAgcGFkZGluZzogNTBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnJmX3BhZ2Vfd3JhcHBlciBoMiB7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLnJmX3BhZ2Vfd3JhcHBlciBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLnJmX3BhZ2Vfd3JhcHBlciBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/refund-and-cancellation/refund-and-cancellation.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/user/refund-and-cancellation/refund-and-cancellation.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rf_page_wrapper\">\n    <h2>Refund and Cancellation</h2>\n    <p>We want you to be completely satisfied with your order from Munchies. If for any reason you are displeased with the snacks provided, we will try to make it right, provided the reasons are genuine and proved after an investigation. Please contact us if you don't like your purchase for any reason.</p>\n    <div class=\"policy_block\">\n        <h3>Refund Policy</h3>\n        <p>Please send us an email at admin@munchies.co.in. if you need to cancel your order. Let us know why you are unhappy. We’ll give you a refund or send out a replacement - whatever suits you best.\n\n                Your refund will be initiated by us within 2 business days of receiving the refund request and authorization of the refund. No refunds will be made after the 12 hours of cancellation window.</p>\n        \n    </div>\n    <div class=\"policy_block\">\n            <h3>Cancellation Policy</h3>\n            <p>We understand if you need to cancel your order. Circumstances change and a cancellation is the only thing that can be done. Before cancelling do reach out to us on admin@munchies.co.in and tell us why. No order will be cancelled after 12 hours of placing the order. </p>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/refund-and-cancellation/refund-and-cancellation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/user/refund-and-cancellation/refund-and-cancellation.component.ts ***!
  \***********************************************************************************/
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
            template: __webpack_require__(/*! ./refund-and-cancellation.component.html */ "./src/app/user/refund-and-cancellation/refund-and-cancellation.component.html"),
            styles: [__webpack_require__(/*! ./refund-and-cancellation.component.css */ "./src/app/user/refund-and-cancellation/refund-and-cancellation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RefundAndCancellationComponent);
    return RefundAndCancellationComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin_page_wrapper {\r\n    display: flex;\r\n    margin-top: 80px;\r\n}\r\n.signin_page_first_box {\r\n    width: 400px;\r\n    height: 400px;\r\n    border-radius: 50%;\r\n    background-color: rgba(131, 167, 155, 1);\r\n    margin: 40px 0px 40px -35px;\r\n}\r\n.signin_page_first_box img {\r\n    margin: 180px 0 0 170px;\r\n}\r\n.signin_box {\r\n    width: 500px;\r\n    height: 500px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    right: -180px;\r\n    top: -30px;\r\n}\r\n.signin_box_content {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.signin_box_content h2 {\r\n    margin: 40px 0px 0px 115px;\r\n    color: #DE6B48;\r\n    font-size: 30px;\r\n}\r\n.signin_box_content input[type=\"email\"], .signin_box_content input[type=\"password\"] {\r\n    padding: 15px;\r\n    border: 0px;\r\n    width: 53%;\r\n    margin: 0px 0px 15px 70px;\r\n    color: rgba(63,124,172,1);\r\n}\r\n.signin_box_content input.border_bottom {\r\n    border-bottom: 2px solid rgba(63,124,172,1);\r\n}\r\n.forgot_remember_links, .sign_up_wrapper {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.remember_me {\r\n    margin: 20px 85px 20px 70px;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    color: #DE6B48;\r\n}\r\n.forgot_password {\r\n    display: inline-block;\r\n    color: #DE6B48;\r\n}\r\n.sign_in_button {\r\n    display: block;\r\n    margin: 20px 0px 35px 70px;\r\n}\r\n.sign_in_button button {\r\n    text-decoration: none;\r\n    padding: 10px 145px;\r\n    background: #fff;\r\n    color: #3F7CAC;\r\n    cursor: pointer;\r\n    border: 2px solid;\r\n    border-color: #3F7CAC;\r\n    box-shadow: -0.42px 1.96px 4px 0px rgba(0,0,0,0.6);\r\n    transition: border-color 0.4s ease 0s, color 0.4s ease 0s;\r\n}\r\n.sign_in_button a:hover {\r\n    color: #000;\r\n    border-color: #fff; \r\n}\r\n.dont_have_account_text {\r\n    font-size: 16px;\r\n    display: inline-block;\r\n    float: left;\r\n    margin: 0px 70px 20px 68px;\r\n    color: #DE6B48;\r\n}\r\n.sign_up_text {\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n.sign_up_text a {\r\n    text-decoration: none;\r\n    color: #2F2E2E;\r\n}\r\n.or_login_with {\r\n    margin-bottom: 10px;\r\n}\r\n.or {\r\n    width: 45%;\r\n    text-align: right;\r\n    color: #DE6B48;\r\n}\r\n.loginwith {\r\n    width: 58%;\r\n    text-align: right;\r\n    margin-top: 10px;\r\n    color: #DE6B48;\r\n}\r\n.facebook_google {\r\n    width: 60%;\r\n    text-align: right;\r\n}\r\n.facebook_google img {\r\n    cursor: pointer;\r\n}\r\n.facebook_google img:first-child {\r\n    margin-right: 22px;\r\n}\r\n.invalid-feedback {\r\n    margin-left: 70px;\r\n    color: red;\r\n    padding: 10px;\r\n    background-color: antiquewhite;\r\n    width: 55%;\r\n    border-radius: 5px;\r\n}\r\n@media screen and (min-width: 300px) {\r\n    .signin_page_first_box {\r\n        margin: 40px 0px 40px 40px;\r\n        display: none;\r\n    }\r\n    .signin_page_first_box img {\r\n        height: 200px;\r\n        margin: 250px 0 0px 180px;\r\n    }\r\n    .signin_box {\r\n        top: 0px;\r\n        right: 0px;\r\n        width: 600px;\r\n        height: 600px;\r\n    }\r\n    .signin_box_content h2 {\r\n        font-size: 26px;\r\n        margin: 40px 0px 25px 28px;\r\n    }\r\n    .signin_box_content input[type=\"email\"], .signin_box_content input[type=\"password\"] {\r\n        width: 73%;\r\n        margin: 0px 0px 15px 28px;\r\n    }\r\n    .invalid-feedback {\r\n        margin: 0px 0px 15px 28px;\r\n        width: 77%;\r\n    }\r\n    .remember_me {\r\n        margin: 20px 15px 20px 30px;\r\n    }\r\n    .sign_in_button {\r\n        margin: 20px 0px 35px 34px;\r\n    }\r\n    .sign_in_button button {\r\n        padding: 10px 105px;\r\n    }\r\n    .sign_up_text {\r\n        margin-left: 100px;\r\n        margin-bottom: 20px;\r\n    }\r\n    .facebook_google {\r\n        width: 63%;\r\n    }\r\n}\r\n@media screen and (min-width: 480px) {\r\n    .contact_information .email_id {\r\n        padding-top: 0;\r\n        margin-top: 70px;\r\n        margin-left: 40px;\r\n    \r\n    }\r\n    .signin_box_content input[type=\"email\"], .signin_box_content input[type=\"password\"] {\r\n        width: 63%;\r\n        margin: 0px 0px 15px 70px;\r\n    }\r\n    .invalid-feedback {\r\n        width: 63%;\r\n        margin: 0px 0px 15px 70px;\r\n    }\r\n    .signin_box {\r\n        top: 0px;\r\n        right: 0px;\r\n        width: 500px;\r\n        height: 500px;\r\n    }\r\n    .signin_box_content h2 {\r\n        font-size: 26px;\r\n        margin: 40px 0px 0px 115px;\r\n    }\r\n    .remember_me {\r\n        margin: 20px 85px 20px 70px;\r\n    }\r\n    .sign_in_button {\r\n        margin: 20px 0px 35px 70px;\r\n    }\r\n    .sign_in_button button {\r\n        padding: 10px 143px;\r\n    }\r\n    .sign_up_text {\r\n        margin-left: 0px;\r\n        margin-bottom: 0px;\r\n    }\r\n    .facebook_google {\r\n        width: 61%;\r\n    }\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .signin_page_first_box {\r\n        width: 300px;\r\n        height: 300px;\r\n        margin: 40px 0px 40px -35px;\r\n        display: block;\r\n    }\r\n    .signin_page_first_box img {\r\n        margin: 160px 0 0 110px;\r\n        height: 200px;\r\n    }\r\n    .signin_box {\r\n        right: -10px;\r\n        top: -30px;\r\n    }\r\n    .signin_box_content h2 {\r\n        font-size: 30px;\r\n        margin: 10px 0px 30px 115px;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n    .signin_box {\r\n        right: -90px;\r\n    }\r\n    \r\n}\r\n@media screen and (min-width: 1024px) {\r\n    .signin_box {\r\n        right: -90px;\r\n    }\r\n}\r\n@media screen and (min-width: 1280px) {\r\n    .signin_page_first_box {\r\n        width: 400px;\r\n        height: 400px;\r\n    }\r\n    .signin_page_first_box img {\r\n        margin: 180px 0 0 170px;\r\n        height: auto;\r\n    }\r\n    .signin_box {\r\n        right: -180px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6Qyw0QkFBNEI7Q0FDL0I7QUFDRDtJQUNJLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztDQUNkO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZUFBZTtDQUNsQjtBQUNEO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLDBCQUEwQjtJQUMxQiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLDRDQUE0QztDQUMvQztBQUNEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsbURBQW1EO0lBQ25ELDBEQUEwRDtDQUM3RDtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0k7UUFDSSwyQkFBMkI7UUFDM0IsY0FBYztLQUNqQjtJQUNEO1FBQ0ksY0FBYztRQUNkLDBCQUEwQjtLQUM3QjtJQUNEO1FBQ0ksU0FBUztRQUNULFdBQVc7UUFDWCxhQUFhO1FBQ2IsY0FBYztLQUNqQjtJQUNEO1FBQ0ksZ0JBQWdCO1FBQ2hCLDJCQUEyQjtLQUM5QjtJQUNEO1FBQ0ksV0FBVztRQUNYLDBCQUEwQjtLQUM3QjtJQUNEO1FBQ0ksMEJBQTBCO1FBQzFCLFdBQVc7S0FDZDtJQUNEO1FBQ0ksNEJBQTRCO0tBQy9CO0lBQ0Q7UUFDSSwyQkFBMkI7S0FDOUI7SUFDRDtRQUNJLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksbUJBQW1CO1FBQ25CLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksV0FBVztLQUNkO0NBQ0o7QUFFRDtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7O0tBRXJCO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsMEJBQTBCO0tBQzdCO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsMEJBQTBCO0tBQzdCO0lBQ0Q7UUFDSSxTQUFTO1FBQ1QsV0FBVztRQUNYLGFBQWE7UUFDYixjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxnQkFBZ0I7UUFDaEIsMkJBQTJCO0tBQzlCO0lBQ0Q7UUFDSSw0QkFBNEI7S0FDL0I7SUFDRDtRQUNJLDJCQUEyQjtLQUM5QjtJQUNEO1FBQ0ksb0JBQW9CO0tBQ3ZCO0lBQ0Q7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjtBQUNEO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsY0FBYztRQUNkLDRCQUE0QjtRQUM1QixlQUFlO0tBQ2xCO0lBQ0Q7UUFDSSx3QkFBd0I7UUFDeEIsY0FBYztLQUNqQjtJQUNEO1FBQ0ksYUFBYTtRQUNiLFdBQVc7S0FDZDtJQUNEO1FBQ0ksZ0JBQWdCO1FBQ2hCLDRCQUE0QjtLQUMvQjtDQUNKO0FBQ0Q7SUFDSTtRQUNJLGFBQWE7S0FDaEI7O0NBRUo7QUFDRDtJQUNJO1FBQ0ksYUFBYTtLQUNoQjtDQUNKO0FBRUQ7SUFDSTtRQUNJLGFBQWE7UUFDYixjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSx3QkFBd0I7UUFDeEIsYUFBYTtLQUNoQjtJQUNEO1FBQ0ksY0FBYztLQUNqQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduaW5fcGFnZV93cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbi5zaWduaW5fcGFnZV9maXJzdF9ib3gge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCAxNjcsIDE1NSwgMSk7XHJcbiAgICBtYXJnaW46IDQwcHggMHB4IDQwcHggLTM1cHg7XHJcbn1cclxuLnNpZ25pbl9wYWdlX2ZpcnN0X2JveCBpbWcge1xyXG4gICAgbWFyZ2luOiAxODBweCAwIDAgMTcwcHg7XHJcbn1cclxuLnNpZ25pbl9ib3gge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogLTE4MHB4O1xyXG4gICAgdG9wOiAtMzBweDtcclxufVxyXG4uc2lnbmluX2JveF9jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNpZ25pbl9ib3hfY29udGVudCBoMiB7XHJcbiAgICBtYXJnaW46IDQwcHggMHB4IDBweCAxMTVweDtcclxuICAgIGNvbG9yOiAjREU2QjQ4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5zaWduaW5fYm94X2NvbnRlbnQgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCAuc2lnbmluX2JveF9jb250ZW50IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICB3aWR0aDogNTMlO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDE1cHggNzBweDtcclxuICAgIGNvbG9yOiByZ2JhKDYzLDEyNCwxNzIsMSk7XHJcbn1cclxuLnNpZ25pbl9ib3hfY29udGVudCBpbnB1dC5ib3JkZXJfYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDYzLDEyNCwxNzIsMSk7XHJcbn1cclxuLmZvcmdvdF9yZW1lbWJlcl9saW5rcywgLnNpZ25fdXBfd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5yZW1lbWJlcl9tZSB7XHJcbiAgICBtYXJnaW46IDIwcHggODVweCAyMHB4IDcwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI0RFNkI0ODtcclxufVxyXG4uZm9yZ290X3Bhc3N3b3JkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjREU2QjQ4O1xyXG59XHJcbi5zaWduX2luX2J1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCAwcHggMzVweCA3MHB4O1xyXG59XHJcbi5zaWduX2luX2J1dHRvbiBidXR0b24ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAxNDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzNGN0NBQztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM0Y3Q0FDO1xyXG4gICAgYm94LXNoYWRvdzogLTAuNDJweCAxLjk2cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC40cyBlYXNlIDBzLCBjb2xvciAwLjRzIGVhc2UgMHM7XHJcbn1cclxuLnNpZ25faW5fYnV0dG9uIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7IFxyXG59XHJcbi5kb250X2hhdmVfYWNjb3VudF90ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwcHggNzBweCAyMHB4IDY4cHg7XHJcbiAgICBjb2xvcjogI0RFNkI0ODtcclxufVxyXG4uc2lnbl91cF90ZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zaWduX3VwX3RleHQgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzJGMkUyRTtcclxufVxyXG4ub3JfbG9naW5fd2l0aCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5vciB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogI0RFNkI0ODtcclxufVxyXG4ubG9naW53aXRoIHtcclxuICAgIHdpZHRoOiA1OCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogI0RFNkI0ODtcclxufVxyXG4uZmFjZWJvb2tfZ29vZ2xlIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uZmFjZWJvb2tfZ29vZ2xlIGltZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZhY2Vib29rX2dvb2dsZSBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkge1xyXG4gICAgLnNpZ25pbl9wYWdlX2ZpcnN0X2JveCB7XHJcbiAgICAgICAgbWFyZ2luOiA0MHB4IDBweCA0MHB4IDQwcHg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zaWduaW5fcGFnZV9maXJzdF9ib3ggaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjUwcHggMCAwcHggMTgwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lnbmluX2JveCB7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIH1cclxuICAgIC5zaWduaW5fYm94X2NvbnRlbnQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBtYXJnaW46IDQwcHggMHB4IDI1cHggMjhweDtcclxuICAgIH1cclxuICAgIC5zaWduaW5fYm94X2NvbnRlbnQgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCAuc2lnbmluX2JveF9jb250ZW50IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICAgICAgd2lkdGg6IDczJTtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggMTVweCAyOHB4O1xyXG4gICAgfVxyXG4gICAgLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAxNXB4IDI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDc3JTtcclxuICAgIH1cclxuICAgIC5yZW1lbWJlcl9tZSB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDE1cHggMjBweCAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZ25faW5fYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDIwcHggMHB4IDM1cHggMzRweDtcclxuICAgIH1cclxuICAgIC5zaWduX2luX2J1dHRvbiBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTA1cHg7XHJcbiAgICB9XHJcbiAgICAuc2lnbl91cF90ZXh0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va19nb29nbGUge1xyXG4gICAgICAgIHdpZHRoOiA2MyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGFjdF9pbmZvcm1hdGlvbiAuZW1haWxfaWQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5zaWduaW5fYm94X2NvbnRlbnQgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCAuc2lnbmluX2JveF9jb250ZW50IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICAgICAgd2lkdGg6IDYzJTtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggMTVweCA3MHB4O1xyXG4gICAgfVxyXG4gICAgLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgICAgIHdpZHRoOiA2MyU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDE1cHggNzBweDtcclxuICAgIH1cclxuICAgIC5zaWduaW5fYm94IHtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZ25pbl9ib3hfY29udGVudCBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIG1hcmdpbjogNDBweCAwcHggMHB4IDExNXB4O1xyXG4gICAgfVxyXG4gICAgLnJlbWVtYmVyX21lIHtcclxuICAgICAgICBtYXJnaW46IDIwcHggODVweCAyMHB4IDcwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lnbl9pbl9idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwcHggMzVweCA3MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZ25faW5fYnV0dG9uIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNDNweDtcclxuICAgIH1cclxuICAgIC5zaWduX3VwX3RleHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29rX2dvb2dsZSB7XHJcbiAgICAgICAgd2lkdGg6IDYxJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNpZ25pbl9wYWdlX2ZpcnN0X2JveCB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA0MHB4IDBweCA0MHB4IC0zNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnNpZ25pbl9wYWdlX2ZpcnN0X2JveCBpbWcge1xyXG4gICAgICAgIG1hcmdpbjogMTYwcHggMCAwIDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lnbmluX2JveCB7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgIHRvcDogLTMwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lnbmluX2JveF9jb250ZW50IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAzMHB4IDExNXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuc2lnbmluX2JveCB7XHJcbiAgICAgICAgcmlnaHQ6IC05MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuc2lnbmluX2JveCB7XHJcbiAgICAgICAgcmlnaHQ6IC05MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5zaWduaW5fcGFnZV9maXJzdF9ib3gge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZ25pbl9wYWdlX2ZpcnN0X2JveCBpbWcge1xyXG4gICAgICAgIG1hcmdpbjogMTgwcHggMCAwIDE3MHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5zaWduaW5fYm94IHtcclxuICAgICAgICByaWdodDogLTE4MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signin_page_wrapper\">\n    <div class=\"signin_page_first_box\">\n        <img src=\"../assets/a.png\" />\n    </div>\n    <div class=\"signin_box\">\n        <div class=\"signin_box_content\">\n            <h2>Welcome to Munchies!</h2>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"invalid-feedback\" *ngIf=\"!success\">{{error}}</div>\n                <input class=\"border_bottom\" type=\"email\" formControlName=\"username\" name=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" placeholder=\"Email ID\" required />\n                <div *ngIf=\"submitted && (f.username.errors || f.username.invalid)\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    <div *ngIf=\"f.username.errors.email\">Email must be a valid email address</div>\n                </div>\n                <input class=\"border_bottom\" formControlName=\"password\" type=\"password\" name=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\" required />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n                <div class=\"forgot_remember_links\">\n                    <div class=\"remember_me\"><input type=\"checkbox\" name=\"chk\" checked /> <span>Remember Me</span></div>\n                    <div class=\"forgot_password\">Forgot Password</div>\n                </div>\n                <div class=\"sign_in_button\">\n                    <button type=\"submit\">Sign In</button>\n                </div>\n                <div class=\"sign_up_wrapper\">\n                    <div class=\"dont_have_account_text\">Don't have an account?</div>\n                    <div class=\"sign_up_text\"><a routerLink=\"/sign-up\">Sign Up now</a></div>\n                </div>\n                <div class=\"or_login_with\">\n                    <div class=\"or\">or</div>\n                    <div class=\"loginwith\">Log in with</div>\n                </div>\n            </form>\n            <div class=\"facebook_google\">\n                <img src=\"../assets/fb.png\" alt=\"No Image\" (click) = \"fbLogin()\"/>\n                <img src=\"../assets/google_plus.png\" alt=\"No Image\"  (click)=\"googleLogin()\" />\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/user/auth.service.ts");
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
    function SignInComponent(formBuilder, router, http, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.submitted = false;
        this.success = true;
        this.error = '';
        this.username = '';
        this.password = '';
    }
    SignInComponent.prototype.fbLogin = function () {
        this.authService.doFacebookLogin();
    };
    SignInComponent.prototype.googleLogin = function () {
        this.authService.doGoogleLogin();
    };
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
        var _this = this;
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
            this.http.post(this.authService.getDomainName() + '/api/user/login', { 'email': this.username, 'password': this.password }).subscribe(function (data) {
                console.log("PATCH Request is successful ", data);
                _this.success = data.success;
                _this.error = data.error;
                if (data.success) {
                    _this.authService.setLoggedIn(true);
                    console.log("gooooddddd");
                    if (_this.authService.isLoggedIn()) {
                        _this.router.navigate(['/manage-subscription']);
                    }
                }
                else {
                    console.log("baddddddddddddd");
                    return;
                }
            }, function (err) {
                console.log("Err", err);
            });
        }
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/user/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.create_account {   \r\n    width: 50%;\r\n    margin: 0 auto;\r\n}\r\n.create_account h2 {\r\n    color: #E5663D;\r\n    font-size: 23px;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n}\r\n.create_account form input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n    border: 2px solid #e2e2e2;\r\n}\r\n.invalid-feedback {\r\n    color: red;\r\n    padding: 10px;\r\n    background-color: antiquewhite;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    margin-bottom: 20px;\r\n}\r\n.create_account_btn {\r\n    width: 150px;\r\n    padding: 10px 0px;\r\n    margin: 0 auto;\r\n}\r\n.create_account_btn button {\r\n    width: 150px;\r\n    padding: 10px 0px;\r\n    background-color: #fff;\r\n    border: 2px solid #292929;\r\n    border-radius: 20px;\r\n    color: #292929;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n    transition: background-color 0.5s ease 0s, color 0.5s ease 0s, border 0.5s ease 0s; \r\n}\r\n.create_account_btn button:hover {\r\n    background-color: #292929;\r\n    border: 2px solid #fff;\r\n    color: #fff;\r\n}\r\n.success, .error {\r\n    width: 100%;\r\n    display: block;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n}\r\n.success.color {\r\n    background-color: darkseagreen;\r\n    color: #fff;\r\n}\r\n.error.color {\r\n    background-color: #E5663D;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1GQUFtRjtDQUN0RjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixZQUFZO0NBQ2Y7QUFDRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtDQUNmO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY3JlYXRlX2FjY291bnQgeyAgIFxyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jcmVhdGVfYWNjb3VudCBoMiB7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNyZWF0ZV9hY2NvdW50IGZvcm0gaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTJlMmUyO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY3JlYXRlX2FjY291bnRfYnRuIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmNyZWF0ZV9hY2NvdW50X2J0biBidXR0b24ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI5MjkyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogIzI5MjkyOTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlIDBzLCBjb2xvciAwLjVzIGVhc2UgMHMsIGJvcmRlciAwLjVzIGVhc2UgMHM7IFxyXG59XHJcbi5jcmVhdGVfYWNjb3VudF9idG4gYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnN1Y2Nlc3MsIC5lcnJvciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zdWNjZXNzLmNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5lcnJvci5jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTU2NjNEO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"create_account\">\n    <h2>Create an account</h2>\n    <form [formGroup] = \"createAccountForm\" (ngSubmit) = \"onSubmit()\">\n        <div *ngIf=\"submitted && success\" class=\"success color\">\n            Your have registered successfully!\n        </div>\n        <div *ngIf=\"submitted && error\" class=\"error color\">\n            {{error}}\n        </div>\n        <input type=\"text\" name=\"firstName\" formControlName=\"firstName\" placeholder=\"First Name\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n        <input type=\"text\" name=\"lastName\" formControlName=\"lastName\" placeholder=\"Last Name\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n        <input type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" />\n        <div *ngIf=\"submitted && (f.email.errors || f.email.invalid)\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Username is required</div>\n            <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n        </div>\n        <input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Create Password\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n        <input type=\"password\" name=\"confirmPassword\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\" />\n        <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n        </div>\n        <div *ngIf=\"submitted && passwordNotMatch\" class=\"invalid-feedback\">\n            <div *ngIf=\"passwordNotMatch\">Confirm Password not matched with password</div>\n        </div>\n        <div class=\"create_account_btn\">\n            <button>Create Account</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
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
                this.http.post('https://dev-munchies.herokuapp.com/api/user/register', this.data).subscribe(function (data) {
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
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/skip-week/skip-week.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/skip-week/skip-week.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skip_week_page_wrapper {\r\n    \r\n}\r\n.skip_week_page_wrapper h2 {\r\n    text-align: center;\r\n    margin: 80px 0px 40px 0px;\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.skip_week_page_wrapper p {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9za2lwLXdlZWsvc2tpcC13ZWVrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2tpcC13ZWVrL3NraXAtd2Vlay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraXBfd2Vla19wYWdlX3dyYXBwZXIge1xyXG4gICAgXHJcbn1cclxuLnNraXBfd2Vla19wYWdlX3dyYXBwZXIgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA4MHB4IDBweCA0MHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjRTU2NjNEO1xyXG59XHJcbi5za2lwX3dlZWtfcGFnZV93cmFwcGVyIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/skip-week/skip-week.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/skip-week/skip-week.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skip_week_page_wrapper\">\n  <h2>We Understand!</h2>\n  <p>You won't receive a bag for the x week of May 2019</p>\n</div>"

/***/ }),

/***/ "./src/app/user/skip-week/skip-week.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/skip-week/skip-week.component.ts ***!
  \*******************************************************/
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
            template: __webpack_require__(/*! ./skip-week.component.html */ "./src/app/user/skip-week/skip-week.component.html"),
            styles: [__webpack_require__(/*! ./skip-week.component.css */ "./src/app/user/skip-week/skip-week.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkipWeekComponent);
    return SkipWeekComponent;
}());



/***/ }),

/***/ "./src/app/user/subscribe/subscribe.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/subscribe/subscribe.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subscribe_page_wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n    padding: 80px 0px;\r\n}\r\n.subscribe_page_wrapper h2 {\r\n    text-align: center;\r\n    margin: 50px 0px;\r\n    color: #E5663D;\r\n    font-size: 30px;\r\n}\r\n.subscribe_page_wrapper h3 {\r\n    text-align: center;\r\n    font-size: 23px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    \r\n}\r\n.select_plan .plans {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.select_plan .plan {\r\n    box-sizing: border-box;\r\n    flex: 1 0 21%;\r\n    padding: 10px 22px;\r\n    background-color: rgb(125, 187, 195);\r\n    min-height: 270px;\r\n    letter-spacing: 1px;\r\n    line-height: 22px;\r\n    color: #2F2E2E;\r\n}\r\n.plan.border_selected {\r\n    border: 2px solid green;\r\n}\r\n.select_plan .plan a {\r\n    text-decoration: none;\r\n}\r\n.select_plan .plan h2 {\r\n    font-size: 26px;\r\n    color: #2F2E2E;\r\n    margin: 0px;\r\n    font-weight: normal;\r\n}\r\n.select_plan .plan p {\r\n    color: #2F2E2E;\r\n}\r\n.select_plan .plan:nth-child(2) {\r\n    margin: 0 8%;\r\n}\r\n.subscribe_page_wrapper .answer_questions h3 {\r\n    margin: 50px 0px;\r\n}\r\n.subscribe_page_wrapper .color_none {\r\n    color: #2F2E2E;\r\n}\r\n.answer_questions {\r\n    width: 100%;\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n.question_wrapper {\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 50px;\r\n}\r\n.question_wrapper p {\r\n    margin-left: 30px;\r\n    margin-bottom: 8px;\r\n    color: #E5663D;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n}\r\n.question_wrapper ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 40%;\r\n    float: left;\r\n}\r\n.question_wrapper ul li {\r\n    color: #525252;\r\n    line-height: 30px;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n}\r\n.question_wrapper ul li input {\r\n    margin-right: 10px;\r\n}\r\n.question_wrapper .product_images {\r\n    position: absolute;\r\n    left: 45%;\r\n}\r\n.question_wrapper .product_images img {\r\n    height: 120px;\r\n    width: 140px;\r\n}\r\n.question_wrapper .product_images.first_box img:first-child {\r\n    position: absolute;\r\n    top: -30px;\r\n}\r\n.question_wrapper .product_images.first_box img:last-child {\r\n    position: absolute;\r\n    top: 200px;\r\n    left: 200px;\r\n    height: 120px;\r\n}\r\n.question_wrapper .product_images.second_box img:first-child {\r\n    position: absolute;\r\n    top: 140px;\r\n}\r\n.question_wrapper .product_images.second_box img:last-child {\r\n    position: absolute;\r\n    top: 140px;\r\n    left: 300px;\r\n}\r\n.question_wrapper .product_images.third_box img:first-child {\r\n    position: absolute;\r\n    top: 70px;\r\n    left: 150px;\r\n}\r\n.ok_button {\r\n    display: block;\r\n    margin-top: 50px;\r\n}\r\n.ok_button a {\r\n    text-decoration: none;\r\n    color: rgba(50, 50, 50, 1);\r\n    padding: 10px 20px;\r\n    background-color: #fff;\r\n    border-radius: 25px;\r\n    border: 2px solid rgba(50, 50, 50, 1);\r\n    padding: 10px 50px;\r\n    font-weight: bold;\r\n}\r\n.ok_button a:hover {\r\n    color: #fff;\r\n    background-color: rgba(50, 50, 50, 1);\r\n    border: 2px solid rgba(50, 50, 50, 1);\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .question_wrapper .product_images.first_box img:first-child {\r\n        left: 95px;\r\n    }\r\n    .question_wrapper .product_images.second_box img:last-child {\r\n        left: 240px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zdWJzY3JpYmUvc3Vic2NyaWJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTs7Q0FFZjtBQUNEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0NBQ2I7QUFDRDtJQUNJLGNBQWM7SUFDZCxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztDQUNkO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsc0NBQXNDO0NBQ3pDO0FBRUQ7SUFDSTtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksWUFBWTtLQUNmO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL3N1YnNjcmliZS9zdWJzY3JpYmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJzY3JpYmVfcGFnZV93cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDBweDtcclxufVxyXG4uc3Vic2NyaWJlX3BhZ2Vfd3JhcHBlciBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDUwcHggMHB4O1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnN1YnNjcmliZV9wYWdlX3dyYXBwZXIgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIFxyXG59XHJcbi5zZWxlY3RfcGxhbiAucGxhbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLnNlbGVjdF9wbGFuIC5wbGFuIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmbGV4OiAxIDAgMjElO1xyXG4gICAgcGFkZGluZzogMTBweCAyMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNSwgMTg3LCAxOTUpO1xyXG4gICAgbWluLWhlaWdodDogMjcwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogIzJGMkUyRTtcclxufVxyXG4ucGxhbi5ib3JkZXJfc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XHJcbn1cclxuLnNlbGVjdF9wbGFuIC5wbGFuIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5zZWxlY3RfcGxhbiAucGxhbiBoMiB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogIzJGMkUyRTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4uc2VsZWN0X3BsYW4gLnBsYW4gcCB7XHJcbiAgICBjb2xvcjogIzJGMkUyRTtcclxufVxyXG4uc2VsZWN0X3BsYW4gLnBsYW46bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbjogMCA4JTtcclxufVxyXG4uc3Vic2NyaWJlX3BhZ2Vfd3JhcHBlciAuYW5zd2VyX3F1ZXN0aW9ucyBoMyB7XHJcbiAgICBtYXJnaW46IDUwcHggMHB4O1xyXG59XHJcbi5zdWJzY3JpYmVfcGFnZV93cmFwcGVyIC5jb2xvcl9ub25lIHtcclxuICAgIGNvbG9yOiAjMkYyRTJFO1xyXG59XHJcbi5hbnN3ZXJfcXVlc3Rpb25zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5xdWVzdGlvbl93cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5xdWVzdGlvbl93cmFwcGVyIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBjb2xvcjogI0U1NjYzRDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4ucXVlc3Rpb25fd3JhcHBlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ucXVlc3Rpb25fd3JhcHBlciB1bCBsaSB7XHJcbiAgICBjb2xvcjogIzUyNTI1MjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ucXVlc3Rpb25fd3JhcHBlciB1bCBsaSBpbnB1dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnF1ZXN0aW9uX3dyYXBwZXIgLnByb2R1Y3RfaW1hZ2VzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ1JTtcclxufVxyXG4ucXVlc3Rpb25fd3JhcHBlciAucHJvZHVjdF9pbWFnZXMgaW1nIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbn1cclxuLnF1ZXN0aW9uX3dyYXBwZXIgLnByb2R1Y3RfaW1hZ2VzLmZpcnN0X2JveCBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMzBweDtcclxufVxyXG4ucXVlc3Rpb25fd3JhcHBlciAucHJvZHVjdF9pbWFnZXMuZmlyc3RfYm94IGltZzpsYXN0LWNoaWxkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICBsZWZ0OiAyMDBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuLnF1ZXN0aW9uX3dyYXBwZXIgLnByb2R1Y3RfaW1hZ2VzLnNlY29uZF9ib3ggaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTQwcHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbl93cmFwcGVyIC5wcm9kdWN0X2ltYWdlcy5zZWNvbmRfYm94IGltZzpsYXN0LWNoaWxkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTQwcHg7XHJcbiAgICBsZWZ0OiAzMDBweDtcclxufVxyXG4ucXVlc3Rpb25fd3JhcHBlciAucHJvZHVjdF9pbWFnZXMudGhpcmRfYm94IGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICBsZWZ0OiAxNTBweDtcclxufVxyXG4ub2tfYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4ub2tfYnV0dG9uIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTAsIDUwLCA1MCwgMSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ub2tfYnV0dG9uIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDEpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1MCwgNTAsIDUwLCAxKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5xdWVzdGlvbl93cmFwcGVyIC5wcm9kdWN0X2ltYWdlcy5maXJzdF9ib3ggaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBsZWZ0OiA5NXB4O1xyXG4gICAgfVxyXG4gICAgLnF1ZXN0aW9uX3dyYXBwZXIgLnByb2R1Y3RfaW1hZ2VzLnNlY29uZF9ib3ggaW1nOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/subscribe/subscribe.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/subscribe/subscribe.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subscribe_page_wrapper\">\n  <div class=\"subscribe_page_content\">\n    <h2>Snacking made simple and convenient!</h2>\n    <h3 class=\"color_none\">Select a Plan</h3>\n    <div class=\"select_plan\">\n      <div class=\"plans\">\n        <div class=\"plan\" *ngFor=\"let item of plan; let i = index\" (click)=\"selectedPlan(item.planId)\">\n          <h3>{{item.planName}}</h3>\n          <h2 class=\"rate\">{{item.planRate}}</h2>\n          <p>{{item.planText}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"answer_questions\">\n      <h3 class=\"color_none\">Answer a few simple questions so we know what snacks are best for you</h3>\n      <div class=\"question_wrapper\" *ngFor=\"let q of questions\">\n        <p>{{q.question}}</p>\n        <ul>\n          <li *ngFor=\"let opt of q.options\"><input type=\"radio\" value=\"{{opt.optionText}}\" name=\"{{opt.optName}}\" [(ngModel)]=\"q.selectedOpt\" />{{opt.optionText}}</li>\n        </ul>\n        <div class=\"product_images + {{ q.class}}\">\n          <img *ngFor=\"let image of q.images\" src=\"{{image.url}}\" alt=\"{{image.alt}}\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"ok_button\" (click)=\"checkDelivery()\">\n      <a routerLink=\"/delivery\" [queryParams]=\"{selectedPlan: selectedPlanId, question1: questions[0].selectedOpt, question2: questions[1].selectedOpt, question3: questions[2].selectedOpt }\">Ok</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/subscribe/subscribe.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/subscribe/subscribe.component.ts ***!
  \*******************************************************/
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
        this.selectedPlanId = null;
        this.plan = [{
                planId: "5bda9417e54a4134c021d769",
                planName: "Trial Week",
                planRate: "500Rs/bag",
                planText: "Try our snack bag of one week. You'll get one bag with 6 healthy snacks that will take care of your evening hunger pangs."
            },
            {
                planId: "5bd9418790e4ca11e070f31a",
                planName: "For 4 Weeks",
                planRate: "500Rs/bag",
                planText: "1 snack bag delivered each week for a period of 1 month"
            },
            {
                planId: "5bd941b790e4ca11e070f31b",
                planName: "For 12 Weeks",
                planRate: "500Rs/bag",
                planText: "1 snack bag delivered each week for a period of 6 months"
            }];
        this.questions = [{
                qId: 1,
                question: "Are you allergic to any of the following?",
                options: [{
                        optionId: 1,
                        optionText: "Milk",
                        optName: "q1"
                    },
                    {
                        optionId: 2,
                        optionText: "Eggs",
                        optName: "q1"
                    },
                    {
                        optionId: 3,
                        optionText: "Peanuts",
                        optName: "q1"
                    },
                    {
                        optionId: 4,
                        optionText: "Other Nuts",
                        optName: "q1"
                    },
                    {
                        optionId: 5,
                        optionText: "Wheat",
                        optName: "q1"
                    },
                    {
                        optionId: 6,
                        optionText: "none",
                        optName: "q1"
                    }],
                images: [{
                        url: "../../assets/peanut.png",
                        alt: "peanut.png"
                    },
                    {
                        url: "../../assets/chocolate-bar.png",
                        alt: "chocolate_bar.png"
                    }],
                class: "first_box",
                selectedOpt: null
            },
            {
                qId: 2,
                question: "Pick flavours you don't like",
                options: [{
                        optionId: 1,
                        optionText: "Chocolate",
                        optName: "q2"
                    },
                    {
                        optionId: 2,
                        optionText: "Strawberry",
                        optName: "q2"
                    },
                    {
                        optionId: 3,
                        optionText: "Mint",
                        optName: "q2"
                    },
                    {
                        optionId: 4,
                        optionText: "Tomato",
                        optName: "q2"
                    },
                    {
                        optionId: 5,
                        optionText: "No Preference",
                        optName: "q2"
                    }],
                images: [{
                        url: "../../assets/harvest.png",
                        alt: "harvest.png"
                    },
                    {
                        url: "../../assets/cheese.png",
                        alt: "cheese.png"
                    }],
                class: "second_box",
                selectedOpt: null
            },
            {
                qId: 3,
                question: "Pick fruits you don't like",
                options: [{
                        optionId: 1,
                        optionText: "Banana",
                        optName: "q3"
                    },
                    {
                        optionId: 2,
                        optionText: "Apple",
                        optName: "q3"
                    },
                    {
                        optionId: 3,
                        optionText: "Pear",
                        optName: "q3"
                    },
                    {
                        optionId: 4,
                        optionText: "Guava",
                        optName: "q3"
                    },
                    {
                        optionId: 5,
                        optionText: "Mango",
                        optName: "q3"
                    },
                    {
                        optionId: 6,
                        optionText: "No Preference",
                        optName: "q3"
                    }],
                images: [{
                        url: "../../assets/strawberry.png",
                        alt: "strawberry.png"
                    }],
                class: "third_box",
                selectedOpt: null
            }
        ];
    }
    SubscribeComponent.prototype.ngOnInit = function () {
        console.log("hiiiiii", this.questions);
    };
    SubscribeComponent.prototype.selectedPlan = function (selectedPlanId) {
        console.log("sel", selectedPlanId);
        this.selectedPlanId = selectedPlanId;
    };
    SubscribeComponent.prototype.checkDelivery = function () {
        console.log("in check delivery");
        console.log("plan selected", this.selectedPlanId);
    };
    SubscribeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(/*! ./subscribe.component.html */ "./src/app/user/subscribe/subscribe.component.html"),
            styles: [__webpack_require__(/*! ./subscribe.component.css */ "./src/app/user/subscribe/subscribe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "./src/app/user/thank-you/thank-you.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/thank-you/thank-you.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thank_you_page_wrapper {\r\n    \r\n}\r\n.thank_you_page_wrapper h2 {\r\n    text-align: center;\r\n    margin: 80px 0px 40px 0px;\r\n    font-size: 23px;\r\n    color: #E5663D;\r\n}\r\n.thank_you_page_wrapper p {\r\n    text-align: center;\r\n    color: #E5663D\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90aGFuay15b3UvdGhhbmsteW91LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci90aGFuay15b3UvdGhhbmsteW91LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhhbmtfeW91X3BhZ2Vfd3JhcHBlciB7XHJcbiAgICBcclxufVxyXG4udGhhbmtfeW91X3BhZ2Vfd3JhcHBlciBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDgwcHggMHB4IDQwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICNFNTY2M0Q7XHJcbn1cclxuLnRoYW5rX3lvdV9wYWdlX3dyYXBwZXIgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0U1NjYzRFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/thank-you/thank-you.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/thank-you/thank-you.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"thank_you_page_wrapper\">\n  <h2>Thank you!</h2>\n  <p>You will receive an email with a payment acknowledgement</p>\n</div>\n"

/***/ }),

/***/ "./src/app/user/thank-you/thank-you.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/thank-you/thank-you.component.ts ***!
  \*******************************************************/
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
            template: __webpack_require__(/*! ./thank-you.component.html */ "./src/app/user/thank-you/thank-you.component.html"),
            styles: [__webpack_require__(/*! ./thank-you.component.css */ "./src/app/user/thank-you/thank-you.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankYouComponent);
    return ThankYouComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/user/home/home.component.ts");
/* harmony import */ var _collaborate_collaborate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collaborate/collaborate.component */ "./src/app/user/collaborate/collaborate.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help/help.component */ "./src/app/user/help/help.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/user/contact/contact.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/user/subscribe/subscribe.component.ts");
/* harmony import */ var _refund_and_cancellation_refund_and_cancellation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./refund-and-cancellation/refund-and-cancellation.component */ "./src/app/user/refund-and-cancellation/refund-and-cancellation.component.ts");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/user/delivery/delivery.component.ts");
/* harmony import */ var _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-summary/order-summary.component */ "./src/app/user/order-summary/order-summary.component.ts");
/* harmony import */ var _manage_subscription_manage_subscription_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-subscription/manage-subscription.component */ "./src/app/user/manage-subscription/manage-subscription.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/user/my-orders/my-orders.component.ts");
/* harmony import */ var _skip_week_skip_week_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skip-week/skip-week.component */ "./src/app/user/skip-week/skip-week.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/user/thank-you/thank-you.component.ts");
/* harmony import */ var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./personal-details/personal-details.component */ "./src/app/user/personal-details/personal-details.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/user/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/user/auth/auth.guard.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"],
        children: [
            { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: "collaborate", component: _collaborate_collaborate_component__WEBPACK_IMPORTED_MODULE_3__["CollaborateComponent"] },
            { path: "help", component: _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"] },
            { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
            { path: "signIn", component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"] },
            { path: "sign-up", component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"] },
            { path: "subscribe", component: _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__["SubscribeComponent"] },
            { path: "refund-and-cancellation", component: _refund_and_cancellation_refund_and_cancellation_component__WEBPACK_IMPORTED_MODULE_8__["RefundAndCancellationComponent"] },
            { path: "delivery", component: _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_9__["DeliveryComponent"],
                canActivate: [
                    _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]
                ] },
            { path: "order-summary", component: _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_10__["OrderSummaryComponent"],
                canActivate: [
                    _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]
                ] },
            { path: "manage-subscription", component: _manage_subscription_manage_subscription_component__WEBPACK_IMPORTED_MODULE_11__["ManageSubscriptionComponent"],
                canActivate: [
                    _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]
                ] },
            { path: "my-orders", component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_12__["MyOrdersComponent"],
                canActivate: [
                    _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]
                ] },
            { path: "skip-week", component: _skip_week_skip_week_component__WEBPACK_IMPORTED_MODULE_13__["SkipWeekComponent"],
                canActivate: [
                    _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]
                ] },
            { path: "thank-you", component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_14__["ThankYouComponent"],
                canActivate: [
                    _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]
                ] },
            { path: "personal-details", component: _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_15__["PersonalDetailsComponent"] },
            { path: "change-password", component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"] },
            { path: "refund-and-cancellation", component: _refund_and_cancellation_refund_and_cancellation_component__WEBPACK_IMPORTED_MODULE_8__["RefundAndCancellationComponent"] },
            { path: "privacy-policy", component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_18__["PrivacyPolicyComponent"] }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main_wrapper\">asdsad\n    <app-header></app-header>\n    <div class=\"content content_position\" [ngStyle] = \"styles\">\n        <router-outlet></router-outlet>\n    </div>\n</div>  \n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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




var UserComponent = /** @class */ (function () {
    function UserComponent(router, location, http) {
        this.router = router;
        this.location = location;
        this.http = http;
        this.title = 'Munchies';
        this.styles = {};
    }
    UserComponent.prototype.ngOnInit = function () {
        var browserHeight = window.innerHeight;
        var contentElementHeight = browserHeight - 120 + 'px';
        this.styles = {
            'min-height': contentElementHeight
        };
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
    UserComponent.prototype.ngAfterViewInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-root',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/user/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/user/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/user/home/home.component.ts");
/* harmony import */ var _collaborate_collaborate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collaborate/collaborate.component */ "./src/app/user/collaborate/collaborate.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./help/help.component */ "./src/app/user/help/help.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/user/contact/contact.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/user/subscribe/subscribe.component.ts");
/* harmony import */ var _refund_and_cancellation_refund_and_cancellation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refund-and-cancellation/refund-and-cancellation.component */ "./src/app/user/refund-and-cancellation/refund-and-cancellation.component.ts");
/* harmony import */ var _manage_subscription_manage_subscription_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manage-subscription/manage-subscription.component */ "./src/app/user/manage-subscription/manage-subscription.component.ts");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/user/delivery/delivery.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/user/my-orders/my-orders.component.ts");
/* harmony import */ var _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order-summary/order-summary.component */ "./src/app/user/order-summary/order-summary.component.ts");
/* harmony import */ var _skip_week_skip_week_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./skip-week/skip-week.component */ "./src/app/user/skip-week/skip-week.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/user/thank-you/thank-you.component.ts");
/* harmony import */ var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./personal-details/personal-details.component */ "./src/app/user/personal-details/personal-details.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/user/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/user/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
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
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__["SignUpComponent"],
                _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_24__["PrivacyPolicyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_25__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].firebase, "myApp"),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_26__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_27__["AngularFireAuthModule"],
            ],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"], _auth_service__WEBPACK_IMPORTED_MODULE_29__["AuthService"]],
            bootstrap: [_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"]]
        })
    ], UserModule);
    return UserModule;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyAXypfKjo32hy1gJ5ygNZ41h7yPU_WyAhU",
        authDomain: "ffbauth.firebaseapp.com",
        databaseURL: "https://ffbauth.firebaseio.com",
        projectId: "ffbauth",
        storageBucket: "ffbauth.appspot.com",
        messagingSenderId: "314480568771"
    }
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

module.exports = __webpack_require__(/*! F:\projects\munchies\github\trunk\frontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map