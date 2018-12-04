(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./src/app/admin/pages/company/company.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/pages/company/company.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company_wrapper {\r\n  padding-right: 40px;\r\n}\r\n.mr-20 {\r\n  margin-right: 20px;\r\n}\r\nselect.form-control {\r\n  border-radius: 0;\r\n  border: none;\r\n  border-bottom: 1px solid transparent;\r\n  background: rgba(0,0,0,.1);\r\n  transition: all 1s;\r\n  -o-transition: all 1s;\r\n  -moz-transition: all 1s;\r\n  -webkit-transition: all 1s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbnlfd3JhcHBlciB7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxufVxyXG4ubXItMjAge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAxcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAxcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/pages/company/company.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/pages/company/company.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"company_wrapper\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav nav-tabs\">\n      <li [ngClass]=\"{'active': view == 'company'}\" (click)=\"changeView('company')\"><a>Company</a></li>\n      <li [ngClass]=\"{'active': view == 'types'}\" (click)=\"changeView('types')\"><a>Types</a></li>\n      <li [ngClass]=\"{'active': view == 'product'}\" (click)=\"changeView('product')\"><a>Product</a></li>\n    </ul>\n  </div>\n  <modal #addModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n    <modal-header>\n      <h3>modal that cannot be simply closed</h3>\n    </modal-header>\n    <modal-content>\n      <form *ngIf=\"view=='company'\" [formGroup]=\"addProductCompanyForm\" (ngSubmit)=\"onSubmit(addModal, 'company')\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Company</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"productCompany\" placeholder=\"Enter Product Company\" />\n        </div>\n        <button class=\"btn btn-primary\">Add Company</button>\n      </form>\n      <form *ngIf=\"view=='types'\" [formGroup]=\"addProductTypeForm\" (ngSubmit)=\"onSubmit(addModal, 'type')\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Select Company</label>\n          <select formControlName=\"selectedCompany\" class=\"form-control\">\n            <option *ngFor=\"let company of productCompanies\" value=\"{{company._id}}\">{{company.company}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Type</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"pType\" placeholder=\"Enter Product Type\" />\n        </div>\n        <button class=\"btn btn-primary\">Add Product Type</button>\n      </form>\n      <form *ngIf=\"view=='product'\" [formGroup]=\"addProductForm\" (ngSubmit)=\"onSubmit(addModal, 'product')\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"productName\" placeholder=\"Enter Product Name\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Type</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"productType\" placeholder=\"Enter Product Type\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Company</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"productCompanyName\" placeholder=\"Enter Product Company\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Quantity</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"productQuantity\" placeholder=\"Enter Product Quantity\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">MRP</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"productMrp\" placeholder=\"Enter Product MRP\" />\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Kcal</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"productKcal\" placeholder=\"Enter Product KCal\" />\n        </div>\n        <button class=\"btn btn-primary\">Add Product</button>\n      </form>\n      </modal-content>\n  </modal>\n  \n  <modal #editModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n      <modal-header>\n        <h3>modal that cannot be simply closed</h3>\n      </modal-header>\n      <modal-content>\n        <div *ngIf=\"view=='company'\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Company{{selectedCompanyObj | json }}</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCompanyObj.company\" />\n          </div>\n          <button class=\"btn btn-primary\" (click)=\"editCompany(editModal, selectedCompanyObj)\">Edit Company</button>\n        </div>\n        <div *ngIf=\"view=='types'\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Select Company</label>\n            <select  [(ngModel)]=\"selectCompanyId\" name=\"selectedCompany\" class=\"form-control\">\n              <option *ngFor=\"let companyItem of productCompanies\" value=\"{{companyItem._id}}\">{{companyItem.company}}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Type</label>\n            <input type=\"text\" name=\"productType\" class=\"form-control\" [(ngModel)]=\"selectedTypeObj.type\" />\n          </div>\n          <button class=\"btn btn-primary\" (click)=\"editType(editModal, selectedTypeObj)\">Edit Product Type</button>\n        </div>\n        <div *ngIf=\"view=='product'\" >\n          <div class=\"form-group\">\n            <label class=\"control-label\">Name</label>\n            <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selectedProductObj.name\" />\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Type</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.type\" />\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Company</label>\n            <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selectedProductObj.company\" />\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Quantity</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.quantity\" />\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">MRP</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.price\" />\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Kcal</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedProductObj.kcal\" />\n          </div>\n          <button class=\"btn btn-primary\" (click)=\"editProduct(editModal, selectedProductObj)\">Edit Product</button>\n        </div>\n        </modal-content>\n    </modal>\n  <div class=\"container-fluid content\">\n    <div *ngIf=\"view == 'company'\">\n      <div class=\"row\">\n        <button class=\"btn btn-primary\" (click)=\"addModal.open()\" style=\"margin:20px\">Add Company</button>\n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Company Name</th>\n            <th>Edit/Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pCompany of productCompanies, let i=index\">\n            <td>{{i+1}}</td>\n            <td>{{pCompany.company}}</td>\n            <td>\n              <button (click)=\"editModal.open();selectedCompanyObj=pCompany\" class=\"btn btn-success mr-20\">Edit</button>\n              <button (click)=\"deleteItem(pCompany._id, 'company')\" class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div *ngIf=\"view == 'types'\">\n      <div class=\"row\">\n        <button class=\"btn btn-primary\" (click)=\"addModal.open()\" style=\"margin:20px\">Add Product Type</button>\n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Product Company</th>\n            <th>Product Type</th>\n            <th>Edit/Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pType of productTypes, let i=index\">\n            <td>{{i+1}}</td>\n            <td>{{(pType.companies && pType.companies.length > 0) ? (pType.companies[0] && pType.companies[0].company ? pType.companies[0] && pType.companies[0].company : \"\") : ''}}</td>\n            <td>{{pType.type}}</td>\n            <td>\n              <button (click)=\"editModal.open();selectedTypeObj=pType\" class=\"btn btn-success mr-20\">Edit</button>\n              <button (click)=\"deleteItem(pType._id, 'type')\" class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div *ngIf=\"view == 'product'\">\n      <div class=\"row\">\n        <button (click)=\"addModal.open()\" class=\"btn btn-primary\" style=\"margin:20px\">Add Product</button>\n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Product Name</th>\n            <th>Type</th>\n            <th>Company</th>\n            <th>Quantity</th>\n            <th>MRP</th>\n            <th>KCAL</th>\n            <th>Edit/Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of products, let i=index\">\n            <td>{{i+1}}</td>\n            <td>{{product.name}}</td>\n            <td>{{product.type}}</td>\n            <td>{{product.company}}</td>\n            <td>{{product.quantity}}</td>\n            <td>{{product.price}}</td>\n            <td>{{product.kcal}}</td>\n            <td>\n              <button (click)=\"editModal.open();selectedProductObj=product\" class=\"btn btn-success mr-20\">Edit</button>\n              <button (click)=\"deleteItem(product._id, 'product')\" class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
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
    function CompanyComponent(formBuilder, http, auth) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.auth = auth;
        this.view = 'company';
        this.deleteMessage = '';
        this.data = {};
        this.pType = [];
        this.selectedTypeId = '';
        this.selectCompanyId = '';
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
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addProductTypeForm = this.formBuilder.group({
            pType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            selectedCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.addProductCompanyForm = this.formBuilder.group({
            productCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.addProductForm = this.formBuilder.group({
            productName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            productType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            productCompanyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            productQuantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            productMrp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            productKcal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        console.log("hiiiiiiiiiiiii", this.auth.getDomainName());
        this.http.get(this.auth.getDomainName() + '/api/product').subscribe(function (res) {
            _this.products = JSON.parse(JSON.stringify(res.data));
        }, function (err) {
            console.log(err);
        });
        this.http.get(this.auth.getDomainName() + '/api/type').subscribe(function (res) {
            console.log(res.data);
            // companies[{ _id , company}]
            _this.productTypes = res.data;
        }, function (err) {
            console.log(err);
        });
        this.http.get(this.auth.getDomainName() + '/api/company').subscribe(function (res) {
            console.log(res);
            _this.productCompanies = res.data;
            console.log(_this.productCompanies);
            // this.productCompanies.forEach(element => {
            //   console.log(element);
            //   this.companyId.push(element._id);
            //   this.companyName.push(element.company);
            // });
        }, function (err) {
            console.log(err);
        });
    };
    //Delete code
    CompanyComponent.prototype.deleteItem = function (pid, tabName) {
        var _this = this;
        this.data = {
            productId: pid
        };
        console.log(this.data);
        this.http.delete(this.auth.getDomainName() + '/api/' + tabName + '/delete', this.data).subscribe(function (res) {
            console.log(res.success);
            _this.deleteMessage = res.message;
        }, function (err) {
            console.log(err);
        });
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
    //Add Company, Type and Product code
    CompanyComponent.prototype.onSubmit = function (modal, view) {
        this.companyId = this.addProductTypeForm.get("selectedCompany").value;
        if (view == "type") {
            this.pType = this.addProductTypeForm.get('pType').value;
            this.http.post(this.auth.getDomainName() + '/api/type/add', { type: this.pType, companyId: this.companyId }).subscribe(function (data) {
                console.log(data);
                // if(data && data.success) { this.productTypes.push(data) }
            }, function (err) {
                console.log(err);
            });
        }
        else if (view == "company") {
            this.productCompany = this.addProductCompanyForm.get('productCompany').value;
            this.http.post(this.auth.getDomainName() + '/api/company/add', { company: this.productCompany }).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        }
        else if (view == "product") {
            this.addProductArray = {
                name: this.addProductForm.get('productName').value,
                type: this.addProductForm.get('productType').value,
                quantity: this.addProductForm.get('productQuantity').value,
                company: this.addProductForm.get('productCompanyName').value,
                price: this.addProductForm.get('productMrp').value,
                kcal: this.addProductForm.get('productKcal').value
            };
            this.http.post(this.auth.getDomainName() + '/api/product/add', this.addProductArray).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        }
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
    CompanyComponent.prototype.editType = function (modal, selectedType) {
        this.pType = selectedType.type;
        this.selectedTypeId = selectedType._id;
        this.companyId = this.selectCompanyId;
        this.http.put(this.auth.getDomainName() + '/api/type/edit', { type: this.pType, typeId: this.selectedTypeId, companyId: this.companyId }).subscribe(function (data) {
            console.log(data);
            // if(data && data.success) { this.productTypes.push(data) }
        }, function (err) {
            console.log(err);
        });
        this.closeModal(modal);
    };
    //edit Product code
    CompanyComponent.prototype.editProduct = function (modal, selectedProduct) {
        this.editProductArray = {
            name: selectedProduct.name,
            type: selectedProduct.type,
            quantity: selectedProduct.quantity,
            company: selectedProduct.company,
            price: selectedProduct.price,
            kcal: selectedProduct.kcal,
            productId: selectedProduct._id
        };
        this.http.put(this.auth.getDomainName() + '/api/product/edit', this.editProductArray).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.closeModal(modal);
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/admin/pages/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/admin/pages/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _ui_components_modals_modals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/components/modals/modals.component */ "./src/app/admin/pages/ui/components/modals/modals.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/form.component */ "./src/app/admin/pages/form/form.component.ts");
/* harmony import */ var _form_components_form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form/components/form-inputs/form-inputs.component */ "./src/app/admin/pages/form/components/form-inputs/form-inputs.component.ts");
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
                ngx_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]
            ],
            declarations: [
                _company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"],
                _ui_components_modals_modals_component__WEBPACK_IMPORTED_MODULE_7__["ModalsComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                _form_components_form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_9__["FormInputsComponent"]
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