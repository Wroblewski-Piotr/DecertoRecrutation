(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_sheredComponents_component_supplier_DeliverableComponentEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/sheredComponents/component-supplier/DeliverableComponentEnum */ "./src/app/core/sheredComponents/component-supplier/DeliverableComponentEnum.ts");
/* harmony import */ var _core_model_SubjectPropagatorObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/model/SubjectPropagatorObject */ "./src/app/core/model/SubjectPropagatorObject.ts");
/* harmony import */ var _core_utils_ArrayUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/utils/ArrayUtils */ "./src/app/core/utils/ArrayUtils.ts");
/* harmony import */ var _model_StrategyProcessScore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/StrategyProcessScore */ "./src/app/model/StrategyProcessScore.ts");
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_sheredComponents_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/sheredComponents/list/list.component */ "./src/app/core/sheredComponents/list/list.component.ts");
/* harmony import */ var _core_sheredComponents_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/sheredComponents/modal/modal.component */ "./src/app/core/sheredComponents/modal/modal.component.ts");
/* harmony import */ var _core_sheredComponents_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/sheredComponents/button/button.component */ "./src/app/core/sheredComponents/button/button.component.ts");











function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openAddStrategyModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dodaj strategie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteAllScores(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wyczy\u015B\u0107 wyniki");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clearAllselectedStrategiesChain(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wyczy\u015B\u0107 wszystkie strategie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_app_button_6_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.execute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonClassName", "btn btn-primary")("beforeSpinnerMessage", "zaczekaj")("showSpinner", ctx_r3.isSelectedStrategiesChainLoading)("textWheneSpinnerNotActive", "Wykonaj");
} }
class AppComponent {
    constructor(golbalService) {
        this.golbalService = golbalService;
        this.selectedStrategiesChain = new Array();
        this.compatybilesStrategies = new Array();
        this.isCompatybilesStrategiesLoading = false;
        this.isSelectedStrategiesChainLoading = false;
    }
    ngOnInit() {
        this.reloadCompatybilesStrategies();
    }
    reloadCompatybilesStrategies() {
        this.compatybilesStrategies = new Array();
        this.isCompatybilesStrategiesLoading = true;
        if (this.selectedStrategiesChain.length === 0) {
            this.golbalService.getAllGenerateDataStrategy().subscribe(strategies => {
                this.compatybilesStrategies = strategies;
                this.isCompatybilesStrategiesLoading = false;
            });
        }
        else {
            const lastSelectedStrategy = this.selectedStrategiesChain[this.selectedStrategiesChain.length - 1].strategyDto;
            this.golbalService.getAllcompatybileProcessDataStrategies(lastSelectedStrategy.qualifier).subscribe(strategies => {
                this.compatybilesStrategies = strategies;
                this.isCompatybilesStrategiesLoading = false;
            });
        }
    }
    openAddStrategyModal() {
        this.golbalService.setPropagator(new _core_model_SubjectPropagatorObject__WEBPACK_IMPORTED_MODULE_2__["SubjectPropagatorObject"](1, null));
    }
    addToselectedStrategiesChain(strategyDTO) {
        this.selectedStrategiesChain.push(new _model_StrategyProcessScore__WEBPACK_IMPORTED_MODULE_4__["StrategyProcessScore"](strategyDTO, null));
        this.reloadCompatybilesStrategies();
    }
    deleteStrategyFromStrategiesChain(strategyProcessScore) {
        _core_utils_ArrayUtils__WEBPACK_IMPORTED_MODULE_3__["ArrayUtils"].deleteElementFromArray(this.selectedStrategiesChain, strategyProcessScore);
        this.reloadCompatybilesStrategies();
    }
    execute() {
        this.isSelectedStrategiesChainLoading = true;
        this.golbalService.execute(this.selectedStrategiesChain).subscribe(x => {
            this.selectedStrategiesChain = x;
            this.isSelectedStrategiesChainLoading = false;
        });
    }
    deleteAllScores() {
        this.selectedStrategiesChain.forEach(x => x.processScore = null);
    }
    clearAllselectedStrategiesChain() {
        this.selectedStrategiesChain = new Array();
        this.reloadCompatybilesStrategies();
    }
    isItExecuted() {
        if (this.selectedStrategiesChain.length > 0 && this.selectedStrategiesChain[0].processScore != null) {
            return true;
        }
        else {
            return false;
        }
    }
    createNewMap() {
        return new Map();
    }
    getDeliverableComponentEnumAddStrategy() {
        return _core_sheredComponents_component_supplier_DeliverableComponentEnum__WEBPACK_IMPORTED_MODULE_1__["DeliverableComponentEnum"].AddStrategy;
    }
    getDeliverableComponentEnumSelectedeStrategy() {
        return _core_sheredComponents_component_supplier_DeliverableComponentEnum__WEBPACK_IMPORTED_MODULE_1__["DeliverableComponentEnum"].SelectedStrategy;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 11, consts: [[1, "container"], ["class", "btn btn-success", "style", "width: 100%; margin-top: 50px; margin-bottom: 50px", 3, "click", 4, "ngIf"], [3, "deliverableComponentEnum", "objectList", "nameOfBaseObject", "parametersOfInnerComponent"], ["class", "btn btn-warning", "style", "width: 100%; margin-top: 1px; margin-bottom: 10px", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", "style", "width: 100%; margin-top: 1px; margin-bottom: 10px", 3, "click", 4, "ngIf"], [3, "buttonClassName", "beforeSpinnerMessage", "showSpinner", "textWheneSpinnerNotActive", "click", 4, "ngIf"], [3, "importParameters"], [1, "btn", "btn-success", 2, "width", "100%", "margin-top", "50px", "margin-bottom", "50px", 3, "click"], [1, "btn", "btn-warning", 2, "width", "100%", "margin-top", "1px", "margin-bottom", "10px", 3, "click"], [1, "btn", "btn-danger", 2, "width", "100%", "margin-top", "1px", "margin-bottom", "10px", 3, "click"], [3, "buttonClassName", "beforeSpinnerMessage", "showSpinner", "textWheneSpinnerNotActive", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_button_6_Template, 1, 4, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "MPW-CMS-modal", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isItExecuted());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.isItExecuted() ? "margin-top: 134px" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deliverableComponentEnum", ctx.getDeliverableComponentEnumSelectedeStrategy())("objectList", ctx.selectedStrategiesChain)("nameOfBaseObject", "strategyProcessScore")("parametersOfInnerComponent", ctx.createNewMap().set("parentComponent", ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isItExecuted());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedStrategiesChain.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedStrategiesChain.length > 0 && !ctx.isItExecuted());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("importParameters", ctx.createNewMap().set("deliverableComponentEnum", ctx.getDeliverableComponentEnumAddStrategy()).set("addCloseButton", true).set("title", "dodaj strategie").set("parametersOfInnerComponent", ctx.createNewMap().set("parentComponent", ctx)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _core_sheredComponents_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _core_sheredComponents_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], _core_sheredComponents_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  max-width: 1200px;\r\n  margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _service_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_sheredComponents_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/sheredComponents/button/button.component */ "./src/app/core/sheredComponents/button/button.component.ts");
/* harmony import */ var _core_sheredComponents_component_supplier_component_supplier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/sheredComponents/component-supplier/component-supplier.component */ "./src/app/core/sheredComponents/component-supplier/component-supplier.component.ts");
/* harmony import */ var _core_sheredComponents_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/sheredComponents/modal/modal.component */ "./src/app/core/sheredComponents/modal/modal.component.ts");
/* harmony import */ var _core_sheredComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/sheredComponents/spinner/spinner.component */ "./src/app/core/sheredComponents/spinner/spinner.component.ts");
/* harmony import */ var _core_sheredComponents_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/sheredComponents/list/list.component */ "./src/app/core/sheredComponents/list/list.component.ts");
/* harmony import */ var _components_selected_strategy_selected_strategy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/selected-strategy/selected-strategy.component */ "./src/app/components/selected-strategy/selected-strategy.component.ts");
/* harmony import */ var _components_add_strategy_add_strategy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-strategy/add-strategy.component */ "./src/app/components/add-strategy/add-strategy.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _core_sheredComponents_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
        _core_sheredComponents_component_supplier_component_supplier_component__WEBPACK_IMPORTED_MODULE_4__["ComponentSupplierComponent"],
        _core_sheredComponents_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"],
        _core_sheredComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"],
        _core_sheredComponents_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
        _components_selected_strategy_selected_strategy_component__WEBPACK_IMPORTED_MODULE_8__["SelectedStrategyComponent"],
        _components_add_strategy_add_strategy_component__WEBPACK_IMPORTED_MODULE_9__["AddStrategyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _core_sheredComponents_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
                    _core_sheredComponents_component_supplier_component_supplier_component__WEBPACK_IMPORTED_MODULE_4__["ComponentSupplierComponent"],
                    _core_sheredComponents_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"],
                    _core_sheredComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"],
                    _core_sheredComponents_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                    _components_selected_strategy_selected_strategy_component__WEBPACK_IMPORTED_MODULE_8__["SelectedStrategyComponent"],
                    _components_add_strategy_add_strategy_component__WEBPACK_IMPORTED_MODULE_9__["AddStrategyComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_core_sheredComponents_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    _core_sheredComponents_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
    _core_sheredComponents_component_supplier_component_supplier_component__WEBPACK_IMPORTED_MODULE_4__["ComponentSupplierComponent"],
    _core_sheredComponents_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"],
    _core_sheredComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"],
    _core_sheredComponents_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
    _components_selected_strategy_selected_strategy_component__WEBPACK_IMPORTED_MODULE_8__["SelectedStrategyComponent"],
    _components_add_strategy_add_strategy_component__WEBPACK_IMPORTED_MODULE_9__["AddStrategyComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_core_sheredComponents_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    _core_sheredComponents_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
    _core_sheredComponents_component_supplier_component_supplier_component__WEBPACK_IMPORTED_MODULE_4__["ComponentSupplierComponent"],
    _core_sheredComponents_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"],
    _core_sheredComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"],
    _core_sheredComponents_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
    _components_selected_strategy_selected_strategy_component__WEBPACK_IMPORTED_MODULE_8__["SelectedStrategyComponent"],
    _components_add_strategy_add_strategy_component__WEBPACK_IMPORTED_MODULE_9__["AddStrategyComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/components/add-strategy/add-strategy.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-strategy/add-strategy.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddStrategyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStrategyComponent", function() { return AddStrategyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_utils_mapUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/utils/mapUtils */ "./src/app/core/utils/mapUtils.ts");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var src_app_core_sheredComponents_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/sheredComponents/modal/modal.service */ "./src/app/core/sheredComponents/modal/modal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_sheredComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sheredComponents/spinner/spinner.component */ "./src/app/core/sheredComponents/spinner/spinner.component.ts");







function AddStrategyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Strategie pozyskiwania danych : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddStrategyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Strategie kompatybilne do strategi : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" nazwa - ", ctx_r17.parentComponent.selectedStrategiesChain[ctx_r17.parentComponent.selectedStrategiesChain.length - 1].strategyDto.qualifier, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" opis - ", ctx_r17.parentComponent.selectedStrategiesChain[ctx_r17.parentComponent.selectedStrategiesChain.length - 1].strategyDto.description, " ");
} }
function AddStrategyComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddStrategyComponent_ng_container_3_div_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const strategy_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.parentComponent.addToselectedStrategiesChain(strategy_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dodaj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const strategy_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" nazwa - ", strategy_r20.qualifier, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" opis - ", strategy_r20.description, " ");
} }
function AddStrategyComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddStrategyComponent_ng_container_3_div_1_Template, 8, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.parentComponent.compatybilesStrategies);
} }
class AddStrategyComponent {
    constructor(globalService, modalService) {
        this.globalService = globalService;
        this.modalService = modalService;
        this.importParameters = new Map();
    }
    ngOnInit() {
        this.parentComponent = src_app_core_utils_mapUtils__WEBPACK_IMPORTED_MODULE_1__["MapUtils"].getParametrFromMap('parentComponent', this.importParameters, 'SelectedStrategyComponent');
        this.openAddNewObjectSubscription = this.globalService.getPropagator().subscribe(subjectPropagatorObject => {
            if (subjectPropagatorObject.actionId === 1) {
                this.modalService.openModalByUUID(this.importParameters.get('modalUUID'));
            }
        });
    }
    ngOnDestroy() {
        this.openAddNewObjectSubscription.unsubscribe();
    }
}
AddStrategyComponent.ɵfac = function AddStrategyComponent_Factory(t) { return new (t || AddStrategyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sheredComponents_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"])); };
AddStrategyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddStrategyComponent, selectors: [["app-add-strategy"]], inputs: { importParameters: "importParameters" }, decls: 5, vars: 5, consts: [[2, "padding-bottom", "30px", "margin-bottom", "30px", "border-bottom", "2px solid #ffc107"], ["style", "margin-top: 10px;", 4, "ngIf"], [4, "ngIf"], [3, "beforeSpinnerMessage", "showSpinner"], [2, "margin-top", "10px"], ["style", "display: flex; padding-bottom: 30px; margin-bottom: 30px; border-bottom: 2px solid #ffc107", 4, "ngFor", "ngForOf"], [2, "display", "flex", "padding-bottom", "30px", "margin-bottom", "30px", "border-bottom", "2px solid #ffc107"], [2, "width", "80%"], [1, "btn", "btn-success", 2, "width", "15%", "display", "flex", "align-items", "center", 3, "click"], [2, "margin", "auto"]], template: function AddStrategyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddStrategyComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddStrategyComponent_div_2_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddStrategyComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-spinner", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parentComponent.selectedStrategiesChain.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parentComponent.selectedStrategiesChain.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.parentComponent.isCompatybilesStrategiesLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("beforeSpinnerMessage", "trwa \u0142adowanie")("showSpinner", ctx.parentComponent.isCompatybilesStrategiesLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _core_sheredComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXN0cmF0ZWd5L2FkZC1zdHJhdGVneS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddStrategyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-strategy',
                templateUrl: './add-strategy.component.html',
                styleUrls: ['./add-strategy.component.css']
            }]
    }], function () { return [{ type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }, { type: src_app_core_sheredComponents_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }]; }, { importParameters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/selected-strategy/selected-strategy.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/selected-strategy/selected-strategy.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SelectedStrategyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedStrategyComponent", function() { return SelectedStrategyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_utils_mapUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/utils/mapUtils */ "./src/app/core/utils/mapUtils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SelectedStrategyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wynik operacji");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx_r12.strategyProcessScore.processScore), " ");
} }
function SelectedStrategyComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectedStrategyComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.parentComponent.deleteStrategyFromStrategiesChain(ctx_r14.strategyProcessScore); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Usu\u0144");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SelectedStrategyComponent {
    constructor() {
        this.importParameters = new Map();
    }
    ngOnInit() {
        this.strategyProcessScore = src_app_core_utils_mapUtils__WEBPACK_IMPORTED_MODULE_1__["MapUtils"].getParametrFromMap('strategyProcessScore', this.importParameters, 'SelectedStrategyComponent');
        this.parentComponent = src_app_core_utils_mapUtils__WEBPACK_IMPORTED_MODULE_1__["MapUtils"].getParametrFromMap('parentComponent', this.importParameters, 'SelectedStrategyComponent');
    }
    amILast() {
        return this.strategyProcessScore === this.parentComponent.selectedStrategiesChain[this.parentComponent.selectedStrategiesChain.length - 1];
    }
}
SelectedStrategyComponent.ɵfac = function SelectedStrategyComponent_Factory(t) { return new (t || SelectedStrategyComponent)(); };
SelectedStrategyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectedStrategyComponent, selectors: [["app-selected-strategy"]], inputs: { importParameters: "importParameters" }, decls: 7, vars: 6, consts: [[2, "display", "flex", "margin-bottom", "30px"], [2, "width", "80%"], [4, "ngIf"], ["style", "width: 20%; height: 50px; display: flex; align-items: center;", "class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", 2, "width", "20%", "height", "50px", "display", "flex", "align-items", "center", 3, "click"], [2, "margin", "auto"]], template: function SelectedStrategyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectedStrategyComponent_div_5_Template, 7, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectedStrategyComponent_div_6_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](!ctx.amILast() ? "border-bottom: 2px solid #ffc107; padding-bottom: 30px" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" nazwa - ", ctx.strategyProcessScore.strategyDto.qualifier, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" opis - ", ctx.strategyProcessScore.strategyDto.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyProcessScore.processScore != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.amILast() && !ctx.parentComponent.isItExecuted());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsZWN0ZWQtc3RyYXRlZ3kvc2VsZWN0ZWQtc3RyYXRlZ3kuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedStrategyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selected-strategy',
                templateUrl: './selected-strategy.component.html',
                styleUrls: ['./selected-strategy.component.css']
            }]
    }], function () { return []; }, { importParameters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/model/SubjectPropagatorObject.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/model/SubjectPropagatorObject.ts ***!
  \*******************************************************/
/*! exports provided: SubjectPropagatorObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectPropagatorObject", function() { return SubjectPropagatorObject; });
class SubjectPropagatorObject {
    constructor(actionId, data) {
        this.actionId = actionId;
        this.data = data;
    }
}


/***/ }),

