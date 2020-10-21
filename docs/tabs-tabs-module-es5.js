function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <ion-tabs> \n    \n    <ion-tab-bar slot=\"top\">      \n      <ion-tab-button tab=\"tab1\">\n        <ion-icon name=\"basket\"></ion-icon>\n\n        \n        <ion-label>Materiales</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"tab2\">\n        <ion-icon name=\"newspaper-sharp\"></ion-icon>\n        <ion-label>Elaborados</ion-label>\n      </ion-tab-button>\n      \n      <ion-tab-button tab=\"tab3\">\n        <ion-icon name=\"cash-outline\"></ion-icon>\n        <ion-label>Ventas</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"tab4\">\n        <ion-icon name=\"file-tray-stacked-outline\"></ion-icon>\n        <ion-label>Almacen</ion-label>\n      </ion-tab-button>\n      \n      \n\n      <ion-tab-button (click) = \"viewPopover()\">\n        <ion-icon name=\"document-attach-outline\"></ion-icon>\n        <ion-label> Export file</ion-label>\n      </ion-tab-button>\n        \n      <ion-tab-button  (click)=\"logout()\" >\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n        <ion-label>logOut</ion-label>\n      </ion-tab-button >\n      \n    </ion-tab-bar>\n    <ion-footer >\n      \n      <img class=\"center\" width=\"75em\" height=\"100%\" src=\"https://jigmam.github.io/apkres/assets/alg.png\">\n    </ion-footer>\n  </ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'tab1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab1-tab1-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
          /*! ../tab1/tab1.module */
          "./src/app/tab1/tab1.module.ts")).then(function (m) {
            return m.Tab1PageModule;
          });
        }
      }, {
        path: 'tab2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab2-tab2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
          /*! ../tab2/tab2.module */
          "./src/app/tab2/tab2.module.ts")).then(function (m) {
            return m.Tab2PageModule;
          });
        }
      }, {
        path: 'tab3',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab3-tab3-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
          /*! ../tab3/tab3.module */
          "./src/app/tab3/tab3.module.ts")).then(function (m) {
            return m.Tab3PageModule;
          });
        }
      }, {
        path: 'tab4',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab4-tab4-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab4-tab4-module")]).then(__webpack_require__.bind(null,
          /*! ../tab4/tab4.module */
          "./src/app/tab4/tab4.module.ts")).then(function (m) {
            return m.Tab4PageModule;
          });
        }
      }, {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tab1',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"], _tabs_page__WEBPACK_IMPORTED_MODULE_7__["PopoverPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage, PopoverPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
      return PopoverPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../config.service */
    "./src/app/config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage(host, alertController, viewCtrl, route) {
        _classCallCheck(this, TabsPage);

        this.host = host;
        this.alertController = alertController;
        this.viewCtrl = viewCtrl;
        this.route = route;
      }

      _createClass(TabsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            _this.param1 = params['userID'];
          });

          if (this.param1) {
            this.host.setHost(this.param1);
          } else {
            this.host.setHost("0");
            window.location.replace("");
          }
        }
      }, {
        key: "viewPopover",
        value: function viewPopover() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.viewCtrl.create({
                      component: PopoverPage
                    });

                  case 2:
                    modal = _context.sent;
                    modal.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Confirmar',
                      message: '<strong>Desea salir del sistema?</strong>',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Aceptar',
                        handler: function handler() {
                          _this2.host.setHost("");

                          window.location.replace("");
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return TabsPage;
    }();

    TabsPage.ctorParameters = function () {
      return [{
        type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    })], TabsPage);

    var PopoverPage = /*#__PURE__*/function () {
      function PopoverPage(http, host, viewCtrl) {
        var _this3 = this;

        _classCallCheck(this, PopoverPage);

        this.http = http;
        this.host = host;
        this.viewCtrl = viewCtrl;
        this.Nombre = "";
        this.Email = "";
        this.Asunto = "";
        this.http.get(this.host.getHost() + '/viewSQL').subscribe(function (data) {
          _this3["export"] = data;
        });
      }

      _createClass(PopoverPage, [{
        key: "sendEmail",
        value: function sendEmail(obj) {
          var json = {
            "name": this.Nombre,
            "sql": obj.Id,
            "email": this.Email,
            "asunto": this.Asunto
          };
          this.http.post(this.host.getHost() + '/sendEmail', json).subscribe(function (data) {});
        }
      }, {
        key: "exportExcel",
        value: function exportExcel(obj) {
          var json = {
            "name": this.Nombre,
            "sql": obj.Id,
            "email": this.Email,
            "asunto": this.Asunto
          };
          this.http.post(this.host.getHost() + '/exportExcel', json).subscribe(function (data) {});
        }
      }, {
        key: "close",
        value: function close() {
          this.viewCtrl.dismiss();
        }
      }]);

      return PopoverPage;
    }();

    PopoverPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    PopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n  \n    <ion-header>\n      <ion-toolbar>\n        <ion-title>\n          Exportar\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <form>\n        <ion-item>\n          <ion-label>Nombre:</ion-label>\n          <ion-input type=\"text\"  [(ngModel)]=\"Nombre\" name=\"Nombre\"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label>Email:</ion-label>\n          <ion-input type=\"email\" [(ngModel)]=\"Email\" name=\"Precio\"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label>Asunto:</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"Asunto\" name=\"Unidad\"></ion-input>\n        </ion-item>\n        <ion-list  *ngFor=\"let exp of export\">\n          <ion-row>\n              <ion-col>{{exp.Name}}</ion-col>\n              \n              <ion-col><ion-button  (click)=exportExcel(exp) color=\"success\"><ion-icon name=\"download-outline\"></ion-icon></ion-button></ion-col> \n              <ion-col><ion-button  (click)=sendEmail(exp) color=\"danger\"><ion-icon name=\"mail-outline\"></ion-icon></ion-button> </ion-col> \n          </ion-row>\n        </ion-list> \n      </form>\n    </ion-content>\n  "
    })], PopoverPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map