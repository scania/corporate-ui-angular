(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/corporate-ui/dist/esm-es5/c-dealer-header.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm-es5/c-dealer-header.entry.js ***!
  \*************************************************************************/
/*! exports provided: c_dealer_header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_dealer_header", function() { return DealerHeader; });
/* harmony import */ var _core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-dafe424f.js */ "./node_modules/corporate-ui/dist/esm-es5/core-dafe424f.js");
/* harmony import */ var _themeStyle_9950d74a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themeStyle-9950d74a.js */ "./node_modules/corporate-ui/dist/esm-es5/themeStyle-9950d74a.js");


var DealerHeader = /** @class */ (function () {
    function DealerHeader(hostRef) {
        Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** A link that will be applied to the site-name */
        this.siteUrl = '/';
        this.currentTheme = { components: [] };
        this.ContextStore = Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "store");
    }
    DealerHeader.prototype.setTheme = function (name) {
        if (name === void 0) { name = undefined; }
        this.theme = name || this.store.getState().theme.current;
        this.currentTheme = this.store.getState().theme.items[this.theme];
    };
    DealerHeader.prototype.componentWillLoad = function () {
        var _this = this;
        this.store = this.ContextStore || window.CorporateUi.store;
        this.setTheme(this.theme);
        this.store.subscribe(function () {
            _this.setTheme();
            Object(_themeStyle_9950d74a_js__WEBPACK_IMPORTED_MODULE_1__["t"])(_this.currentTheme, _this.tagName, _this.style, _this.el);
        });
        if (!(this.el && this.el.nodeName))
            return;
        this.tagName = this.el.nodeName.toLowerCase();
    };
    DealerHeader.prototype.componentDidLoad = function () {
        this.style = this.el.shadowRoot['adoptedStyleSheets'] || [];
        Object(_themeStyle_9950d74a_js__WEBPACK_IMPORTED_MODULE_1__["t"])(this.currentTheme, this.tagName, this.style, this.el);
    };
    DealerHeader.prototype.render = function () {
        return [
            Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("c-header", { "site-name": this.siteName, "short-name": this.shortName, "site-url": this.siteUrl, variation: 'dealer' }, this.logo
                ? Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.logo, alt: this.siteName, slot: 'brand-logo' })
                : Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("strong", { class: 'navbar-title', slot: 'brand-logo' }, this.siteName), Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'items', slot: 'items' })),
        ];
    };
    Object.defineProperty(DealerHeader.prototype, "el", {
        get: function () { return Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DealerHeader, "watchers", {
        get: function () {
            return {
                "theme": ["setTheme"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DealerHeader, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}img{max-height:30px}"; },
        enumerable: true,
        configurable: true
    });
    return DealerHeader;
}());



/***/ })

}]);
//# sourceMappingURL=5-es5.js.map