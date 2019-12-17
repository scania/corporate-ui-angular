(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/corporate-ui/dist/esm/c-hello-world.entry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm/c-hello-world.entry.js ***!
  \*******************************************************************/
/*! exports provided: c_hello_world */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_hello_world", function() { return HelloWorld; });
/* harmony import */ var _core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-7b39e2be.js */ "./node_modules/corporate-ui/dist/esm/core-7b39e2be.js");


const HelloWorld = class {
    constructor(hostRef) {
        Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.text = 'Hello World';
    }
    render() {
        return (Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", null, this.text, " component")));
    }
    static get style() { return ".fade {\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n\@media (prefers-reduced-motion: reduce) {\n  .fade {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height 0.35s ease;\n  transition: height 0.35s ease;\n}\n\@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n\n:host {\n  display: block;\n  color: red;\n  font-size: 20px;\n  background-color: black;\n  overflow: hidden;\n}"; }
};




/***/ })

}]);
//# sourceMappingURL=6-es2015.js.map