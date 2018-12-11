(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./src/app/admin/pages/company/company.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/pages/company/company.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company_wrapper {\r\n  padding-right: 40px;\r\n}\r\n.mr-20 {\r\n  margin-right: 20px;\r\n}\r\nselect.form-control {\r\n  border-radius: 0;\r\n  border: none;\r\n  border-bottom: 1px solid transparent;\r\n  background: rgba(0,0,0,.1);\r\n  transition: all 1s;\r\n  -o-transition: all 1s;\r\n  -moz-transition: all 1s;\r\n  -webkit-transition: all 1s;\r\n  appearance: caret;\r\n  -webkit-appearance: caret;\r\n  -moz-appearance: caret;\r\n}\r\nng-select {\r\n  margin-top: 10px;\r\n}\r\nbutton {\r\n  margin-bottom: 10px;\r\n}\r\n.dropdown-menu {\r\n  max-height: 200px;\r\n  height: 200px;\r\n  overflow-y: scroll;\r\n}\r\n.dropdown-menu li {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n}\r\n.dropdown-menu li:hover {\r\n  text-decoration: none;\r\n  color: #262626;\r\n  background-color: #f5f5f5;\r\n}\r\n.selectedWeeks {\r\n  text-align: left; \r\n  margin-right: 10px;\r\n}\r\n.card-content {\r\n  background: rgba(0,0,0,.1);\r\n  border: 1px solid transparent;\r\n  padding: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.auto_complete_items {\r\n  position: absolute;\r\n  border: 1px solid #d4d4d4;\r\n  border-bottom: none;\r\n  border-top: none;\r\n  z-index: 99999;\r\n  list-style: none;\r\n  width: 200px;\r\n}\r\n.auto_complete_items li {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #d4d4d4;\r\n}\r\n.table>tbody>tr>td {\r\n  text-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsMkJBQTJCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcGFnZXMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueV93cmFwcGVyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcbi5tci0yMCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbnNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIGFwcGVhcmFuY2U6IGNhcmV0O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogY2FyZXQ7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBjYXJldDtcclxufVxyXG5uZy1zZWxlY3Qge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4uZHJvcGRvd24tbWVudSBsaSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgbGk6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzI2MjYyNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcbi5zZWxlY3RlZFdlZWtzIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmNhcmQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uYXV0b19jb21wbGV0ZV9pdGVtcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5hdXRvX2NvbXBsZXRlX2l0ZW1zIGxpIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG59XHJcbi50YWJsZT50Ym9keT50cj50ZCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/pages/company/company.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/pages/company/company.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"company_wrapper\">\n  <!-- <div class=\"container-fluid\">\n    <ul class=\"nav nav-tabs\">\n      <li [ngClass]=\"{'active': view == 'company'}\" (click)=\"changeView('company')\"><a>Company</a></li>\n      <li [ngClass]=\"{'active': view == 'types'}\" (click)=\"changeView('types')\"><a>Types</a></li>\n      <li [ngClass]=\"{'active': view == 'product'}\" (click)=\"changeView('product')\"><a>Product</a></li>\n    </ul>\n  </div> -->\n  <modal #addModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"true\"  >\n    <modal-header>\n      <!-- <h3 *ngIf=\"view=='company'\">Add Company</h3>\n      <h3 *ngIf=\"view=='types'\">Add Type</h3> -->\n      <h3>Add Product</h3>\n    </modal-header>\n    <modal-content>\n      <!-- <div *ngIf=\"view=='company'\" (keydown.enter)=\"addCompany(addModal)\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Company</label>\n          <input type=\"text\" [(ngModel)]=\"addCompanyName\" class=\"form-control\" placeholder=\"Enter Product Company\" />\n        </div>\n        <button (click)=\"addCompany(addModal)\" class=\"btn btn-primary\">Add Company</button>\n      </div>\n      <div *ngIf=\"view=='types'\" (keydown.enter)=\"addTypes(addModal)\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Select Company</label>\n          <select [(ngModel)]=\"addCompanyOnType\" placeholder=\"Select Company\" class=\"form-control\">\n            <option [value]=\"default\" selected=\"selected\">Select Company</option>\n            <option *ngFor=\"let company of productCompanies\" value=\"{{company._id}}\">{{company.company}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Type</label>\n          <input type=\"text\" [(ngModel)]=\"addType\" class=\"form-control\" placeholder=\"Enter Product Type\" />\n        </div>\n        <button (click)=\"addTypes(addModal)\" class=\"btn btn-primary\">Add Product Type</button>\n      </div> -->\n      <div (keydown.enter)=\"addProduct(addModal)\" (click)=\"liClicked = false\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Name</label>\n          <input type=\"text\" [(ngModel)]=\"addPname\" class=\"form-control\" placeholder=\"Enter Product Name\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Type</label>\n          <select [(ngModel)]=\"addPtype\" placeholder=\"Select Type\" class=\"form-control\">\n            <option [value]=\"default\" selected=\"selected\">Select Type</option>\n            <option *ngFor=\"let productType of productTypes\" value=\"{{productType}}\">{{productType}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Company</label>\n          <input type=\"text\" [(ngModel)]=\"addPcompany\" (keydown)=\"liClicked=true\" class=\"form-control\" placeholder=\"Enter Product Company\" />\n          <ul class=\"auto_complete_items\" [hidden]=\"!liClicked\">\n            <li \n            *ngFor=\"let company of companyName\" \n            [ngClass]=\"{'hidden':(!ifMatchString(addPcompany | lowercase,company  | lowercase))}\"\n            (click)=\"populateCompanyName(company)\"><span>{{company}}</span></li>\n          </ul>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Quantity</label>\n          <input type=\"text\" [(ngModel)]=\"addPquantity\" class=\"form-control\" placeholder=\"Enter Product Quantity\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Cost</label>\n          <input type=\"text\" [(ngModel)]=\"addPcost\" class=\"form-control\" placeholder=\"Enter Product Cost\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">MRP</label>\n          <input type=\"text\" [(ngModel)]=\"addPmrp\" class=\"form-control\" placeholder=\"Enter Product MRP\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Allergy Details</label>\n          <select [(ngModel)]=\"addPallergyDetails\" placeholder=\"Select Company\" class=\"form-control\">\n            <option [value]=\"default\" selected=\"selected\">Select Allergy Details</option>\n            <option *ngFor=\"let allergy of allergyDetails\" value=\"{{allergy}}\">{{allergy}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Kcal</label>\n          <input type=\"text\" [(ngModel)]=\"addPkcal\" class=\"form-control\" placeholder=\"Enter Product KCal\" />\n        </div>\n        <button (click)=\"addProduct(addModal)\" class=\"btn btn-primary\">Add Product</button>\n      </div>\n    </modal-content>\n  </modal>\n\n  <modal #editModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n    <modal-header>\n      <!-- <h3 *ngIf=\"view=='company'\">Edit Company</h3>\n      <h3 *ngIf=\"view=='types'\">Edit Type</h3> -->\n      <h3>Edit Product</h3>\n    </modal-header>\n    <modal-content>\n      <!-- <div *ngIf=\"view=='company'\" (keydown.enter)=\"editCompany(editModal, selectedCompanyObj)\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Company</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCompanyObj.company\" />\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"editCompany(editModal, selectedCompanyObj)\">Edit Company</button>\n      </div>\n      <div *ngIf=\"view=='types'\" (keydown.enter)=\"editType(editModal, selectedTypeObj)\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Select Company</label>\n          <select [(ngModel)]=\"selectCompanyId\" name=\"selectedCompany\" class=\"form-control\">\n            <option *ngFor=\"let companyItem of productCompanies\" value=\"{{companyItem._id}}\">{{companyItem.company}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Type</label>\n          <input type=\"text\" name=\"productType\" class=\"form-control\" [(ngModel)]=\"selectedTypeObj.type\" />\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"editType(editModal, selectedTypeObj)\">Edit Product Type</button>\n      </div> -->\n      <div (keydown.enter)=\"editProduct(editModal, selectedProductObj)\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.name\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Type</label>\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.type\" /> -->\n          <select [(ngModel)]=\"selectedProductObj.type\" placeholder=\"Select Type\" class=\"form-control\">\n            <option [value]=\"default\" selected=\"selected\">{{selectedProductObj.type}}</option>\n            <option *ngFor=\"let productType of productTypes\" value=\"{{productType}}\">{{productType}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Company</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.company\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Quantity</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.quantity\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Cost</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.cost\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">MRP</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.price\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Allergy Details</label>\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.allergyDetails\" /> -->\n          <select [(ngModel)]=\"selectedProductObj.allergyDetails\" class=\"form-control\">\n              <option [value]=\"default\" selected=\"selected\">Select Allergy Details</option>\n              <option *ngFor=\"let allergy of allergyDetails\" value=\"{{allergy}}\">{{allergy}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Kcal</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.kcal\" />\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"editProduct(editModal, selectedProductObj)\">Edit Product</button>\n      </div>\n    </modal-content>\n  </modal>\n  <div class=\"container-fluid content\">\n    <!-- <div *ngIf=\"view == 'company'\">\n      <div class=\"row\">\n        <button class=\"btn btn-primary\" (click)=\"addModal.open()\" style=\"margin:20px\">Add Company</button>\n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Company Name</th>\n            <th>Edit/Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pCompany of productCompanies, let i=index\">\n            <td>{{i+1}}</td>\n            <td>{{pCompany.company}}</td>\n            <td>\n              <button (click)=\"editModal.open();selectedCompanyObj=pCompany\" class=\"btn btn-success mr-20\">Edit</button>\n              <button (click)=\"deleteItem(pCompany._id, 'company')\" class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div> -->\n\n    <!-- <div *ngIf=\"view == 'types'\">\n      <div class=\"row\">\n        <button class=\"btn btn-primary\" (click)=\"addModal.open()\" style=\"margin:20px\">Add Product Type</button>\n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Product Company</th>\n            <th>Product Type</th>\n            <th>Edit/Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pType of productTypes, let i=index\">\n            <td>{{i+1}}</td>\n            <td>{{(pType.companies && pType.companies.length > 0) ? (pType.companies[0] && pType.companies[0].company ? pType.companies[0] && pType.companies[0].company : \"\") : ''}}</td>\n            <td>{{pType.type}}</td>\n            <td>\n              <button (click)=\"editModal.open();selectedTypeObj=pType\" class=\"btn btn-success mr-20\">Edit</button>\n              <button (click)=\"deleteItem(pType._id, 'type')\" class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div> -->\n    <h2>Product</h2>\n\n    <div>\n      <div class=\"row\">\n        <button (click)=\"addModal.open()\" class=\"btn btn-primary\" style=\"margin:20px\">Add Product</button>\n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Product Name</th>\n            <th>Type</th>\n            <th>Company</th>\n            <th>Quantity</th>\n            <th>Cost</th>\n            <th>MRP</th>\n            <th>Allergy</th>\n            <th>KCAL</th>\n            <th>Edit/Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of products, let i=index\">\n            <td>{{i+1}}</td>\n            <td>{{product.name}}</td>\n            <td>{{product.type}}</td>\n            <td>{{product.company}}</td>\n            <td>{{product.quantity}}</td>\n            <td>{{product.cost}}</td>\n            <td>{{product.price}}</td>\n            <td>{{product.allergyDetails}}</td>\n            <td>{{product.kcal}}</td>\n            <td class=\"selectedWeeks\">\n              <button (click)=\"editModal.open();selectedProductObj=product\" class=\"btn btn-success mr-20\">Edit</button>\n              <button (click)=\"deleteItem(product._id, 'product')\" class=\"btn btn-danger\">Delete</button>\n              <div *ngIf=\"product.weeks.length > 0\" class=\"card-content\">\n                <span *ngFor=\"let weekItem of product.weeks;let weekIndex = index\">\n                  <span class=\"selectedWeeks\">\n                    <button class=\"btn btn-warning\">{{'Week ' + weekItem}}\n                      <i (click)=\"removeWeekInProduct(product.weeks,product._id, weekItem);\" class=\"fa fa-close\"></i></button>\n                  </span>\n                </span>\n              </div>\n              <div>\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn \" [ngClass]=\"{'open':product.selectedWeek}\">\n                    <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-success dropdown-toggle\" aria-expanded=\"true\"\n                      aria-haspopup=\"true\" (click)=\"product.selectedWeek=1\">\n                      {{'Week'}}\n                      <span class=\"caret\"></span>\n                    </button>\n                    <ul *ngIf=\"product.selectedWeek || hideWeeksDropdown\" class=\"dropdown-menu\">\n                      <li *ngFor=\"let week of weekArray\" value=\"{{week.id}}\" (click)=\"addWeekInProduct(product.weeks,week.id, product._id);product.selectedWeek=null\">{{week.text}}</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
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
    function CompanyComponent(http, auth, cdRef) {
        this.http = http;
        this.auth = auth;
        this.cdRef = cdRef;
        this.view = 'company';
        this.deleteMessage = '';
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
        this.liClicked = false;
        this.weeks = [];
        this.errorMessage = '';
        this.hideWeeksDropdown = 0;
        this.weekArray = [{ id: 1, text: 'Week 1' }, { id: 2, text: 'Week 2' }, { id: 3, text: 'Week 3' },
            { id: 4, text: 'Week 4' }, { id: 5, text: 'Week 5' }, { id: 6, text: 'Week 6' }, { id: 7, text: 'Week 7' },
            { id: 8, text: 'Week 8' }, { id: 9, text: 'Week 9' }, { id: 10, text: 'Week 10' }, { id: 11, text: 'Week 11' },
            { id: 12, text: 'Week 12' }];
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
        this.hideWeeksDropdown = 0;
        this.cdRef.detectChanges();
        //  this.liClicked = false;
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
                console.log(element);
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
    CompanyComponent.prototype.removeWeekInProduct = function (weekItem, productId, weekId) {
        if (weekItem.indexOf(weekId) > -1) {
            var indexOfItem = weekItem.indexOf(weekId);
            weekItem.splice(indexOfItem, 1);
        }
        console.log(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekId);
        this.http.delete(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekId, {}).subscribe(function (data) {
            console.log(data);
        });
    };
    CompanyComponent.prototype.deleteItem = function (pid, tabName) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            productId: pid
        };
        this.data = {
            productId: pid
        };
        console.log(this.data);
        this.http.delete(this.auth.getDomainName() + '/api/' + tabName + '/delete/' + pid, {}).subscribe(function (res) {
            console.log(res.success);
            _this.deleteMessage = res.message;
        }, function (err) {
            console.log(err);
        });
    };
    //Auto complete functionality
    CompanyComponent.prototype.ifMatchString = function (name, companyObj) {
        // this.ref.detectChanges();
        if (name && name.length > 0 && companyObj.includes(name)) {
            // this.liClicked = false;
            return true;
        }
        return false;
    };
    CompanyComponent.prototype.populateCompanyName = function (company) {
        this.addPcompany = company;
        this.liClicked = false;
    };
    //Modal code
    CompanyComponent.prototype.openModal = function (modal) {
        modal.open();
    };
    CompanyComponent.prototype.closeModal = function (modal) {
        modal.close();
    };
    CompanyComponent.prototype.onClose = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
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
    //Add Company, Type and Product code
    // onSubmit(modal, view) {
    //   this.companyId = this.addProductTypeForm.get("selectedCompany").value;
    //   if(view == "type") {
    //   this.pType = this.addProductTypeForm.get('pType').value;
    //   this.http.post(this.auth.getDomainName() + '/api/type/add', {type: this.pType, companyId: this.companyId}).subscribe((data:any)=>{
    //     console.log(data);
    //      if(data && data.success) { this.productTypes.push(data) }
    //   }, 
    //   err=> {
    //     console.log(err);
    //   });
    // }
    // else if(view == "company") {
    //   this.productCompany = this.addProductCompanyForm.get('productCompany').value;
    //   this.http.post(this.auth.getDomainName() + '/api/company/add', {company: this.productCompany}).subscribe(data=>{
    //     console.log(data);
    //   }, 
    //   err=> {
    //     console.log(err);
    //   });
    // }
    // else if(view == "product") {
    //   this.addProductArray = {
    //     name: this.addProductForm.get('productName').value,
    //     type: this.addProductForm.get('productType').value,
    //     quantity: this.addProductForm.get('productQuantity').value,
    //     company: this.addProductForm.get('productCompanyName').value,
    //     price: this.addProductForm.get('productMrp').value,
    //     kcal: this.addProductForm.get('productKcal').value
    //   }
    //   this.http.post(this.auth.getDomainName() + '/api/product/add', this.addProductArray).subscribe(data=>{
    //     console.log(data);
    //   }, 
    //   err=> {
    //     console.log(err);
    //   });
    // }
    //   this.closeModal(modal);
    // }
    //   addCompany(modal) {
    //       this.productCompany = this.addCompanyName;
    //       this.http.post(this.auth.getDomainName() + '/api/company/add', {company: this.productCompany}).subscribe(data=>{
    //         console.log(data);
    //       }, 
    //       err=> {
    //         console.log(err);
    //       });
    //       this.closeModal(modal);
    //   }
    //   addTypes(modal) {
    //     this.productCompany = this.addCompanyOnType;
    //     console.log("add type ", {type: this.addType, company: this.productCompany})
    //     this.http.post(this.auth.getDomainName() + '/api/type/add', {type: this.addType, companyId: this.productCompany}).subscribe(data=>{
    //       console.log(data);
    //     }, 
    //     err=> {
    //       console.log(err);
    //     });
    //     this.closeModal(modal);
    // }
    CompanyComponent.prototype.addProduct = function (modal) {
        this.addProductArray = {
            name: this.addPname,
            type: this.addPtype,
            quantity: this.addPquantity,
            company: this.addPcompany,
            cost: this.addPcost,
            price: this.addPmrp,
            allergyDetails: this.addPallergyDetails,
            kcal: this.addPkcal
        };
        this.http.post(this.auth.getDomainName() + '/api/company/add', { company: this.addPcompany }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.http.post(this.auth.getDomainName() + '/api/product/add', this.addProductArray).subscribe(function (data) {
            console.log(data);
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
    //edit Type code
    // editType(modal, selectedType) {
    //   this.pType = selectedType.type;
    //   this.selectedTypeId = selectedType._id;
    //   this.companyId = this.selectCompanyId;
    //   this.http.put(this.auth.getDomainName() + '/api/type/edit', {type: this.pType, typeId: this.selectedTypeId, companyId: this.companyId}).subscribe((data:any)=>{
    //     console.log(data);
    //      if(data && data.success) { this.productTypes.push(data) }
    //   }, 
    //   err=> {
    //     console.log(err);
    //   });
    //   this.closeModal(modal);
    // }
    //edit Product code
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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
                ng2_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"]
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