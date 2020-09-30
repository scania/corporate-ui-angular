(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/corporate-ui/dist/esm/themeStyle-1eba4ba6.js":
/*!*******************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm/themeStyle-1eba4ba6.js ***!
  \*******************************************************************/
/*! exports provided: t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return themeStyle; });
function themeStyle(currentTheme, tagName, styleThis, el) {
    /*
      Helper function that will appened a stylesheet with scoped styling for specific component
      either in the shadowRoot with adoptedStyleSheet API
      or with a fallback method (IE,Old edge and so on)
    */
    let style;
    const css = currentTheme ? currentTheme.components[tagName] : '';
    // Fallback for currentTheme, initially empty or the currentTheme doesn't contain a version property
    if (!currentTheme || !currentTheme.version || !styleThis) {
        return;
    }
    // If the browser has support for adoptedStyleSheet (Chromium)
    if (el.shadowRoot.adoptedStyleSheets) {
        style = new CSSStyleSheet();
        style.replaceSync(css);
        // TODO: We should not take first index we should all except the previous style
        el.shadowRoot.adoptedStyleSheets = [el.shadowRoot.adoptedStyleSheets[0], style];
    }
    else {
        // Fallback for browsers without adoptedStyleSheet API suppport
        const node = el.shadowRoot || el;
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

/***/ "./node_modules/corporate-ui/dist/esm/util-75cdeb64.js":
/*!*************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm/util-75cdeb64.js ***!
  \*************************************************************/
/*! exports provided: U */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return Util; });
/* harmony import */ var _jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery-2579d7a8.js */ "./node_modules/corporate-ui/dist/esm/jquery-2579d7a8.js");


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

const TRANSITION_END = 'transitionend';
const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;

// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function toType(obj) {
  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase()
}

function getSpecialTransitionEndEvent() {
  return {
    bindType: TRANSITION_END,
    delegateType: TRANSITION_END,
    handle(event) {
      if (Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target).is(this)) {
        return event.handleObj.handler.apply(this, arguments) // eslint-disable-line prefer-rest-params
      }
      return undefined // eslint-disable-line no-undefined
    }
  }
}

function transitionEndEmulator(duration) {
  let called = false;

  Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).one(Util.TRANSITION_END, () => {
    called = true;
  });

  setTimeout(() => {
    if (!called) {
      Util.triggerTransitionEnd(this);
    }
  }, duration);

  return this
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

const Util = {

  TRANSITION_END: 'bsTransitionEnd',

  getUID(prefix) {
    do {
      // eslint-disable-next-line no-bitwise
      prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
    } while (document.getElementById(prefix))
    return prefix
  },

  getSelectorFromElement(element) {
    let selector = element.getAttribute('data-target');

    if (!selector || selector === '#') {
      const hrefAttr = element.getAttribute('href');
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
    }

    try {
      return document.querySelector(selector) ? selector : null
    } catch (err) {
      return null
    }
  },

  getTransitionDurationFromElement(element) {
    if (!element) {
      return 0
    }

    // Get transition-duration of the element
    let transitionDuration = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).css('transition-duration');
    let transitionDelay = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).css('transition-delay');

    const floatTransitionDuration = parseFloat(transitionDuration);
    const floatTransitionDelay = parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];

    return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER
  },

  reflow(element) {
    return element.offsetHeight
  },

  triggerTransitionEnd(element) {
    Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).trigger(TRANSITION_END);
  },

  // TODO: Remove in v5
  supportsTransitionEnd() {
    return Boolean(TRANSITION_END)
  },

  isElement(obj) {
    return (obj[0] || obj).nodeType
  },

  typeCheckConfig(componentName, config, configTypes) {
    for (const property in configTypes) {
      if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
        const expectedTypes = configTypes[property];
        const value         = config[property];
        const valueType     = value && Util.isElement(value)
          ? 'element' : toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new Error(
            `${componentName.toUpperCase()}: ` +
            `Option "${property}" provided type "${valueType}" ` +
            `but expected type "${expectedTypes}".`)
        }
      }
    }
  },

  findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null
    }

    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null
    }

    if (element instanceof ShadowRoot) {
      return element
    }

    // when we don't find a shadow root
    if (!element.parentNode) {
      return null
    }

    return Util.findShadowRoot(element.parentNode)
  }
};

setTransitionEndSupport();




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map