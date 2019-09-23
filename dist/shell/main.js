(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _course_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course/page/page.component */ "./src/app/course/page/page.component.ts");






var routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "course/:id",
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_4__["CourseComponent"]
    },
    {
        path: "course/:id/page/:page_id",
        component: _course_page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div>\n  <h1>\n    Welcome to {{ title }}!\n    <quill-editor [(ngModel)]=\"htmlText\" format=\"text\" theme=\"bubble\"></quill-editor>\n    <button (click)=\"submitButton()\">Submit</button>    \n  </h1>\n</div> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ql-tooltip {\n  width: 410px; }\n\n.ff-arial {\n  font-family: 'Arial', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXEdJVFxcUHJvamVjdFxcSGFzbmFUZWNoXFxzaGVsbC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucWwtdG9vbHRpcCB7XHJcbiAgd2lkdGg6IDQxMHB4O1xyXG59XHJcblxyXG4uZmYtYXJpYWwge1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4iXX0= */"

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
        this.title = 'shell';
        this.htmlText = "Sample Text";
    }
    AppComponent.prototype.submitButton = function () {
        console.log(this.htmlText);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _component_htmltext_htmltext_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/htmltext/htmltext.component */ "./src/app/component/htmltext/htmltext.component.ts");
/* harmony import */ var _course_page_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./course/page/page.component */ "./src/app/course/page/page.component.ts");
/* harmony import */ var _component_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/layout/layout.component */ "./src/app/component/layout/layout.component.ts");
/* harmony import */ var _component_heading_heading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/heading/heading.component */ "./src/app/component/heading/heading.component.ts");
/* harmony import */ var _component_text_text_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/text/text.component */ "./src/app/component/text/text.component.ts");
/* harmony import */ var _component_image_image_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/image/image.component */ "./src/app/component/image/image.component.ts");
/* harmony import */ var _component_audio_audio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/audio/audio.component */ "./src/app/component/audio/audio.component.ts");
/* harmony import */ var _component_video_video_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/video/video.component */ "./src/app/component/video/video.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_10__["CourseComponent"],
                _component_htmltext_htmltext_component__WEBPACK_IMPORTED_MODULE_11__["HtmltextComponent"],
                _course_page_page_component__WEBPACK_IMPORTED_MODULE_12__["PageComponent"],
                _component_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__["LayoutComponent"],
                _component_heading_heading_component__WEBPACK_IMPORTED_MODULE_14__["HeadingComponent"],
                _component_text_text_component__WEBPACK_IMPORTED_MODULE_15__["TextComponent"],
                _component_image_image_component__WEBPACK_IMPORTED_MODULE_16__["ImageComponent"],
                _component_audio_audio_component__WEBPACK_IMPORTED_MODULE_17__["AudioComponent"],
                _component_video_video_component__WEBPACK_IMPORTED_MODULE_18__["VideoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"].forRoot({
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike', 'link'],
                            //['blockquote', 'code-block'],
                            //[{ 'header': 1 }, { 'header': 2 }],    
                            [{ 'script': 'sub' }, { 'script': 'super' }],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'indent': '-1' }, { 'indent': '+1' }],
                            [{ 'direction': 'rtl' }],
                            //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'color': [] }, { 'background': [] }],
                            //[{ 'font': [] }],
                            [{ 'align': [] }],
                            ['clean'],
                        ]
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.sass":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/auth/login/login.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/audio/audio.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/audio/audio.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  audio works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/audio/audio.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/audio/audio.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hdWRpby9hdWRpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/component/audio/audio.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/audio/audio.component.ts ***!
  \****************************************************/
/*! exports provided: AudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function() { return AudioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AudioComponent = /** @class */ (function () {
    function AudioComponent() {
    }
    AudioComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AudioComponent.prototype, "content", void 0);
    AudioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shell-audio',
            template: __webpack_require__(/*! ./audio.component.html */ "./src/app/component/audio/audio.component.html"),
            styles: [__webpack_require__(/*! ./audio.component.scss */ "./src/app/component/audio/audio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AudioComponent);
    return AudioComponent;
}());



/***/ }),

/***/ "./src/app/component/heading/heading.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/heading/heading.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{content.value}} \n  <input type=\"text\" [(ngModel)]=\"content.value\" >\n</h1>\n\n"

/***/ }),

/***/ "./src/app/component/heading/heading.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/heading/heading.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1,\nh2,\nh3,\nh4 {\n  margin: 0px;\n  font-weight: 500; }\n  h1 input[type=text],\n  h2 input[type=text],\n  h3 input[type=text],\n  h4 input[type=text] {\n    border: 0;\n    outline: none;\n    font-weight: 500;\n    width: 100%; }\n  h1 input[type=text] {\n  font-size: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRpbmcvRjpcXEdJVFxcUHJvamVjdFxcSGFzbmFUZWNoXFxzaGVsbC9zcmNcXGFwcFxcY29tcG9uZW50XFxoZWFkaW5nXFxoZWFkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUUsV0FBVztFQUNYLGdCQUFnQixFQUFBO0VBTGxCOzs7O0lBUUksU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBO0VBSWY7RUFFSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaGVhZGluZy9oZWFkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/heading/heading.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/heading/heading.component.ts ***!
  \********************************************************/
/*! exports provided: HeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingComponent", function() { return HeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeadingComponent = /** @class */ (function () {
    function HeadingComponent() {
    }
    HeadingComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeadingComponent.prototype, "content", void 0);
    HeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'heading',
            template: __webpack_require__(/*! ./heading.component.html */ "./src/app/component/heading/heading.component.html"),
            styles: [__webpack_require__(/*! ./heading.component.scss */ "./src/app/component/heading/heading.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeadingComponent);
    return HeadingComponent;
}());



/***/ }),

/***/ "./src/app/component/htmltext/htmltext.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/htmltext/htmltext.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>{{this.service.mode}}</div> -->\n<div *ngIf=\"this.service.mode != 'edit'\">{{content}}</div>\n<quill-editor *ngIf=\"this.service.mode == 'edit'\" [(ngModel)]=\"content\" theme=\"bubble\"></quill-editor>"

/***/ }),

