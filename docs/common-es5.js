function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js ***!
    \*********************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmButtonActive0d5784f9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-44bf8136.js */
    "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");
    /* harmony import */


    var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-eea61379.js */
    "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
    /* harmony import */


    var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./haptic-7b8ba70a.js */
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
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
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
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
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme3f0b0c04Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-prima/detail-prima.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-prima/detail-prima.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailPrimaDetailPrimaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  \n  <ion-toolbar>\n    <ion-icon  size=\"large\" (click)=\"navBack()\" name=\"arrow-back-outline\"></ion-icon>\n    <ion-icon size=\"large\"  slot=\"primary\" (click)=\"save(event)\" type=\"submit\"  name=\"save\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n  <ion-toolbar>\n    <ion-title size=\"large\">Materia Detail</ion-title>\n  </ion-toolbar>\n  </ion-header>\n  <form   >\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    <ion-input type=\"text\"  [(ngModel)]=\"selectItem.Nombre\" name=\"Nombre\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Precio</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"selectItem.Precio\" name=\"Precio\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Medida</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"selectItem.Unidad\" name=\"Unidad\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <h2>Historico</h2>\n  </ion-item>\n  <ion-grid>\n    <ion-item class=\"ion-text-center\">\n      <ion-col>\n        Costo\n      </ion-col>\n      <ion-col>\n        Fecha\n      </ion-col>\n    </ion-item>\n    <ion-item *ngFor=\"let item of items\" class=\"ion-text-center\">\n      <ion-col>\n        {{item.cost}}\n      </ion-col>  \n      <ion-col>\n        {{item.date}}\n      </ion-col>\n    </ion-item>\n  </ion-grid>\n \n</form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detailalmacen/detailalmacen.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailalmacen/detailalmacen.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailalmacenDetailalmacenPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  \n  <ion-toolbar>\n    <ion-icon  size=\"large\" (click)=\"navBack()\" name=\"arrow-back-outline\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n  <ion-toolbar>\n    <ion-title size=\"large\">Detalle</ion-title>\n  </ion-toolbar>\n  </ion-header>\n  <form  >\n   <ion-item>\n     <ion-col>\n      <h1>{{selectItem.Nombre}}</h1>\n     </ion-col>\n     <ion-col>\n      <h2>{{selectItem.disponible | number:'1.2-2' }}</h2>\n     </ion-col>\n\n   </ion-item>\n  \n\n  <ion-item>\n    <ion-col>\n      <ion-label>Cantidad:</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-input type=\"number\" [(ngModel)]=\"selectItem.cant\" name=\"Precio\"></ion-input>\n    </ion-col>\n    <ion-col>\n      <ion-label>Fecha:</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" value=\"{{selectItem.Fecha}}\" ></ion-datetime>\n    </ion-col>   \n  </ion-item>\n\n    <ion-button  (click)=\"insertAlmacen()\"  expand=\"full\">Ingresar</ion-button>\n\n\n  <ion-item>\n    <h2>Historico</h2>\n  </ion-item>\n  <ion-grid>\n    <ion-item class=\"ion-text-center\">\n      <ion-col>\n        Cantidad\n      </ion-col>\n      <ion-col>\n        Fecha\n      </ion-col>\n    </ion-item>\n    <ion-item *ngFor=\"let item of items\" class=\"ion-text-center\">\n      <ion-col>  \n        {{item.Cantidad}}\n      </ion-col>  \n      <ion-col>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" value=\"{{item.FechaIngreso}}\" ></ion-datetime>\n        \n      </ion-col>\n    </ion-item>\n  </ion-grid>\n \n</form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerExploreContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ventas/ventas.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ventas/ventas.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVentasVentasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-icon  size=\"large\" (click)=\"navBack()\" name=\"arrow-back-outline\"></ion-icon>\n  <ion-toolbar>\n    <ion-title>ventas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-item>\n    <ion-select interface=\"action-sheet\" placeholder=\"Seleccione producto\" [(ngModel)]=\"item\" name=\"item\" >\n      <ion-select-option  *ngFor=\"let item of items\"  [value]=\"item\">{{item.Nombre}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-input type=\"number\" [(ngModel)]=\"cant\" name=\"cant\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-datetime [(ngModel)]=\"fecha\" name=\"fecha\" displayFormat=\"D MMM YYYY\" placeholder=\"Fecha de venta\" ></ion-datetime>\n  </ion-item>\n \n  <ion-button  (click)=\"addItem(item)\" shape=\"round\"  color=\"success\" expand=\"full\">Agregar producto</ion-button>\n  <ion-list *ngFor=\"let  pedido of pedidos\" >\n    <ion-item>\n      <ion-input class=\"ion-text-center\" type=\"text\"  [(ngModel)]=\"pedido.Nombre\" name=\"{{pedido.Nombre}}\"></ion-input>\n      <ion-input class=\"ion-text-center\" type=\"text\"  [(ngModel)]=\"pedido.cant\" name=\"{{pedido.Cant}}\"></ion-input>\n      <ion-input class=\"ion-text-center\" type=\"text\"  [(ngModel)]=\"pedido.total\" name=\"{{pedido.total}}\"></ion-input>\n      <ion-datetime class=\"ion-text-center\" [(ngModel)]=\"pedido.Fecha\" name=\"{{pedido.Fecha}}\" displayFormat=\"D MMM YYYY\"  pickerFormat=\"YYYY-MM-DD\" placeholder=\"Fecha de venta\" ></ion-datetime>\n\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <ion-button  (click)=\"generarVenta()\" shape=\"round\"  color=\"secondary\" expand=\"full\">Guardar venta</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/detail-prima/detail-prima.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/detail-prima/detail-prima.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailPrimaDetailPrimaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1wcmltYS9kZXRhaWwtcHJpbWEucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/detail-prima/detail-prima.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/detail-prima/detail-prima.page.ts ***!
    \***************************************************/

  /*! exports provided: DetailPrimaPage */

  /***/
  function srcAppDetailPrimaDetailPrimaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPrimaPage", function () {
      return DetailPrimaPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../config.service */
    "./src/app/config.service.ts");

    var DetailPrimaPage = /*#__PURE__*/function () {
      function DetailPrimaPage(host, http, params, modal, form) {
        var _this = this;

        _classCallCheck(this, DetailPrimaPage);

        this.host = host;
        this.http = http;
        this.params = params;
        this.modal = modal;
        this.form = form;
        this.Nombre = '';

        if (params.data.items != null) {
          this.selectItem = params.data.items;
        } else {
          this.selectItem = {
            Id: null,
            Nombre: "",
            Precio: 0,
            Unidad: "U"
          };
        }

        this.http.post(this.host.getHost() + '/historycost', this.selectItem).subscribe(function (data) {
          _this.items = data;
        });
      }

      _createClass(DetailPrimaPage, [{
        key: "navBack",
        value: function navBack() {
          this.modal.dismiss();
        }
      }, {
        key: "save",
        value: function save() {
          if (this.selectItem.Id != null) {
            this.http.post(this.host.getHost() + '/UpdatePrima', this.selectItem).subscribe(function (data) {
              console.log(data['_body']);
            }, function (error) {
              console.log(error);
            });
          } else {
            this.http.post(this.host.getHost() + '/InsertPrima', this.selectItem).subscribe(function (data) {
              console.log(data['_body']);
            }, function (error) {
              console.log(error);
            });
          }

          this.navBack();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DetailPrimaPage;
    }();

    DetailPrimaPage.ctorParameters = function () {
      return [{
        type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
      }];
    };

    DetailPrimaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail-prima',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail-prima.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-prima/detail-prima.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail-prima.page.scss */
      "./src/app/detail-prima/detail-prima.page.scss"))["default"]]
    })], DetailPrimaPage);
    /***/
  },

  /***/
  "./src/app/detailalmacen/detailalmacen.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/detailalmacen/detailalmacen.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailalmacenDetailalmacenPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbGFsbWFjZW4vZGV0YWlsYWxtYWNlbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/detailalmacen/detailalmacen.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/detailalmacen/detailalmacen.page.ts ***!
    \*****************************************************/

  /*! exports provided: DetailalmacenPage */

  /***/
  function srcAppDetailalmacenDetailalmacenPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailalmacenPage", function () {
      return DetailalmacenPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../config.service */
    "./src/app/config.service.ts");

    var DetailalmacenPage = /*#__PURE__*/function () {
      function DetailalmacenPage(host, http, params, modal, form) {
        _classCallCheck(this, DetailalmacenPage);

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

      _createClass(DetailalmacenPage, [{
        key: "navBack",
        value: function navBack() {
          this.modal.dismiss();
        }
      }, {
        key: "insertAlmacen",
        value: function insertAlmacen() {
          var _this2 = this;

          this.http.post(this.host.getHost() + '/insertAlmacen', this.selectItem).subscribe(function (data) {
            _this2.detailAlmacen();

            _this2.disponibilidadAlmacen();
          });
        }
      }, {
        key: "detailAlmacen",
        value: function detailAlmacen() {
          var _this3 = this;

          this.http.post(this.host.getHost() + '/detailAlmacen', this.selectItem).subscribe(function (data) {
            _this3.items = data;
          });
        }
      }, {
        key: "disponibilidadAlmacen",
        value: function disponibilidadAlmacen() {
          var _this4 = this;

          this.http.get(this.host.getHost() + '/DisponibilidadAlmacen').subscribe(function (data) {
            data.forEach(function (element) {
              if (element.Id == _this4.selectItem.Id) {
                _this4.selectItem = element;
                _this4.selectItem.cant = 0;
                _this4.selectItem.Fecha = Date();
              }
            });
          });
        }
      }]);

      return DetailalmacenPage;
    }();

    DetailalmacenPage.ctorParameters = function () {
      return [{
        type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
      }];
    };

    DetailalmacenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detailalmacen',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detailalmacen.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detailalmacen/detailalmacen.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detailalmacen.page.scss */
      "./src/app/detailalmacen/detailalmacen.page.scss"))["default"]]
    })], DetailalmacenPage);
    /***/
  },

  /***/
  "./src/app/explore-container/explore-container.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/explore-container/explore-container.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExploreContainerExploreContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvQzpcXFVzZXJzXFxqaWdtYVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXHJlc0Fway9zcmNcXGFwcFxcZXhwbG9yZS1jb250YWluZXJcXGV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/explore-container/explore-container.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/explore-container/explore-container.component.ts ***!
    \******************************************************************/

  /*! exports provided: ExploreContainerComponent */

  /***/
  function srcAppExploreContainerExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
      return ExploreContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExploreContainerComponent = /*#__PURE__*/function () {
      function ExploreContainerComponent() {
        _classCallCheck(this, ExploreContainerComponent);
      }

      _createClass(ExploreContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExploreContainerComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ExploreContainerComponent.prototype, "name", void 0);
    ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-explore-container',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./explore-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./explore-container.component.scss */
      "./src/app/explore-container/explore-container.component.scss"))["default"]]
    })], ExploreContainerComponent);
    /***/
  },

  /***/
  "./src/app/explore-container/explore-container.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/explore-container/explore-container.module.ts ***!
    \***************************************************************/

  /*! exports provided: ExploreContainerComponentModule */

  /***/
  function srcAppExploreContainerExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
      return ExploreContainerComponentModule;
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


    var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./explore-container.component */
    "./src/app/explore-container/explore-container.component.ts");

    var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
      _classCallCheck(this, ExploreContainerComponentModule);
    };

    ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
      exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })], ExploreContainerComponentModule);
    /***/
  },

  /***/
  "./src/app/shared/material-filter.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/material-filter.pipe.ts ***!
    \************************************************/

  /*! exports provided: materialFilterPipe */

  /***/
  function srcAppSharedMaterialFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "materialFilterPipe", function () {
      return materialFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var materialFilterPipe = /*#__PURE__*/function () {
      function materialFilterPipe() {
        _classCallCheck(this, materialFilterPipe);
      }

      _createClass(materialFilterPipe, [{
        key: "transform",
        value: function transform(items, filter) {
          var _this5 = this;

          if (!items || !filter) {
            return items;
          } // filter items array, items which match and return true will be kept, false will be filtered out


          return items.filter(function (item) {
            return _this5.applyFilter(item, filter);
          });
        }
        /**
         * Perform the filtering.
         *
         * @param {material} material The material to compare to the filter.
         * @param {material} filter The filter to apply.
         * @return {boolean} True if material satisfies filters, false if not.
         */

      }, {
        key: "applyFilter",
        value: function applyFilter(material, filter) {
          for (var field in filter) {
            if (filter[field]) {
              if (typeof filter[field] === 'string') {
                if (material[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                  return false;
                }
              } else if (typeof filter[field] === 'number') {
                if (material[field] !== filter[field]) {
                  return false;
                }
              }
            }
          }

          return true;
        }
      }]);

      return materialFilterPipe;
    }();

    materialFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'materialfilter',
      pure: false
    })], materialFilterPipe);
    /***/
  },

  /***/
  "./src/app/shared/material.ts":
  /*!************************************!*\
    !*** ./src/app/shared/material.ts ***!
    \************************************/

  /*! exports provided: material */

  /***/
  function srcAppSharedMaterialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "material", function () {
      return material;
    });
    /**
     * Book entity, used for filtering as well.
     */


    var material = function material() {
      _classCallCheck(this, material);
    };
    /***/

  },

  /***/
  "./src/app/ventas/ventas.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/ventas/ventas.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppVentasVentasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbnRhcy92ZW50YXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ventas/ventas.page.ts":
  /*!***************************************!*\
    !*** ./src/app/ventas/ventas.page.ts ***!
    \***************************************/

  /*! exports provided: VentasPage */

  /***/
  function srcAppVentasVentasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentasPage", function () {
      return VentasPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../config.service */
    "./src/app/config.service.ts");

    var VentasPage = /*#__PURE__*/function () {
      function VentasPage(host, http, modal) {
        var _this6 = this;

        _classCallCheck(this, VentasPage);

        this.host = host;
        this.http = http;
        this.modal = modal;
        this.http.get(this.host.getHost() + '/selectElabora').subscribe(function (data) {
          _this6.items = data;
        });
        this.pedidos = [];
        this.cant = 0;
        this.fecha = Date();
      }

      _createClass(VentasPage, [{
        key: "OnInit",
        value: function OnInit() {}
      }, {
        key: "addItem",
        value: function addItem(item) {
          item.cant = this.cant;
          item.Fecha = this.fecha;
          this.pedidos.push(item);
        }
      }, {
        key: "generarVenta",
        value: function generarVenta() {
          console.log(this.pedidos);
          this.http.post(this.host.getHost() + '/insertVentas', {
            produc: this.pedidos
          }).subscribe(function (data) {});
          this.navBack();
        }
      }, {
        key: "navBack",
        value: function navBack() {
          this.modal.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VentasPage;
    }();

    VentasPage.ctorParameters = function () {
      return [{
        type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    VentasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ventas',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ventas.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ventas/ventas.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ventas.page.scss */
      "./src/app/ventas/ventas.page.scss"))["default"]]
    })], VentasPage);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map