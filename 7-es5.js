(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/corporate-ui/dist/esm-es5/c-icon.entry.js":
/*!****************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm-es5/c-icon.entry.js ***!
  \****************************************************************/
/*! exports provided: c_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_icon", function() { return Icon; });
/* harmony import */ var _core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-7b39e2be.js */ "./node_modules/corporate-ui/dist/esm-es5/core-7b39e2be.js");

var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.name = 'question';
        this.currentTheme = { icons: {}, components: [] };
        this.ContextStore = Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "store");
    }
    Icon.prototype.setTheme = function () {
        this.theme = this.store.getState().theme.current;
        this.setIcon();
    };
    Icon.prototype.setIcon = function (name) {
        if (name === void 0) { name = this.name; }
        var items = this.store.getState().theme.items[this.theme].icons;
        // TODO: We should have the default icon being a simple
        // square instead of first icon in the collection
        this.icon = items[name] || items.question || items[Object.keys(items)[0]] || { width: 0, height: 0 };
    };
    Icon.prototype.componentWillLoad = function () {
        var _this = this;
        this.store = this.ContextStore || window.CorporateUi.store;
        this.theme = this.store.getState().theme.current;
        this.currentTheme = this.store.getState().theme[this.theme];
        this.setIcon();
        this.store.subscribe(function () {
            _this.theme = _this.store.getState().theme.current;
            _this.currentTheme = _this.store.getState().theme[_this.theme];
        });
        if (!(this.el && this.el.nodeName))
            return;
        this.tagName = this.el.nodeName.toLowerCase();
    };
    Icon.prototype.render = function () {
        return [
            this.currentTheme ? Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("style", null, this.currentTheme.components[this.tagName]) : '',
            Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: "0 0 " + this.icon.width + " " + this.icon.height }, Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { fill: 'currentColor', d: this.icon.definition })),
        ];
    };
    Object.defineProperty(Icon.prototype, "el", {
        get: function () { return Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "watchers", {
        get: function () {
            return {
                "theme": ["setTheme"],
                "name": ["setIcon"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "style", {
        get: function () { return ":host {\n  display: Var(--display);\n}\n:host,\n:host *,\n:host *::before,\n:host *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 0;\n}\n:host svg {\n  height: 1em;\n  width: 1em;\n  fill: currentColor;\n}"; },
        enumerable: true,
        configurable: true
    });
    return Icon;
}());



/***/ })

}]);
//# sourceMappingURL=7-es5.js.map