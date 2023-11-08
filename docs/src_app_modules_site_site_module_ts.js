"use strict";
(self["webpackChunkstroyka"] = self["webpackChunkstroyka"] || []).push([["src_app_modules_site_site_module_ts"],{

/***/ 1565:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-about-us/page-about-us.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAboutUsComponent": () => (/* binding */ PageAboutUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/direction.service */ 7341);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/owl-prevent-click.directive */ 876);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function PageAboutUsComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Michael Russo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Chief Executive Officer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function PageAboutUsComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Katherine Miller");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Marketing Officer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function PageAboutUsComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Anthony Harris");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Finance Director");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class PageAboutUsComponent {
    constructor(direction) {
        this.direction = direction;
        this.carouselOptions = {
            nav: false,
            dots: true,
            responsive: {
                580: { items: 3, margin: 32 },
                280: { items: 2, margin: 24 },
                0: { items: 1 }
            },
            rtl: this.direction.isRTL()
        };
    }
    static { this.ɵfac = function PageAboutUsComponent_Factory(t) { return new (t || PageAboutUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_0__.DirectionService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageAboutUsComponent, selectors: [["app-about-us"]], decls: 30, vars: 2, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "block", "about-us"], [1, "about-us__image"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-xl-10"], [1, "about-us__body"], [1, "about-us__title"], [1, "about-us__text", "typography"], [1, "about-us__team"], [1, "about-us__team-title"], [1, "about-us__team-subtitle", "text-muted"], ["routerLink", "../contact-us"], [1, "about-us__teammates", "teammates"], ["appOwlPreventClick", "", 3, "options"], ["carouselSlide", ""], [1, "teammates__item", "teammate"], [1, "teammate__avatar"], ["src", "assets/images/teammates/teammate-1.jpg", "alt", ""], [1, "teammate__name"], [1, "teammate__position", "text-muted"], ["src", "assets/images/teammates/teammate-2.jpg", "alt", ""], ["src", "assets/images/teammates/teammate-3.jpg", "alt", ""]], template: function PageAboutUsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h1", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "About Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus metus, convallis ut leo nec, tincidunt eleifend justo. Ut felis orci, hendrerit a pulvinar et, gravida ac lorem. Sed vitae molestie sapien, at sollicitudin tortor. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Duis id volutpat libero, id vestibulum purus.Donec euismod accumsan felis,egestas lobortis velit tempor vitae. Integer eget velit fermentum, dignissim odio non, bibendum velit. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "h2", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Meat Our Team");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Want to work in our friendly team?");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Contact us");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " and we will consider your candidacy.");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 14)(26, "owl-carousel-o", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, PageAboutUsComponent_ng_template_27_Template, 7, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, PageAboutUsComponent_ng_template_28_Template, 7, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, PageAboutUsComponent_ng_template_29_Template, 7, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.carouselOptions);
        } }, dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective, _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_1__.OwlPreventClickDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWFib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 234:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-components/page-components.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageComponentsComponent": () => (/* binding */ PageComponentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/alert/alert.component */ 8332);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);