/***/ "./src/app/core/sheredComponents/button/button.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/sheredComponents/button/button.component.ts ***!
  \******************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spinner/spinner.component */ "./src/app/core/sheredComponents/spinner/spinner.component.ts");




class ButtonComponent {
    constructor() {
    }
    ngOnInit() {
        this.buttonClassName = this.buttonClassName != null ? this.buttonClassName : 'btn btn-success';
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { buttonClassName: "buttonClassName", spinnerClassName: "spinnerClassName", beforeSpinnerMessage: "beforeSpinnerMessage", showSpinner: "showSpinner", textWheneSpinnerNotActive: "textWheneSpinnerNotActive" }, decls: 2, vars: 6, consts: [[2, "width", "100%", "margin-top", "50px", "margin-bottom", "50px", "display", "block", "margin", "auto", 3, "ngClass", "disabled"], [3, "spinnerClassName", "beforeSpinnerMessage", "showSpinner", "textWheneSpinnerNotActive"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.buttonClassName)("disabled", ctx.showSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spinnerClassName", ctx.spinnerClassName)("beforeSpinnerMessage", ctx.beforeSpinnerMessage)("showSpinner", ctx.showSpinner)("textWheneSpinnerNotActive", ctx.textWheneSpinnerNotActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hlcmVkQ29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.css']
            }]
    }], function () { return []; }, { buttonClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], spinnerClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], beforeSpinnerMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showSpinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], textWheneSpinnerNotActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/sheredComponents/component-supplier/DeliverableComponentEnum.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/core/sheredComponents/component-supplier/DeliverableComponentEnum.ts ***!
  \**************************************************************************************/
