(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/corporate-ui/dist/esm-es5/c-modal.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm-es5/c-modal.entry.js ***!
  \*****************************************************************/
/*! exports provided: c_modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_modal", function() { return Modal$1; });
/* harmony import */ var _core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-dafe424f.js */ "./node_modules/corporate-ui/dist/esm-es5/core-dafe424f.js");
/* harmony import */ var _commonjsHelpers_97e6d7b1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_commonjsHelpers-97e6d7b1.js */ "./node_modules/corporate-ui/dist/esm-es5/_commonjsHelpers-97e6d7b1.js");
/* harmony import */ var _themeStyle_9950d74a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themeStyle-9950d74a.js */ "./node_modules/corporate-ui/dist/esm-es5/themeStyle-9950d74a.js");
/* harmony import */ var _jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jquery-2579d7a8.js */ "./node_modules/corporate-ui/dist/esm-es5/jquery-2579d7a8.js");
/* harmony import */ var _util_75cdeb64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util-75cdeb64.js */ "./node_modules/corporate-ui/dist/esm-es5/util-75cdeb64.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var NAME = 'modal';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.modal';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = _jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"].fn[NAME];
var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
};
var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
};
var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
};
var ClassName = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
};
var Selector = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
var Modal = /** @class */ (function () {
    function Modal(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        this._dialog = element.querySelector(Selector.DIALOG);
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._isTransitioning = false;
        this._scrollbarWidth = 0;
    }
    Object.defineProperty(Modal, "VERSION", {
        // Getters
        get: function () {
            return VERSION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "Default", {
        get: function () {
            return Default;
        },
        enumerable: true,
        configurable: true
    });
    // Public
    Modal.prototype.toggle = function (relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    };
    Modal.prototype.show = function (relatedTarget) {
        var _this = this;
        if (this._isShown || this._isTransitioning) {
            return;
        }
        if (Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).hasClass(ClassName.FADE)) {
            this._isTransitioning = true;
        }
        var showEvent = _jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"].Event(Event.SHOW, {
            relatedTarget: relatedTarget
        });
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).trigger(showEvent);
        if (this._isShown || showEvent.isDefaultPrevented()) {
            return;
        }
        this._isShown = true;
        this._checkScrollbar();
        this._setScrollbar();
        this._adjustDialog();
        this._setEscapeEvent();
        this._setResizeEvent();
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) { return _this.hide(event); });
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
                if (Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event.target).is(_this._element)) {
                    _this._ignoreBackdropClick = true;
                }
            });
        });
        this._showBackdrop(function () { return _this._showElement(relatedTarget); });
    };
    Modal.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        if (!this._isShown || this._isTransitioning) {
            return;
        }
        var hideEvent = _jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"].Event(Event.HIDE);
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).trigger(hideEvent);
        if (!this._isShown || hideEvent.isDefaultPrevented()) {
            return;
        }
        this._isShown = false;
        var transition = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).hasClass(ClassName.FADE);
        if (transition) {
            this._isTransitioning = true;
        }
        this._setEscapeEvent();
        this._setResizeEvent();
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document).off(Event.FOCUSIN);
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).removeClass(ClassName.SHOW);
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).off(Event.CLICK_DISMISS);
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._dialog).off(Event.MOUSEDOWN_DISMISS);
        if (transition) {
            var transitionDuration = _util_75cdeb64_js__WEBPACK_IMPORTED_MODULE_4__["U"].getTransitionDurationFromElement(this._element);
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element)
                .one(_util_75cdeb64_js__WEBPACK_IMPORTED_MODULE_4__["U"].TRANSITION_END, function (event) { return _this._hideModal(event); })
                .emulateTransitionEnd(transitionDuration);
        }
        else {
            this._hideModal();
        }
    };
    Modal.prototype.dispose = function () {
        [window, this._element, this._dialog]
            .forEach(function (htmlElement) { return Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(htmlElement).off(EVENT_KEY); });
        /**
         * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
         * Do not move `document` in `htmlElements` array
         * It will remove `Event.CLICK_DATA_API` event that should remain
         */
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document).off(Event.FOCUSIN);
        _jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeData(this._element, DATA_KEY);
        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._isTransitioning = null;
        this._scrollbarWidth = null;
    };
    Modal.prototype.handleUpdate = function () {
        this._adjustDialog();
    };
    // Private
    Modal.prototype._getConfig = function (config) {
        config = __assign(__assign({}, Default), config);
        _util_75cdeb64_js__WEBPACK_IMPORTED_MODULE_4__["U"].typeCheckConfig(NAME, config, DefaultType);
        return config;
    };
    Modal.prototype._showElement = function (relatedTarget) {
        var _this = this;
        var transition = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).hasClass(ClassName.FADE);
        if (!this._element.parentNode ||
            this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // Don't move modal's DOM position
            document.body.appendChild(this._element);
        }
        this._element.style.display = 'block';
        this._element.removeAttribute('aria-hidden');
        this._element.setAttribute('aria-modal', true);
        if (Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._dialog).hasClass(ClassName.SCROLLABLE)) {
            this._dialog.querySelector(Selector.MODAL_BODY).scrollTop = 0;
        }
        else {
            this._element.scrollTop = 0;
        }
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).addClass(ClassName.SHOW);
        if (this._config.focus) {
            this._enforceFocus();
        }
        var shownEvent = _jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"].Event(Event.SHOWN, {
            relatedTarget: relatedTarget
        });
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.focus();
            }
            _this._isTransitioning = false;
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this._element).trigger(shownEvent);
        };
        if (transition) {
            var transitionDuration = _util_75cdeb64_js__WEBPACK_IMPORTED_MODULE_4__["U"].getTransitionDurationFromElement(this._dialog);
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._dialog)
                .one(_util_75cdeb64_js__WEBPACK_IMPORTED_MODULE_4__["U"].TRANSITION_END, transitionComplete)
                .emulateTransitionEnd(transitionDuration);
        }
        else {
            transitionComplete();
        }
    };
    Modal.prototype._enforceFocus = function () {
        var _this = this;
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document)
            .off(Event.FOCUSIN) // Guard against infinite focus loop
            .on(Event.FOCUSIN, function (event) {
            if (document !== event.target &&
                _this._element !== event.target &&
                Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this._element).has(event.target).length === 0) {
                _this._element.focus();
            }
        });
    };
    Modal.prototype._setEscapeEvent = function () {
        var _this = this;
        if (this._isShown && this._config.keyboard) {
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
                if (event.which === ESCAPE_KEYCODE) {
                    event.preventDefault();
                    _this.hide();
                }
            });
        }
        else if (!this._isShown) {
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).off(Event.KEYDOWN_DISMISS);
        }
    };
    Modal.prototype._setResizeEvent = function () {
        var _this = this;
        if (this._isShown) {
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(window).on(Event.RESIZE, function (event) { return _this.handleUpdate(event); });
        }
        else {
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(window).off(Event.RESIZE);
        }
    };
    Modal.prototype._hideModal = function () {
        var _this = this;
        this._element.style.display = 'none';
        this._element.setAttribute('aria-hidden', true);
        this._element.removeAttribute('aria-modal');
        this._isTransitioning = false;
        this._showBackdrop(function () {
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.body).removeClass(ClassName.OPEN);
            _this._resetAdjustments();
            _this._resetScrollbar();
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this._element).trigger(Event.HIDDEN);
        });
    };
    Modal.prototype._removeBackdrop = function () {
        if (this._backdrop) {
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._backdrop).remove();
            this._backdrop = null;
        }
    };
    Modal.prototype._showBackdrop = function (callback) {
        var _this = this;
        var animate = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).hasClass(ClassName.FADE)
            ? ClassName.FADE : '';
        if (this._isShown && this._config.backdrop) {
            this._backdrop = document.createElement('div');
            this._backdrop.className = ClassName.BACKDROP;
            if (animate) {
                this._backdrop.classList.add(animate);
            }
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._backdrop).appendTo(document.body);
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).on(Event.CLICK_DISMISS, function (event) {
                if (_this._ignoreBackdropClick) {
                    _this._ignoreBackdropClick = false;
                    return;
                }
                if (event.target !== event.currentTarget) {
                    return;
                }
                if (_this._config.backdrop === 'static') {
                    _this._element.focus();
                }
                else {
                    _this.hide();
                }
            });
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._backdrop).addClass(ClassName.SHOW);
            if (!callback) {
                return;
            }
            if (!animate) {
                callback();
                return;
            }
            var backdropTransitionDuration = _util_75cdeb64_js__WEBPACK_IMPORTED_MODULE_4__["U"].getTransitionDurationFromElement(this._backdrop);
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._backdrop)
                .one(_util_75cdeb64_js__WEBPACK_IMPORTED_MODULE_4__["U"].TRANSITION_END, callback)
                .emulateTransitionEnd(backdropTransitionDuration);
        }
        else if (!this._isShown && this._backdrop) {
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._backdrop).removeClass(ClassName.SHOW);
            var callbackRemove = function () {
                _this._removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._element).hasClass(ClassName.FADE)) {
                var backdropTransitionDuration = _util_75cdeb64_js__WEBPACK_IMPORTED_MODULE_4__["U"].getTransitionDurationFromElement(this._backdrop);
                Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._backdrop)
                    .one(_util_75cdeb64_js__WEBPACK_IMPORTED_MODULE_4__["U"].TRANSITION_END, callbackRemove)
                    .emulateTransitionEnd(backdropTransitionDuration);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    Modal.prototype._adjustDialog = function () {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        if (!this._isBodyOverflowing && isModalOverflowing) {
            this._element.style.paddingLeft = this._scrollbarWidth + "px";
        }
        if (this._isBodyOverflowing && !isModalOverflowing) {
            this._element.style.paddingRight = this._scrollbarWidth + "px";
        }
    };
    Modal.prototype._resetAdjustments = function () {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
    };
    Modal.prototype._checkScrollbar = function () {
        var rect = document.body.getBoundingClientRect();
        this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
    };
    Modal.prototype._setScrollbar = function () {
        var _this = this;
        if (this._isBodyOverflowing) {
            // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
            //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
            var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
            var stickyContent = [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT));
            // Adjust fixed content padding
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(fixedContent).each(function (index, element) {
                var actualPadding = element.style.paddingRight;
                var calculatedPadding = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element).css('padding-right');
                Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element)
                    .data('padding-right', actualPadding)
                    .css('padding-right', parseFloat(calculatedPadding) + _this._scrollbarWidth + "px");
            });
            // Adjust sticky content margin
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(stickyContent).each(function (index, element) {
                var actualMargin = element.style.marginRight;
                var calculatedMargin = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element).css('margin-right');
                Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element)
                    .data('margin-right', actualMargin)
                    .css('margin-right', parseFloat(calculatedMargin) - _this._scrollbarWidth + "px");
            });
            // Adjust body padding
            var actualPadding = document.body.style.paddingRight;
            var calculatedPadding = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.body).css('padding-right');
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.body)
                .data('padding-right', actualPadding)
                .css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
        }
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.body).addClass(ClassName.OPEN);
    };
    Modal.prototype._resetScrollbar = function () {
        // Restore fixed content padding
        var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(fixedContent).each(function (index, element) {
            var padding = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element).data('padding-right');
            Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element).removeData('padding-right');
            element.style.paddingRight = padding ? padding : '';
        });
        // Restore sticky content
        var elements = [].slice.call(document.querySelectorAll("" + Selector.STICKY_CONTENT));
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(elements).each(function (index, element) {
            var margin = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element).data('margin-right');
            if (typeof margin !== 'undefined') {
                Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element).css('margin-right', margin).removeData('margin-right');
            }
        });
        // Restore body padding
        var padding = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.body).data('padding-right');
        Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.body).removeData('padding-right');
        document.body.style.paddingRight = padding ? padding : '';
    };
    Modal.prototype._getScrollbarWidth = function () {
        var scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    // Static
    Modal._jQueryInterface = function (config, relatedTarget) {
        return this.each(function () {
            var data = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this).data(DATA_KEY);
            var _config = __assign(__assign(__assign({}, Default), Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this).data()), typeof config === 'object' && config ? config : {});
            if (!data) {
                data = new Modal(this, _config);
                Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this).data(DATA_KEY, data);
            }
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') {
                    throw new TypeError("No method named \"" + config + "\"");
                }
                data[config](relatedTarget);
            }
            else if (_config.show) {
                data.show(relatedTarget);
            }
        });
    };
    return Modal;
}());
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */
Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this = this;
    var target;
    var selector = _util_75cdeb64_js__WEBPACK_IMPORTED_MODULE_4__["U"].getSelectorFromElement(this);
    if (selector) {
        target = document.querySelector(selector);
    }
    var config = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target).data(DATA_KEY)
        ? 'toggle' : __assign(__assign({}, Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target).data()), Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this).data());
    if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
    }
    var $target = Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
            // Only register focus restorer if modal will actually get shown
            return;
        }
        $target.one(Event.HIDDEN, function () {
            if (Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).is(':visible')) {
                _this.focus();
            }
        });
    });
    Modal._jQueryInterface.call(Object(_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target), config, this);
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */
_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"].fn[NAME] = Modal._jQueryInterface;
_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"].fn[NAME].Constructor = Modal;
_jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"].fn[NAME].noConflict = function () {
    _jquery_2579d7a8_js__WEBPACK_IMPORTED_MODULE_3__["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
};
var Modal$1 = /** @class */ (function () {
    function Modal$1(hostRef) {
        Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.close = true;
        this.currentTheme = { components: [] };
        this.items = [];
        this.all = false;
        this.ContextStore = Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "store");
    }
    Modal$1.prototype.setTheme = function (name) {
        if (name === void 0) { name = undefined; }
        this.theme = name || this.store.getState().theme.current;
        this.currentTheme = this.store.getState().theme.items[this.theme];
    };
    Modal$1.prototype.openDialog = function (state) {
        if (state) {
            this.modal.show(this.dialog);
        }
        else {
            this.modal.hide();
        }
        // We need to manually do this here because of no access to 'transitionComplete()'
        this.modal._isTransitioning = false;
    };
    Modal$1.prototype.configureModal = function (config) {
        this.modal = new Modal(this.el, config);
        this.setScrollbar = this.setScrollbar || this.modal._setScrollbar;
        // We should not set this based on config.backdrop but instead use inline value
        this.modal._setScrollbar = this.config.backdrop ? this.setScrollbar : function () { };
        // this.modal._setScrollbar = this.el.classList.contains('inline') ? () => {} : this.setScrollbar;
    };
    Modal$1.prototype.appendStyle = function (state) {
        if (state !== false)
            return;
        var css = "\n      .modal-backdrop {\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 1040;\n        width: 100vw;\n        height: 100vh;\n        background-color: #000;\n      }\n      .modal-backdrop.fade { opacity: 0; }\n      .modal-backdrop.show { opacity: 0.5; }";
        var style = document.createElement('style');
        document.head.appendChild(style);
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
    };
    Modal$1.prototype.componentWillLoad = function () {
        var _this = this;
        this.store = this.ContextStore || window.CorporateUi.store;
        this.setTheme(this.theme);
        this.store.subscribe(function () {
            _this.setTheme();
            Object(_themeStyle_9950d74a_js__WEBPACK_IMPORTED_MODULE_2__["t"])(_this.currentTheme, _this.tagName, _this.style, _this.el);
        });
        if (!(this.el && this.el.nodeName))
            return;
        this.tagName = this.el.nodeName.toLowerCase();
        this.configureModal(this.config);
        this.appendStyle(this.store.getState().theme.global);
    };
    Modal$1.prototype.componentDidLoad = function () {
        this.style = this.el.shadowRoot.adoptedStyleSheets || [];
        Object(_themeStyle_9950d74a_js__WEBPACK_IMPORTED_MODULE_2__["t"])(this.currentTheme, this.tagName, this.style, this.el);
        this.openDialog(this.open);
    };
    Modal$1.prototype.render = function () {
        var _this = this;
        return (Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: "fade", tabindex: "-1", role: "dialog", "aria-modal": "true" }, Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "modal-dialog modal-dialog-scrollable modal-dialog-centered", role: "document", ref: function (el) { return _this.dialog = el; } }, Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "modal-content" }, Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "modal-header" }, Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "header" }), this.close ?
            Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: "close", "data-dismiss": "modal", "aria-label": "Close" }, Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { "aria-hidden": "true" }, "\u00D7"))
            : ''), Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "modal-body" }, Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "modal-footer" }, Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "footer" }))))));
    };
    Object.defineProperty(Modal$1.prototype, "el", {
        get: function () { return Object(_core_dafe424f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal$1, "watchers", {
        get: function () {
            return {
                "theme": ["setTheme"],
                "open": ["openDialog"],
                "config": ["configureModal"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal$1, "style", {
        get: function () { return "*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus{outline:0!important}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.modal-open{overflow:hidden}.modal-open .modal,.modal-open :host{overflow-x:hidden;overflow-y:auto}.modal,:host{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.fade:host .modal-dialog,.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translateY(-50px);transform:translateY(-50px)}\@media (prefers-reduced-motion:reduce){.fade:host .modal-dialog,.modal.fade .modal-dialog{-webkit-transition:none;transition:none}}.modal.show .modal-dialog,.show:host .modal-dialog{-webkit-transform:none;transform:none}.modal-dialog-scrollable{display:-ms-flexbox;display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{-ms-flex-negative:0;flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered:before{display:block;height:calc(100vh - 1rem);content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable:before{content:none}.modal-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title,[slot=header],slot[name=header]::slotted(*){margin-bottom:0;line-height:1.5}.modal-body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.modal-footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:1rem;border-top:1px solid #dee2e6;border-bottom-right-radius:.3rem;border-bottom-left-radius:.3rem}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}\@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered:before{height:calc(100vh - 3.5rem)}.modal-sm{max-width:300px}}\@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}\@media (min-width:1200px){.modal-xl{max-width:1140px}}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.close.disabled{pointer-events:none}:host(.inline){position:static}:host(.inline) .modal-dialog{min-height:0;max-width:none;margin:0}:host(.inline) .modal-dialog:before{height:auto}:host(.inline) .modal-content{min-height:0}slot[name=header]{display:block}[slot=header],slot[name=header]::slotted(*){margin-bottom:0!important}.modal-dialog{max-width:1060px}.modal-body{display:-ms-flexbox;display:flex;overflow-y:auto}\@media (min-width:992px){::slotted(button){margin-left:5px!important}}\@media (max-width:991px){::slotted(button){width:100%}.modal-dialog{margin:0;max-height:100%}.modal-dialog.modal-dialog-scrollable .modal-content{overflow:auto}.modal-footer{-ms-flex-wrap:wrap;flex-wrap:wrap}}"; },
        enumerable: true,
        configurable: true
    });
    return Modal$1;
}());



/***/ })

}]);
//# sourceMappingURL=12-es5.js.map