/***/ "./src/app/component/htmltext/htmltext.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/htmltext/htmltext.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9odG1sdGV4dC9odG1sdGV4dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/component/htmltext/htmltext.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/htmltext/htmltext.component.ts ***!
  \**********************************************************/
/*! exports provided: HtmltextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmltextComponent", function() { return HtmltextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");



var HtmltextComponent = /** @class */ (function () {
    function HtmltextComponent(service) {
        this.service = service;
    }
    HtmltextComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HtmltextComponent.prototype, "content", void 0);
    HtmltextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'htmltext',
            template: __webpack_require__(/*! ./htmltext.component.html */ "./src/app/component/htmltext/htmltext.component.html"),
            styles: [__webpack_require__(/*! ./htmltext.component.scss */ "./src/app/component/htmltext/htmltext.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], HtmltextComponent);
    return HtmltextComponent;
}());



/***/ }),

/***/ "./src/app/component/image/image.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/image/image.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img width=\"100%\" src=\"{{content.value}}\" alt=\"{{content.attr}}\">\n"

/***/ }),

/***/ "./src/app/component/image/image.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/image/image.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbWFnZS9pbWFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/component/image/image.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/image/image.component.ts ***!
  \****************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageComponent.prototype, "content", void 0);
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/component/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.scss */ "./src/app/component/image/image.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/component/layout/layout.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/layout/layout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{ page | json}} -->\n<div class=\"add_content\">\n  <hr class=\"dash\" />\n  <button class=\"button add_button\" (click)=\"show_layout = true\">Add</button>\n</div>\n\n<div class=\"layout\" *ngIf=\"show_layout == true\">\n  <!-- <div class=\"arrow-up\"></div> -->\n  <div class=\"layout_grid\">\n    <div class=\"layout_row\">\n      <div class=\"box\" (click)=\"addLayout('single')\">\n        <div class=\"single_layout\">\n          <img src=\"assets/shell/single_layout.png\" alt=\"Single Layout\">\n        </div>\n      </div>\n      <div class=\"box\" (click)=\"addLayout('30_70')\">\n        <div class=\"\">\n          <img src=\"assets/shell/30_70_layout.png\" alt=\"30 70 Layout\">\n        </div>\n      </div>\n      <div class=\"box\" (click)=\"addLayout('70_30')\">\n        <div class=\"\">\n          <img src=\"assets/shell/70_30_layout.png\" alt=\"70 30 Layout\">\n        </div>\n      </div>\n    </div>\n    <div class=\"layout_row\">\n      <div class=\"box\" (click)=\"addLayout('50_50')\">\n        <div class=\"\">\n          <img src=\"assets/shell/50_50_layout.png\" alt=\"50 50 Layout\">\n        </div>\n      </div>\n      <div class=\"box\" (click)=\"addLayout('3')\">\n        <div class=\"\">\n          <img src=\"assets/shell/3_layout.png\" alt=\"3 Layout\">\n        </div>\n      </div>\n      <div class=\"box\" (click)=\"addLayout('4')\">\n        <div class=\"\">\n          <img src=\"assets/shell/4_layout.png\" alt=\"4 Layout\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"fl-window\" *ngIf=\"show_component == true\">\n  <div class=\"fl-panel\">\n    <div class=\"component\">\n      <div class=\"layout_grid\">\n        <div class=\"layout_row\">\n          <div class=\"box\" (click)=\"addComponent('heading')\">\n            <div class=\"flex_center\">\n              HEADING\n            </div>\n          </div>\n          <div class=\"box\" (click)=\"addComponent('paragraph')\">\n            <div class=\"flex_center\">\n              PARAGRAPH\n            </div>\n          </div>\n          <div class=\"box\" (click)=\"addComponent('image')\">\n            <div class=\"flex_center\">\n              IMAGE\n            </div>\n          </div>\n          <div class=\"box\" (click)=\"addComponent('audio')\">\n            <div class=\"flex_center\">\n              AUDIO\n            </div>\n          </div>\n          <div class=\"box\" (click)=\"addComponent('video')\">\n            <div class=\"flex_center\">\n              VIDEO\n            </div>\n          </div>\n          <div class=\"box\" (click)=\"addComponent('other')\">\n            <div class=\"flex_center\">\n              OTHER\n            </div>\n          </div>\n        </div>\n        <div class=\"layout_row\">\n          <div class=\"box\" (click)=\"addLayout('50_50')\">\n            <div class=\"\">\n              <img src=\"assets/shell/50_50_layout.png\" alt=\"50 50 Layout\">\n            </div>\n          </div>\n          <div class=\"box\" (click)=\"addLayout('3')\">\n            <div class=\"\">\n              <img src=\"assets/shell/3_layout.png\" alt=\"3 Layout\">\n            </div>\n          </div>\n          <div class=\"box\" (click)=\"addLayout('4')\">\n            <div class=\"\">\n              <img src=\"assets/shell/4_layout.png\" alt=\"4 Layout\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"content\">\n  <div class=\"row\" *ngFor=\"let row of page.row; let i = index\">\n\n    <div class=\"block\">\n      <div *ngFor=\"let block of row.block; let j = index\" class=\"cell {{block.class}}\">\n        <div class=\"add_block\" *ngIf=\"block.component == undefined\">\n          <button class=\"button\" (click)=\"addBlock(i, j)\">Add Block</button>\n        </div>\n        \n        <heading *ngIf=\"block.component != undefined && block.component.type=='heading'\"\n        [content] = \"block.component.content\"></heading>\n\n        <htmltext *ngIf=\"block.component != undefined && block.component.type=='htmltext'\" \n        [content] = \"block.component.content.value\"></htmltext>\n\n        <image *ngIf=\"block.component != undefined && block.component.type=='image'\" \n        [content] = \"block.component.content\"></image>\n<!--\n        <shellAudio *ngIf=\"block.component != undefined && block.component.type=='audio'\" \n        [content] = \"block.component.content.value\"></shellAudio>\n\n        <shellVideo *ngIf=\"block.component != undefined && block.component.type=='video'\" \n        [content] = \"block.component.content.value\"></shellVideo>\n-->\n      </div>\n    </div>\n\n    <div class=\"add_content\">\n      <hr class=\"dash\" />\n      <button class=\"button add_button\" (click)=\"show_layout = true;insertAt = i+1\">Add {{i}}</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/layout/layout.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/layout/layout.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add_content {\n  text-align: center; }\n  .add_content hr.dash {\n    border-style: dashed;\n    border-width: 1px;\n    border-color: #eee;\n    width: 100%;\n    position: absolute;\n    opacity: 0; }\n  .add_content .add_button {\n    position: relative;\n    opacity: 0; }\n  .add_content .add_button,\n  .add_content hr.dash {\n    transition: opacity 1s ease; }\n  .add_content:hover .add_button,\n  .add_content:hover hr.dash {\n    opacity: 1; }\n  .layout {\n  position: absolute;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 5px;\n  box-shadow: 0 0 10px #ccc;\n  left: calc(50% - 176px);\n  margin-top: 20px; }\n  .layout_grid .layout_row {\n  display: flex;\n  flex-direction: row; }\n  .box {\n  margin: 5px;\n  cursor: pointer;\n  transition: background 0.5s ease; }\n  .box:hover {\n    background-color: #666666; }\n  .arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid white;\n  position: absolute;\n  left: calc(50% - 5px);\n  top: -8px; }\n  .block {\n  /*padding: 20px;*/\n  border-top: 1px dashed #fff;\n  border-bottom: 1px dashed #fff; }\n  .block:hover {\n    border-top: 1px dashed #eee;\n    border-bottom: 1px dashed #eee; }\n  .add_block {\n  text-align: center;\n  background-color: #eee;\n  padding: 20px; }\n  .block {\n  display: flex; }\n  .block .cell_full {\n    flex: 100%; }\n  .block .cell_3 {\n    flex: 30%; }\n  .block .cell_7 {\n    flex: 70%; }\n  .block .cell_5 {\n    flex: 50%; }\n  .block .cell_33 {\n    flex: 33%; }\n  .block .cell_25 {\n    flex: 25%; }\n  .cell {\n  margin-right: 25px;\n  /*padding: 5px;*/\n  /*background-color: #eee;*/ }\n  .cell:last-child {\n    margin-right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xheW91dC9GOlxcR0lUXFxQcm9qZWN0XFxIYXNuYVRlY2hcXHNoZWxsL3NyY1xcYXBwXFxjb21wb25lbnRcXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7RUFEcEI7SUFJSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQVRkO0lBYUksa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQWRkOztJQW1CSSwyQkFBMkIsRUFBQTtFQW5CL0I7O0lBMEJNLFVBQVUsRUFBQTtFQUtoQjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBO0VBR2xCO0VBRUksYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQ0FBZ0MsRUFBQTtFQUhsQztJQU1JLHlCQUF5QixFQUFBO0VBSTdCO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFNBQVMsRUFBQTtFQUdYO0VBQ0UsaUJBQUE7RUFDQSwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7RUFIaEM7SUFNSSwyQkFBMkI7SUFDM0IsOEJBQThCLEVBQUE7RUFJbEM7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTtFQUdmO0VBQ0UsYUFBYSxFQUFBO0VBRGY7SUFJSSxVQUFVLEVBQUE7RUFKZDtJQVFJLFNBQVMsRUFBQTtFQVJiO0lBWUksU0FBUyxFQUFBO0VBWmI7SUFnQkksU0FBUyxFQUFBO0VBaEJiO0lBb0JJLFNBQVMsRUFBQTtFQXBCYjtJQXVCSSxTQUFTLEVBQUE7RUFJYjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBQTtFQUNBLDBCQUFBLEVBQTJCO0VBSDdCO0lBTUksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRfY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBoci5kYXNoIHtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNlZWU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAuYWRkX2J1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgLmFkZF9idXR0b24sXHJcbiAgaHIuZGFzaCB7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuXHJcbiAgICAuYWRkX2J1dHRvbixcclxuICAgIGhyLmRhc2gge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxheW91dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTc2cHgpO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5sYXlvdXRfZ3JpZCB7XHJcbiAgLmxheW91dF9yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG59XHJcblxyXG4uYm94IHtcclxuICBtYXJnaW46IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcclxuICB9XHJcbn1cclxuXHJcbi5hcnJvdy11cCB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDVweCk7XHJcbiAgdG9wOiAtOHB4O1xyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gIC8qcGFkZGluZzogMjBweDsqL1xyXG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmZmY7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZWVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZWVlO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZF9ibG9jayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAuY2VsbF9mdWxsIHtcclxuICAgIGZsZXg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2VsbF8zIHtcclxuICAgIGZsZXg6IDMwJTtcclxuICB9XHJcblxyXG4gIC5jZWxsXzcge1xyXG4gICAgZmxleDogNzAlO1xyXG4gIH1cclxuXHJcbiAgLmNlbGxfNSB7XHJcbiAgICBmbGV4OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY2VsbF8zMyB7XHJcbiAgICBmbGV4OiAzMyU7XHJcbiAgfVxyXG4gIC5jZWxsXzI1IHtcclxuICAgIGZsZXg6IDI1JTtcclxuICB9XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgLypwYWRkaW5nOiA1cHg7Ki9cclxuICAvKmJhY2tncm91bmQtY29sb3I6ICNlZWU7Ki9cclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/layout/layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/layout/layout.component.ts ***!
  \******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(service) {
        this.service = service;
        this.show_layout = false;
        this.show_component = false;
        this.insertAt = 0;
        this.currentRow = 0;
        this.currentCell = 0;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.content = this.service.content;
        this.page = this.content.menu.topic[0];
    };
    LayoutComponent.prototype.addLayout = function (style) {
        console.log(style);
        switch (style) {
            case 'single':
                this.page.row.splice(this.insertAt, 0, this.addRow(['cell_full']));
                break;
            case '30_70':
                this.page.row.splice(this.insertAt, 0, this.addRow(['cell_3', 'cell_7']));
                break;
            case '70_30':
                this.page.row.splice(this.insertAt, 0, this.addRow(['cell_7', 'cell_3']));
                break;
            case '50_50':
                this.page.row.splice(this.insertAt, 0, this.addRow(['cell_5', 'cell_5']));
                break;
            case '3':
                this.page.row.splice(this.insertAt, 0, this.addRow(['cell_33', 'cell_33', 'cell_33']));
                break;
            case '4':
                this.page.row.splice(this.insertAt, 0, this.addRow(['cell_25', 'cell_25', 'cell_25', 'cell_25']));
                break;
            default:
                break;
        }
        this.show_layout = false;
    };
    LayoutComponent.prototype.addRow = function (cls) {
        var clsArr = [];
        for (var index = 0; index < cls.length; index++) {
            var element = {
                "class": cls[index]
            };
            clsArr.push(element);
        }
        return {
            "block": clsArr
        };
    };
    LayoutComponent.prototype.addBlock = function (i, j) {
        this.currentRow = i;
        this.currentCell = j;
        this.show_component = true;
    };
    LayoutComponent.prototype.addComponent = function (name) {
        switch (name) {
            case 'heading':
                this.page.row[this.currentRow].block[this.currentCell]['component'] = {
                    "type": "heading",
                    "content": {
                        "tag": "h1",
                        "value": "Heading"
                    }
                };
                break;
            case 'paragraph':
                this.page.row[this.currentRow].block[this.currentCell]['component'] = {
                    "type": "htmltext",
                    "content": {
                        "tag": "htmltext",
                        "value": "Text"
                    }
                };
                break;
            case 'image':
                this.page.row[this.currentRow].block[this.currentCell]['component'] = {
                    "type": "image",
                    "content": {
                        "tag": "image",
                        "value": "assets/sample/sample.png",
                        "attr": "Alt text"
                    }
                };
                break;
            case 'audio':
                this.page.row[this.currentRow].block[this.currentCell]['component'] = {
                    "type": "audio",
                    "content": {
                        "tag": "audio",
                        "value": "assets/sample/audio.mp3"
                    }
                };
                break;
            case 'video':
                this.page.row[this.currentRow].block[this.currentCell]['component'] = {
                    "type": "video",
                    "content": {
                        "tag": "video",
                        "value": "assets/sample/video.mp4"
                    }
                };
                break;
            default:
                break;
        }
        this.show_component = false;
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/component/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/component/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/component/text/text.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/text/text.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/text/text.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/text/text.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90ZXh0L3RleHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/component/text/text.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/text/text.component.ts ***!
  \**************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextComponent = /** @class */ (function () {
    function TextComponent() {
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'text',
            template: __webpack_require__(/*! ./text.component.html */ "./src/app/component/text/text.component.html"),
            styles: [__webpack_require__(/*! ./text.component.scss */ "./src/app/component/text/text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "./src/app/component/video/video.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/video/video.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  video works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/video/video.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/video/video.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/component/video/video.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/video/video.component.ts ***!
  \****************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoComponent.prototype, "content", void 0);
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shell-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/component/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/component/video/video.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor\">\n\n  <button class=\"button edit\" (click)=\"openWindow()\">Edit</button>\n\n  <div class=\"fl-window\" *ngIf=\"showWindow\" [@changeState]=\"currentState\">\n    <div class=\"fl-panel\" >\n      <h2>Edit</h2>\n      <form action=\"\">\n        <div>\n          <label class=\"label\" for=\"name\">Welcome</label>\n          <input class=\"input-full\" maxlength=\"100\" type=\"text\" name=\"name\" [(ngModel)]=\"content.course.welcome\" />\n        </div>\n        <div>\n          <label class=\"label\" for=\"title\">Title</label>\n          <input class=\"input-full\" maxlength=\"100\" type=\"text\" name=\"title\" [(ngModel)]=\"content.course.title\" />\n        </div>\n        <div>\n          <label class=\"label\" for=\"desc\">Description</label>\n          <textarea class=\"input-full\" type=\"text\" name=\"desc\" [(ngModel)]=\"content.course.description\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"button savebtn\" (click)=\"closeWindow()\">Close</button>\n      </form>\n    </div>\n  </div>\n\n\n</div>\n\n<div id=\"splashScreen\">\n  <div id=\"splashScreen_text\">\n    <div class=\"splashscreen_logo\">\n      <img src=\"{{content.course.logo}}\">\n    </div>\n    <div class=\"sp_content white_text\">\n      <p class=\"bottom_0\">{{content.course.welcome}}</p>\n      <h1 class=\"top_0 bottom_0\">{{content.course.title}}</h1>\n\n\n      <htmltext [content]=\"content.course.description\"></htmltext>\n\n      <button class=\"button button-white-border uppercase top-margin\"\n        (click)=\"startBtn()\">{{content.course.start_btn}}</button>\n    </div>\n    <!-- <div id=\"sp_audio_btn\" (click)=\"audio_click()\">\n      <img ng-src=\"image/shell/{{audio_icon}}\" alt=\"audio\">\n    </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course/course.component.scss":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#splashScreen {\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n  height: 100vh; }\n\n#splashScreen_text {\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n  height: 100vh;\n  background-image: url(\"/assets/course1/splash_screen.jpg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.small_font {\n  font-size: 90%; }\n\n.splashscreen_logo {\n  position: absolute;\n  top: 35px;\n  right: 35px; }\n\n.sp_content {\n  margin: 150px 75px;\n  max-width: 500px;\n  overflow: auto; }\n\n.white_text {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL0Y6XFxHSVRcXFByb2plY3RcXEhhc25hVGVjaFxcc2hlbGwvc3JjXFxhcHBcXGNvdXJzZVxcY291cnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYiwwREFBMEQ7RUFDMUQsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUE7O0FBRWhDO0VBRUksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY291cnNlL2NvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jc3BsYXNoU2NyZWVuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNzcGxhc2hTY3JlZW5fdGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2NvdXJzZTEvc3BsYXNoX3NjcmVlbi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4uc21hbGxfZm9udFxyXG57XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxufVxyXG5cclxuLnNwbGFzaHNjcmVlbl9sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzVweDtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uc3BfY29udGVudCB7XHJcbiAgICBtYXJnaW46IDE1MHB4IDc1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi53aGl0ZV90ZXh0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CourseComponent = /** @class */ (function () {
    function CourseComponent(router) {
        this.router = router;
        this.content = {
            "course": {
                "welcome": "Welcome to Danfoss",
                "title": "Introduction to Refrigeration",
                "topic": "",
                "description": "This module will discuss the overall purpose of the e-learning course and also provide an introduction to Refrigeration. This will need 12 minutes to complete.",
                "start_btn": "start the course",
                "audio": "media/topic1_welcome.mp3",
                "logo": "assets/course1/splashscreen_logo.png"
            }
        };
    }
    CourseComponent.prototype.ngOnInit = function () {
        this.closeWindow();
    };
    CourseComponent.prototype.openWindow = function () {
        this.currentState = 'open';
        this.showWindow = true;
    };
    CourseComponent.prototype.closeWindow = function () {
        this.currentState = 'close';
        this.showWindow = false;
    };
    CourseComponent.prototype.startBtn = function () {
        this.router.navigate(['/course/1/page/1']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CourseComponent.prototype, "currentState", void 0);
    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translate(0px,-100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translate(0px,0%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('*=>close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('*=>open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2000ms'))
                ])
            ],
            styles: [__webpack_require__(/*! ./course.component.scss */ "./src/app/course/course.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/course/page/page.component.html":
/*!*************************************************!*\
  !*** ./src/app/course/page/page.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <div id=\"menu_icon\"></div>\n  <div class=\"playerTitle white_text hide_768\">\n    <h2 class=\"bottom_0 \">{{content.course.title}} </h2>\n  </div>\n  <div id=\"logo\"></div>\n</div>\n\n\n<div id=\"stage\">\n  <div class=\"menu\">\n    <ul>\n      <li (click)=\"gotoPage($index)\" *ngFor=\"let item of content.menu.topic; let i = index;\"\n        [ngClass]=\"{active : curr_page == i}\">\n        <div id=\"tick_mark\"></div>\n        <svg version=\"1.1\" id=\"tick\" *ngIf=\"curr_page == i\" xmlns=\"http://www.w3.org/2000/svg\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 37 37\"\n          style=\"enable-background:new 0 0 37 37;\" xml:space=\"preserve\">\n          <path class=\"circ path\"\n            style=\"fill:none;stroke:#E2000F;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;\"\n            d=\"\n                                   M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z\" />\n          <polyline class=\"tick path\"\n            style=\"fill:none;stroke:#E2000F;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;\" points=\"\n                                   11.6,20 15.9,24.2 26.4,13.8 \" />\n        </svg>\n        <a href=\"#\">{{item.title}}</a>\n      </li>\n    </ul>\n  </div>\n\n  <div id=\"page\">\n    <div id=\"pageNo\">\n      {{curr_page + 1}} / {{total_page}}\n    </div>\n    <div class=\"title\">\n        <h2>{{page.title}}</h2>\n        <hr class=\"hr_width\">\n    </div>\n    <div class=\"content\">\n      <layout></layout>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <div class=\"left\">\n      <div id=\"progress\">\n        <div id=\"outer\">\n          <div id=\"inner\"></div>\n        </div>\n      </div>\n    </div>\n    <!--\n    <div id=\"next_tooltip\" class=\"tooltip top\" role=\"tooltip\">\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\">\n        Click Next to continue.\n      </div>\n    </div>-->\n    <div class=\"right bottom_btn\">\n      <div id=\"prev_btn\" ng-class=\"{disable : curr_page == 0}\" ng-click=\"prev()\">\n      </div>\n      <div id=\"next_btn\" ng-class=\"{disable : curr_page == total_page-1 || nextEnable != true}\" ng-click=\"next()\">\n      </div>\n      <div id=\"audio_btn\" ng-click=\"audio_click()\">\n        <img src=\"/assets/course1/{{audio_icon}}\" alt=\"audio\">\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course/page/page.component.scss":
/*!*************************************************!*\
  !*** ./src/app/course/page/page.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header #logo {\n  background-image: url(\"/assets/course1/splashscreen_logo.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 0px;\n  top: 10px;\n  width: 219px;\n  height: 72px;\n  z-index: 1;\n  transition: all 0.5s ease; }\n\n#menu_icon {\n  background-image: url(\"/assets/course1/menu.png\");\n  position: absolute;\n  left: 27px;\n  top: 20px;\n  width: 22px;\n  height: 21px;\n  z-index: 10;\n  cursor: pointer; }\n\nsvg#tick {\n  width: 30px;\n  height: 30px;\n  float: right; }\n\n.playerTitle {\n  /* float: left; */\n  /* height: 52px; */\n  margin-left: 69px;\n  margin-top: 10px;\n  /* width: 53%; */\n  margin-bottom: 15px; }\n\n.playerTitle h2 {\n    font-weight: normal;\n    font-size: x-large;\n    color: #fff;\n    margin-top: 15px; }\n\n#header {\n  float: left;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  min-height: 60px;\n  background-color: #E2000F; }\n\n.menu {\n  float: left;\n  width: 350px;\n  height: calc(100vh - 104px);\n  border-right: 1px solid #E2000F;\n  background-color: #fff; }\n\n.menu ul {\n  margin: 0px;\n  padding: 0px; }\n\n.menu ul li {\n  list-style: none;\n  margin: 2px 0px;\n  padding: 15px;\n  cursor: pointer;\n  border-bottom: 1px solid #eee;\n  transition: all 0.3s ease, background-position 1ms; }\n\n.menu ul li:hover {\n  background-color: #fbfbfb; }\n\n.menu ul li a.active {\n  background-color: #eeffff; }\n\n.menu ul li.active {\n  border-left: 5px solid #E2000F;\n  background: #fbfbfb; }\n\n.menu ul li:hover a,\n.menu ul li.active a {\n  color: #E2000F; }\n\n.menu ul li a {\n  text-decoration: none;\n  color: #333; }\n\n.menu {\n  /* max-width: 250px; */\n  overflow: auto;\n  transition: height 0.5s;\n  /* -webkit-transition: all 0.5s ease; */ }\n\n.footer {\n  position: fixed;\n  width: 100vw;\n  height: 40px;\n  bottom: 0px;\n  /*max-width: 1014px;*/\n  /*margin-left: 350px;*/\n  background-color: #E2000F; }\n\n.footer.full {\n  max-width: 1364px;\n  margin-left: 0px; }\n\n#progress > #outer {\n  border-radius: 10px;\n  background-color: #fff;\n  width: 150px;\n  height: 10px;\n  position: absolute;\n  margin-top: 15px;\n  margin-left: 10px; }\n\n#progress > #outer > #inner {\n  background-color: #575756;\n  margin: 1px;\n  width: calc(0% - 2px);\n  height: 8px;\n  border-radius: 10px;\n  transition: all 0.5s ease; }\n\n.right {\n  position: absolute;\n  display: flex;\n  right: 0px; }\n\n.bottom_btn > div {\n  padding: 10px;\n  cursor: pointer;\n  /* background-color: #B6000F; */\n  margin-right: 1px;\n  min-width: 40px;\n  text-align: center; }\n\n.bottom_btn > div:hover {\n  background-color: #B6000F; }\n\n#prev_btn.disable {\n  background-image: url(\"/assets/course1/left_disable.png\");\n  cursor: default; }\n\n#next_btn.disable {\n  background-image: url(\"/assets/course1/right_disable.png\");\n  cursor: default; }\n\n#prev_btn.disable:hover,\n#next_btn.disable:hover {\n  background-color: #E2000F; }\n\n#prev_btn {\n  background-image: url(\"/assets/course1/left.png\");\n  background-position: center;\n  background-repeat: no-repeat; }\n\n#next_btn {\n  background-image: url(\"/assets/course1/right.png\");\n  background-position: center;\n  background-repeat: no-repeat; }\n\n#pageNo {\n  /*position: absolute;\r\n    left: 41px;\r\n    top: 15px;*/\n  font-size: small;\n  color: #869098; }\n\n#next_tooltip {\n  top: -33px;\n  right: 12px; }\n\n#page {\n  position: absolute;\n  margin-top: 64px;\n  margin-left: 351px;\n  height: calc(100% - 104px);\n  background-color: #ffffff;\n  /* width: calc(100% - 65px); */\n  padding: 20px;\n  width: calc(100% - 392px);\n  overflow: auto;\n  transition-delay: 2s;\n  transition: all 0.5s ease; }\n\n#page h2 {\n  font-weight: normal;\n  font-size: xx-large; }\n\n#page .title h2 {\n  margin: 0px; }\n\n.hr_width {\n  margin: 5px 0px;\n  text-align: left;\n  width: 80px;\n  border-width: 3px;\n  border-color: #E2000F;\n  border-style: solid; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL3BhZ2UvRjpcXEdJVFxcUHJvamVjdFxcSGFzbmFUZWNoXFxzaGVsbC9zcmNcXGFwcFxcY291cnNlXFxwYWdlXFxwYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3Vyc2UvcGFnZS9GOlxcR0lUXFxQcm9qZWN0XFxIYXNuYVRlY2hcXHNoZWxsL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvdXJzZS9wYWdlL3BhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw4REFBOEQ7RUFDOUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxpREFBaUQ7RUFDakQsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUVoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFBO0VBQ0EsbUJBQW1CLEVBQUE7O0FBTnZCO0lBUVEsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQ3RDSztJRHVDTCxnQkFBZ0IsRUFBQTs7QUFHeEI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isa0RBQWtELEVBQUE7O0FBR3REO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBOztBQUd2Qjs7RUFFSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHNCQUFBO0VBQ0EsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix1Q0FBQSxFQUF3Qzs7QUFJNUM7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVSxFQUFBOztBQUdkO0VBQ0ksYUFBYTtFQUNiLGVBQWU7RUFDZiwrQkFBQTtFQUNBLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseURBQXlEO0VBQ3pELGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwwREFBMEQ7RUFDMUQsZUFBZSxFQUFBOztBQUduQjs7RUFFSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxpREFBaUQ7RUFDakQsMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGtEQUFrRDtFQUNsRCwyQkFBMkI7RUFDM0IsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0k7O2VFekJXO0VGNEJYLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFJZjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsOEJBQUE7RUFDQSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2UvcGFnZS9wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlc1wiO1xyXG4jaGVhZGVyICNsb2dvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9jb3Vyc2UxL3NwbGFzaHNjcmVlbl9sb2dvLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMjE5cHg7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuI21lbnVfaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2NvdXJzZTEvbWVudS5wbmdcIik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyN3B4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5zdmcjdGljayB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ucGxheWVyVGl0bGUge1xyXG4gICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgICAvKiBoZWlnaHQ6IDUycHg7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogNjlweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvKiB3aWR0aDogNTMlOyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICBjb2xvcjokd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxufVxyXG4jaGVhZGVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMjAwMEY7XHJcbiAgIFxyXG59XHJcbi5tZW51IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UyMDAwRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tZW51IHVsIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ubWVudSB1bCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAycHggMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1wb3NpdGlvbiAxbXM7XHJcbn1cclxuXHJcbi5tZW51IHVsIGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbn1cclxuXHJcbi5tZW51IHVsIGxpIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWZmZmY7XHJcbn1cclxuXHJcbi5tZW51IHVsIGxpLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMjAwMEY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG59XHJcblxyXG4ubWVudSB1bCBsaTpob3ZlciBhLFxyXG4ubWVudSB1bCBsaS5hY3RpdmUgYSB7XHJcbiAgICBjb2xvcjogI0UyMDAwRjtcclxufVxyXG5cclxuLm1lbnUgdWwgbGkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgLyogbWF4LXdpZHRoOiAyNTBweDsgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XHJcbiAgICAvKiAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7ICovXHJcbn1cclxuXHJcblxyXG4uZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDEwMTRweDsqL1xyXG4gICAgLyptYXJnaW4tbGVmdDogMzUwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMjAwMEY7XHJcbn1cclxuXHJcbi5mb290ZXIuZnVsbCB7XHJcbiAgICBtYXgtd2lkdGg6IDEzNjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcblxyXG4jcHJvZ3Jlc3M+I291dGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4jcHJvZ3Jlc3M+I291dGVyPiNpbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NzU2O1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICB3aWR0aDogY2FsYygwJSAtIDJweCk7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5ib3R0b21fYnRuPmRpdiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0I2MDAwRjsgKi9cclxuICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYm90dG9tX2J0bj5kaXY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I2MDAwRjtcclxufVxyXG5cclxuI3ByZXZfYnRuLmRpc2FibGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2NvdXJzZTEvbGVmdF9kaXNhYmxlLnBuZycpO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4jbmV4dF9idG4uZGlzYWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvY291cnNlMS9yaWdodF9kaXNhYmxlLnBuZycpO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4jcHJldl9idG4uZGlzYWJsZTpob3ZlcixcclxuI25leHRfYnRuLmRpc2FibGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyMDAwRjtcclxufVxyXG5cclxuI3ByZXZfYnRuIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9jb3Vyc2UxL2xlZnQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4jbmV4dF9idG4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2NvdXJzZTEvcmlnaHQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4jcGFnZU5vIHtcclxuICAgIC8qcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDFweDtcclxuICAgIHRvcDogMTVweDsqL1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiAjODY5MDk4O1xyXG59XHJcblxyXG4jbmV4dF90b29sdGlwIHtcclxuICAgIHRvcDogLTMzcHg7XHJcbiAgICByaWdodDogMTJweDtcclxufVxyXG5cclxuXHJcbiNwYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUxcHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwNHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gNjVweCk7ICovXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM5MnB4KTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG4jcGFnZSBoMiB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG4jcGFnZSAudGl0bGUgaDJ7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uaHJfd2lkdGgge1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNFMjAwMEY7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59IiwiJGdyZXkgOiAjZWVlZWVlO1xyXG4kd2hpdGUgOiAjZmZmO1xyXG4kYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4kZGFyay1ncmV5OiMzMzMzMzM7IiwiI2hlYWRlciAjbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvY291cnNlMS9zcGxhc2hzY3JlZW5fbG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiAyMTlweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlOyB9XG5cbiNtZW51X2ljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2NvdXJzZTEvbWVudS5wbmdcIik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjdweDtcbiAgdG9wOiAyMHB4O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICB6LWluZGV4OiAxMDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbnN2ZyN0aWNrIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbi5wbGF5ZXJUaXRsZSB7XG4gIC8qIGZsb2F0OiBsZWZ0OyAqL1xuICAvKiBoZWlnaHQ6IDUycHg7ICovXG4gIG1hcmdpbi1sZWZ0OiA2OXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAvKiB3aWR0aDogNTMlOyAqL1xuICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XG4gIC5wbGF5ZXJUaXRsZSBoMiB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogMTVweDsgfVxuXG4jaGVhZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMjAwMEY7IH1cblxuLm1lbnUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDRweCk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFMjAwMEY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cblxuLm1lbnUgdWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4OyB9XG5cbi5tZW51IHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAycHggMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLXBvc2l0aW9uIDFtczsgfVxuXG4ubWVudSB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7IH1cblxuLm1lbnUgdWwgbGkgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmZmZmOyB9XG5cbi5tZW51IHVsIGxpLmFjdGl2ZSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UyMDAwRjtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjsgfVxuXG4ubWVudSB1bCBsaTpob3ZlciBhLFxuLm1lbnUgdWwgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogI0UyMDAwRjsgfVxuXG4ubWVudSB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMzMzsgfVxuXG4ubWVudSB7XG4gIC8qIG1heC13aWR0aDogMjUwcHg7ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlOyAqLyB9XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3R0b206IDBweDtcbiAgLyptYXgtd2lkdGg6IDEwMTRweDsqL1xuICAvKm1hcmdpbi1sZWZ0OiAzNTBweDsqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTIwMDBGOyB9XG5cbi5mb290ZXIuZnVsbCB7XG4gIG1heC13aWR0aDogMTM2NHB4O1xuICBtYXJnaW4tbGVmdDogMHB4OyB9XG5cbiNwcm9ncmVzcyA+ICNvdXRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XG5cbiNwcm9ncmVzcyA+ICNvdXRlciA+ICNpbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NTY7XG4gIG1hcmdpbjogMXB4O1xuICB3aWR0aDogY2FsYygwJSAtIDJweCk7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlOyB9XG5cbi5yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcmlnaHQ6IDBweDsgfVxuXG4uYm90dG9tX2J0biA+IGRpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI0I2MDAwRjsgKi9cbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5ib3R0b21fYnRuID4gZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I2MDAwRjsgfVxuXG4jcHJldl9idG4uZGlzYWJsZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvY291cnNlMS9sZWZ0X2Rpc2FibGUucG5nXCIpO1xuICBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuI25leHRfYnRuLmRpc2FibGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2NvdXJzZTEvcmlnaHRfZGlzYWJsZS5wbmdcIik7XG4gIGN1cnNvcjogZGVmYXVsdDsgfVxuXG4jcHJldl9idG4uZGlzYWJsZTpob3ZlcixcbiNuZXh0X2J0bi5kaXNhYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyMDAwRjsgfVxuXG4jcHJldl9idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2NvdXJzZTEvbGVmdC5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxuXG4jbmV4dF9idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2NvdXJzZTEvcmlnaHQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cblxuI3BhZ2VObyB7XG4gIC8qcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDFweDtcclxuICAgIHRvcDogMTVweDsqL1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogIzg2OTA5ODsgfVxuXG4jbmV4dF90b29sdGlwIHtcbiAgdG9wOiAtMzNweDtcbiAgcmlnaHQ6IDEycHg7IH1cblxuI3BhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG4gIG1hcmdpbi1sZWZ0OiAzNTFweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDRweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSA2NXB4KTsgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM5MnB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHRyYW5zaXRpb24tZGVsYXk6IDJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlOyB9XG5cbiNwYWdlIGgyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTsgfVxuXG4jcGFnZSAudGl0bGUgaDIge1xuICBtYXJnaW46IDBweDsgfVxuXG4uaHJfd2lkdGgge1xuICBtYXJnaW46IDVweCAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItd2lkdGg6IDNweDtcbiAgYm9yZGVyLWNvbG9yOiAjRTIwMDBGO1xuICBib3JkZXItc3R5bGU6IHNvbGlkOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/course/page/page.component.ts":
/*!***********************************************!*\
  !*** ./src/app/course/page/page.component.ts ***!
  \***********************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");



var PageComponent = /** @class */ (function () {
    function PageComponent(service) {
        this.service = service;
        this.curr_page = this.service.curr_page;
        this.total_page = 3;
        this.audio_icon = "audio.png";
    }
    PageComponent.prototype.ngOnInit = function () {
        this.content = this.service.content;
        this.page = this.service.getPageContent();
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/course/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.scss */ "./src/app/course/page/page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top_bar\">\n  <button class=\"button\" (click)=\"showpanel = true\">New Course</button>\n</div>\n\n<div class=\"fl-window\" *ngIf=\"showpanel == true\">\n  <div class=\"fl-panel\">\n      <h2>New Course</h2>\n      <form action=\"\">\n        <label class=\"label\" for=\"name\">Course Name</label>\n        <input class=\"input-full\" maxlength=\"100\" type=\"text\" name=\"name\" />\n        <button type=\"submit\" class=\"button savebtn\" (click)=\"createCourse()\">Create</button>\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top_bar {\n  background: #fff;\n  border-bottom: 1px solid #ddd;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcR0lUXFxQcm9qZWN0XFxIYXNuYVRlY2hcXHNoZWxsL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL0Y6XFxHSVRcXFByb2plY3RcXEhhc25hVGVjaFxcc2hlbGwvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGdCQ0ZTO0VER1QsNkJDRmU7RURHZixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XHJcbi50b3BfYmFyXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iLCIkZ3JleSA6ICNlZWVlZWU7XHJcbiR3aGl0ZSA6ICNmZmY7XHJcbiRib3JkZXItY29sb3I6ICNkZGQ7XHJcbiRkYXJrLWdyZXk6IzMzMzMzMzsiXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.showpanel = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.createCourse = function () {
        //this.router.navigate(['/course/1'])
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/service/common.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonService = /** @class */ (function () {
    function CommonService() {
        this.mode = "edit";
        //mode = "course";
        this.curr_page = 0;
        this.content = {
            "course": {
                "welcome": "Welcome to Danfoss",
                "title": "Introduction to Refrigeration",
                "topic": "",
                "description": "This module will discuss the overall purpose of the e-learning course and also provide an introduction to Refrigeration. This will need 12 minutes to complete.",
                "start_btn": "start the course",
                "audio": "media/topic1_welcome.mp3",
                "logo": "assets/course1/splashscreen_logo.png"
            },
            "menu": {
                "topic": [
                    {
                        "title": "Objective ",
                        "audio": "media/topic1_pg1.mp3",
                        "row": [
                            {
                                "block": [
                                    {
                                        "class": "cell_5",
                                        "component": {
                                            "type": "image",
                                            "content": {
                                                "tag": "image",
                                                "value": "assets/sample/sample.png",
                                                "attr": "Alt text"
                                            }
                                        }
                                    },
                                    {
                                        "class": "cell_5",
                                        "component": {
                                            "type": "htmltext",
                                            "content": {
                                                "tag": "htmltext",
                                                "value": "\n                      <p>At the end of this topic, you will be able to:</p><ul><li>Define refrigeration and cooling</li><li>List the application of refrigeration in household and industries</li><li>Analyse how time and temperature influences the growth of micro-organisms in food</li></ul>"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "block": [
                                    {
                                        "class": "cell_full",
                                        "component": {
                                            "type": "heading",
                                            "content": {
                                                "tag": "h1",
                                                "value": "Optyma opláštěné kondenzační jednotky"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "block": [
                                    {
                                        "class": "cell_full",
                                        "component": {
                                            "type": "heading",
                                            "content": {
                                                "tag": "h1",
                                                "value": "शीथेड कंडेनसर यूनिट का विकल्प"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "block": [
                                    {
                                        "class": "cell_full",
                                        "component": {
                                            "type": "heading",
                                            "content": {
                                                "tag": "h1",
                                                "value": "உறைந்த மின்தேக்கி அலகுக்கான விருப்பங்கள்"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "block": [
                                    {
                                        "class": "cell_3",
                                        "component": {
                                            "type": "htmltext",
                                            "content": {
                                                "tag": "htmltext",
                                                "value": "Text"
                                            }
                                        }
                                    },
                                    {
                                        "class": "cell_7",
                                        "component": {
                                            "type": "heading",
                                            "content": {
                                                "tag": "h1",
                                                "value": "铠装冷凝机组操作"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "block": [
                                    {
                                        "class": "cell_full",
                                        "component": {
                                            "type": "heading",
                                            "content": {
                                                "tag": "h1",
                                                "value": "Heading"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "block": [
                                    {
                                        "class": "cell_full",
                                        "component": {
                                            "type": "htmltext",
                                            "content": {
                                                "tag": "htmltext",
                                                "value": "Text"
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Refrigeration",
                        "file": "common/text_image_right.html",
                        "audio": "media/topic1_pg2.mp3",
                        "showMenu": true,
                        "interaction": false,
                        "text": {
                            "p": ["Cold beverages and ice creams are our favourite treats during summer. ",
                                "We all know that refrigeration is the best way to keep things cool and fresh.",
                                "We will explore more about Refrigeration in this module."
                            ]
                        },
                        "image": "image/topic1/ref_t1_p3.jpg"
                    },
                    {
                        "title": "Why refrigerate?",
                        "file": "common/text_image_right.html",
                        "audio": "media/topic1_pg3.mp3",
                        "showMenu": true,
                        "interaction": false,
                        "text": {
                            "p": ["Refrigeration reduces the temperature of a substance by removing energy - in the form of heat.",
                                "Cold beverages and ice creams in refrigerator. It is cool.",
                                "<b>Cooling:</b>",
                                "A natural or an artificial process by which heat is dissipated. "
                            ]
                        },
                        "image": "image/topic1/t1_page4.jpg"
                    }
                ]
            }
        };
    }
    CommonService.prototype.getPageContent = function () {
        return this.content.menu.topic[this.curr_page];
    };
    CommonService.prototype.setPageNo = function (n) {
        this.curr_page = n;
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonService);
    return CommonService;
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\GIT\Project\HasnaTech\shell\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map