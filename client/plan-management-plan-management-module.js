(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plan-management-plan-management-module"],{

/***/ "./node_modules/ngx-accordion/Accordion.js":
/*!*************************************************!*\
  !*** ./node_modules/ngx-accordion/Accordion.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AccordionGroup_1 = __webpack_require__(/*! ./AccordionGroup */ "./node_modules/ngx-accordion/AccordionGroup.js");
var Accordion = (function () {
    function Accordion() {
        this.closeOthers = true;
        this.showArrows = false;
        this.expandAll = false;
    }
    Accordion.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.expandAll) {
            this.closeOthers = false;
            this.oldGroups = this.groups.toArray();
            this.oldGroups.forEach(function (group) {
                group.openOnInitialization();
            });
            // we subscribe for changes, and if new groups are added we open them automatically
            this.subscription = this.groups.changes.subscribe(function (change) {
                var newGroups = _this.groups.toArray().filter(function (group) {
                    return _this.oldGroups.indexOf(group) === -1;
                });
                newGroups.forEach(function (group) {
                    group.openOnInitialization();
                });
                _this.oldGroups = _this.groups.toArray();
            });
        }
    };
    Accordion.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    Accordion.prototype.closeAll = function () {
        this.groups.toArray().forEach(function (group) {
            group.isOpened = false;
        });
    };
    return Accordion;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Accordion.prototype, "closeOthers", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Accordion.prototype, "showArrows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Accordion.prototype, "expandAll", void 0);
__decorate([
    core_1.ContentChildren(core_1.forwardRef(function () { return AccordionGroup_1.AccordionGroup; })),
    __metadata("design:type", core_1.QueryList)
], Accordion.prototype, "groups", void 0);
Accordion = __decorate([
    core_1.Component({
        selector: "accordion",
        template: "\n<div class=\"panel-group\" role=\"tablist\" aria-multiselectable=\"true\">\n    <ng-content></ng-content>\n</div>\n"
    })
], Accordion);
exports.Accordion = Accordion;
//# sourceMappingURL=Accordion.js.map

/***/ }),

/***/ "./node_modules/ngx-accordion/AccordionGroup.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-accordion/AccordionGroup.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var Accordion_1 = __webpack_require__(/*! ./Accordion */ "./node_modules/ngx-accordion/Accordion.js");
var AccordionToggle_1 = __webpack_require__(/*! ./AccordionToggle */ "./node_modules/ngx-accordion/AccordionToggle.js");
var AccordionGroup = (function () {
    function AccordionGroup(accordion, cdr) {
        this.accordion = accordion;
        this.cdr = cdr;
        this.isOpened = false;
        this.onOpen = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onToggle = new core_1.EventEmitter();
        this.disabled = false;
    }
    AccordionGroup.prototype.checkAndToggle = function () {
        // if custom toggle element is supplied, then do nothing, custom toggler will take care of it
        if (this.toggler)
            return;
        this.toggle();
    };
    AccordionGroup.prototype.toggle = function () {
        if (this.disabled)
            return;
        var isOpenedBeforeWeChange = this.isOpened;
        if (this.accordion.closeOthers)
            this.accordion.closeAll();
        this.isOpened = !isOpenedBeforeWeChange;
        if (this.isOpened) {
            this.onOpen.emit();
        }
        else {
            this.onClose.emit();
        }
        this.onToggle.emit(this.isOpened);
    };
    AccordionGroup.prototype.openOnInitialization = function () {
        this.isOpened = true;
        this.cdr.detectChanges();
    };
    return AccordionGroup;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AccordionGroup.prototype, "heading", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AccordionGroup.prototype, "isOpened", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AccordionGroup.prototype, "onOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AccordionGroup.prototype, "onClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AccordionGroup.prototype, "onToggle", void 0);
__decorate([
    core_1.ContentChild(AccordionToggle_1.AccordionToggle),
    __metadata("design:type", core_1.ElementRef)
], AccordionGroup.prototype, "toggler", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AccordionGroup.prototype, "disabled", void 0);
AccordionGroup = __decorate([
    core_1.Component({
        selector: "accordion-group",
        template: "\n  <div class=\"panel panel-default\" [class.dropup]=\"isOpened\" [class.disabled]=\"disabled\">\n    <div class=\"panel-heading\" role=\"tab\" (click)=\"checkAndToggle()\">\n      <h4 class=\"panel-title\">\n        <a *ngIf=\"heading\" role=\"button\" data-toggle=\"collapse\" [attr.aria-expanded]=\"isOpened\">\n            {{ heading }}\n        </a>\n        <ng-content select=\"accordion-heading\"></ng-content>\n        <div class=\"caret\" [style.display]=\"accordion.showArrows ? '' : 'none'\">\n        </div>\n      </h4>\n    </div>\n    <div *ngIf=\"isOpened\" class=\"panel-collapse collapse in\" role=\"tabpanel\" [attr.aria-labelledby]=\"heading\">\n      <div class=\"panel-body\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n"
    }),
    __param(0, core_1.Host()), __param(0, core_1.Inject(core_1.forwardRef(function () { return Accordion_1.Accordion; }))),
    __metadata("design:paramtypes", [Accordion_1.Accordion,
        core_1.ChangeDetectorRef])
], AccordionGroup);
exports.AccordionGroup = AccordionGroup;
//# sourceMappingURL=AccordionGroup.js.map

/***/ }),