function PageComponentsComponent_app_alert_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-alert", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function PageComponentsComponent_app_alert_8_Template_app_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.showAlert = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " A simple large alert with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "an example link");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, ". Give it a click if you like. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", true);
} }
function PageComponentsComponent_div_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 17)(6, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Extra Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 17)(12, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Button Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 17)(18, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Button Normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17)(24, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Button Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17)(30, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Extra Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p")(36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Loading State");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 17)(39, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Extra Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 17)(45, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Button Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 17)(51, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Button Normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 17)(57, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Button Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 17)(63, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Extra Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "p")(69, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Disabled State");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 17)(72, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Button Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 17)(78, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Button Normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 17)(84, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Button Small 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 17)(90, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Extra Small 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const style_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 99, style_r4), " Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-xl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-xl btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-lg btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-sm btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-xs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-xs btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-loading btn-xl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-loading btn-xl btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-loading btn-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-loading btn-lg btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-loading btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-loading btn-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-loading btn-sm btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-loading btn-xs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-loading btn-xs btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-lg btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-sm btn-svg-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-xs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", style_r4, " btn-xs btn-svg-icon");
} }
const _c0 = function () { return { label: "Home", url: "../../" }; };
const _c1 = function () { return { label: "Components", url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
const _c3 = function () { return ["primary", "secondary", "light"]; };
class PageComponentsComponent {
    constructor() {
        this.showAlert = true;
    }
    static { this.ɵfac = function PageComponentsComponent_Factory(t) { return new (t || PageComponentsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageComponentsComponent, selectors: [["app-components"]], decls: 161, vars: 11, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], [1, "block"], [1, "container"], [1, "row"], [1, "col-12"], ["class", "mb-3", "type", "primary", "size", "lg", 3, "dismissible", "close", 4, "ngIf"], [1, "col-12", "col-md-6"], ["type", "info", 1, "mb-3"], ["href", ""], ["type", "primary", 1, "mb-3"], ["type", "secondary", 1, "mb-3", "mb-md-5"], ["type", "success", 1, "mb-3"], ["type", "danger", 1, "mb-3"], ["type", "warning", 1, "mb-3", "mb-md-5"], [1, "col-lg-4"], [1, "form-group"], ["type", "text", "placeholder", "Placeholder", 1, "form-control"], ["type", "text", "placeholder", "Placeholder", "readonly", "", 1, "form-control"], ["type", "text", "placeholder", "Placeholder", "disabled", "", 1, "form-control"], ["type", "text", "placeholder", "Placeholder", 1, "form-control", "is-valid"], [1, "valid-feedback"], ["type", "text", "placeholder", "Placeholder", 1, "form-control", "is-invalid"], [1, "invalid-feedback"], [1, "mt-5"], ["type", "text", "placeholder", "Large", 1, "form-control", "form-control-lg"], ["type", "text", "placeholder", "Normal", 1, "form-control"], ["type", "text", "placeholder", "Small", 1, "form-control", "form-control-sm"], [1, "form-control"], ["disabled", "", 1, "form-control"], [1, "form-control", "is-valid"], [1, "form-control", "is-invalid"], [1, "form-control", "form-control-lg"], [1, "form-control", "form-control-sm"], ["rows", "3", "placeholder", "Placeholder", 1, "form-control"], ["rows", "3", "placeholder", "Placeholder", "readonly", "", 1, "form-control"], ["rows", "3", "placeholder", "Placeholder", "disabled", "", 1, "form-control"], ["rows", "3", "placeholder", "Placeholder", 1, "form-control", "is-valid"], ["rows", "3", "placeholder", "Placeholder", 1, "form-control", "is-invalid"], ["rows", "3", "placeholder", "Large", 1, "form-control", "form-control-lg"], ["rows", "3", "placeholder", "Normal", 1, "form-control"], ["rows", "3", "placeholder", "Small", 1, "form-control", "form-control-sm"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], ["type", "primary", "size", "lg", 1, "mb-3", 3, "dismissible", "close"], ["name", "quickview-16", "size", "16"], ["disabled", ""]], template: function PageComponentsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PageComponentsComponent_app_alert_8_Template, 5, 1, "app-alert", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "app-alert", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "A simple alert with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "an example link");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, ". Give it a click if you like.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "app-alert", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "A simple alert with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "an example link");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, ". Give it a click if you like.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "app-alert", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "A simple alert with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "an example link");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, ". Give it a click if you like.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 8)(26, "app-alert", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "A simple alert with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "an example link");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, ". Give it a click if you like.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "app-alert", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "A simple alert with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "an example link");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, ". Give it a click if you like.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "app-alert", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "A simple alert with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "an example link");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, ". Give it a click if you like.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 5)(42, "div", 16)(43, "p")(44, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Text Field");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 17)(47, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Default");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 17)(51, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Readonly");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 17)(55, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Disabled");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 17)(59, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Example invalid feedback text");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 17)(65, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Error");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Example invalid feedback text");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "p", 25)(71, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Text Field Sizes");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 16)(80, "p")(81, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 17)(84, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Default");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "select", 29)(87, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Select value...");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 17)(90, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Disabled");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "select", 30)(93, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Select value...");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 17)(96, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "select", 31)(99, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Select value...");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Example invalid feedback text");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 17)(104, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Error");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "select", 32)(107, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Select value...");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Example invalid feedback text");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "p", 25)(112, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Text Field Sizes");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 17)(115, "select", 33)(116, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Large...");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 17)(119, "select", 29)(120, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Large...");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 17)(123, "select", 34)(124, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Large...");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 16)(127, "p")(128, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Textarea");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 17)(131, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Default");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "textarea", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 17)(135, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Readonly");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "textarea", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 17)(139, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Disabled");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "textarea", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 17)(143, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "textarea", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 17)(147, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Error");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "textarea", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "p", 25)(151, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Textarea Sizes");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](154, "textarea", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](156, "textarea", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](158, "textarea", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](160, PageComponentsComponent_div_160_Template, 95, 101, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", "Components")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1)));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAlert);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](152);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c3));
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNvbXBvbmVudHMuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 9593:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-contact-us-alt/page-contact-us-alt.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContactUsAltComponent": () => (/* binding */ PageContactUsAltComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);


