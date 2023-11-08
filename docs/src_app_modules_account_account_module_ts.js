"use strict";
(self["webpackChunkstroyka"] = self["webpackChunkstroyka"] || []).push([["src_app_modules_account_account_module_ts"],{

/***/ 8904:
/*!***********************************************************!*\
  !*** ./src/app/modules/account/account-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountRoutingModule": () => (/* binding */ AccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-login/page-login.component */ 8137);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/layout.component */ 61);
/* harmony import */ var _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-dashboard/page-dashboard.component */ 8301);
/* harmony import */ var _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-orders-list/page-orders-list.component */ 8601);
/* harmony import */ var _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-addresses-list/page-addresses-list.component */ 7525);
/* harmony import */ var _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-profile/page-profile.component */ 4414);
/* harmony import */ var _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-password/page-password.component */ 5231);
/* harmony import */ var _pages_page_order_details_page_order_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-order-details/page-order-details.component */ 1975);
/* harmony import */ var _pages_page_edit_address_page_edit_address_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-edit-address/page-edit-address.component */ 2860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












const routes = [
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.PageDashboardComponent
            },
            {
                path: 'profile',
                component: _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_5__.PageProfileComponent
            },
            {
                path: 'addresses',
                component: _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_4__.PageAddressesListComponent
            },
            {
                path: 'addresses/:addressId',
                component: _pages_page_edit_address_page_edit_address_component__WEBPACK_IMPORTED_MODULE_8__.PageEditAddressComponent
            },
            {
                path: 'orders',
                component: _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_3__.PageOrdersListComponent
            },
            {
                path: 'orders/:orderId',
                component: _pages_page_order_details_page_order_details_component__WEBPACK_IMPORTED_MODULE_7__.PageOrderDetailsComponent
            },
            {
                path: 'password',
                component: _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_6__.PagePasswordComponent
            }
        ]
    },
    {
        path: 'login',
        component: _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_0__.PageLoginComponent
    }
];
class AccountRoutingModule {
    static { this.ɵfac = function AccountRoutingModule_Factory(t) { return new (t || AccountRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AccountRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 2588:
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 8904);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/layout.component */ 61);
/* harmony import */ var _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-addresses-list/page-addresses-list.component */ 7525);
/* harmony import */ var _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-dashboard/page-dashboard.component */ 8301);
/* harmony import */ var _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-login/page-login.component */ 8137);
/* harmony import */ var _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-orders-list/page-orders-list.component */ 8601);
/* harmony import */ var _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-password/page-password.component */ 5231);
/* harmony import */ var _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-profile/page-profile.component */ 4414);
/* harmony import */ var _pages_page_order_details_page_order_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-order-details/page-order-details.component */ 1975);
/* harmony import */ var _pages_page_edit_address_page_edit_address_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-edit-address/page-edit-address.component */ 2860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
// modules (angular)

// modules


// components

// pages