/***/ "./node_modules/ngx-accordion/AccordionHeading.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-accordion/AccordionHeading.js ***!
  \********************************************************/
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
var AccordionHeading = (function () {
    function AccordionHeading() {
    }
    return AccordionHeading;
}());
AccordionHeading = __decorate([
    core_1.Component({
        selector: "accordion-heading",
        template: "<ng-content></ng-content>"
    })
], AccordionHeading);
exports.AccordionHeading = AccordionHeading;
//# sourceMappingURL=AccordionHeading.js.map

/***/ }),

/***/ "./node_modules/ngx-accordion/AccordionToggle.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-accordion/AccordionToggle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AccordionGroup_1 = __webpack_require__(/*! ./AccordionGroup */ "./node_modules/ngx-accordion/AccordionGroup.js");
var AccordionToggle = (function () {
    function AccordionToggle(accordionGroup) {
        this.accordionGroup = accordionGroup;
    }
    AccordionToggle.prototype.onClick = function () {
        this.accordionGroup.toggle();
    };
    return AccordionToggle;
}());
__decorate([
    core_1.HostListener("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccordionToggle.prototype, "onClick", null);
AccordionToggle = __decorate([
    core_1.Component({
        selector: "accordion-toggle",
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Host()), __param(0, core_1.Inject(core_1.forwardRef(function () { return AccordionGroup_1.AccordionGroup; }))),
    __metadata("design:paramtypes", [AccordionGroup_1.AccordionGroup])
], AccordionToggle);
exports.AccordionToggle = AccordionToggle;
//# sourceMappingURL=AccordionToggle.js.map

/***/ }),

/***/ "./node_modules/ngx-accordion/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ngx-accordion/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var AccordionGroup_1 = __webpack_require__(/*! ./AccordionGroup */ "./node_modules/ngx-accordion/AccordionGroup.js");
var Accordion_1 = __webpack_require__(/*! ./Accordion */ "./node_modules/ngx-accordion/Accordion.js");
var AccordionToggle_1 = __webpack_require__(/*! ./AccordionToggle */ "./node_modules/ngx-accordion/AccordionToggle.js");
var AccordionHeading_1 = __webpack_require__(/*! ./AccordionHeading */ "./node_modules/ngx-accordion/AccordionHeading.js");
__export(__webpack_require__(/*! ./Accordion */ "./node_modules/ngx-accordion/Accordion.js"));
__export(__webpack_require__(/*! ./AccordionGroup */ "./node_modules/ngx-accordion/AccordionGroup.js"));
__export(__webpack_require__(/*! ./AccordionToggle */ "./node_modules/ngx-accordion/AccordionToggle.js"));
__export(__webpack_require__(/*! ./AccordionHeading */ "./node_modules/ngx-accordion/AccordionHeading.js"));
var AccordionModule = (function () {
    function AccordionModule() {
    }
    return AccordionModule;
}());
AccordionModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            Accordion_1.Accordion,
            AccordionGroup_1.AccordionGroup,
            AccordionToggle_1.AccordionToggle,
            AccordionHeading_1.AccordionHeading
        ],
        exports: [
            Accordion_1.Accordion,
            AccordionGroup_1.AccordionGroup,
            AccordionToggle_1.AccordionToggle,
            AccordionHeading_1.AccordionHeading
        ]
    })
], AccordionModule);
exports.AccordionModule = AccordionModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/admin/pages/plan-management/plan-management.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/pages/plan-management/plan-management.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL3BsYW4tbWFuYWdlbWVudC9wbGFuLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/pages/plan-management/plan-management.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/pages/plan-management/plan-management.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"plan_management_wrapper\">\n  <div class=\"plan_management\">\n    <div class=\"select_week_wrapper\">\n      <select [(ngModel)]=\"selectedPlanId\" (change)=\"showWeeks()\">\n        <option *ngFor=\"let plan of allPlans\" value=\"{{plan._id}}\">{{plan.title}}</option>\n      </select>\n    </div>\n    <div class=\"all_weeks\">\n      <div class=\"week\">\n        <!-- <div *ngFor=\"let plan of allPlans\" class=\"week_title\">{{plan.title}}</div> -->\n        <!-- <accordion>\n            <group title=\"First Group\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <button (click)=\"openModal(thirdModal)\" class=\"btn btn-primary\" style=\"margin:20px\">Add Product</button>\n                  <card cardTitle=\"Week Plan Details\">\n                    <table class=\"table table-bordered table-hover\">\n                      <thead>\n                        <tr>\n                          <th>Type</th>\n                          <th>Product</th>\n                          <th>MRP</th>\n                          <th>Action</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let weekprod of weeks, let i=index\">\n                          <td>1</td>\n                          <td>2</td>\n                          <td>3</td>\n                          <td><button (click)=\"deleteWeekProd(weekprod._id)\" class=\"btn btn-danger\"><i class=\"fa fa-trash fa-fw\"></i>Delete</button></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </card>\n                  </div>\n                  </div>\n                  hiiiiiiiiiiiiiii\n            </group>\n            <group title=\"Second Group\">\n              <input type=\"text\" class=\"form-control\" />\n              <button>Send</button>\n              byeeeeeeeeeeeeeeeeeeeeeee\n            </group>\n        </accordion> -->\n        <accordion [showArrows]=\"false\" [closeOthers]=\"true\" [expandAll]=\"false\">\n            <accordion-group>\n                <accordion-heading>\n                    <accordion-toggle>Week 1</accordion-toggle>\n                </accordion-heading>\n            </accordion-group>\n        </accordion>\n        <accordion [showArrows]=\"false\" [closeOthers]=\"true\" [expandAll]=\"false\">\n            <accordion-group>\n                <accordion-heading>\n                    <accordion-toggle>Week 2</accordion-toggle>\n                </accordion-heading>\n            </accordion-group>\n        </accordion>\n        <accordion [showArrows]=\"false\" [closeOthers]=\"true\" [expandAll]=\"false\">\n            <accordion-group>\n                <accordion-heading>\n                    <accordion-toggle>Week 3</accordion-toggle>\n                </accordion-heading>\n            </accordion-group>\n        </accordion>\n        <!-- <button class=\"btn btn-success\" style=\"margin:20px\">Save</button> -->\n      </div>\n    </div>\n  </div>\n</div>\n<modal #thirdModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n    <modal-header>\n      <h3>Add Products</h3>\n    </modal-header>\n    <modal-content>\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>Type</th>\n            <th>Product</th>\n            <th>MRP</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let prod of products, let i=index\">\n            <td>{{prod}}</td>\n            <td>{{prod.name}}</td>\n            <td>{{prod.price}}</td>\n            <td><button (click)=\"addProd(prod._id)\" class=\"btn btn-success\"><i class=\"fa fa-check fa-fw\"></i>Add</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </modal-content>\n    <modal-footer>\n      <button class=\"btn btn-primary\" (click)=\"closeModal(thirdModal)\">close</button>\n    </modal-footer>\n  </modal>\n"