const _c0 = function () { return { label: "Home", url: "../../" }; };
const _c1 = function () { return { label: "Contact Us", url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class PageContactUsAltComponent {
    constructor() { }
    static { this.ɵfac = function PageContactUsAltComponent_Factory(t) { return new (t || PageContactUsAltComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageContactUsAltComponent, selectors: [["app-page-contact-us-alt"]], decls: 59, vars: 8, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], [1, "block"], [1, "container"], [1, "card", "mb-0", "contact-us"], [1, "contact-us__map"], ["src", "https://maps.google.com/maps?q=Holbrook-Palmer%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed"], [1, "card-body"], [1, "contact-us__container"], [1, "row"], [1, "col-12", "col-lg-6", "pb-4", "pb-lg-0"], [1, "contact-us__header", "card-title"], [1, "contact-us__address"], [1, "col-12", "col-lg-6"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "form-name"], ["type", "text", "id", "form-name", "placeholder", "Your Name", 1, "form-control"], ["for", "form-email"], ["type", "email", "id", "form-email", "placeholder", "Email Address", 1, "form-control"], [1, "form-group"], ["for", "form-subject"], ["type", "text", "id", "form-subject", "placeholder", "Subject", 1, "form-control"], ["for", "form-message"], ["id", "form-message", "rows", "4", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function PageContactUsAltComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "iframe", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h4", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Our Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13)(16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " 715 Fake Ave, Apt. 34, New York, NY 10021 USA");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Email: stroyka@example.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Phone Number: +1 754 000-00-00 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p")(23, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Opening Hours");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Monday to Friday: 8am-8pm");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Saturday: 8am-6pm");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Sunday: 10am-4pm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p")(32, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit mi, non tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 14)(37, "h4", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Leave us a Message");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "form")(40, "div", 15)(41, "div", 16)(42, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Your Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 16)(46, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21)(50, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Subject");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 21)(54, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Message");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "textarea", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Send Message");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "Contact Us")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1)));
        } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNvbnRhY3QtdXMtYWx0LmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 4455:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-contact-us/page-contact-us.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContactUsComponent": () => (/* binding */ PageContactUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _blocks_block_map_block_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/block-map/block-map.component */ 9058);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);