/*! exports provided: DeliverableComponentEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverableComponentEnum", function() { return DeliverableComponentEnum; });
var DeliverableComponentEnum;
(function (DeliverableComponentEnum) {
    DeliverableComponentEnum[DeliverableComponentEnum["SelectedStrategy"] = 0] = "SelectedStrategy";
    DeliverableComponentEnum[DeliverableComponentEnum["AddStrategy"] = 1] = "AddStrategy";
})(DeliverableComponentEnum || (DeliverableComponentEnum = {}));


/***/ }),

/***/ "./src/app/core/sheredComponents/component-supplier/DeliverableComponentsStore.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/core/sheredComponents/component-supplier/DeliverableComponentsStore.ts ***!
  \****************************************************************************************/
/*! exports provided: DeliverableComponentsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverableComponentsStore", function() { return DeliverableComponentsStore; });
/* harmony import */ var _DeliverableComponentEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeliverableComponentEnum */ "./src/app/core/sheredComponents/component-supplier/DeliverableComponentEnum.ts");
/* harmony import */ var src_app_components_selected_strategy_selected_strategy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/selected-strategy/selected-strategy.component */ "./src/app/components/selected-strategy/selected-strategy.component.ts");
/* harmony import */ var src_app_components_add_strategy_add_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/add-strategy/add-strategy.component */ "./src/app/components/add-strategy/add-strategy.component.ts");



