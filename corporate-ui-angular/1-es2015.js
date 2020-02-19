(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/corporate-ui/dist/esm/c-content.entry.js":
/*!***************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm/c-content.entry.js ***!
  \***************************************************************/
/*! exports provided: c_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_content", function() { return Content; });
/* harmony import */ var _core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-18aa72ad.js */ "./node_modules/corporate-ui/dist/esm/core-18aa72ad.js");


const Content = class {
    constructor(hostRef) {
        Object(_core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.currentTheme = { components: [] };
        this.ContextStore = Object(_core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "store");
    }
    setTheme(name = undefined) {
        this.theme = name || this.store.getState().theme.current;
        this.currentTheme = this.store.getState().theme.items[this.theme];
    }
    componentWillLoad() {
        this.store = this.ContextStore || window.CorporateUi.store;
        this.setTheme(this.theme);
        this.store.subscribe(() => this.setTheme());
        if (!(this.el && this.el.nodeName))
            return;
        this.tagName = this.el.nodeName.toLowerCase();
    }
    render() {
        return [
            this.currentTheme ? Object(_core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("style", null, this.currentTheme.components[this.tagName]) : '',
            // Move the router related things a router component
            // if (this.router) {
            //   return (
            //     <stencil-router>
            //       <stencil-route-switch scrollTopOffset={0}>
            //         <stencil-route url='/' component='app-home' exact={true} />
            //         <stencil-route url='/profile/:name' component='app-profile' />
            //       </stencil-route-switch>
            //     </stencil-router>
            //   );
            // } else {
            Object(_core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null),
        ];
    }
    get el() { return Object(_core_18aa72ad_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this); }
    static get watchers() { return {
        "theme": ["setTheme"]
    }; }
    static get style() { return ":host,\n:host *,\n:host *::before,\n:host *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n/*::slotted(section) {\n  color: var(--danger) !important;\n}\n\n::slotted(section) div {\n  color: yellow !important;\n}*/"; }
};




/***/ })

}]);
//# sourceMappingURL=1-es2015.js.map