const _c0 = function () { return { label: "Home", url: "../../" }; };
const _c1 = function () { return { label: "Contact Us", url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class PageContactUsComponent {
    constructor() { }
    static { this.ɵfac = function PageContactUsComponent_Factory(t) { return new (t || PageContactUsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageContactUsComponent, selectors: [["app-contact-us"]], decls: 58, vars: 8, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], [1, "block"], [1, "container"], [1, "card", "mb-0"], [1, "card-body", "contact-us"], [1, "contact-us__container"], [1, "row"], [1, "col-12", "col-lg-6", "pb-4", "pb-lg-0"], [1, "contact-us__header", "card-title"], [1, "contact-us__address"], [1, "col-12", "col-lg-6"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "form-name"], ["type", "text", "id", "form-name", "placeholder", "Your Name", 1, "form-control"], ["for", "form-email"], ["type", "email", "id", "form-email", "placeholder", "Email Address", 1, "form-control"], [1, "form-group"], ["for", "form-subject"], ["type", "text", "id", "form-subject", "placeholder", "Subject", 1, "form-control"], ["for", "form-message"], ["id", "form-message", "rows", "4", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function PageContactUsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-block-map")(4, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Our Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " 715 Fake Ave, Apt. 34, New York, NY 10021 USA");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Email: stroyka@example.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Phone Number: +1 754 000-00-00 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p")(22, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Opening Hours");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Monday to Friday: 8am-8pm");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Saturday: 8am-6pm");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Sunday: 10am-4pm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p")(31, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit mi, non tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 12)(36, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Leave us a Message");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "form")(39, "div", 13)(40, "div", 14)(41, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Your Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 14)(45, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 19)(49, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Subject");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 19)(53, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Message");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "textarea", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Send Message");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", "Contact Us")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1)));
        } }, dependencies: [_blocks_block_map_block_map_component__WEBPACK_IMPORTED_MODULE_0__.BlockMapComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 1446:
/*!*******************************************************************!*\
  !*** ./src/app/modules/site/pages/page-faq/page-faq.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageFaqComponent": () => (/* binding */ PageFaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);


const _c0 = function () { return { label: "Home", url: "../../" }; };
const _c1 = function () { return { label: "Frequently Asked Questions", url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class PageFaqComponent {
    constructor() { }
    static { this.ɵfac = function PageFaqComponent_Factory(t) { return new (t || PageFaqComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageFaqComponent, selectors: [["app-faq"]], decls: 68, vars: 8, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], [1, "block", "faq"], [1, "container"], [1, "faq__section"], [1, "faq__section-title"], [1, "faq__section-body"], [1, "row"], [1, "faq__section-column", "col-12", "col-lg-6"], [1, "typography"]], template: function PageFaqComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Shipping Information");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "What shipping methods are available?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Do you ship internationally?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9)(23, "div", 10)(24, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "What shipping methods are available?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Do you ship internationally?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5)(33, "div", 6)(34, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Payment Information");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7)(37, "div", 8)(38, "div", 9)(39, "div", 10)(40, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "What shipping methods are available?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9)(45, "div", 10)(46, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "What shipping methods are available?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 5)(51, "div", 6)(52, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Orders and Returns");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 7)(55, "div", 8)(56, "div", 9)(57, "div", 10)(58, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "What shipping methods are available?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 9)(63, "div", 10)(64, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "What shipping methods are available?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "Frequently Asked Questions")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1)));
        } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWZhcS5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 4094:
/*!***********************************************************************!*\
  !*** ./src/app/modules/site/pages/page-terms/page-terms.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTermsComponent": () => (/* binding */ PageTermsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const _c0 = function () { return { label: "Home", url: "../../" }; };
const _c1 = function () { return { label: "Terms And Conditions", url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class PageTermsComponent {
    constructor() { }
    static { this.ɵfac = function PageTermsComponent_Factory(t) { return new (t || PageTermsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageTermsComponent, selectors: [["app-terms"]], decls: 39, vars: 7, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "breadcrumbs"], [1, "block"], [1, "container"], [1, "document"], [1, "document__header"], [1, "document__title"], [1, "document__subtitle"], [1, "document__content", "typography"], ["routerLink", "/site/contact-us"]], template: function PageTermsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Terms And Conditions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "This Agreement was last modified on 27 May 2018.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate. Suspendisse potenti. Pellentesque et molestie ante. In feugiat ante vitae ultricies malesuada. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Definitions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ol")(18, "li")(19, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Risus");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " \u2014 Morbi posuere eleifend sollicitudin. Praesent eget ante in enim scelerisque scelerisque. Donec mi lorem, molestie a sapien non, laoreet convallis felis. In semper felis in lacus venenatis, sit amet commodo leo interdum. Maecenas congue ut leo et auctor. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Praesent");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " \u2014 Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla orci ante, viverra in imperdiet in, pharetra et leo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Vestibulum");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " \u2014 Vestibulum arcu tellus, aliquam vel fermentum vestibulum, lacinia pulvinar ipsum. In hac habitasse platea dictumst. Integer felis libero, blandit scelerisque mauris eget, porta elementum sapien. Mauris luctus arcu non enim lobortis gravida. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Ornare dolor");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate. Suspendisse potenti. Pellentesque et molestie ante. In feugiat ante vitae ultricies malesuada. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "For information about how to contact us, please visit our ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "contact page");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1)));
        } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXRlcm1zLmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 8822:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-typography/page-typography.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTypographyComponent": () => (/* binding */ PageTypographyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);


const _c0 = function () { return { label: "Home", url: "../../" }; };
const _c1 = function () { return { label: "Typography", url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class PageTypographyComponent {
    constructor() { }
    static { this.ɵfac = function PageTypographyComponent_Factory(t) { return new (t || PageTypographyComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageTypographyComponent, selectors: [["app-typography"]], decls: 93, vars: 7, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "breadcrumbs"], [1, "block"], [1, "container"], [1, "document"], [1, "document__header"], [1, "document__title"], [1, "document__content", "typography"], ["href", ""]], template: function PageTypographyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Typography");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "H2 Header Example");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "H3 Header Example");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "H4 Header Example");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "H5 Header Example");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "H6 Header Example");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Blockquote");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "blockquote")(39, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Suspendisse tempor orci non sapien ullamcorper dapibus. At velit diam. Donec pharetra nec enim blandit vulputate. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p")(42, "cite");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Adam Taylor");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Standard List");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ul")(52, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Morbi dignissim hendrerit ligula, quis rutrum risus ultrices eu");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Nullam dapibus id mauris dignissim dignissim. Sed ut metus mauris.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Nulla mollis justo faucibus, laoreet tortor ac, ornare arcu.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Libero quis mattis sollicitudin, ipsum sem mattis ligula, pharetra consectetur nisl mi sit amet turpis.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Vivamus malesuada, mauris in pulvinar ultricies, eros ligula scelerisque mi, a porttitor nulla ligula sed erat.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Numbered List");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ol")(67, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Morbi dignissim hendrerit ligula, quis rutrum risus ultrices eu");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Nullam dapibus id mauris dignissim dignissim. Sed ut metus mauris.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Nulla mollis justo faucibus, laoreet tortor ac, ornare arcu.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Libero quis mattis sollicitudin, ipsum sem mattis ligula, pharetra consectetur nisl mi sit amet turpis.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Vivamus malesuada, mauris in pulvinar ultricies, eros ligula scelerisque mi, a porttitor nulla ligula sed erat.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Text Styles");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Lorem ipsum ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "bold text");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, ", consectetur ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "em");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "italic text");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, ". Donec facilisis ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "del");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "line through");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " neque ut purus fermentum, ac ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "link");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, ". Vivamus venenatis viverra iaculis. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1)));
        } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXR5cG9ncmFwaHkuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 2206:
