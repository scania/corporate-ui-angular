(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/corporate-ui/dist/esm/c-theme.entry.js":
/*!*************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm/c-theme.entry.js ***!
  \*************************************************************/
/*! exports provided: c_theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_theme", function() { return Theme; });
/* harmony import */ var _core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-7b39e2be.js */ "./node_modules/corporate-ui/dist/esm/core-7b39e2be.js");


var name = "corporate-ui";
var version = "4.0.0-beta.6";
var description = "In this repository we're developing the next generation components for Corporate UI";
var repository = {
	type: "git",
	url: "git+https://github.com/scania/corporate-ui.git"
};
var module = "dist/collection/index.js";
var main = "dist/collection/index.js";
var collection = "dist/collection/collection-manifest.json";
var files = [
	"dist"
];
var scripts = {
	start: "npm run build -- --watch",
	build: "npm run babel && npm run stencil --",
	stencil: "stencil build --docs-json dist/data/docs.json --esm --es5 && npm run rename && npm run renameDev",
	babel: "mkdirp .build && babel src/helpers/index.js --out-file .build/index.js",
	rename: "renamer -f \"/^corporate-ui.js$/\" -r \"corporate-ui-stencil.js\" \"dist/*\"",
	renameDev: "renamer -f \"/^corporate-ui-dev.js$/\" -r \"corporate-ui.js\" \"dist/*\"",
	lint: "eslint . --ext .js,.jsx,.ts,.tsx",
	"lint-fix": "npm run lint -- --fix",
	"lint-debug": "npm run lint -- --debug",
	test: "stencil test --spec --verbose",
	"test.watch": "stencil test --spec --e2e --watchAll",
	generate: "stencil generate"
};
var husky = {
	hooks: {
		"pre-commit": "lint-staged"
	}
};
var devDependencies = {
	"@fortawesome/fontawesome-free": "5.11.2",
	"@fortawesome/free-brands-svg-icons": "5.11.2",
	"@fortawesome/free-solid-svg-icons": "5.11.2",
	"@stencil/core": "1.8.1",
	"@stencil/router": "1.0.1",
	"@stencil/sass": "1.0.1",
	"@types/jest": "24.0.23",
	"@types/puppeteer": "1.19.0",
	"babel-cli": "^6.26.0",
	"babel-preset-es2015": "^6.24.1",
	bootstrap: "4.3.1",
	"highlight.js": "9.16.2",
	jest: "24.9.0",
	"jest-cli": "24.9.0",
	jquery: "3.4.1",
	mkdirp: "^0.5.1",
	"popper.js": "1.15.0",
	puppeteer: "1.19.0",
	redux: "4.0.4",
	renamer: "1.1.4"
};
var license = "MIT";
const _package = {
	name: name,
	version: version,
	description: description,
	repository: repository,
	module: module,
	main: main,
	collection: collection,
	files: files,
	scripts: scripts,
	husky: husky,
	"lint-staged": {
	"*.{js,jsx,ts,tsx}": [
		"eslint --fix",
		"git add"
	]
},
	devDependencies: devDependencies,
	license: license
};

const Theme = class {
    constructor(hostRef) {
        Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** By setting this to true bootstrap classes will be accessable globally */
        this.global = false;
        this.currentTheme = { favicons: [], components: [] };
        this.ContextStore = Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "store");
    }
    setName(name) {
        this.setTheme(name);
        this.store.dispatch({ type: _core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["e"].SET_THEME, current: name });
    }
    setTheme(name = undefined) {
        this.name = name || this.store.getState().theme.current;
        this.currentTheme = this.store.getState().theme.items[this.name];
        this.favicons = this.currentTheme ? this.currentTheme.favicons : undefined;
    }
    renderFavicon() {
        if (document.head.querySelector('link[rel=icon]'))
            return;
        const container = document.createElement('div');
        container.innerHTML = this.favicons.join('');
        for (let i = 0; i < container.children.length; i += 1) {
            const node = container.children[i];
            document.head.appendChild(node.cloneNode(true));
        }
    }
    componentWillLoad() {
        this.store = this.ContextStore || window.CorporateUi.store;
        this.setName(this.name);
        this.store.subscribe(() => this.setTheme());
        window.CorporateUi = Object.assign(Object.assign({}, window.CorporateUi), { version });
        document.documentElement.setAttribute('corporate-ui-version', version);
        if (!(this.el && this.el.nodeName))
            return;
        this.tagName = this.el.nodeName.toLowerCase();
    }
    render() {
        if (this.favicons && this.favicons) {
            this.renderFavicon();
        }
        return [
            this.currentTheme ? Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("style", null, this.currentTheme.components[this.tagName]) : '',
            this.global ? Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("c-global-style", null) : '',
        ];
    }
    get el() { return Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this); }
    static get watchers() { return {
        "name": ["setName"]
    }; }
    static get style() { return ":root {\n  font-size: 62.5%;\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,\n    \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n:host([name]) {\n  --display: none;\n}\n\nbody[data-env]:before {\n  background-color: #ddd;\n  border: 2px solid #fafafa;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 52px 50px 2px;\n  content: attr(data-env);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1170;\n  -ms-transform: translateY(-50%) translateX(-50%) rotate(-45deg);\n  -moz-transform: translateY(-50%) translateX(-50%) rotate(-45deg);\n  -webkit-transform: translateY(-50%) translateX(-50%) rotate(-45deg);\n  -o-transform: translateY(-50%) translateX(-50%) rotate(-45deg);\n  transform: translateY(-50%) translateX(-50%) rotate(-45deg);\n  text-transform: uppercase;\n}\n\nbody[data-env=\"\"]:before,\nbody[data-env=prod]:before,\nbody[data-env=production]:before,\nbody[data-env=hidden]:before {\n  display: none;\n}\n\nbody[data-env=development]:before {\n  content: \"dev\";\n}"; }
};




/***/ })

}]);
//# sourceMappingURL=9-es2015.js.map