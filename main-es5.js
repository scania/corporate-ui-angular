(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/corporate-ui/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/corporate-ui/dist/esm-es5 lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./c-code-sample.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-code-sample.entry.js",
		2
	],
	"./c-content.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-content.entry.js",
		4
	],
	"./c-cookie.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-cookie.entry.js",
		0,
		"common",
		3
	],
	"./c-dealer-header.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-dealer-header.entry.js",
		"common",
		5
	],
	"./c-dropdown.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-dropdown.entry.js",
		0,
		1,
		"common",
		6
	],
	"./c-footer.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-footer.entry.js",
		"common",
		7
	],
	"./c-global-style.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-global-style.entry.js",
		8
	],
	"./c-header.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-header.entry.js",
		"common",
		9
	],
	"./c-hello-world.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-hello-world.entry.js",
		10
	],
	"./c-icon.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-icon.entry.js",
		"common",
		11
	],
	"./c-modal.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-modal.entry.js",
		0,
		"common",
		12
	],
	"./c-navigation.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-navigation.entry.js",
		"common",
		13
	],
	"./c-table.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-table.entry.js",
		"common",
		14
	],
	"./c-theme.entry.js": [
		"./node_modules/corporate-ui/dist/esm-es5/c-theme.entry.js",
		15
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/corporate-ui/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<c-theme name='scania' global='true'></c-theme>\r\n\r\n<c-header site-name='App' site-url='/home'>\r\n  <a routerLink='/global' slot='items'>Global</a>\r\n</c-header>\r\n\r\n<c-navigation navigation></c-navigation>\r\n\r\n<c-content>\r\n  <section>\r\n    <div class='container-fluid'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </section>\r\n</c-content>\r\n\r\n<c-footer>\r\n  <a routerLink='/contact' slot='items'>Contact</a>\r\n</c-footer>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a \r\n  *ngFor='let link of items' \r\n  [attr.slot]='link.type + \"-items\"' \r\n  [ngClass]='link.subMenu ? \"parent\" : \"\"'\r\n  routerLink={{link.url}} \r\n  [routerLinkActive]=\"'active'\">{{link.text}}</a>\r\n\r\n<div class=\"dropdown\" slot=\"secondary-items\">\r\n  <a class=\"dropdown-toggle\" href=\"#\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    User\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n    <a class=\"dropdown-item\" href=\"#\" *ngFor='let item of dropdownData'\r\n    ngbDropdownItem\r\n    class='dropdown-item'>{{item.name}}</a>\r\n  </div>\r\n</div>\r\n\r\n<c-navigation slot=\"sub\" [attr.target]=\"'/'+ appName + active.url\" [ngClass]= \"active.subMenu ? 'active' : ''\">\r\n  <a\r\n    *ngFor='let menu of active.subMenu'\r\n    [attr.slot]='menu.type + \"-items\"'\r\n    routerLink='{{active.url}}{{menu.url}}'\r\n    routerLinkActive=\"active\" \r\n    [ngClass]='routerLinkActive ? active : \"\"'\r\n  >{{menu.text}}</a>\r\n</c-navigation>"

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, homepage, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"corporate-ui-angular","version":"0.1.0","homepage":"https://scania.github.io/corporate-ui-angular","scripts":{"ng":"ng","start":"ng serve --configuration es5 --disable-host-check","build":"ng build --base-href %npm_package_name%","deploy":"npm run build && gh-pages -d dist","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^8.0.3","@angular/common":"^8.0.3","@angular/compiler":"^8.0.3","@angular/core":"^8.0.3","@angular/forms":"^8.0.3","@angular/http":"^7.2.15","@angular/platform-browser":"^8.0.3","@angular/platform-browser-dynamic":"^8.0.3","@angular/router":"^8.0.3","@ng-bootstrap/ng-bootstrap":"^5.0.0-rc.1","@webcomponents/webcomponentsjs":"^2.2.10","core-js":"^3.1.4","rxjs":"~6.5.2","zone.js":"~0.9.1"},"devDependencies":{"@angular-devkit/build-angular":"~0.800.6","@angular/cli":"~8.0.6","@angular/compiler-cli":"^8.0.3","@angular/language-service":"^8.0.3","@types/jasmine":"~3.3.13","@types/jasminewd2":"~2.0.6","@types/jest":"^24.0.23","@types/node":"~12.0.10","bootstrap":"^4.3.1","codelyzer":"~5.1.0","corporate-ui":"next","gh-pages":"^2.0.1","jasmine-core":"~3.4.0","jasmine-spec-reporter":"~4.2.1","karma":"~4.1.0","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.5","karma-jasmine":"~2.0.1","karma-jasmine-html-reporter":"^1.4.2","protractor":"~5.4.2","scania-theme":"next","ts-node":"~8.3.0","tslint":"~5.18.0","typescript":"3.4.5"}};

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _info_info_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info/info.module */ "./src/app/info/info.module.ts");






var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '404', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _info_info_module__WEBPACK_IMPORTED_MODULE_5__["InfoModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Corporate UI Angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '#app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [{
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"],
                    useValue: '/' + _package_json__WEBPACK_IMPORTED_MODULE_10__["name"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: "\n  <div class=\"container\">\n    <h1>Home</h1>\n    <h3>Visit Scania Digital Design System at <a target='_blank' href='https://digitaldesign.scania.com'>digitaldesign.scania.com</a><c-icon name='scania-external_link'></c-icon></h3>\n    <p>Developing in our design system visit our <a target='_blank' href='https://github.com/scania/corporate-ui'>github</a><c-icon name='scania-external_link'></c-icon></p>\n  </div>\n  "
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/info/info-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/info/info-routing.module.ts ***!
  \*********************************************/
/*! exports provided: routes, InfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoRoutingModule", function() { return InfoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subpages_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subpages/table.component */ "./src/app/info/subpages/table.component.ts");
/* harmony import */ var _subpages_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subpages/list.component */ "./src/app/info/subpages/list.component.ts");
/* harmony import */ var _subpages_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subpages/form.component */ "./src/app/info/subpages/form.component.ts");
/* harmony import */ var _subpages_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subpages/modal.component */ "./src/app/info/subpages/modal.component.ts");