/*!*****************************************************!*\
  !*** ./src/app/modules/site/site-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteRoutingModule": () => (/* binding */ SiteRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_page_about_us_page_about_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-about-us/page-about-us.component */ 1565);
/* harmony import */ var _pages_page_contact_us_page_contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-contact-us/page-contact-us.component */ 4455);
/* harmony import */ var _pages_page_contact_us_alt_page_contact_us_alt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-contact-us-alt/page-contact-us-alt.component */ 9593);
/* harmony import */ var _pages_page_terms_page_terms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-terms/page-terms.component */ 4094);
/* harmony import */ var _pages_page_faq_page_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-faq/page-faq.component */ 1446);
/* harmony import */ var _pages_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-components/page-components.component */ 234);
/* harmony import */ var _pages_page_typography_page_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-typography/page-typography.component */ 8822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-us'
    },
    {
        path: 'about-us',
        component: _pages_page_about_us_page_about_us_component__WEBPACK_IMPORTED_MODULE_0__.PageAboutUsComponent
    },
    {
        path: 'contact-us',
        component: _pages_page_contact_us_page_contact_us_component__WEBPACK_IMPORTED_MODULE_1__.PageContactUsComponent
    },
    {
        path: 'contact-us-alt',
        component: _pages_page_contact_us_alt_page_contact_us_alt_component__WEBPACK_IMPORTED_MODULE_2__.PageContactUsAltComponent
    },
    {
        path: 'terms',
        component: _pages_page_terms_page_terms_component__WEBPACK_IMPORTED_MODULE_3__.PageTermsComponent
    },
    {
        path: 'faq',
        component: _pages_page_faq_page_faq_component__WEBPACK_IMPORTED_MODULE_4__.PageFaqComponent
    },
    {
        path: 'components',
        component: _pages_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_5__.PageComponentsComponent
    },
    {
        path: 'typography',
        component: _pages_page_typography_page_typography_component__WEBPACK_IMPORTED_MODULE_6__.PageTypographyComponent
    }
];
class SiteRoutingModule {
    static { this.ɵfac = function SiteRoutingModule_Factory(t) { return new (t || SiteRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SiteRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SiteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 3955:
/*!*********************************************!*\
  !*** ./src/app/modules/site/site.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteModule": () => (/* binding */ SiteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/blocks.module */ 7450);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _site_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-routing.module */ 2206);
/* harmony import */ var _pages_page_about_us_page_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-about-us/page-about-us.component */ 1565);
/* harmony import */ var _pages_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-components/page-components.component */ 234);
/* harmony import */ var _pages_page_contact_us_alt_page_contact_us_alt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-contact-us-alt/page-contact-us-alt.component */ 9593);
/* harmony import */ var _pages_page_contact_us_page_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-contact-us/page-contact-us.component */ 4455);
/* harmony import */ var _pages_page_faq_page_faq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-faq/page-faq.component */ 1446);
/* harmony import */ var _pages_page_terms_page_terms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-terms/page-terms.component */ 4094);
/* harmony import */ var _pages_page_typography_page_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-typography/page-typography.component */ 8822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
// modules (angular)

