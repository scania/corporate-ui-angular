(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/corporate-ui/dist/esm-es5/c-icon.entry.js":
/*!****************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm-es5/c-icon.entry.js ***!
  \****************************************************************/
/*! exports provided: c_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_icon", function() { return Icon; });
/* harmony import */ var _core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-dafe424f.js */ "./node_modules/corporate-ui/dist/esm-es5/core-dafe424f.js");
/* harmony import */ var _themeStyle_1eba4ba6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themeStyle-1eba4ba6.js */ "./node_modules/corporate-ui/dist/esm-es5/themeStyle-1eba4ba6.js");


var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.name = 'question';
        this.currentTheme = { icons: {}, components: [] };
        this.ContextStore = Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "store");
    }
    Icon.prototype.setTheme = function (name) {
        if (name === void 0) { name = undefined; }
        this.theme = name || this.store.getState().theme.current;
        this.currentTheme = this.store.getState().theme.items[this.theme];
        // If no theme is used then we return;
        if (!name)
            return;
        // Only setIcons when there is a theme
        this.setIcon();
    };
    Icon.prototype.setIcon = function (name) {
        if (name === void 0) { name = this.name; }
        if (!this.store.getState().theme.items[this.theme]) {
            console.warn('No icons in this packages');
            return;
        }
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
        this.store.subscribe(function () {
            _this.theme = _this.store.getState().theme.current;
            _this.currentTheme = _this.store.getState().theme[_this.theme];
            Object(_themeStyle_1eba4ba6_js__WEBPACK_IMPORTED_MODULE_1__["t"])(_this.currentTheme, _this.tagName, _this.style, _this.el);
        });
        if (!(this.el && this.el.nodeName))
            return;
        this.tagName = this.el.nodeName.toLowerCase();
    };
    Icon.prototype.componentDidLoad = function () {
        this.style = this.el.shadowRoot['adoptedStyleSheets'] || [];
        Object(_themeStyle_1eba4ba6_js__WEBPACK_IMPORTED_MODULE_1__["t"])(this.currentTheme, this.tagName, this.style, this.el);
    };
    Icon.prototype.render = function () {
        return [
            Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: "0 0 " + (this.icon ? this.icon.width : '0') + " " + (this.icon ? this.icon.height : '0') }, Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { fill: 'currentColor', d: this.icon ? this.icon.definition : '' })),
        ];
    };
    Object.defineProperty(Icon.prototype, "el", {
        get: function () { return Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
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
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;vertical-align:middle;line-height:0}:host svg{height:1em;width:1em;fill:currentColor}"; },
        enumerable: true,
        configurable: true
    });
    return Icon;
}());



/***/ })

}]);
//# sourceMappingURL=11-es5.js.map