class DeliverableComponentsStore {
}
DeliverableComponentsStore.deliverableComponentsMap = new Map()
    .set(_DeliverableComponentEnum__WEBPACK_IMPORTED_MODULE_0__["DeliverableComponentEnum"].SelectedStrategy, src_app_components_selected_strategy_selected_strategy_component__WEBPACK_IMPORTED_MODULE_1__["SelectedStrategyComponent"])
    .set(_DeliverableComponentEnum__WEBPACK_IMPORTED_MODULE_0__["DeliverableComponentEnum"].AddStrategy, src_app_components_add_strategy_add_strategy_component__WEBPACK_IMPORTED_MODULE_2__["AddStrategyComponent"]);


/***/ }),

/***/ "./src/app/core/sheredComponents/component-supplier/component-supplier.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/core/sheredComponents/component-supplier/component-supplier.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ComponentSupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentSupplierComponent", function() { return ComponentSupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _DeliverableComponentsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeliverableComponentsStore */ "./src/app/core/sheredComponents/component-supplier/DeliverableComponentsStore.ts");



const _c0 = ["vf"];
function ComponentSupplierComponent_ng_template_0_Template(rf, ctx) { }
class ComponentSupplierComponent {
    constructor(componentFactoryResolver, cdr) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cdr = cdr;
        this.importParameters = new Map();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const resolver = this.componentFactoryResolver.resolveComponentFactory(_DeliverableComponentsStore__WEBPACK_IMPORTED_MODULE_1__["DeliverableComponentsStore"].deliverableComponentsMap.get(this.deliverableComponentEnum));
        const componentFactory = this.vf.createComponent(resolver);
        componentFactory.instance['importParameters'] = this.importParameters;
        this.cdr.detectChanges();
    }
}
ComponentSupplierComponent.ɵfac = function ComponentSupplierComponent_Factory(t) { return new (t || ComponentSupplierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ComponentSupplierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComponentSupplierComponent, selectors: [["MPW-CMS-component-supplier"]], viewQuery: function ComponentSupplierComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.vf = _t.first);
    } }, inputs: { deliverableComponentEnum: "deliverableComponentEnum", importParameters: "importParameters" }, decls: 2, vars: 0, consts: [["vf", ""]], template: function ComponentSupplierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComponentSupplierComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hlcmVkQ29tcG9uZW50cy9jb21wb25lbnQtc3VwcGxpZXIvY29tcG9uZW50LXN1cHBsaWVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentSupplierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'MPW-CMS-component-supplier',
                templateUrl: './component-supplier.component.html',
                styleUrls: ['./component-supplier.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { vf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['vf', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }], deliverableComponentEnum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], importParameters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/sheredComponents/list/list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/sheredComponents/list/list.component.ts ***!
  \**************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function ListComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "MPW-CMS-component-supplier", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const object_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deliverableComponentEnum", ctx_r32.deliverableComponentEnum)("importParameters", ctx_r32.createExportParameters(object_r33));
} }
function ListComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_ul_0_li_1_Template, 2, 2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r31.listClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.objectList);
} }
class ListComponent {
    constructor() {
    }
    ngOnInit() {
        this.parametersOfInnerComponent = this.parametersOfInnerComponent != null
            ? this.parametersOfInnerComponent
            : new Map();
        this.listClass = this.listClass != null
            ? this.listClass
            : 'list';
    }
    createExportParameters(object) {
        const map = this.parametersOfInnerComponent;
        map.set(this.nameOfBaseObject, object);
        return map;
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], inputs: { deliverableComponentEnum: "deliverableComponentEnum", objectList: "objectList", parametersOfInnerComponent: "parametersOfInnerComponent", nameOfBaseObject: "nameOfBaseObject", spinnerClassName: "spinnerClassName", beforeSpinnerMessage: "beforeSpinnerMessage", showSpinner: "showSpinner", listClass: "listClass" }, decls: 2, vars: 4, consts: [[3, "ngClass", 4, "ngIf"], [3, "spinnerClassName", "beforeSpinnerMessage", "showSpinner"], [3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "deliverableComponentEnum", "importParameters"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListComponent_ul_0_Template, 2, 2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectList != null && ctx.showSpinner != true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spinnerClassName", ctx.spinnerClassName)("beforeSpinnerMessage", ctx.beforeSpinnerMessage)("showSpinner", ctx.showSpinner);
    } }, styles: [".list[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  padding-left: 15px!important;\r\n  padding-right: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaGVyZWRDb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9zaGVyZWRDb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxudWwge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return []; }, { deliverableComponentEnum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], objectList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parametersOfInnerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nameOfBaseObject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], spinnerClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], beforeSpinnerMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showSpinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/sheredComponents/modal/modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/sheredComponents/modal/modal.component.ts ***!
  \****************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_mapUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/mapUtils */ "./src/app/core/utils/mapUtils.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.service */ "./src/app/core/sheredComponents/modal/modal.service.ts");





function ModalComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r25.title);
} }
function ModalComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.closeModalByButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "z-index": a0 }; };
class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.importParameters = new Map();
        this.isItOpen = false;
    }
    ngOnInit() {
        this.uuid = uuid__WEBPACK_IMPORTED_MODULE_0__["v4"]();
        this.deliverableComponentEnum = _utils_mapUtils__WEBPACK_IMPORTED_MODULE_2__["MapUtils"].getParametrFromMap('deliverableComponentEnum', this.importParameters, 'ModalComponent');
        this.title = _utils_mapUtils__WEBPACK_IMPORTED_MODULE_2__["MapUtils"].getParametrFromMapOrGetDefault('title', this.importParameters, '');
        this.addCloseButton = _utils_mapUtils__WEBPACK_IMPORTED_MODULE_2__["MapUtils"].getParametrFromMapOrGetDefault('addCloseButton', this.importParameters, true);
        this.parametersOfInnerComponent = _utils_mapUtils__WEBPACK_IMPORTED_MODULE_2__["MapUtils"].getParametrFromMapOrGetDefault('parametersOfInnerComponent', this.importParameters, new Map());
        this.zIndex = _utils_mapUtils__WEBPACK_IMPORTED_MODULE_2__["MapUtils"].getParametrFromMapOrGetDefault('zIndex', this.importParameters, 1);
        this.modalSizeClass = _utils_mapUtils__WEBPACK_IMPORTED_MODULE_2__["MapUtils"].getParametrFromMapOrGetDefault('modalSizeClass', this.importParameters, 'modal-classic');
        this.parametersOfInnerComponent.set('modalUUID', this.uuid);
        this.modalId = 'myModal' + this.uuid;
        this.openModalSubscription = this.modalService.getModalPropagator().subscribe(x => {
            if (x.data === this.uuid) {
                if (x.actionId === 1) {
                    this.isItOpen = true;
                    this.openModal();
                }
                else if (x.actionId === 2 && this.isItOpen) {
                    this.isItOpen = false;
                    this.closeModalByButton();
                }
            }
        });
    }
    ngOnDestroy() {
        this.openModalSubscription.unsubscribe();
    }
    openModal() {
        const modal = document.getElementById(this.modalId);
        modal.style.display = 'block';
    }
    closeModalByButton() {
        const modal = document.getElementById(this.modalId);
        modal.style.display = 'none';
        this.modalService.closeModalByUUID(this.uuid);
        this.isItOpen = false;
    }
    onDocumentClick(event) {
        const modal = document.getElementById(this.modalId);
        if (event.target === modal) {
            this.modalService.closeModalByUUID(this.uuid);
            modal.style.display = 'none';
            this.isItOpen = false;
        }
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["MPW-CMS-modal"]], hostBindings: function ModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { importParameters: "importParameters" }, decls: 7, vars: 9, consts: [[1, "modal", 3, "id", "ngStyle"], [3, "ngClass"], [1, "modal-header"], [4, "ngIf"], ["class", "close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "deliverableComponentEnum", "importParameters"], [1, "close", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModalComponent_span_3_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModalComponent_span_4_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "MPW-CMS-component-supplier", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "myModal" + ctx.uuid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.zIndex));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "modal-content " + ctx.modalSizeClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addCloseButton != null && ctx.addCloseButton === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("deliverableComponentEnum", ctx.deliverableComponentEnum)("importParameters", ctx.parametersOfInnerComponent);
    } }, styles: [".modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.4); \r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n.modal-full[_ngcontent-%COMP%] {\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n}\r\n\r\n.modal-big[_ngcontent-%COMP%] {\r\n  width: 90% !important;\r\n  margin-top: 30px;\r\n}\r\n\r\n.modal-classic[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n  width: 80% !important;\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  padding: 13px 16px;\r\n  background-color: #5cb85c;\r\n  color: white;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {padding: 2px 16px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaGVyZWRDb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUMxRDs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixxRUFBcUU7RUFDckUsa0NBQWtDO0VBQ2xDLGdDQUFnQztFQUNoQywwQkFBMEI7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBLGFBQWEsaUJBQWlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NoZXJlZENvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHNcclxufVxyXG5cclxuLm1vZGFsLWZ1bGwge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1iaWcge1xyXG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtY2xhc3NpYyB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxM3B4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtwYWRkaW5nOiAycHggMTZweDt9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'MPW-CMS-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return [{ type: _modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }]; }, { importParameters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/core/sheredComponents/modal/modal.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/sheredComponents/modal/modal.service.ts ***!
  \**************************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _model_SubjectPropagatorObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/SubjectPropagatorObject */ "./src/app/core/model/SubjectPropagatorObject.ts");