class AccountModule {
    static { this.ɵfac = function AccountModule_Factory(t) { return new (t || AccountModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AccountModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            // modules
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [
        // components
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
        // pages
        _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_3__.PageAddressesListComponent,
        _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.PageDashboardComponent,
        _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_5__.PageLoginComponent,
        _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_6__.PageOrdersListComponent,
        _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_7__.PagePasswordComponent,
        _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_8__.PageProfileComponent,
        _pages_page_order_details_page_order_details_component__WEBPACK_IMPORTED_MODULE_9__.PageOrderDetailsComponent,
        _pages_page_edit_address_page_edit_address_component__WEBPACK_IMPORTED_MODULE_10__.PageEditAddressComponent], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        // modules
        _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 61:
/*!***********************************************************************!*\
  !*** ./src/app/modules/account/components/layout/layout.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);




const _c0 = function () { return { exact: true }; };
function LayoutComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", link_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r1.label);
} }
const _c1 = function () { return { label: "Home", url: "/" }; };
const _c2 = function () { return { label: "My Account", url: "" }; };
const _c3 = function (a0, a1) { return [a0, a1]; };
class LayoutComponent {
    constructor() {
        this.links = [
            { label: 'Dashboard', url: './dashboard' },
            { label: 'Edit Profile', url: './profile' },
            { label: 'Order History', url: './orders' },
            { label: 'Order Details', url: './orders/5' },
            { label: 'Addresses', url: './addresses' },
            { label: 'Edit Address', url: './addresses/5' },
            { label: 'Password', url: './password' },
            { label: 'Logout', url: './login' }
        ];
    }
    static { this.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 15, vars: 9, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], [1, "block"], [1, "container"], [1, "row"], [1, "col-12", "col-lg-3", "d-flex"], [1, "account-nav", "flex-grow-1"], [1, "account-nav__title"], ["class", "account-nav__item", "routerLinkActive", "account-nav__item--active", 3, "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "col-12", "col-lg-9", "mt-4", "mt-lg-0"], ["routerLinkActive", "account-nav__item--active", 1, "account-nav__item", 3, "routerLinkActiveOptions"], [3, "routerLink"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LayoutComponent_li_12_Template, 3, 4, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "My Account")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c2)));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNhc3MifQ== */"] }); }
}


/***/ }),

/***/ 7525:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAddressesListComponent": () => (/* binding */ PageAddressesListComponent)
/* harmony export */ });
/* harmony import */ var _data_account_addresses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/account-addresses */ 3117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function PageAddressesListComponent_ng_container_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PageAddressesListComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PageAddressesListComponent_ng_container_9_div_2_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10)(4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12)(13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15)(23, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const address_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", address_r1.default);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](address_r1.firstName + " " + address_r1.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", address_r1.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", address_r1.postcode, ", ", address_r1.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", address_r1.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](address_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](address_r1.email);
} }
class PageAddressesListComponent {
    constructor() {
        this.addresses = _data_account_addresses__WEBPACK_IMPORTED_MODULE_0__.addresses;
    }
    static { this.ɵfac = function PageAddressesListComponent_Factory(t) { return new (t || PageAddressesListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageAddressesListComponent, selectors: [["app-page-addresses-list"]], decls: 10, vars: 2, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "addresses-list"], ["routerLink", "./", 1, "addresses-list__item", "addresses-list__item--new"], [1, "addresses-list__plus"], [1, "btn", "btn-secondary", "btn-sm"], [1, "addresses-list__divider"], [4, "ngFor", "ngForOf"], [1, "addresses-list__item", "card", "address-card"], ["class", "address-card__badge", 4, "ngIf"], [1, "address-card__body"], [1, "address-card__name"], [1, "address-card__row"], [1, "address-card__row-title"], [1, "address-card__row-content"], [1, "address-card__footer"], ["routerLink", "./5"], ["routerLink", "./"], [1, "address-card__badge"]], template: function PageAddressesListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add New");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PageAddressesListComponent_ng_container_9_Template, 29, 8, "ng-container", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.addresses);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWFkZHJlc3Nlcy1saXN0LmNvbXBvbmVudC5zYXNzIn0= */"] }); }
}


/***/ }),

/***/ 8301:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-dashboard/page-dashboard.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDashboardComponent": () => (/* binding */ PageDashboardComponent)
/* harmony export */ });
/* harmony import */ var _data_account_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/account-orders */ 8004);
/* harmony import */ var _data_account_addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../data/account-addresses */ 3117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ 133);






function PageDashboardComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Default Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PageDashboardComponent_tr_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", order_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, order_r2.total), " for ", order_r2.quantity, " item(s)");
} }
class PageDashboardComponent {
    constructor() {
        this.address = _data_account_addresses__WEBPACK_IMPORTED_MODULE_1__.addresses[0];
        this.orders = _data_account_orders__WEBPACK_IMPORTED_MODULE_0__.orders.slice(0, 3);
    }
    static { this.ɵfac = function PageDashboardComponent_Factory(t) { return new (t || PageDashboardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageDashboardComponent, selectors: [["app-page-dashboard"]], decls: 59, vars: 10, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "dashboard"], [1, "dashboard__profile", "card", "profile-card"], [1, "card-body", "profile-card__body"], [1, "profile-card__avatar"], ["src", "./assets/images/avatars/avatar-3.jpg", "alt", ""], [1, "profile-card__name"], [1, "profile-card__email"], [1, "profile-card__edit"], ["routerLink", "../profile", 1, "btn", "btn-secondary", "btn-sm"], [1, "dashboard__address", "card", "address-card", "address-card--featured"], ["class", "address-card__badge", 4, "ngIf"], [1, "address-card__body"], [1, "address-card__name"], [1, "address-card__row"], [1, "address-card__row-title"], [1, "address-card__row-content"], [1, "address-card__footer"], ["routerLink", "/account/addresses/5"], [1, "dashboard__orders", "card"], [1, "card-header"], [1, "card-divider"], [1, "card-table"], [1, "table-responsive-sm"], [4, "ngFor", "ngForOf"], [1, "address-card__badge"], ["href", ""]], template: function PageDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Helena Garcia");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "stroyka@example.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Edit Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PageDashboardComponent_div_16_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13)(18, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 15)(27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Phone Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 15)(32, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 18)(37, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Edit Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 20)(40, "div", 21)(41, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Recent Orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 23)(45, "div", 24)(46, "table")(47, "thead")(48, "tr")(49, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Order");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, PageDashboardComponent_tr_58_Template, 11, 7, "tr", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.address.default);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.address.firstName + " " + ctx.address.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.address.country, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.address.postcode, ", ", ctx.address.city, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.address.address, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.address.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.address.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.orders);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_2__.CurrencyFormatPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWRhc2hib2FyZC5jb21wb25lbnQuc2FzcyJ9 */"] }); }
}


/***/ }),

/***/ 2860:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-edit-address/page-edit-address.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageEditAddressComponent": () => (/* binding */ PageEditAddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PageEditAddressComponent {
    constructor() { }
    static { this.ɵfac = function PageEditAddressComponent_Factory(t) { return new (t || PageEditAddressComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageEditAddressComponent, selectors: [["app-page-edit-address"]], decls: 80, vars: 1, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "card"], [1, "card-header"], [1, "card-divider"], [1, "card-body"], [1, "row", "no-gutters"], [1, "col-12", "col-lg-10", "col-xl-8"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "checkout-first-name"], ["type", "text", "id", "checkout-first-name", "placeholder", "First Name", 1, "form-control"], ["for", "checkout-last-name"], ["type", "text", "id", "checkout-last-name", "placeholder", "Last Name", 1, "form-control"], [1, "form-group"], ["for", "checkout-company-name"], [1, "text-muted"], ["type", "text", "id", "checkout-company-name", "placeholder", "Company Name", 1, "form-control"], ["for", "checkout-country"], ["id", "checkout-country", 1, "form-control", "form-control-select2"], ["for", "checkout-street-address"], ["type", "text", "id", "checkout-street-address", "placeholder", "Street Address", 1, "form-control"], ["for", "checkout-address"], ["type", "text", "id", "checkout-address", 1, "form-control"], ["for", "checkout-city"], ["type", "text", "id", "checkout-city", 1, "form-control"], ["for", "checkout-state"], ["type", "text", "id", "checkout-state", 1, "form-control"], ["for", "checkout-postcode"], ["type", "text", "id", "checkout-postcode", 1, "form-control"], ["for", "checkout-email"], ["type", "email", "id", "checkout-email", "placeholder", "Email address", 1, "form-control"], ["for", "checkout-phone"], ["type", "text", "id", "checkout-phone", "placeholder", "Phone", 1, "form-control"], [1, "form-group", "mt-3", "mb-0"], [1, "btn", "btn-primary"]], template: function PageEditAddressComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Last Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14)(21, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Company Name ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "(Optional)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14)(27, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Country");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 19)(30, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Select a country...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "United States");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Russia");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Italy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "France");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ukraine");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Germany");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Australia");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14)(47, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Street Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14)(51, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Apartment, suite, unit etc. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "(Optional)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14)(57, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Town / City");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14)(61, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "State / County");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14)(65, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Postcode / ZIP");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8)(69, "div", 9)(70, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9)(74, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Phone");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34)(78, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.constructor.name);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWVkaXQtYWRkcmVzcy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 8137:
