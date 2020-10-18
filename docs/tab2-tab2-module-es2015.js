(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-elaborado/detail-elaborado.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-elaborado/detail-elaborado.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  \n  <ion-toolbar>\n    <ion-icon  size=\"large\" (click)=\"navBack()\" name=\"arrow-back-outline\"></ion-icon>\n    <ion-icon slot=\"primary\" size=\"large\" (click)=\"save(event)\"  name=\"save\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  >\n  <ion-header collapse=\"condense\">\n  <ion-toolbar>\n    <ion-title size=\"large\">Detalle</ion-title>\n  </ion-toolbar>\n  </ion-header>\n  <form  >\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    <ion-input  (ionBlur)=\"insertName()\"[(ngModel)]=\"selectItem.Nombre\" name=\"Nombre\" ></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Ganancia</ion-label>\n    <ion-input (ionBlur)=\"save(event)\" [(ngModel)]=\"selectItem.ganacia\" name=\"ganacia\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Costo Indirecto</ion-label>\n    <ion-input (ionBlur)=\"save(event)\" [(ngModel)]=\"selectItem.costoIndirecto\" name=\"costoIndirecto\"></ion-input>\n  </ion-item>\n\n   \n  <ion-item>\n    <ion-col><ion-searchbar (ionChange)=\"searchMaterial()\" [(ngModel)]=\"search\"  name=\"search\" [value]=\"search\" placeholder=\"Buscar Materiales\"></ion-searchbar></ion-col>\n  </ion-item>\n  <ion-list *ngFor=\"let item of itemsP\">\n    <ion-item>\n      <ion-col (click)=\"selectSearch(item)\">\n          {{item.Nombre}}\n      </ion-col>\n    </ion-item>\n      \n  </ion-list>\n  \n  <ion-item class=\"ion-align-items-center\">\n    <ion-col>\n      {{prima.Nombre}}\n    </ion-col>\n    <ion-col>\n      <ion-input type=\"number\" [(ngModel)]=\"cant \" name=\"cant\"></ion-input>\n    </ion-col>\n    <ion-col>\n      {{prima.Unidad }}\n    </ion-col>\n    <ion-col>  \n      <ion-icon size=\"large\" color=\"success\" (click)=\"addItem()\" name=\"add-circle\" ></ion-icon>\n    </ion-col>\n    <!-- <ion-select interface=\"action-sheet\" placeholder=\"Selecione prima..\" [(ngModel)]=\"prima\" name=\"prima\" >\n      <ion-select-option  *ngFor=\"let prima of itemsP \"   [value]=\"prima\"></ion-select-option>  \n    </ion-select> -->\n  </ion-item>\n  <ion-item class=\"ion-text-center\" > \n    <ion-col>\n      Producto\n    </ion-col >\n    <ion-col >\n      Cantidad\n    </ion-col>\n    <ion-col >\n      Unidad\n    </ion-col>\n    <ion-col>\n      Precio\n    </ion-col>\n    <ion-col>\n      Total\n    </ion-col>\n  </ion-item>\n  <ion-card  *ngFor=\"let subitem of Subitems\"> \n      \n    <ion-card-header>\n      <ion-card-title color=\"black\">{{subitem.Nombre}}\n        <ion-icon  (click)=\"DeleteItem(subitem)\" name=\"close\"></ion-icon>\n      </ion-card-title>\n      <ion-item>\n        <ion-label>Total:</ion-label>\n        <ion-label>$ {{subitem.Precio*subitem.value | number:'1.2-2'  }}</ion-label>\n        \n      </ion-item>\n      \n    </ion-card-header>\n  \n    <ion-card-content >\n      <ion-item>\n        <ion-label>Cantidad:</ion-label>\n        <ion-input  class=\"ion-text-center\" color=\"success\" (ionBlur)=\"changeItem(subitem)\" type=\"number\" [(ngModel)]=\"subitem.value\"  name=\"{{subitem.value}}\" ></ion-input>\n        <ion-label>{{subitem.Unidad}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Precio:</ion-label>\n        <ion-label>$ {{subitem.Precio}}</ion-label>\n      </ion-item>\n     \n      \n    </ion-card-content>\n  </ion-card>\n  <!-- <ion-list *ngFor=\"let subitem of Subitems\" >\n    <ion-item class=\"ion-text-center\">\n        <ion-col>{{subitem.Nombre}}</ion-col>\n        <ion-col><ion-input  class=\"ion-text-center\" color=\"success\" (ionBlur)=\"changeItem(subitem)\" type=\"number\" [(ngModel)]=\"subitem.value\"  name=\"{{subitem.value}}\" ></ion-input></ion-col>\n        <ion-col>{{subitem.Unidad}}</ion-col>\n        <ion-col>{{subitem.Precio}}</ion-col>\n        <ion-col>{{subitem.Precio*subitem.value | number:'1.2-2'  }}</ion-col>\n        <ion-icon  (click)=\"DeleteItem(subitem)\" name=\"close\"></ion-icon>\n        \n    </ion-item>\n  </ion-list>  -->\n  <ion-list>\n    <ion-item class=\"ion-text-center\">\n      <ion-col>Costo de materia prima</ion-col>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <ion-col>$ {{selectItem.subtotal | number:'1.2-2'  }}$</ion-col>\n    </ion-item>\n    <ion-item class=\"ion-text-center\">\n      <ion-col>Costo indirecto</ion-col>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <ion-col>$ {{selectItem.subtotal * selectItem.costoIndirecto | number:'1.2-2' }}</ion-col>\n    </ion-item>\n    <ion-item class=\"ion-text-center\">\n      <ion-col>Costo Total</ion-col>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <ion-col>$ {{(selectItem.subtotal * selectItem.costoIndirecto) + selectItem.subtotal | number:'1.2-2' }}</ion-col>\n    </ion-item>\n    <ion-item class=\"ion-text-center\">\n      <ion-col>Total</ion-col>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <ion-col>$ {{selectItem.total | number:'1.2-2'}}</ion-col>\n    </ion-item>\n</ion-list>\n</form>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar >\n   \n    <ion-title>Materia Elaborada</ion-title>\n    \n   \n    \n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"filter.Nombre\" animated ></ion-searchbar>\n    <ion-button   color=\"black\" slot=\"end\" (click)=\"addItem(item)\">\n      <ion-icon name=\"add\"></ion-icon>\n      Agregar\n    </ion-button>\n  </ion-toolbar>\n  <ion-item class=\"ion-text-center\">  \n    <ion-col>Producto</ion-col>\n    <ion-col>Precio</ion-col>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n \n  \n  <!-- List of Text Items -->\n  \n  \n  <ion-list  >\n      <ion-item *ngFor=\"let item of items | materialfilter:filter \" button=\"true\" (click)=\"itemSelected(item)\" class=\"ion-text-center\">\n\n        \n          <ion-col><h5>{{item.Nombre}}</h5></ion-col>\n          <ion-col><p>$ {{item.total | number:'1.2-2'}}</p></ion-col>\n        \n     \n    </ion-item>\n  </ion-list> \n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/detail-elaborado/detail-elaborado.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/detail-elaborado/detail-elaborado.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1lbGFib3JhZG8vZGV0YWlsLWVsYWJvcmFkby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/detail-elaborado/detail-elaborado.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/detail-elaborado/detail-elaborado.page.ts ***!
  \***********************************************************/
/*! exports provided: DetailElaboradoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailElaboradoPage", function() { return DetailElaboradoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







let DetailElaboradoPage = class DetailElaboradoPage {
    constructor(host, decimalPipe, http, params, modal) {
        this.host = host;
        this.decimalPipe = decimalPipe;
        this.http = http;
        this.params = params;
        this.modal = modal;
        this.search = "";
        if (params.data.items != null) {
            this.selectItem = params.data.items;
        }
        else {
            this.selectItem = { Id: null, Nombre: "", costoIndirecto: 0, ganacia: 0, subtotal: 0, total: 0 };
        }
        this.http.get(this.host.getHost() + '/selectPrima').subscribe(data => {
            this.itemsPcopy = data;
            this.prima = data[0];
        });
        this.Subitems = [];
        this.cant = 0;
        this.ngOnInit();
    }
    twoDecimals(number) {
        return this.decimalPipe.transform(number, '1.3-3');
    }
    selectSearch(item) {
        this.prima = item;
        this.itemsP = [];
    }
    searchMaterial() {
        this.itemsP = [];
        if (this.search != '') {
            this.itemsPcopy.forEach(element => {
                var pos = element.Nombre.toUpperCase().search(this.search.toUpperCase());
                if (pos > -1) {
                    this.itemsP.push(element);
                }
            });
        }
    }
    navBack() {
        this.modal.dismiss({
            'dismissed': true
        });
    }
    addItem() {
        this.prima.IdElaborada = this.selectItem.Id;
        this.prima.value = this.cant;
        var item = new Object(this.prima);
        this.itemsP = [];
        if (this.selectItem.Id != null) {
            this.http.post(this.host.getHost() + '/InsertElaboradaDetail', item).subscribe(data => {
            });
        }
        this.prima = "";
        this.Subitems.push(item);
    }
    changeItem(subitem) {
        if (this.selectItem.Id != null) {
            this.http.post(this.host.getHost() + '/updateElaboraDetail', subitem).subscribe(data => {
                this.ngOnInit();
            });
        }
    }
    insertName() {
        var item = this.selectItem;
        if (this.selectItem.Id == null) {
            item.produc = this.Subitems;
            this.http.post(this.host.getHost() + '/InsertElaborada', item).subscribe(data => {
                this.selectItem = data[0];
            });
        }
    }
    save() {
        var item = this.selectItem;
        if (this.selectItem.Id != null) {
            this.http.post(this.host.getHost() + '/UpdateElabora', item).subscribe(data => {
                this.ngOnInit();
            });
        }
    }
    DeleteItem(subitem) {
        if (this.selectItem.Id != null) {
            this.http.post(this.host.getHost() + '/DeleteElaboraDetail', subitem).subscribe(data => {
                this.ngOnInit();
            });
        }
    }
    ngOnInit() {
        if (this.selectItem.Id != null) {
            this.http.post(this.host.getHost() + '/selectElaboraID', this.selectItem).subscribe(data => {
                this.selectItem = data[0];
            });
            this.http.post(this.host.getHost() + '/selectDetallE', this.selectItem).subscribe(data => {
                this.Subitems = data;
            });
        }
    }
};
DetailElaboradoPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
DetailElaboradoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-elaborado',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-elaborado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-elaborado/detail-elaborado.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-elaborado.page.scss */ "./src/app/detail-elaborado/detail-elaborado.page.scss")).default]
    })
], DetailElaboradoPage);