class ModalService {
    // 1 - open modal
    // 2 - close modal
    constructor() {
        this.modalPropagator = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setModalPropagator(subjectPropagatorObject) {
        this.modalPropagator.next(subjectPropagatorObject);
    }
    getModalPropagator() {
        return this.modalPropagator.asObservable();
    }
    openModalByUUID(modalUUID) {
        if (modalUUID != null) {
            this.setModalPropagator(new _model_SubjectPropagatorObject__WEBPACK_IMPORTED_MODULE_2__["SubjectPropagatorObject"](1, modalUUID));
        }
    }
    closeModalByUUID(modalUUID) {
        if (modalUUID != null) {
            this.setModalPropagator(new _model_SubjectPropagatorObject__WEBPACK_IMPORTED_MODULE_2__["SubjectPropagatorObject"](2, modalUUID));
        }
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/sheredComponents/spinner/spinner.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/sheredComponents/spinner/spinner.component.ts ***!
  \********************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.beforeSpinnerMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.spinnerClassName);
} }
function SpinnerComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.textWheneSpinnerNotActive);
} }
class SpinnerComponent {
    constructor() {
    }
    ngOnInit() {
        this.spinnerClassName = this.spinnerClassName != null ? this.spinnerClassName : 'spinner-border text-warning';
        this.beforeSpinnerMessage = this.beforeSpinnerMessage != null ? this.beforeSpinnerMessage : '';
        this.showSpinner = this.showSpinner != null ? this.showSpinner : false;
        this.textWheneSpinnerNotActive = this.textWheneSpinnerNotActive != null ? this.textWheneSpinnerNotActive : '';
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { spinnerClassName: "spinnerClassName", beforeSpinnerMessage: "beforeSpinnerMessage", showSpinner: "showSpinner", textWheneSpinnerNotActive: "textWheneSpinnerNotActive" }, decls: 2, vars: 2, consts: [["class", "flex-box-container-spinner", 4, "ngIf"], [4, "ngIf"], [1, "flex-box-container-spinner"], [2, "padding-right", "10px"], [3, "ngClass"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_span_1_Template, 2, 1, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".flex-box-container-spinner[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaGVyZWRDb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NoZXJlZENvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1ib3gtY29udGFpbmVyLXNwaW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.css']
            }]
    }], function () { return []; }, { spinnerClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], beforeSpinnerMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showSpinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], textWheneSpinnerNotActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/utils/ArrayUtils.ts":
