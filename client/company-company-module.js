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

/***/ "./src/app/admin/pages/company/company.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/pages/company/company.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"company_wrapper\">\n  <div class=\"container-fluid content\">\n    <h2>Product</h2>\n\n    <div>\n      <div class=\"row\">\n        <button (click)=\"addModal.open()\" class=\"btn btn-primary add_product_btn\" style=\"margin:20px\">Add Product</button>\n        <!-- <span class=\"success\" *ngIf=\"message!=''\">{{message}}</span> -->\n        <!-- <button class=\"btn btn-primary weeksDrp\">Weeks</button> -->\n        <div class=\"input-group search_by_week\">\n          <div class=\"input-group-btn \" [ngClass]=\"{'open':selectedWeek}\">\n            <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-success dropdown-toggle week-dropdown-btn\" aria-expanded=\"true\"\n              aria-haspopup=\"true\" (click)=\"selectedWeek= selectedWeek ? null : 1\">\n              {{searchWeek > 0 ? 'Week ' + searchWeek: 'Select Week'}}\n              <span class=\"caret\"></span>\n            </button>\n            <ul *ngIf=\"selectedWeek\" class=\"dropdown-menu\">\n              <li value=\"All\" (click)=\"searchWeek=''; selectedWeek=null\">All</li>\n              <li *ngFor=\"let week of weekArray\" value=\"{{week.id}}\" (click)=\"searchWeek=week.id; selectedWeek=null\">{{week.text}}</li>\n            </ul>\n          </div>\n        </div>\n        <input class=\"form-control search-input\" placeholder=\"Search\" type=\"text\" name=\"search\" [(ngModel)]=\"searchFilter\"> \n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th (click)=\"sort('name')\">Product Name\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('type')\">Type\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='type'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('company')\">Company\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='company'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('quantity')\">Quantity\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='quantity'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('Cost')\">Cost\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='Cost'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('price')\">MRP\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='price'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('allergyDetails')\">Allergy\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='allergyDetails'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th (click)=\"sort('kcal')\">KCAL\n              <span class=\"glyphicon sort-icon\" *ngIf=\"key =='kcal'\" \n                [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\">\n              </span>\n            </th>\n            <th>Edit/Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of products | orderBy: key : reverse | filter:searchFilter | customSearch: searchWeek, let i=index\">\n            <td>{{i+1}}</td>\n            <td>{{product.name}}</td>\n            <td>{{product.type}}</td>\n            <td>{{product.company}}</td>\n            <td>{{product.quantity}}</td>\n            <td>{{product.cost}}</td>\n            <td>{{product.price}}</td>\n            <td>{{product.allergyDetails}}</td>\n            <td>{{product.kcal}}</td>\n            <td class=\"selectedWeeks\">\n              <button (click)=\"editModal.open();selectedProductObj=product\" class=\"btn btn-success mr-20\">Edit</button>\n              <button (click)=\"confirmDeleteProductModal.open(); productObj=product; index=i;\" class=\"btn btn-danger\">Delete</button>\n              <div *ngIf=\"product.weeks.length > 0\" class=\"card-content\">\n                <span *ngFor=\"let weekItem of product.weeks;let weekIndex = index;\">\n                  <span class=\"selectedWeeks\">\n                    <button class=\"btn btn-warning weekBtn\">{{'Week ' + weekItem}}\n                      <i (click)=\"confirmDeleteModal.open(); productObj=product; weekNo=weekItem;\" class=\"fa fa-close\"></i></button>\n                  </span>\n                </span>\n              </div>\n              <div>\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn \" [ngClass]=\"{'open':product.selectedWeek}\">\n                    <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-success dropdown-toggle week-dropdown-btn\" aria-expanded=\"true\"\n                      aria-haspopup=\"true\" (click)=\"product.selectedWeek= product.selectedWeek ? null : 1\">\n                      {{'Week'}}\n                      <span class=\"caret\"></span>\n                    </button>\n                    <ul *ngIf=\"product.selectedWeek\" class=\"dropdown-menu\">\n                      <li *ngFor=\"let week of weekArray\" value=\"{{week.id}}\" (click)=\"addWeekInProduct(product.weeks,week.id, product._id);product.selectedWeek=null\">{{week.text}}</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr *ngIf=\"!(products.length > 0) && !products\"><td colspan=\"10\">No records found</td></tr>\n        </tbody>\n      </table>\n      <!-- <form class=\"pagination-wrapper\">\n        <div class=\"form-group pages\">\n          <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" directionLinks=\"true\"\n            autoHide=\"false\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n            screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n        </div>\n      </form> -->\n    </div>\n  </div>\n</div>\n<modal #addModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"true\"  >\n  <modal-header>\n    <h3>Add Product</h3>\n  </modal-header>\n  <modal-content>\n    <div (keydown.enter)=\"addProduct(addModal)\" (click)=\"hideAutoComplete = false\">\n      <div class=\"form-group\">\n        <label class=\"control-label\">Name</label>\n        <input type=\"text\" [(ngModel)]=\"addPname\" class=\"form-control\" placeholder=\"Enter Product Name\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Type</label>\n        <select [(ngModel)]=\"addPtype\" placeholder=\"Select Type\" class=\"form-control\">\n          <option value=\"default\" selected=\"selected\">Select Type</option>\n          <option *ngFor=\"let productType of productTypes\" value=\"{{productType}}\">{{productType}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Company</label>\n        <input type=\"text\" [(ngModel)]=\"addPcompany\" (keydown)=\"hideAutoComplete=true\" class=\"form-control\" placeholder=\"Enter Product Company\" />\n        <ul class=\"auto_complete_items\" [hidden]=\"!hideAutoComplete\">\n          <li \n          *ngFor=\"let company of companyName\" \n          [ngClass]=\"{'hidden':(!ifMatchString(addPcompany | lowercase,company  | lowercase))}\"\n          (click)=\"populateCompanyName(company)\"><span>{{company}}</span></li>\n        </ul>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Quantity</label>\n        <input type=\"text\" [(ngModel)]=\"addPquantity\" class=\"form-control\" placeholder=\"Enter Product Quantity\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Cost</label>\n        <input type=\"text\" [(ngModel)]=\"addPcost\" class=\"form-control\" placeholder=\"Enter Product Cost\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">MRP</label>\n        <input type=\"text\" [(ngModel)]=\"addPmrp\" class=\"form-control\" placeholder=\"Enter Product MRP\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Allergy Details</label>\n        <select [(ngModel)]=\"addPallergyDetails\" class=\"form-control\">\n          <option value=\"default\" selected=\"selected\">Select Allergy Details</option>\n          <option *ngFor=\"let allergy of allergyDetails\" value=\"{{allergy}}\">{{allergy}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Kcal</label>\n        <input type=\"text\" [(ngModel)]=\"addPkcal\" class=\"form-control\" placeholder=\"Enter Product KCal\" />\n      </div>\n      <button (click)=\"addProduct(addModal)\" class=\"btn btn-primary\">Add Product</button>\n    </div>\n  </modal-content>\n</modal>\n\n<modal #editModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n  <modal-header>\n    <h3>Edit Product</h3>\n  </modal-header>\n  <modal-content>\n    <div (keydown.enter)=\"editProduct(editModal, selectedProductObj)\" (click)=\"hideAutoComplete = false\">\n      <div class=\"form-group\">\n        <label class=\"control-label\">Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.name\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Type</label>\n        <select [(ngModel)]=\"selectedProductObj.type\" placeholder=\"Select Type\" class=\"form-control\">\n          <option value=\"{{selectedProductObj.type}}\" selected=\"selected\">{{selectedProductObj.type}}</option>\n          <option *ngFor=\"let productType of productTypes\" value=\"{{productType}}\">{{productType}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Company</label>\n        <input type=\"text\" class=\"form-control\" (keydown)=\"hideAutoComplete=true\" [(ngModel)]=\"selectedProductObj.company\" />\n        <ul class=\"auto_complete_items\" [hidden]=\"!hideAutoComplete\">\n          <li \n          *ngFor=\"let company of companyName\" \n          [ngClass]=\"{'hidden':(!ifMatchString(selectedProductObj.company | lowercase,company  | lowercase))}\"\n          (click)=\"populateCompanyName(company)\"><span>{{company}}</span></li>\n        </ul>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Quantity</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.quantity\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Cost</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.cost\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">MRP</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.price\" />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Allergy Details</label>\n        <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.allergyDetails\" /> -->\n        <select [(ngModel)]=\"selectedProductObj.allergyDetails\" class=\"form-control\">\n            <option value=\"default\" selected=\"selected\">Select Allergy Details</option>\n            <option *ngFor=\"let allergy of allergyDetails\" value=\"{{allergy}}\">{{allergy}}</option>\n          </select>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Kcal</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.kcal\" />\n      </div>\n      <button class=\"btn btn-primary\" (click)=\"editProduct(editModal, selectedProductObj)\">Edit Product</button>\n    </div>\n  </modal-content>\n</modal>\n<modal #confirmDeleteModal class=\"confirmDeleteModal\" [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"true\"  >\n  <modal-header>\n    <h3>Confirm Delete</h3>\n  </modal-header>\n  <modal-content>\n    <h4>Are you sure you want to delete Week {{ weekNo}}?</h4>\n  </modal-content>\n  <modal-footer>\n      <button class=\"btn btn-danger\" (click)=\"removeWeekInProduct(productObj.weeks,productObj._id, weekNo, confirmDeleteModal);\">Yes</button>\n      <button class=\"btn btn-success\" (click)=\"closeModal(confirmDeleteModal);\">No</button>\n  </modal-footer>\n</modal>\n<modal #confirmDeleteProductModal class=\"confirmDeleteModal\" [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"true\"  >\n  <modal-header>\n    <h3>Confirm Delete</h3>\n  </modal-header>\n  <modal-content>\n    <h4>Are you sure you want to delete this product?</h4>\n  </modal-content>\n  <modal-footer>\n      <button class=\"btn btn-danger\" (click)=\"deleteItem(productObj._id, confirmDeleteProductModal, index);\">Yes</button>\n      <button class=\"btn btn-success\" (click)=\"closeModal(confirmDeleteProductModal);\">No</button>\n  </modal-footer>\n</modal>"

