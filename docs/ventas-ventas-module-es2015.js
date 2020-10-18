(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ventas-ventas-module"],{

/***/ "./src/app/ventas/ventas-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ventas/ventas-routing.module.ts ***!
  \*************************************************/
/*! exports provided: VentasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasPageRoutingModule", function() { return VentasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ventas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ventas.page */ "./src/app/ventas/ventas.page.ts");




const routes = [
    {
        path: '',
        component: _ventas_page__WEBPACK_IMPORTED_MODULE_3__["VentasPage"]
    }
];
let VentasPageRoutingModule = class VentasPageRoutingModule {
};
VentasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VentasPageRoutingModule);



/***/ }),

/***/ "./src/app/ventas/ventas.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ventas/ventas.module.ts ***!
  \*****************************************/
/*! exports provided: VentasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasPageModule", function() { return VentasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ventas_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ventas-routing.module */ "./src/app/ventas/ventas-routing.module.ts");
/* harmony import */ var _ventas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ventas.page */ "./src/app/ventas/ventas.page.ts");








let VentasPageModule = class VentasPageModule {
};
VentasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ventas_routing_module__WEBPACK_IMPORTED_MODULE_6__["VentasPageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        declarations: [_ventas_page__WEBPACK_IMPORTED_MODULE_7__["VentasPage"]]
    })
], VentasPageModule);



/***/ })

}]);
//# sourceMappingURL=ventas-ventas-module-es2015.js.map