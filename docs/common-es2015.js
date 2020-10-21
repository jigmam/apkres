(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-44bf8136.js */ "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-prima/detail-prima.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-prima/detail-prima.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  \n  <ion-toolbar>\n    <ion-icon  size=\"large\" (click)=\"navBack()\" name=\"arrow-back-outline\"></ion-icon>\n    <ion-icon size=\"large\"  slot=\"primary\" (click)=\"save(event)\" type=\"submit\"  name=\"save\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n  <ion-toolbar>\n    <ion-title size=\"large\">Materia Detail</ion-title>\n  </ion-toolbar>\n  </ion-header>\n  <form   >\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    <ion-input type=\"text\"  [(ngModel)]=\"selectItem.Nombre\" name=\"Nombre\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Precio</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"selectItem.Precio\" name=\"Precio\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Medida</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"selectItem.Unidad\" name=\"Unidad\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <h2>Historico</h2>\n  </ion-item>\n  <ion-grid>\n    <ion-item class=\"ion-text-center\">\n      <ion-col>\n        Costo\n      </ion-col>\n      <ion-col>\n        Fecha\n      </ion-col>\n    </ion-item>\n    <ion-item *ngFor=\"let item of items\" class=\"ion-text-center\">\n      <ion-col>\n        {{item.cost}}\n      </ion-col>  \n      <ion-col>\n        {{item.date}}\n      </ion-col>\n    </ion-item>\n  </ion-grid>\n \n</form>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detailalmacen/detailalmacen.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailalmacen/detailalmacen.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  \n  <ion-toolbar>\n    <ion-icon  size=\"large\" (click)=\"navBack()\" name=\"arrow-back-outline\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n  <ion-toolbar>\n    <ion-title size=\"large\">Detalle</ion-title>\n  </ion-toolbar>\n  </ion-header>\n  <form  >\n   <ion-item>\n     <ion-col>\n      <h1>{{selectItem.Nombre}}</h1>\n     </ion-col>\n     <ion-col>\n      <h2>{{selectItem.disponible | number:'1.2-2' }}</h2>\n     </ion-col>\n\n   </ion-item>\n  \n\n  <ion-item>\n    <ion-col>\n      <ion-label>Cantidad:</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-input type=\"number\" [(ngModel)]=\"selectItem.cant\" name=\"Precio\"></ion-input>\n    </ion-col>\n    <ion-col>\n      <ion-label>Fecha:</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" value=\"{{selectItem.Fecha}}\" ></ion-datetime>\n    </ion-col>   \n  </ion-item>\n\n    <ion-button  (click)=\"insertAlmacen()\"  expand=\"full\">Ingresar</ion-button>\n\n\n  <ion-item>\n    <h2>Historico</h2>\n  </ion-item>\n  <ion-grid>\n    <ion-item class=\"ion-text-center\">\n      <ion-col>\n        Cantidad\n      </ion-col>\n      <ion-col>\n        Fecha\n      </ion-col>\n    </ion-item>\n    <ion-item *ngFor=\"let item of items\" class=\"ion-text-center\">\n      <ion-col>  \n        {{item.Cantidad}}\n      </ion-col>  \n      <ion-col>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" value=\"{{item.FechaIngreso}}\" ></ion-datetime>\n        \n      </ion-col>\n    </ion-item>\n  </ion-grid>\n \n</form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ventas/ventas.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ventas/ventas.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-icon  size=\"large\" (click)=\"navBack()\" name=\"arrow-back-outline\"></ion-icon>\n  <ion-toolbar>\n    <ion-title>ventas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-item>\n    <ion-select interface=\"action-sheet\" placeholder=\"Seleccione producto\" [(ngModel)]=\"item\" name=\"item\" >\n      <ion-select-option  *ngFor=\"let item of items\"  [value]=\"item\">{{item.Nombre}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-input type=\"number\" [(ngModel)]=\"cant\" name=\"cant\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-datetime [(ngModel)]=\"fecha\" name=\"fecha\" displayFormat=\"D MMM YYYY\" placeholder=\"Fecha de venta\" ></ion-datetime>\n  </ion-item>\n \n  <ion-button  (click)=\"addItem(item)\" shape=\"round\"  color=\"success\" expand=\"full\">Agregar producto</ion-button>\n  <ion-list *ngFor=\"let  pedido of pedidos\" >\n    <ion-item>\n      <ion-input class=\"ion-text-center\" type=\"text\"  [(ngModel)]=\"pedido.Nombre\" name=\"{{pedido.Nombre}}\"></ion-input>\n      <ion-input class=\"ion-text-center\" type=\"text\"  [(ngModel)]=\"pedido.cant\" name=\"{{pedido.Cant}}\"></ion-input>\n      <ion-input class=\"ion-text-center\" type=\"text\"  [(ngModel)]=\"pedido.total\" name=\"{{pedido.total}}\"></ion-input>\n      <ion-datetime class=\"ion-text-center\" [(ngModel)]=\"pedido.Fecha\" name=\"{{pedido.Fecha}}\" displayFormat=\"D MMM YYYY\"  pickerFormat=\"YYYY-MM-DD\" placeholder=\"Fecha de venta\" ></ion-datetime>\n\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <ion-button  (click)=\"generarVenta()\" shape=\"round\"  color=\"secondary\" expand=\"full\">Guardar venta</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/detail-prima/detail-prima.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/detail-prima/detail-prima.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1wcmltYS9kZXRhaWwtcHJpbWEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/detail-prima/detail-prima.page.ts":
/*!***************************************************!*\
  !*** ./src/app/detail-prima/detail-prima.page.ts ***!
  \***************************************************/
/*! exports provided: DetailPrimaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPrimaPage", function() { return DetailPrimaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../config.service */ "./src/app/config.service.ts");







