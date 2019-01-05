(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["snacks-snacks-module"],{

/***/ "../node_modules/coupon-code/coupon-code.js":
/*!**************************************************!*\
  !*** ../node_modules/coupon-code/coupon-code.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// --------------------------------------------------------------------------------------------------------------------
//
// coupon-code.js : An implementation of Perl's Algorithm::CouponCode for NodeJS.
//
// Author           : Andrew Chilton
// Web              : http://www.chilts.org/blog/
// Email            : <andychilton@gmail.com>
//
// Copyright (c)    : AppsAttic Ltd 2011
// Web              : http://www.appsattic.com/
// License          : http://opensource.org/licenses/MIT
//
// Copyright (c)    : Andrew Chilton 2013
// Web              : http://chilts.org/
// License          : http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------

// npm
var xtend = __webpack_require__(/*! xtend */ "../node_modules/xtend/immutable.js");

// --------------------------------------------------------------------------------------------------------------------
// constants
var badWordsList = ('SHPX PHAG JNAX JNAT CVFF PBPX FUVG GJNG GVGF SNEG URYY ZHSS QVPX XABO ' +
                   'NEFR FUNT GBFF FYHG GHEQ FYNT PENC CBBC OHGG SRPX OBBO WVFZ WVMM CUNG')
                   .replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);})
                   .split(' ');
var symbolsStr = '0123456789ABCDEFGHJKLMNPQRTUVWXY';
var symbolsArr = symbolsStr.split('');
var symbolsObj = {};
symbolsArr.forEach(function(c, i) {
    symbolsObj[c] = i;
});

var defaults = {
    parts   : 3,
    partLen : 4,
};

// --------------------------------------------------------------------------------------------------------------------
// exports

module.exports.generate = function(opts) {
    opts = xtend({}, defaults, opts);

    var parts = [];
    var part;
    var i;
    var j;

    // if we have a plaintext, generate a code from that
    if ( opts.plaintext ) {
        // not yet implemented
        return '';
    }
    else {
        // default to a random code
        do {
            parts.length = 0;
            for( i = 0; i < opts.parts; i++ ) {
                part = '';
                for ( j = 0; j < opts.partLen - 1; j++ ) {
                    part += randomSymbol();
                }
                part = part + checkDigitAlg1(part, i+1);
                parts.push(part);
            }
        } while (hasBadWord(parts.join('')))
    }

    return parts.join('-');
};

module.exports.validate = function(code, opts) {
    if ( !code ) {
        throw new Error("Provide a code to be validated");
    }
    opts = xtend({}, defaults, opts);

    // uppercase the code, take out any random chars and replace OIZS with 0125
    code = code.toUpperCase()
        .replace(/[^0-9A-Z]+/g, '')
        .replace(/O/g, '0')
        .replace(/I/g, '1')
        .replace(/Z/g, '2')
        .replace(/S/g, '5');

    // split in the different parts
    var parts = [];
    var tmp = code;
    while( tmp.length > 0 ) {
        parts.push( tmp.substr(0, opts.partLen) );
        tmp = tmp.substr(opts.partLen);
    }

    // make sure we have been given the same number of parts as we are expecting
    if ( parts.length !== opts.parts ) {
        return '';
    }

    // validate each part
    var part, str, check, data;
    for ( var i = 0; i < parts.length; i++ ) {
        part = parts[i];
        // check this part has 4 chars
        if ( part.length !== opts.partLen ) {
            return '';
        }

        // split out the data and the check
        data = part.substr(0, opts.partLen-1);
        check = part.substr(opts.partLen-1, 1);

        if ( check !== checkDigitAlg1(data, i+1) ) {
            return '';
        }
    }

    // everything looked ok with this code
    return parts.join('-');
};

// --------------------------------------------------------------------------------------------------------------------
// internal helpers

function randomSymbol() {
    return symbolsArr[parseInt(Math.random() * symbolsArr.length, 10)];
}

