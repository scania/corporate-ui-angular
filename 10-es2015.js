(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/corporate-ui/dist/esm/c-hello-world.entry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm/c-hello-world.entry.js ***!
  \*******************************************************************/
/*! exports provided: c_hello_world */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_hello_world", function() { return HelloWorld; });
/* harmony import */ var _core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-dafe424f.js */ "./node_modules/corporate-ui/dist/esm/core-dafe424f.js");


const HelloWorld = class {
    constructor(hostRef) {
        Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.text = 'Hello World';
    }
    render() {
        return (Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", null, this.text, " component")));
    }
    static get style() { return ".fade{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}\@media (prefers-reduced-motion:reduce){.fade{-webkit-transition:none;transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;transition:height .35s ease}\@media (prefers-reduced-motion:reduce){.collapsing{-webkit-transition:none;transition:none}}:host{display:block;color:red;font-size:20px;background-color:#000;overflow:hidden}"; }
};




/***/ })

}]);
//# sourceMappingURL=10-es2015.js.map