/*!******************************************!*\
  !*** ./src/app/core/utils/ArrayUtils.ts ***!
  \******************************************/
/*! exports provided: ArrayUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUtils", function() { return ArrayUtils; });
class ArrayUtils {
    static deleteElementFromArray(array, object) {
        const index = array.indexOf(object, 0);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
}


/***/ }),

/***/ "./src/app/core/utils/logUtils.ts":
/*!****************************************!*\
  !*** ./src/app/core/utils/logUtils.ts ***!
  \****************************************/
/*! exports provided: LogUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogUtils", function() { return LogUtils; });
class LogUtils {
    static log(msg, componentClassName) {
        console.log(new Date() + ': ' + componentClassName + ': '
            + JSON.stringify(msg));
    }
}


/***/ }),

/***/ "./src/app/core/utils/mapUtils.ts":
/*!****************************************!*\
  !*** ./src/app/core/utils/mapUtils.ts ***!
  \****************************************/
/*! exports provided: MapUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapUtils", function() { return MapUtils; });
/* harmony import */ var _logUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logUtils */ "./src/app/core/utils/logUtils.ts");

class MapUtils {
    static getParametrFromMap(parametrName, parametersMap, className) {
        const parametr = parametersMap.get(parametrName);
        if (parametr === undefined) {
            _logUtils__WEBPACK_IMPORTED_MODULE_0__["LogUtils"].log('In pass map cant find parameter with name - ' + parametrName, className);
        }
        return parametr;
    }
    static getParametrFromMapOrGetDefault(parametrName, parametersMap, defaultValue) {
        const parametr = parametersMap.get(parametrName);
        if (parametr === undefined) {
            return defaultValue;
        }
        return parametr;
    }
    static objToMap(obj) {
        const map = new Map();
        for (const k of Object.keys(obj)) {
            map.set(k, obj[k]);
        }
        return map;
    }
    static getArrayFromMap(map, name) {
        return map.get(name) !== undefined ? map.get(name) : new Array();
    }
    static getValuesListFromMap(map) {
        return Array.from(map, ([key, value]) => value);
    }
    static getKeysListFromMap(map) {
        return Array.from(map, ([key, value]) => key);
    }
}


