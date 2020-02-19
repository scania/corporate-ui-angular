(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/corporate-ui/dist/esm/c-icon.entry.js":
/*!************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm/c-icon.entry.js ***!
  \************************************************************/
/*! exports provided: c_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_icon", function() { return Icon; });
/* harmony import */ var _core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-18aa72ad.js */ "./node_modules/corporate-ui/dist/esm/core-18aa72ad.js");


const Icon = class {
    constructor(hostRef) {
        Object(_core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.name = 'question';
        this.currentTheme = { icons: {}, components: [] };
        this.ContextStore = Object(_core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "store");
    }
    setTheme() {
        this.theme = this.store.getState().theme.current;
        this.setIcon();
    }
    setIcon(name = this.name) {
        const items = this.store.getState().theme.items[this.theme].icons;
        // TODO: We should have the default icon being a simple
        // square instead of first icon in the collection
        this.icon = items[name] || items.question || items[Object.keys(items)[0]] || { width: 0, height: 0 };
    }
    componentWillLoad() {
        this.store = this.ContextStore || window.CorporateUi.store;
        this.theme = this.store.getState().theme.current;
        this.currentTheme = this.store.getState().theme[this.theme];
        this.setIcon();
        this.store.subscribe(() => {
            this.theme = this.store.getState().theme.current;
            this.currentTheme = this.store.getState().theme[this.theme];
        });
        if (!(this.el && this.el.nodeName))
            return;
        this.tagName = this.el.nodeName.toLowerCase();
    }
    render() {
        return [
            this.currentTheme ? Object(_core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("style", null, this.currentTheme.components[this.tagName]) : '',
            Object(_core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: `0 0 ${this.icon.width} ${this.icon.height}` }, Object(_core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { fill: 'currentColor', d: this.icon.definition })),
        ];
    }
    get el() { return Object(_core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this); }
    static get watchers() { return {
        "theme": ["setTheme"],
        "name": ["setIcon"]
    }; }
    static get style() { return ":host,\n:host *,\n:host *::before,\n:host *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 0;\n}\n:host svg {\n  height: 1em;\n  width: 1em;\n  fill: currentColor;\n}"; }
};




/***/ })

}]);
//# sourceMappingURL=7-es2015.js.map