/***/ }),

/***/ "./src/app/admin/pages/plan-management/plan-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/pages/plan-management/plan-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlanManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanManagementComponent", function() { return PlanManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var PlanManagementComponent = /** @class */ (function () {
    function PlanManagementComponent(http, auth, activeRoute) {
        this.http = http;
        this.auth = auth;
        this.activeRoute = activeRoute;
        this.view = 'week';
        this.weeks = [];
        this.products = [];
        this.deleteMessage = '';
        this.data = {};
        this.value = {};
    }
    PlanManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/plan/core').subscribe(function (res) {
            console.log(res.data);
            _this.allPlans = res.data;
        }, function (err) {
            console.log(err);
        });
        var routeParams = this.activeRoute.snapshot.params;
        console.log(routeParams);
        this.http.get(this.auth.getDomainName() + '/api/plan/customize/' + routeParams.planid + '/week/' + routeParams.weekid).subscribe(function (res) {
            console.log("weekProds", res.data);
            if (res.data && res.data.length) {
                _this.weeks = res.data[0].products;
            }
        }, function (err) {
            console.log(err);
        });
        this.http.get(this.auth.getDomainName() + '/api/product').subscribe(function (res) {
            console.log(res.data);
            _this.products = res.data;
        }, function (err) {
            console.log(err);
        });
    };
    PlanManagementComponent.prototype.showWeeks = function () {
        console.log(this.selectedPlanId);
    };
    PlanManagementComponent.prototype.deleteWeekProd = function (prodId) {
        console.log(prodId);
        var routeParams = this.activeRoute.snapshot.params;
        console.log(routeParams);
        this.http.delete(this.auth.getDomainName() + '/api/plan/active/' + routeParams.planid + '/product/' + prodId + '/week/' + routeParams.weekid, {}).subscribe(function (res) {
            console.log("deleteProd ", res);
            if (res.success) {
                alert('Product Deleted Successfully!');
            }
            else if (res.error) {
                alert(res.error);
            }
        }, function (err) {
            console.log("deleteProd err", err);
        });
    };
    PlanManagementComponent.prototype.addProd = function (prodId) {
        console.log(prodId);
        var routeParams = this.activeRoute.snapshot.params;
        console.log(routeParams);
        this.http.post(this.auth.getDomainName() + '/api/plan/active/' + routeParams.planid + '/product/' + prodId + '/week/' + routeParams.weekid, {}).subscribe(function (res) {
            console.log("addProd", res);
            if (res.success) {
                alert('Product Added Successfully!');
            }
            else if (res.error) {
                alert(res.error);
            }
        }, function (err) {
            console.log("addProd err", err);
        });
    };
    PlanManagementComponent.prototype.changeView = function (view) {
        this.view = view;
    };
    PlanManagementComponent.prototype.openModal = function (modal) {
        modal.open();
    };
    PlanManagementComponent.prototype.closeModal = function (modal) {
        modal.close();
        window.location.reload();
    };
    PlanManagementComponent.prototype.onClose = function () {
        window.location.reload();
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            type: 'success',
            title: 'Success!',
            text: 'close it!',
        });
    };
    PlanManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan-management',
            template: __webpack_require__(/*! ./plan-management.component.html */ "./src/app/admin/pages/plan-management/plan-management.component.html"),
            styles: [__webpack_require__(/*! ./plan-management.component.css */ "./src/app/admin/pages/plan-management/plan-management.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PlanManagementComponent);
    return PlanManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/plan-management/plan-management.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/pages/plan-management/plan-management.module.ts ***!
  \***********************************************************************/
/*! exports provided: PlanManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanManagementModule", function() { return PlanManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _plan_management_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan-management.routing */ "./src/app/admin/pages/plan-management/plan-management.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _plan_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan-management.component */ "./src/app/admin/pages/plan-management/plan-management.component.ts");
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-modal */ "./node_modules/ngx-modal/index.js");
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-accordion */ "./node_modules/ngx-accordion/index.js");
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_accordion__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { AccordionGroupComponent } from './accordian/accordion-group.component';
// import { AccordionComponent } from './accordian/accordion.component';
var PlanManagementModule = /** @class */ (function () {
    function PlanManagementModule() {
    }
    PlanManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _plan_management_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                ngx_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
                ngx_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"]
            ],
            declarations: [
                _plan_management_component__WEBPACK_IMPORTED_MODULE_5__["PlanManagementComponent"]
            ]
        })
    ], PlanManagementModule);
    return PlanManagementModule;
}());



/***/ }),

/***/ "./src/app/admin/pages/plan-management/plan-management.routing.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/pages/plan-management/plan-management.routing.ts ***!
  \************************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _plan_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-management.component */ "./src/app/admin/pages/plan-management/plan-management.component.ts");


var childRoutes = [
    {
        path: '',
        component: _plan_management_component__WEBPACK_IMPORTED_MODULE_1__["PlanManagementComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ })

}]);
//# sourceMappingURL=plan-management-plan-management-module.js.map