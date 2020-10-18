function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailalmacen-detailalmacen-module"], {
  /***/
  "./src/app/detailalmacen/detailalmacen-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/detailalmacen/detailalmacen-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: DetailalmacenPageRoutingModule */

  /***/
  function srcAppDetailalmacenDetailalmacenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailalmacenPageRoutingModule", function () {
      return DetailalmacenPageRoutingModule;
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


    var _detailalmacen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detailalmacen.page */
    "./src/app/detailalmacen/detailalmacen.page.ts");

    var routes = [{
      path: '',
      component: _detailalmacen_page__WEBPACK_IMPORTED_MODULE_3__["DetailalmacenPage"]
    }];

    var DetailalmacenPageRoutingModule = function DetailalmacenPageRoutingModule() {
      _classCallCheck(this, DetailalmacenPageRoutingModule);
    };

    DetailalmacenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailalmacenPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/detailalmacen/detailalmacen.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/detailalmacen/detailalmacen.module.ts ***!
    \*******************************************************/

  /*! exports provided: DetailalmacenPageModule */

  /***/
  function srcAppDetailalmacenDetailalmacenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailalmacenPageModule", function () {
      return DetailalmacenPageModule;
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


    var _detailalmacen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detailalmacen-routing.module */
    "./src/app/detailalmacen/detailalmacen-routing.module.ts");
    /* harmony import */


    var _detailalmacen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detailalmacen.page */
    "./src/app/detailalmacen/detailalmacen.page.ts");

    var DetailalmacenPageModule = function DetailalmacenPageModule() {
      _classCallCheck(this, DetailalmacenPageModule);
    };

    DetailalmacenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detailalmacen_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailalmacenPageRoutingModule"]],
      declarations: [_detailalmacen_page__WEBPACK_IMPORTED_MODULE_6__["DetailalmacenPage"]]
    })], DetailalmacenPageModule);
    /***/
  }
}]);
//# sourceMappingURL=detailalmacen-detailalmacen-module-es5.js.map