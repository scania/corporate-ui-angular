(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/corporate-ui/dist/esm-es5/c-content.entry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm-es5/c-content.entry.js ***!
  \*******************************************************************/
/*! exports provided: c_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_content", function() { return Content; });
/* harmony import */ var _core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-dafe424f.js */ "./node_modules/corporate-ui/dist/esm-es5/core-dafe424f.js");

var Content = /** @class */ (function () {
    function Content(hostRef) {
        Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.currentTheme = { components: [] };
        this.ContextStore = Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "store");
    }
    Content.prototype.setTheme = function (name) {
        if (name === void 0) { name = undefined; }
        this.theme = name || this.store.getState().theme.current;
        this.currentTheme = this.store.getState().theme.items[this.theme];
    };
    Content.prototype.componentWillLoad = function () {
        var _this = this;
        this.store = this.ContextStore || window.CorporateUi.store;
        this.setTheme(this.theme);
        this.store.subscribe(function () { return _this.setTheme(); });
        if (!(this.el && this.el.nodeName))
            return;
        this.tagName = this.el.nodeName.toLowerCase();
    };
    Content.prototype.render = function () {
        return [
            this.currentTheme ? Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("style", null, this.currentTheme.components[this.tagName]) : '',
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
            Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null),
        ];
    };
    Object.defineProperty(Content.prototype, "el", {
        get: function () { return Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content, "watchers", {
        get: function () {
            return {
                "theme": ["setTheme"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;padding-left:20px;padding-right:20px}"; },
        enumerable: true,
        configurable: true
    });
    return Content;
}());



/***/ })

}]);
//# sourceMappingURL=4-es5.js.map