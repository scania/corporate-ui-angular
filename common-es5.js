(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/corporate-ui/dist/esm-es5/themeStyle-9950d74a.js":
/*!***********************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm-es5/themeStyle-9950d74a.js ***!
  \***********************************************************************/
/*! exports provided: t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return themeStyle; });
function themeStyle(currentTheme, tagName, styleThis, el) {
    var css = currentTheme ? currentTheme.components[tagName] : '';
    var style;
    if (!styleThis)
        return;
    // This is used by browsers with support for shadowdom
    if (el.shadowRoot.adoptedStyleSheets) {
        style = new CSSStyleSheet();
        style.replaceSync(css);
        // TODO: We should not take first index we should all except the previous style
        el.shadowRoot.adoptedStyleSheets = [el.shadowRoot.adoptedStyleSheets[0], style];
    }
    else {
        var node = el.shadowRoot || el;
        style = el.querySelector('#themeStyle') || document.createElement('style');
        // style.appendChild(document.createTextNode(css));
        // style.innerHTML = css;
        style.id = 'themeStyle';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        }
        else {
            style.appendChild(document.createTextNode(css));
        }
        if (!node.querySelector('#themeStyle')) {
            node.insertBefore(style, node.firstChild.nextSibling);
        }
    }
}



/***/ }),

/***/ "./node_modules/corporate-ui/dist/esm-es5/util-75cdeb64.js":
/*!*****************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm-es5/util-75cdeb64.js ***!
  \*****************************************************************/
/*! exports provided: U */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return Util; });
/* harmony import */ var _jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery-2579d7a8.js */ "./node_modules/corporate-ui/dist/esm-es5/jquery-2579d7a8.js");

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Private TransitionEnd Helpers
 * ------------------------------------------------------------------------
 */
var TRANSITION_END = 'transitionend';
var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
}
function getSpecialTransitionEndEvent() {
    return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function (event) {
            if (Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target).is(this)) {
                return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
            }
            return undefined; // eslint-disable-line no-undefined
        }
    };
}
function transitionEndEmulator(duration) {
    var _this = this;
    var called = false;
    Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).one(Util.TRANSITION_END, function () {
        called = true;
    });
    setTimeout(function () {
        if (!called) {
            Util.triggerTransitionEnd(_this);
        }
    }, duration);
    return this;
}
function setTransitionEndSupport() {
    _jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"].fn.emulateTransitionEnd = transitionEndEmulator;
    _jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
}
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */
var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function (prefix) {
        do {
            // eslint-disable-next-line no-bitwise
            prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));
        return prefix;
    },
    getSelectorFromElement: function (element) {
        var selector = element.getAttribute('data-target');
        if (!selector || selector === '#') {
            var hrefAttr = element.getAttribute('href');
            selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
        }
        try {
            return document.querySelector(selector) ? selector : null;
        }
        catch (err) {
            return null;
        }
    },
    getTransitionDurationFromElement: function (element) {
        if (!element) {
            return 0;
        }
        // Get transition-duration of the element
        var transitionDuration = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).css('transition-duration');
        var transitionDelay = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).css('transition-delay');
        var floatTransitionDuration = parseFloat(transitionDuration);
        var floatTransitionDelay = parseFloat(transitionDelay);
        // Return 0 if element or transition duration is not found
        if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
        }
        // If multiple durations are defined, take the first
        transitionDuration = transitionDuration.split(',')[0];
        transitionDelay = transitionDelay.split(',')[0];
        return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function (element) {
        return element.offsetHeight;
    },
    triggerTransitionEnd: function (element) {
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function () {
        return Boolean(TRANSITION_END);
    },
    isElement: function (obj) {
        return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function (componentName, config, configTypes) {
        for (var property in configTypes) {
            if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
                var expectedTypes = configTypes[property];
                var value = config[property];
                var valueType = value && Util.isElement(value)
                    ? 'element' : toType(value);
                if (!new RegExp(expectedTypes).test(valueType)) {
                    throw new Error(componentName.toUpperCase() + ": " +
                        ("Option \"" + property + "\" provided type \"" + valueType + "\" ") +
                        ("but expected type \"" + expectedTypes + "\"."));
                }
            }
        }
    },
    findShadowRoot: function (element) {
        if (!document.documentElement.attachShadow) {
            return null;
        }
        // Can find the shadow root otherwise it'll return the document
        if (typeof element.getRootNode === 'function') {
            var root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
        }
        if (element instanceof ShadowRoot) {
            return element;
        }
        // when we don't find a shadow root
        if (!element.parentNode) {
            return null;
        }
        return Util.findShadowRoot(element.parentNode);
    }
};
setTransitionEndSupport();



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map