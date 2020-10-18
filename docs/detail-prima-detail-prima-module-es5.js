function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-prima-detail-prima-module"], {
  /***/
  "./src/app/detail-prima/detail-prima-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/detail-prima/detail-prima-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DetailPrimaPageRoutingModule */

  /***/
  function srcAppDetailPrimaDetailPrimaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPrimaPageRoutingModule", function () {
      return DetailPrimaPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _detail_prima_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail-prima.page */
    "./src/app/detail-prima/detail-prima.page.ts");

    var routes = [{
      path: '',
      component: _detail_prima_page__WEBPACK_IMPORTED_MODULE_3__["DetailPrimaPage"]
    }];

    var DetailPrimaPageRoutingModule = function DetailPrimaPageRoutingModule() {
      _classCallCheck(this, DetailPrimaPageRoutingModule);
    };

    DetailPrimaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailPrimaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/detail-prima/detail-prima.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/detail-prima/detail-prima.module.ts ***!
    \*****************************************************/

  /*! exports provided: DetailPrimaPageModule */

  /***/
  function srcAppDetailPrimaDetailPrimaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPrimaPageModule", function () {
      return DetailPrimaPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _detail_prima_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-prima-routing.module */
    "./src/app/detail-prima/detail-prima-routing.module.ts");
    /* harmony import */


    var _detail_prima_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail-prima.page */
    "./src/app/detail-prima/detail-prima.page.ts");

    var DetailPrimaPageModule = function DetailPrimaPageModule() {
      _classCallCheck(this, DetailPrimaPageModule);
    };

    DetailPrimaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_prima_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPrimaPageRoutingModule"]],
      declarations: [_detail_prima_page__WEBPACK_IMPORTED_MODULE_6__["DetailPrimaPage"]]
    })], DetailPrimaPageModule);
    /***/
  }
}]);
//# sourceMappingURL=detail-prima-detail-prima-module-es5.js.map