/*!**************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-login/page-login.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLoginComponent": () => (/* binding */ PageLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);



const _c0 = function () { return { label: "Home", url: "/" }; };
const _c1 = function () { return { label: "My Account", url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class PageLoginComponent {
    constructor() { }
    static { this.ɵfac = function PageLoginComponent_Factory(t) { return new (t || PageLoginComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageLoginComponent, selectors: [["app-login"]], decls: 55, vars: 8, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], [1, "block"], [1, "container"], [1, "row"], [1, "col-md-6", "d-flex"], [1, "card", "flex-grow-1", "mb-md-0"], [1, "card-body"], [1, "card-title"], [1, "form-group"], ["type", "email", "placeholder", "Enter email", 1, "form-control"], ["type", "password", "placeholder", "Password", 1, "form-control"], [1, "form-text", "text-muted"], ["href", ""], [1, "form-check"], [1, "form-check-input", "input-check"], [1, "input-check__body"], ["type", "checkbox", "id", "login-remember", 1, "input-check__input"], [1, "input-check__box"], ["name", "check-9x7", "size", "9x7", 1, "input-check__icon"], ["for", "login-remember", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", "mt-2", "mt-md-3", "mt-lg-4"], [1, "col-md-6", "d-flex", "mt-4", "mt-md-0"], [1, "card", "flex-grow-1", "mb-0"]], template: function PageLoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "h3", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form")(13, "div", 10)(14, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "small", 13)(22, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Forgotten Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10)(25, "div", 15)(26, "span", 16)(27, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 18)(29, "span", 19)(30, "app-icon", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Remember Me");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 23)(36, "div", 24)(37, "div", 8)(38, "h3", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "form")(41, "div", 10)(42, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 10)(46, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 10)(50, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Repeat Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", "My Account")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1)));
        } }, dependencies: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 1975:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-order-details/page-order-details.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageOrderDetailsComponent": () => (/* binding */ PageOrderDetailsComponent)
/* harmony export */ });
/* harmony import */ var _data_account_order_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/account-order-details */ 7405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ 133);





function PageOrderDetailsComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r2.name, " \u00D7 ", item_r2.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, item_r2.total));
} }
function PageOrderDetailsComponent_tbody_30_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const line_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](line_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, line_r4.total));
} }
function PageOrderDetailsComponent_tbody_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody", 13)(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PageOrderDetailsComponent_tbody_30_tr_7_Template, 6, 4, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 2, ctx_r1.order.subtotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.order.additionalLines);
} }
class PageOrderDetailsComponent {
    constructor() {
        this.order = _data_account_order_details__WEBPACK_IMPORTED_MODULE_0__.order;
    }
    static { this.ɵfac = function PageOrderDetailsComponent_Factory(t) { return new (t || PageOrderDetailsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageOrderDetailsComponent, selectors: [["app-page-order-details"]], decls: 85, vars: 23, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "card"], [1, "order-header"], [1, "order-header__actions"], ["routerLink", "/account/orders", 1, "btn", "btn-xs", "btn-secondary"], [1, "order-header__title"], [1, "order-header__subtitle"], [1, "order-header__date"], [1, "order-header__status"], [1, "card-divider"], [1, "card-table"], [1, "table-responsive-sm"], [1, "card-table__body", "card-table__body--merge-rows"], [4, "ngFor", "ngForOf"], ["class", "card-table__body card-table__body--merge-rows", 4, "ngIf"], [1, "row", "mt-3", "no-gutters", "mx-n2"], [1, "col-sm-6", "col-12", "px-2"], [1, "card", "address-card", "address-card--featured"], [1, "address-card__body"], [1, "address-card__badge", "address-card__badge--muted"], [1, "address-card__name"], [1, "address-card__row"], [1, "address-card__row-title"], [1, "address-card__row-content"], [1, "col-sm-6", "col-12", "px-2", "mt-sm-0", "mt-3"]], template: function PageOrderDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Back to list");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Was placed on ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mark", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " and is currently ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mark", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, ". ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "table")(22, "thead")(23, "tr")(24, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tbody", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, PageOrderDetailsComponent_tr_29_Template, 6, 5, "tr", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, PageOrderDetailsComponent_tbody_30_Template, 8, 4, "tbody", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tfoot")(32, "tr")(33, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "currencyFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 16)(39, "div", 17)(40, "div", 18)(41, "div", 19)(42, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Shipping Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 22)(53, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Phone Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 22)(58, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 25)(63, "div", 18)(64, "div", 19)(65, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Billing Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 22)(76, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Phone Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 22)(81, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Order #", ctx.order.id, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.order.date);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.order.status);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.order.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.order.additionalLines.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 21, ctx.order.total));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.order.shippingAddress.firstName + " " + ctx.order.shippingAddress.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.order.shippingAddress.country, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.order.shippingAddress.postcode, ", ", ctx.order.shippingAddress.city, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.order.shippingAddress.address, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.order.shippingAddress.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.order.shippingAddress.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.order.billingAddress.firstName + " " + ctx.order.billingAddress.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.order.billingAddress.country, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.order.billingAddress.postcode, ", ", ctx.order.billingAddress.city, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.order.billingAddress.address, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.order.billingAddress.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.order.billingAddress.email);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_1__.CurrencyFormatPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW9yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 8601:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-orders-list/page-orders-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageOrdersListComponent": () => (/* binding */ PageOrdersListComponent)
/* harmony export */ });
/* harmony import */ var _data_account_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/account-orders */ 8004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ 3556);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ 133);






function PageOrdersListComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/account/orders/" + order_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", order_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 6, order_r1.total), " for ", order_r1.quantity, " item(s)");
} }
class PageOrdersListComponent {
    constructor() {
        this.orders = _data_account_orders__WEBPACK_IMPORTED_MODULE_0__.orders;
    }
    static { this.ɵfac = function PageOrdersListComponent_Factory(t) { return new (t || PageOrdersListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageOrdersListComponent, selectors: [["app-page-orders-list"]], decls: 26, vars: 3, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "card"], [1, "card-header"], [1, "card-divider"], [1, "card-table"], [1, "table-responsive-sm"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [3, "total"], [3, "routerLink"]], template: function PageOrdersListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Order History");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "table")(11, "thead")(12, "tr")(13, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Order");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, PageOrdersListComponent_tr_22_Template, 11, 8, "tr", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "app-pagination", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.orders);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("total", 3);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__.PaginationComponent, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_2__.CurrencyFormatPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW9yZGVycy1saXN0LmNvbXBvbmVudC5zYXNzIn0= */"] }); }
}


/***/ }),

/***/ 5231:
/*!********************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-password/page-password.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagePasswordComponent": () => (/* binding */ PagePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PagePasswordComponent {
    constructor() { }
    static { this.ɵfac = function PagePasswordComponent_Factory(t) { return new (t || PagePasswordComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagePasswordComponent, selectors: [["app-page-password"]], decls: 26, vars: 1, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "card"], [1, "card-header"], [1, "card-divider"], [1, "card-body"], [1, "row", "no-gutters"], [1, "col-12", "col-lg-7", "col-xl-6"], [1, "form-group"], ["for", "password-current"], ["type", "password", "id", "password-current", "placeholder", "Current Password", 1, "form-control"], ["for", "password-new"], ["type", "password", "id", "password-new", "placeholder", "New Password", 1, "form-control"], ["for", "password-confirm"], ["type", "password", "id", "password-confirm", "placeholder", "Reenter New Password", 1, "form-control"], [1, "form-group", "mt-5", "mb-0"], [1, "btn", "btn-primary"]], template: function PagePasswordComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Change Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Current Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8)(16, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "New Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8)(20, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Reenter New Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15)(24, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Change");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.constructor.name);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXBhc3N3b3JkLmNvbXBvbmVudC5zYXNzIn0= */"] }); }
}