/***/ }),

/***/ "./src/app/admin/pages/company/company.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/pages/company/company.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary, .pagination-wrapper .input-group .input-group-addon, .my-pagination ::ng-deep .ngx-pagination a:hover,\n.my-pagination ::ng-deep .ngx-pagination .current {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.company_wrapper {\n  padding-right: 40px; }\n\n.mr-20 {\n  margin-right: 20px; }\n\nselect.form-control {\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid transparent;\n  background: rgba(0, 0, 0, 0.1);\n  transition: all 1s;\n  -o-transition: all 1s;\n  -moz-transition: all 1s;\n  -webkit-transition: all 1s;\n  appearance: caret;\n  -webkit-appearance: caret;\n  -moz-appearance: caret; }\n\nng-select {\n  margin-top: 10px; }\n\nbutton {\n  margin-bottom: 10px; }\n\n.dropdown-menu {\n  max-height: 200px;\n  height: 200px;\n  overflow-y: scroll; }\n\n.dropdown-menu li {\n  padding: 10px;\n  cursor: pointer; }\n\n.dropdown-menu li:hover {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5; }\n\n.selectedWeeks {\n  text-align: left;\n  margin-right: 10px; }\n\n.card-content {\n  background: rgba(0, 0, 0, 0.1);\n  border: 1px solid transparent;\n  padding: 5px;\n  margin-bottom: 5px; }\n\n.auto_complete_items {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  border-bottom: none;\n  border-top: none;\n  z-index: 99999;\n  list-style: none;\n  width: 200px; }\n\n.auto_complete_items li {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4; }\n\n.table > tbody > tr > td {\n  text-transform: capitalize; }\n\n.confirmDeleteModal .modal-header {\n  padding: 0px 15px; }\n\n.confirmDeleteModal .modal-header .close {\n  margin-top: 10px; }\n\n.confirmDeleteModal modal-header h4 {\n  margin-top: 10px; }\n\nmodal-footer button.btn {\n  width: 80px;\n  margin-right: 20px;\n  margin-bottom: 0px; }\n\n.success {\n  width: 75%;\n  display: inline-block;\n  text-align: center;\n  color: #398439;\n  font-size: 18px; }\n\n.selectedWeeks {\n  max-width: 200px; }\n\n.glyphicon {\n  float: right; }\n\n.table th {\n  cursor: pointer; }\n\n.search-input, button.weeksDrp {\n  width: 150px;\n  float: right;\n  margin-top: 20px;\n  margin-right: 15px; }\n\n.search_by_week {\n  width: 100px;\n  float: right;\n  margin-top: 20px;\n  margin-right: 15px; }\n\n.search_by_week button {\n  padding: 7px 15px; }\n\n.add_product_btn {\n  margin: 22px 20px 0px 20px;\n  padding: 6px 12px; }\n\n/* MODAL STYLES\r\n-------------------------------*/\n\n#custom-modal-1 {\n  /* modals are hidden by default */\n  display: none; }\n\n#custom-modal-1 .modal {\n    /* modal container fixed across whole screen */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* z-index must be higher than .modal-background */\n    z-index: 1000;\n    /* enables scrolling for tall modals */\n    overflow: auto; }\n\n#custom-modal-1 .modal .modal-body {\n      padding: 20px;\n      background: #fff;\n      /* margin exposes part of the modal background */\n      margin: 40px; }\n\n#custom-modal-1 .modal-background {\n    /* modal background fixed across whole screen */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* semi-transparent black  */\n    background-color: #000;\n    opacity: 0.75;\n    /* z-index must be below .modal and above everything else  */\n    z-index: 900; }\n\nbody.modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden; }\n\n.page {\n  padding: 5px 10px;\n  cursor: pointer;\n  border: 1px solid #e2e2e2; }\n\n.page.active {\n  background-color: rgba(252, 164, 0, 0.5); }\n\n.pagination-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between; }\n\n.pagination-wrapper .input-group {\n    width: 150px; }\n\n.pagination-wrapper .input-group .input-group-addon {\n      color: #fff;\n      border: none; }\n\n.pagination-wrapper .form-group {\n    height: auto;\n    margin: 0;\n    padding: 0; }\n\n.my-pagination ::ng-deep .ngx-pagination {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  overflow: hidden;\n  font-size: 12px;\n  padding: 0; }\n\n.my-pagination ::ng-deep .ngx-pagination a,\n  .my-pagination ::ng-deep .ngx-pagination .current {\n    min-width: 30px;\n    text-decoration: none;\n    height: 35px;\n    text-align: center;\n    line-height: 33px;\n    margin: 0;\n    color: #26253c; }\n\n.my-pagination ::ng-deep .ngx-pagination a:last-child,\n    .my-pagination ::ng-deep .ngx-pagination .current:last-child {\n      border: none; }\n\n.my-pagination ::ng-deep .ngx-pagination a:hover,\n  .my-pagination ::ng-deep .ngx-pagination .current {\n    min-width: 30px;\n    color: #fff; }\n\n.my-pagination ::ng-deep .ngx-pagination .disabled {\n    color: rgba(38, 37, 60, 0.4);\n    cursor: not-allowed; }\n\n.btn {\n  padding: 2px 5px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvY29tcGFueS9EOlxcbXVuY2hwYWtcXHRydW5rXFxmcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5cXHNoYXJlZFxcdGhlbWVcXGNvbG9yLXNjaGVtZXNcXF9kZWZhdWx0LnNjc3MiLCJzcmMvYXBwL2FkbWluL3BhZ2VzL2NvbXBhbnkvRDpcXG11bmNocGFrXFx0cnVua1xcZnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluXFxzaGFyZWRcXHRoZW1lXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9hZG1pbi9wYWdlcy9jb21wYW55L0Q6XFxtdW5jaHBha1xcdHJ1bmtcXGZyb250RW5kL3NyY1xcYXBwXFxhZG1pblxccGFnZXNcXGNvbXBhbnlcXGNvbXBhbnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksaUJBaEJTLEVBaUJaOztBQUVEO0VDTUksNERBQW1DO0VBR25DLG9FQUEyQyxFRFA5Qzs7QUFFRDs7RUNFSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVESDlDOztBQUVEO0VDRkksNERBQW1DO0VBR25DLG9FQUEyQyxFREM5Qzs7QUFFRDtFQ05JLDREQUFtQztFQUduQyxvRUFBMkMsRURLOUM7O0FBRUQ7RUNWSSw0REFBbUM7RUFHbkMsb0VBQTJDLEVEUzlDOztBQUVEO0VDZEksNERBQW1DO0VBR25DLG9FQUEyQyxFRGE5Qzs7QUUzQ0Q7RUFDRSxvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLHFDQUFvQztFQUNwQywrQkFBMEI7RUFDMUIsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQix3QkFBdUI7RUFDdkIsMkJBQTBCO0VBQzFCLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsdUJBQXNCLEVBQ3ZCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0Usa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxzQkFBcUI7RUFDckIsZUFBYztFQUNkLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwrQkFBMEI7RUFDMUIsOEJBQTZCO0VBQzdCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZix1QkFBc0I7RUFDdEIsaUNBQWdDLEVBQ2pDOztBQUNEO0VBQ0UsMkJBQTBCLEVBQzNCOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1Ysc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWUsRUFDaEI7O0FBaEREO0VBa0RFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGFBQVksRUFDYjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsYUFBWTtFQUNaLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsMkJBQTBCO0VBQzFCLGtCQUFpQixFQUNsQjs7QUFDRDtpQ0FDaUM7O0FBQ2pDO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWEsRUF3Q2Q7O0FBMUNEO0lBS00sK0NBQStDO0lBQy9DLGdCQUFlO0lBQ2YsT0FBTTtJQUNOLFNBQVE7SUFDUixVQUFTO0lBQ1QsUUFBTztJQUVQLG1EQUFtRDtJQUNuRCxjQUFhO0lBRWIsdUNBQXVDO0lBQ3ZDLGVBQWMsRUFTakI7O0FBekJIO01BbUJVLGNBQWE7TUFDYixpQkFBZ0I7TUFFaEIsaURBQWlEO01BQ2pELGFBQVksRUFDZjs7QUF4QlA7SUE0Qk0sZ0RBQWdEO0lBQ2hELGdCQUFlO0lBQ2YsT0FBTTtJQUNOLFNBQVE7SUFDUixVQUFTO0lBQ1QsUUFBTztJQUVQLDZCQUE2QjtJQUM3Qix1QkFBc0I7SUFDdEIsY0FBYTtJQUViLDZEQUE2RDtJQUM3RCxhQUFZLEVBQ2Y7O0FBR0g7RUFDRSw4RUFBOEU7RUFDOUUsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0ksa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsMEJBQXlCLEVBQzVCOztBQUNEO0VBQ0kseUNBQW9DLEVBQ3ZDOztBQUNEO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsK0JBQThCLEVBY2pDOztBQWxCRDtJQU1RLGFBQVksRUFNZjs7QUFaTDtNQVNZLFlGaExEO01FaUxDLGFBQVksRUFDZjs7QUFYVDtJQWNRLGFBQVk7SUFDWixVQUFTO0lBQ1QsV0FBVSxFQUNiOztBQUdMO0VBQ0kscUNGM0xPO0VFNExQLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsZ0JGdE1TO0VFdU1ULFdBQVUsRUF3QmI7O0FBN0JEOztJQVFRLGdCQUFlO0lBQ2Ysc0JBQXFCO0lBQ3JCLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxlRnJNWSxFRXlNZjs7QUFsQkw7O01BZ0JZLGFBQVksRUFDZjs7QUFqQlQ7O0lBcUJRLGdCQUFlO0lBRWYsWUZsTkcsRUVtTk47O0FBeEJMO0lBMEJRLDZCRmpOWTtJRWtOWixvQkFBbUIsRUFDdEI7O0FBR0w7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9wYWdlcy9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9taXhpbic7XG4kZGVmYXVsdC10ZXh0OjE0cHg7XG4kc20tdGV4dDoxMnB4O1xuJGxnLXRleHQ6MTZweDtcbiRib2R5LWJnOiNmZmY7XG4kc2lkZWJhci1iZzojNDY1Mjk0O1xuJHNpZGViYXItZm9udHMtY29sb3I6I2ZmZjtcbiRjYXJkLWJnOiNmZmY7XG4kY2FyZC1ib3JkZXI6I2U0ZTNlMztcbiR3aGl0ZTojZmZmO1xuJGJsYWNrOiMwMDA7XG4kYm9yZGVyLWNvbG9yOnJnYmEoJGJsYWNrLCAuMSk7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiNlNmU2ZTY7XG4kZm9udHMtY29sb3I6IzI2MjUzYztcbiRwcmltYXJ5OiNmY2E0MDA7XG4kc3VjY2VzczojMTZiZTlhO1xuJGRhbmdlcjojZmE1MTY3O1xuJHdhcm5pbmc6I2ZmNzQwMztcbiRpbmZvOiMyY2MzZmY7XG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcbn1cblxuLmJnLWRlZmF1bHQge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIGRhcmtlbigkY2FyZC1iZywgNDAlKSwgZGFya2VuKCRjYXJkLWJnLCAzMCUpKTtcbn1cblxuLmJnLXByaW1hcnkge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRwcmltYXJ5LCAjZmZkMTdjKTtcbn1cblxuLmJnLXN1Y2Nlc3Mge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRzdWNjZXNzLCAjNDJlNjk3KTtcbn1cblxuLmJnLWRhbmdlciB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGRhbmdlciwgI2ZkYTA5Yyk7XG59XG5cbi5iZy13YXJuaW5nIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkd2FybmluZywgI2ZhYzk4MCk7XG59XG5cbi5iZy1pbmZvIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkaW5mbywgIzE1ZjhiZik7XG59IiwiQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW8tYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAgIHRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC1tb3otdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtLi4uKSB7XG4gICAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yLi4uKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDIgMztcbiAgICBib3JkZXItaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbiAgICBib3JkZXItaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcbn1cblxuQG1peGluIGNlbnRlcigkd2lkdGgsICRoZWlnaHQpIHtcbiAgICB3aWR0aDogJHdpZHRoO1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG59IiwiXHJcbkBpbXBvcnQgXCIuLi8uLi9zaGFyZWQvdGhlbWUvY29uZi5zY3NzXCI7XHJcbi5jb21wYW55X3dyYXBwZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn1cclxuLm1yLTIwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgYXBwZWFyYW5jZTogY2FyZXQ7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBjYXJldDtcclxuICAtbW96LWFwcGVhcmFuY2U6IGNhcmV0O1xyXG59XHJcbm5nLXNlbGVjdCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5kcm9wZG93bi1tZW51IGxpIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24tbWVudSBsaTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMjYyNjI2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLnNlbGVjdGVkV2Vla3Mge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uY2FyZC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5hdXRvX2NvbXBsZXRlX2l0ZW1zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLmF1dG9fY29tcGxldGVfaXRlbXMgbGkge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbn1cclxuLnRhYmxlPnRib2R5PnRyPnRkIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uY29uZmlybURlbGV0ZU1vZGFsIC5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcbi5jb25maXJtRGVsZXRlTW9kYWwgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmNvbmZpcm1EZWxldGVNb2RhbCBtb2RhbC1oZWFkZXIgaDQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxubW9kYWwtZm9vdGVyIGJ1dHRvbi5idG4ge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnN1Y2Nlc3Mge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzM5ODQzOTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnNlbGVjdGVkV2Vla3Mge1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuLmdseXBoaWNvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi50YWJsZSB0aCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zZWFyY2gtaW5wdXQsIGJ1dHRvbi53ZWVrc0RycCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uc2VhcmNoX2J5X3dlZWsge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnNlYXJjaF9ieV93ZWVrIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogN3B4IDE1cHg7XHJcbn1cclxuLmFkZF9wcm9kdWN0X2J0biB7XHJcbiAgbWFyZ2luOiAyMnB4IDIwcHggMHB4IDIwcHg7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbn1cclxuLyogTU9EQUwgU1RZTEVTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jY3VzdG9tLW1vZGFsLTEge1xyXG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAubW9kYWwge1xyXG4gICAgICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAubW9kYWwtYmFja2dyb3VuZCAqL1xyXG4gICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICBcclxuICAgICAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgICAgICAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xyXG4gICAgICAgICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgICAgIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICAgIFxyXG4gICAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLm1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXHJcbiAgICAgIHotaW5kZXg6IDkwMDtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtb3BlbiB7XHJcbiAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucGFnZSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XHJcbn1cclxuLnBhZ2UuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLDE2NCwwLC41KTtcclxufVxyXG4ucGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgICAgICAgICBAZXh0ZW5kIC5iZy1wcmltYXJ5O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogJHNtLXRleHQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYSxcclxuICAgIC5jdXJyZW50IHtcclxuICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiAkZm9udHMtY29sb3I7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGE6aG92ZXIsXHJcbiAgICAuY3VycmVudCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgIEBleHRlbmQgLmJnLXByaW1hcnk7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICAgIC5kaXNhYmxlZCB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoJGZvbnRzLWNvbG9yLCAuNCk7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxufSJdfQ== */"

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
        this.products = [];
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
        this.addType = '';
        this.addPname = '';
        this.addPtype = '';
        this.addPcompany = '';
        this.addPquantity = '';
        this.addPcost = '';
        this.addPmrp = '';
        this.addPallergyDetails = '';
        this.addPkcal = '';
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
        this.selectedWeek = '';
        /* pagination Info */
        this.pageSize = 10;
        this.pageNumber = 1;
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
            this.selectedWeek = null;
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
            console.log(res);
            if (res.success) {
                _this.productResponse = res.data;
                _this.products = res.data.products;
            }
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
        this.loadData();
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
            alert(_this.message);
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
        console.log(this.addProductArray);
        this.http.post(this.auth.getDomainName() + '/api/company/add', { company: this.addPcompany }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.http.post(this.auth.getDomainName() + '/api/product/add', this.addProductArray).subscribe(function (response) {
            if (response.success) {
                _this.message = response.message;
                alert(_this.message);
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
    CompanyComponent.prototype.loadData = function () {
        this.tableData = this.products;
    };
    CompanyComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
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
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/admin/pages/company/company.component.scss")]
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
/* harmony import */ var _pipe_custom_search_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pipe/custom-search.pipe */ "./src/app/admin/pages/pipe/custom-search.pipe.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
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
                _company_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                ngx_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
                ng2_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
                ng2_order_pipe__WEBPACK_IMPORTED_MODULE_12__["Ng2OrderModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"]
            ],
            declarations: [
                _company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"],
                _ui_components_modals_modals_component__WEBPACK_IMPORTED_MODULE_8__["ModalsComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
                _form_components_form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_10__["FormInputsComponent"],
                _form_components_ng2_select_multiple_select_multiple_select_component__WEBPACK_IMPORTED_MODULE_11__["MultipleSelectComponent"],
                _pipe_custom_search_pipe__WEBPACK_IMPORTED_MODULE_14__["CustomSearchPipe"]
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


/***/ }),

/***/ "./src/app/admin/pages/pipe/custom-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/pages/pipe/custom-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: CustomSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSearchPipe", function() { return CustomSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomSearchPipe = /** @class */ (function () {
    function CustomSearchPipe() {
    }
    CustomSearchPipe.prototype.transform = function (products, filter) {
        if (!products || !filter) {
            return products;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        console.log(products.filter(function (item) { return item.weeks.includes(filter); }));
        return products.filter(function (item) { return item.weeks.includes(filter); });
    };
    CustomSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'customSearch'
        })
    ], CustomSearchPipe);
    return CustomSearchPipe;
}());



/***/ })

}]);
//# sourceMappingURL=company-company-module.js.map