/***/ }),

/***/ "./src/app/model/StrategyDto.ts":
/*!**************************************!*\
  !*** ./src/app/model/StrategyDto.ts ***!
  \**************************************/
/*! exports provided: StrategyDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyDTO", function() { return StrategyDTO; });
class StrategyDTO {
    static deserialize(input) {
        if (input == null) {
            return null;
        }
        const object = new this();
        object.description = input.description;
        object.qualifier = input.qualifier;
        return object;
    }
}


/***/ }),

/***/ "./src/app/model/StrategyProcessScore.ts":
/*!***********************************************!*\
  !*** ./src/app/model/StrategyProcessScore.ts ***!
  \***********************************************/
/*! exports provided: StrategyProcessScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyProcessScore", function() { return StrategyProcessScore; });
/* harmony import */ var _StrategyDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StrategyDto */ "./src/app/model/StrategyDto.ts");

class StrategyProcessScore {
    constructor(strategyDto, processScore) {
        this.strategyDto = strategyDto;
        this.processScore = processScore;
    }
    static deserialize(input) {
        if (input == null) {
            return null;
        }
        const object = new this(null, null);
        object.strategyDto = _StrategyDto__WEBPACK_IMPORTED_MODULE_0__["StrategyDTO"].deserialize(input.strategyDTO);
        object.processScore = input.processScore;
        return object;
    }
}