/***/ }),

/***/ 4414:
/*!******************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-profile/page-profile.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageProfileComponent": () => (/* binding */ PageProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PageProfileComponent {
    constructor() { }
    static { this.ɵfac = function PageProfileComponent_Factory(t) { return new (t || PageProfileComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageProfileComponent, selectors: [["app-page-profile"]], decls: 30, vars: 1, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "card"], [1, "card-header"], [1, "card-divider"], [1, "card-body"], [1, "row", "no-gutters"], [1, "col-12", "col-lg-7", "col-xl-6"], [1, "form-group"], ["for", "profile-first-name"], ["type", "text", "id", "profile-first-name", "placeholder", "First Name", 1, "form-control"], ["for", "profile-last-name"], ["type", "text", "id", "profile-last-name", "placeholder", "Last Name", 1, "form-control"], ["for", "profile-email"], ["type", "email", "id", "profile-email", "placeholder", "Email Address", 1, "form-control"], ["for", "profile-phone"], ["type", "text", "id", "profile-phone", "placeholder", "Phone Number", 1, "form-control"], [1, "form-group", "mt-5", "mb-0"], [1, "btn", "btn-primary"]], template: function PageProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8)(16, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8)(20, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8)(24, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Phone Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17)(28, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.constructor.name);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXByb2ZpbGUuY29tcG9uZW50LnNhc3MifQ== */"] }); }
}


/***/ }),

/***/ 3117:
/*!***************************************!*\
  !*** ./src/data/account-addresses.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addresses": () => (/* binding */ addresses)
/* harmony export */ });
const addresses = [
    {
        default: true,
        firstName: 'Helena',
        lastName: 'Garcia',
        email: 'stroyka@example.com',
        phone: '38 972 588-42-36',
        country: 'Random Federation',
        city: 'Moscow',
        postcode: '115302',
        address: 'ul. Varshavskaya, 15-2-178'
    },
    {
        default: false,
        firstName: 'Jupiter',
        lastName: 'Saturnov',
        email: 'stroyka@example.com',
        phone: 'ZX 971 972-57-26',
        country: 'RandomLand',
        city: 'MarsGrad',
        postcode: '4b4f53',
        address: 'Sun Orbit, 43.3241-85.239'
    }
];


/***/ }),

/***/ 8004:
/*!************************************!*\
  !*** ./src/data/account-orders.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "orders": () => (/* binding */ orders)
/* harmony export */ });
const orders = [
    {
        id: 8132,
        date: '02 April, 2019',
        status: 'Pending',
        total: 2719,
        quantity: 5,
    },
    {
        id: 7592,
        date: '28 March, 2019',
        status: 'Pending',
        total: 374,
        quantity: 3,
    },
    {
        id: 7192,
        date: '15 March, 2019',
        status: 'Shipped',
        total: 791,
        quantity: 4,
    },
    {
        id: 6321,
        date: '28 February, 2019',
        status: 'Completed',
        total: 57,
        quantity: 1,
    },
    {
        id: 6001,
        date: '21 February, 2019',
        status: 'Completed',
        total: 252,
        quantity: 2,
    },
    {
        id: 4120,
        date: '11 December, 2018',
        status: 'Completed',
        total: 3978,
        quantity: 7,
    }
];


/***/ })

}]);
//# sourceMappingURL=src_app_modules_account_account_module_ts.js.map