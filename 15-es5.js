(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/corporate-ui/dist/esm-es5/c-theme.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm-es5/c-theme.entry.js ***!
  \*****************************************************************/
/*! exports provided: c_theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_theme", function() { return Theme; });
/* harmony import */ var _core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-dafe424f.js */ "./node_modules/corporate-ui/dist/esm-es5/core-dafe424f.js");

var version = "4.1.2";
var Theme = /** @class */ (function () {
    function Theme(hostRef) {
        Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** By setting this to true bootstrap classes will be accessable globally */
        this.global = false;
        this.currentTheme = { favicons: [], components: [] };
        this.ContextStore = Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "store");
    }
    Theme.prototype.setName = function (name) {
        this.setTheme(name);
        this.store.dispatch({ type: _core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["d"].SET_THEME, current: name });
    };
    Theme.prototype.setGlobal = function (global) {
        this.store.dispatch({ type: _core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["d"].SET_GLOBAL, global: global });
    };
    Theme.prototype.setTheme = function (name) {
        if (name === void 0) { name = undefined; }
        this.name = name || this.store.getState().theme.current;
        this.currentTheme = this.store.getState().theme.items[this.name];
        this.favicons = this.currentTheme ? this.currentTheme.favicons : undefined;
    };
    Theme.prototype.renderFavicon = function () {
        if (document.head.querySelector('link[rel=icon]'))
            return;
        var container = document.createElement('div');
        container.innerHTML = this.favicons.join('');
        for (var i = 0; i < container.children.length; i += 1) {
            var node = container.children[i];
            document.head.appendChild(node.cloneNode(true));
        }
    };
    Theme.prototype.componentWillLoad = function () {
        var _this = this;
        this.store = this.ContextStore || window.CorporateUi.store;
        this.setName(this.name);
        this.setGlobal(this.global);
        this.store.subscribe(function () { return _this.setTheme(); });
        window.CorporateUi = Object.assign(Object.assign({}, window.CorporateUi), { version: version });
        document.documentElement.setAttribute('corporate-ui-version', version);
        if (!(this.el && this.el.nodeName))
            return;
        this.tagName = this.el.nodeName.toLowerCase();
    };
    Theme.prototype.render = function () {
        if (this.currentTheme !== undefined && this.currentTheme['version'] !== undefined) {
            document.documentElement.setAttribute("theme", this.name + "-theme v" + this.currentTheme['version']);
        }
        else {
            document.documentElement.setAttribute("theme", '-');
        }
        if (this.favicons) {
            this.renderFavicon();
        }
        return [
            this.currentTheme ? Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("style", null, this.currentTheme.components[this.tagName]) : '',
            this.global ? Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("c-global-style", null) : Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("style", Object.assign({}, { innerHTML: 'html body { visibility: visible }' })),
        ];
    };
    Object.defineProperty(Theme.prototype, "el", {
        get: function () { return Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Theme, "watchers", {
        get: function () {
            return {
                "name": ["setName"],
                "global": ["setGlobal"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Theme, "style", {
        get: function () { return ":root{font-size:62.5%;--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}body[data-env]:before{background-color:#ddd;border:2px solid #fafafa;display:inline-block;font-size:14px;font-weight:700;padding:52px 50px 2px;content:attr(data-env);position:fixed;top:0;left:0;z-index:1170;-ms-transform:translateY(-50%) translateX(-50%) rotate(-45deg);-moz-transform:translateY(-50%) translateX(-50%) rotate(-45deg);-webkit-transform:translateY(-50%) translateX(-50%) rotate(-45deg);-o-transform:translateY(-50%) translateX(-50%) rotate(-45deg);transform:translateY(-50%) translateX(-50%) rotate(-45deg);text-transform:uppercase}body[data-env=\"\"]:before,body[data-env=hidden]:before,body[data-env=prod]:before,body[data-env=production]:before{display:none}body[data-env=development]:before{content:\"dev\"}"; },
        enumerable: true,
        configurable: true
    });
    return Theme;
}());



/***/ })

}]);
//# sourceMappingURL=15-es5.js.map