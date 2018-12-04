(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~company-company-module~form-form-module"],{

/***/ "./src/app/admin/pages/form/components/form-inputs/form-inputs.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/admin/pages/form/components/form-inputs/form-inputs.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n\n    <!-- form-group form-control control-label ↓↓↓↓↓↓↓↓↓ -->\n    <card cardTitle=\"Input Types\" isCollapse=\"true\">\n      <div class=\"form-group\">\n        <label class=\"control-label\">Text</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Text Input\">\n        <label class=\"control-label\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password Input\">\n        <label class=\"control-label\">With Help</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"With Help\">\n        <span class=\"help-block sub-little-text\">A block of help text that breaks onto a new line and may extend beyond one line.</span>\n        <label class=\"control-label\">Small Input</label>\n        <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Small Input\">\n        <label class=\"control-label\">Large Input</label>\n        <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Large Input\">\n        <label class=\"control-label\">Disabled</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Disabled Input\" disabled>\n        <label class=\"control-label\">Readonly</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Readonly Input\" readonly>\n        <label class=\"control-label\">Textarea</label>\n        <textarea cols=\"0\" rows=\"10\" class=\"form-control\" placeholder=\"Textarea\"></textarea>\n      </div>\n    </card>\n    <card cardTitle=\"Input Group\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <div class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Action\n              <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li>\n                <a href=\"#\">Action</a>\n              </li>\n              <li>\n                <a href=\"#\">Another action</a>\n              </li>\n            </ul>\n          </div>\n          <input class=\"form-control form-control-sm with-success-addon\" placeholder=\"With button group\" type=\"text\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon input-group-addon-primary addon-left\" id=\"basic-addon1\">@</span>\n          <input class=\"form-control with-primary-addon\" placeholder=\"Username\" type=\"text\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input class=\"form-control with-success-addon\" placeholder=\"Mail\" type=\"text\">\n          <span class=\"input-group-addon input-group-addon-success addon-right\" id=\"basic-addon1\">@mail.com</span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon input-group-addon-warning addon-left\" id=\"basic-addon1\">www.</span>\n          <input class=\"form-control with-warning-addon\" placeholder=\"Sitename\" type=\"text\">\n          <span class=\"input-group-addon input-group-addon-warning addon-right\" id=\"basic-addon1\">.com</span>\n        </div>\n      </div>\n    </card>\n  </div>\n\n  <!-- input-group with-addon with-btn&btn-group ↓↓↓↓↓↓↓ -->\n  <div class=\"col-md-6\">\n    <card cardTitle=\"Checkbox&Radio\">\n      <div class=\"form-group\">\n        <div class=\"col-md-4\">\n          <input class=\"checkbox\" type=\"checkbox\" id=\"default-checkbox1\" checked>\n          <label class=\"check-label\" for=\"default-checkbox1\">Checkbox1</label>\n        </div>\n        <div class=\"col-md-4\">\n          <input class=\"checkbox\" type=\"checkbox\" id=\"default-checkbox2\">\n          <label class=\"check-label\" for=\"default-checkbox2\">Checkbox2</label>\n        </div>\n        <div class=\"col-md-4\">\n          <input class=\"checkbox\" type=\"checkbox\" id=\"default-checkbox3\">\n          <label class=\"check-label\" for=\"default-checkbox3\">Checkbox3</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-4\">\n          <input class=\"radio\" type=\"radio\" id=\"default-radio1\" name=\"radio\" checked>\n          <label class=\"radio-label\" for=\"default-radio1\">Radio1</label>\n        </div>\n        <div class=\"col-md-4\">\n          <input class=\"radio\" type=\"radio\" id=\"default-radio2\" name=\"radio\">\n          <label class=\"radio-label\" for=\"default-radio2\">Radio2</label>\n        </div>\n        <div class=\"col-md-4\">\n          <input class=\"radio\" type=\"radio\" id=\"default-radio3\" name=\"radio\">\n          <label class=\"radio-label\" for=\"default-radio3\">Radio3</label>\n        </div>\n      </div>\n    </card>\n    <card cardTitle=\"Color&State\">\n      <div class=\"form-group\">\n        <div class=\"col-md-12\">\n          <input class=\"checkbox\" type=\"checkbox\" id=\"color-checkbox1\" checked>\n          <label class=\"check-label\" for=\"color-checkbox1\">Default</label>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"checkbox checkbox-primary\" type=\"checkbox\" id=\"color-checkbox2\" checked>\n          <label class=\"check-label\" for=\"color-checkbox2\">Primary</label>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"checkbox checkbox-success\" type=\"checkbox\" id=\"color-checkbox3\" checked>\n          <label class=\"check-label\" for=\"color-checkbox3\">Success</label>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"checkbox checkbox-warning\" type=\"checkbox\" id=\"color-checkbox4\" checked>\n          <label class=\"check-label\" for=\"color-checkbox4\">Warning</label>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"checkbox checkbox-danger\" type=\"checkbox\" id=\"color-checkbox5\" checked>\n          <label class=\"check-label\" for=\"color-checkbox5\">Danger</label>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"checkbox checkbox-info\" type=\"checkbox\" id=\"color-checkbox6\" checked>\n          <label class=\"check-label\" for=\"color-checkbox6\">Info</label>\n        </div>\n      </div>\n    </card>\n    <card cardTitle=\"Switch\">\n      <div class=\"switch-group\">\n        <label class=\"control-label\">Multiple Switch</label>\n        <switch switchName=\"multiple\" switchId=\"multiple1\" multiple [checked]=\"true\"></switch>\n        <switch switchName=\"multiple\" switchId=\"multiple2\" theme=\"success\" multiple [checked]=\"true\"></switch>\n        <switch switchName=\"multiple\" switchId=\"multiple3\" theme=\"warning\" multiple [checked]=\"true\"></switch>\n        <switch switchName=\"multiple\" switchId=\"multiple4\" theme=\"danger\" multiple [checked]=\"true\"></switch>\n        <switch switchName=\"multiple\" switchId=\"multiple5\" theme=\"info\" multiple [checked]=\"true\"></switch>\n      </div>\n      <div class=\"switch-group\">\n        <label class=\"control-label\">Single Switch</label>\n        <switch switchName=\"single\" switchId=\"single1\" [checked]=\"true\"></switch>\n        <switch switchName=\"single\" switchId=\"single2\" theme=\"success\"></switch>\n        <switch switchName=\"single\" switchId=\"single3\" theme=\"warning\"></switch>\n        <switch switchName=\"single\" switchId=\"single4\" theme=\"danger\"></switch>\n        <switch switchName=\"single\" switchId=\"single5\" theme=\"info\"></switch>\n      </div>\n    </card>\n    <card cardTitle=\"Select&Multiple Select\">\n      <div class=\"form-group\">\n        <label class=\"control-label\">Select</label>\n        <select name=\"select\" id=\"select1\" class=\"form-control\">\n          <option value=\"option1\">option1</option>\n          <option value=\"option2\">option2</option>\n          <option value=\"option3\">option3</option>\n          <option value=\"option4\">option4</option>\n        </select>\n        <label class=\"control-label\">Multiple Select</label>\n        <select multiple name=\"select\" id=\"select1\" class=\"form-control\">\n          <option value=\"option1\">option1</option>\n          <option value=\"option2\">option2</option>\n          <option value=\"option3\">option3</option>\n          <option value=\"option4\">option4</option>\n          <option value=\"option5\">option4</option>\n          <option value=\"option6\">option4</option>\n          <option value=\"option7\">option4</option>\n        </select>\n      </div>\n    </card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/pages/form/components/form-inputs/form-inputs.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/admin/pages/form/components/form-inputs/form-inputs.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.check-label,\n.radio-label {\n  margin-bottom: 20px; }\n\n.form-group > .form-control {\n  margin-bottom: 10px; }\n\n.form-group > .help-block {\n  margin-top: -10px; }\n\n.switch-group {\n  padding: 10px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.switch-group .control-label {\n    width: 100%; }\n\n.switch-group switch {\n    flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvZm9ybS9jb21wb25lbnRzL2Zvcm0taW5wdXRzL0Q6XFxNYWhlc2hcXG11bmNoaWVzLWdpdGh1YlxcbXVuY2hpZXMuZ2l0XFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxjb2xvci1zY2hlbWVzXFxfZGVmYXVsdC5zY3NzIiwic3JjL2FwcC9hZG1pbi9wYWdlcy9mb3JtL2NvbXBvbmVudHMvZm9ybS1pbnB1dHMvRDpcXE1haGVzaFxcbXVuY2hpZXMtZ2l0aHViXFxtdW5jaGllcy5naXRcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXG1peGluLnNjc3MiLCJzcmMvYXBwL2FkbWluL3BhZ2VzL2Zvcm0vY29tcG9uZW50cy9mb3JtLWlucHV0cy9EOlxcTWFoZXNoXFxtdW5jaGllcy1naXRodWJcXG11bmNoaWVzLmdpdFxcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxccGFnZXNcXGZvcm1cXGNvbXBvbmVudHNcXGZvcm0taW5wdXRzXFxmb3JtLWlucHV0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxpQkFoQlMsRUFpQlo7O0FBRUQ7RUNNSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUDlDOztBQUVEO0VDRUksNERBQW1DO0VBR25DLG9FQUEyQyxFREg5Qzs7QUFFRDtFQ0ZJLDREQUFtQztFQUduQyxvRUFBMkMsRURDOUM7O0FBRUQ7RUNOSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESzlDOztBQUVEO0VDVkksNERBQW1DO0VBR25DLG9FQUEyQyxFRFM5Qzs7QUFFRDtFQ2RJLDREQUFtQztFQUduQyxvRUFBMkMsRURhOUM7O0FFNUNEOztFQUVJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUVRLG9CQUFtQixFQUN0Qjs7QUFITDtFQUtRLGtCQUFpQixFQUNwQjs7QUFHTDtFQUNJLGNBQWE7RUFDYixZQUFXO0VBQ1gsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixnQkFBZSxFQU9sQjs7QUFaRDtJQU9RLFlBQVcsRUFDZDs7QUFSTDtJQVVRLFFBQU8sRUFDViIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL2Zvcm0vY29tcG9uZW50cy9mb3JtLWlucHV0cy9mb3JtLWlucHV0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL21peGluJztcbiRkZWZhdWx0LXRleHQ6MTRweDtcbiRzbS10ZXh0OjEycHg7XG4kbGctdGV4dDoxNnB4O1xuJGJvZHktYmc6I2ZmZjtcbiRzaWRlYmFyLWJnOiM0NjUyOTQ7XG4kc2lkZWJhci1mb250cy1jb2xvcjojZmZmO1xuJGNhcmQtYmc6I2ZmZjtcbiRjYXJkLWJvcmRlcjojZTRlM2UzO1xuJHdoaXRlOiNmZmY7XG4kYmxhY2s6IzAwMDtcbiRib3JkZXItY29sb3I6cmdiYSgkYmxhY2ssIC4xKTtcbiR0YWJsZS1ib3JkZXItY29sb3I6I2U2ZTZlNjtcbiRmb250cy1jb2xvcjojMjYyNTNjO1xuJHByaW1hcnk6I2ZjYTQwMDtcbiRzdWNjZXNzOiMxNmJlOWE7XG4kZGFuZ2VyOiNmYTUxNjc7XG4kd2FybmluZzojZmY3NDAzO1xuJGluZm86IzJjYzNmZjtcbmJvZHkge1xuICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xufVxuXG4uYmctZGVmYXVsdCB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgZGFya2VuKCRjYXJkLWJnLCA0MCUpLCBkYXJrZW4oJGNhcmQtYmcsIDMwJSkpO1xufVxuXG4uYmctcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHByaW1hcnksICNmZmQxN2MpO1xufVxuXG4uYmctc3VjY2VzcyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHN1Y2Nlc3MsICM0MmU2OTcpO1xufVxuXG4uYmctZGFuZ2VyIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkZGFuZ2VyLCAjZmRhMDljKTtcbn1cblxuLmJnLXdhcm5pbmcge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICR3YXJuaW5nLCAjZmFjOTgwKTtcbn1cblxuLmJnLWluZm8ge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRpbmZvLCAjMTVmOGJmKTtcbn0iLCJAbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gICAgdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0uLi4pIHtcbiAgICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMiAzO1xuICAgIGJvcmRlci1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xuICAgIGJvcmRlci1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMyAzO1xufVxuXG5AbWl4aW4gY2VudGVyKCR3aWR0aCwgJGhlaWdodCkge1xuICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogJGhlaWdodDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2hhcmVkL3RoZW1lL2NvbG9yLXNjaGVtZXMvX2RlZmF1bHQuc2Nzc1wiO1xuLmNoZWNrLWxhYmVsLFxuLnJhZGlvLWxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgPi5mb3JtLWNvbnRyb2wge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICA+LmhlbHAtYmxvY2sge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICB9XG59XG5cbi5zd2l0Y2gtZ3JvdXAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAuY29udHJvbC1sYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBzd2l0Y2gge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/pages/form/components/form-inputs/form-inputs.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/pages/form/components/form-inputs/form-inputs.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FormInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputsComponent", function() { return FormInputsComponent; });
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

var FormInputsComponent = /** @class */ (function () {
    function FormInputsComponent() {
    }
    FormInputsComponent.prototype.ngOnInit = function () { };
    FormInputsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-inputs',
            template: __webpack_require__(/*! ./form-inputs.component.html */ "./src/app/admin/pages/form/components/form-inputs/form-inputs.component.html"),
            styles: [__webpack_require__(/*! ./form-inputs.component.scss */ "./src/app/admin/pages/form/components/form-inputs/form-inputs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormInputsComponent);
    return FormInputsComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/form/form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/pages/form/form.component.ts ***!
  \****************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
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

var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~company-company-module~form-form-module.js.map