// returns the checksum character for this (data/part) combination
function checkDigitAlg1(data, check) {
    // check's initial value is the part number (e.g. 3 or above)

    // loop through the data chars
    data.split('').forEach(function(v) {
        var k = symbolsObj[v];
        check = check * 19 + k;
    });

    return symbolsArr[ check % 31 ];
}

function hasBadWord(code) {
    var i;
    code = code.toUpperCase();
    for( i = 0; i < badWordsList.length; i++ ) {
        if (code.indexOf(badWordsList[i]) > -1)
            return true;
    }
    return false;
};

// also export this (for testing)
module.exports.hasBadWord = hasBadWord

// --------------------------------------------------------------------------------------------------------------------


/***/ }),

/***/ "../node_modules/xtend/immutable.js":
/*!******************************************!*\
  !*** ../node_modules/xtend/immutable.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

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

module.exports = "<div class=\"coupan_wrapper\">\n    <div class=\"container-fluid content\">\n      <h2>Coupan</h2>\n  \n      <div>\n        <div class=\"row\">\n          <button (click)=\"addModal.open()\" class=\"btn btn-primary add_coupan_btn\" style=\"margin:20px\">Add Coupan</button>\n          <span class=\"success\" *ngIf=\"message!=''\">{{message}}</span>\n\n  <!-- <a routerLink=\"/admin/pages/customer/cust/3423/plan/123\">cust Plan</a>\n  <a routerLink=\"/admin/pages/customer/cust/3423/plan/123/week/1\">Week Plan</a> -->\n  \n      <!-- <Button class=\"btn btn-primary\" (click)=\"navigateBack()\">Back</Button> -->\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n           \n            <th>title</th>\n            <th>code</th>\n            <th>expiry</th>\n            <th>discount</th>\n            <th>frequency</th>\n            <th>description</th>\n            <th>status</th>\n            <th>Edit/Delete</th>\n            <!-- <th>Plan Detail</th> -->\n          </tr>\n        </thead>\n      <tbody>\n           <tr *ngFor=\"let coupan of coupansres\">\n            <td>{{coupan.title}}</td>\n            <td>{{coupan.code}}</td>\n            <td>{{coupan.expiry}}</td>\n            <td>{{((coupan.type == 1)?'&#x20b9;':'') + coupan.discount  + ((coupan.type == 2)?'%':'')}}</td>\n            <td>{{coupan.frequency}}</td>\n            <td>{{coupan.description}}</td>\n            <td class=\"{{(coupan.status == 'Active'?'text-success':'text-danger')}}\">{{coupan.status}}</td>\n            <button (click)=\"editModal.open();selectedCoupanObj=coupan\" class=\"btn btn-success mr-20\">Edit</button>\n            <button (click)=\"confirmDeleteCoupanModal.open();CoupanObj=coupan; index=i;\" class=\"btn btn-danger\">Delete</button>\n           \n          </tr>\n        </tbody> \n      </table>\n\n  </div>\n  </div>\n  </div>\n  </div>\n      \n      <modal #addModal>\n          <modal-header>\n            <h3>Add Coupan</h3>\n          </modal-header>\n          <modal-content>\n            <div (click)=\"hideAutoComplete = false\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Title</label>\n                <input type=\"text\" [(ngModel)]=\"addctitle\" class=\"form-control\" placeholder=\"Enter coupan title\" />\n               \n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label\">Code</label>\n                <input readonly type=\"text\" [(ngModel)]=\"coupanCode\" class=\"form-control\" placeholder=\"Enter coupan title\" />\n\n                <button (click)=\"createCoupan()\" class=\"btn btn-primary\">Generate Coupan Code</button>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label\">Expiry</label>\n                <input type=\"date\" [(ngModel)]=\"addcexpiry\" class=\"form-control\" placeholder=\"Enter coupan Expiry\" />\n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label\">Discount</label>\n                <input type=\"text\" [(ngModel)]=\"addcdiscount\" class=\"form-control\" placeholder=\"Enter coupan Discount\" />\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"control-label\">Frequency</label>\n                  <input type=\"text\" [(ngModel)]=\"addcfrq\" class=\"form-control\" placeholder=\"Enter coupan frequency\" />\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">Description</label>\n                    <input type=\"text\" [(ngModel)]=\"addcdes\" class=\"form-control\" placeholder=\"Enter coupan Description\" />\n                  </div>\n                  <div class=\"form-group\">\n                  <label class=\"control-label\">Discount Type</label>\n                  <select [(ngModel)]=\"addctype\" placeholder=\"Select Type\" class=\"form-control\">\n                    <option value=\"\" default=\"\" disabled=\"\" style=\"display: none;\">Select Discount type Percentage or Amount</option>\n                    <option value=\"1\">Percent</option>\n                    <option value=\"2\">amount</option>\n                  </select>\n                  </div>\n              <!-- <div class=\"form-group\">\n                <label class=\"control-label\">Discount Type</label>\n                <input type=\"text\" [(ngModel)]=\"addctype\" class=\"form-control\" placeholder=\"Enter coupan Type\" />\n              </div> -->\n              <button (click)=\"addCoupan(addModal)\" class=\"btn btn-primary\">Add Coupan</button>\n            </div>\n          </modal-content>\n        </modal>\n          <modal #editModal>\n            <modal-header>\n              <h3>Edit Coupan</h3>\n            </modal-header>\n            <modal-content>\n              <div (click)=\"hideAutoComplete = false\" *ngIf=\"selectedCoupanObj\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Title</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCoupanObj.title\" />\n                </div>\n               <div class=\"form-group\">\n                  <label class=\"control-label\">Code</label>\n                  <input readonly type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCoupanObj.code\" />\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Expiry</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCoupanObj.expiry\" />\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Discount</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCoupanObj.discount\" />\n                </div>\n               \n                <div class=\"form-group\">\n                  <label class=\"control-label\">Frequency</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCoupanObj.frequency\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"control-label\">Description</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCoupanObj.description\" />\n                  </div>\n                  <div class=\"form-group\">\n                      <label class=\"control-label\">Discount Type</label>\n                  <select [(ngModel)]=\"selectedCoupanObj.type\"class=\"form-control\">\n                      <option value=\"\" default=\"\" disabled=\"\" style=\"display: none;\">Select Discount type Percentage or Amount</option>\n                      <option value=\"1\">Percent</option>\n                      <option value=\"2\">amount</option>\n                    </select>\n                  </div>\n                  <!-- <div class=\"form-group\">\n                      <label class=\"control-label\">Discount Type</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCoupanObj.type\" />\n                    </div> -->\n                <button class=\"btn btn-primary\" (click)=\"editCoupan(editModal, selectedCoupanObj,selectedCoupanObj._id)\">Edit Coupan</button>\n              </div>\n            </modal-content>\n          </modal>\n         \n        \n            <modal #confirmDeleteCoupanModal class=\"confirmDeleteModal\">\n              <modal-header>\n                <h3>Confirm Delete</h3>\n              </modal-header>\n              <modal-content>\n                <h4>Are you sure you want to delete this product?</h4>\n              </modal-content>\n              <modal-footer>\n                  <button class=\"btn btn-danger\" (click)=\"deleteItem(CoupanObj._id, confirmDeleteCoupanModal, index);\">Yes</button>\n                  <button class=\"btn btn-success\" (click)=\"closeModal(confirmDeleteCoupanModal);\">No</button>\n              </modal-footer>\n            </modal>\n      "

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var SnacksComponent = /** @class */ (function () {
    function SnacksComponent(http, auth, router, activatedRoute) {
        this.http = http;
        this.auth = auth;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.coupans = {};
        this.coupansres = [];
        this.coupanCode = '';
        this.addCoupanArray = {};
        this.data = {};
        this.editCoupanArray = {};
        this.CoupanObj = {};
    }
    SnacksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/coupan').subscribe(function (res) {
            // this.http.get('http://localhost:9191/public/api/coupan').subscribe((res: any)=> {
            console.log("res");
            console.log(res);
            if (res.success) {
                console.log(res.data);
                _this.coupansres = res.data;
                console.log(_this.coupansres);
            }
            else {
                console.log("error");
            }
        }, function (err) {
        });
    };
    SnacksComponent.prototype.openModal = function (modal) {
        modal.open();
    };
    SnacksComponent.prototype.closeModal = function (modal) {
        modal.close();
    };
    SnacksComponent.prototype.createCoupan = function () {
        var cc = __webpack_require__(/*! coupon-code */ "../node_modules/coupon-code/coupon-code.js");
        // generate a 4 part code
        this.addccode = cc.generate({ parts: 4 });
        this.coupanCode = this.addccode;
        console.log("generated code");
        console.log(this.addccode);
    };
    SnacksComponent.prototype.addCoupan = function (modal) {
        this.addCoupanArray = {
            title: this.addctitle,
            frequency: this.addcfrq,
            discount: this.addcdiscount,
            description: this.addcdes,
            expiry: this.addcexpiry,
            type: this.addctype,
            coupan: this.addccode
        };
        // console.log("array data");
        // console.log(this.addCoupanArray);
        // console.log("title")
        // console.log(this.addctitle);
        // if(this.addctitle!==this.ctitle )
        // {
        this.http.post(this.auth.getDomainName() + '/api/coupan', this.addCoupanArray).subscribe(function (res) {
            // this.http.post('http://localhost:9191/public/api/coupan', this.addCoupanArray).subscribe((res:any)=>{
            if (res.success) {
                console.log('sucess');
                alert("your coupan added successfully !");
            }
            else {
                alert(res.error);
            }
        }, function (err) {
            console.log(err);
        });
        this.closeModal(modal);
    };
    SnacksComponent.prototype.editCoupan = function (modal, selectedCoupan, pid) {
        this.editCoupanArray = {
            title: selectedCoupan.title,
            frequency: selectedCoupan.frequency,
            discount: selectedCoupan.discount,
            description: selectedCoupan.description,
            expiry: selectedCoupan.expiry,
            type: selectedCoupan.type,
            coupan: selectedCoupan.code,
            coupanId: pid
        };
        console.log(this.editCoupanArray);
        this.http.put(this.auth.getDomainName() + '/api/coupan', this.editCoupanArray).subscribe(function (data) {
            // this.http.put('http://localhost:9191/public/api/coupan', this.editCoupanArray).subscribe(data=>{
            console.log(data);
            console.log(selectedCoupan.type);
            alert("your coupan modified successfully !");
        }, function (err) {
            console.log(err);
        });
        this.closeModal(modal);
    };
    SnacksComponent.prototype.deleteItem = function (pid, modal, index) {
        console.log(pid);
        this.http.delete(this.auth.getDomainName() + '/api/coupan/' + pid, this.editCoupanArray).subscribe(function (data) {
            // this.http.delete('http://localhost:9191/public/api/coupan/'+ pid, this.editCoupanArray).subscribe(data=>{
            console.log(data);
            alert("your coupan removed successfully !");
        }, function (err) {
            console.log(err);
        });
        this.closeModal(modal);
    };
    SnacksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snacks',
            template: __webpack_require__(/*! ./snacks.component.html */ "./src/app/admin/pages/snacks/snacks.component.html"),
            styles: [__webpack_require__(/*! ./snacks.component.css */ "./src/app/admin/pages/snacks/snacks.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-modal */ "./node_modules/ngx-modal/index.js");
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_modal__WEBPACK_IMPORTED_MODULE_6__);
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
                _snacks_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                ngx_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]
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