// modules (third-party)

// modules



// pages








class SiteModule {
    static { this.ɵfac = function SiteModule_Factory(t) { return new (t || SiteModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: SiteModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
            // modules
            _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__.BlocksModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _site_routing_module__WEBPACK_IMPORTED_MODULE_2__.SiteRoutingModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SiteModule, { declarations: [
        // pages
        _pages_page_about_us_page_about_us_component__WEBPACK_IMPORTED_MODULE_3__.PageAboutUsComponent,
        _pages_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_4__.PageComponentsComponent,
        _pages_page_contact_us_alt_page_contact_us_alt_component__WEBPACK_IMPORTED_MODULE_5__.PageContactUsAltComponent,
        _pages_page_contact_us_page_contact_us_component__WEBPACK_IMPORTED_MODULE_6__.PageContactUsComponent,
        _pages_page_faq_page_faq_component__WEBPACK_IMPORTED_MODULE_7__.PageFaqComponent,
        _pages_page_terms_page_terms_component__WEBPACK_IMPORTED_MODULE_8__.PageTermsComponent,
        _pages_page_typography_page_typography_component__WEBPACK_IMPORTED_MODULE_9__.PageTypographyComponent], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        // modules (third-party)
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
        // modules
        _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__.BlocksModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _site_routing_module__WEBPACK_IMPORTED_MODULE_2__.SiteRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_site_site_module_ts.js.map