/***/ }),

/***/ "./src/app/service/global.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/global.service.ts ***!
  \*******************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _model_StrategyProcessScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/StrategyProcessScore */ "./src/app/model/StrategyProcessScore.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class GlobalService {
    constructor(http) {
        this.http = http;
        // 1 - open add strategy modal
        this.propagator = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setPropagator(subjectPropagatorObject) {
        this.propagator.next(subjectPropagatorObject);
    }
    getPropagator() {
        return this.propagator.asObservable();
    }
    getAllGenerateDataStrategy() {
        return this.http.get('/getGenerateDataStrategies');
    }
    getAllcompatybileProcessDataStrategies(strategyQualifier) {
        return this.http.get('/getCompatibleStrategies?strategyQualifier=' + strategyQualifier);
    }
    execute(strategyProcessScore) {
        return this.http.get('/process' + this.createParametersForExecuteUrl(strategyProcessScore)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((listOfObject) => {
            const listOfStrategyProcessScore = new Array();
            listOfObject.forEach(x => {
                listOfStrategyProcessScore.push(_model_StrategyProcessScore__WEBPACK_IMPORTED_MODULE_2__["StrategyProcessScore"].deserialize(x));
            });
            return listOfStrategyProcessScore;
        }));
    }
    createParametersForExecuteUrl(strategyProcessScore) {
        let parameters = '?strategyQualifiers=';
        strategyProcessScore.forEach(x => {
            parameters = parameters + x.strategyDto.qualifier + ',';
        });
        parameters = parameters.substring(0, parameters.length - 1);
        return parameters;
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Documents\przygotowaniaRozmowaKwalifikacyjna\zadania rekrutacyjne\Decerto\recruit82513\src\main\resources\web\recruit82513-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map