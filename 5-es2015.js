(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/corporate-ui/dist/esm/c-dealer-header.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm/c-dealer-header.entry.js ***!
  \*********************************************************************/
/*! exports provided: c_dealer_header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_dealer_header", function() { return DealerHeader; });
/* harmony import */ var _core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-dafe424f.js */ "./node_modules/corporate-ui/dist/esm/core-dafe424f.js");
/* harmony import */ var _themeStyle_1eba4ba6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themeStyle-1eba4ba6.js */ "./node_modules/corporate-ui/dist/esm/themeStyle-1eba4ba6.js");



const DealerHeader = class {
    constructor(hostRef) {
        Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** A link that will be applied to the site-name */
        this.siteUrl = '/';
        this.currentTheme = { components: [] };
        this.ContextStore = Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "store");
    }
    setTheme(name = undefined) {
        this.theme = name || this.store.getState().theme.current;
        this.currentTheme = this.store.getState().theme.items[this.theme];
    }
    componentWillLoad() {
        this.store = this.ContextStore || window.CorporateUi.store;
        this.setTheme(this.theme);
        this.store.subscribe(() => {
            this.setTheme();
            Object(_themeStyle_1eba4ba6_js__WEBPACK_IMPORTED_MODULE_1__["t"])(this.currentTheme, this.tagName, this.style, this.el);
        });
        if (!(this.el && this.el.nodeName))
            return;
        this.tagName = this.el.nodeName.toLowerCase();
    }
    componentDidLoad() {
        this.style = this.el.shadowRoot['adoptedStyleSheets'] || [];
        Object(_themeStyle_1eba4ba6_js__WEBPACK_IMPORTED_MODULE_1__["t"])(this.currentTheme, this.tagName, this.style, this.el);
    }
    render() {
        return [
            Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("c-header", { "site-name": this.siteName, "short-name": this.shortName, "site-url": this.siteUrl, variation: 'dealer' }, this.logo
                ? Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.logo, alt: this.siteName, slot: 'brand-logo' })
                : Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("strong", { class: 'navbar-title', slot: 'brand-logo' }, this.siteName), Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'items', slot: 'items' })),
        ];
    }
    get el() { return Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
    static get watchers() { return {
        "theme": ["setTheme"]
    }; }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}img{max-height:30px}"; }
};




/***/ })

}]);
//# sourceMappingURL=5-es2015.js.map