var routes = [
    {
        path: 'info',
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
            },
            {
                path: 'table',
                component: _subpages_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]
            },
            {
                path: 'list',
                component: _subpages_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
            },
            {
                path: 'form',
                component: _subpages_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"]
            },
            {
                path: 'modal',
                component: _subpages_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]
            },
        ]
    }
];
var InfoRoutingModule = /** @class */ (function () {
    function InfoRoutingModule() {
    }
    InfoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InfoRoutingModule);
    return InfoRoutingModule;
}());



/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: "<h1>Info</h1>"
        })
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/info/info.module.ts":
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/*! exports provided: InfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModule", function() { return InfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-routing.module */ "./src/app/info/info-routing.module.ts");
/* harmony import */ var _info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _subpages_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subpages/table.component */ "./src/app/info/subpages/table.component.ts");
/* harmony import */ var _subpages_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subpages/form.component */ "./src/app/info/subpages/form.component.ts");
/* harmony import */ var _subpages_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subpages/list.component */ "./src/app/info/subpages/list.component.ts");
/* harmony import */ var _subpages_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subpages/modal.component */ "./src/app/info/subpages/modal.component.ts");









var InfoModule = /** @class */ (function () {
    function InfoModule() {
    }
    InfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"],
                _subpages_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"],
                _subpages_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
                _subpages_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                _subpages_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]
            ],
            imports: [
                _info_routing_module__WEBPACK_IMPORTED_MODULE_3__["InfoRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
        })
    ], InfoModule);
    return InfoModule;
}());



/***/ }),

/***/ "./src/app/info/subpages/form.component.ts":
/*!*************************************************!*\
  !*** ./src/app/info/subpages/form.component.ts ***!
  \*************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: "\n  <h4>Form</h4>\n  <form>\n    <div class=\"form-group\">\n      <label htmlFor=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" />\n    </div>\n    <div class=\"form-group\">\n      <label htmlFor=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" />\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n  "
        })
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/info/subpages/list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/info/subpages/list.component.ts ***!
  \*************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: "\n  <h4>List</h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">First</li>\n    <li class=\"list-group-item\">Second</li>\n    <li class=\"list-group-item\">Third</li>\n  </ul>\n  "
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/info/subpages/modal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/info/subpages/modal.component.ts ***!
  \**************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: "\n  <h4>Modal</h4>\n  <button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'>Launch demo modal</button>\n\n  <div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>\n    <div class='modal-dialog' role='document'>\n      <div class='modal-content'>\n        <div class='modal-header'>\n          <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>\n          <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\n            <span aria-hidden='true'>\u00D7</span>\n          </button>\n        </div>\n        <div class='modal-body'>\n          <p>Modal body text goes here.</p>\n        </div>\n        <div class='modal-footer'>\n          <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>\n          <button type='button' class='btn btn-primary'>Save changes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/info/subpages/table.component.ts":
/*!**************************************************!*\
  !*** ./src/app/info/subpages/table.component.ts ***!
  \**************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () { };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: "\n  <h4>Table</h4>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>ID</th><th>Name</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>1</td><td>Thomas</td>\n      </tr>\n      <tr>\n        <td>2</td><td>Cook</td>\n      </tr>\n    </tbody>\n  </table>\n  "
        })
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/items.ts":
/*!**************************!*\
  !*** ./src/app/items.ts ***!
  \**************************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
var items = [
    {
        text: 'Home',
        url: '/home',
        type: 'primary'
    },
    {
        text: 'Info',
        url: '/info',
        type: 'primary',
        subMenu: [
            { text: 'List', url: '/list', type: 'primary' },
            { text: 'Table', url: '/table', type: 'primary' },
            { text: 'Form', url: '/form', type: 'primary' },
            { text: 'Modal', url: '/modal', type: 'primary' }
        ]
    },
];


/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../items */ "./src/app/items.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../package.json */ "./package.json", 1);





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        var _this = this;
        this.items = _items__WEBPACK_IMPORTED_MODULE_3__["items"];
        this.active = {};
        this.appName = _package_json__WEBPACK_IMPORTED_MODULE_4__["name"];
        this.dropdownData = [{
                id: 1,
                name: 'Profile'
            }, {
                id: 2,
                name: 'Settings'
            }];
        router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]) {
                // match the parent url
                var segmentPath_1 = e.url === '/' ? ['/home'] : e.url.match(/^\/(\w+)/gm);
                _this.active = _items__WEBPACK_IMPORTED_MODULE_3__["items"].find(function (item) {
                    return item.url === segmentPath_1[0];
                }) || {};
            }
        });
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[navigation]',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html")
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-404',
            template: "\n    <h1>Not Found</h1>\n    <p>The link you tried to reach does not exist.</p>\n  "
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var corporate_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! corporate-ui */ "./node_modules/corporate-ui/dist/collection/index.js");
/* harmony import */ var corporate_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(corporate_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var scania_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scania-theme */ "./node_modules/scania-theme/dist/module.js");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });
Object(corporate_ui__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])();
Object(corporate_ui__WEBPACK_IMPORTED_MODULE_4__["addTheme"])(scania_theme__WEBPACK_IMPORTED_MODULE_5__["theme"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\corporate-ui-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map