let DetailPrimaPage = class DetailPrimaPage {
    constructor(host, http, params, modal, form) {
        this.host = host;
        this.http = http;
        this.params = params;
        this.modal = modal;
        this.form = form;
        this.Nombre = '';
        if (params.data.items != null) {
            this.selectItem = params.data.items;
            this.http.post(this.host.getHost() + '/historycost', this.selectItem).subscribe(data => {
                this.items = data;
            });
        }
        else {
            this.selectItem = { Id: null, Nombre: "", Precio: 0, Unidad: "U" };
        }
    }
    navBack() {
        this.modal.dismiss();
    }
    save() {
        if (this.selectItem.Id != null) {
            this.http.post(this.host.getHost() + '/UpdatePrima', this.selectItem).subscribe(data => {
                console.log(data['_body']);
            }, error => {
                console.log(error);
            });
        }
        else {
            this.http.post(this.host.getHost() + '/InsertPrima', this.selectItem).subscribe(data => {
                console.log(data['_body']);
            }, error => {
                console.log(error);
            });
        }
        this.navBack();
    }
    ngOnInit() {
    }
};
DetailPrimaPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"] }
];
DetailPrimaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-prima',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-prima.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-prima/detail-prima.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-prima.page.scss */ "./src/app/detail-prima/detail-prima.page.scss")).default]
    })
], DetailPrimaPage);



/***/ }),

/***/ "./src/app/detailalmacen/detailalmacen.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/detailalmacen/detailalmacen.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbGFsbWFjZW4vZGV0YWlsYWxtYWNlbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/detailalmacen/detailalmacen.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/detailalmacen/detailalmacen.page.ts ***!
  \*****************************************************/
/*! exports provided: DetailalmacenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailalmacenPage", function() { return DetailalmacenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../config.service */ "./src/app/config.service.ts");







