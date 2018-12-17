(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./node_modules/ng2-order-pipe/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ng2-order-pipe/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * Created by vadimdez on 20/01/2017.
 */
__export(__webpack_require__(/*! ./src/ng2-order.module */ "./node_modules/ng2-order-pipe/dist/src/ng2-order.module.js"));
__export(__webpack_require__(/*! ./src/ng2-order.pipe */ "./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-order-pipe/dist/src/ng2-order.module.js":
/*!******************************************************************!*\
  !*** ./node_modules/ng2-order-pipe/dist/src/ng2-order.module.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vadimdez on 20/01/2017.
 */
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ng2_order_pipe_1 = __webpack_require__(/*! ./ng2-order.pipe */ "./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js");
var Ng2OrderModule = (function () {
    function Ng2OrderModule() {
    }
    return Ng2OrderModule;
}());
Ng2OrderModule = __decorate([
    core_1.NgModule({
        declarations: [ng2_order_pipe_1.Ng2OrderPipe],
        exports: [ng2_order_pipe_1.Ng2OrderPipe]
    })
], Ng2OrderModule);
exports.Ng2OrderModule = Ng2OrderModule;
//# sourceMappingURL=ng2-order.module.js.map

/***/ }),

/***/ "./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-order-pipe/dist/src/ng2-order.pipe.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var Ng2OrderPipe = Ng2OrderPipe_1 = (function () {
    function Ng2OrderPipe() {
    }
    Ng2OrderPipe.prototype.transform = function (value, expression, reverse) {
        if (!value) {
            return value;
        }
        var isArray = value instanceof Array;
        if (isArray) {
            return this.sortArray(value, expression, reverse);
        }
        if (typeof value === 'object') {
            return this.transformObject(value, expression, reverse);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    Ng2OrderPipe.prototype.sortArray = function (value, expression, reverse) {
        var array = value.sort(function (a, b) {
            if (!expression) {
                return a > b ? 1 : -1;
            }
            return a[expression] > b[expression] ? 1 : -1;
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    Ng2OrderPipe.prototype.transformObject = function (value, expression, reverse) {
        var parsedExpression = Ng2OrderPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = Ng2OrderPipe_1.getValue(value, parsedExpression);
        if (!(oldValue instanceof Array)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = Ng2OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        var newValue = this.transform(oldValue, lastPredicate, reverse);
        Ng2OrderPipe_1.setValue(value, newValue, parsedExpression);
        return value;
    };
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    Ng2OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
    };
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    Ng2OrderPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
            var k = expression[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    Ng2OrderPipe.setValue = function (object, value, expression) {
        var i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    return Ng2OrderPipe;
}());
Ng2OrderPipe = Ng2OrderPipe_1 = __decorate([
    core_1.Pipe({
        name: 'orderBy'
    })
], Ng2OrderPipe);
exports.Ng2OrderPipe = Ng2OrderPipe;
var Ng2OrderPipe_1;
//# sourceMappingURL=ng2-order.pipe.js.map

/***/ }),

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.es5.js ***!
  \*****************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Ng2SearchPipe = /** @class */ (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        return items.filter(function (item) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null) {
                    continue;
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = /** @class */ (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ }),

/***/ "./src/app/admin/pages/company/company.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/pages/company/company.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company_wrapper {\r\n  padding-right: 40px;\r\n}\r\n.mr-20 {\r\n  margin-right: 20px;\r\n}\r\nselect.form-control {\r\n  border-radius: 0;\r\n  border: none;\r\n  border-bottom: 1px solid transparent;\r\n  background: rgba(0,0,0,.1);\r\n  transition: all 1s;\r\n  -o-transition: all 1s;\r\n  -moz-transition: all 1s;\r\n  -webkit-transition: all 1s;\r\n  appearance: caret;\r\n  -webkit-appearance: caret;\r\n  -moz-appearance: caret;\r\n}\r\nng-select {\r\n  margin-top: 10px;\r\n}\r\nbutton {\r\n  margin-bottom: 10px;\r\n}\r\n.dropdown-menu {\r\n  max-height: 200px;\r\n  height: 200px;\r\n  overflow-y: scroll;\r\n}\r\n.dropdown-menu li {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n}\r\n.dropdown-menu li:hover {\r\n  text-decoration: none;\r\n  color: #262626;\r\n  background-color: #f5f5f5;\r\n}\r\n.selectedWeeks {\r\n  text-align: left; \r\n  margin-right: 10px;\r\n}\r\n.card-content {\r\n  background: rgba(0,0,0,.1);\r\n  border: 1px solid transparent;\r\n  padding: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.auto_complete_items {\r\n  position: absolute;\r\n  border: 1px solid #d4d4d4;\r\n  border-bottom: none;\r\n  border-top: none;\r\n  z-index: 99999;\r\n  list-style: none;\r\n  width: 200px;\r\n}\r\n.auto_complete_items li {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #d4d4d4;\r\n}\r\n.table>tbody>tr>td {\r\n  text-transform: capitalize;\r\n}\r\n.confirmDeleteModal .modal-header {\r\n  padding: 0px 15px;\r\n}\r\n.confirmDeleteModal .modal-header .close {\r\n  margin-top: 10px;\r\n}\r\n.confirmDeleteModal modal-header h4 {\r\n  margin-top: 10px;\r\n}\r\nmodal-footer button.btn {\r\n  width: 80px;\r\n  margin-right: 20px;\r\n  margin-bottom: 0px;\r\n}\r\n.success {\r\n  width: 75%;\r\n  display: inline-block;\r\n  text-align: center;\r\n  color: #398439;\r\n  font-size: 18px;\r\n}\r\n.selectedWeeks {\r\n  max-width: 200px;\r\n}\r\n.glyphicon {\r\n  float: right;\r\n}\r\n.table th {\r\n  cursor: pointer;\r\n}\r\n.search-input, button.weeksDrp {\r\n  width: 150px;\r\n  float: right;\r\n  margin-top: 20px;\r\n  margin-right: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcGFnZXMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueV93cmFwcGVyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcbi5tci0yMCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbnNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIGFwcGVhcmFuY2U6IGNhcmV0O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogY2FyZXQ7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBjYXJldDtcclxufVxyXG5uZy1zZWxlY3Qge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4uZHJvcGRvd24tbWVudSBsaSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgbGk6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzI2MjYyNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcbi5zZWxlY3RlZFdlZWtzIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmNhcmQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uYXV0b19jb21wbGV0ZV9pdGVtcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5hdXRvX2NvbXBsZXRlX2l0ZW1zIGxpIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG59XHJcbi50YWJsZT50Ym9keT50cj50ZCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmNvbmZpcm1EZWxldGVNb2RhbCAubW9kYWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxufVxyXG4uY29uZmlybURlbGV0ZU1vZGFsIC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jb25maXJtRGVsZXRlTW9kYWwgbW9kYWwtaGVhZGVyIGg0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbm1vZGFsLWZvb3RlciBidXR0b24uYnRuIHtcclxuICB3aWR0aDogODBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5zdWNjZXNzIHtcclxuICB3aWR0aDogNzUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMzOTg0Mzk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zZWxlY3RlZFdlZWtzIHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5nbHlwaGljb24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4udGFibGUgdGgge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VhcmNoLWlucHV0LCBidXR0b24ud2Vla3NEcnAge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/pages/company/company.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/pages/company/company.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"company_wrapper\">\n  <div class=\"container-fluid content\">\n    <h2>Product</h2>\n\n    <div>\n      <div class=\"row\">\n        <button (click)=\"addModal.open()\" class=\"btn btn-primary\" style=\"margin:20px\">Add Product</button>\n        <span class=\"success\" *ngIf=\"message!=''\">{{message}}</span>\n        <!-- <button class=\"btn btn-primary weeksDrp\">Weeks</button> -->\n        <input class=\"form-control search-input\" placeholder=\"Search\" type=\"text\" name=\"search\" [(ngModel)]=\"searchFilter\"> \n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th (click)=\"sort('name')\">Product Name\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('type')\">Type\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='type'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('company')\">Company\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='company'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('quantity')\">Quantity\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='quantity'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('Cost')\">Cost\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='Cost'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('price')\">MRP\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='price'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('allergyDetails')\">Allergy\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='allergyDetails'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('kcal')\">KCAL\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='kcal'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th>Edit/Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of products | orderBy: key : reverse | filter:searchFilter, let i=index\">\n            <td>{{i+1}}</td>\n            <td>{{product.name}}</td>\n            <td>{{product.type}}</td>\n            <td>{{product.company}}</td>\n            <td>{{product.quantity}}</td>\n            <td>{{product.cost}}</td>\n            <td>{{product.price}}</td>\n            <td>{{product.allergyDetails}}</td>\n            <td>{{product.kcal}}</td>\n            <td class=\"selectedWeeks\">\n              <button (click)=\"editModal.open();selectedProductObj=product\" class=\"btn btn-success mr-20\">Edit</button>\n              <button (click)=\"confirmDeleteProductModal.open(); productObj=product; index=i;\" class=\"btn btn-danger\">Delete</button>\n              <div *ngIf=\"product.weeks.length > 0\" class=\"card-content\">\n                <span *ngFor=\"let weekItem of product.weeks;let weekIndex = index;\">\n                  <span class=\"selectedWeeks\">\n                    <button class=\"btn btn-warning\">{{'Week ' + weekItem}}\n                      <i (click)=\"confirmDeleteModal.open(); productObj=product; weekNo=weekItem;\" class=\"fa fa-close\"></i></button>\n                  </span>\n                </span>\n              </div>\n              <div>\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn \" [ngClass]=\"{'open':product.selectedWeek}\">\n                    <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-success dropdown-toggle week-dropdown-btn\" aria-expanded=\"true\"\n                      aria-haspopup=\"true\" (click)=\"product.selectedWeek= product.selectedWeek ? null : 1\">\n                      {{'Week'}}\n                      <span class=\"caret\"></span>\n                    </button>\n                    <ul *ngIf=\"product.selectedWeek\" class=\"dropdown-menu\">\n                      <li *ngFor=\"let week of weekArray\" value=\"{{week.id}}\" (click)=\"addWeekInProduct(product.weeks,week.id, product._id);product.selectedWeek=null\">{{week.text}}</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<modal #addModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"true\"  >\n  <modal-header>\n    <h3>Add Product</h3>\n  </modal-header>\n  <modal-content>\n    <div (keydown.enter)=\"addProduct(addModal)\" (click)=\"hideAutoComplete = false\">\n      <div class=\"form-group\">\n        <label class=\"control-label\">Name</label>\n        <input type=\"text\" [(ngModel)]=\"addPname\" class=\"form-control\" placeholder=\"Enter Product Name\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Type</label>\n        <select [(ngModel)]=\"addPtype\" placeholder=\"Select Type\" class=\"form-control\">\n          <option [value]=\"default\" selected=\"selected\">Select Type</option>\n          <option *ngFor=\"let productType of productTypes\" value=\"{{productType}}\">{{productType}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Company</label>\n        <input type=\"text\" [(ngModel)]=\"addPcompany\" (keydown)=\"hideAutoComplete=true\" class=\"form-control\" placeholder=\"Enter Product Company\" />\n        <ul class=\"auto_complete_items\" [hidden]=\"!hideAutoComplete\">\n          <li \n          *ngFor=\"let company of companyName\" \n          [ngClass]=\"{'hidden':(!ifMatchString(addPcompany | lowercase,company  | lowercase))}\"\n          (click)=\"populateCompanyName(company)\"><span>{{company}}</span></li>\n        </ul>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Quantity</label>\n        <input type=\"text\" [(ngModel)]=\"addPquantity\" class=\"form-control\" placeholder=\"Enter Product Quantity\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Cost</label>\n        <input type=\"text\" [(ngModel)]=\"addPcost\" class=\"form-control\" placeholder=\"Enter Product Cost\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">MRP</label>\n        <input type=\"text\" [(ngModel)]=\"addPmrp\" class=\"form-control\" placeholder=\"Enter Product MRP\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Allergy Details</label>\n        <select [(ngModel)]=\"addPallergyDetails\" placeholder=\"Select Company\" class=\"form-control\">\n          <option [value]=\"default\" selected=\"selected\">Select Allergy Details</option>\n          <option *ngFor=\"let allergy of allergyDetails\" value=\"{{allergy}}\">{{allergy}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Kcal</label>\n        <input type=\"text\" [(ngModel)]=\"addPkcal\" class=\"form-control\" placeholder=\"Enter Product KCal\" />\n      </div>\n      <button (click)=\"addProduct(addModal)\" class=\"btn btn-primary\">Add Product</button>\n    </div>\n  </modal-content>\n</modal>\n\n<modal #editModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n  <modal-header>\n    <h3>Edit Product</h3>\n  </modal-header>\n  <modal-content>\n    <div (keydown.enter)=\"editProduct(editModal, selectedProductObj)\">\n      <div class=\"form-group\">\n        <label class=\"control-label\">Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.name\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Type</label>\n        <select [(ngModel)]=\"selectedProductObj.type\" placeholder=\"Select Type\" class=\"form-control\">\n          <option [value]=\"default\" selected=\"selected\">{{selectedProductObj.type}}</option>\n          <option *ngFor=\"let productType of productTypes\" value=\"{{productType}}\">{{productType}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Company</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.company\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Quantity</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.quantity\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Cost</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.cost\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">MRP</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.price\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Allergy Details</label>\n        <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.allergyDetails\" /> -->\n        <select [(ngModel)]=\"selectedProductObj.allergyDetails\" class=\"form-control\">\n            <option [value]=\"default\" selected=\"selected\">Select Allergy Details</option>\n            <option *ngFor=\"let allergy of allergyDetails\" value=\"{{allergy}}\">{{allergy}}</option>\n          </select>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Kcal</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.kcal\" />\n      </div>\n      <button class=\"btn btn-primary\" (click)=\"editProduct(editModal, selectedProductObj)\">Edit Product</button>\n    </div>\n  </modal-content>\n</modal>\n<modal #confirmDeleteModal class=\"confirmDeleteModal\" [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"true\"  >\n  <modal-header>\n    <h3>Confirm Delete</h3>\n  </modal-header>\n  <modal-content>\n    <h4>Are you sure you want to delete Week {{ weekNo}}?</h4>\n  </modal-content>\n  <modal-footer>\n      <button class=\"btn btn-danger\" (click)=\"removeWeekInProduct(productObj.weeks,productObj._id, weekNo, confirmDeleteModal);\">Yes</button>\n      <button class=\"btn btn-success\" (click)=\"closeModal(confirmDeleteModal);\">No</button>\n  </modal-footer>\n</modal>\n<modal #confirmDeleteProductModal class=\"confirmDeleteModal\" [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"true\"  >\n  <modal-header>\n    <h3>Confirm Delete</h3>\n  </modal-header>\n  <modal-content>\n    <h4>Are you sure you want to delete this product?</h4>\n  </modal-content>\n  <modal-footer>\n      <button class=\"btn btn-danger\" (click)=\"deleteItem(productObj._id, confirmDeleteProductModal, index);\">Yes</button>\n      <button class=\"btn btn-success\" (click)=\"closeModal(confirmDeleteProductModal);\">No</button>\n  </modal-footer>\n</modal>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    function CompanyComponent(http, auth, cdRef, router) {
        this.http = http;
        this.auth = auth;
        this.cdRef = cdRef;
        this.router = router;
        this.view = 'company';
        this.message = '';
        this.data = {};
        this.pType = [];
        this.selectedTypeId = '';
        this.selectCompanyId = '';
        this.productTypes = [];
        this.pCompany = [];
        this.productCompany = "";
        this.companyName = [];
        this.selectedCompany = "No Selected Company";
        this.selectedCompanyName = "";
        this.selectedCompanyObj = {};
        this.selectedTypeObj = {};
        // product Tab var
        this.addProductArray = {};
        this.editProductArray = {};
        this.selectedProductObj = {};
        this.selectedWeeks = [];
        this.matchedCompanyName = [];
        this.hideAutoComplete = false;
        this.weeks = [];
        this.errorMessage = '';
        this.hideWeekDrp = 0;
        this.pNameArr = [];
        this.weekArray = [{ id: 1, text: 'Week 1' }, { id: 2, text: 'Week 2' }, { id: 3, text: 'Week 3' },
            { id: 4, text: 'Week 4' }, { id: 5, text: 'Week 5' }, { id: 6, text: 'Week 6' }, { id: 7, text: 'Week 7' },
            { id: 8, text: 'Week 8' }, { id: 9, text: 'Week 9' }, { id: 10, text: 'Week 10' }, { id: 11, text: 'Week 11' },
            { id: 12, text: 'Week 12' }];
        // Products Table Sorting Code 
        //sorting
        this.key = 'name'; //set default
        this.reverse = false;
        // Multiple select
        // public items: Array<string> = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 
        // 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'];
        this.value = ['Athens'];
        this.id = ['1'];
        this._disabledV = '0';
        this.disabled = false;
    }
    CompanyComponent.prototype.clickout = function (event) {
        console.log("click outside", event);
        if (!event.target.classList.contains("week-dropdown-btn")) {
            this.products.forEach(function (productItem) {
                productItem.selectedWeek = null;
            });
        }
        this.cdRef.detectChanges();
    };
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("hiiiiiiiiiiiii", this.auth.getDomainName());
        this.productTypes = ['Laadu', 'Makhana', 'Energy Bars', 'Cookies',
            'Khakra', 'Drink', 'Nut Mix', 'Crisps', 'Grain Pops',
            'Vegetable', 'Chips', 'Fruity', 'honey sachet', 'tea bags', 'fresh fruit'];
        this.allergyDetails = ['Wheat', 'Milk', 'Eggs', 'Peanuts', 'Other nuts', 'none'];
        this.http.get(this.auth.getDomainName() + '/api/product').subscribe(function (res) {
            _this.productResponse = res.data;
            _this.products = res.data.products;
            _this.productResponse.products.forEach(function (element, index) {
                var uniqArr = [];
                element.weeks.forEach(function (item) {
                    if (!(uniqArr.indexOf(item.week) > -1)) {
                        uniqArr.push(item.week);
                    }
                });
                _this.productResponse.products[index].weeks = uniqArr;
            });
            console.log(_this.productResponse);
            if (_this.productResponse.companies.length > 0) {
                _this.productResponse.companies.forEach(function (companyItem) {
                    _this.companyName.push(companyItem.company);
                });
            }
        }, function (err) {
            console.log(err);
        });
        // this.http.get(this.auth.getDomainName() + '/api/type').subscribe((res: productRes) => {
        //   console.log(res.data);
        //    companies[{ _id , company}]
        //   this.productTypes = res.data;
        // },
        // err=> {
        //   console.log(err);
        // });
        this.http.get(this.auth.getDomainName() + '/api/company').subscribe(function (res) {
            console.log(res.data);
            _this.productCompanies = res.data;
            _this.productCompanies.forEach(function (element) {
                console.log(element);
                _this.companyName.push(element.company);
            });
        }, function (err) {
            console.log(err);
        });
    };
    //Delete code
    CompanyComponent.prototype.addWeekInProduct = function (weekItem, weekNo, productId) {
        var _this = this;
        console.log("weekItem,weekNo", weekItem, weekNo);
        if (!(weekItem.indexOf(weekNo) > -1)) {
            console.log("weekNo", weekItem);
            weekItem.push(weekNo);
        }
        this.http.post(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekNo, {})
            .subscribe(function (data) {
            console.log(data);
            if (!data.success) {
                _this.errorMessage = data.error;
                alert(_this.errorMessage);
            }
            else {
                _this.errorMessage = '';
            }
        });
    };
    CompanyComponent.prototype.removeWeekInProduct = function (weekItem, productId, weekId, modal) {
        if (weekItem.indexOf(weekId) > -1) {
            var indexOfItem = weekItem.indexOf(weekId);
            weekItem.splice(indexOfItem, 1);
        }
        console.log(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekId);
        this.http.delete(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekId, {}).subscribe(function (data) {
            console.log(data);
        });
        this.closeModal(modal);
    };
    CompanyComponent.prototype.deleteItem = function (pid, modal, index) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            productId: pid
        };
        this.data = {
            productId: pid
        };
        console.log(this.data);
        this.http.delete(this.auth.getDomainName() + '/api/product/delete/' + pid, {}).subscribe(function (res) {
            console.log(res.success);
            _this.message = res.message;
            // this.products = this.auth.getAllProducts();
            _this.products.splice(index, 1);
            console.log(_this.products);
            // this.scrollTop();
        }, function (err) {
            console.log(err);
        });
        this.closeModal(modal);
    };
    //Auto complete functionality
    CompanyComponent.prototype.ifMatchString = function (name, companyObj) {
        // this.ref.detectChanges();
        if (name && name.length > 0 && companyObj.includes(name)) {
            // this.hideAutoComplete = false;
            return true;
        }
        return false;
    };
    CompanyComponent.prototype.populateCompanyName = function (company) {
        this.addPcompany = company;
        this.hideAutoComplete = false;
    };
    //Modal code
    CompanyComponent.prototype.openModal = function (modal) {
        modal.open();
    };
    CompanyComponent.prototype.closeModal = function (modal) {
        modal.close();
    };
    CompanyComponent.prototype.onClose = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            type: 'success',
            title: 'Success!',
            text: 'close it!',
        });
    };
    CompanyComponent.prototype.openCompanyEditModal = function () {
        console.log();
    };
    //change view code
    CompanyComponent.prototype.changeView = function (view) {
        this.view = view;
    };
    CompanyComponent.prototype.addProduct = function (modal) {
        var _this = this;
        this.addProductArray = {
            name: this.addPname,
            type: this.addPtype,
            quantity: this.addPquantity,
            company: this.addPcompany,
            cost: this.addPcost,
            price: this.addPmrp,
            allergyDetails: this.addPallergyDetails,
            kcal: this.addPkcal,
            weeks: []
        };
        this.http.post(this.auth.getDomainName() + '/api/company/add', { company: this.addPcompany }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.http.post(this.auth.getDomainName() + '/api/product/add', this.addProductArray).subscribe(function (response) {
            console.log(response);
            if (response.success) {
                _this.message = response.message;
                console.log(_this.addProductArray);
                _this.products.push(__assign({}, _this.addProductArray, { _id: response.data._id }));
                // this.scrollTop();
            }
        }, function (err) {
            console.log(err);
        });
        this.closeModal(modal);
    };
    //edit Compnay code
    CompanyComponent.prototype.editCompany = function (modal, selectedCompany) {
        this.selectedCompanyId = selectedCompany._id;
        this.productCompany = selectedCompany.company;
        this.http.put(this.auth.getDomainName() + '/api/company/edit', { company: this.productCompany, companyId: this.selectedCompanyId }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.closeModal(modal);
    };
    CompanyComponent.prototype.editProduct = function (modal, selectedProduct) {
        this.editProductArray = {
            name: selectedProduct.name,
            type: selectedProduct.type,
            quantity: selectedProduct.quantity,
            company: selectedProduct.company,
            cost: selectedProduct.cost,
            price: selectedProduct.price,
            allergyDetails: selectedProduct.allergyDetails,
            kcal: selectedProduct.kcal,
            productId: selectedProduct._id
        };
        this.http.post(this.auth.getDomainName() + '/api/product/edit', this.editProductArray).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.closeModal(modal);
    };
    CompanyComponent.prototype.sort = function (key) {
        console.log(key);
        this.key = key;
        this.reverse = !this.reverse;
    };
    CompanyComponent.prototype.selected = function (value, productId) {
        console.log('Selected value is: ', value);
        var weekId = value.id;
        this.http.post(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekId, {}).subscribe(function (data) {
            console.log(data);
        });
    };
    CompanyComponent.prototype.removed = function (value, productId) {
        console.log('Removed value is: ', value);
        console.log('Removed value is: ', productId);
        console.log('removed value is: ', JSON.parse(value.id));
        var weekId = value.id;
        this.http.delete(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekId, {}).subscribe(function (data) {
            console.log(data);
        });
    };
    CompanyComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    CompanyComponent.prototype.itemsToString = function (value) {
        if (value === void 0) { value = []; }
        return value
            .map(function (item) {
            return item.text;
        }).join(',');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CompanyComponent.prototype, "clickout", null);
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/admin/pages/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/admin/pages/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-modal */ "./node_modules/ngx-modal/index.js");
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-select */ "./node_modules/ng2-select/index.js");
/* harmony import */ var ng2_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ui_components_modals_modals_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/components/modals/modals.component */ "./src/app/admin/pages/ui/components/modals/modals.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form/form.component */ "./src/app/admin/pages/form/form.component.ts");
/* harmony import */ var _form_components_form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form/components/form-inputs/form-inputs.component */ "./src/app/admin/pages/form/components/form-inputs/form-inputs.component.ts");
/* harmony import */ var _form_components_ng2_select_multiple_select_multiple_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form/components/ng2-select/multiple-select/multiple-select.component */ "./src/app/admin/pages/form/components/ng2-select/multiple-select/multiple-select.component.ts");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-order-pipe */ "./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { CustomSearchPipe } from '../pipe/custom-search.pipe';
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
                _company_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                ngx_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
                ng2_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
                ng2_order_pipe__WEBPACK_IMPORTED_MODULE_12__["Ng2OrderModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__["Ng2SearchPipeModule"]
            ],
            declarations: [
                _company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"],
                _ui_components_modals_modals_component__WEBPACK_IMPORTED_MODULE_8__["ModalsComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
                _form_components_form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_10__["FormInputsComponent"],
                _form_components_ng2_select_multiple_select_multiple_select_component__WEBPACK_IMPORTED_MODULE_11__["MultipleSelectComponent"]
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