/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
        children: [
            {
                path: 'elabora',
                loadChildren: () => __webpack_require__.e(/*! import() | detail-elaborado-detail-elaborado-module */ "detail-elaborado-detail-elaborado-module").then(__webpack_require__.bind(null, /*! ./../detail-elaborado/detail-elaborado.module */ "./src/app/detail-elaborado/detail-elaborado.module.ts")).then(m => m.DetailElaboradoPageModule)
            }
        ]
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _shared_material_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/material-filter.pipe */ "./src/app/shared/material-filter.pipe.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");










let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_9__["Tab2PageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"], _shared_material_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["materialFilterPipe"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_elaborado_detail_elaborado_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detail-elaborado/detail-elaborado.page */ "./src/app/detail-elaborado/detail-elaborado.page.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _shared_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/material */ "./src/app/shared/material.ts");







let Tab2Page = class Tab2Page {
    constructor(host, http, modal) {
        this.host = host;
        this.http = http;
        this.modal = modal;
        this.filter = new _shared_material__WEBPACK_IMPORTED_MODULE_6__["material"]();
        this.http.get(this.host.getHost() + '/selectElabora').subscribe(data => {
            this.items = data;
        });
    }
    itemSelected(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modal.create({
                component: _detail_elaborado_detail_elaborado_page__WEBPACK_IMPORTED_MODULE_4__["DetailElaboradoPage"],
                componentProps: {
                    models: this.items,
                    items: item
                }
            });
            modal.present();
            return yield modal.onDidDismiss().then(() => {
                this.http.get(this.host.getHost() + '/selectElabora').subscribe(element => {
                    this.items = element;
                    console.log(this.items);
                });
            });
        });
    }
    addItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _detail_elaborado_detail_elaborado_page__WEBPACK_IMPORTED_MODULE_4__["DetailElaboradoPage"],
                componentProps: {
                    items: null,
                },
            });
            modal.onDidDismiss().then(() => {
                this.http.get(this.host.getHost() + '/selectElabora').subscribe(element => {
                    this.items = element;
                    console.log(this.items);
                });
            });
            return yield modal.present();
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    })
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map