let DetailalmacenPage = class DetailalmacenPage {
    constructor(host, http, params, modal, form) {
        this.host = host;
        this.http = http;
        this.params = params;
        this.modal = modal;
        this.form = form;
        if (params.data.items != null) {
            this.selectItem = params.data.items;
            this.selectItem.cant = 1;
            this.selectItem.Fecha = Date();
        }
        this.detailAlmacen();
    }
    navBack() {
        this.modal.dismiss();
    }
    insertAlmacen() {
        this.http.post(this.host.getHost() + '/insertAlmacen', this.selectItem).subscribe(data => {
            this.detailAlmacen();
            this.disponibilidadAlmacen();
        });
    }
    detailAlmacen() {
        this.http.post(this.host.getHost() + '/detailAlmacen', this.selectItem).subscribe(data => {
            this.items = data;
        });
    }
    disponibilidadAlmacen() {
        this.http.get(this.host.getHost() + '/DisponibilidadAlmacen').subscribe(data => {
            data.forEach(element => {
                if (element.Id == this.selectItem.Id) {
                    this.selectItem = element;
                    this.selectItem.cant = 0;
                    this.selectItem.Fecha = Date();
                }
            });
        });
    }
};
DetailalmacenPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"] }
];
DetailalmacenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detailalmacen',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detailalmacen.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detailalmacen/detailalmacen.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detailalmacen.page.scss */ "./src/app/detailalmacen/detailalmacen.page.scss")).default]
    })
], DetailalmacenPage);



/***/ }),

/***/ "./src/app/explore-container/explore-container.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvQzpcXFVzZXJzXFxqaWdtYVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXHJlc0Fway9zcmNcXGFwcFxcZXhwbG9yZS1jb250YWluZXJcXGV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/explore-container/explore-container.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExploreContainerComponent.prototype, "name", void 0);
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore-container',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./explore-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./explore-container.component.scss */ "./src/app/explore-container/explore-container.component.scss")).default]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "./src/app/explore-container/explore-container.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "./src/app/explore-container/explore-container.component.ts");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "./src/app/shared/material-filter.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/material-filter.pipe.ts ***!
  \************************************************/
/*! exports provided: materialFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialFilterPipe", function() { return materialFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let materialFilterPipe = class materialFilterPipe {
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter((item) => this.applyFilter(item, filter));
    }
    /**
     * Perform the filtering.
     *
     * @param {material} material The material to compare to the filter.
     * @param {material} filter The filter to apply.
     * @return {boolean} True if material satisfies filters, false if not.
     */
    applyFilter(material, filter) {
        for (let field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (material[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (material[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
};
materialFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'materialfilter',
        pure: false
    })
], materialFilterPipe);



/***/ }),

/***/ "./src/app/shared/material.ts":
/*!************************************!*\
  !*** ./src/app/shared/material.ts ***!
  \************************************/
/*! exports provided: material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "material", function() { return material; });
/**
 * Book entity, used for filtering as well.
 */
class material {
}


/***/ }),

/***/ "./src/app/ventas/ventas.page.scss":
/*!*****************************************!*\
  !*** ./src/app/ventas/ventas.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbnRhcy92ZW50YXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ventas/ventas.page.ts":
/*!***************************************!*\
  !*** ./src/app/ventas/ventas.page.ts ***!
  \***************************************/
/*! exports provided: VentasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasPage", function() { return VentasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../config.service */ "./src/app/config.service.ts");





let VentasPage = class VentasPage {
    constructor(host, http, modal) {
        this.host = host;
        this.http = http;
        this.modal = modal;
        this.http.get(this.host.getHost() + '/selectElabora').subscribe(data => {
            this.items = data;
        });
        this.pedidos = [];
        this.cant = 0;
        this.fecha = Date();
    }
    OnInit() {
    }
    addItem(item) {
        item.cant = this.cant;
        item.Fecha = this.fecha;
        this.pedidos.push(item);
    }
    generarVenta() {
        console.log(this.pedidos);
        this.http.post(this.host.getHost() + '/insertVentas', { produc: this.pedidos }).subscribe(data => {
        });
        this.navBack();
    }
    navBack() {
        this.modal.dismiss({
            'dismissed': true
        });
    }
    ngOnInit() {
    }
};
VentasPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
VentasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ventas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ventas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ventas/ventas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ventas.page.scss */ "./src/app/ventas/ventas.page.scss")).default]
    })
], VentasPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map