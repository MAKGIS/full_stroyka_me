"use strict";
(self["webpackChunkstroyka"] = self["webpackChunkstroyka"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ 8340);
/* harmony import */ var _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-home-one/page-home-one.component */ 2835);
/* harmony import */ var _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-home-two/page-home-two.component */ 5400);
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/root/root.component */ 3944);
/* harmony import */ var _pages_page_offcanvas_cart_page_offcanvas_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-offcanvas-cart/page-offcanvas-cart.component */ 4871);
/* harmony import */ var _modules_shop_resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shop/resolvers/products-list-resolver.service */ 3839);
/* harmony import */ var _modules_shop_resolvers_currency_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/shop/resolvers/currency-resolver.service */ 1281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [
    // START / ONLY_FOR_DEMO_YOU_CAN_DELETE_IT
    {
        path: 'home-two',
        component: _components_root_root_component__WEBPACK_IMPORTED_MODULE_3__.RootComponent,
        resolve: {
            currency: _modules_shop_resolvers_currency_resolver_service__WEBPACK_IMPORTED_MODULE_6__.CurrencyResolverService
        },
        data: {
            headerLayout: 'compact',
            dropcartType: 'dropdown'
        },
        children: [
            {
                path: '',
                component: _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_2__.PageHomeTwoComponent,
                resolve: {
                    products: _modules_shop_resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_5__.ProductsListResolverService
                }
            }
        ],
    },
    {
        path: 'offcanvas-cart',
        component: _components_root_root_component__WEBPACK_IMPORTED_MODULE_3__.RootComponent,
        data: {
            headerLayout: 'classic',
            dropcartType: 'offcanvas'
        },
        children: [
            {
                path: '',
                component: _pages_page_offcanvas_cart_page_offcanvas_cart_component__WEBPACK_IMPORTED_MODULE_4__.PageOffcanvasCartComponent
            }
        ],
    },
    // END / ONLY_FOR_DEMO_YOU_CAN_DELETE_IT
    {
        path: '',
        component: _components_root_root_component__WEBPACK_IMPORTED_MODULE_3__.RootComponent,
        resolve: {
            currency: _modules_shop_resolvers_currency_resolver_service__WEBPACK_IMPORTED_MODULE_6__.CurrencyResolverService
        },
        data: {
            // Header layout. Choose one of ['classic', 'compact'].
            headerLayout: 'classic',
            // Dropcart type. Choose one of ['dropdown', 'offcanvas'].
            dropcartType: 'dropdown'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_1__.PageHomeOneComponent,
                resolve: {
                    products: _modules_shop_resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_5__.ProductsListResolverService
                }
            },
            {
                path: 'home',
                pathMatch: 'full',
                component: _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_1__.PageHomeOneComponent,
                resolve: {
                    products: _modules_shop_resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_5__.ProductsListResolverService
                }
            },
            {
                path: 'shop',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_shop_shop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/shop/shop.module */ 5624)).then(m => m.ShopModule)
            },
            {
                path: 'blog',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_blog_blog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/blog/blog.module */ 6195)).then(m => m.BlogModule)
            },
            {
                path: 'account',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/account/account.module */ 2588)).then(m => m.AccountModule)
            },
            {
                path: 'site',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_site_site_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/site/site.module */ 3955)).then(m => m.SiteModule)
            },
            {
                path: '**',
                component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent
            }
        ],
    },
];
class AppRoutingModule {
    static { this.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                // initialNavigation: 'enabled',
                // relativeLinkResolution: 'legacy'
            }), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/cart.service */ 5237);
/* harmony import */ var _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/compare.service */ 3940);
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/wishlist.service */ 165);
/* harmony import */ var _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/currency.service */ 8910);












class AppComponent {
    constructor(platformId, router, toastr, cart, compare, wishlist, zone, scroller, currency) {
        this.platformId = platformId;
        this.router = router;
        this.toastr = toastr;
        this.cart = cart;
        this.compare = compare;
        this.wishlist = wishlist;
        this.zone = zone;
        this.scroller = scroller;
        this.currency = currency;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe(() => {
                    const preloader = document.querySelector('.site-preloader');
                    if (preloader === null) {
                        return;
                    }
                    preloader.addEventListener('transitionend', (event) => {
                        if (event instanceof TransitionEvent && event.propertyName === 'opacity') {
                            preloader.remove();
                        }
                    });
                    preloader.classList.add('site-preloader__fade');
                    // Sometimes, due to unexpected behavior, the browser (in particular Safari) may not play the transition, which leads
                    // to blocking interaction with page elements due to the fact that the preloader is not deleted.
                    // The following block covers this case.
                    if (getComputedStyle(preloader).opacity === '0' && preloader.parentNode) {
                        preloader.parentNode.removeChild(preloader);
                    }
                });
            });
        }
    }
    ngOnInit() {
        // properties of the CurrencyFormatOptions interface fully complies
        // with the arguments of the built-in pipe "currency"
        // https://angular.io/api/common/CurrencyPipe
        this.currency.options = {
            code: 'EUR',
            display: 'symbol',
            // digitsInfo: '1.2-2',
            // locale: 'en-US',
        };
        this.router.events.subscribe((event) => {
            if ((event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd)) {
                this.scroller.scrollToPosition([0, 0]);
            }
        });
        this.cart.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to cart!`);
        });
        this.compare.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to compare!`);
        });
        this.wishlist.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to wish list!`);
        });
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_compare_service__WEBPACK_IMPORTED_MODULE_1__.CompareService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__.WishlistService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_currency_service__WEBPACK_IMPORTED_MODULE_3__.CurrencyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet");
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/blocks/blocks.module */ 7450);
/* harmony import */ var _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer/footer.module */ 4922);
/* harmony import */ var _modules_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/header/header.module */ 5130);
/* harmony import */ var _modules_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mobile/mobile.module */ 6238);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _modules_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/widgets/widgets.module */ 9346);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/root/root.component */ 3944);
/* harmony import */ var _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-home-one/page-home-one.component */ 2835);
/* harmony import */ var _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-home-two/page-home-two.component */ 5400);
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ 8340);
/* harmony import */ var _pages_page_offcanvas_cart_page_offcanvas_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-offcanvas-cart/page-offcanvas-cart.component */ 4871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
// import { registerLocaleData } from '@angular/common';
// import localeIt from '@angular/common/locales/it';
//
// registerLocaleData(localeIt, 'it');
// modules (angular)



// modules (third-party)


// modules







// components


// pages







class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [
            // modules (angular)
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__.CarouselModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule.forRoot(),
            // modules
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_1__.BlocksModule,
            _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
            _modules_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule,
            _modules_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_4__.MobileModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _modules_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__.WidgetsModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [
        // components
        _app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent,
        _components_root_root_component__WEBPACK_IMPORTED_MODULE_8__.RootComponent,
        // pages
        _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_9__.PageHomeOneComponent,
        _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_10__.PageHomeTwoComponent,
        _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__.PageNotFoundComponent,
        _pages_page_offcanvas_cart_page_offcanvas_cart_component__WEBPACK_IMPORTED_MODULE_12__.PageOffcanvasCartComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        // modules (third-party)
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__.CarouselModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule, 
        // modules
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_1__.BlocksModule,
        _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        _modules_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule,
        _modules_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_4__.MobileModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _modules_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__.WidgetsModule] }); })();


/***/ }),

/***/ 3944:
/*!***************************************************!*\
  !*** ./src/app/components/root/root.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootComponent": () => (/* binding */ RootComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/footer/footer.component */ 3594);
/* harmony import */ var _modules_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/header/header.component */ 4214);
/* harmony import */ var _modules_header_components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/header/components/dropcart/dropcart.component */ 7481);
/* harmony import */ var _modules_mobile_components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/mobile/components/mobile-header/mobile-header.component */ 1406);
/* harmony import */ var _modules_mobile_components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/mobile/components/mobile-menu/mobile-menu.component */ 7192);
/* harmony import */ var _shared_components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/loading-bar/loading-bar.component */ 7130);
/* harmony import */ var _shared_components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/quickview/quickview.component */ 9873);










function RootComponent_app_header_dropcart_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header-dropcart", 7);
} }
function RootComponent_header_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("layout", ctx_r1.headerLayout);
} }
class RootComponent {
    constructor(route) {
        this.route = route;
        this.headerLayout = 'classic';
        this.dropcartType = 'dropdown';
        this.route.data.subscribe((data) => {
            this.headerLayout = data.headerLayout || 'classic';
            this.dropcartType = data.dropcartType || 'dropdown';
        });
    }
    static { this.ɵfac = function RootComponent_Factory(t) { return new (t || RootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["app-main"]], decls: 12, vars: 2, consts: [["type", "offcanvas", 4, "ngIf"], [1, "site"], [1, "site__header", "d-lg-none"], ["stickyMode", "pullToShow"], ["class", "site__header d-lg-block d-none", 4, "ngIf"], [1, "site__body"], [1, "site__footer"], ["type", "offcanvas"], [1, "site__header", "d-lg-block", "d-none"], [3, "layout"]], template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loading-bar")(1, "app-quickview")(2, "app-mobile-menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RootComponent_app_header_dropcart_3_Template, 1, 0, "app-header-dropcart", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 1)(5, "header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-mobile-header", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, RootComponent_header_7_Template, 2, 1, "header", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "footer", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dropcartType === "offcanvas");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.headerLayout);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _modules_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _modules_header_components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_2__.DropcartComponent, _modules_mobile_components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_3__.MobileHeaderComponent, _modules_mobile_components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__.MobileMenuComponent, _shared_components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_5__.LoadingBarComponent, _shared_components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_6__.QuickviewComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb290LmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 7042:
/*!***********************************************************************!*\
  !*** ./src/app/modules/blocks/block-banner/block-banner.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockBannerComponent": () => (/* binding */ BlockBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BlockBannerComponent {
    constructor() { }
    static { this.ɵfac = function BlockBannerComponent_Factory(t) { return new (t || BlockBannerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockBannerComponent, selectors: [["app-block-banner"]], decls: 17, vars: 1, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "block", "block-banner"], [1, "container"], ["href", "", 1, "block-banner__body"], [1, "block-banner__image", "block-banner__image--desktop", 2, "background-image", "url('assets/images/banners/banner-1.jpg')"], [1, "block-banner__image", "block-banner__image--mobile", 2, "background-image", "url('assets/images/banners/banner-1-mobile.jpg')"], [1, "block-banner__title"], [1, "block-banner__mobile-br"], [1, "block-banner__text"], [1, "block-banner__button"], [1, "btn", "btn-sm", "btn-primary"]], template: function BlockBannerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5)(7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Hundreds ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Hand Tools");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Shop Now");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.constructor.name);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 42:
/*!***********************************************************************!*\
  !*** ./src/app/modules/blocks/block-brands/block-brands.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockBrandsComponent": () => (/* binding */ BlockBrandsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/root.service */ 1372);
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/direction.service */ 7341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/owl-prevent-click.directive */ 876);









const _c0 = ["container"];
function BlockBrandsComponent_div_3_div_1_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const brand_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r5.root.brand(brand_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", brand_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", brand_r4.name);
} }
function BlockBrandsComponent_div_3_div_1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BlockBrandsComponent_div_3_div_1_4_ng_template_0_Template, 3, 3, "ng-template", 10);
} }
function BlockBrandsComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6, 7)(3, "owl-carousel-o", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BlockBrandsComponent_div_3_div_1_4_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.carouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.brands);
} }
function BlockBrandsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BlockBrandsComponent_div_3_div_1_Template, 5, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showCarousel);
} }
class BlockBrandsComponent {
    constructor(platformId, root, direction) {
        this.platformId = platformId;
        this.root = root;
        this.direction = direction;
        this.brands = [];
        this.isLog = true;
        this.showCarousel = true;
        this.carouselOptions = {
            items: 6,
            nav: false,
            dots: false,
            loop: true,
            responsive: {
                1100: { items: 6 },
                920: { items: 5 },
                680: { items: 4 },
                500: { items: 3 },
                0: { items: 2 }
            },
            rtl: this.direction.isRTL()
        };
    }
    ngAfterViewInit() {
        if (this.isLog) {
            console.log('- cmp -- BlockBrandsComponent.ngAfterViewInit() container -> %o', this.container);
        }
        if (this.container && (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            if (this.isLog) {
                console.log('- cmp -- BlockBrandsComponent.ngAfterViewInit() container -> %o', this.container);
            }
            const container = this.container.nativeElement;
            const containerWidth = container.getBoundingClientRect().width;
            window.addEventListener('load', () => {
                const newContainerWidth = container.getBoundingClientRect().width;
                if (containerWidth !== newContainerWidth) {
                    this.showCarousel = false;
                    setTimeout(() => this.showCarousel = true, 0);
                }
            });
        }
    }
    static { this.ɵfac = function BlockBrandsComponent_Factory(t) { return new (t || BlockBrandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_1__.DirectionService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BlockBrandsComponent, selectors: [["app-block-brands"]], viewQuery: function BlockBrandsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        } }, inputs: { brands: "brands" }, decls: 4, vars: 2, consts: [[1, "test-border"], [1, "test-name-Component"], ["class", "block block-brands", 4, "ngIf"], [1, "block", "block-brands"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "block-brands__slider"], ["container", ""], ["appOwlPreventClick", "", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "block-brands__item"], [3, "routerLink"], [3, "src", "alt"]], template: function BlockBrandsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BlockBrandsComponent_div_3_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.brands == null ? null : ctx.brands.length);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselSlideDirective, _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_2__.OwlPreventClickDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1icmFuZHMuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 3412:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/blocks/block-categories/block-categories.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockCategoriesComponent": () => (/* binding */ BlockCategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/block-header/block-header.component */ 6483);





function BlockCategoriesComponent_div_7_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.root.category(category_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r3.name);
} }
function BlockCategoriesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "div", 7)(3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10)(6, "div", 11)(7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BlockCategoriesComponent_div_7_li_10_Template, 3, 2, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 14)(12, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Show All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("block-categories__item category-card category-card--layout--", ctx_r0.layout, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r0.root.category(category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", category_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r0.root.category(category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", category_r1.children == null ? null : category_r1.children.slice(0, 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r0.root.category(category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", category_r1.items, " Products ");
} }
class BlockCategoriesComponent {
    constructor(root) {
        this.root = root;
        this.header = '';
        this.layout = 'classic';
        this.categories = [];
    }
    static { this.ɵfac = function BlockCategoriesComponent_Factory(t) { return new (t || BlockCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlockCategoriesComponent, selectors: [["app-block-categories"]], inputs: { header: "header", layout: "layout", categories: "categories" }, decls: 8, vars: 6, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "container"], [3, "header"], [1, "block-categories__list"], [3, "class", 4, "ngFor", "ngForOf"], [1, "category-card__body"], [1, "category-card__image"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "category-card__content"], [1, "category-card__name"], [1, "category-card__links"], [4, "ngFor", "ngForOf"], [1, "category-card__all"], [1, "category-card__products"]], template: function BlockCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-block-header", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BlockCategoriesComponent_div_7_Template, 16, 10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("block block--highlighted block-categories block-categories--layout--", ctx.layout, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", ctx.header);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_1__.BlockHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 3888:
/*!***************************************************************************!*\
  !*** ./src/app/modules/blocks/block-features/block-features.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockFeaturesComponent": () => (/* binding */ BlockFeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ 2775);


class BlockFeaturesComponent {
    constructor() {
        this.layout = 'classic';
    }
    static { this.ɵfac = function BlockFeaturesComponent_Factory(t) { return new (t || BlockFeaturesComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlockFeaturesComponent, selectors: [["app-block-features"]], inputs: { layout: "layout" }, decls: 41, vars: 4, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "container"], [1, "block-features__list"], [1, "block-features__item"], [1, "block-features__icon"], ["name", "fi-free-delivery-48", "size", "48"], [1, "block-features__content"], [1, "block-features__title"], [1, "block-features__subtitle"], [1, "block-features__divider"], ["name", "fi-24-hours-48", "size", "48"], ["name", "fi-payment-security-48", "size", "48"], ["name", "fi-tag-48", "size", "48"]], template: function BlockFeaturesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Free Shipping");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "For orders from $50");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4)(16, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Support 24/7");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Call us anytime");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 4)(25, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7)(28, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "100% Safety");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Only secure payments");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 4)(34, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "app-icon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7)(37, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Hot Offers");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Discounts up to 90%");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("block block-features block-features--layout--", ctx.layout, "");
        } }, dependencies: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1mZWF0dXJlcy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 9058:
/*!*****************************************************************!*\
  !*** ./src/app/modules/blocks/block-map/block-map.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockMapComponent": () => (/* binding */ BlockMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BlockMapComponent {
    constructor() { }
    static { this.ɵfac = function BlockMapComponent_Factory(t) { return new (t || BlockMapComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockMapComponent, selectors: [["app-block-map"]], decls: 6, vars: 1, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "block-map", "block"], [1, "block-map__body"], ["src", "https://maps.google.com/maps?q=Holbrook-Palmer%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed"]], template: function BlockMapComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.constructor.name);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1tYXAuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 6647:
/*!*********************************************************************!*\
  !*** ./src/app/modules/blocks/block-posts/block-posts.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockPostsComponent": () => (/* binding */ BlockPostsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/direction.service */ 7341);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/owl-prevent-click.directive */ 876);
/* harmony import */ var _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/post-card/post-card.component */ 1368);
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/block-header/block-header.component */ 6483);









const _c0 = ["container"];
function BlockPostsComponent_div_4_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-post-card", 11);
} if (rf & 2) {
    const post_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("post", post_r4);
} }
function BlockPostsComponent_div_4_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BlockPostsComponent_div_4_6_ng_template_0_Template, 1, 1, "ng-template", 10);
} }
function BlockPostsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "app-block-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("prev", function BlockPostsComponent_div_4_Template_app_block_header_prev_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2.prev()); })("next", function BlockPostsComponent_div_4_Template_app_block_header_next_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5, 6)(4, "owl-carousel-o", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BlockPostsComponent_div_4_6_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("header", ctx_r0.header)("arrows", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r0.carouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.posts);
} }
class BlockPostsComponent {
    constructor(platformId, direction) {
        this.platformId = platformId;
        this.direction = direction;
        this.header = '';
        this.layout = 'list-sm';
        this.posts = [];
        this.showCarousel = true;
        this.carouselDefaultOptions = {
            margin: 30,
            nav: false,
            dots: false,
            loop: true,
            rtl: this.direction.isRTL()
        };
        this.carouselOptionsByLayout = {
            'grid-nl': {
                responsive: {
                    930: { items: 3 },
                    690: { items: 2 },
                    0: { items: 1 }
                }
            },
            'list-sm': {
                responsive: {
                    930: { items: 2 },
                    0: { items: 1 }
                }
            }
        };
        this.carouselOptions = {};
    }
    ngOnChanges(changes) {
        if ('layout' in changes) {
            this.carouselOptions = Object.assign({}, this.carouselDefaultOptions, this.carouselOptionsByLayout[changes['layout'].currentValue]);
        }
    }
    ngAfterViewInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
            const container = this.container.nativeElement;
            const containerWidth = container.getBoundingClientRect().width;
            window.addEventListener('load', () => {
                const newContainerWidth = container.getBoundingClientRect().width;
                if (containerWidth !== newContainerWidth) {
                    this.showCarousel = false;
                    setTimeout(() => this.showCarousel = true, 0);
                }
            });
        }
    }
    static { this.ɵfac = function BlockPostsComponent_Factory(t) { return new (t || BlockPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_0__.DirectionService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BlockPostsComponent, selectors: [["app-block-posts"]], viewQuery: function BlockPostsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        } }, inputs: { header: "header", layout: "layout", posts: "posts" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 6, consts: [[1, "test-border"], [1, "test-name-Component"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "header", "arrows", "prev", "next"], [1, "block-posts__slider"], ["container", ""], ["appOwlPreventClick", "", 3, "options"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [3, "post"]], template: function BlockPostsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BlockPostsComponent_div_4_Template, 7, 4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("block block-posts block-posts--layout--", ctx.layout, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-layout", ctx.layout);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCarousel);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselSlideDirective, _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_1__.OwlPreventClickDirective, _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__.PostCardComponent, _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_3__.BlockHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wb3N0cy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 171:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockProductColumnsItemComponent": () => (/* binding */ BlockProductColumnsItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/product-card/product-card.component */ 3284);
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/block-header/block-header.component */ 6483);




function BlockProductColumnsItemComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-product-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", product_r1);
} }
class BlockProductColumnsItemComponent {
    constructor() {
        this.classCol = true;
        this.header = '';
        this.products = [];
    }
    static { this.ɵfac = function BlockProductColumnsItemComponent_Factory(t) { return new (t || BlockProductColumnsItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlockProductColumnsItemComponent, selectors: [["app-block-product-columns-item"]], hostVars: 2, hostBindings: function BlockProductColumnsItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("col", ctx.classCol);
        } }, inputs: { header: "header", products: "products" }, decls: 3, vars: 2, consts: [[3, "header"], [1, "block-product-columns__column"], ["class", "block-product-columns__item", 4, "ngFor", "ngForOf"], [1, "block-product-columns__item"], ["layout", "horizontal", 3, "product"]], template: function BlockProductColumnsItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-block-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BlockProductColumnsItemComponent_div_2_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", ctx.header);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_0__.ProductCardComponent, _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_1__.BlockHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wcm9kdWN0LWNvbHVtbnMtaXRlbS5jb21wb25lbnQuc2FzcyJ9 */"] }); }
}


/***/ }),

/***/ 2372:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-product-columns/block-product-columns.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockProductColumnsComponent": () => (/* binding */ BlockProductColumnsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = [[["app-block-product-columns-item"]]];
const _c1 = ["app-block-product-columns-item"];
class BlockProductColumnsComponent {
    constructor() { }
    static { this.ɵfac = function BlockProductColumnsComponent_Factory(t) { return new (t || BlockProductColumnsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockProductColumnsComponent, selectors: [["app-block-product-columns"]], ngContentSelectors: _c1, decls: 7, vars: 1, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "block", "block-product-columns", "d-lg-block", "d-none"], [1, "container"], [1, "row"]], template: function BlockProductColumnsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.constructor.name);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wcm9kdWN0LWNvbHVtbnMuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 4630:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockProductsCarouselComponent": () => (/* binding */ BlockProductsCarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/direction.service */ 7341);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/owl-prevent-click.directive */ 876);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/product-card/product-card.component */ 3284);
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/block-header/block-header.component */ 6483);









const _c0 = ["container"];
function BlockProductsCarouselComponent_div_4_7_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-product-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", product_r7);
} }
function BlockProductsCarouselComponent_div_4_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BlockProductsCarouselComponent_div_4_7_ng_template_0_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", column_r4);
} }
function BlockProductsCarouselComponent_div_4_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BlockProductsCarouselComponent_div_4_7_ng_template_0_Template, 2, 1, "ng-template", 12);
} }
const _c1 = function (a0) { return { "container": a0 }; };
function BlockProductsCarouselComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "app-block-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("next", function BlockProductsCarouselComponent_div_4_Template_app_block_header_next_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2.next()); })("prev", function BlockProductsCarouselComponent_div_4_Template_app_block_header_prev_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2.prev()); })("groupChange", function BlockProductsCarouselComponent_div_4_Template_app_block_header_groupChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.groupChange.emit($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "owl-carousel-o", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, BlockProductsCarouselComponent_div_4_7_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c1, !ctx_r0.withSidebar));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("header", ctx_r0.header)("groups", ctx_r0.groups)("arrows", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r0.carouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
} }
const _c2 = function (a0, a1) { return { "block-products-carousel--loading": a0, "block-products-carousel--has-items": a1 }; };
class BlockProductsCarouselComponent {
    constructor(platformId, direction) {
        this.platformId = platformId;
        this.direction = direction;
        this.header = '';
        this.layout = 'grid-4';
        this.rows = 1;
        this.products = [];
        this.groups = [];
        this.withSidebar = false;
        this.loading = false;
        this.groupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.columns = [];
        this.showCarousel = true;
        this.carouselDefaultOptions = {
            items: 4,
            margin: 14,
            nav: false,
            dots: false,
            loop: true,
            stagePadding: 1,
            rtl: this.direction.isRTL()
        };
        this.carouselOptionsByLayout = {
            'grid-4': {
                responsive: {
                    1110: { items: 4, margin: 14 },
                    930: { items: 4, margin: 10 },
                    690: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            'grid-4-sm': {
                responsive: {
                    820: { items: 4, margin: 14 },
                    640: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            'grid-5': {
                responsive: {
                    1110: { items: 5, margin: 12 },
                    930: { items: 4, margin: 10 },
                    690: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            horizontal: {
                items: 3,
                responsive: {
                    1110: { items: 3, margin: 14 },
                    930: { items: 3, margin: 10 },
                    690: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            }
        };
        this.carouselOptions = {};
    }
    ngOnChanges(changes) {
        const properties = Object.keys(changes);
        if (properties.includes('products') || properties.includes('row')) {
            this.columns = [];
            if (this.products && this.rows > 0) {
                const products = this.products.slice();
                while (products.length > 0) {
                    this.columns.push(products.splice(0, this.rows));
                }
            }
        }
        if ('layout' in changes) {
            this.carouselOptions = Object.assign({}, this.carouselDefaultOptions, this.carouselOptionsByLayout[changes['layout'].currentValue]);
        }
    }
    ngAfterViewInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
            const container = this.container.nativeElement;
            const containerWidth = container.getBoundingClientRect().width;
            window.addEventListener('load', () => {
                const newContainerWidth = container.getBoundingClientRect().width;
                if (containerWidth !== newContainerWidth) {
                    this.showCarousel = false;
                    setTimeout(() => this.showCarousel = true, 0);
                }
            });
        }
    }
    static { this.ɵfac = function BlockProductsCarouselComponent_Factory(t) { return new (t || BlockProductsCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_0__.DirectionService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BlockProductsCarouselComponent, selectors: [["app-block-products-carousel"]], viewQuery: function BlockProductsCarouselComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        } }, inputs: { header: "header", layout: "layout", rows: "rows", products: "products", groups: "groups", withSidebar: "withSidebar", loading: "loading" }, outputs: { groupChange: "groupChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 7, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "block", "block-products-carousel", 3, "ngClass"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "header", "groups", "arrows", "next", "prev", "groupChange"], [1, "block-products-carousel__slider"], ["container", ""], [1, "block-products-carousel__preloader"], ["appOwlPreventClick", "", 3, "options"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "block-products-carousel__column"], ["class", "block-products-carousel__cell", 4, "ngFor", "ngForOf"], [1, "block-products-carousel__cell"], [3, "product"]], template: function BlockProductsCarouselComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BlockProductsCarouselComponent_div_4_Template, 8, 8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c2, ctx.loading, !!(ctx.columns == null ? null : ctx.columns.length)));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-layout", ctx.layout);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCarousel);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselSlideDirective, _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_1__.OwlPreventClickDirective, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_2__.ProductCardComponent, _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_3__.BlockHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wcm9kdWN0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 7313:
/*!***************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products/block-products.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockProductsComponent": () => (/* binding */ BlockProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/product-card/product-card.component */ 3284);
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/block-header/block-header.component */ 6483);




function BlockProductsComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-product-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", ctx_r6.large);
} }
function BlockProductsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BlockProductsComponent_ng_template_7_ng_container_0_Template, 4, 1, "ng-container", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.large !== null);
} }
function BlockProductsComponent_ng_template_9_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-product-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", product_r9);
} }
function BlockProductsComponent_ng_template_9_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BlockProductsComponent_ng_template_9_div_0_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.smalls);
} }
function BlockProductsComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BlockProductsComponent_ng_template_9_div_0_Template, 2, 1, "div", 13);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.smalls.length > 0);
} }
function BlockProductsComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function BlockProductsComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
class BlockProductsComponent {
    constructor() {
        this.header = '';
        this.layout = 'large-first';
        this.products = [];
    }
    get large() {
        if (this.layout === 'large-first' && this.products.length > 0) {
            return this.products[0];
        }
        else if (this.layout === 'large-last' && this.products.length > 6) {
            return this.products[6];
        }
        return null;
    }
    get smalls() {
        if (this.layout === 'large-first') {
            return this.products.slice(1, 7);
        }
        else {
            return this.products.slice(0, 6);
        }
    }
    static { this.ɵfac = function BlockProductsComponent_Factory(t) { return new (t || BlockProductsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlockProductsComponent, selectors: [["app-block-products"]], inputs: { header: "header", layout: "layout", products: "products" }, decls: 14, vars: 8, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "container"], [3, "header"], [1, "block-products__body"], ["largeTemplate", ""], ["smallsTemplate", ""], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"], [4, "ngIf"], [1, "block-products__featured"], [1, "block-products__featured-item"], [3, "product"], ["class", "block-products__list", 4, "ngIf"], [1, "block-products__list"], ["class", "block-products__list-item", 4, "ngFor", "ngForOf"], [1, "block-products__list-item"]], template: function BlockProductsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-block-header", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BlockProductsComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, BlockProductsComponent_ng_template_9_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BlockProductsComponent_ng_container_11_Template, 1, 1, "ng-container", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](12, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BlockProductsComponent_ng_container_13_Template, 1, 1, "ng-container", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("block block-products block-products--layout--", ctx.layout, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", ctx.header);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.layout === "large-last");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.layout === "large-first");
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_0__.ProductCardComponent, _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_1__.BlockHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 5256:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/blocks/block-slideshow/block-slideshow.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockSlideshowComponent": () => (/* binding */ BlockSlideshowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/direction.service */ 7341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _shared_directives_click_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/click.directive */ 7993);
/* harmony import */ var _shared_directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/departments-area.directive */ 9337);
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/owl-prevent-click.directive */ 876);








function BlockSlideshowComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 9);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function BlockSlideshowComponent_owl_carousel_o_9_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 17)(5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 19)(7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Shop Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, "url(" + (ctx_r4.withDepartments ? slide_r3.image_classic : slide_r3.image_full) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, "url(" + slide_r3.image_mobile + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r4.sanitizer.bypassSecurityTrustHtml(slide_r3.title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r4.sanitizer.bypassSecurityTrustHtml(slide_r3.text), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function BlockSlideshowComponent_owl_carousel_o_9_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BlockSlideshowComponent_owl_carousel_o_9_1_ng_template_0_Template, 9, 8, "ng-template", 12);
} }
function BlockSlideshowComponent_owl_carousel_o_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "owl-carousel-o", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BlockSlideshowComponent_owl_carousel_o_9_1_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.slides);
} }
const _c1 = function (a0, a1) { return { "block-slideshow--layout--full": a0, "block-slideshow--layout--with-departments": a1 }; };
const _c2 = function (a0, a1) { return { "col-lg-12": a0, "col-lg-9": a1 }; };
class BlockSlideshowComponent {
    constructor(sanitizer, direction) {
        this.sanitizer = sanitizer;
        this.direction = direction;
        this.withDepartments = false;
        this.options = {
            nav: false,
            dots: true,
            loop: true,
            responsive: {
                0: { items: 1 }
            },
            rtl: this.direction.isRTL()
        };
        this.slides = [
            {
                title: 'Big choice of<br>Plumbing products',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
                image_classic: 'assets/images/slides/slide-1.jpg',
                image_full: 'assets/images/slides/slide-1-full.jpg',
                image_mobile: 'assets/images/slides/slide-1-mobile.jpg'
            },
            {
                title: 'Screwdrivers<br>Professional Tools',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
                image_classic: 'assets/images/slides/slide-2.jpg',
                image_full: 'assets/images/slides/slide-2-full.jpg',
                image_mobile: 'assets/images/slides/slide-2-mobile.jpg'
            },
            {
                title: 'One more<br>Unique header',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
                image_classic: 'assets/images/slides/slide-3.jpg',
                image_full: 'assets/images/slides/slide-3-full.jpg',
                image_mobile: 'assets/images/slides/slide-3-mobile.jpg'
            }
        ];
    }
    static { this.ɵfac = function BlockSlideshowComponent_Factory(t) { return new (t || BlockSlideshowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_0__.DirectionService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BlockSlideshowComponent, selectors: [["app-block-slideshow"]], inputs: { withDepartments: "withDepartments" }, decls: 10, vars: 11, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "block-slideshow", "block", 3, "ngClass"], [1, "container"], [1, "row"], ["class", "col-3 d-lg-block d-none", "appDepartmentsArea", "", 4, "ngIf"], [1, "col-12", 3, "ngClass"], [1, "block-slideshow__body"], ["appOwlPreventClick", "", 3, "options", 4, "ngIf"], ["appDepartmentsArea", "", 1, "col-3", "d-lg-block", "d-none"], ["appOwlPreventClick", "", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], ["href", "", "appClick", "", 1, "block-slideshow__slide"], [1, "block-slideshow__slide-image", "block-slideshow__slide-image--desktop", 3, "ngStyle"], [1, "block-slideshow__slide-image", "block-slideshow__slide-image--mobile", 3, "ngStyle"], [1, "block-slideshow__slide-content"], [1, "block-slideshow__slide-title", 3, "innerHTML"], [1, "block-slideshow__slide-text", 3, "innerHTML"], [1, "block-slideshow__slide-button"], [1, "btn", "btn-primary", "btn-lg"]], template: function BlockSlideshowComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BlockSlideshowComponent_div_6_Template, 1, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, BlockSlideshowComponent_owl_carousel_o_9_Template, 2, 2, "owl-carousel-o", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c1, !ctx.withDepartments, ctx.withDepartments));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.withDepartments);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](8, _c2, !ctx.withDepartments, ctx.withDepartments));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.slides == null ? null : ctx.slides.length);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselSlideDirective, _shared_directives_click_directive__WEBPACK_IMPORTED_MODULE_1__.ClickDirective, _shared_directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_2__.DepartmentsAreaDirective, _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_3__.OwlPreventClickDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1zbGlkZXNob3cuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 7450:
/*!*************************************************!*\
  !*** ./src/app/modules/blocks/blocks.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlocksModule": () => (/* binding */ BlocksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-banner/block-banner.component */ 7042);
/* harmony import */ var _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-brands/block-brands.component */ 42);
/* harmony import */ var _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-categories/block-categories.component */ 3412);
/* harmony import */ var _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-features/block-features.component */ 3888);
/* harmony import */ var _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block-map/block-map.component */ 9058);
/* harmony import */ var _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block-posts/block-posts.component */ 6647);
/* harmony import */ var _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block-product-columns/block-product-columns.component */ 2372);
/* harmony import */ var _block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block-product-columns/block-product-columns-item/block-product-columns-item.component */ 171);
/* harmony import */ var _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block-products-carousel/block-products-carousel.component */ 4630);
/* harmony import */ var _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block-products/block-products.component */ 7313);
/* harmony import */ var _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block-slideshow/block-slideshow.component */ 5256);
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/block-header/block-header.component */ 6483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
// modules (angular)


// modules (third-party)

// modules

// blocks











// components


class BlocksModule {
    static { this.ɵfac = function BlocksModule_Factory(t) { return new (t || BlocksModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: BlocksModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselModule,
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](BlocksModule, { declarations: [
        // blocks
        _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_1__.BlockBannerComponent,
        _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_2__.BlockBrandsComponent,
        _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_3__.BlockCategoriesComponent,
        _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_4__.BlockFeaturesComponent,
        _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_5__.BlockMapComponent,
        _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_6__.BlockPostsComponent,
        _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_7__.BlockProductColumnsComponent,
        _block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_8__.BlockProductColumnsItemComponent,
        _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_9__.BlockProductsCarouselComponent,
        _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_10__.BlockProductsComponent,
        _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_11__.BlockSlideshowComponent,
        // components
        _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_12__.BlockHeaderComponent], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
        // modules (third-party)
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselModule,
        // modules
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [
        // blocks
        _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_1__.BlockBannerComponent,
        _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_2__.BlockBrandsComponent,
        _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_3__.BlockCategoriesComponent,
        _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_4__.BlockFeaturesComponent,
        _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_5__.BlockMapComponent,
        _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_6__.BlockPostsComponent,
        _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_7__.BlockProductColumnsComponent,
        _block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_8__.BlockProductColumnsItemComponent,
        _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_9__.BlockProductsCarouselComponent,
        _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_10__.BlockProductsComponent,
        _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_11__.BlockSlideshowComponent] }); })();


/***/ }),

/***/ 6483:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/blocks/components/block-header/block-header.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockHeaderComponent": () => (/* binding */ BlockHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);




const _c0 = function (a0) { return { "block-header__group--active": a0 }; };
function BlockHeaderComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlockHeaderComponent_ul_7_li_1_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const group_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.setGroup(group_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const group_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, group_r3.current));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r3.name);
} }
function BlockHeaderComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BlockHeaderComponent_ul_7_li_1_Template, 3, 4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.groups);
} }
function BlockHeaderComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlockHeaderComponent_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.prev.emit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlockHeaderComponent_div_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.next.emit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class BlockHeaderComponent {
    constructor() {
        this.header = '';
        this.arrows = false;
        this.groups = [];
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.groupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    setGroup(group) {
        this.groups.forEach(g => g.current = g === group);
        this.groupChange.emit(group);
    }
    static { this.ɵfac = function BlockHeaderComponent_Factory(t) { return new (t || BlockHeaderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlockHeaderComponent, selectors: [["app-block-header"]], inputs: { header: "header", arrows: "arrows", groups: "groups" }, outputs: { next: "next", prev: "prev", groupChange: "groupChange" }, decls: 9, vars: 4, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "block-header"], [1, "block-header__title"], [1, "block-header__divider"], ["class", "block-header__groups-list", 4, "ngIf"], ["class", "block-header__arrows-list", 4, "ngIf"], [1, "block-header__groups-list"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "block-header__group", 3, "ngClass", "click"], [1, "block-header__arrows-list"], ["type", "button", 1, "block-header__arrow", "block-header__arrow--left", 3, "click"], ["name", "arrow-rounded-left-7x11", "size", "7x11"], ["type", "button", 1, "block-header__arrow", "block-header__arrow--right", 3, "click"], ["name", "arrow-rounded-right-7x11", "size", "7x11"]], template: function BlockHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BlockHeaderComponent_ul_7_Template, 2, 1, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BlockHeaderComponent_div_8_Template, 5, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groups == null ? null : ctx.groups.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.arrows);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 5000:
/*!**************************************************************************!*\
  !*** ./src/app/modules/footer/components/contacts/contacts.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/store.service */ 5819);


class ContactsComponent {
    constructor(store) {
        this.store = store;
    }
    static { this.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_store_service__WEBPACK_IMPORTED_MODULE_0__.StoreService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-footer-contacts"]], decls: 21, vars: 5, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "site-footer__widget", "footer-contacts"], [1, "footer-contacts__title"], [1, "footer-contacts__text"], [1, "footer-contacts__contacts"], [1, "footer-contacts__icon", "fas", "fa-globe-americas"], [1, "footer-contacts__icon", "far", "fa-envelope"], [1, "footer-contacts__icon", "fas", "fa-mobile-alt"], [1, "footer-contacts__icon", "far", "fa-clock"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Contact Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 5)(9, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.store.address, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.store.email, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.store.phone.join(", "), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.store.hours, "");
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 1139:
/*!********************************************************************!*\
  !*** ./src/app/modules/footer/components/links/links.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinksComponent": () => (/* binding */ LinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function LinksComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.label);
} }
class LinksComponent {
    constructor() {
        this.header = '';
        this.links = [];
    }
    static { this.ɵfac = function LinksComponent_Factory(t) { return new (t || LinksComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinksComponent, selectors: [["app-footer-links"]], inputs: { header: "header", links: "links" }, decls: 8, vars: 3, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "site-footer__widget", "footer-links"], [1, "footer-links__title"], [1, "footer-links__list"], ["class", "footer-links__item", 4, "ngFor", "ngForOf"], [1, "footer-links__item"], [1, "footer-links__link", 3, "routerLink"]], template: function LinksComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LinksComponent_li_7_Template, 3, 2, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rcy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 3525:
/*!******************************************************************************!*\
  !*** ./src/app/modules/footer/components/newsletter/newsletter.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterComponent": () => (/* binding */ NewsletterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/social-links/social-links.component */ 4150);


class NewsletterComponent {
    constructor() { }
    static { this.ɵfac = function NewsletterComponent_Factory(t) { return new (t || NewsletterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsletterComponent, selectors: [["app-footer-newsletter"]], decls: 17, vars: 1, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "footer-newsletter"], [1, "footer-newsletter__title"], [1, "footer-newsletter__text"], ["action", "", 1, "footer-newsletter__form"], ["for", "footer-newsletter-address", 1, "sr-only"], ["type", "text", "id", "footer-newsletter-address", "placeholder", "Email Address...", 1, "footer-newsletter__form-input", "form-control"], [1, "footer-newsletter__form-button", "btn", "btn-primary"], [1, "footer-newsletter__text", "footer-newsletter__text--social"], ["shape", "circle", 1, "footer-newsletter__social-links"]], template: function NewsletterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Newsletter");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Praesent pellentesque volutpat ex, vitae auctor lorem pulvinar mollis felis at lacinia. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5)(9, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Subscribe");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Follow us on social networks ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-social-links", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
        } }, dependencies: [_shared_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_0__.SocialLinksComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzbGV0dGVyLmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 335:
/*!********************************************************************!*\
  !*** ./src/app/modules/footer/components/totop/totop.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotopComponent": () => (/* binding */ TotopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);






class TotopComponent {
    constructor(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.show = false;
        this.classTotop = true;
    }
    get classTotopShow() { return this.show; }
    ngOnInit() {
        if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            return;
        }
        const showFrom = 300;
        this.zone.runOutsideAngular(() => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(window, 'scroll', { passive: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(() => {
                if (window.pageYOffset >= showFrom) {
                    if (!this.show) {
                        this.zone.run(() => this.show = true);
                    }
                }
                else {
                    if (this.show) {
                        this.zone.run(() => this.show = false);
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onClick() {
        try {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
        catch {
            window.scrollTo(0, 0);
        }
    }
    static { this.ɵfac = function TotopComponent_Factory(t) { return new (t || TotopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TotopComponent, selectors: [["app-totop"]], hostVars: 4, hostBindings: function TotopComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("totop", ctx.classTotop)("totop--show", ctx.classTotopShow);
        } }, decls: 9, vars: 1, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "totop__body"], [1, "totop__start"], [1, "totop__container", "container"], [1, "totop__end"], ["type", "button", 1, "totop__button", 3, "click"], ["name", "arrow-rounded-up-13x8", "size", "13x8"]], template: function TotopComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 3)(5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TotopComponent_Template_button_click_7_listener() { return ctx.onClick(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.constructor.name);
        } }, dependencies: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3RvcC5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 3594:
/*!****************************************************!*\
  !*** ./src/app/modules/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/theme */ 7229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contacts/contacts.component */ 5000);
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/links/links.component */ 1139);
/* harmony import */ var _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/newsletter/newsletter.component */ 3525);
/* harmony import */ var _components_totop_totop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/totop/totop.component */ 335);






const _c0 = function () { return { label: "About Us", url: "/site/about-us" }; };
const _c1 = function () { return { label: "Delivery Information", url: "/site/terms" }; };
const _c2 = function () { return { label: "Privacy Policy", url: "/site/terms" }; };
const _c3 = function () { return { label: "Brands", url: "" }; };
const _c4 = function () { return { label: "Contact Us", url: "/site/contact-us" }; };
const _c5 = function () { return { label: "Returns", url: "" }; };
const _c6 = function () { return { label: "Site Map", url: "" }; };
const _c7 = function (a0, a1, a2, a3, a4, a5, a6) { return [a0, a1, a2, a3, a4, a5, a6]; };
const _c8 = function () { return { label: "Store Location", url: "" }; };
const _c9 = function () { return { label: "Order History", url: "" }; };
const _c10 = function () { return { label: "Wish List", url: "/shop/wishlist" }; };
const _c11 = function () { return { label: "Newsletter", url: "" }; };
const _c12 = function () { return { label: "Specials", url: "" }; };
const _c13 = function () { return { label: "Gift Cards", url: "" }; };
const _c14 = function () { return { label: "Affiliate", url: "" }; };
class FooterComponent {
    constructor() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_0__.theme;
    }
    static { this.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 26, vars: 35, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "site-footer"], [1, "container"], [1, "site-footer__widgets"], [1, "row"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "col-6", "col-md-3", "col-lg-2"], ["header", "Information", 3, "links"], ["header", "My Account", 3, "links"], [1, "col-12", "col-md-12", "col-lg-4"], [1, "site-footer__widget"], [1, "site-footer__bottom"], [1, "site-footer__copyright"], ["href", "https://angular.io/", "target", "_blank"], ["target", "_blank", 3, "href"], [1, "site-footer__payments"], ["src", "assets/images/payments.png", "alt", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-footer-contacts");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-footer-links", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "app-footer-links", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-footer-newsletter", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12)(16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Powered by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Angular");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " \u2014 Design by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "app-totop");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("links", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction7"](12, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c6)));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("links", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction7"](27, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](20, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](21, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](22, _c10), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](23, _c11), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](24, _c12), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](25, _c13), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](26, _c14)));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.theme.author.profile_url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.theme.author.name);
        } }, dependencies: [_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent, _components_links_links_component__WEBPACK_IMPORTED_MODULE_2__.LinksComponent, _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_3__.NewsletterComponent, _components_totop_totop_component__WEBPACK_IMPORTED_MODULE_4__.TotopComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 4922:
/*!*************************************************!*\
  !*** ./src/app/modules/footer/footer.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contacts/contacts.component */ 5000);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ 3594);
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/links/links.component */ 1139);
/* harmony import */ var _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/newsletter/newsletter.component */ 3525);
/* harmony import */ var _components_totop_totop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/totop/totop.component */ 335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
// modules (angular)


// modules

// components






class FooterModule {
    static { this.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FooterModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent,
        _footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent,
        _components_links_links_component__WEBPACK_IMPORTED_MODULE_3__.LinksComponent,
        _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_4__.NewsletterComponent,
        _components_totop_totop_component__WEBPACK_IMPORTED_MODULE_5__.TotopComponent], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        // modules
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent] }); })();


/***/ }),

/***/ 7396:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/header/components/account-menu/account-menu.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountMenuComponent": () => (/* binding */ AccountMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);



class AccountMenuComponent {
    constructor() {
        this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    static { this.ɵfac = function AccountMenuComponent_Factory(t) { return new (t || AccountMenuComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountMenuComponent, selectors: [["app-account-menu"]], outputs: { closeMenu: "closeMenu" }, decls: 52, vars: 1, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "account-menu"], [1, "account-menu__form"], [1, "account-menu__form-title"], [1, "form-group"], ["for", "header-signin-email", 1, "sr-only"], ["id", "header-signin-email", "type", "email", "placeholder", "Email address", 1, "form-control", "form-control-sm"], ["for", "header-signin-password", 1, "sr-only"], [1, "account-menu__form-forgot"], ["id", "header-signin-password", "type", "password", "placeholder", "Password", 1, "form-control", "form-control-sm"], ["href", "", 1, "account-menu__form-forgot-link"], [1, "form-group", "account-menu__form-button"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm"], [1, "account-menu__form-link"], ["routerLink", "/account/login", 3, "click"], [1, "account-menu__divider"], ["routerLink", "/account/dashboard", 1, "account-menu__user", 3, "click"], [1, "account-menu__user-avatar"], ["src", "assets/images/avatars/avatar-3.jpg", "alt", ""], [1, "account-menu__user-info"], [1, "account-menu__user-name"], [1, "account-menu__user-email"], [1, "account-menu__links"], ["routerLink", "/account/profile", 3, "click"], ["routerLink", "/account/orders", 3, "click"], ["routerLink", "/account/addresses", 3, "click"], ["routerLink", "/account/password", 3, "click"]], template: function AccountMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log In to Your Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forgot?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12)(19, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14)(22, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_Template_a_click_22_listener() { return ctx.closeMenu.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create An Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_Template_a_click_25_listener() { return ctx.closeMenu.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20)(29, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Helena Garcia");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "stroyka@example.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 23)(35, "li")(36, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_Template_a_click_36_listener() { return ctx.closeMenu.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Edit Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_Template_a_click_39_listener() { return ctx.closeMenu.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Order History");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_Template_a_click_42_listener() { return ctx.closeMenu.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Addresses");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li")(45, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_Template_a_click_45_listener() { return ctx.closeMenu.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 23)(49, "li")(50, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_Template_a_click_50_listener() { return ctx.closeMenu.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Logout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.constructor.name);
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 8346:
/*!********************************************************************************!*\
  !*** ./src/app/modules/header/components/departments/departments.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentsComponent": () => (/* binding */ DepartmentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromMatchMedia */ 3046);
/* harmony import */ var _shared_functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromOutsideTouchClick */ 1640);
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/header.service */ 940);
/* harmony import */ var src_app_shared_api_departments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api/departments.service */ 4273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/directives/touch-click.directive */ 2083);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../megamenu/megamenu.component */ 7630);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu/menu.component */ 9513);















const _c0 = ["bodyElement"];
const _c1 = ["containerElement"];
const _c2 = ["submenuElement"];
const _c3 = ["itemElement"];
const _c4 = function (a0) { return { "departments__submenu--open": a0 }; };
function DepartmentsComponent_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16, 17)(2, "app-header-megamenu", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("itemClick", function DepartmentsComponent_ng_container_9_div_1_Template_app_header_megamenu_itemClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.onSubItemClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("departments__submenu departments__submenu--type--megamenu departments__submenu--size--", item_r4.menu.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c4, item_r4 === ctx_r5.hoveredItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("menu", item_r4.menu);
} }
function DepartmentsComponent_ng_container_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19, 17)(2, "app-header-menu", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("itemClick", function DepartmentsComponent_ng_container_9_div_2_Template_app_header_menu_itemClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.onSubItemClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c4, item_r4 === ctx_r6.hoveredItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", item_r4.menu.items);
} }
function DepartmentsComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DepartmentsComponent_ng_container_9_div_1_Template, 3, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DepartmentsComponent_ng_container_9_div_2_Template, 3, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r4.menu && item_r4.menu.type === "megamenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r4.menu && item_r4.menu.type === "menu");
} }
function DepartmentsComponent_li_11_ng_template_2_app_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-icon", 27);
} }
function DepartmentsComponent_li_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DepartmentsComponent_li_11_ng_template_2_app_icon_1_Template, 1, 0, "app-icon", 26);
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r15.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r15.menu);
} }
function DepartmentsComponent_li_11_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DepartmentsComponent_li_11_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.onItemClick()); })("appTouchClick", function DepartmentsComponent_li_11_a_4_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.onTouchClick($event, item_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](1, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", item_r15.url)("target", item_r15.target || "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r17);
} }
function DepartmentsComponent_li_11_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DepartmentsComponent_li_11_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.onItemClick()); })("appTouchClick", function DepartmentsComponent_li_11_a_5_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.onTouchClick($event, item_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](1, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", item_r15.url, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("target", item_r15.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r17);
} }
const _c5 = function (a0, a1) { return { "departments__item--menu": a0, "departments__item--hover": a1 }; };
function DepartmentsComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mouseenter", function DepartmentsComponent_li_11_Template_li_mouseenter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34); const item_r15 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r33.onItemMouseEnter(item_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DepartmentsComponent_li_11_ng_template_2_Template, 2, 2, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DepartmentsComponent_li_11_a_4_Template, 2, 3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, DepartmentsComponent_li_11_a_5_Template, 2, 3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](3, _c5, item_r15.menu && item_r15.menu.type === "menu", item_r15 === ctx_r3.hoveredItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r15.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r15.external);
} }
// import { departments } from '../../../../../data/header-departments';
class DepartmentsComponent {
    constructor(platformId, renderer, el, header, zone, departmentsService) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.el = el;
        this.header = header;
        this.zone = zone;
        this.departmentsService = departmentsService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.items = []; // departments;  const !!!
        this.hoveredItem = null;
        this.isOpen = false;
        this.fixed = false;
        this.fixedHeight = null;
        this.reCalcSubmenuPosition = false;
        this.isLog = true;
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        const root = this.element.querySelector('.departments');
        const content = this.element.querySelector('.departments__links-wrapper');
        this.items = this.departmentsService.DepartmentsChangedSub$.getValue();
        if (this.isLog) {
            console.log('- cmp -- DepartmentsComponent.ngOnInit() items -> %o', this.items);
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.header.navPanelPositionState$, this.header.navPanelVisibility$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => {
            if (this.header.navPanelPosition === 'static' && this.header.departmentsArea !== null) {
                this.open(true);
            }
            else if (this.isOpen) {
                this.close(true);
            }
        });
        this.header.departmentsArea$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(areaElement => {
            if (areaElement) {
                this.fixed = true;
                this.isOpen = true;
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platformId)) {
                    setTimeout(() => {
                        this.fix();
                    }, 0);
                }
                else {
                    this.renderer.addClass(root, 'departments--fixed');
                    this.renderer.addClass(root, 'departments--open');
                }
            }
            else {
                this.fixed = false;
                this.isOpen = false;
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platformId)) {
                    root.classList.remove('departments--open', 'departments--fixed');
                    content.style.maxHeight = '';
                    content.style.height = '';
                    content.style.transition = 'none';
                    content.getBoundingClientRect(); // force reflow
                    content.style.transition = '';
                }
                else {
                    this.renderer.removeClass(root, 'departments--fixed');
                    this.renderer.removeClass(root, 'departments--open');
                }
            }
        });
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platformId)) {
            window.addEventListener('load', () => {
                if (!this.header.departmentsArea) {
                    return;
                }
                const areaBottom = this.getAreaBottom();
                const fixedHeight = areaBottom - (content.getBoundingClientRect().top + window.scrollY);
                if (this.fixedHeight === fixedHeight) {
                    return;
                }
                root.classList.remove('departments--open', 'departments--fixed');
                content.style.height = '';
                content.style.transition = 'none';
                content.getBoundingClientRect(); // force reflow
                this.fix();
                content.style.transition = '';
            });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.fromEvent)(document, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe((event) => {
                if (event.target instanceof HTMLElement && !this.element.contains(event.target)) {
                    this.close();
                }
            });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.fromEvent)(content, 'transitionend').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe((event) => {
                if (event.propertyName === 'height') {
                    root.classList.remove('departments--transition');
                }
            });
            (0,_shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_0__.fromMatchMedia)('(min-width: 992px)').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(x => x.matches && this.header.departmentsArea !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => {
                this.fix();
            });
        }
    }
    getAreaBottom() {
        if (!this.header.departmentsArea) {
            throw new Error('Departments area is null.');
        }
        const areaRect = this.header.departmentsArea.getBoundingClientRect();
        return areaRect.top + areaRect.height + window.scrollY;
    }
    fix() {
        const root = this.element.querySelector('.departments');
        const content = this.element.querySelector('.departments__links-wrapper');
        const areaBottom = this.getAreaBottom();
        root.classList.remove('departments--transition');
        root.classList.add('departments--fixed', 'departments--open');
        this.fixedHeight = areaBottom - (content.getBoundingClientRect().top + window.scrollY);
        content.style.maxHeight = `${this.fixedHeight}px`;
        content.style.height = `${this.fixedHeight}px`;
        content.getBoundingClientRect(); // force reflow
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                (0,_shared_functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_1__.fromOutsideTouchClick)(this.element).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => {
                    if (this.isOpen) {
                        this.zone.run(() => this.close());
                    }
                });
            });
        }
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    open(immediately = false) {
        this.isOpen = true;
        const root = this.element.querySelector('.departments');
        const content = root.querySelector('.departments__links-wrapper');
        if (immediately) {
            root.classList.add('departments--open');
            const documentHeight = document.documentElement.clientHeight;
            const paddingBottom = 20;
            const contentRect = content.getBoundingClientRect();
            const areaBottom = this.getAreaBottom();
            const endHeight = this.header.departmentsArea
                ? areaBottom - (contentRect.top + window.scrollY)
                : Math.min(contentRect.height, documentHeight - paddingBottom - contentRect.top);
            content.style.maxHeight = endHeight + 'px';
            content.style.height = endHeight + 'px';
            content.style.transition = 'none';
            content.getBoundingClientRect(); // force reflow
            content.style.transition = '';
        }
        else {
            const startHeight = content.getBoundingClientRect().height;
            root.classList.add('departments--transition', 'departments--open');
            const documentHeight = document.documentElement.clientHeight;
            const paddingBottom = 20;
            const contentRect = content.getBoundingClientRect();
            const endHeight = Math.min(contentRect.height, documentHeight - paddingBottom - contentRect.top);
            content.style.height = startHeight + 'px';
            content.getBoundingClientRect(); // force reflow
            content.style.maxHeight = endHeight + 'px';
            content.style.height = endHeight + 'px';
        }
    }
    close(immediately = false) {
        if ((this.fixed && this.header.navPanelPosition === 'static') || !this.isOpen) {
            return;
        }
        this.isOpen = false;
        const root = this.element.querySelector('.departments');
        const content = root.querySelector('.departments__links-wrapper');
        if (immediately) {
            root.classList.remove('departments--open');
            content.style.transition = 'none';
            content.style.height = '';
            content.style.maxHeight = '';
            content.getBoundingClientRect(); // force reflow
            content.style.transition = '';
        }
        else {
            content.style.height = content.getBoundingClientRect().height + 'px';
            root.classList.add('departments--transition');
            root.classList.remove('departments--open');
            content.getBoundingClientRect(); // force reflow
            content.style.height = '';
            content.style.maxHeight = '';
        }
        this.hoveredItem = null;
    }
    onItemMouseEnter(item) {
        if (this.hoveredItem !== item) {
            this.hoveredItem = item;
            if (item.menu) {
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onMouseLeave() {
        this.hoveredItem = null;
    }
    onTouchClick(event, item) {
        if (event.cancelable) {
            if (this.hoveredItem && this.hoveredItem === item) {
                return;
            }
            if (item.menu) {
                event.preventDefault();
                this.hoveredItem = item;
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onItemClick() {
        this.close();
    }
    onSubItemClick() {
        this.close();
        this.hoveredItem = null;
    }
    ngAfterViewChecked() {
        if (!this.reCalcSubmenuPosition) {
            return;
        }
        this.reCalcSubmenuPosition = false;
        const itemElement = this.getCurrentItemElement();
        const submenuElement = this.getCurrentSubmenuElement();
        if (!itemElement || !submenuElement) {
            return;
        }
        const viewportHeight = window.innerHeight;
        const paddingBottom = 20;
        if (this.hoveredItem?.menu?.type === 'megamenu') {
            const submenuTop = submenuElement.getBoundingClientRect().top;
            submenuElement.style.maxHeight = `${viewportHeight - submenuTop - paddingBottom}px`;
        }
        if (this.hoveredItem?.menu?.type === 'menu') {
            const bodyElement = this.bodyElementRef.nativeElement;
            const containerElement = this.containerElementRef.nativeElement;
            const bodyRect = bodyElement.getBoundingClientRect();
            const maxHeight = viewportHeight - paddingBottom - Math.min(paddingBottom, bodyRect.top);
            submenuElement.style.maxHeight = `${maxHeight}px`;
            const submenuRect = submenuElement.getBoundingClientRect();
            const itemRect = itemElement.getBoundingClientRect();
            const containerRect = containerElement.getBoundingClientRect();
            const top = Math.min(itemRect.top, viewportHeight - paddingBottom - submenuRect.height) - containerRect.top;
            submenuElement.style.top = `${top}px`;
        }
    }
    getCurrentItemElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.indexOf(this.hoveredItem);
        const elements = this.itemElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
    getCurrentSubmenuElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.filter(x => x.menu).indexOf(this.hoveredItem);
        const elements = this.submenuElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
    static { this.ɵfac = function DepartmentsComponent_Factory(t) { return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_api_departments_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentsService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DepartmentsComponent, selectors: [["app-header-departments"]], viewQuery: function DepartmentsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c3, 5);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.bodyElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.containerElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.submenuElements = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.itemElements = _t);
        } }, decls: 16, vars: 3, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "departments"], [1, "departments__body"], ["bodyElement", ""], [1, "departments__links-wrapper", 3, "mouseleave"], [1, "departments__submenus-container"], ["containerElement", ""], [4, "ngFor", "ngForOf"], [1, "departments__links"], ["class", "departments__item", 3, "ngClass", "mouseenter", 4, "ngFor", "ngForOf"], [1, "departments__button", 3, "click"], ["name", "menu-18x14", "size", "18x14", 1, "departments__button-icon"], ["name", "arrow-rounded-down-9x6", "size", "9x6", 1, "departments__button-arrow"], [3, "class", "ngClass", 4, "ngIf"], ["class", "departments__submenu departments__submenu--type--menu", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["submenuElement", ""], [3, "menu", "itemClick"], [1, "departments__submenu", "departments__submenu--type--menu", 3, "ngClass"], [3, "items", "itemClick"], [1, "departments__item", 3, "ngClass", "mouseenter"], ["itemElement", ""], ["link", ""], ["class", "departments__item-link", 3, "routerLink", "target", "click", "appTouchClick", 4, "ngIf"], ["class", "departments__item-link", 3, "href", "target", "click", "appTouchClick", 4, "ngIf"], ["class", "departments__item-arrow", "name", "arrow-rounded-right-6x9", "size", "6x9", 4, "ngIf"], ["name", "arrow-rounded-right-6x9", "size", "6x9", 1, "departments__item-arrow"], [1, "departments__item-link", 3, "routerLink", "target", "click", "appTouchClick"], [3, "ngTemplateOutlet"], [1, "departments__item-link", 3, "href", "target", "click", "appTouchClick"]], template: function DepartmentsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2)(4, "div", 3, 4)(6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mouseleave", function DepartmentsComponent_Template_div_mouseleave_6_listener() { return ctx.onMouseLeave(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, DepartmentsComponent_ng_container_9_Template, 3, 2, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ul", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, DepartmentsComponent_li_11_Template, 6, 6, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DepartmentsComponent_Template_button_click_12_listener() { return ctx.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "app-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Shop By Category ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-icon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.items);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_4__.TouchClickDirective, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_6__.MegamenuComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__.MenuComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 7481:
/*!**************************************************************************!*\
  !*** ./src/app/modules/header/components/dropcart/dropcart.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropcartComponent": () => (/* binding */ DropcartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/offcanvas-cart.service */ 6163);
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ 5237);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ 133);










function DropcartComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DropcartComponent_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function DropcartComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Shopping Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DropcartComponent_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

function DropcartComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Your shopping cart is empty! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function DropcartComponent_ng_container_10_div_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DropcartComponent_ng_container_10_div_2_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.closeMenu.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r12.root.product(item_r11.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r11.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

function DropcartComponent_ng_container_10_div_2_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", option_r18.name, ": ", option_r18.value, "");
  }
}

function DropcartComponent_ng_container_10_div_2_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DropcartComponent_ng_container_10_div_2_ul_7_li_1_Template, 2, 2, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r11.options);
  }
}

const _c0 = function (a0) {
  return {
    "btn-loading": a0
  };
};

function DropcartComponent_ng_container_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DropcartComponent_ng_container_10_div_2_a_2_Template, 2, 2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 23)(4, "div", 24)(5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DropcartComponent_ng_container_10_div_2_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.closeMenu.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, DropcartComponent_ng_container_10_div_2_ul_7_Template, 2, 1, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 27)(9, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DropcartComponent_ng_container_10_div_2_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.remove(item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "app-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r11.product.images == null ? null : item_r11.product.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r8.root.product(item_r11.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r11.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r11.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r11.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 7, item_r11.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c0, ctx_r8.removedItems.includes(item_r11)));
  }
}

function DropcartComponent_ng_container_10_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, ctx_r9.cart.subtotal$)));
  }
}

function DropcartComponent_ng_container_10_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const total_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](total_r23.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, total_r23.price));
  }
}

function DropcartComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DropcartComponent_ng_container_10_div_2_Template, 17, 11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 15)(5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, DropcartComponent_ng_container_10_tr_6_Template, 7, 5, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DropcartComponent_ng_container_10_tr_8_Template, 6, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 17)(18, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DropcartComponent_ng_container_10_Template_a_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.closeMenu.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "View Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DropcartComponent_ng_container_10_Template_a_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.closeMenu.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 6, ctx_r3.cart.items$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 8, ctx_r3.cart.totals$)) == null ? null : tmp_1_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 10, ctx_r3.cart.totals$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 14, ctx_r3.cart.total$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r3.root.cart());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r3.root.checkout());
  }
}

const _c1 = function (a1, a2, a3) {
  return {
    dropcart: true,
    "dropcart--style--dropdown": a1,
    "dropcart--style--offcanvas": a2,
    "dropcart--open": a3
  };
};

class DropcartComponent {
  constructor(state, cart, root) {
    this.state = state;
    this.cart = cart;
    this.root = root;
    this.removedItems = [];
    this.type = 'dropdown';
    this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }

  remove(item) {
    if (this.removedItems.includes(item)) {
      return;
    }

    this.removedItems.push(item);
    this.cart.remove(item).subscribe({
      complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item)
    });
  }

  close() {
    this.state.close();
  }

  static {
    this.ɵfac = function DropcartComponent_Factory(t) {
      return new (t || DropcartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_0__.OffcanvasCartService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__.RootService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: DropcartComponent,
      selectors: [["app-header-dropcart"]],
      inputs: {
        type: "type"
      },
      outputs: {
        closeMenu: "closeMenu"
      },
      decls: 12,
      vars: 17,
      consts: [[1, "test-border"], [1, "test-name-Component"], ["class", "dropcart__backdrop", 3, "click", 4, "ngIf"], [1, "dropcart__body"], ["class", "dropcart__header", 4, "ngIf"], ["class", "dropcart__empty", 4, "ngIf"], [4, "ngIf"], [1, "dropcart__backdrop", 3, "click"], [1, "dropcart__header"], [1, "dropcart__title"], ["type", "button", 1, "dropcart__close", 3, "click"], ["name", "cross-12", "size", "12"], [1, "dropcart__empty"], [1, "dropcart__products-list"], ["class", "dropcart__product", 4, "ngFor", "ngForOf"], [1, "dropcart__totals"], [4, "ngFor", "ngForOf"], [1, "dropcart__buttons"], [1, "btn", "btn-secondary", 3, "routerLink", "click"], [1, "btn", "btn-primary", 3, "routerLink", "click"], [1, "dropcart__product"], [1, "dropcart__product-image", "product-image"], ["class", "product-image__body", 3, "routerLink", "click", 4, "ngIf"], [1, "dropcart__product-info"], [1, "dropcart__product-name"], [3, "routerLink", "click"], ["class", "dropcart__product-options", 4, "ngIf"], [1, "dropcart__product-meta"], [1, "dropcart__product-quantity"], [1, "dropcart__product-price"], ["type", "button", 1, "dropcart__product-remove", "btn", "btn-light", "btn-sm", "btn-svg-icon", 3, "ngClass", "click"], ["name", "cross-10", "size", "10"], [1, "product-image__body", 3, "routerLink", "click"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "dropcart__product-options"]],
      template: function DropcartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DropcartComponent_div_5_Template, 1, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, DropcartComponent_div_7_Template, 5, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DropcartComponent_div_8_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, DropcartComponent_ng_container_10_Template, 22, 16, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }

        if (rf & 2) {
          let tmp_4_0;
          let tmp_5_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](13, _c1, ctx.type === "dropdown", ctx.type === "offcanvas", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 7, ctx.state.isOpen$)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.type === "offcanvas");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.type === "offcanvas");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 9, ctx.cart.items$)) == null ? null : tmp_4_0.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 11, ctx.cart.items$)) == null ? null : tmp_5_0.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_4__.CurrencyFormatPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wY2FydC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
  }
}

/***/ }),

/***/ 2856:
/*!****************************************************************************!*\
  !*** ./src/app/modules/header/components/indicator/indicator.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorComponent": () => (/* binding */ IndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _shared_functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromOutsideTouchClick */ 1640);
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/header.service */ 940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/touch-click.directive */ 2083);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);











const _c0 = ["dropdownElement"];
const _c1 = function (a0) { return { "indicator__icon": a0 }; };
function IndicatorComponent_ng_template_3_app_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-icon", 12);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, ctx_r6.iconWhenOpen))("name", ctx_r6.icon);
} }
function IndicatorComponent_ng_template_3_app_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-icon", 13);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", ctx_r7.iconWhenOpen);
} }
function IndicatorComponent_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.counter);
} }
function IndicatorComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, IndicatorComponent_ng_template_3_app_icon_1_Template, 1, 4, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, IndicatorComponent_ng_template_3_app_icon_2_Template, 1, 1, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, IndicatorComponent_ng_template_3_span_3_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.iconWhenOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.counter !== null);
} }
function IndicatorComponent_button_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function IndicatorComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IndicatorComponent_button_5_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.onClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, IndicatorComponent_button_5_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function IndicatorComponent_a_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function IndicatorComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IndicatorComponent_a_6_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.onClick($event)); })("appTouchClick", function IndicatorComponent_a_6_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.onTouchClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, IndicatorComponent_a_6_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function IndicatorComponent_a_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function IndicatorComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IndicatorComponent_a_7_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.onClick($event)); })("appTouchClick", function IndicatorComponent_a_7_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.onTouchClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, IndicatorComponent_a_7_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r4.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
const _c2 = ["*"];
class IndicatorComponent {
    constructor(platformId, elementRef, zone, header) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.zone = zone;
        this.header = header;
        this.trigger = false;
        this.icon = '';
        this.iconWhenOpen = null;
        this.link = null;
        this.counter = null;
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.stateChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.classIndicator = true;
        this.isOpen = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    get classIndicatorTriggerClick() { return this.trigger === 'click'; }
    get classIndicatorTriggerHover() { return this.trigger === 'hover'; }
    get element() {
        return this.elementRef.nativeElement;
    }
    get dropdownElement() {
        return this.dropdownElementRef.nativeElement;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(document, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe((event) => {
                    if (!this.element.contains(event.target)) {
                        this.zone.run(() => this.close());
                    }
                });
            });
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.header.navPanelPositionState$, this.header.navPanelVisibility$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(() => this.close(true));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(this.dropdownElement, 'transitionend').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe((event) => {
                    if (event instanceof TransitionEvent &&
                        this.dropdownElement === event.target &&
                        event.propertyName === 'visibility' &&
                        !this.isOpen) {
                        this.element.classList.remove('indicator--display');
                    }
                });
                (0,_shared_functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_0__.fromOutsideTouchClick)(this.element).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(() => {
                    if (this.isOpen) {
                        this.zone.run(() => this.close());
                    }
                });
            });
        }
    }
    toggle(force, immediately = false) {
        const newValue = force !== undefined ? force : !this.isOpen;
        if (this.isOpen !== newValue) {
            this.isOpen = newValue;
            if (this.isOpen) {
                this.element.classList.add('indicator--display');
                this.element.getBoundingClientRect(); // force reflow
                this.element.classList.add('indicator--open');
                const dropdownTop = this.dropdownElement.getBoundingClientRect().top;
                const viewportHeight = window.innerHeight;
                const paddingBottom = 20;
                this.dropdownElement.style.maxHeight = `${viewportHeight - dropdownTop - paddingBottom}px`;
                if (immediately) {
                    this.dropdownElement.style.transition = 'none';
                    this.dropdownElement.getBoundingClientRect(); // force reflow
                    this.dropdownElement.style.transition = '';
                }
            }
            else {
                if (immediately) {
                    this.element.classList.remove('indicator--display');
                }
                this.element.classList.remove('indicator--open');
            }
            this.stateChanges.emit(this.isOpen);
        }
    }
    close(immediately = false) {
        this.toggle(false, immediately);
    }
    open(immediately = false) {
        this.toggle(true, immediately);
    }
    onClick(event) {
        this.buttonClick.emit();
        if (this.trigger === 'click') {
            event.preventDefault();
            this.toggle();
        }
    }
    onTouchClick(event) {
        if (event.cancelable) {
            if (this.trigger !== 'hover' || this.isOpen) {
                return;
            }
            event.preventDefault();
            this.open();
        }
    }
    onMouseEnter() {
        this.element.classList.add('indicator--hover');
        if (this.trigger === 'hover') {
            this.open();
        }
    }
    onMouseleave() {
        this.element.classList.remove('indicator--hover');
        if (this.trigger === 'hover') {
            this.close();
        }
    }
    static { this.ɵfac = function IndicatorComponent_Factory(t) { return new (t || IndicatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__.HeaderService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: IndicatorComponent, selectors: [["app-indicator"]], viewQuery: function IndicatorComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dropdownElementRef = _t.first);
        } }, hostVars: 6, hostBindings: function IndicatorComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function IndicatorComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function IndicatorComponent_mouseleave_HostBindingHandler() { return ctx.onMouseleave(); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("indicator", ctx.classIndicator)("indicator--trigger--click", ctx.classIndicatorTriggerClick)("indicator--trigger--hover", ctx.classIndicatorTriggerHover);
        } }, inputs: { trigger: "trigger", icon: "icon", iconWhenOpen: "iconWhenOpen", link: "link", counter: "counter" }, outputs: { buttonClick: "buttonClick", stateChanges: "stateChanges" }, exportAs: ["appIndicator"], ngContentSelectors: _c2, decls: 11, vars: 4, consts: [[1, "test-border"], [1, "test-name-Component"], ["buttonContent", ""], ["type", "button", "class", "indicator__button", 3, "click", 4, "ngIf"], ["class", "indicator__button", 3, "href", "click", "appTouchClick", 4, "ngIf"], ["class", "indicator__button", 3, "routerLink", "click", "appTouchClick", 4, "ngIf"], [1, "indicator__dropdown"], ["dropdownElement", ""], [1, "indicator__area"], ["size", "20", 3, "ngClass", "name", 4, "ngIf"], ["class", "indicator__icon indicator__icon--open", "size", "20", 3, "name", 4, "ngIf"], ["class", "indicator__value", 4, "ngIf"], ["size", "20", 3, "ngClass", "name"], ["size", "20", 1, "indicator__icon", "indicator__icon--open", 3, "name"], [1, "indicator__value"], ["type", "button", 1, "indicator__button", 3, "click"], [4, "ngTemplateOutlet"], [1, "indicator__button", 3, "href", "click", "appTouchClick"], [1, "indicator__button", 3, "routerLink", "click", "appTouchClick"]], template: function IndicatorComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, IndicatorComponent_ng_template_3_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, IndicatorComponent_button_5_Template, 2, 1, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, IndicatorComponent_a_6_Template, 2, 2, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, IndicatorComponent_a_7_Template, 2, 2, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.link === null);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.link !== null && ctx.trigger === "click");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.link !== null && ctx.trigger !== "click");
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_2__.TouchClickDirective, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2F0b3IuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 1806:
/*!********************************************************************!*\
  !*** ./src/app/modules/header/components/links/links.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinksComponent": () => (/* binding */ LinksComponent)
/* harmony export */ });
/* harmony import */ var _data_header_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/header-navigation */ 2745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/direction.service */ 7341);
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/header.service */ 940);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_directives_outside_touch_click_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/outside-touch-click.directive */ 1230);
/* harmony import */ var _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/directives/touch-click.directive */ 2083);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../megamenu/megamenu.component */ 7630);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu/menu.component */ 9513);














const _c0 = ["submenuElement"];
const _c1 = ["itemElement"];
function LinksComponent_li_4_ng_template_2_app_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-icon", 13);
} }
function LinksComponent_li_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, LinksComponent_li_4_ng_template_2_app_icon_2_Template, 1, 0, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r1.menu);
} }
function LinksComponent_li_4_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("appTouchClick", function LinksComponent_li_4_a_4_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.onTouchClick($event, item_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", item_r1.url)("target", item_r1.target || "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function LinksComponent_li_4_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("appTouchClick", function LinksComponent_li_4_a_5_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.onTouchClick($event, item_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("target", item_r1.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
const _c2 = function (a0) { return { "nav-links__submenu--open": a0 }; };
function LinksComponent_li_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17, 18)(2, "app-header-menu", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("itemClick", function LinksComponent_li_4_div_6_Template_app_header_menu_itemClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.onSubItemClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c2, ctx_r7.hoveredItem === item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", item_r1.menu.items);
} }
function LinksComponent_li_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20, 18)(2, "app-header-megamenu", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("itemClick", function LinksComponent_li_4_div_7_Template_app_header_megamenu_itemClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.onSubItemClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("nav-links__submenu nav-links__submenu--type--megamenu nav-links__submenu--size--", item_r1.menu.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c2, ctx_r8.hoveredItem === item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("menu", item_r1.menu);
} }
const _c3 = function (a0, a1) { return { "nav-links__item--has-submenu": a0, "nav-links__item--hover": a1 }; };
function LinksComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mouseenter", function LinksComponent_li_4_Template_li_mouseenter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const item_r1 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.onItemMouseEnter(item_r1)); })("mouseleave", function LinksComponent_li_4_Template_li_mouseleave_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const item_r1 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.onItemMouseLeave(item_r1)); })("appOutsideTouchClick", function LinksComponent_li_4_Template_li_appOutsideTouchClick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const item_r1 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.onOutsideTouchClick(item_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, LinksComponent_li_4_ng_template_2_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, LinksComponent_li_4_a_4_Template, 2, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, LinksComponent_li_4_a_5_Template, 2, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, LinksComponent_li_4_div_6_Template, 3, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, LinksComponent_li_4_div_7_Template, 3, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](5, _c3, item_r1.menu, ctx_r0.hoveredItem === item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r1.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r1.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r1.menu && item_r1.menu.type === "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r1.menu && item_r1.menu.type === "megamenu");
} }
class LinksComponent {
    constructor(direction, header, zone) {
        this.direction = direction;
        this.header = header;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.items = _data_header_navigation__WEBPACK_IMPORTED_MODULE_0__.navigation;
        this.hoveredItem = null;
        this.reCalcSubmenuPosition = false;
    }
    onItemMouseEnter(item) {
        if (this.hoveredItem !== item) {
            this.hoveredItem = item;
            if (item.menu) {
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onItemMouseLeave(item) {
        if (this.hoveredItem === item) {
            this.hoveredItem = null;
        }
    }
    onTouchClick(event, item) {
        if (event.cancelable) {
            if (this.hoveredItem && this.hoveredItem === item) {
                return;
            }
            if (item.menu) {
                event.preventDefault();
                this.hoveredItem = item;
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onOutsideTouchClick(item) {
        if (this.hoveredItem === item) {
            this.zone.run(() => this.hoveredItem = null);
        }
    }
    onSubItemClick() {
        this.hoveredItem = null;
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.header.navPanelPositionState$, this.header.navPanelVisibility$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => this.hoveredItem = null);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewChecked() {
        if (!this.reCalcSubmenuPosition) {
            return;
        }
        this.reCalcSubmenuPosition = false;
        const itemElement = this.getCurrentItemElement();
        const submenuElement = this.getCurrentSubmenuElement();
        if (!submenuElement || !itemElement) {
            return;
        }
        const submenuTop = submenuElement.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const paddingBottom = 20;
        submenuElement.style.maxHeight = `${viewportHeight - submenuTop - paddingBottom}px`;
        // calc megamenu position
        if (this.hoveredItem?.menu?.type !== 'megamenu') {
            return;
        }
        const container = submenuElement.offsetParent;
        if (!container) {
            return;
        }
        const containerWidth = container.getBoundingClientRect().width;
        const megamenuWidth = submenuElement.getBoundingClientRect().width;
        if (this.direction.isRTL()) {
            const itemPosition = containerWidth - (itemElement.offsetLeft + itemElement.offsetWidth);
            const megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));
            submenuElement.style.right = megamenuPosition + 'px';
        }
        else {
            const itemPosition = itemElement.offsetLeft;
            const megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));
            submenuElement.style.left = megamenuPosition + 'px';
        }
    }
    getCurrentItemElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.indexOf(this.hoveredItem);
        const elements = this.itemElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
    getCurrentSubmenuElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.filter(x => x.menu).indexOf(this.hoveredItem);
        const elements = this.submenuElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
    static { this.ɵfac = function LinksComponent_Factory(t) { return new (t || LinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_1__.DirectionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: LinksComponent, selectors: [["app-header-links"]], viewQuery: function LinksComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.submenuElements = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.itemElements = _t);
        } }, decls: 5, vars: 2, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "nav-links__list"], ["class", "nav-links__item", 3, "ngClass", "mouseenter", "mouseleave", "appOutsideTouchClick", 4, "ngFor", "ngForOf"], [1, "nav-links__item", 3, "ngClass", "mouseenter", "mouseleave", "appOutsideTouchClick"], ["itemElement", ""], ["link", ""], ["class", "nav-links__item-link", 3, "routerLink", "target", "appTouchClick", 4, "ngIf"], ["class", "nav-links__item-link", 3, "href", "target", "appTouchClick", 4, "ngIf"], ["class", "nav-links__submenu nav-links__submenu--type--menu", 3, "ngClass", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [1, "nav-links__item-body"], ["class", "nav-links__item-arrow", "name", "arrow-rounded-down-9x6", "size", "9x6", 4, "ngIf"], ["name", "arrow-rounded-down-9x6", "size", "9x6", 1, "nav-links__item-arrow"], [1, "nav-links__item-link", 3, "routerLink", "target", "appTouchClick"], [3, "ngTemplateOutlet"], [1, "nav-links__item-link", 3, "href", "target", "appTouchClick"], [1, "nav-links__submenu", "nav-links__submenu--type--menu", 3, "ngClass"], ["submenuElement", ""], [3, "items", "itemClick"], [3, "ngClass"], [3, "menu", "itemClick"]], template: function LinksComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, LinksComponent_li_4_Template, 8, 8, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.items);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _shared_directives_outside_touch_click_directive__WEBPACK_IMPORTED_MODULE_3__.OutsideTouchClickDirective, _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_4__.TouchClickDirective, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_6__.MegamenuComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__.MenuComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rcy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 7630:
/*!**************************************************************************!*\
  !*** ./src/app/modules/header/components/megamenu/megamenu.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MegamenuComponent": () => (/* binding */ MegamenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




function MegamenuComponent_div_6_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MegamenuComponent_div_6_li_2_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.itemClick.emit(item_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3.url)("target", item_r3.target || "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
} }
function MegamenuComponent_div_6_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MegamenuComponent_div_6_li_2_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.itemClick.emit(item_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", item_r3.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
} }
function MegamenuComponent_div_6_li_2_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MegamenuComponent_div_6_li_2_ul_3_li_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const subItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.itemClick.emit(subItem_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", subItem_r16.url)("target", subItem_r16.target || "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r16.label);
} }
function MegamenuComponent_div_6_li_2_ul_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MegamenuComponent_div_6_li_2_ul_3_li_1_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const subItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.itemClick.emit(subItem_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", subItem_r16.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", subItem_r16.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r16.label);
} }
function MegamenuComponent_div_6_li_2_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegamenuComponent_div_6_li_2_ul_3_li_1_a_1_Template, 2, 3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MegamenuComponent_div_6_li_2_ul_3_li_1_a_2_Template, 2, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !subItem_r16.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r16.external);
} }
function MegamenuComponent_div_6_li_2_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegamenuComponent_div_6_li_2_ul_3_li_1_Template, 3, 2, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.items);
} }
const _c0 = function (a0) { return { "megamenu__item--with-submenu": a0 }; };
function MegamenuComponent_div_6_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegamenuComponent_div_6_li_2_a_1_Template, 2, 3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MegamenuComponent_div_6_li_2_a_2_Template, 2, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MegamenuComponent_div_6_li_2_ul_3_Template, 2, 1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r3.items));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r3.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.items);
} }
function MegamenuComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MegamenuComponent_div_6_li_2_Template, 4, 6, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const column_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-", column_r1.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r1.items);
} }
class MegamenuComponent {
    constructor() {
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    static { this.ɵfac = function MegamenuComponent_Factory(t) { return new (t || MegamenuComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MegamenuComponent, selectors: [["app-header-megamenu"]], inputs: { menu: "menu" }, outputs: { itemClick: "itemClick" }, decls: 7, vars: 4, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "megamenu"], [1, "megamenu__body"], [1, "row"], [3, "class", 4, "ngFor", "ngForOf"], [1, "megamenu__links", "megamenu__links--level--0"], ["class", "megamenu__item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "megamenu__item", 3, "ngClass"], [3, "routerLink", "target", "click", 4, "ngIf"], [3, "href", "target", "click", 4, "ngIf"], ["class", "megamenu__links megamenu__links--level--1", 4, "ngIf"], [3, "routerLink", "target", "click"], [3, "href", "target", "click"], [1, "megamenu__links", "megamenu__links--level--1"], ["class", "megamenu__item", 4, "ngFor", "ngForOf"], [1, "megamenu__item"]], template: function MegamenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MegamenuComponent_div_6_Template, 3, 4, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.menu.image ? "url(" + ctx.menu.image + ")" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu.columns);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWdhbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 9513:
/*!******************************************************************!*\
  !*** ./src/app/modules/header/components/menu/menu.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/direction.service */ 7341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/touch-click.directive */ 2083);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);







const _c0 = ["menuElement"];
const _c1 = ["submenuElement"];
const _c2 = ["itemElement"];
const _c3 = function (a0) { return { "menu__submenu--open": a0 }; };
function MenuComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9, 10)(2, "app-header-menu", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemClick", function MenuComponent_ng_container_6_div_1_Template_app_header_menu_itemClick_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.onSubItemClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c3, item_r3 === ctx_r4.hoveredItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", item_r3.items);
} }
function MenuComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MenuComponent_ng_container_6_div_1_Template, 3, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r3.items);
} }
function MenuComponent_li_8_ng_template_2_app_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-icon", 18);
} }
function MenuComponent_li_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MenuComponent_li_8_ng_template_2_app_icon_1_Template, 1, 0, "app-icon", 17);
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r9.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r9.items);
} }
function MenuComponent_li_8_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_li_8_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.itemClick.emit(item_r9)); })("appTouchClick", function MenuComponent_li_8_a_4_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.onTouchClick($event, item_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r9.url)("target", item_r9.target || "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r11);
} }
function MenuComponent_li_8_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_li_8_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.itemClick.emit(item_r9)); })("appTouchClick", function MenuComponent_li_8_a_5_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.onTouchClick($event, item_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", item_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("target", item_r9.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r11);
} }
const _c4 = function (a0) { return { "menu__item--hover": a0 }; };
function MenuComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function MenuComponent_li_8_Template_li_mouseenter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const item_r9 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.onItemMouseEnter(item_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MenuComponent_li_8_ng_template_2_Template, 2, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MenuComponent_li_8_a_4_Template, 2, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MenuComponent_li_8_a_5_Template, 2, 3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c4, item_r9 === ctx_r2.hoveredItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r9.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r9.external);
} }
const _c5 = function (a0, a1) { return { "menu--layout--classic": a0, "menu--layout--topbar": a1 }; };
class MenuComponent {
    constructor(direction) {
        this.direction = direction;
        this.layout = 'classic';
        this.items = [];
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.hoveredItem = null;
        this.reCalcSubmenuPosition = false;
    }
    get element() {
        return this.elementRef.nativeElement;
    }
    onItemMouseEnter(item) {
        if (this.hoveredItem !== item) {
            this.hoveredItem = item;
            if (item.items) {
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onMouseLeave() {
        this.hoveredItem = null;
    }
    onTouchClick(event, item) {
        if (event.cancelable) {
            if (this.hoveredItem && this.hoveredItem === item) {
                return;
            }
            if (item.items) {
                event.preventDefault();
                this.hoveredItem = item;
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onSubItemClick(item) {
        this.hoveredItem = null;
        this.itemClick.emit(item);
    }
    ngAfterViewChecked() {
        if (!this.reCalcSubmenuPosition) {
            return;
        }
        this.reCalcSubmenuPosition = false;
        const itemElement = this.getCurrentItemElement();
        const submenuElement = this.getCurrentSubmenuElement();
        if (!submenuElement || !itemElement) {
            return;
        }
        const menuRect = this.element.getBoundingClientRect();
        const itemRect = itemElement.getBoundingClientRect();
        const submenuRect = submenuElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const paddingY = 20;
        const paddingBottom = Math.min(viewportHeight - itemRect.bottom, paddingY);
        const maxHeight = viewportHeight - paddingY - paddingBottom;
        submenuElement.style.maxHeight = `${maxHeight}px`;
        const submenuHeight = submenuElement.getBoundingClientRect().height;
        const position = Math.min(Math.max(itemRect.top - menuRect.top, 0), (viewportHeight - paddingBottom - submenuHeight) - menuRect.top);
        submenuElement.style.top = `${position}px`;
        if (this.direction.isRTL()) {
            const submenuLeft = menuRect.left - submenuRect.width;
            submenuElement.classList.toggle('menu__submenu--reverse', submenuLeft < 0);
        }
        else {
            const submenuRight = menuRect.left + menuRect.width + submenuRect.width;
            submenuElement.classList.toggle('menu__submenu--reverse', submenuRight > document.body.clientWidth);
        }
    }
    getCurrentItemElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.indexOf(this.hoveredItem);
        const elements = this.itemElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
    getCurrentSubmenuElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.filter(x => x.items).indexOf(this.hoveredItem);
        const elements = this.submenuElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
    static { this.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_0__.DirectionService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-header-menu"]], viewQuery: function MenuComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.elementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.submenuElements = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.itemElements = _t);
        } }, inputs: { layout: "layout", items: "items" }, outputs: { itemClick: "itemClick" }, decls: 9, vars: 7, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "menu", 3, "ngClass", "mouseleave"], ["menuElement", ""], [1, "menu__submenus-container"], [4, "ngFor", "ngForOf"], [1, "menu__list"], ["class", "menu__item", 3, "ngClass", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "menu__submenu", 3, "ngClass", 4, "ngIf"], [1, "menu__submenu", 3, "ngClass"], ["submenuElement", ""], [3, "items", "itemClick"], [1, "menu__item", 3, "ngClass", "mouseenter"], ["itemElement", ""], ["link", ""], ["class", "menu__item-link", 3, "routerLink", "target", "click", "appTouchClick", 4, "ngIf"], ["class", "menu__item-link", 3, "href", "target", "click", "appTouchClick", 4, "ngIf"], ["class", "menu__item-arrow", "name", "arrow-rounded-right-6x9", "size", "6x9", 4, "ngIf"], ["name", "arrow-rounded-right-6x9", "size", "6x9", 1, "menu__item-arrow"], [1, "menu__item-link", 3, "routerLink", "target", "click", "appTouchClick"], [3, "ngTemplateOutlet"], [1, "menu__item-link", 3, "href", "target", "click", "appTouchClick"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseleave", function MenuComponent_Template_div_mouseleave_3_listener() { return ctx.onMouseLeave(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MenuComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MenuComponent_li_8_Template, 6, 5, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c5, ctx.layout === "classic", ctx.layout === "topbar"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_1__.TouchClickDirective, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, MenuComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 4565:
/*!****************************************************************!*\
  !*** ./src/app/modules/header/components/nav/nav.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var _shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromMatchMedia */ 3046);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/offcanvas-cart.service */ 6163);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/root.service */ 1372);
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ 5237);
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ 165);
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/header.service */ 940);
/* harmony import */ var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/search/search.component */ 9727);
/* harmony import */ var _account_menu_account_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../account-menu/account-menu.component */ 7396);
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../departments/departments.component */ 8346);
/* harmony import */ var _dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dropcart/dropcart.component */ 7481);
/* harmony import */ var _indicator_indicator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../indicator/indicator.component */ 2856);
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../links/links.component */ 1806);



















const _c0 = ["element"];

function NavComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 18)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", ctx_r1.root.home());
  }
}

function NavComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-header-departments");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function NavComponent_app_indicator_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-indicator", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("stateChanges", function NavComponent_app_indicator_11_Template_app_indicator_stateChanges_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r10);

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);

      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event === true ? _r8.inputElement.focus() : "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "app-search", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("escape", function NavComponent_app_indicator_11_Template_app_search_escape_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r10);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](1);

      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r7.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function NavComponent_app_header_dropcart_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-header-dropcart", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeMenu", function NavComponent_app_header_dropcart_17_Template_app_header_dropcart_closeMenu_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](15);

      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r4.close(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

const _c1 = function (a0) {
  return {
    "nav-panel--sticky": a0
  };
};

class NavComponent {
  constructor(platformId, route, offcanvasCart, root, cart, wishlist, zone, header) {
    this.platformId = platformId;
    this.route = route;
    this.offcanvasCart = offcanvasCart;
    this.root = root;
    this.cart = cart;
    this.wishlist = wishlist;
    this.zone = zone;
    this.header = header;
    this.departments = true;
    this.logo = false;
    this.search = false;
    this.stickyMode = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this.stuckFrom = null;
    this.staticFrom = null;
    this.scrollPosition = 0;
    this.scrollDistance = 0;
    this.dropcartType = 'dropdown';
  }

  get element() {
    return this.elementRef?.nativeElement;
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.dropcartType = data['dropcartType'] || 'dropdown';
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit() {
    if (this.stickyMode && (0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.isPlatformBrowser)(this.platformId)) {
      this.media = (0,_shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_0__.fromMatchMedia)('(min-width: 992px)', false).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)({
        bufferSize: 1,
        refCount: true
      }));
      this.media.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$)).subscribe(media => this.onMediaChange(media));
    }
  }

  onCartClick() {
    if (this.dropcartType === 'offcanvas') {
      this.offcanvasCart.open();
    }
  }

  onScroll() {
    const scrollCurrentPosition = window.pageYOffset;
    const scrollDelta = scrollCurrentPosition - this.scrollPosition; // Resets the distance if the scroll changes direction.

    if (scrollDelta < 0 !== this.scrollDistance < 0) {
      this.scrollDistance = 0;
    }

    const distanceToShow = 10; // in pixels

    const distanceToHide = 25; // in pixels

    this.scrollPosition = scrollCurrentPosition;
    this.scrollDistance += scrollDelta;

    if (this.stuckFrom && this.header.navPanelPosition === 'static' && scrollCurrentPosition > this.stuckFrom) {
      this.makeSticky();
    }

    if (this.staticFrom && this.header.navPanelPosition === 'sticky' && scrollCurrentPosition <= this.staticFrom) {
      this.makeStatic();
    }

    if (this.header.navPanelPosition === 'sticky') {
      if (this.stickyMode === 'pullToShow') {
        if (this.scrollDistance <= -distanceToShow && this.header.navPanelVisibility === 'hidden') {
          this.show();
        }

        if (this.scrollDistance >= distanceToHide && this.header.navPanelVisibility === 'shown') {
          this.hide();
        }
      } else if (this.stickyMode === 'alwaysOnTop' && this.header.navPanelVisibility === 'hidden') {
        this.show();
      }
    }
  }

  onMediaChange(media) {
    if (media.matches) {
      const takeUntil$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(this.media.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.filter)(x => !x.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.first)()), this.destroy$);
      this.header.departmentsArea$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(takeUntil$)).subscribe(() => setTimeout(() => this.calcBreakpoints(), 0));
      this.zone.runOutsideAngular(() => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.fromEvent)(window, 'scroll', {
          passive: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(takeUntil$)).subscribe(() => this.onScroll());
      });
      this.calcBreakpoints();
    } else {
      this.makeStatic();
    }
  }

  calcBreakpoints() {
    if (this.header.departmentsArea) {
      const rect = this.header.departmentsArea.getBoundingClientRect();
      this.stuckFrom = rect.top + rect.height + window.screenTop + 50 + window.pageYOffset;
      this.staticFrom = this.stuckFrom;
    } else {
      const elementRect = this.element.getBoundingClientRect();
      this.staticFrom = elementRect.top + window.pageYOffset;
      this.stuckFrom = elementRect.top + elementRect.height + window.pageYOffset;
    }
  }

  makeStatic() {
    this.element.classList.remove('nav-panel--stuck');
    this.element.classList.remove('nav-panel--shown');
    this.element.style.transition = 'none';
    this.element.getBoundingClientRect(); // force reflow

    this.element.style.transition = '';
    this.zone.run(() => this.header.navPanelPosition = 'static');
    this.zone.run(() => this.header.navPanelVisibility = 'hidden');
  }

  makeSticky() {
    this.element.classList.add('nav-panel--stuck');
    this.element.style.transition = 'none';
    this.element.getBoundingClientRect(); // force reflow

    this.element.style.transition = '';
    this.zone.run(() => this.header.navPanelPosition = 'sticky');
  }

  show() {
    this.element.classList.add('nav-panel--shown');
    this.zone.run(() => this.header.navPanelVisibility = 'shown');
  }

  hide() {
    this.element.classList.remove('nav-panel--shown');
    this.zone.run(() => this.header.navPanelVisibility = 'hidden');
  }

  static {
    this.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_1__.OffcanvasCartService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__.WishlistService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_5__.HeaderService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-header-nav"]],
      viewQuery: function NavComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
        }

        if (rf & 2) {
          let _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.elementRef = _t.first);
        }
      },
      inputs: {
        departments: "departments",
        logo: "logo",
        search: "search",
        stickyMode: "stickyMode"
      },
      decls: 21,
      vars: 15,
      consts: [[1, "test-border"], [1, "test-name-Component"], [1, "nav-panel", 3, "ngClass"], ["element", ""], [1, "nav-panel__container", "container"], [1, "nav-panel__row"], ["class", "nav-panel__logo", 4, "ngIf"], ["class", "nav-panel__departments", 4, "ngIf"], [1, "nav-panel__nav-links", "nav-links"], [1, "nav-panel__indicators"], ["icon", "search-20", "iconWhenOpen", "cross-20", "trigger", "click", 3, "stateChanges", 4, "ngIf"], ["icon", "heart-20", 3, "link", "counter"], ["link", "./shop/cart", "icon", "cart-20", "trigger", "click", 3, "counter", "buttonClick"], ["cartIndicator", "appIndicator"], [3, "closeMenu", 4, "ngIf"], ["link", "./account", "icon", "person-20", "trigger", "click"], ["accountIndicator", "appIndicator"], [3, "closeMenu"], [1, "nav-panel__logo"], [3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "120px", "height", "20px"], ["d", "M118.5,20h-1.1c-0.6,0-1.2-0.4-1.4-1l-1.5-4h-6.1l-1.5,4c-0.2,0.6-0.8,1-1.4,1h-1.1c-1,0-1.8-1-1.4-2l1.1-3\n                                 l1.5-4l3.6-10c0.2-0.6,0.8-1,1.4-1h1.6c0.6,0,1.2,0.4,1.4,1l3.6,10l1.5,4l1.1,3C120.3,19,119.5,20,118.5,20z M111.5,6.6l-1.6,4.4\n                                 h3.2L111.5,6.6z M99.5,20h-1.4c-0.4,0-0.7-0.2-0.9-0.5L94,14l-2,3.5v1c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\n                                 C88,0.7,88.7,0,89.5,0h1C91.3,0,92,0.7,92,1.5v8L94,6l3.2-5.5C97.4,0.2,97.7,0,98.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3L96.3,10l4.5,7.8\n                                 C101.4,18.8,100.7,20,99.5,20z M80.3,11.8L80,12.3v6.2c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-6.2l-0.3-0.5l-5.5-9.5\n                                 c-0.6-1,0.2-2.3,1.3-2.3h1.4c0.4,0,0.7,0.2,0.9,0.5L76,4.3l2,3.5l2-3.5l2.2-3.8C82.4,0.2,82.7,0,83.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3\n                                 L80.3,11.8z M60,20c-5.5,0-10-4.5-10-10S54.5,0,60,0s10,4.5,10,10S65.5,20,60,20z M60,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6\n                                 S63.3,4,60,4z M47.8,17.8c0.6,1-0.2,2.3-1.3,2.3h-2L41,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\n                                 C33,0.7,33.7,0,34.5,0H41c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L47.8,17.8z M42,4.2C41.7,4.1,41.3,4,41,4h-3\n                                 c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.9-0.5C43.6,8.8,44,7.9,44,7C44,5.7,43.2,4.6,42,4.2z\n                                  M29.5,4H25v14.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5V4h-4.5C15.7,4,15,3.3,15,2.5v-1C15,0.7,15.7,0,16.5,0h13\n                                 C30.3,0,31,0.7,31,1.5v1C31,3.3,30.3,4,29.5,4z M6.5,20c-2.8,0-5.5-1.7-6.4-4c-0.4-1,0.3-2,1.3-2h1c0.5,0,0.9,0.3,1.2,0.7\n                                 c0.2,0.3,0.4,0.6,0.8,0.8C4.9,15.8,5.8,16,6.5,16c1.5,0,2.8-0.9,2.8-2c0-0.7-0.5-1.3-1.2-1.6C7.4,12,7,11,7.4,10.3l0.4-0.9\n                                 c0.4-0.7,1.2-1,1.8-0.6c0.6,0.3,1.2,0.7,1.6,1.2c1,1.1,1.7,2.5,1.7,4C13,17.3,10.1,20,6.5,20z M11.6,6h-1c-0.5,0-0.9-0.3-1.2-0.7\n                                 C9.2,4.9,8.9,4.7,8.6,4.5C8.1,4.2,7.2,4,6.5,4C5,4,3.7,4.9,3.7,6c0,0.7,0.5,1.3,1.2,1.6C5.6,8,6,9,5.6,9.7l-0.4,0.9\n                                 c-0.4,0.7-1.2,1-1.8,0.6c-0.6-0.3-1.2-0.7-1.6-1.2C0.6,8.9,0,7.5,0,6c0-3.3,2.9-6,6.5-6c2.8,0,5.5,1.7,6.4,4C13.3,4.9,12.6,6,11.6,6\n                                 z"], [1, "nav-panel__departments"], ["icon", "search-20", "iconWhenOpen", "cross-20", "trigger", "click", 3, "stateChanges"], ["searchIndicator", "appIndicator"], ["location", "indicator", 3, "escape"], ["search", "search"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 2, 3)(5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, NavComponent_div_7_Template, 4, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, NavComponent_div_8_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "app-header-links", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, NavComponent_app_indicator_11_Template, 4, 0, "app-indicator", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "app-indicator", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "app-indicator", 12, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("buttonClick", function NavComponent_Template_app_indicator_buttonClick_14_listener() {
            return ctx.onCartClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, NavComponent_app_header_dropcart_17_Template, 1, 0, "app-header-dropcart", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "app-indicator", 15, 16)(20, "app-account-menu", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeMenu", function NavComponent_Template_app_account_menu_closeMenu_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);

            const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](19);

            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r6.close(true));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](13, _c1, ctx.stickyMode));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.logo);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.departments);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.search);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("link", ctx.root.wishlist())("counter", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 9, ctx.wishlist.count$) || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("counter", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 11, ctx.cart.quantity$) || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.dropcartType === "dropdown");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLinkWithHref, _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_6__.SearchComponent, _account_menu_account_menu_component__WEBPACK_IMPORTED_MODULE_7__.AccountMenuComponent, _departments_departments_component__WEBPACK_IMPORTED_MODULE_8__.DepartmentsComponent, _dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_9__.DropcartComponent, _indicator_indicator_component__WEBPACK_IMPORTED_MODULE_10__.IndicatorComponent, _links_links_component__WEBPACK_IMPORTED_MODULE_11__.LinksComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"]
    });
  }
}

/***/ }),

/***/ 1659:
/*!**********************************************************************!*\
  !*** ./src/app/modules/header/components/topbar/topbar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarComponent": () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/currency.service */ 8910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/dropdown.directive */ 8971);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ 9513);







function TopbarComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function TopbarComponent_li_41_Template_li_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r6.classList.add("menu__item--hover")); })("mouseleave", function TopbarComponent_li_41_Template_li_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r6.classList.remove("menu__item--hover")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_li_41_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const currency_r5 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32); ctx_r10.setCurrency(currency_r5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r1.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const currency_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", currency_r5.name, " ");
} }
function TopbarComponent_li_53_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function TopbarComponent_li_53_Template_li_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r12.classList.add("menu__item--hover")); })("mouseleave", function TopbarComponent_li_53_Template_li_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r12.classList.remove("menu__item--hover")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_li_53_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](44); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r3.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "assets/images/languages/" + language_r11.image + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("srcset", "assets/images/languages/" + language_r11.image + ".png 1x," + "assets/images/languages/" + language_r11.image + "@2x.png 2x");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", language_r11.name, " ");
} }
const _c0 = function () { return { label: "Dashboard", url: "/account/dashboard" }; };
const _c1 = function () { return { label: "Edit Profile", url: "/account/profile" }; };
const _c2 = function () { return { label: "Order History", url: "/account/orders" }; };
const _c3 = function () { return { label: "Addresses", url: "/account/addresses" }; };
const _c4 = function () { return { label: "Password", url: "/account/password" }; };
const _c5 = function () { return { label: "Logout", url: "/account/login" }; };
const _c6 = function (a0, a1, a2, a3, a4, a5) { return [a0, a1, a2, a3, a4, a5]; };
class TopbarComponent {
    constructor(currencyService) {
        this.currencyService = currencyService;
        this.languages = [
            { name: 'English', image: 'language-1' },
            { name: 'French', image: 'language-2' },
            { name: 'German', image: 'language-3' },
            { name: 'Russian', image: 'language-4' },
            { name: 'Italian', image: 'language-5' }
        ];
        this.currencies = [
            { name: '€ Euro', url: '', code: 'EUR', symbol: '€' },
            { name: '£ Pound Sterling', url: '', code: 'GBP', symbol: '£' },
            { name: '$ US Dollar', url: '', code: 'USD', symbol: '$' },
            { name: '₽ Russian Ruble', url: '', code: 'RUB', symbol: '₽' }
        ];
    }
    setCurrency(currency) {
        this.currencyService.options = {
            code: currency.code,
            display: currency.symbol,
        };
    }
    static { this.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_currency_service__WEBPACK_IMPORTED_MODULE_0__.CurrencyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-header-topbar"]], decls: 54, vars: 18, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "site-header__topbar", "topbar"], [1, "topbar__container", "container"], [1, "topbar__row"], [1, "topbar__item", "topbar__item--link"], ["routerLink", "/site/about-us", 1, "topbar-link"], ["routerLink", "/site/contact-us", 1, "topbar-link"], ["routerLink", "", 1, "topbar-link"], ["routerLink", "/shop/track-order", 1, "topbar-link"], ["routerLink", "/blog", 1, "topbar-link"], [1, "topbar__spring"], [1, "topbar__item"], ["appDropdown", "topbar-dropdown--opened", 1, "topbar-dropdown"], ["accountDropdown", "appDropdown"], ["type", "button", 1, "topbar-dropdown__btn", 3, "click"], ["name", "arrow-rounded-down-7x5", "size", "7x5"], [1, "topbar-dropdown__body"], ["layout", "topbar", 3, "items", "itemClick"], ["currencyDropdown", "appDropdown"], [1, "topbar__item-value"], [1, "menu", "menu--layout--topbar"], [1, "menu__list"], ["class", "menu__item", 3, "mouseover", "mouseleave", 4, "ngFor", "ngForOf"], ["languageDropdown", "appDropdown"], [1, "menu", "menu--layout--topbar", "menu--with-icons"], [1, "menu__item", 3, "mouseover", "mouseleave"], ["menuItem", ""], ["type", "button", 1, "menu__item-link", 3, "click"], [1, "menu__item-icon"], ["alt", "", 3, "src", "srcset"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
            const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "About Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Contacts");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5)(13, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Store Location");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 5)(16, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Track Order");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 5)(19, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Blog");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 12)(23, "div", 13, 14)(25, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](24); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle()); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " My Account ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "app-icon", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 17)(29, "app-header-menu", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("itemClick", function TopbarComponent_Template_app_header_menu_itemClick_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](24); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.close()); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 12)(31, "div", 13, 19)(33, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r1.toggle()); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Currency: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "app-icon", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 17)(39, "div", 21)(40, "ul", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, TopbarComponent_li_41_Template, 4, 1, "li", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 12)(43, "div", 13, 24)(45, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](44); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r3.toggle()); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " Language: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "EN");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "app-icon", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 17)(51, "div", 25)(52, "ul", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, TopbarComponent_li_53_Template, 6, 3, "li", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction6"](11, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c5)));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.currencyService.options.code);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.currencies);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.languages);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _shared_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownDirective, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3BiYXIuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 4214:
/*!****************************************************!*\
  !*** ./src/app/modules/header/header.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/store.service */ 5819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/search/search.component */ 9727);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav/nav.component */ 4565);
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/topbar/topbar.component */ 1659);







function HeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-search", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 13)(8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Customer Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.store.primaryPhone);
} }
class HeaderComponent {
    constructor(store) {
        this.store = store;
        this.layout = 'classic';
    }
    static { this.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_store_service__WEBPACK_IMPORTED_MODULE_0__.StoreService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { layout: "layout" }, decls: 8, vars: 5, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "site-header"], ["class", "site-header__middle container", 4, "ngIf"], [1, "site-header__nav-panel"], ["stickyMode", "pullToShow", 3, "departments", "logo", "search"], [1, "site-header__middle", "container"], [1, "site-header__logo"], ["routerLink", "/"], ["xmlns", "http://www.w3.org/2000/svg", "width", "196px", "height", "26px"], ["d", "M194.797,18 L184,18 C184,18.552 183.552,19 183,19 L182,19 C181.448,19 181,18.552 181,18 L181,16 L178.377,16 C177.708,16 177.119,15.556 176.935,14.912 L173.246,2 L168,2 L168,4 L168.500,4 C169.328,4 170,4.672 170,5.500 L170,24.500 C170,25.328 169.328,26 168.500,26 L165.500,26 C164.672,26 164,25.328 164,24.500 L164,5.500 C164,4.672 164.672,4 165.500,4 L166,4 L166,1.500 C166,0.672 166.672,0 167.500,0 L173.622,0 C174.292,0 174.881,0.444 175.065,1.088 L178.754,14 L181,14 L181,13 C181,12.448 181.448,12 182,12 L183,12 C183.552,12 184,12.448 184,13 L194.797,13 C195.461,13 196,13.539 196,14.203 L196,16.797 C196,17.461 195.461,18 194.797,18 ZM156.783,26 L154.483,26 C153.767,26 153.129,25.552 152.884,24.878 L150.437,18.135 C150.407,18.054 150.331,18 150.245,18 L142.768,18 C142.682,18 142.606,18.054 142.576,18.135 L140.129,24.878 C139.884,25.552 139.245,26 138.530,26 L136.230,26 C135.395,26 134.815,25.169 135.100,24.383 L143.445,1.122 C143.690,0.448 144.328,0 145.044,0 L147.969,0 C148.685,0 149.323,0.448 149.568,1.122 L157.913,24.383 C158.198,25.169 157.618,26 156.783,26 ZM148.472,12.725 L146.698,7.848 C146.633,7.668 146.380,7.668 146.315,7.848 L144.541,12.725 C144.492,12.859 144.591,13 144.733,13 L148.280,13 C148.422,13 148.521,12.859 148.472,12.725 ZM130.493,26 L128.090,26 C127.555,26 127.060,25.714 126.792,25.250 L122.610,18 L120.003,22.520 L120.003,24.500 C120.003,25.328 119.333,26 118.505,26 L116.507,26 C115.680,26 115.009,25.328 115.009,24.500 L115.009,1.500 C115.009,0.672 115.680,0 116.507,0 L118.505,0 C119.333,0 120.003,0.672 120.003,1.500 L120.003,12.520 L126.792,0.750 C127.060,0.286 127.555,0 128.090,0 L130.493,0 C131.646,0 132.367,1.250 131.791,2.250 L125.487,13 L131.791,23.750 C132.367,24.750 131.646,26 130.493,26 ZM103.987,15.775 L103.987,24.500 C103.987,25.328 103.315,26 102.486,26 L100.485,26 C99.656,26 98.984,25.328 98.984,24.500 L98.984,15.775 L98.594,15.100 L91.180,2.250 C90.610,1.250 91.330,0 92.481,0 L94.792,0 C95.322,0 95.823,0.290 96.093,0.750 L101.486,10.090 L106.879,0.750 C107.149,0.290 107.649,0 108.179,0 L110.491,0 C111.641,0 112.362,1.250 111.791,2.250 L103.987,15.775 ZM79,26 C71.821,26 66,20.179 66,13 C66,5.820 71.821,-0.001 79,-0.001 C86.180,-0.001 92.001,5.820 92.001,13 C92.001,20.179 86.180,26 79,26 ZM79,5 C74.582,5 71,8.582 71,13 C71,17.418 74.582,21 79,21 C83.418,21 87,17.418 87,13 C87,8.582 83.418,5 79,5 ZM62.793,23.750 C63.362,24.750 62.643,26 61.494,26 L59.186,26 C58.656,26 58.157,25.710 57.887,25.250 L53.711,18 L49.005,18 L49.005,24.500 C49.005,25.330 48.335,26 47.506,26 L45.508,26 C44.679,26 44.009,25.330 44.009,24.500 L44.009,1.500 C44.009,0.670 44.679,0 45.508,0 L54,0 C58.966,0 62.992,4.030 62.992,9 C62.992,12.240 61.274,15.090 58.706,16.670 L62.793,23.750 ZM54,5 L50.004,5 C49.454,5 49.005,5.450 49.005,6 L49.005,12 C49.005,12.550 49.454,13 50.004,13 L54,13 C56.208,13 57.997,11.210 57.997,9 C57.997,6.790 56.208,5 54,5 ZM39.500,5 L33,5 L33,24.500 C33,25.328 32.328,26 31.500,26 L29.500,26 C28.672,26 28,25.328 28,24.500 L28,5 L21.500,5 C20.672,5 20,4.328 20,3.500 L20,1.500 C20,0.672 20.672,0 21.500,0 L39.500,0 C40.328,0 41,0.672 41,1.500 L41,3.500 C41,4.328 40.328,5 39.500,5 ZM16.487,8 L14.181,8 C13.565,8 13.040,7.611 12.790,7.048 C12.261,5.856 10.765,5 9,5 C6.793,5 5.005,6.340 5.005,8 C5.005,8.940 5.575,9.780 6.483,10.320 C6.706,10.455 6.948,10.574 7.206,10.673 C8.059,11 8.412,12.020 7.955,12.812 L6.948,14.558 C6.573,15.208 5.768,15.499 5.080,15.201 C3.872,14.679 2.815,13.924 1.989,13 C0.751,11.630 0.012,9.890 0.012,8 C0.012,3.580 4.037,0 9,0 C13.254,0 17.017,2.629 17.950,6.163 C18.196,7.095 17.450,8 16.487,8 ZM1.513,18 L3.820,18 C4.435,18 4.960,18.389 5.210,18.952 C5.739,20.144 7.236,21 9,21 C11.207,21 12.995,19.660 12.995,18 C12.995,17.060 12.426,16.220 11.517,15.680 C11.294,15.544 11.052,15.426 10.794,15.327 C9.941,14.999 9.588,13.980 10.045,13.188 L11.053,11.442 C11.427,10.792 12.233,10.501 12.920,10.799 C14.128,11.320 15.185,12.075 16.011,13 C17.249,14.370 17.988,16.110 17.988,18 C17.988,22.420 13.964,26 9,26 C4.747,26 0.983,23.371 0.050,19.837 C-0.196,18.905 0.550,18 1.513,18 Z"], [1, "site-header__search"], ["location", "header"], [1, "site-header__phone"], [1, "site-header__phone-title"], [1, "site-header__phone-number"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-header-topbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 12, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-header-nav", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.layout === "classic");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("departments", ctx.layout === "classic")("logo", ctx.layout === "compact")("search", ctx.layout === "compact");
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__.TopbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 5130:
/*!*************************************************!*\
  !*** ./src/app/modules/header/header.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _components_account_menu_account_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/account-menu/account-menu.component */ 7396);
/* harmony import */ var _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/departments/departments.component */ 8346);
/* harmony import */ var _components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dropcart/dropcart.component */ 7481);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ 4214);
/* harmony import */ var _components_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/indicator/indicator.component */ 2856);
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/links/links.component */ 1806);
/* harmony import */ var _components_megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/megamenu/megamenu.component */ 7630);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu/menu.component */ 9513);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nav/nav.component */ 4565);
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/topbar/topbar.component */ 1659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
// modules (angular)


// modules

// components











class HeaderModule {
    static { this.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: HeaderModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [
        // components
        _components_account_menu_account_menu_component__WEBPACK_IMPORTED_MODULE_1__.AccountMenuComponent,
        _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_2__.DepartmentsComponent,
        _components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_3__.DropcartComponent,
        _header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _components_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_5__.IndicatorComponent,
        _components_links_links_component__WEBPACK_IMPORTED_MODULE_6__.LinksComponent,
        _components_megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_7__.MegamenuComponent,
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__.MenuComponent,
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__.NavComponent,
        _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_10__.TopbarComponent], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        // modules
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [
        // components
        _header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_3__.DropcartComponent] }); })();


/***/ }),

/***/ 1406:
/*!************************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-header/mobile-header.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileHeaderComponent": () => (/* binding */ MobileHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromMatchMedia */ 3046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/mobile-menu.service */ 4785);
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ 165);
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ 5237);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/directives/dropdown.directive */ 8971);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/search/search.component */ 9727);















const _c0 = ["element"];
const _c1 = ["panelElement"];

const _c2 = function (a0) {
  return {
    "mobile-header--sticky": a0
  };
};

class MobileHeaderComponent {
  constructor(platformId, menu, wishlist, cart, zone, root) {
    this.platformId = platformId;
    this.menu = menu;
    this.wishlist = wishlist;
    this.cart = cart;
    this.zone = zone;
    this.root = root;
    this.stickyMode = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.position = 'static';
    this.visibility = 'hidden';
    this.stuckFrom = null;
    this.staticFrom = null;
    this.scrollPosition = 0;
    this.scrollDistance = 0;
  }

  get element() {
    return this.elementRef?.nativeElement;
  }

  get panelElement() {
    return this.panelElementRef?.nativeElement;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit() {
    if (this.stickyMode && (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(this.platformId)) {
      this.media = (0,_shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_0__.fromMatchMedia)('(max-width: 991px)', false).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)({
        bufferSize: 1,
        refCount: true
      }));
      this.media.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(media => this.onMediaChange(media));
    }
  }

  onScroll() {
    const scrollCurrentPosition = window.pageYOffset;
    const scrollDelta = scrollCurrentPosition - this.scrollPosition; // Resets the distance if the scroll changes direction.

    if (scrollDelta < 0 !== this.scrollDistance < 0) {
      this.scrollDistance = 0;
    }

    const distanceToShow = 10; // in pixels

    const distanceToHide = 25; // in pixels

    this.scrollPosition = scrollCurrentPosition;
    this.scrollDistance += scrollDelta;

    if (this.stuckFrom && this.position === 'static' && scrollCurrentPosition >= this.stuckFrom) {
      this.makeSticky();
    }

    if (this.staticFrom && this.position === 'sticky' && scrollCurrentPosition <= this.staticFrom) {
      this.makeStatic();
    }

    if (this.position === 'sticky') {
      if (this.scrollDistance <= -distanceToShow && this.visibility === 'hidden') {
        this.show();
      }

      if (this.scrollDistance >= distanceToHide && this.visibility === 'shown') {
        this.hide();
      }
    }
  }

  onMediaChange(media) {
    if (media.matches) {
      if (this.stickyMode === 'alwaysOnTop') {
        this.element.classList.add('mobile-header--stuck');
        this.element.classList.add('mobile-header--shown');
        this.panelElement.style.transition = 'none';
        this.panelElement.getBoundingClientRect(); // force reflow

        this.panelElement.style.transition = '';
        this.zone.run(() => this.position = 'sticky');
        this.zone.run(() => this.visibility = 'shown');
      } else {
        const takeUntil$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(this.media.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(x => !x.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.first)()), this.destroy$);
        this.zone.runOutsideAngular(() => {
          (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(window, 'scroll', {
            passive: true
          }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(takeUntil$)).subscribe(() => this.onScroll());
        });
        this.calcBreakpoints();
        this.onScroll();
      }
    } else {
      this.makeStatic();
    }
  }

  calcBreakpoints() {
    const elementRect = this.element.getBoundingClientRect();
    this.staticFrom = elementRect.top + window.pageYOffset;
    this.stuckFrom = elementRect.top + elementRect.height + window.pageYOffset + 100;
  }

  makeStatic() {
    this.element.classList.remove('mobile-header--stuck');
    this.element.classList.remove('mobile-header--shown');
    this.panelElement.style.transition = 'none';
    this.panelElement.getBoundingClientRect(); // force reflow

    this.panelElement.style.transition = '';
    this.zone.run(() => this.position = 'static');
    this.zone.run(() => this.visibility = 'hidden');
  }

  makeSticky() {
    this.element.classList.add('mobile-header--stuck');
    this.panelElement.style.transition = 'none';
    this.panelElement.getBoundingClientRect(); // force reflow

    this.panelElement.style.transition = '';
    this.zone.run(() => this.position = 'sticky');
  }

  show() {
    this.element.classList.add('mobile-header--shown');
    this.zone.run(() => this.visibility = 'shown');
  }

  hide() {
    this.element.classList.remove('mobile-header--shown');
    this.zone.run(() => this.visibility = 'hidden');
  }

  static {
    this.ɵfac = function MobileHeaderComponent_Factory(t) {
      return new (t || MobileHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_1__.MobileMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__.WishlistService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__.RootService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: MobileHeaderComponent,
      selectors: [["app-mobile-header"]],
      viewQuery: function MobileHeaderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 5);
        }

        if (rf & 2) {
          let _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.elementRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.panelElementRef = _t.first);
        }
      },
      inputs: {
        stickyMode: "stickyMode"
      },
      decls: 33,
      vars: 12,
      consts: [[1, "mobile-header", 3, "ngClass"], ["element", ""], [1, "mobile-header__panel"], ["panelElement", ""], [1, "container"], [1, "mobile-header__body"], [1, "mobile-header__menu-button", 3, "click"], ["name", "menu-18x14", "size", "18x14"], [1, "mobile-header__logo", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "120px", "height", "20px"], ["d", "M118.5,20h-1.1c-0.6,0-1.2-0.4-1.4-1l-1.5-4h-6.1l-1.5,4c-0.2,0.6-0.8,1-1.4,1h-1.1c-1,0-1.8-1-1.4-2l1.1-3\n                                 l1.5-4l3.6-10c0.2-0.6,0.8-1,1.4-1h1.6c0.6,0,1.2,0.4,1.4,1l3.6,10l1.5,4l1.1,3C120.3,19,119.5,20,118.5,20z M111.5,6.6l-1.6,4.4\n                                 h3.2L111.5,6.6z M99.5,20h-1.4c-0.4,0-0.7-0.2-0.9-0.5L94,14l-2,3.5v1c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\n                                 C88,0.7,88.7,0,89.5,0h1C91.3,0,92,0.7,92,1.5v8L94,6l3.2-5.5C97.4,0.2,97.7,0,98.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3L96.3,10l4.5,7.8\n                                 C101.4,18.8,100.7,20,99.5,20z M80.3,11.8L80,12.3v6.2c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-6.2l-0.3-0.5l-5.5-9.5\n                                 c-0.6-1,0.2-2.3,1.3-2.3h1.4c0.4,0,0.7,0.2,0.9,0.5L76,4.3l2,3.5l2-3.5l2.2-3.8C82.4,0.2,82.7,0,83.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3\n                                 L80.3,11.8z M60,20c-5.5,0-10-4.5-10-10S54.5,0,60,0s10,4.5,10,10S65.5,20,60,20z M60,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6\n                                 S63.3,4,60,4z M47.8,17.8c0.6,1-0.2,2.3-1.3,2.3h-2L41,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\n                                 C33,0.7,33.7,0,34.5,0H41c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L47.8,17.8z M42,4.2C41.7,4.1,41.3,4,41,4h-3\n                                 c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.9-0.5C43.6,8.8,44,7.9,44,7C44,5.7,43.2,4.6,42,4.2z\n                                  M29.5,4H25v14.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5V4h-4.5C15.7,4,15,3.3,15,2.5v-1C15,0.7,15.7,0,16.5,0h13\n                                 C30.3,0,31,0.7,31,1.5v1C31,3.3,30.3,4,29.5,4z M6.5,20c-2.8,0-5.5-1.7-6.4-4c-0.4-1,0.3-2,1.3-2h1c0.5,0,0.9,0.3,1.2,0.7\n                                 c0.2,0.3,0.4,0.6,0.8,0.8C4.9,15.8,5.8,16,6.5,16c1.5,0,2.8-0.9,2.8-2c0-0.7-0.5-1.3-1.2-1.6C7.4,12,7,11,7.4,10.3l0.4-0.9\n                                 c0.4-0.7,1.2-1,1.8-0.6c0.6,0.3,1.2,0.7,1.6,1.2c1,1.1,1.7,2.5,1.7,4C13,17.3,10.1,20,6.5,20z M11.6,6h-1c-0.5,0-0.9-0.3-1.2-0.7\n                                 C9.2,4.9,8.9,4.7,8.6,4.5C8.1,4.2,7.2,4,6.5,4C5,4,3.7,4.9,3.7,6c0,0.7,0.5,1.3,1.2,1.6C5.6,8,6,9,5.6,9.7l-0.4,0.9\n                                 c-0.4,0.7-1.2,1-1.8,0.6c-0.6-0.3-1.2-0.7-1.6-1.2C0.6,8.9,0,7.5,0,6c0-3.3,2.9-6,6.5-6c2.8,0,5.5,1.7,6.4,4C13.3,4.9,12.6,6,11.6,6\n                                 z"], ["appDropdown", "mobile-header__search--open", "location", "mobile-header", 1, "mobile-header__search", 3, "closeButtonClick"], ["search", "search", "searchDropdown", "appDropdown"], [1, "mobile-header__indicators"], [1, "indicator", "indicator--mobile-search", "indicator--mobile", "d-md-none"], [1, "indicator__button", 3, "click"], [1, "indicator__area"], ["name", "search-20", "size", "20"], [1, "indicator", "indicator--mobile", "d-sm-flex", "d-none"], [1, "indicator__button", 3, "routerLink"], ["name", "heart-20", "size", "20"], [1, "indicator__value"], [1, "indicator", "indicator--mobile"], ["name", "cart-20", "size", "20"]],
      template: function MobileHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2, 3)(4, "div", 4)(5, "div", 5)(6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_button_click_6_listener() {
            return ctx.menu.open();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "app-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "app-search", 11, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeButtonClick", function MobileHeaderComponent_Template_app_search_closeButtonClick_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4);

            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](13);

            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](_r3.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 13)(15, "div", 14)(16, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4);

            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](13);

            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](12);

            _r3.open();

            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](_r2.inputElement.focus());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](18, "app-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 18)(20, "a", 19)(21, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](22, "app-icon", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](25, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "div", 22)(27, "a", 19)(28, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](29, "app-icon", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](32, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()()()();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](10, _c2, ctx.stickyMode));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", ctx.root.home());
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", ctx.root.wishlist());
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](25, 6, ctx.wishlist.count$));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", ctx.root.cart());
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](32, 8, ctx.cart.quantity$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLinkWithHref, _shared_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__.DropdownDirective, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_7__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
  }
}

/***/ }),

/***/ 8016:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-links/mobile-links.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileLinksComponent": () => (/* binding */ MobileLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/directives/collapse.directive */ 514);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);






function MobileLinksComponent_li_1_div_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MobileLinksComponent_li_1_div_1_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onItemClick(link_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", link_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](link_r1.label);
} }
function MobileLinksComponent_li_1_div_1_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MobileLinksComponent_li_1_div_1_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.onItemClick(link_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](link_r1.label);
} }
function MobileLinksComponent_li_1_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MobileLinksComponent_li_1_div_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r4.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return []; };
function MobileLinksComponent_li_1_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "app-mobile-links", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("itemClick", function MobileLinksComponent_li_1_div_1_div_6_Template_app_mobile_links_itemClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.itemClick.emit($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("links", link_r1.children || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0))("level", ctx_r8.level + 1);
} }
function MobileLinksComponent_li_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4, 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MobileLinksComponent_li_1_div_1_a_3_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MobileLinksComponent_li_1_div_1_a_4_Template, 2, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MobileLinksComponent_li_1_div_1_button_5_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MobileLinksComponent_li_1_div_1_div_6_Template, 2, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", link_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", link_r1.type !== "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", link_r1.children == null ? null : link_r1.children.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", link_r1.children == null ? null : link_r1.children.length);
} }
function MobileLinksComponent_li_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 17);
} }
function MobileLinksComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MobileLinksComponent_li_1_div_1_Template, 7, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MobileLinksComponent_li_1_div_2_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", link_r1.type === "button" || link_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", link_r1.type === "divider");
} }
class MobileLinksComponent {
    constructor() {
        this.links = [];
        this.level = 0;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
    static { this.ɵfac = function MobileLinksComponent_Factory(t) { return new (t || MobileLinksComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MobileLinksComponent, selectors: [["app-mobile-links"]], inputs: { links: "links", level: "level" }, outputs: { itemClick: "itemClick" }, decls: 2, vars: 4, consts: [["appCollapse", ""], [4, "ngFor", "ngForOf"], ["class", "mobile-links__item", "appCollapseItem", "mobile-links__item--open", 4, "ngIf"], ["class", "mobile-links__divider", 4, "ngIf"], ["appCollapseItem", "mobile-links__item--open", 1, "mobile-links__item"], ["item", "appCollapseItem"], [1, "mobile-links__item-title"], ["class", "mobile-links__item-link", 3, "routerLink", "click", 4, "ngIf"], ["class", "mobile-links__item-link", 3, "click", 4, "ngIf"], ["class", "mobile-links__item-toggle", "type", "button", 3, "click", 4, "ngIf"], ["class", "mobile-links__item-sub-links", "appCollapseContent", "", 4, "ngIf"], [1, "mobile-links__item-link", 3, "routerLink", "click"], [1, "mobile-links__item-link", 3, "click"], ["type", "button", 1, "mobile-links__item-toggle", 3, "click"], ["name", "arrow-rounded-down-12x7", "size", "12x7", 1, "mobile-links__item-arrow"], ["appCollapseContent", "", 1, "mobile-links__item-sub-links"], [3, "links", "level", "itemClick"], [1, "mobile-links__divider"]], template: function MobileLinksComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MobileLinksComponent_li_1_Template, 3, 2, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mobile-links mobile-links--level--", ctx.level, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.links);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_0__.CollapseContentDirective, _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_0__.CollapseDirective, _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_0__.CollapseItemDirective, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, MobileLinksComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtbGlua3MuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 7192:
/*!********************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileMenuComponent": () => (/* binding */ MobileMenuComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _data_mobile_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/mobile-menu */ 9321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/mobile-menu.service */ 4785);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mobile-links/mobile-links.component */ 8016);








const _c0 = function (a0) { return { "mobilemenu--open": a0 }; };
class MobileMenuComponent {
    constructor(mobilemenu) {
        this.mobilemenu = mobilemenu;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.isOpen = false;
        this.links = _data_mobile_menu__WEBPACK_IMPORTED_MODULE_0__.mobileMenu;
    }
    ngOnInit() {
        this.mobilemenu.isOpen$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(isOpen => this.isOpen = isOpen);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onItemClick(event) {
        if (event.type === 'link') {
            this.mobilemenu.close();
        }
        // if (event.data && event.data.language) {
        //     console.log(event.data.language); // change language
        // }
    }
    static { this.ɵfac = function MobileMenuComponent_Factory(t) { return new (t || MobileMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_1__.MobileMenuService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MobileMenuComponent, selectors: [["app-mobile-menu"]], decls: 10, vars: 4, consts: [[1, "mobilemenu", 3, "ngClass"], [1, "mobilemenu__backdrop", 3, "click"], [1, "mobilemenu__body"], [1, "mobilemenu__header"], [1, "mobilemenu__title"], ["type", "button", 1, "mobilemenu__close", 3, "click"], ["name", "cross-20", "size", "20"], [1, "mobilemenu__content"], [3, "links", "itemClick"]], template: function MobileMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobileMenuComponent_Template_div_click_1_listener() { return ctx.mobilemenu.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobileMenuComponent_Template_button_click_6_listener() { return ctx.mobilemenu.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7)(9, "app-mobile-links", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("itemClick", function MobileMenuComponent_Template_app_mobile_links_itemClick_9_listener($event) { return ctx.onItemClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx.isOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("links", ctx.links);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_3__.MobileLinksComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 6238:
/*!*************************************************!*\
  !*** ./src/app/modules/mobile/mobile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileModule": () => (/* binding */ MobileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobile-header/mobile-header.component */ 1406);
/* harmony import */ var _components_mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-links/mobile-links.component */ 8016);
/* harmony import */ var _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mobile-menu/mobile-menu.component */ 7192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
// modules (angular)


// modules

// components




class MobileModule {
    static { this.ɵfac = function MobileModule_Factory(t) { return new (t || MobileModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MobileModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MobileModule, { declarations: [
        // components
        _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_1__.MobileHeaderComponent,
        _components_mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_2__.MobileLinksComponent,
        _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_3__.MobileMenuComponent], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        // modules
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [
        // components
        _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_1__.MobileHeaderComponent,
        _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_3__.MobileMenuComponent] }); })();


/***/ }),

/***/ 1281:
/*!*********************************************************************!*\
  !*** ./src/app/modules/shop/resolvers/currency-resolver.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyResolverService": () => (/* binding */ CurrencyResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_shared_interfaces_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/interfaces/currency */ 9889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api/shop.service */ 8781);
/* harmony import */ var src_app_shared_services_currency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/currency.service */ 8910);











class CurrencyResolverService {
    constructor(root, router, shop, currencyService) {
        this.root = root;
        this.router = router;
        this.shop = shop;
        this.currencyService = currencyService;
        this.isLog = true;
    }
    resolve() {
        const codeBase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currencyCodePrice;
        if (this.isLog) {
            console.log('- rsl -- CurrencyResolverService.resolve() codeBase -> %o', codeBase);
        }
        return this.shop.getRateValues(codeBase).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((rates) => {
            if (this.isLog) {
                //  console.log('- srv -- CurrencyResolverService.resolve() rates -> %O', rates);
            }
            this.currencyService.rates = rates;
            if (this.isLog) {
                console.log('- srv -- CurrencyResolverService.resolve() codeBase -> %o, -> rates -> %O', codeBase, this.currencyService.rates);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse && error.status === 404) {
                this.router.navigateByUrl(this.root.notFound()).then();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_8__.EMPTY;
        }));
    }
    static { this.ɵfac = function CurrencyResolverService_Factory(t) { return new (t || CurrencyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_currency_service__WEBPACK_IMPORTED_MODULE_4__.CurrencyService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CurrencyResolverService, factory: CurrencyResolverService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 3839:
/*!**************************************************************************!*\
  !*** ./src/app/modules/shop/resolvers/products-list-resolver.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListResolverService": () => (/* binding */ ProductsListResolverService),
/* harmony export */   "parseProductsListParams": () => (/* binding */ parseProductsListParams)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/api/shop.service */ 8781);








function parseProductsListParams(params) {
    const isLog = true;
    const options = {};
    if (isLog) {
        console.log('- fn -- parseProductsListParams() 1 params -> %o', params);
        console.log('- fn -- parseProductsListParams() 1 params.page -> %o', params.page);
        console.log('- fn -- parseProductsListParams() 1 params.limit -> %o', params.limit);
        console.log('- fn -- parseProductsListParams() 1 params.sort -> %o', params.sort);
    }
    if (params['page']) {
        options.page = parseFloat(params['page']);
    }
    if (params['limit']) {
        options.limit = parseFloat(params['limit']);
    }
    if (params['sort']) {
        options.sort = params['sort'];
    }
    for (const param of Object.keys(params)) {
        const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);
        if (!mr) {
            continue;
        }
        const filterSlug = mr[1];
        if (!options.filterValues) {
            options.filterValues = {};
        }
        options.filterValues[filterSlug] = params[param];
    }
    // mak
    // options.filters = [{'key': 'brandName.keyword', 'value': 'LEGRAND'}];
    if (isLog) {
        console.log('- fn -- parseProductsListParams() 2 options -> %o', options);
    }
    return options;
}
class ProductsListResolverService {
    /// shopService: any;
    constructor(root, router, shopService) {
        this.root = root;
        this.router = router;
        this.shopService = shopService;
        this.isLog = true;
    }
    resolve(route) {
        const categorySlug = route.params['categorySlug'] || route.data['categorySlug'] || null;
        //     return this.shop.getProductsList(categorySlug, parseProductsListParams(route.queryParams)).pipe(
        // mak ???
        return this.shopService.getCategoriesList().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(categories => {
            if (this.isLog) {
                console.log('- rsl -- ProductsListResolverService-getCategoriesList categories -> %o', categories);
            }
            return this.shopService.getPopularBrands().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(brands => {
                if (this.isLog) {
                    console.log('- rsl -- ProductsListResolverService-getPopularBrands brands -> %o', brands);
                }
                return this.shopService.getProductsList(categorySlug, parseProductsListParams(route.queryParams)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
                    if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse && error.status === 404) {
                        this.router.navigate([this.root.notFound()]).then();
                    }
                    return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
                }));
            }));
        }));
    }
    static { this.ɵfac = function ProductsListResolverService_Factory(t) { return new (t || ProductsListResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_1__.ShopService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ProductsListResolverService, factory: ProductsListResolverService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 4588:
/*!****************************************************************!*\
  !*** ./src/app/modules/shop/services/page-category.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageCategoryService": () => (/* binding */ PageCategoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9151);




/**
 * This service serves as a mediator between the PageCategoryComponent, ProductsViewComponent and WidgetFiltersComponent components.
 */
class PageCategoryService {
    constructor() {
        // isLoading
        this.isLoadingState = false;
        this.isLoadingSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.isLoadingState);
        this.isLoading$ = this.isLoadingSource.asObservable();
        // list
        this.listState = null;
        this.listSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.listState);
        this.list$ = this.listSource.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(x => x !== null));
        // options
        this.optionsState = {};
        this.optionsChange$ = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    get options() {
        return this.optionsState;
    }
    // getters for list
    get items() { return this.listState?.items || []; }
    get page() { return this.listState?.page || 1; }
    get limit() { return this.listState?.limit || 1; }
    get sort() { return this.listState?.sort || ''; }
    get total() { return this.listState?.total || 1; }
    get pages() { return this.listState?.pages || 1; }
    get from() { return this.listState?.from || 1; }
    get to() { return this.listState?.to || 1; }
    get filters() { return this.listState?.filters || []; }
    get filterValues() { return this.listState?.filterValues || {}; }
    // set functions
    setIsLoading(value) {
        this.isLoadingState = value;
        this.isLoadingSource.next(value);
    }
    setList(list) {
        this.listState = list;
        this.listSource.next(this.listState);
    }
    setOptions(options, emitEvent = true) {
        const diff = this.optionsDiff(options);
        if ('limit' in diff || 'sort' in diff || 'filterValues' in diff) {
            options.page = 1;
        }
        this.optionsState = options;
        if (emitEvent && Object.keys(diff).length > 0) {
            this.optionsChange$.emit(diff);
        }
    }
    updateOptions(options, emitEvent = true) {
        this.setOptions({ ...this.optionsState, ...options }, emitEvent);
    }
    /**
     * Returns only different options.
     */
    optionsDiff(curr) {
        const result = {};
        ['page', 'limit', 'sort'].forEach(key => {
            if (key in curr && this[key] !== curr[key]) {
                result[key] = curr[key];
            }
        });
        if ('filterValues' in curr) {
            const filterValues = curr.filterValues || {};
            if (Object.keys(filterValues).length !== Object.keys(this.filterValues).length) {
                result.filterValues = {};
            }
            Object.keys(filterValues).forEach(key => {
                if (this.filterValues[key] !== filterValues[key]) {
                    if (!result.filterValues) {
                        result.filterValues = {};
                    }
                    result.filterValues[key] = filterValues[key];
                }
            });
        }
        return result;
    }
    static { this.ɵfac = function PageCategoryService_Factory(t) { return new (t || PageCategoryService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PageCategoryService, factory: PageCategoryService.ɵfac }); }
}


/***/ }),

/***/ 4684:
/*!****************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetAboutusComponent": () => (/* binding */ WidgetAboutusComponent)
/* harmony export */ });
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/theme */ 7229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/social-links/social-links.component */ 4150);



class WidgetAboutusComponent {
    constructor() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_0__.theme;
    }
    static { this.ɵfac = function WidgetAboutusComponent_Factory(t) { return new (t || WidgetAboutusComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WidgetAboutusComponent, selectors: [["app-widget-aboutus"]], decls: 6, vars: 0, consts: [[1, "widget-aboutus", "widget"], [1, "widget__title"], [1, "widget-aboutus__text"], ["shape", "rounded", 1, "widget-aboutus__socials"]], template: function WidgetAboutusComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "About Blog");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-social-links", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } }, dependencies: [_shared_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_1__.SocialLinksComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtYWJvdXR1cy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 1963:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-categories/widget-categories.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetCategoriesComponent": () => (/* binding */ WidgetCategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/collapse.directive */ 514);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ 2775);






function WidgetCategoriesComponent_li_4_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WidgetCategoriesComponent_li_4_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WidgetCategoriesComponent_li_4_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sub_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r7.root.category(sub_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sub_r8.name);
} }
function WidgetCategoriesComponent_li_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WidgetCategoriesComponent_li_4_div_7_li_2_Template, 3, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", category_r1.children);
} }
function WidgetCategoriesComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 3, 4)(2, "div", 5)(3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WidgetCategoriesComponent_li_4_button_6_Template, 1, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, WidgetCategoriesComponent_li_4_div_7_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.root.category(category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", category_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", category_r1.children == null ? null : category_r1.children.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", category_r1.children == null ? null : category_r1.children.length);
} }
class WidgetCategoriesComponent {
    constructor(root) {
        this.root = root;
        this.location = 'blog';
        this.categories = [];
    }
    static { this.ɵfac = function WidgetCategoriesComponent_Factory(t) { return new (t || WidgetCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WidgetCategoriesComponent, selectors: [["app-widget-categories"]], inputs: { location: "location", categories: "categories" }, decls: 5, vars: 4, consts: [[1, "widget__title"], ["appCollapse", "", 1, "widget-categories__list"], ["class", "widget-categories__item", "appCollapseItem", "widget-categories__item--open", 4, "ngFor", "ngForOf"], ["appCollapseItem", "widget-categories__item--open", 1, "widget-categories__item"], ["collapse", "appCollapseItem"], [1, "widget-categories__row"], [3, "routerLink"], ["name", "arrow-rounded-right-6x9", "size", "6x9", 1, "widget-categories__arrow"], ["class", "widget-categories__expander", "type", "button", 3, "click", 4, "ngIf"], ["class", "widget-categories__subs", "appCollapseContent", "", 4, "ngIf"], ["type", "button", 1, "widget-categories__expander", 3, "click"], ["appCollapseContent", "", 1, "widget-categories__subs"], [4, "ngFor", "ngForOf"]], template: function WidgetCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WidgetCategoriesComponent_li_4_Template, 8, 4, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("widget-categories widget-categories--location--", ctx.location, " widget");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_1__.CollapseContentDirective, _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_1__.CollapseDirective, _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_1__.CollapseItemDirective, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 497:
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-comments/widget-comments.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetCommentsComponent": () => (/* binding */ WidgetCommentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function WidgetCommentsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8)(7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", comment_r1.postTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.postTitle);
} }
class WidgetCommentsComponent {
    constructor() {
        this.comments = [];
    }
    static { this.ɵfac = function WidgetCommentsComponent_Factory(t) { return new (t || WidgetCommentsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetCommentsComponent, selectors: [["app-widget-comments"]], inputs: { comments: "comments" }, decls: 5, vars: 1, consts: [[1, "widget-comments", "widget"], [1, "widget__title"], [1, "widget-comments__list"], ["class", "widget-comments__item", 4, "ngFor", "ngForOf"], [1, "widget-comments__item"], [1, "widget-comments__author"], ["routerLink", "./"], [1, "widget-comments__content"], [1, "widget-comments__meta"], [1, "widget-comments__date"], [1, "widget-comments__name"], ["routerLink", "./", 3, "title"]], template: function WidgetCommentsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Latest Comments");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WidgetCommentsComponent_li_4_Template, 13, 5, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtY29tbWVudHMuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 5824:
/*!****************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-filters/widget-filters.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetFiltersComponent": () => (/* binding */ WidgetFiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6276);
/* harmony import */ var src_app_shared_api_filter_option_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/api/filter-option.service */ 7820);
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/direction.service */ 7341);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/root.service */ 1372);
/* harmony import */ var _shop_services_page_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shop/services/page-category.service */ 4588);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 2498);
/* harmony import */ var _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/collapse.directive */ 514);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _shared_pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/color-type.pipe */ 7492);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pipes/currency-format.pipe */ 133);


















function WidgetFiltersComponent_div_6_div_1_div_8_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "All Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r9.root.shop());
} }
function WidgetFiltersComponent_div_6_div_1_div_8_li_3_app_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-icon", 26);
} }
function WidgetFiltersComponent_div_6_div_1_div_8_li_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r11.count);
} }
function WidgetFiltersComponent_div_6_div_1_div_8_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, WidgetFiltersComponent_div_6_div_1_div_8_li_3_app_icon_1_Template, 1, 0, "app-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, WidgetFiltersComponent_div_6_div_1_div_8_li_3_div_4_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("filter-categories__item filter-categories__item--", item_r11.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r11.type === "parent");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r10.root.category(item_r11.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r11.type === "child");
} }
const _c0 = function (a0) { return { "filter-categories--root": a0 }; };
function WidgetFiltersComponent_div_6_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, WidgetFiltersComponent_div_6_div_1_div_8_li_2_Template, 4, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, WidgetFiltersComponent_div_6_div_1_div_8_li_3_Template, 5, 7, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, filter_r2.root));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !filter_r2.root);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", filter_r2.items)("ngForTrackBy", ctx_r4.trackBySlug);
} }
const _c1 = function (a2, a3, a4) { return { animate: false, mouseEventsInterval: 10, rightToLeft: a2, floor: a3, ceil: a4, step: 1 }; };
function WidgetFiltersComponent_div_6_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ngx-slider", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 36)(6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx_r5.getRangeControl(filter_r2))("options", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](8, _c1, ctx_r5.rightToLeft, filter_r2.min, filter_r2.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 4, ctx_r5.rightToLeft ? _r16.highValue : _r16.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 6, ctx_r5.rightToLeft ? _r16.value : _r16.highValue));
} }
const _c2 = function (a0) { return { "filter-list__item--disabled": a0 }; };
function WidgetFiltersComponent_div_6_div_1_div_10_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 42)(1, "span", 43)(2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "input", 45)(4, "span", 46)(5, "app-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r18.isItemDisabled(filter_r2, item_r19)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r19.slug)("name", "filter_" + filter_r2.slug)("formControlName", item_r19.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r19.count);
} }
function WidgetFiltersComponent_div_6_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, WidgetFiltersComponent_div_6_div_1_div_10_label_2_Template, 10, 8, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", filter_r2.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", filter_r2.items)("ngForTrackBy", ctx_r6.trackBySlug);
} }
function WidgetFiltersComponent_div_6_div_1_div_11_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 42)(1, "span", 51)(2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "input", 53)(4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c2, ctx_r22.isItemDisabled(filter_r2, item_r23)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r23.slug)("formControlName", filter_r2.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("disabled", ctx_r22.isItemDisabled(filter_r2, item_r23) ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r23.count);
} }
function WidgetFiltersComponent_div_6_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 50)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, WidgetFiltersComponent_div_6_div_1_div_11_label_2_Template, 9, 8, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", filter_r2.items)("ngForTrackBy", ctx_r7.trackBySlug);
} }
const _c3 = function (a0) { return [a0]; };
function WidgetFiltersComponent_div_6_div_1_div_12_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 58)(1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "colorType");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 61)(5, "span", 62)(6, "app-icon", 63)(7, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("color", item_r27.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c3, "input-check-color--" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 6, item_r27.color)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r27.slug)("name", "filter_" + filter_r2.slug)("formControlName", item_r27.slug);
} }
function WidgetFiltersComponent_div_6_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, WidgetFiltersComponent_div_6_div_1_div_12_label_2_Template, 8, 10, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", filter_r2.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", filter_r2.items)("ngForTrackBy", ctx_r8.trackBySlug);
} }
function WidgetFiltersComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9)(1, "div", 10, 11)(3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WidgetFiltersComponent_div_6_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r3.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 14)(7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, WidgetFiltersComponent_div_6_div_1_div_8_Template, 4, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, WidgetFiltersComponent_div_6_div_1_div_9_Template, 13, 12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, WidgetFiltersComponent_div_6_div_1_div_10_Template, 3, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, WidgetFiltersComponent_div_6_div_1_div_11_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, WidgetFiltersComponent_div_6_div_1_div_12_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", filter_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", filter_r2.type === "categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", filter_r2.type === "range" && ctx_r1.isPlatformBrowser);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", filter_r2.type === "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", filter_r2.type === "radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", filter_r2.type === "color");
} }
function WidgetFiltersComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, WidgetFiltersComponent_div_6_div_1_Template, 13, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.filtersForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.filters)("ngForTrackBy", ctx_r0.trackBySlug);
} }
const _c4 = function (a0, a1) { return { "widget-filters--offcanvas--always": a0, "widget-filters--offcanvas--mobile": a1 }; };
class WidgetFiltersComponent {
    constructor(platformId, direction, fb, root, pageCategory, filterOptionService) {
        this.platformId = platformId;
        this.direction = direction;
        this.fb = fb;
        this.root = root;
        this.pageCategory = pageCategory;
        this.filterOptionService = filterOptionService;
        this.offcanvas = 'mobile';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.filters = [];
        this.isPlatformBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformId);
        this.rightToLeft = false;
        this.isLog = true;
        this.rightToLeft = this.direction.isRTL();
    }
    ngOnInit() {
        this.pageCategory.list$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(x => x?.filters || []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe(filters => {
            this.filters = filters;
            this.filtersForm = this.makeFiltersForm(filters);
            if (this.isLog) {
                console.log('- cmp -- WidgetFiltersComponent.ngOnInit() filters -> %o', this.filters);
            }
            this.filtersForm.valueChanges.subscribe(formValues => {
                if (this.isLog) {
                    console.log('--cmp-- WidgetFiltersComponent.filtersForm.valueChanges filters ->%o', filters);
                    console.log('--cmp-- WidgetFiltersComponent.filtersForm.valueChanges formValues ->%o', formValues);
                }
                const filtersBrand = this.convertFormToFilterBrandsValues(filters, formValues);
                // mak ???
                const item = filtersBrand; // [{"key": "brandName.keyword", "value": "NICOLL"}];
                var filterOption = new src_app_shared_api_filter_option_service__WEBPACK_IMPORTED_MODULE_0__.FilterOptionItem(item);
                this.filterOptionService.next(filterOption);
                this.pageCategory.updateOptions({
                    filterValues: this.convertFormToFilterValues(filters, formValues),
                    filtersBrand: filtersBrand
                });
            });
            filters.forEach(filter => {
                switch (filter.type) {
                    case 'range':
                        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([
                            Math.max(filter.value[0], filter.min),
                            Math.min(filter.value[1], filter.max)
                        ]), this.filtersForm.get(filter.slug)?.valueChanges || rxjs__WEBPACK_IMPORTED_MODULE_15__.EMPTY).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)((a, b) => a.join('-') === b.join('-')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.skip)(1)).subscribe(filterValue => {
                            this.pageCategory.updateOptions({
                                filterValues: this.convertFormToFilterValues(filters, {
                                    ...this.filtersForm.value,
                                    [filter.slug]: filterValue,
                                }),
                            });
                        });
                        break;
                    case 'radio':
                    case 'check':
                    case 'color':
                        this.filtersForm.get(filter.slug)?.valueChanges.subscribe(filterValue => {
                            this.pageCategory.updateOptions({
                                filterValues: this.convertFormToFilterValues(filters, {
                                    ...this.filtersForm.value,
                                    [filter.slug]: filterValue,
                                }),
                            });
                        });
                        break;
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    trackBySlug(index, item) {
        return item.slug;
    }
    makeFiltersForm(filters) {
        const filtersFromGroup = {};
        filters.forEach(filter => {
            switch (filter.type) {
                case 'range':
                    filtersFromGroup[filter.slug] = this.fb.control([
                        Math.max(filter.value[0], filter.min),
                        Math.min(filter.value[1], filter.max)
                    ]);
                    break;
                case 'radio':
                    filtersFromGroup[filter.slug] = this.fb.control(filter.value);
                    break;
                case 'check':
                case 'color':
                    filtersFromGroup[filter.slug] = this.makeListFilterForm(filter);
                    break;
            }
        });
        return this.fb.group(filtersFromGroup);
    }
    makeListFilterForm(filter) {
        const group = {};
        filter.items.forEach(item => {
            const control = this.fb.control(filter.value.includes(item.slug));
            // A timeout is needed because sometimes a state change is ignored if performed immediately.
            setTimeout(() => {
                if (this.isItemDisabled(filter, item)) {
                    control.disable({ emitEvent: false });
                }
                else {
                    control.enable({ emitEvent: false });
                }
            }, 0);
            group[item.slug] = control;
        });
        return this.fb.group(group);
    }
    isItemDisabled(filter, item) {
        return item.count === 0 && (filter.type === 'radio' || !filter.value.includes(item.slug));
    }
    convertFormToFilterValues(filters, formValues) {
        const filterValues = {};
        filters.forEach(filter => {
            const formValue = formValues[filter.slug];
            switch (filter.type) {
                case 'range':
                    if (formValue && (formValue[0] !== filter.min || formValue[1] !== filter.max)) {
                        filterValues[filter.slug] = `${formValue[0]}-${formValue[1]}`;
                    }
                    break;
                case 'check':
                case 'color':
                    const filterFormValues = formValue || {};
                    // Reactive forms do not add a values of disabled checkboxes.
                    // This code will add them manually.
                    filter.value.forEach(filterValue => {
                        if (!(filterValue in filterFormValues)) {
                            filterFormValues[filterValue] = true;
                        }
                    });
                    const values = Object.keys(filterFormValues).filter(x => filterFormValues[x]);
                    if (values.length > 0) {
                        filterValues[filter.slug] = values.join(',');
                    }
                    break;
                case 'radio':
                    if (formValue !== filter.items[0].slug) {
                        filterValues[filter.slug] = formValue;
                    }
                    break;
            }
        });
        return filterValues;
    }
    // mak
    convertFormToFilterBrandsValues(filters, formValues) {
        const filterValues = [];
        filters.forEach(filter => {
            const formValue = formValues[filter.slug];
            switch (filter.type) {
                case 'range':
                    break;
                // mak
                case 'check':
                    const filterFormValuesCheck = formValue || {};
                    // Reactive forms do not add a values of disabled checkboxes.
                    // This code will add them manually.
                    filter.value.forEach(filterValue => {
                        if (!(filterValue in filterFormValuesCheck)) {
                            filterFormValuesCheck[filterValue] = true;
                        }
                    });
                    const valuesCheck = Object.keys(filterFormValuesCheck).filter(x => filterFormValuesCheck[x]);
                    // filters: [{'key': 'brandName.keyword', 'value': 'NICOLL'}]
                    if (valuesCheck.length > 0) {
                        valuesCheck.forEach(filterValue => {
                            filterValues.push({ 'key': 'Marques', 'value': filterValue });
                        });
                        // filterValues.push({'key': 'brandName.keyword', 'value': valuesCheck[0]});
                    }
                    break;
                case 'color':
                    break;
                case 'radio':
                    break;
            }
        });
        return filterValues;
    }
    reset() {
        const formValues = {};
        this.filters.forEach(filter => {
            switch (filter.type) {
                case 'range':
                    formValues[filter.slug] = [filter.min, filter.max];
                    break;
                case 'check':
                case 'color':
                    formValues[filter.slug] = {};
                    filter.items.forEach(item => {
                        formValues[filter.slug][item.slug] = false;
                    });
                    break;
                case 'radio':
                    formValues[filter.slug] = filter.items[0].slug;
                    break;
            }
        });
        this.filtersForm.setValue(formValues);
    }
    getRangeControl(filter) {
        return this.filtersForm.get(filter.slug);
    }
    static { this.ɵfac = function WidgetFiltersComponent_Factory(t) { return new (t || WidgetFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_1__.DirectionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shop_services_page_category_service__WEBPACK_IMPORTED_MODULE_3__.PageCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_api_filter_option_service__WEBPACK_IMPORTED_MODULE_0__.FilterOptionService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: WidgetFiltersComponent, selectors: [["app-widget-filters"]], inputs: { offcanvas: "offcanvas" }, decls: 10, vars: 6, consts: [[1, "test-border"], [1, "test-name-Component"], ["appCollapse", "", 1, "widget-filters", "widget", 3, "ngClass"], [1, "widget-filters__title", "widget__title"], ["class", "widget-filters__list", 3, "formGroup", 4, "ngIf"], [1, "widget-filters__actions", "d-flex"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "widget-filters__list", 3, "formGroup"], ["class", "widget-filters__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "widget-filters__item"], ["appCollapseItem", "filter--opened", 1, "filter", "filter--opened"], ["collapse", "appCollapseItem"], ["type", "button", 1, "filter__title", 3, "click"], ["name", "arrow-rounded-down-12x7", "size", "12x7", 1, "filter__arrow"], ["appCollapseContent", "", 1, "filter__body"], [1, "filter__container"], ["class", "filter-categories", 3, "ngClass", 4, "ngIf"], ["class", "filter-price", 4, "ngIf"], ["class", "filter-list", 3, "formGroupName", 4, "ngIf"], ["class", "filter-list", 4, "ngIf"], ["class", "filter-color", 3, "formGroupName", 4, "ngIf"], [1, "filter-categories", 3, "ngClass"], [1, "filter-categories__list"], ["class", "filter-categories__item filter-categories__item--parent", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filter-categories__item", "filter-categories__item--parent"], ["name", "arrow-rounded-left-6x9", "size", "6x9", 1, "filter-categories__arrow"], [3, "routerLink"], ["class", "filter-categories__arrow", "name", "arrow-rounded-left-6x9", "size", "6x9", 4, "ngIf"], ["class", "filter-categories__counter", 4, "ngIf"], [1, "filter-categories__counter"], [1, "filter-price"], [1, "filter-price__slider"], [1, "ngx-slider-custom"], [3, "formControl", "options"], ["slider", ""], [1, "filter-price__title"], [1, "filter-price__min-value"], [1, "filter-price__max-value"], [1, "filter-list", 3, "formGroupName"], [1, "filter-list__list"], ["class", "filter-list__item", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filter-list__item", 3, "ngClass"], [1, "filter-list__input", "input-check"], [1, "input-check__body"], ["type", "checkbox", 1, "input-check__input", 3, "value", "name", "formControlName"], [1, "input-check__box"], ["name", "check-9x7", "size", "9x7", 1, "input-check__icon"], [1, "filter-list__title"], [1, "filter-list__counter"], [1, "filter-list"], [1, "filter-list__input", "input-radio"], [1, "input-radio__body"], ["type", "radio", 1, "input-radio__input", 3, "value", "formControlName"], [1, "input-radio__circle"], [1, "filter-color", 3, "formGroupName"], [1, "filter-color__list"], ["class", "filter-color__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filter-color__item"], [1, "filter-color__check", "input-check-color", 3, "ngClass"], [1, "input-check-color__body"], ["type", "checkbox", 1, "input-check-color__input", 3, "value", "name", "formControlName"], [1, "input-check-color__box"], ["name", "check-12x9", "size", "12x9", 1, "input-check-color__icon"], [1, "input-check-color__stick"]], template: function WidgetFiltersComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2)(4, "h4", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Filters");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, WidgetFiltersComponent_div_6_Template, 2, 3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WidgetFiltersComponent_Template_button_click_8_listener() { return ctx.reset(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Reset");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](3, _c4, ctx.offcanvas === "always", ctx.offcanvas === "mobile"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.filtersForm);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupName, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkWithHref, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_20__["ɵa"], _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_4__.CollapseContentDirective, _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_4__.CollapseDirective, _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_4__.CollapseItemDirective, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _shared_pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_6__.ColorTypePipe, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_7__.CurrencyFormatPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtZmlsdGVycy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 4204:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetNewsletterComponent": () => (/* binding */ WidgetNewsletterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class WidgetNewsletterComponent {
    constructor() { }
    static { this.ɵfac = function WidgetNewsletterComponent_Factory(t) { return new (t || WidgetNewsletterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetNewsletterComponent, selectors: [["app-widget-newsletter"]], decls: 11, vars: 0, consts: [[1, "widget-newsletter", "widget"], [1, "widget-newsletter__title"], [1, "widget-newsletter__text"], ["action", "", 1, "widget-newsletter__form"], ["for", "widget-newsletter-email", 1, "sr-only"], ["id", "widget-newsletter-email", "type", "text", "placeholder", "Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mt-3"]], template: function WidgetNewsletterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Our Newsletter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Phasellus eleifend sapien felis, at sollicitudin arcu semper mattis. Mauris quis mi quis ipsum tristique lobortis. Nulla vitae est blandit rutrum. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3)(6, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Subscribe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtbmV3c2xldHRlci5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 8079:
/*!************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-posts/widget-posts.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetPostsComponent": () => (/* binding */ WidgetPostsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function WidgetPostsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8)(5, "div", 9)(6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r0.root.post());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.postImage(post_r1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r0.root.post());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r1.date);
} }
class WidgetPostsComponent {
    constructor(root) {
        this.root = root;
        this.posts = [];
    }
    postImage(post) {
        return post.image.replace(/^\.jpg$/, '-thumbnail.jpg');
    }
    static { this.ɵfac = function WidgetPostsComponent_Factory(t) { return new (t || WidgetPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WidgetPostsComponent, selectors: [["app-widget-posts"]], inputs: { posts: "posts" }, decls: 5, vars: 1, consts: [[1, "widget-posts", "widget"], [1, "widget__title"], [1, "widget-posts__list"], ["class", "widget-posts__item", 4, "ngFor", "ngForOf"], [1, "widget-posts__item"], [1, "widget-posts__image"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "widget-posts__info"], [1, "widget-posts__name"], [1, "widget-posts__date"]], template: function WidgetPostsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Latest Posts");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WidgetPostsComponent_div_4_Template, 10, 5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 6661:
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-products/widget-products.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetProductsComponent": () => (/* binding */ WidgetProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/currency-format.pipe */ 133);





function WidgetProductsComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2.root.product(product_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r1.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function WidgetProductsComponent_div_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, product_r1.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 5, product_r1.compareAtPrice));
} }
function WidgetProductsComponent_div_4_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, product_r1.price), " ");
} }
function WidgetProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WidgetProductsComponent_div_4_div_2_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7)(4, "div", 8)(5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, WidgetProductsComponent_div_4_ng_container_8_Template, 8, 7, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, WidgetProductsComponent_div_4_ng_container_9_Template, 3, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r1.images == null ? null : product_r1.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r0.root.product(product_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r1.compareAtPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !product_r1.compareAtPrice);
} }
class WidgetProductsComponent {
    constructor(root) {
        this.root = root;
        this.header = '';
        this.products = [];
    }
    static { this.ɵfac = function WidgetProductsComponent_Factory(t) { return new (t || WidgetProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WidgetProductsComponent, selectors: [["app-widget-products"]], inputs: { header: "header", products: "products" }, decls: 5, vars: 2, consts: [[1, "widget-products", "widget"], [1, "widget__title"], [1, "widget-products__list"], ["class", "widget-products__item", 4, "ngFor", "ngForOf"], [1, "widget-products__item"], [1, "widget-products__image"], ["class", "product-image", 4, "ngIf"], [1, "widget-products__info"], [1, "widget-products__name"], [3, "routerLink"], [1, "widget-products__prices"], [4, "ngIf"], [1, "product-image"], [1, "product-image__body", 3, "routerLink"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "widget-products__new-price"], [1, "widget-products__old-price"]], template: function WidgetProductsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, WidgetProductsComponent_div_4_Template, 10, 5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.header);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_1__.CurrencyFormatPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 1063:
/*!**************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-search/widget-search.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetSearchComponent": () => (/* binding */ WidgetSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ 2775);



class WidgetSearchComponent {
    constructor() { }
    static { this.ɵfac = function WidgetSearchComponent_Factory(t) { return new (t || WidgetSearchComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WidgetSearchComponent, selectors: [["app-widget-search"]], decls: 5, vars: 0, consts: [[1, "widget-search"], [1, "widget-search__body"], ["placeholder", "Blog search...", "type", "text", "autocomplete", "off", "spellcheck", "false", 1, "widget-search__input"], ["type", "submit", 1, "widget-search__button"], ["name", "search-20", "size", "20"]], template: function WidgetSearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 8634:
/*!**********************************************************************!*\
  !*** ./src/app/modules/widgets/widget-tags/widget-tags.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetTagsComponent": () => (/* binding */ WidgetTagsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class WidgetTagsComponent {
    constructor() { }
    static { this.ɵfac = function WidgetTagsComponent_Factory(t) { return new (t || WidgetTagsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetTagsComponent, selectors: [["app-widget-tags"]], decls: 29, vars: 0, consts: [[1, "widget-tags", "widget"], [1, "widget__title"], [1, "tags", "tags--lg"], [1, "tags__list"], ["routerLink", "./"]], template: function WidgetTagsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tags Cloud");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Promotion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Power Tool");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Arrivals");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Screwdriver");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Wrench");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mounts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Electrodes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Chainsaws");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Manometers");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Nails");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Air Guns");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cutting Discs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtdGFncy5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 9346:
/*!***************************************************!*\
  !*** ./src/app/modules/widgets/widgets.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsModule": () => (/* binding */ WidgetsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 2498);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget-aboutus/widget-aboutus.component */ 4684);
/* harmony import */ var _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget-categories/widget-categories.component */ 1963);
/* harmony import */ var _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget-comments/widget-comments.component */ 497);
/* harmony import */ var _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget-filters/widget-filters.component */ 5824);
/* harmony import */ var _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget-newsletter/widget-newsletter.component */ 4204);
/* harmony import */ var _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget-posts/widget-posts.component */ 8079);
/* harmony import */ var _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget-products/widget-products.component */ 6661);
/* harmony import */ var _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget-search/widget-search.component */ 1063);
/* harmony import */ var _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget-tags/widget-tags.component */ 8634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
// modules (angular)



// modules (third-party)

// modules

// widgets










class WidgetsModule {
    static { this.ɵfac = function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: WidgetsModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            // modules (third-party)
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__.NgxSliderModule,
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](WidgetsModule, { declarations: [
        // widgets
        _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_1__.WidgetAboutusComponent,
        _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_2__.WidgetCategoriesComponent,
        _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_3__.WidgetCommentsComponent,
        _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_4__.WidgetFiltersComponent,
        _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_5__.WidgetNewsletterComponent,
        _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_6__.WidgetPostsComponent,
        _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_7__.WidgetProductsComponent,
        _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_8__.WidgetSearchComponent,
        _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_9__.WidgetTagsComponent], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        // modules (third-party)
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__.NgxSliderModule,
        // modules
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [
        // widgets
        _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_1__.WidgetAboutusComponent,
        _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_2__.WidgetCategoriesComponent,
        _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_3__.WidgetCommentsComponent,
        _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_4__.WidgetFiltersComponent,
        _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_5__.WidgetNewsletterComponent,
        _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_6__.WidgetPostsComponent,
        _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_7__.WidgetProductsComponent,
        _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_8__.WidgetSearchComponent,
        _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_9__.WidgetTagsComponent] }); })();


/***/ }),

/***/ 2835:
/*!****************************************************************!*\
  !*** ./src/app/pages/page-home-one/page-home-one.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHomeOneComponent": () => (/* binding */ PageHomeOneComponent)
/* harmony export */ });
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/blog-posts */ 1622);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/fake-server/database/brands */ 2532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api/shop.service */ 8781);
/* harmony import */ var src_app_shared_api_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api/categories.service */ 9383);
/* harmony import */ var _modules_blocks_block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/blocks/block-banner/block-banner.component */ 7042);
/* harmony import */ var _modules_blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/blocks/block-brands/block-brands.component */ 42);
/* harmony import */ var _modules_blocks_block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/blocks/block-categories/block-categories.component */ 3412);
/* harmony import */ var _modules_blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/blocks/block-features/block-features.component */ 3888);
/* harmony import */ var _modules_blocks_block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/blocks/block-posts/block-posts.component */ 6647);
/* harmony import */ var _modules_blocks_block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/blocks/block-product-columns/block-product-columns.component */ 2372);
/* harmony import */ var _modules_blocks_block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component */ 171);
/* harmony import */ var _modules_blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/blocks/block-products-carousel/block-products-carousel.component */ 4630);
/* harmony import */ var _modules_blocks_block_products_block_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/blocks/block-products/block-products.component */ 7313);
/* harmony import */ var _modules_blocks_block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modules/blocks/block-slideshow/block-slideshow.component */ 5256);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4666);



















const _c0 = function () {
  return [];
};

class PageHomeOneComponent {
  constructor(shop, categoriesService) {
    this.shop = shop;
    this.categoriesService = categoriesService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__.posts;
    this.isLog = true;
  }

  ngOnInit() {
    this.bestsellers$ = this.shop.getBestsellers(7);
    this.brands$ = this.shop.getPopularBrands();
    /*
            this.popularCategories$ = this.shop.getCategoriesBySlug([
                'power-tools',
                'hand-tools',
                'machine-tools',
                'power-machinery',
                'measurement',
                'clothes-and-ppe',
            ], 1);
            */

    const categories = this.categoriesService.CategoriesChangedSub$.getValue();

    if (this.isLog) {
      console.log('- cmp -- PageHomeOneComponent.ngOnInit() categories -> %o', categories);
    }

    const categoriesSlug = categories.map(x => {
      return x.slug;
    });

    switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_1__.getModeSource)()) {
      case 'demo.sourcing.pm':
        this.popularCategories$ = this.shop.getCategoriesBySlug(this.categoriesService, categoriesSlug, 1);
        break;

      default:
        // 'fake-server'; 'json':
        this.popularCategories$ = this.shop.getCategoriesBySlug(this.categoriesService, (0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_1__.getCategoriesSlug)(), 1);
    }

    this.columnTopRated$ = this.shop.getTopRated(3);
    this.columnSpecialOffers$ = this.shop.getSpecialOffers(3);
    this.columnBestsellers$ = this.shop.getBestsellers(3);
    this.featuredProducts = {
      abort$: new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject(),
      loading: false,
      products: [],
      groups: [
      /*
      {
          name: 'All',
          current: true,
          products$: this.shop.getFeaturedProducts(null, 8),
      },
      {
          name: 'Power Tools',
          current: false,
          products$: this.shop.getFeaturedProducts('power-tools', 8),
      },
      {
          name: 'Hand Tools',
          current: false,
          products$: this.shop.getFeaturedProducts('hand-tools', 8),
      },
      {
          name: 'Plumbing',
          current: false,
          products$: this.shop.getFeaturedProducts('plumbing', 8),
      },
      */
      {
        name: 'All',
        current: true,
        products$: this.shop.getFeaturedProducts(null, 8)
      }, {
        name: categories[0].name,
        current: false,
        // products$: this.shop.getFeaturedProducts(getCategoriesSlug()[0], 8),
        products$: this.shop.getFeaturedProducts(categories[0].slug, 8)
      }, {
        name: categories[1].name,
        current: false,
        // products$: this.shop.getFeaturedProducts(getCategoriesSlug()[1], 8),
        products$: this.shop.getFeaturedProducts(categories[1].slug, 8)
      }, {
        name: categories[2].name,
        current: false,
        // products$: this.shop.getFeaturedProducts(getCategoriesSlug()[2], 8),
        products$: this.shop.getFeaturedProducts(categories[2].slug, 8)
      }]
    };

    if (this.isLog) {
      console.log('- cmp -- PageHomeOneComponent.ngOnInit() this.featuredProducts -> %o', this.featuredProducts);
    }

    this.groupChange(this.featuredProducts, this.featuredProducts.groups[0]);
    this.latestProducts = {
      abort$: new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject(),
      loading: false,
      products: [],
      groups: [
      /*
      {
          name: 'All',
          current: true,
          products$: this.shop.getLatestProducts(null, 8),
      },
      {
          name: 'Power Tools',
          current: false,
          products$: this.shop.getLatestProducts('power-tools', 8),
      },
      {
          name: 'Hand Tools',
          current: false,
          products$: this.shop.getLatestProducts('hand-tools', 8),
      },
      {
          name: 'Plumbing',
          current: false,
          products$: this.shop.getLatestProducts('plumbing', 8),
      },
      */
      {
        name: 'All',
        current: true,
        products$: this.shop.getLatestProducts(null, 8)
      }, {
        name: categories[0].name,
        current: false,
        // products$: this.shop.getLatestProducts(getCategoriesSlug()[0], 8),
        products$: this.shop.getLatestProducts(categories[0].slug, 8)
      }, {
        name: categories[1].name,
        current: false,
        // products$: this.shop.getLatestProducts(getCategoriesSlug()[1], 8),
        products$: this.shop.getLatestProducts(categories[1].slug, 8)
      }, {
        name: categories[2].name,
        current: false,
        // products$: this.shop.getLatestProducts(getCategoriesSlug()[2], 8),
        products$: this.shop.getLatestProducts(categories[2].slug, 8)
      }]
    };
    this.groupChange(this.latestProducts, this.latestProducts.groups[0]);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  groupChange(carousel, group) {
    carousel.loading = true;
    carousel.abort$.next();
    group.products$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(() => carousel.loading = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(this.destroy$, carousel.abort$))).subscribe(x => carousel.products = x);
  }

  static {
    this.ɵfac = function PageHomeOneComponent_Factory(t) {
      return new (t || PageHomeOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_shared_api_categories_service__WEBPACK_IMPORTED_MODULE_3__.CategoriesService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
      type: PageHomeOneComponent,
      selectors: [["app-home"]],
      decls: 22,
      vars: 34,
      consts: [[1, "test-border"], [1, "test-name-Component"], [3, "withDepartments"], ["header", "Featured Products", "layout", "grid-4", 3, "loading", "products", "groups", "groupChange"], ["header", "Bestsellers", "layout", "large-first", 3, "products"], ["header", "Popular Categories", "layout", "classic", 3, "categories"], ["header", "New Arrivals", "layout", "horizontal", 3, "rows", "loading", "products", "groups", "groupChange"], ["header", "Latest News", "layout", "list-sm", 3, "posts"], [3, "brands"], ["header", "Top Rated Products", 3, "products"], ["header", "Special Offers", 3, "products"], ["header", "Bestsellers", 3, "products"]],
      template: function PageHomeOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "app-block-slideshow", 2)(4, "app-block-features");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "app-block-products-carousel", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("groupChange", function PageHomeOneComponent_Template_app_block_products_carousel_groupChange_5_listener($event) {
            return ctx.groupChange(ctx.featuredProducts, $event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "app-block-banner")(7, "app-block-products", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "app-block-categories", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "app-block-products-carousel", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("groupChange", function PageHomeOneComponent_Template_app_block_products_carousel_groupChange_11_listener($event) {
            return ctx.groupChange(ctx.latestProducts, $event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "app-block-posts", 7)(13, "app-block-brands", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "app-block-product-columns");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "app-block-product-columns-item", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](18, "app-block-product-columns-item", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](20, "app-block-product-columns-item", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](21, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("withDepartments", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("loading", ctx.featuredProducts.loading)("products", ctx.featuredProducts.products)("groups", ctx.featuredProducts.groups);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 16, ctx.bestsellers$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](28, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("categories", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 18, ctx.popularCategories$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](29, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("rows", 2)("loading", ctx.latestProducts.loading)("products", ctx.latestProducts.products)("groups", ctx.latestProducts.groups);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("posts", ctx.posts);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("brands", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 20, ctx.brands$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](30, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](17, 22, ctx.columnTopRated$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](31, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 24, ctx.columnSpecialOffers$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](32, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](21, 26, ctx.columnBestsellers$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](33, _c0));
        }
      },
      dependencies: [_modules_blocks_block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_4__.BlockBannerComponent, _modules_blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_5__.BlockBrandsComponent, _modules_blocks_block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_6__.BlockCategoriesComponent, _modules_blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_7__.BlockFeaturesComponent, _modules_blocks_block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_8__.BlockPostsComponent, _modules_blocks_block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_9__.BlockProductColumnsComponent, _modules_blocks_block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_10__.BlockProductColumnsItemComponent, _modules_blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_11__.BlockProductsCarouselComponent, _modules_blocks_block_products_block_products_component__WEBPACK_IMPORTED_MODULE_12__.BlockProductsComponent, _modules_blocks_block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_13__.BlockSlideshowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhvbWUtb25lLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
  }
}

/***/ }),

/***/ 5400:
/*!****************************************************************!*\
  !*** ./src/app/pages/page-home-two/page-home-two.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHomeTwoComponent": () => (/* binding */ PageHomeTwoComponent)
/* harmony export */ });
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/blog-posts */ 1622);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/fake-server/database/brands */ 2532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/api/shop.service */ 8781);
/* harmony import */ var src_app_shared_api_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api/categories.service */ 9383);
/* harmony import */ var _modules_blocks_block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/blocks/block-banner/block-banner.component */ 7042);
/* harmony import */ var _modules_blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/blocks/block-brands/block-brands.component */ 42);
/* harmony import */ var _modules_blocks_block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/blocks/block-categories/block-categories.component */ 3412);
/* harmony import */ var _modules_blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/blocks/block-features/block-features.component */ 3888);
/* harmony import */ var _modules_blocks_block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/blocks/block-posts/block-posts.component */ 6647);
/* harmony import */ var _modules_blocks_block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/blocks/block-product-columns/block-product-columns.component */ 2372);
/* harmony import */ var _modules_blocks_block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component */ 171);
/* harmony import */ var _modules_blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/blocks/block-products-carousel/block-products-carousel.component */ 4630);
/* harmony import */ var _modules_blocks_block_products_block_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/blocks/block-products/block-products.component */ 7313);
/* harmony import */ var _modules_blocks_block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modules/blocks/block-slideshow/block-slideshow.component */ 5256);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4666);



















const _c0 = function () {
  return [];
};

class PageHomeTwoComponent {
  constructor(shop, categoriesService) {
    this.shop = shop;
    this.categoriesService = categoriesService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__.posts;
    this.isLog = true;
  }

  ngOnInit() {
    this.bestsellers$ = this.shop.getBestsellers(7);
    this.brands$ = this.shop.getPopularBrands();
    /*
    this.popularCategories$ = this.shop.getCategoriesBySlug([
        'power-tools',
        'hand-tools',
        'machine-tools',
        'power-machinery',
        'measurement',
        'clothes-and-ppe',
    ], 1);
    */
    // mak ???
    // <ng-container> {{pimalionCategories$|async}}</ng-container>
    // this.pimalionCategories$ =  this.shop.getCategoriesList();

    const categories = this.categoriesService.CategoriesChangedSub$.getValue();
    const categoriesSlug = categories.map(x => {
      return x.slug;
    });

    switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_1__.getModeSource)()) {
      case 'demo.sourcing.pm':
        this.popularCategories$ = this.shop.getCategoriesBySlug(this.categoriesService, categoriesSlug, 1);
        break;

      default:
        // 'fake-server'; 'json':
        this.popularCategories$ = this.shop.getCategoriesBySlug(this.categoriesService, (0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_1__.getCategoriesSlug)(), 1);
    } // this.popularCategories$ = this.shop.getCategoriesBySlug(this.categoriesService, getCategoriesSlug(), 1);


    this.columnTopRated$ = this.shop.getTopRated(3);
    this.columnSpecialOffers$ = this.shop.getSpecialOffers(3);
    this.columnBestsellers$ = this.shop.getBestsellers(3);
    this.featuredProducts = {
      abort$: new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject(),
      loading: false,
      products: [],
      groups: [
      /*
      {
          name: 'All',
          current: true,
          products$: this.shop.getFeaturedProducts(null, 10),
      },
      {
          name: 'Power Tools',
          current: false,
          products$: this.shop.getFeaturedProducts('power-tools', 10),
      },
      {
          name: 'Hand Tools',
          current: false,
          products$: this.shop.getFeaturedProducts('hand-tools', 10),
      },
      {
          name: 'Plumbing',
          current: false,
          products$: this.shop.getFeaturedProducts('plumbing', 10),
      },
      */
      {
        name: 'All',
        current: true,
        products$: this.shop.getFeaturedProducts(null, 10)
      }, {
        name: categories[0].name,
        current: false,
        // products$: this.shop.getFeaturedProducts(getCategoriesSlug()[0], 10),
        products$: this.shop.getFeaturedProducts(categoriesSlug[0], 10)
      }, {
        name: categories[1].name,
        current: false,
        // products$: this.shop.getFeaturedProducts(getCategoriesSlug()[1], 10),
        products$: this.shop.getFeaturedProducts(categoriesSlug[1], 10)
      }, {
        name: categories[2].name,
        current: false,
        // products$: this.shop.getFeaturedProducts(getCategoriesSlug()[2], 10),
        products$: this.shop.getFeaturedProducts(categoriesSlug[2], 10)
      }]
    };
    this.groupChange(this.featuredProducts, this.featuredProducts.groups[0]);
    this.latestProducts = {
      abort$: new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject(),
      loading: false,
      products: [],
      groups: [
      /*
      {
          name: 'All',
          current: true,
          products$: this.shop.getLatestProducts(null, 8),
      },
      {
          name: 'Power Tools',
          current: false,
          products$: this.shop.getLatestProducts('power-tools', 8),
      },
      {
          name: 'Hand Tools',
          current: false,
          products$: this.shop.getLatestProducts('hand-tools', 8),
      },
      {
          name: 'Plumbing',
          current: false,
          products$: this.shop.getLatestProducts('plumbing', 8),
      },
      */
      {
        name: 'All',
        current: true,
        products$: this.shop.getLatestProducts(null, 8)
      }, {
        name: categories[0].name,
        current: false,
        // products$: this.shop.getLatestProducts(getCategoriesSlug()[0], 8),
        products$: this.shop.getLatestProducts(categoriesSlug[0], 8)
      }, {
        name: categories[1].name,
        current: false,
        // products$: this.shop.getLatestProducts(getCategoriesSlug()[1], 8),
        products$: this.shop.getLatestProducts(categoriesSlug[0], 8)
      }, {
        name: categories[2].name,
        current: false,
        // products$: this.shop.getLatestProducts(getCategoriesSlug()[2], 8),
        products$: this.shop.getLatestProducts(categoriesSlug[0], 8)
      }]
    };
    this.groupChange(this.latestProducts, this.latestProducts.groups[0]);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  groupChange(carousel, group) {
    carousel.loading = true;
    carousel.abort$.next();
    group.products$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(() => carousel.loading = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(this.destroy$, carousel.abort$))).subscribe(x => carousel.products = x);
  }

  static {
    this.ɵfac = function PageHomeTwoComponent_Factory(t) {
      return new (t || PageHomeTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_shared_api_categories_service__WEBPACK_IMPORTED_MODULE_3__.CategoriesService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
      type: PageHomeTwoComponent,
      selectors: [["app-page-home-two"]],
      decls: 22,
      vars: 34,
      consts: [[1, "test-border"], [1, "test-name-Component"], ["layout", "boxed"], ["header", "Featured Products", "layout", "grid-5", 3, "rows", "loading", "products", "groups", "groupChange"], ["header", "Bestsellers", "layout", "large-last", 3, "products"], ["header", "Popular Categories", "layout", "compact", 3, "categories"], ["header", "New Arrivals", "layout", "grid-5", 3, "rows", "loading", "products", "groups", "groupChange"], ["header", "Latest News", "layout", "grid-nl", 3, "posts"], [3, "brands"], ["header", "Top Rated Products", 3, "products"], ["header", "Special Offers", 3, "products"], ["header", "Bestsellers", 3, "products"]],
      template: function PageHomeTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "app-block-slideshow")(4, "app-block-features", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "app-block-products-carousel", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("groupChange", function PageHomeTwoComponent_Template_app_block_products_carousel_groupChange_5_listener($event) {
            return ctx.groupChange(ctx.featuredProducts, $event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "app-block-banner")(7, "app-block-products", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "app-block-categories", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "app-block-products-carousel", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("groupChange", function PageHomeTwoComponent_Template_app_block_products_carousel_groupChange_11_listener($event) {
            return ctx.groupChange(ctx.latestProducts, $event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "app-block-posts", 7)(13, "app-block-brands", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "app-block-product-columns");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "app-block-product-columns-item", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](18, "app-block-product-columns-item", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](20, "app-block-product-columns-item", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](21, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("rows", 2)("loading", ctx.featuredProducts.loading)("products", ctx.featuredProducts.products)("groups", ctx.featuredProducts.groups);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 16, ctx.bestsellers$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](28, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("categories", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 18, ctx.popularCategories$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](29, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("rows", 1)("loading", ctx.latestProducts.loading)("products", ctx.latestProducts.products)("groups", ctx.latestProducts.groups);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("posts", ctx.posts);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("brands", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 20, ctx.brands$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](30, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](17, 22, ctx.columnTopRated$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](31, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 24, ctx.columnSpecialOffers$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](32, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](21, 26, ctx.columnBestsellers$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](33, _c0));
        }
      },
      dependencies: [_modules_blocks_block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_4__.BlockBannerComponent, _modules_blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_5__.BlockBrandsComponent, _modules_blocks_block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_6__.BlockCategoriesComponent, _modules_blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_7__.BlockFeaturesComponent, _modules_blocks_block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_8__.BlockPostsComponent, _modules_blocks_block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_9__.BlockProductColumnsComponent, _modules_blocks_block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_10__.BlockProductColumnsItemComponent, _modules_blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_11__.BlockProductsCarouselComponent, _modules_blocks_block_products_block_products_component__WEBPACK_IMPORTED_MODULE_12__.BlockProductsComponent, _modules_blocks_block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_13__.BlockSlideshowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhvbWUtdHdvLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
  }
}

/***/ }),

/***/ 8340:
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class PageNotFoundComponent {
    constructor() { }
    static { this.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-not-found"]], decls: 23, vars: 1, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "block"], [1, "container"], [1, "not-found"], [1, "not-found__404"], [1, "not-found__content"], [1, "not-found__title"], [1, "not-found__text"], [1, "not-found__search"], ["type", "text", "placeholder", "Search Query...", 1, "not-found__search-input", "form-control"], ["type", "submit", 1, "not-found__search-button", "btn", "btn-primary"], ["href", "index.html", 1, "btn", "btn-secondary", "btn-sm"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Oops! Error 404 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Page Not Found");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " We can't seem to find the page you're looking for.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Try to use the search. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Or go to the home page to start over. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Go To Home Page");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.constructor.name);
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 4871:
/*!****************************************************************************!*\
  !*** ./src/app/pages/page-offcanvas-cart/page-offcanvas-cart.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageOffcanvasCartComponent": () => (/* binding */ PageOffcanvasCartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/root.service */ 1372);
/* harmony import */ var _shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/offcanvas-cart.service */ 6163);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/page-header/page-header.component */ 2802);




const _c0 = function (a1) { return { label: "Home", url: a1 }; };
const _c1 = function () { return { label: "Offcanvas Cart", url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class PageOffcanvasCartComponent {
    constructor(root, offcanvasCart) {
        this.root = root;
        this.offcanvasCart = offcanvasCart;
    }
    static { this.ɵfac = function PageOffcanvasCartComponent_Factory(t) { return new (t || PageOffcanvasCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_1__.OffcanvasCartService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageOffcanvasCartComponent, selectors: [["app-page-offcanvas-cart"]], decls: 10, vars: 9, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], [1, "block-empty__body"], [1, "block-empty__message"], [1, "block-empty__actions"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function PageOffcanvasCartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Click on the button to open the offcanvas cart!");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PageOffcanvasCartComponent_Template_button_click_8_listener() { return ctx.offcanvasCart.open(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Open Cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", "Offcanvas Cart")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.root.home()), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1)));
        } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW9mZmNhbnZhcy1jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 6648:
/*!**********************************************!*\
  !*** ./src/app/shared/api/brands.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandsService": () => (/* binding */ BrandsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class BrandsService {
    // public BrandsChangedValue = this.BrandsChangedSub$.getValue();
    constructor() {
        this.isLog = true;
        this.isViewConsole = true;
        this.BrandsInit = [
            { id: '1', image: '', name: 'LEGRAND', slug: 'LEGRAND', count: 111 },
            { id: '2', image: '', name: 'ARNOULD', slug: 'ARNOULD', count: 222 },
            { id: '3', image: '', name: 'BTICINO', slug: 'BTICINO', count: 333 },
            { id: '4', image: '', name: 'PLANET WATTOHM', slug: 'PLANET WATTOHM', count: 444 }
        ];
        this.BrandsChangedSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.BrandsInit);
        this.BrandsChanged$ = this.BrandsChangedSub$.asObservable();
    }
    reset() {
        this.BrandsChangedSub$.next(this.BrandsInit);
    }
    complete() {
        this.BrandsChangedSub$.complete();
    }
    next(brands) {
        if (brands) {
            if (this.isLog) {
                console.log('- srv -- BrandsService.next() brands -> %O', brands);
            }
            this.BrandsChangedSub$.next(brands);
        }
        else {
            if (this.isLog) {
                console.log('- srv -- BrandsService.next() brandsInit -> %O', this.BrandsInit);
            }
            this.BrandsChangedSub$.next(this.BrandsInit);
        }
    }
    static { this.ɵfac = function BrandsService_Factory(t) { return new (t || BrandsService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrandsService, factory: BrandsService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 9383:
/*!**************************************************!*\
  !*** ./src/app/shared/api/categories.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesService": () => (/* binding */ CategoriesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CategoriesService {
    // public CategoriesChangedValue = this.CategoriesChangedSub$.getValue();
    constructor() {
        this.isLog = true;
        this.CategoriesInit = [
        /*
        { parents: null, children: null, id:'AC_7/', type: 'shop', name: 'AciersInit', slug: 'Aciers', path: '', image: '', items: 1, customFields: {}},
        { parents: null, children: null, id:'DE_2/', type: 'shop', name: 'DécorationInit', slug: 'Electricité', path: '', image: '', items: 1, customFields: {}},
        */
        ];
        this.CategoriesChangedSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.CategoriesInit);
        this.CategoriesChanged$ = this.CategoriesChangedSub$.asObservable();
    }
    reset() {
        this.CategoriesChangedSub$.next(this.CategoriesInit);
    }
    complete() {
        this.CategoriesChangedSub$.complete();
    }
    next(categories) {
        if (categories) {
            if (this.isLog) {
                console.log('- srv -- CategoriesService.next() categories -> %O', categories);
            }
            this.CategoriesChangedSub$.next(categories);
        }
        else {
            if (this.isLog) {
                console.log('- srv -- CategoriesService.next() categoriesInit -> %O', this.CategoriesInit);
            }
            this.CategoriesChangedSub$.next(this.CategoriesInit);
        }
    }
    static { this.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 4273:
/*!***************************************************!*\
  !*** ./src/app/shared/api/departments.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentsService": () => (/* binding */ DepartmentsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/fake-server/database/brands */ 2532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.service */ 9383);




class DepartmentsService {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
        this.isLog = true;
        this.departmentsFakeServer = [
            { label: 'Power Tools', url: '/shop/catalog', menu: {
                    type: 'megamenu',
                    size: 'xl',
                    image: 'assets/images/megamenu/megamenu-1.jpg',
                    columns: [
                        { size: 3, items: [
                                { label: 'Power Tools', url: '/shop/catalog', items: [
                                        { label: 'Engravers', url: '/shop/catalog' },
                                        { label: 'Drills', url: '/shop/catalog' },
                                        { label: 'Wrenches', url: '/shop/catalog' },
                                        { label: 'Plumbing', url: '/shop/catalog' },
                                        { label: 'Wall Chaser', url: '/shop/catalog' },
                                        { label: 'Pneumatic Tools', url: '/shop/catalog' },
                                        { label: 'Milling Cutters', url: '/shop/catalog' }
                                    ] },
                                { label: 'Workbenches', url: '/shop/catalog' },
                                { label: 'Presses', url: '/shop/catalog' },
                                { label: 'Spray Guns', url: '/shop/catalog' },
                                { label: 'Riveters', url: '/shop/catalog' }
                            ] },
                        { size: 3, items: [
                                { label: 'Hand Tools', url: '/shop/catalog', items: [
                                        { label: 'Screwdrivers', url: '/shop/catalog' },
                                        { label: 'Handsaws', url: '/shop/catalog' },
                                        { label: 'Knives', url: '/shop/catalog' },
                                        { label: 'Axes', url: '/shop/catalog' },
                                        { label: 'Multitools', url: '/shop/catalog' },
                                        { label: 'Paint Tools', url: '/shop/catalog' }
                                    ] },
                                { label: 'Garden Equipment', url: '/shop/catalog', items: [
                                        { label: 'Motor Pumps', url: '/shop/catalog' },
                                        { label: 'Chainsaws', url: '/shop/catalog' },
                                        { label: 'Electric Saws', url: '/shop/catalog' },
                                        { label: 'Brush Cutters', url: '/shop/catalog' }
                                    ] }
                            ] },
                        { size: 3, items: [
                                { label: 'Machine Tools', url: '/shop/catalog', items: [
                                        { label: 'Thread Cutting', url: '/shop/catalog' },
                                        { label: 'Chip Blowers', url: '/shop/catalog' },
                                        { label: 'Sharpening Machines', url: '/shop/catalog' },
                                        { label: 'Pipe Cutters', url: '/shop/catalog' },
                                        { label: 'Slotting machines', url: '/shop/catalog' },
                                        { label: 'Lathes', url: '/shop/catalog' }
                                    ] }
                            ] },
                        { size: 3, items: [
                                { label: 'Instruments', url: '/shop/catalog', items: [
                                        { label: 'Welding Equipment', url: '/shop/catalog' },
                                        { label: 'Power Tools', url: '/shop/catalog' },
                                        { label: 'Hand Tools', url: '/shop/catalog' },
                                        { label: 'Measuring Tool', url: '/shop/catalog' }
                                    ] }
                            ] }
                    ]
                } },
            { label: 'Hand Tools', url: '/shop/catalog', menu: {
                    type: 'megamenu',
                    size: 'lg',
                    image: 'assets/images/megamenu/megamenu-2.jpg',
                    columns: [
                        { size: 4, items: [
                                { label: 'Hand Tools', url: '/shop/catalog', items: [
                                        { label: 'Screwdrivers', url: '/shop/catalog' },
                                        { label: 'Handsaws', url: '/shop/catalog' },
                                        { label: 'Knives', url: '/shop/catalog' },
                                        { label: 'Axes', url: '/shop/catalog' },
                                        { label: 'Multitools', url: '/shop/catalog' },
                                        { label: 'Paint Tools', url: '/shop/catalog' }
                                    ] },
                                { label: 'Garden Equipment', url: '/shop/catalog', items: [
                                        { label: 'Motor Pumps', url: '/shop/catalog' },
                                        { label: 'Chainsaws', url: '/shop/catalog' },
                                        { label: 'Electric Saws', url: '/shop/catalog' },
                                        { label: 'Brush Cutters', url: '/shop/catalog' }
                                    ] }
                            ] },
                        { size: 4, items: [
                                { label: 'Machine Tools', url: '/shop/catalog', items: [
                                        { label: 'Thread Cutting', url: '/shop/catalog' },
                                        { label: 'Chip Blowers', url: '/shop/catalog' },
                                        { label: 'Sharpening Machines', url: '/shop/catalog' },
                                        { label: 'Pipe Cutters', url: '/shop/catalog' },
                                        { label: 'Slotting machines', url: '/shop/catalog' },
                                        { label: 'Lathes', url: '/shop/catalog' }
                                    ] }
                            ] },
                        { size: 4, items: [
                                { label: 'Instruments', url: '/shop/catalog', items: [
                                        { label: 'Welding Equipment', url: '/shop/catalog' },
                                        { label: 'Power Tools', url: '/shop/catalog' },
                                        { label: 'Hand Tools', url: '/shop/catalog' },
                                        { label: 'Measuring Tool', url: '/shop/catalog' }
                                    ] }
                            ] }
                    ]
                } },
            { label: 'Machine Tools', url: '/shop/catalog', menu: {
                    type: 'megamenu',
                    size: 'nl',
                    image: 'assets/images/megamenu/megamenu-3.jpg',
                    columns: [
                        { size: 6, items: [
                                { label: 'Hand Tools', url: '/shop/catalog', items: [
                                        { label: 'Screwdrivers', url: '/shop/catalog' },
                                        { label: 'Handsaws', url: '/shop/catalog' },
                                        { label: 'Knives', url: '/shop/catalog' },
                                        { label: 'Axes', url: '/shop/catalog' },
                                        { label: 'Multitools', url: '/shop/catalog' },
                                        { label: 'Paint Tools', url: '/shop/catalog' }
                                    ] },
                                { label: 'Garden Equipment', url: '/shop/catalog', items: [
                                        { label: 'Motor Pumps', url: '/shop/catalog' },
                                        { label: 'Chainsaws', url: '/shop/catalog' },
                                        { label: 'Electric Saws', url: '/shop/catalog' },
                                        { label: 'Brush Cutters', url: '/shop/catalog' }
                                    ] }
                            ] },
                        { size: 6, items: [
                                { label: 'Instruments', url: '/shop/catalog', items: [
                                        { label: 'Welding Equipment', url: '/shop/catalog' },
                                        { label: 'Power Tools', url: '/shop/catalog' },
                                        { label: 'Hand Tools', url: '/shop/catalog' },
                                        { label: 'Measuring Tool', url: '/shop/catalog' }
                                    ] }
                            ] }
                    ]
                } },
            { label: 'Building Supplies', url: '/shop/catalog', menu: {
                    type: 'megamenu',
                    size: 'sm',
                    columns: [
                        { size: 12, items: [
                                { label: 'Hand Tools', url: '/shop/catalog', items: [
                                        { label: 'Screwdrivers', url: '/shop/catalog' },
                                        { label: 'Handsaws', url: '/shop/catalog' },
                                        { label: 'Knives', url: '/shop/catalog' },
                                        { label: 'Axes', url: '/shop/catalog' },
                                        { label: 'Multitools', url: '/shop/catalog' },
                                        { label: 'Paint Tools', url: '/shop/catalog' }
                                    ] },
                                { label: 'Garden Equipment', url: '/shop/catalog', items: [
                                        { label: 'Motor Pumps', url: '/shop/catalog' },
                                        { label: 'Chainsaws', url: '/shop/catalog' },
                                        { label: 'Electric Saws', url: '/shop/catalog' },
                                        { label: 'Brush Cutters', url: '/shop/catalog' }
                                    ] }
                            ] }
                    ]
                } },
            { label: 'Electrical', url: '/shop/catalog', menu: {
                    type: 'menu',
                    items: [
                        { label: 'Soldering Equipment', url: '/shop/catalog', items: [
                                { label: 'Soldering Station', url: '/shop/catalog' },
                                { label: 'Soldering Dryers', url: '/shop/catalog' },
                                { label: 'Gas Soldering Iron', url: '/shop/catalog' },
                                { label: 'Electric Soldering Iron', url: '/shop/catalog' }
                            ] },
                        { label: 'Light Bulbs', url: '/shop/catalog' },
                        { label: 'Batteries', url: '/shop/catalog' },
                        { label: 'Light Fixtures', url: '/shop/catalog' },
                        { label: 'Warm Floor', url: '/shop/catalog' },
                        { label: 'Generators', url: '/shop/catalog' },
                        { label: 'UPS', url: '/shop/catalog' }
                    ]
                } },
            { label: 'Power Machinery', url: '/shop/catalog' },
            { label: 'Measurement', url: '/shop/catalog' },
            { label: 'Clothes & PPE', url: '/shop/catalog' },
            { label: 'Plumbing', url: '/shop/catalog' },
            { label: 'Storage & Organization', url: '/shop/catalog' },
            { label: 'Welding & Soldering', url: '/shop/catalog' }
        ];
        this.DepartmentsChangedSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.getDepartments());
    }
    /*
      public reset() {
          this.DepartmentsChangedSub$.next(this.getDepartments());
      }
    
      public complete() {
        this.DepartmentsChangedSub$.complete();
      }
    
      public next(departments: NavigationLink[]) {
        if (departments) {
            console.log('*srv*** DepartmentsService.next() departments -> %O', departments);
          this.DepartmentsChangedSub$.next(departments);
        } else {
            this.DepartmentsChangedSub$.next(this.getDepartments());
        }
      }
     */
    initDepartmentsPimalion(categoriesService) {
        const categories = this.categoriesService.CategoriesChangedSub$.getValue();
        var departments = [];
        for (let i = 0; i < categories.length; i++) {
            const menu = {
                label: categories[i].name,
                url: '/shop/catalog/' + categories[i].slug
            };
            departments.push(menu);
        }
        return departments;
    }
    getDepartments() {
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_0__.getModeSource)()) {
            case 'demo.sourcing.pm':
                return this.initDepartmentsPimalion(this.categoriesService);
            default: // 'fake-server'; 'json':
                return this.departmentsFakeServer;
        }
    }
    static { this.ɵfac = function DepartmentsService_Factory(t) { return new (t || DepartmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DepartmentsService, factory: DepartmentsService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 7820:
/*!*****************************************************!*\
  !*** ./src/app/shared/api/filter-option.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterOptionItem": () => (/* binding */ FilterOptionItem),
/* harmony export */   "FilterOptionService": () => (/* binding */ FilterOptionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FilterOptionItem {
    constructor(filtersBrand_) {
        this.filtersBrand = filtersBrand_;
    }
}
class FilterOptionService {
    // not use !!!
    // public FilterOptionChangedValue = this.FilterOptionChangedSub$.getValue();
    constructor() {
        this.isLog = true;
        this.filterOptionInit = {
            filtersBrand: []
        };
        this.FilterOptionChangedSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.filterOptionInit);
        this.FilterOptionChanged$ = this.FilterOptionChangedSub$.asObservable();
    }
    reset() {
        this.FilterOptionChangedSub$.next(this.filterOptionInit);
    }
    complete() {
        this.FilterOptionChangedSub$.complete();
    }
    next(filterOption) {
        if (filterOption) {
            if (this.isLog) {
                console.log('- srv -- FilterOptionService.next() filterOption -> %O', filterOption);
            }
            this.FilterOptionChangedSub$.next(filterOption);
        }
        else {
            this.FilterOptionChangedSub$.next(this.filterOptionInit);
        }
    }
    static { this.ɵfac = function FilterOptionService_Factory(t) { return new (t || FilterOptionService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FilterOptionService, factory: FilterOptionService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 1530:
/*!******************************************************!*\
  !*** ./src/app/shared/api/pimalion-cloud.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PimalionCloudService": () => (/* binding */ PimalionCloudService),
/* harmony export */   "ProductItem": () => (/* binding */ ProductItem)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _interfaces_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/category */ 4335);
/* harmony import */ var _interfaces_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/currency */ 9889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);


// import { Address } from './../../interfaces/address';






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
    // , responseType: 'json'
    // , observe: 'response'
};
class CategoryItem {
    constructor(id, name, slug, filterCount) {
        this.type = 'shop';
        this.image = 'assets/images/logos/logo-1.png';
        this.customFields = {};
        this.id = id; // ???
        this.name = name,
            this.slug = slug,
            this.items = filterCount; // ???
    }
}
;
class BrandItem {
    constructor(id, name, slug, filterCount) {
        this.image = 'assets/images/logos/logo-1.png';
        this.id = id; // ???
        this.name = name,
            this.slug = slug,
            this.count = filterCount + 1; // ???
    }
}
function getImagesForProduct(imagesPimalion) {
    if (imagesPimalion.length === 0) {
        return [];
    }
    const images = [];
    imagesPimalion.forEach(image => {
        if (image.priority === 1) {
            images.push(image.url);
        }
    });
    return images;
}
function getSiteUrlForProduct(imagesPimalion) {
    if (imagesPimalion.length === 0) {
        return [];
    }
    const items = [];
    imagesPimalion.forEach(item => {
        if (item.priority != 1) {
            if (!item.label) {
                item.label = 'url site';
            }
            items.push(item);
        }
    });
    return items;
}
function getDocumentsForProduct(documents) {
    if (documents.length === 0) {
        return [];
    }
    const items_0 = [];
    const items_1 = [];
    const items_2 = [];
    const items_Other = [];
    documents.forEach(item => {
        if (!item.label) {
            item.label = 'url document ';
        }
        if (item.priority === 0) {
            items_0.push(item);
        }
        ;
        if (item.priority === 1) {
            items_1.push(item);
        }
        ;
        if (item.priority === 2) {
            items_2.push(item);
        }
        ;
        if (item.priority > 2) {
            items_Other.push(item);
        }
        ;
    });
    var items = items_0.concat(items_1);
    items = items.concat(items_2);
    items = items.concat(items_Other);
    return items;
}
function getAttrGroupNameForProduct(attributesPimalion) {
    if (attributesPimalion.length === 0) {
        return [];
    }
    const items = [];
    attributesPimalion.forEach(item => {
        const groupName = item.groupName;
        if (items.indexOf(groupName) < 0) {
            items.push(groupName);
        }
    });
    return items; // .sort();
}
function getAttributesForProduct(attributesPimalion) {
    if (attributesPimalion.length === 0) {
        return [];
    }
    const items = [];
    /*
          {
              "groupName": "Toutes les caracteristiques",
              "key": "Garde d'eau",
              "value": "6 cm "
            }
        name: string;
        slug: string;
        featured: boolean;
        values: ProductAttributeValue[];
        customFields: CustomFields;
    
    */
    attributesPimalion.forEach(item => {
        const attribute = {
            name: item.key,
            slug: item.key,
            featured: true,
            values: [item.value],
            customFields: {}
        };
        items.push(attribute);
    });
    return items;
}
class ProductItem {
    constructor(itemData) {
        this.id = itemData.id; // "ReMSlWcBq_r5-pCSVC-G",
        this.slug = itemData.id; // "ReMSlWcBq_r5-pCSVC-G",
        this.name = itemData.title; // "PRISE TV SIMPLE COMPLET BL",
        this.overview = itemData.overview; // overview: string;   // "Arnould - PRISE TV SIMPLE COMPLET BL",
        this.description = itemData.description; // description: string;   // "Arnould - PRISE TV SIMPLE COMPLET BL",
        this.sku = itemData.pimSku; // "100501957"  '83690/32',
        this.supplierReference = itemData.supplierReference; // "100501957"  '83690/32',
        this.price = itemData.price; // + 1;      // "price": "0.0",
        this.compareAtPrice = null; // + 2;   //  number|null;
        this.images = getImagesForProduct(itemData.images);
        this.urls = getSiteUrlForProduct(itemData.images);
        this.imagesPimalion = itemData.images;
        this.badges = []; // itemData.keywords; //['hot']; // badges: string[];
        this.rating = 2; // rating: number;
        this.reviews = 3; // reviews: number;
        this.availability = 'availability'; // availability: string;
        this.brandName = itemData.brandName; // "brandName": "ARNOULD",
        this.brand = { id: '1', name: itemData.brandName, slug: itemData.brandName, image: 'assets/images/logos/logo-1.png' };
        // brand: brands.find(x => x.slug === bran_Marque) || null, // brandCor
        this.categories = [
            { id: '1',
                name: 'Sanitaire',
                slug: 'Sanitaire',
                items: 111,
                path: 'category',
                image: null,
                type: 'shop',
                customFields: {},
                parents: null,
                children: null
            }
        ];
        // ???
        this.attributes = getAttributesForProduct(itemData.attributes); //itemData.attributes; // attributes: ProductAttribute[];
        this.attributesPimalion = itemData.attributes;
        this.attributesGroupName = getAttrGroupNameForProduct(itemData.attributes);
        this.customFields = {}; // null;// customFields: CustomFields;
        this.documents = getDocumentsForProduct(itemData.documents);
        // ???
        this.relatedProducts = itemData.relatedProducts; // any[];
        this.productVariants = itemData.productVariants; // any[];
        this.pimalionReviews = 'pimalionReviews'; // ???
        this.pimalionHtml = 'pimalionHtml'; // ???
    }
}
;
class PimalionCloudService {
    constructor(http) {
        this.http = http;
        this.isLog = true;
    }
    getCategoriesList(facets) {
        const itemsCategories = facets.find((item) => item.facetName === "Categories");
        if (this.isLog) {
            // console.log('- srv -- PimalionCloudService.getCategoriesList() itemsCategories -> %O', itemsCategories);
        }
        const itemData = itemsCategories.filters;
        if (this.isLog) {
            // console.log('- srv -- PimalionCloudService.getCategoriesList() itemData -> %O', itemData);
        }
        var i = 0;
        var num = 0;
        const categories = itemData.map(value => {
            i = i + 1;
            num = num + value.filterCount;
            // return new CategoryItem(i + '', value.filterValue, value.filterValue, value.filterCount);
            // mak ???
            return new CategoryItem(value.filterKey, value.filterValue, value.filterValue, value.filterCount);
        });
        if (this.isLog) {
            console.log('- srv -- PimalionCloudService.getCategoriesList() categories -> %O  num -> %o', categories, num);
        }
        const categoriesNum = num;
        return { categories, categoriesNum };
    }
    // 01 Post Homepage Get all categories
    getCloudCategoriesList(categoriesService) {
        // const url = `${environment.pimalionCloudUrl}/api/shop/categories`;
        // mak ???
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pimalionCloudUrl}/api/shop/search`;
        const body = {
            page: 0,
            pageSize: 3,
        };
        if (this.isLog) {
            console.log('- srv -- PimalionCloudService.getCloudCategoriesList()  url -> %o  body -> %o', url, body);
        }
        // return this.http.get<CategoryPimalion[]>(url, httpOptions_cat)
        const mainHeaders = [];
        return this.http.post(url, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json'),
            responseType: 'json',
            observe: 'response'
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((response) => {
            if (this.isLog) {
                console.log('- srv --  PimalionCloudService.getCloudCategoriesList() response -> %O', response);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
            // response.body.products
            // response.body.facets
            /*
                                const itemsCategories = response.body.facets.find((item) => item.facetName === "Categories");
                                if (this.isLog) {
                                   // console.log('- srv --  PimalionCloudService.getCloudCategoriesList() itemsCategories -> %O', itemsCategories);
                                }
        
                                const itemData = itemsCategories.filters;
                                if (this.isLog) {
                                   // console.log('- srv --  PimalionCloudService.getCloudCategoriesList() itemData -> %O', itemData);
                                }
                                var i: number = 0;
                                var num: number = 0;
                                const categories = itemData.map(value => {
                                    i = i + 1;
                                    num = num + value.filterCount;
                                    // return new CategoryItem(i + '', value.filterValue, value.filterValue, value.filterCount);
                                    // mak ???
                                    return new CategoryItem(value.filterKey, value.filterValue, value.filterValue, value.filterCount);
        
                                })
            */
            const facets = response.body.facets;
            const { categories, categoriesNum } = this.getCategoriesList(facets);
            if (this.isLog) {
                console.log('- srv --  PimalionCloudService.getCloudCategoriesList() categories -> %O  num -> %o', categories, categoriesNum);
            }
            categoriesService.next(categories);
            return categories;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            console.log('- srv --  Error PimalionCloudService.getCloudCategoriesList() -> %O', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
        }));
    }
    // 01 Post Homepage Get all categories json
    getCloudCategoriesList_json(categoriesService) {
        // const url = `${environment.pimalionCloudUrl}/api/shop/categories`;
        // mak ???
        const url = 'assets/api/categories/categories_fr.json';
        if (this.isLog) {
            console.log('- srv -- PimalionCloudService.getCloudCategoriesList() -> %o ', url);
        }
        const httpOptions_cat = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
        };
        // return this.http.get<CategoryPimalion[]>(url, httpOptions_cat)
        return this.http.get(url, httpOptions_cat) // mak ???
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((items) => {
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getCloudCategoriesList() items -> %O', items);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(itemData => {
            var i = 0;
            const categories = itemData.map(value => {
                i = i + 1;
                // return new CategoryItem(i + '', value.filterValue, value.filterValue, value.filterCount);
                // mak ???
                return new CategoryItem(value.id, value.name, value.slug, value.items);
            });
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getCloudCategoriesList() categories -> %O', categories);
            }
            categoriesService.next(categories);
            return categories;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((items) => {
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getCloudCategoriesList() items(Categories) -> %O', items);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            console.log('- srv -- Error PimalionCloudService.getCloudCategoriesList() -> %O', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
        }));
    }
    getBrandsList(facets) {
        const itemsMarques = facets.find((item) => item.facetName === "Marques");
        if (this.isLog) {
            // console.log('- srv -- PimalionCloudService.getBrandsList() itemsMarques -> %O', itemsMarques);
        }
        const itemData = itemsMarques.filters;
        if (this.isLog) {
            // console.log('- srv -- PimalionCloudService.getBrandsList() itemData -> %O', itemData);
        }
        var i = 0;
        var num = 0;
        const brands = itemData.map(value => {
            i = i + 1;
            num = num + value.filterCount;
            // mak ??? value.filterCount - 1
            return new BrandItem(value.filterKey, value.filterValue, value.filterValue, value.filterCount - 1);
        });
        if (this.isLog) {
            // console.log('- srv -- PimalionCloudService.getBrandsList() brands -> %O  num -> %o', brands, num);
        }
        ;
        const brandsNum = num;
        return { brands, brandsNum };
    }
    // 02 Post Brands A list of brands
    getCloudBrandsList(brandsService) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pimalionCloudUrl}/api/shop/search`;
        const body = {
            page: 0,
            pageSize: 3,
        };
        if (this.isLog) {
            console.log('- srv --  PimalionCloudService.getCloudBrandsList()  url -> %o  body -> %o', url, body);
        }
        // return this.http.get<BrandPimalion[]>( url,  httpOptions)
        const mainHeaders = [];
        return this.http.post(url, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json'),
            responseType: 'json',
            observe: 'response'
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((response) => {
            if (this.isLog) {
                console.log('- srv --  PimalionCloudService.getCloudBrandsList() response -> %O', response);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
            // response.body.products
            // response.body.facets
            /*
                            const itemsMarques = response.body.facets.find((item) => item.facetName === "Marques");
                            if (this.isLog) {
                                console.log('- srv --  PimalionCloudService.getCloudBrandsList() itemsMarques -> %O', itemsMarques);
                            }
            
                            const itemData = itemsMarques.filters;
                            if (this.isLog) {
                                console.log('- srv --  PimalionCloudService.getCloudBrandsList() itemData -> %O', itemData);
                            }
                            var i: number = 0;
                            var num: number = 0;
            
                            const brands = itemData.map(value => {
                                i = i + 1;
                                num = num + value.filterCount;
                                return new BrandItem(value.filterKey, value.filterValue, value.filterValue, value.filterCount);
                            });
            */
            const facets = response.body.facets;
            const { brands, num } = this.getBrandsList(facets);
            if (this.isLog) {
                console.log('- srv --  PimalionCloudService.getCloudBrandsList() brands -> %O  num -> %o', brands, num);
            }
            brandsService.next(brands);
            return brands;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            console.log('- srv --  Error PimalionCloudService.getCloudBrandsList() -> %O', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
        }));
    }
    // 02 Post Brands A list of brands http get https://demo.sourcing.pm/backend/api/shop/brands
    getCloudBrandsList_get(brandsService) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pimalionCloudUrl}/api/shop/brands`;
        if (this.isLog) {
            console.log('- srv -- PimalionCloudService.getCloudBrandsList() url -> %o', url);
        }
        return this.http.get(url, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((items) => {
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getCloudBrandsList() items -> %O', items);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(itemData => {
            var i = 0;
            const brands = itemData.map(value => {
                i = i + 1;
                return new BrandItem(i + '', value.filterValue, value.filterValue, value.filterCount);
            });
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getCloudBrandsList() brands -> %O', brands);
            }
            brandsService.next(brands);
            return brands;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            console.log('- srv -- Error PimalionCloudService.getCloudBrandsList() -> %O', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
        }));
    }
    // 03 Post /api/shop/search Product list. All products
    getProductsList(body, categoriesService, brandsService) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pimalionCloudUrl}/api/shop/search`;
        if (!body) {
            /*
            body = {
                groupFields: [],
                selection: [],
                page: 0,
                pageSize: 12,
                isManaged: true,
                sort: [],
                productStates: []
            };
            */
            console.log('- srv -- Error PimalionCloudService.getProductsList() body -> NULL');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
        }
        // ???
        /*
                     const   bodyQuery = {
                                query : "vis",
                                groupFields: [],
                                selection: [],
                                page: body.page,
                                pageSize: body.pageSize,
                                isManaged: true,
                                sort: [],
                                productStates: []
                            };
                 body = bodyQuery;
        */
        if (this.isLog) {
            console.log('- srv -- PimalionCloudService.getProductsList() url -> %o  body -> %o', url, body);
        }
        const mainHeaders = [];
        return this.http.post(url, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json'),
            responseType: 'json',
            observe: 'response'
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
            if (this.isLog) {
                // console.log('- srv -- PimalionCloudService.getProductsList() tap response -> %O', data);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getProductsList() response -> %O', response);
            }
            const body = {
                items: response.body.products,
                sorts: response.body.sorts,
                total: Number(response.headers.get('X-Total-Count')),
                pages: Number(response.headers.get('X-Total-Pages')) //  as number,   // 10  // 6632  //
            };
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getProductsList() response body -> %O', body);
            }
            const facets = response.body.facets;
            const { categories, categoriesNum } = this.getCategoriesList(facets);
            const { brands, brandsNum } = this.getBrandsList(facets);
            if (this.isLog) {
                console.log('- srv --  PimalionCloudService.getProductsList() categories -> %O  categoriesNum -> %o', categories, categoriesNum);
                console.log('- srv --  PimalionCloudService.getProductsList() brands -> %O  brandsNum -> %o', brands, brandsNum);
            }
            // mak ???
            brandsService.next(brands);
            categoriesService.next(categories);
            return body;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            console.log('- srv -- Error PimalionCloudService.getProductsList() -> %O', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
        }));
    }
    // 04 Get The product detail page
    getProductDetailPage(productKey) {
        // const url = `${environment.pimalionCloudUrl}/pimalion_demo2_api/api/product/render/html/${productKey}?version=web`;
        // https://demo.sourcing.pm/backend/api/shop/product?id=ReMSlWcBq_r5-pCSVC-G
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pimalionCloudUrl}/api/shop/product?id=${productKey}`;
        if (this.isLog) {
            console.log('- srv -- PimalionCloudService.getProductDetailPage() url -> %o', url);
        }
        // productKey = 'Ipw9LHUBUvwcyS3bkdSh';
        return this.http.get(url, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((item) => {
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getProductDetailPage() items -> %O', item);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(itemData => {
            // var i: number = 0;
            return new ProductItem(itemData);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((item) => {
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getProductDetailPage() item(Product) -> %O', item);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            console.log('- srv -- Error PimalionCloudService.getProductDetailPage() -> %O', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(`<html><head>Product Detail Page</head> <body>Page not found </body></html>`);
        }));
    }
    getProductDetailPage_01(productKey) {
        // const url = `${environment.pimalionCloudUrl}/pimalion_demo2_api/api/product/render/html/${productKey}?version=web`;
        // https://demo.sourcing.pm/backend/api/shop/product?id=ReMSlWcBq_r5-pCSVC-G
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pimalionCloudUrl}/api/shop/product?id=${productKey}&action=Générer%20un%20titre`;
        if (this.isLog) {
            console.log('- srv -- PimalionCloudService.getProductDetailPage_01() url -> %o', url);
        }
        // productKey = 'Ipw9LHUBUvwcyS3bkdSh';
        return this.http.get(url, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((item) => {
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getProductDetailPage_01() item -> %O', item);
            }
        }), 
        /*
       map(itemData => {
           // var i: number = 0;
           return  new ProductItem(itemData);
       }), */
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((item) => {
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getProductDetailPage() item(Product) -> %O', item);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            console.log('- srv -- Error PimalionCloudService.getProductDetailPage() -> %O', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(`<html><head>Product Detail Page</head> <body>Page not found </body></html>`);
        }));
    }
    /*
      getProducts(body: any): Observable<any> {
    
        const url = `${environment.pimalionCloudUrl}/api/shop/search`;
    
        if (this.isLog) {
            console.log('- srv -- PimalionCloudService.getProductsList() url -> %o', url);
        }
        if (!body) {
    
                       console.log('- srv -- Error PimalionCloudService.getProductsList() body -> NULL');
                       return of([]);
                    }
    
        const mainHeaders = [];
    
        return this.http.post<any>( url, body, {
                headers: new HttpHeaders()
                  .set('Content-Type', 'application/json')
                  .set('Accept', 'application/json')
             , responseType: 'json'
             , observe: 'response'
            })
        .pipe(
                 map((response: any) => {
    
                    if (this.isLog) {
                        console.log('- srv -- PimalionCloudService.getProductsList() response -> %O', response);
                    }
                     // const keys = response.headers.keys();
    
                     // tslint:disable-next-line:no-shadowed-variable
    
                      if (this.isLog) {
                        console.log('- srv -- PimalionCloudService.getProductsList() response.body.tableValues -> %O', response.body.tableValues);
                      }
                     return response.body.tableValues;
                 }),
                catchError((err: any): any => {
                    console.log('- srv -- Error PimalionCloudService.getProductsList() -> %O', err);
                    return of([]);
                })
            );
        }
      */
    getRateValues(baseCode) {
        const url = `https://open.er-api.com/v6/latest/` + baseCode; // environment.currencyCodePrice;
        if (this.isLog) {
            console.log('- srv -- PimalionCloudService.getRateValues() url -> %o', url);
        }
        return this.http.get(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders()
                // .set('Content-Type', 'application/json')
                .set('Accept', '*/*')
            // , responseType: 'json'
            // , observe: 'response'
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
            if (this.isLog) {
                console.log('- srv -- PimalionCloudService.getRateValues() response -> %O', response);
                console.log('- srv -- PimalionCloudService.getRateValues() response.rates -> %O', response.rates);
            }
            return response.rates;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            console.log('- srv -- Error PimalionCloudService.getRateValues() -> %O', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
        }));
    }
    static { this.ɵfac = function PimalionCloudService_Factory(t) { return new (t || PimalionCloudService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: PimalionCloudService, factory: PimalionCloudService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 1871:
/*!******************************************************!*\
  !*** ./src/app/shared/api/products-list-pimalion.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCategoriesPimalion": () => (/* binding */ getCategoriesPimalion),
/* harmony export */   "getProductsListPimalion": () => (/* binding */ getProductsListPimalion),
/* harmony export */   "getProductsPimalion": () => (/* binding */ getProductsPimalion)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_fake_server_database_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/fake-server/database/products */ 4590);
/* harmony import */ var src_fake_server_database_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/fake-server/database/categories */ 3515);
/* harmony import */ var _pimalion_cloud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pimalion-cloud.service */ 1530);



 // database/products';
// import { shopCategoriesList, shopCategoriesTree } from 'src/fake-server/database/categories';


const isPtoductListPimalionLog = true;
// ???
/*
const brandsFilters_const = [
    {  name: 'LEGRAND', slug: 'LEGRAND',  count: 111},
    {  name: 'ARNOULD', slug: 'ARNOULD',  count: 222},
    {  name: 'BTICINO', slug: 'BTICINO', count: 333},
    {  name: 'PLANET WATTOHM', slug: 'PLANET WATTOHM', count: 444}
];
*/
/*
export getCategoriesPimalion_Old(pimalionCategories: any): Observable<Category[]> {

    // console.log(`- fn --  getCategoriesPimalion pimalionCategories -> %O`, pimalionCategories);

    const pimalionCategoriesCor: Category[] = [];

    pimalionCategories.tableValues.forEach(item => {

        const categoryCor: Category = {
            id: item.id,
            type: 'shop',
            name: getPimalionValue(item.values, 'Nomenclature Famille fournisseur'),
            slug: getPimalionValue(item.values, 'Nomenclature Famille fournisseur'),
            path: null,
            image: 'assets/images/logos/logo-1.png',        // ???
            items: getPimalionValue(item.values, 'Articles'),
            customFields: {}
        };

        // console.log(`- fn --  getCategoriesPimalion brandCor -> %O`, categoryCor);
        pimalionCategoriesCor.push(categoryCor);
    });


    return timer(0).pipe(map(() => JSON.parse(JSON.stringify(pimalionCategoriesCor))));
}
*/
function getCategoriesPimalion(pimalionCategories) {
    // if (isPtoductListPimalionLog) {
    //     console.log(`- fn --  getCategoriesPimalion() pimalionCategories -> %O`, pimalionCategories);
    // }
    const pimalionCategoriesCor = [];
    for (let i = 0; i < pimalionCategories.length; i++) {
        const categoryCor = {
            id: (i).toString(),
            type: 'shop',
            name: pimalionCategories[i].filterValue,
            slug: pimalionCategories[i].filterValue,
            path: null,
            image: 'assets/images/logos/logo-1.png',
            items: pimalionCategories[i].filterCount,
            customFields: {}
        };
        pimalionCategoriesCor.push(categoryCor);
    }
    ;
    if (isPtoductListPimalionLog) {
        console.log(`- fn -- getCategoriesPimalion() pimalionCategoriesCor -> %O`, pimalionCategoriesCor);
    }
    // setShopCategoriesDef(pimalionCategoriesCor);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => JSON.parse(JSON.stringify(pimalionCategoriesCor))));
}
/*
export function getCategyPimalion(pimalionCategories: CategoryPimalion[], slug: string): Observable<Category> {

    // if (isPtoductListPimalionLog) {
    //     console.log(`- fn -- getCategyPimalion() pimalionCategories -> %O  slug -> %o`, pimalionCategories, slug);
    // }

    // const pimalionCategoriesCor: Category[] = [];

     for (let i = 0; i < pimalionCategories.length; i++) {

        const categoryCor: Category = {
            id: (i).toString(),     // ???
            type: 'shop',
            name: pimalionCategories[i].filterValue,
            slug: pimalionCategories[i].filterValue,
            path: null,
            image: 'assets/images/logos/logo-1.png',        // ???
            items: pimalionCategories[i].filterCount,     // ???
            customFields: {}
        };

        if (categoryCor.slug === slug) {

            if (isPtoductListPimalionLog) {
                console.log(`- fn -- getCategyPimalion() categoryCor -> %O`, categoryCor);
            }

            return timer(0).pipe(map(() => JSON.parse(JSON.stringify(categoryCor))));
        }
    };

    const categoryEmpty: Category = {
        id: (0).toString(),     // ???
        type: 'shop',
        name: 'NotCategory',
        slug: 'NotCategory',
        path: null,
        image: 'assets/images/logos/logo-1.png',        // ???
        items: 0,     // ???
        customFields: {}
    };
    return of(categoryEmpty);
}
*/
/*
export function getBrandsPimalion(pimalionBrands: BrandPimalion[]): Observable<Brand[]> {

    // if (isPtoductListPimalionLog) {
    //     console.log(`- fn -- getBrandsPimalion() pimalionBrands -> %O`, pimalionBrands);
    // }

    const pimalionBrandsCor: Brand[] = [];

        var id = 0;

        pimalionBrands.forEach(item => {

            const brandCor: Brand = {
                id: (++id).toString(), // ++lastBrandId,
                name: item.filterValue,
                slug: item.filterValue,
                image: 'assets/images/logos/logo-1.png',        // ???
                count: item.filterCount ,   // ???
            };

        pimalionBrandsCor.push(brandCor);
    });

    if (isPtoductListPimalionLog) {
        console.log(`- fn -- getBrandsPimalion() pimalionBrandsCor -> %O`, pimalionBrandsCor);
    }

    // setShopBrandDef(pimalionBrandsCor);

    return timer(0).pipe(map(() => JSON.parse(JSON.stringify(pimalionBrandsCor))));
}
*/
/*
export function getProductHtmlPimalion(productId: string, pimalionItemHtml: string): Observable<Product> {

    if (isPtoductListPimalionLog) {
         console.log(`- fn --  getProductHtmlPimalion pimalionItemHtml -> %O`, pimalionItemHtml);
    }

    const begPosition = pimalionItemHtml.indexOf('<body>', 0) + 6;
    // const begPosition = pimalionItemHtml.indexOf('</style>', 0) + 8;

    const endPosition = pimalionItemHtml.indexOf('</body>', begPosition) - 1;

    if (isPtoductListPimalionLog) {
        console.log(`- fn -- getProductHtmlPimalion begPosition -> %O   endPosition -> %O`, begPosition, endPosition);
    }

    let pimalionItemHtmlCor = pimalionItemHtml.substring(begPosition, endPosition);

    do {
        pimalionItemHtmlCor = pimalionItemHtmlCor.replace('<img src=', '<img width="30%" src=');
      } while ( pimalionItemHtmlCor.indexOf('<img src=') > 0);


    const productCor: Product = {
        id: productId,
        slug: productId,
        name: productId,
        sku:  null,
        price: null,
        compareAtPrice: null,
        images: null,
        badges: [],                         // badges:  ['sale', 'hot', 'new']
        rating: null,
        reviews: null,
        availability: null,                          // item.attributes['fabdis'].value,              // доступность
        brand: null,                                       // item.values['Marque'].value,
        categories: null,
        attributes: null,
        customFields: null,

        pimalionReviews: null,

        pimalionHtml : pimalionItemHtmlCor,
    };

    if (isPtoductListPimalionLog) {
        console.log(`- fn -- getProductHtmlPimalion pimalionItemHtmlCor -> %O`, pimalionItemHtmlCor);
    }

    return timer(0).pipe(map(() => JSON.parse(JSON.stringify(productCor))));
}
*/
function getCategoriesDef(categories) {
    let categoryDef = categories.map(({ name, slug, items }) => ({ name, slug, items }));
    // console.log('- fn -- getCategoriesDef() categoryDef -> %O', categoryDef);
    return categoryDef;
}
/**
 * Returns products list.
 *
 * @param categorySlug Unique human-readable category identifier.
 * @param options Options list.
 */
function getProductsListPimalion(categoriesService, brandsService, categorySlug, options, pimalionBody) {
    const page = options.page || 1;
    const limit = options.limit || 12;
    const sort = options.sort || 'default';
    const filterValues = options.filterValues || {};
    const filters = [];
    const filtersDef = [
        { type: 'range', slug: 'price', name: 'Price' },
        //  {type: 'check', slug: 'brand', name: 'Marques', items: brands},
        // {type: 'check', slug: 'brand', name: 'Brand'},
        // {type: 'radio', slug: 'discount', name: 'With Discount'},
        // {type: 'color', slug: 'color', name: 'Color'},
    ];
    if (isPtoductListPimalionLog) {
        console.log(`- fn -- getProductsListPimalion() (1) pimalionBody -> %O`, pimalionBody);
        // console.log(`- fn -- getProductsListPimalion() (1) filtersDef -> %O`, filtersDef);
    }
    const pimalionItemsCor = [];
    pimalionBody.items.forEach(item => {
        if (isPtoductListPimalionLog) {
            //  console.log(`- fn -- getProductsListPimalion() (2) item -> %O`, item);
        }
        const productCor = new _pimalion_cloud_service__WEBPACK_IMPORTED_MODULE_2__.ProductItem(item);
        if (isPtoductListPimalionLog) {
            // console.log('- fn -- getProductsListPimalion() (3) productCor -> %O`, productCor);
        }
        pimalionItemsCor.push(productCor);
    });
    if (isPtoductListPimalionLog) {
        console.log('- fn -- getProductsListPimalion() (4) pimalionItemsCor -> %O', pimalionItemsCor);
    }
    // get items Pimalion
    let items = src_fake_server_database_products__WEBPACK_IMPORTED_MODULE_0__.products.slice();
    const categories = categoriesService.CategoriesChangedSub$.getValue();
    if (isPtoductListPimalionLog) {
        console.log('- fn -- getProductsListPimalion() (4b) categories -> %O', categories);
    }
    let [shopCategoriesTree, shopCategoriesList] = (0,src_fake_server_database_categories__WEBPACK_IMPORTED_MODULE_1__.walkTree)('shop', getCategoriesDef(categories));
    const categoriesFilter_ = categories.map(x => {
        return { type: 'parent', category: x };
    });
    const categoriesFilter = categoriesFilter_;
    if (isPtoductListPimalionLog) {
        console.log('- fn -- getProductsListPimalion() categoriesFilter -> %o', categoriesFilter);
    }
    // mak ???
    // Make filters.
    if (categorySlug === null) {
        /*
        filters.push({
            type: 'categories',
            slug: 'categories',
            name: 'Categories',
            root: true,
            items: [
              // mak  ...shopCategoriesTree.map(x => makeCategoryFilterItem('child', x)),
              ...shopCategoriesTree.map(x => makeCategoryFilterItem('child', x)),
            ],
        });
        */
        filters.push({
            type: 'categories',
            slug: 'categories',
            name: 'Categories',
            root: true,
            items: [
                // mak  ...shopCategoriesTree.map(x => makeCategoryFilterItem('child', x)),
                ...categories.map(x => makeCategoryFilterItem('child', x)),
            ],
        });
    }
    else {
        const category = shopCategoriesList.find(x => x.slug === categorySlug);
        if (!category) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse({ status: 404, statusText: 'Page Not Found' }));
        }
        /*
                filters.push({
                    type: 'categories',
                    slug: 'categories',
                    name: 'Categories',
                    root: false,
                    items: [
                        ...category.parents.map(x => makeCategoryFilterItem('parent', x)),
                        makeCategoryFilterItem('current', category),
                        ...category.children.map(x => makeCategoryFilterItem('child', x)),
        
                    ],
                });
                */
        filters.push({
            type: 'categories',
            slug: 'categories',
            name: 'Categories',
            root: true,
            items: [
                // mak  ...shopCategoriesTree.map(x => makeCategoryFilterItem('child', x)),
                makeCategoryFilterItem('current', category),
                ...categories.map(x => makeCategoryFilterItem('child', x)),
            ]
        });
    }
    // Apply values to filters.
    // ???
    const brandsFilter = brandsService.BrandsChangedSub$.getValue();
    if (isPtoductListPimalionLog) {
        console.log('- fn -- getProductsListPimalion() (4.b) brandsFilter -> %O', brandsFilter);
    }
    let filterBrand = { type: 'check', slug: 'brand', name: 'Marques', value: [], items: brandsFilter };
    filters.push(filterBrand);
    filters.forEach(filter => {
        if (filter.slug in filterValues && 'value' in filter) {
            filter.value = parseFilterValue(filter, filterValues[filter.slug]);
        }
    });
    makeFilters(filtersDef, items).forEach(x => filters.push(x));
    // Calculate items count for filter values.
    filters.forEach(filter => {
        if (filter.type !== 'check' && filter.type !== 'color' && filter.type !== 'radio') {
            return;
        }
        const counts = calcProductsForFilterValues(filter, filters, items);
        filter.items.forEach(item => {
            if (item.slug in counts) {
                item.count = counts[item.slug];
            }
        });
    });
    // Apply filters to items list.
    items = items.filter(product => {
        return filters.reduce((result, filter) => result && testProduct(filter, product), true);
    });
    // Sort items array.
    items = items.sort((a, b) => {
        if (['name_asc', 'name_desc'].includes(sort)) {
            if (a.name === b.name) {
                return 0;
            }
            return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
        }
        return 0;
    });
    // const pimalionTotalProduct = pimalionBody.total;
    // Preparing data for a response.
    const start = (page - 1) * limit;
    const end = start + limit;
    const total = pimalionBody.total; //  pimalionTotalProduct; // items.length;
    const pages = pimalionBody.pages; //  Math.ceil(total / limit);
    const from = (page - 1) * limit + 1;
    const to = Math.max(Math.min(page * limit, total), from);
    // items = items.slice(start, end);
    const response = {
        items: pimalionItemsCor,
        page,
        limit,
        total,
        pages,
        from,
        to,
        sort,
        filters,
        filterValues,
    };
    if (isPtoductListPimalionLog) {
        console.log(`- fn -- getProductsListPimalion() (5) response -> %O`, response);
    }
    // return timer(350).pipe(map(() => JSON.parse(JSON.stringify(response))));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => JSON.parse(JSON.stringify(response))));
}
function getPimalionValue(values, key) {
    let value = null;
    key = key.toLowerCase().trim();
    values.forEach(item => {
        if (item.key.toLowerCase().trim() === key) {
            value = item.value;
        }
    });
    return value;
}
function getFilterValue(type, slug, product, defaultValue = null) {
    if (type === 'range' && slug === 'price') {
        return product.price;
    }
    else if (type === 'check' && slug === 'brand') {
        if (product.brand && typeof product.brand === 'object') {
            return [{ slug: product.brand.slug, name: product.brand.name }];
        }
    }
    else if (type === 'check' && slug === 'discount') {
        const items = [
            { slug: 'any', name: 'Any' },
        ];
        if (product.compareAtPrice) {
            items.push({ slug: 'yes', name: 'Yes' });
        }
        else {
            items.push({ slug: 'no', name: 'No' });
        }
        return items;
    }
    else if (type === 'check' || type === 'radio') {
        if (!('attributes' in product) || !Array.isArray(product.attributes)) {
            return defaultValue;
        }
        const attribute = product.attributes.find(x => x.slug === slug);
        if (!attribute) {
            return defaultValue;
        }
        return attribute.values.map(x => ({ slug: x.slug, name: x.name }));
    }
    return defaultValue;
}
function getRangeValue(slug, product, defaultValue = null) {
    return getFilterValue('range', slug, product, defaultValue);
}
function getListValues(slug, product, defaultValue = []) {
    return getFilterValue('check', slug, product, defaultValue);
}
function getColorCode(slug) {
    switch (slug) {
        case 'white': return '#fff';
        case 'silver': return '#d9d9d9';
        case 'light-gray': return '#b3b3b3';
        case 'gray': return '#808080';
        case 'dark-gray': return '#666';
        case 'coal': return '#4d4d4d';
        case 'black': return '#262626';
        case 'red': return '#ff4040';
        case 'orange': return '#ff8126';
        case 'yellow': return '#ffd333';
        case 'pear-green': return '#becc1f';
        case 'green': return '#8fcc14';
        case 'emerald': return '#47cc5e';
        case 'shamrock': return '#47cca0';
        case 'shakespeare': return '#47cccc';
        case 'blue': return '#40bfff';
        case 'dark-blue': return '#3d6dcc';
        case 'violet': return '#7766cc';
        case 'purple': return '#b852cc';
        case 'cerise': return '#e53981';
    }
    return '#000';
}
function parseFilterValue(filter, value) {
    switch (filter.type) {
        case 'range':
            return value.split('-').map(x => parseFloat(x));
        case 'check':
        case 'color':
            return value.trim() === '' ? [] : value.split(',').map(x => x.trim());
    }
    return value;
}
function testProduct(filter, product) {
    if (filter.type === 'range') {
        const value = getRangeValue(filter.slug, product);
        if (value === null || value < filter.value[0] || value > filter.value[1]) {
            return false;
        }
    }
    else if (filter.type === 'check' || filter.type === 'color') {
        const values = getListValues(filter.slug, product);
        return filter.value.length < 1 || filter.value.reduce((isMatched, value) => {
            return isMatched || !!values.find(x => x.slug === value);
        }, false);
    }
    else if (filter.type === 'radio') {
        const values = getListValues(filter.slug, product);
        return !!values.find(x => x.slug === filter.value);
    }
    return true;
}
function calcProductsForFilterValues(filter, allFilters, products) {
    const result = {};
    products = products.filter(product => allFilters.reduce((isMatched, eachFilter) => {
        return isMatched && (filter.slug === eachFilter.slug || testProduct(eachFilter, product));
    }, true));
    products.forEach(product => {
        switch (filter.type) {
            case 'check':
            case 'color':
            case 'radio':
                getListValues(filter.slug, product).forEach(value => {
                    if (!(value.slug in result)) {
                        result[value.slug] = 0;
                    }
                    result[value.slug] += 1;
                });
                break;
        }
    });
    return result;
}
function makeFilters(filtersDef, products) {
    const result = [];
    filtersDef.forEach(filterDef => {
        if (filterDef.type === 'range') {
            let max = products.reduce((value, product) => Math.max(value, getRangeValue(filterDef.slug, product, value)), 0);
            let min = products.reduce((value, product) => Math.min(value, getRangeValue(filterDef.slug, product, value)), max);
            /** Calculates the number of digits for rounding. */
            let digit = Math.max(Math.ceil(max).toString().length - 2, 1);
            digit = Math.pow(10, digit);
            max = Math.ceil(max / digit) * digit;
            min = Math.floor(min / digit) * digit;
            result.push({
                type: filterDef.type,
                slug: filterDef.slug,
                name: filterDef.name,
                value: [min, max],
                // options
                min,
                max,
            });
        }
        else if (filterDef.type === 'check' || filterDef.type === 'radio' || filterDef.type === 'color') {
            const itemsBySlug = {};
            let items = [];
            products.forEach(product => {
                getListValues(filterDef.slug, product).forEach(value => {
                    if (value.slug in itemsBySlug) {
                        return;
                    }
                    const item = makeFilterItem(filterDef.type, value);
                    itemsBySlug[value.slug] = item;
                    items.push(item);
                });
            });
            if (items.length < 1 || (filterDef.type === 'radio' && items.length < 2)) {
                return;
            }
            items = sortFilterItems(filterDef.type, filterDef.slug, items);
            result.push({
                type: filterDef.type,
                slug: filterDef.slug,
                name: filterDef.name,
                value: filterDef.type === 'radio' ? items[0].slug : [],
                items,
            });
        }
    });
    return result;
}
function makeFilterItem(filterType, value) {
    switch (filterType) {
        case 'check':
        case 'radio':
            return {
                slug: value.slug,
                name: value.name,
                count: 0,
            };
        case 'color':
            return {
                slug: value.slug,
                name: value.name,
                count: 0,
                color: getColorCode(value.slug),
            };
    }
}
function makeCategoryFilterItem(type, category) {
    return {
        slug: category.slug,
        name: category.name,
        type,
        category: { ...category, children: null, parents: null },
        count: category.items,
    };
}
function sortFilterItems(filterType, filterSlug, items) {
    if (filterType === 'color' && filterSlug === 'color') {
        const attributeDef = src_fake_server_database_products__WEBPACK_IMPORTED_MODULE_0__.attributesDef.find(x => x.slug === filterSlug);
        if (attributeDef) {
            const values = attributeDef.values.map(x => x.slug);
            return items.sort((a, b) => {
                return values.indexOf(a.slug) - values.indexOf(b.slug);
            });
        }
    }
    return items;
}
function getProductsPimalion(categorySlug, options, pimalionBody) {
    if (isPtoductListPimalionLog) {
        console.log(`- fn -- getProductsPimalion pimalionBody -> %O`, pimalionBody);
    }
    const pimalionItemsCor = [];
    pimalionBody.items.forEach(item => {
        if (isPtoductListPimalionLog) {
            //  console.log(`- fn --  getProductsPimalion item -> %O`, item);
        }
        const productCor = new _pimalion_cloud_service__WEBPACK_IMPORTED_MODULE_2__.ProductItem(item);
        pimalionItemsCor.push(productCor);
    });
    //}
    if (isPtoductListPimalionLog) {
        console.log(`- fn -- getProductsPimalion productCor -> %O`, pimalionItemsCor);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(pimalionItemsCor);
}


/***/ }),

/***/ 8781:
/*!********************************************!*\
  !*** ./src/app/shared/api/shop.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopService": () => (/* binding */ ShopService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 8772);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _interfaces_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/filter */ 7976);
/* harmony import */ var _fake_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../fake-server */ 4083);
/* harmony import */ var src_fake_server_database_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/fake-server/database/products */ 4590);
/* harmony import */ var _products_list_pimalion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-list-pimalion */ 1871);
/* harmony import */ var src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/fake-server/database/brands */ 2532);
/* harmony import */ var src_fake_server_database_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/fake-server/database/categories */ 3515);
/* harmony import */ var _interfaces_currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interfaces/currency */ 9889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pimalion_cloud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pimalion-cloud.service */ 1530);
/* harmony import */ var _brands_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./brands.service */ 6648);
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categories.service */ 9383);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/currency.service */ 8910);






// https://demo.sourcing.pm/backend/swagger/ui/index#/Shop










// 'demo.sourcing.pm'; // 'demo.sourcing.pm';  'fake-server', 'json'
// const mode: string = getModeSource();
// Set the http options
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpHeaders({ "Content-Type": "application/json" })
};
class ShopService {
    constructor(http, pimalionCloudService, brandsService, categoriesService, currencyService) {
        this.http = http;
        this.pimalionCloudService = pimalionCloudService;
        this.brandsService = brandsService;
        this.categoriesService = categoriesService;
        this.currencyService = currencyService;
        this.isLog = true;
        this.delayTest = 0;
    }
    /**
     * Returns popular brands.
     */
    getPopularBrands() {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/brands/popular.json
         */
        // return this.http.get<Brand[]>('https://example.com/api/shop/brands/popular.json');
        // This is for demonstration purposes only. Remove it and use the code above.
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getBrands)();
                break;
            case 'json':
                return this.http.get('assets/api/brands/brands.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService.getPopularBrands() Brands -> %o', n);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                return this.pimalionCloudService.getCloudBrandsList(this.brandsService);
                break;
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getBrands)();
        }
    }
    getCategoriesList() {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories/popular.json
         */
        // return this.http.get<Brand[]>('https://example.com/api/shop/categories/popular.json');
        // This is for demonstration purposes only. Remove it and use the code above.
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                // mak ???
                const categories = (0,src_fake_server_database_categories__WEBPACK_IMPORTED_MODULE_5__.getCategoriesTree_)('shop', null, 1);
                this.categoriesService.next(categories);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(categories);
                break;
            case 'jsoncategories':
                return this.http.get('assets/api/categories/categories.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(categories => {
                    this.categoriesService.next(categories);
                    if (this.isLog) {
                        console.log('- srv -- ShopService.getCategoriesList() categories -> %o', categories);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                return this.pimalionCloudService.getCloudCategoriesList(this.categoriesService)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(categories => {
                    // this.categoriesService.next(categories);
                    // if (this.isLog)  {
                    //     console.log('- srv -- ShopService.getCategoriesList() categories -> %o', categories)
                    // }
                }));
                ;
                break;
            default:
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
        }
    }
    /**
     * Returns category object by slug.
     *
     * @param slug - Unique human-readable category identifier.
     */
    getCategory(slug) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories/power-tools.json
         *
         * where:
         * - power-tools = slug
         */
        // return this.http.get<Category>(`https://example.com/api/shop/categories/${slug}.json`);
        // This is for demonstration purposes only. Remove it and use the code above.
        if (this.isLog) {
            console.log('- srv -- ShopService.getCategory() slug -> %o', slug);
        }
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getShopCategory)(slug);
                break;
            case 'json':
                return this.http.get(`assets/api/categories/category_1.json`)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService.getCategory()  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                return this.getCategoriesList()
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(data => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService.getCategory() data -> %o   slug -> %o', data, slug);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.find)((data) => data.slug === slug), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(data => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService.getCategory() data(Category) -> %o   slug -> %o', data, slug);
                    }
                }));
                break;
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getShopCategory)(slug);
        }
    }
    /**
     * Returns a category tree.
     *
     * @param parent - If a parent is specified then its descendants will be returned.
     * @param depth  - Maximum depth of category tree.
     */
    getCategories(categoriesService, parent = null, depth = 0) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories.json?parent=latest-news&depth=1
         *
         * where:
         * - parent = parent.slug
         * - depth  = depth
         */
        // const params: {[param: string]: string} = {
        //     parent: parent.slug,
        //     depth: depth.toString(),
        // };
        //
        // return this.http.get<Category[]>('https://example.com/api/shop/categories.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        // return getShopCategoriesTree(parent ? parent.slug : null, depth);
        if (this.isLog) {
            console.log('- srv -- ShopService.getCategories() parent -> %o  depth -> %o', parent, depth);
            console.log('- srv -- ShopService.getCategories() mode -> %o', (0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)());
        }
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                // mak ???
                const categories = (0,src_fake_server_database_categories__WEBPACK_IMPORTED_MODULE_5__.getCategoriesTree_)('shop', parent ? parent.slug : null, depth);
                this.categoriesService.next(categories);
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getShopCategoriesTree)(parent ? parent.slug : null, depth);
            case 'json':
                return this.http.get('assets/api/categories/categories.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(categories => {
                    // mak ???
                    this.categoriesService.next(categories);
                    if (this.isLog) {
                        console.log('- srv -- ShopService  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                return this.pimalionCloudService.getCloudCategoriesList(this.categoriesService);
                break;
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getShopCategoriesTree)(parent ? parent.slug : null, depth);
        }
    }
    /**
     * Returns an array of the specified categories.
     *
     * @param slugs - Array of slugs.
     * @param depth - Maximum depth of category tree.
     */
    getCategoriesBySlug(categoriesService, slugs, depth = 0) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories.json?slugs=power-tools,measurement&depth=1
         *
         * where:
         * - slugs = slugs.join(',')
         * - depth = depth
         */
        // const params: {[param: string]: string} = {
        //     slugs: slugs.join(','),
        //     depth: depth.toString(),
        // };
        //
        // return this.http.get<Category[]>('https://example.com/api/shop/categories.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                const categories = (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getShopCategoriesBySlugs)(slugs, depth);
                return categories;
                break;
            case 'json':
                return this.http.get('assets/api/categories/categories.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                return this.pimalionCloudService.getCloudCategoriesList(this.categoriesService);
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getShopCategoriesBySlugs)(slugs, depth);
        }
    }
    /**
     * Returns paginated products list.
     * If categorySlug is null then a list of all products should be returned.
     *
     * @param categorySlug         - Unique human-readable category identifier.
     * @param options              - Options.
     * @param options.page         - Page number (optional).
     * @param options.limit        - Maximum number of items returned at one time (optional).
     * @param options.sort         - The algorithm by which the list should be sorted (optional).
     * @param options.filterValues - An object whose keys are filter slugs and values ​​are filter values (optional).
     */
    getProductsList(categorySlug, options) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products.json?category=screwdriwers&page=2&limit=12&sort=name_desc&filter_price=500-1000
         *
         * where:
         * - category     = categorySlug
         * - page         = options.page
         * - limit        = options.limit
         * - sort         = options.sort
         * - filter_price = options.filterValues.price
         */
        // const params: {[param: string]: string} = {};
        //
        // if (categorySlug) {
        //     params.category = categorySlug;
        // }
        // if ('page' in options) {
        //     params.page = options.page.toString();
        // }
        // if ('limit' in options) {
        //     params.limit = options.limit.toString();
        // }
        // if ('sort' in options) {
        //     params.sort = options.sort;
        // }
        // if ('filterValues' in options) {
        //     Object.keys(options.filterValues).forEach(slug => params[`filter_${slug}`] = options.filterValues[slug]);
        // }
        //
        // return this.http.get<ProductsList>('https://example.com/api/products.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        if (this.isLog) {
            console.log('- srv -- ShopService.getProductsList()  categorySlug -> %o options -> %o', categorySlug, options);
        }
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getProductsList)(categorySlug, options);
                break;
            case 'json':
                // ???
                return this.http.get('assets/api/products/productslist.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                const pagePimalion = options.page || 1;
                const limitPimalion = options.limit || 12;
                // const sort = options.sort || 'default';
                const filters = options.filtersBrand || [];
                // filterValues: {brand: 'NICOLL,HAGER'}
                var categoryFilters = categorySlug === null ? [] : [{ 'key': 'Categories', 'value': categorySlug }];
                const body = {
                    // groupFields: [],
                    // selection: [],
                    // filters: [{'key': 'Marques', 'value': 'NICOLL'}],
                    // mak ???
                    // let result = condition ? value1 : value2;
                    filters: filters.length == 0 ? categoryFilters : categoryFilters.concat([filters[0]]),
                    // sort: [],  // ???
                    page: pagePimalion - 1,
                    pageSize: limitPimalion
                    //  productStates: []
                };
                if (this.isLog) {
                    // console.log(`- srv -- ShopService.getProductsList() body -> %O`, body);
                }
                return this.pimalionCloudService.getProductsList(body, this.categoriesService, this.brandsService)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(pimalionBody => {
                    if (this.isLog) {
                        console.log(`- srv -- ShopService.getProductsList() Input categorySlug -> %O options -> %O`, categorySlug, options);
                        console.log(`- srv -- ShopService.getProductsList() Input pimalionBody -> %O `, pimalionBody);
                    }
                    const productsList = (0,_products_list_pimalion__WEBPACK_IMPORTED_MODULE_3__.getProductsListPimalion)(this.categoriesService, this.brandsService, categorySlug, options, pimalionBody);
                    return productsList;
                }));
                break;
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getProductsList)(categorySlug, options);
        }
    }
    getTypeProducts(categorySlug, options, count) {
        const pagePimalion = options.page || 1;
        const limitPimalion = options.limit || count;
        const sort = options.sort || [];
        const query = options.query || '';
        const filters = options.filtersBrand || [];
        // categorySlug ???
        var categoryFilters = categorySlug === null ? [] : [{ 'key': 'Categories', 'value': categorySlug }];
        const body = {
            //groupFields: [],
            //selection: [],
            // filters: [{'key': 'Marques', 'value': 'NICOLL'}],
            // mak ???
            // let result = condition ? value1 : value2;
            filters: filters.length == 0 ? categoryFilters : categoryFilters.concat([filters[0]]),
            page: pagePimalion - 1,
            pageSize: limitPimalion,
            //isManaged: true,
            //sort: sort,                  // options.sort
            //productStates: []
        };
        if (query != '') {
            body["query"] = query;
        }
        ;
        if (this.isLog) {
            console.log(`- srv -- ShopService.getTypeProducts() body -> %O`, body);
        }
        return this.pimalionCloudService.getProductsList(body, this.categoriesService, this.brandsService)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(productsBody => {
            if (this.isLog) {
                //  console.log(`- srv -- ShopService.getTypeProducts().getProducts() Input categorySlug -> %O options -> %O`, categorySlug, options);
                //  console.log(`- srv -- ShopService.getTypeProducts().getProducts() Input products -> %O`, productsBody);
            }
            const productsPimalion = (0,_products_list_pimalion__WEBPACK_IMPORTED_MODULE_3__.getProductsPimalion)(categorySlug, options, productsBody);
            if (this.isLog) {
                // console.log(`- srv -- ShopService.getTypeProducts().getProducts() Output productsPimalion -> %O`, productsPimalion);
            }
            return productsPimalion;
        }));
    }
    getProduct(productSlug) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products/electric-planer-brandix-kl370090g-300-watts.json
         *
         * where:
         * - electric-planer-brandix-kl370090g-300-watts = productSlug
         */
        // return this.http.get<Product>(`https://example.com/api/products/${productSlug}.json`);
        // This is for demonstration purposes only. Remove it and use the code above.
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getProduct)(productSlug);
                break;
            case 'json':
                return this.http.get(`assets/api/products/product_1.json`)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                const product = (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getProduct)(productSlug);
                return product.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(data => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService.getProduct() Input  productSlug -> %O ', productSlug);
                        console.log('- srv -- ShopService.getProduct() Output product -> %O', data);
                    }
                }));
                break;
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getProduct)(productSlug);
        }
    }
    getProductHtml(productId) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products/electric-planer-brandix-kl370090g-300-watts.json
         *
         * where:
         * - electric-planer-brandix-kl370090g-300-watts = productSlug
         */
        // return this.http.get<Product>(`https://example.com/api/products/${productSlug}.json`);
        // This is for demonstration purposes only. Remove it and use the code above.
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                // ???
                break;
            case 'json':
                // ???
                break;
            case 'demo.sourcing.pm':
                return this.pimalionCloudService.getProductDetailPage(productId)
                    .pipe(
                /*
                switchMap(pimalionItemHtml => {

                    if (this.isLog)  {
                        console.log(`- srv --  ShopService.getProduct() Input productId -> %O`, productId);
                        // console.log(`- srv --  ShopService.getProduct() Input pimalionItemHtml-> %O`, pimalionItemHtml);
                    }
                    const productCor = getProductHtmlPimalion(productId, pimalionItemHtml);

                    return productCor;
                })
                */
                );
                break;
            default:
            // ???
        }
    }
    getBestsellers(limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/bestsellers.json?limit=3
         *
         * where:
         * - limit = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/bestsellers.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getBestsellers)(limit);
                break;
            case 'json':
                return this.http.get('assets/api/products/bestsellers.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                if (this.isLog) {
                    // console.log('- srv -- ShopService.getBestsellers()')
                }
                const options = {
                    page: 0,
                    limit: limit,
                    sort: 'default'
                };
                return this.getTypeProducts(null, options, 12);
                break;
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getBestsellers)(limit);
        }
    }
    getTopRated(limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/top-rated.json?limit=3
         *
         * where:
         * - limit = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/top-rated.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getTopRated)(limit);
                break;
            case 'json':
                return this.http.get('assets/api/products/top-rated.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                if (this.isLog) {
                    console.log('- srv -- ShopService.getTopRated() ');
                }
                const options = {
                    page: 0,
                    limit: limit,
                    sort: 'default'
                };
                return this.getTypeProducts(null, options, 12);
                break;
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getTopRated)(limit);
        }
    }
    getSpecialOffers(limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/special-offers.json?limit=3
         *
         * where:
         * - limit = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/special-offers.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getSpecialOffers)(limit);
                break;
            case 'json':
                return this.http.get('assets/api/products/special-offers.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                if (this.isLog) {
                    console.log('- srv -- ShopService.getSpecialOffers()');
                }
                const options = {
                    page: 0,
                    limit: limit,
                    sort: 'default'
                };
                return this.getTypeProducts(null, options, 12);
                break;
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getSpecialOffers)(limit);
        }
    }
    getFeaturedProducts(categorySlug = null, limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/featured.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (category) {
        //     params.category = category;
        // }
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/featured.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getFeatured)(categorySlug, limit);
                break;
            case 'json':
                return this.http.get('assets/api/products/featured.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                if (this.isLog) {
                    console.log('- srv -- ShopService.getFeaturedProducts()');
                }
                const options = {
                    page: 0,
                    limit: limit,
                    sort: 'default'
                };
                return this.getTypeProducts(categorySlug, options, 12);
                break;
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getFeatured)(categorySlug, limit);
        }
    }
    getLatestProducts(categorySlug = null, limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/latest.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (category) {
        //     params.category = category;
        // }
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/latest.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getLatestProducts)(categorySlug, limit);
                break;
            case 'json':
                return this.http.get('assets/api/products/latest.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                if (this.isLog) {
                    console.log('- srv -- ShopService.getLatestProducts() ');
                }
                const options = {
                    page: 0,
                    limit: limit,
                    sort: 'default'
                };
                return this.getTypeProducts(categorySlug, options, 12);
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getLatestProducts)(categorySlug, limit);
        }
    }
    getRelatedProducts(product) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/related.json?for=water-tap
         *
         * where:
         * - for = product.slug
         */
        // const params: {[param: string]: string} = {
        //     for: product.slug,
        // };
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/related.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        const limit = 8; // ???
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getRelatedProducts)(product);
                break;
            case 'json':
                return this.http.get('assets/api/products/related.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                if (this.isLog) {
                    console.log('- srv -- ShopService.getRelatedProducts()');
                }
                const options = {
                    page: 0,
                    limit: limit,
                    sort: 'default'
                };
                return this.getTypeProducts(null, options, 12);
                break;
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_1__.getRelatedProducts)(product);
        }
    }
    getSuggestions(query, limit, categorySlug = null, filterOption) {
        /*
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/search/suggestions.json?query=screwdriver&limit=5&category=power-tools
         *
         * where:
         * - query = query
         * - limit = limit
         * - category = categorySlug
         */
        // const params: {[param: string]: string} = {query, limit: limit.toString()};
        //
        // if (categorySlug) {
        //     params.category = categorySlug;
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/search/suggestions.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        if (this.isLog) {
            console.log('- srv -- ShopService.getSuggestions() filterOption ->%o', filterOption);
        }
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return (0,src_fake_server_database_products__WEBPACK_IMPORTED_MODULE_2__.getSuggestions)(query, limit, categorySlug);
                break;
            case 'json':
                return this.http.get('assets/api/products/suggestions.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- ShopService  this.delayTest -> %o', this.delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(this.delayTest));
                break;
            case 'demo.sourcing.pm':
                /*
                    "query": "INTER AUTO 2 FILS MG",
                    "groupFields": [],
                    "selection": [],
                    "page": 0,
                    "pageSize": 5,
                    "sort": []
                }
                
                */
                const filtersBrand = filterOption.filtersBrand || [];
                const options = {
                    // mak ???
                    // let result = condition ? value1 : value2;
                    filtersBrand: filtersBrand.length == 0 ? [] : [filtersBrand[0]],
                    query: query,
                    page: 0,
                    limit: limit,
                    // sort: []
                };
                if (this.isLog) {
                    console.log('- srv -- ShopService.getSuggestions() options ->%o', options);
                }
                return this.getTypeProducts(null, options, 5);
                break;
            default:
                return (0,src_fake_server_database_products__WEBPACK_IMPORTED_MODULE_2__.getSuggestions)(query, limit, categorySlug);
        }
    }
    getRateValues(baseCode) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories/power-tools.json
         *
         * where:
         * - power-tools = slug
         */
        // return this.http.get<Category>(`https://example.com/api/shop/categories/${slug}.json`);
        // This is for demonstration purposes only. Remove it and use the code above.
        if (this.isLog) {
            console.log('- srv -- ShopService.getRateValues() baseCode -> %o', baseCode);
        }
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_4__.getModeSource)()) {
            case 'fake-server':
                return this.pimalionCloudService.getRateValues(baseCode);
                break;
            case 'json':
                return this.pimalionCloudService.getRateValues(baseCode);
                break;
            case 'demo.sourcing.pm':
                return this.pimalionCloudService.getRateValues(baseCode);
                break;
            default:
                return this.pimalionCloudService.getRateValues(baseCode);
        }
    }
    static { this.ɵfac = function ShopService_Factory(t) { return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_pimalion_cloud_service__WEBPACK_IMPORTED_MODULE_7__.PimalionCloudService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_brands_service__WEBPACK_IMPORTED_MODULE_8__.BrandsService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_categories_service__WEBPACK_IMPORTED_MODULE_9__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_services_currency_service__WEBPACK_IMPORTED_MODULE_10__.CurrencyService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjectable"]({ token: ShopService, factory: ShopService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 8332:
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon/icon.component */ 2775);




function AlertComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onClose()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class AlertComponent {
    constructor() {
        this.size = null;
        this.dismissible = false;
        this.type = 'info';
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.classAlert = true;
    }
    get classAlertLg() { return this.size === 'lg'; }
    get classAlertDismissible() { return this.dismissible; }
    get classAlertInfo() { return this.type === 'info'; }
    get classAlertPrimary() { return this.type === 'primary'; }
    get classAlertSecondary() { return this.type === 'secondary'; }
    get classAlertSuccess() { return this.type === 'success'; }
    get classAlertDanger() { return this.type === 'danger'; }
    get classAlertWarning() { return this.type === 'warning'; }
    onClose() {
        this.close.emit();
    }
    static { this.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], hostVars: 18, hostBindings: function AlertComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("alert", ctx.classAlert)("alert-lg", ctx.classAlertLg)("alert-dismissible", ctx.classAlertDismissible)("alert-info", ctx.classAlertInfo)("alert-primary", ctx.classAlertPrimary)("alert-secondary", ctx.classAlertSecondary)("alert-success", ctx.classAlertSuccess)("alert-danger", ctx.classAlertDanger)("alert-warning", ctx.classAlertWarning);
        } }, inputs: { size: "size", dismissible: "dismissible", type: "type" }, outputs: { close: "close" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["type", "button", "class", "close", "data-dismiss", "alert", "aria-label", "Close", 3, "click", 4, "ngIf"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["name", "cross-12", "size", "12"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertComponent_button_1_Template, 2, 0, "button", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dismissible);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"] }); }
}


/***/ }),

/***/ 2775:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconComponent": () => (/* binding */ IconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class IconComponent {
    constructor() {
        this.width = null;
        this.height = null;
    }
    set name(value) {
        this.id = value;
    }
    set size(value) {
        const result = /^([0-9]+)(?:x([0-9]+))?$/.exec(value);
        if (result) {
            if (result[2]) {
                this.width = result[1] + 'px';
                this.height = result[2] + 'px';
            }
            else {
                this.width = this.height = result[1] + 'px';
            }
        }
        else {
            this.width = this.height = null;
        }
    }
    static { this.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], inputs: { name: "name", size: "size" }, decls: 2, vars: 3, template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx.width)("height", ctx.height);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", "assets/images/sprite.svg#" + ctx.id, null, "xlink");
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"], changeDetection: 0 }); }
}


/***/ }),

/***/ 6348:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/input-number/input-number.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputNumberComponent": () => (/* binding */ InputNumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




const _c0 = ["inputElement"];
const _c1 = function (a0, a1) { return { "form-control-sm": a0, "form-control-lg": a1 }; };
function parseNumber(value, def) {
    if (typeof value === 'string') {
        value = parseFloat(value);
    }
    else if (typeof value !== 'number') {
        value = def;
    }
    return isNaN(value) ? def : value;
}
class InputNumberComponent {
    constructor() {
        this.options = {
            step: 1,
            min: null,
            max: null,
            disabled: false,
            readonly: false
        };
        this.class = true;
        this.size = null;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    set step(value) {
        this.options.step = parseNumber(value, 1);
    }
    set min(value) {
        this.options.min = parseNumber(value, null);
    }
    set max(value) {
        this.options.max = parseNumber(value, null);
    }
    set disabled(value) {
        this.options.disabled = !!value;
    }
    set readonly(value) {
        this.options.readonly = !!value;
    }
    get inputElement() {
        return this.inputElementRef.nativeElement;
    }
    get value() {
        return this.inputElement.value === '' ? '' : parseFloat(this.inputElement.value);
    }
    set value(value) {
        this.writeValue(value);
    }
    add() {
        this.change(1);
        this.changeByTimer(1);
    }
    sub() {
        this.change(-1);
        this.changeByTimer(-1);
    }
    input() {
        this.onChange(this.value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    writeValue(obj) {
        if (typeof obj === 'number') {
            this.inputElement.value = obj.toString();
        }
        else {
            this.inputElement.value = '';
        }
    }
    /**
     * @param direction - one of [-1, 1]
     */
    change(direction) {
        let value = (this.value === '' || isNaN(this.value) ? 0 : this.value) + this.options.step * direction;
        if (this.options.max !== null) {
            value = Math.min(this.options.max, value);
        }
        if (this.options.min !== null) {
            value = Math.max(this.options.min, value);
        }
        if (value !== this.value) {
            this.onChange(value);
            this.value = value;
        }
    }
    /**
     * @param direction - one of [-1, 1]
     */
    changeByTimer(direction) {
        let interval;
        const timer = setTimeout(() => {
            interval = setInterval(() => this.change(direction), 50);
        }, 300);
        const documentMouseUp = () => {
            clearTimeout(timer);
            clearInterval(interval);
            document.removeEventListener('mouseup', documentMouseUp, false);
        };
        document.addEventListener('mouseup', documentMouseUp, false);
    }
    static { this.ɵfac = function InputNumberComponent_Factory(t) { return new (t || InputNumberComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputNumberComponent, selectors: [["app-input-number"]], viewQuery: function InputNumberComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElementRef = _t.first);
        } }, hostVars: 2, hostBindings: function InputNumberComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("input-number", ctx.class);
        } }, inputs: { size: "size", step: "step", min: "min", max: "max", disabled: "disabled", readonly: "readonly" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => InputNumberComponent),
                    multi: true
                }
            ])], decls: 4, vars: 9, consts: [["type", "number", 1, "form-control", "input-number__input", 3, "ngClass", "min", "max", "value", "disabled", "readOnly", "input", "blur"], ["inputElement", ""], [1, "input-number__add", 3, "mousedown"], [1, "input-number__sub", 3, "mousedown"]], template: function InputNumberComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputNumberComponent_Template_input_input_0_listener() { return ctx.input(); })("blur", function InputNumberComponent_Template_input_blur_0_listener() { return ctx.onTouched(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumberComponent_Template_div_mousedown_2_listener() { return ctx.add(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumberComponent_Template_div_mousedown_3_listener() { return ctx.sub(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx.size === "sm", ctx.size === "lg"))("min", ctx.options.min)("max", ctx.options.max)("value", ctx.value)("disabled", ctx.options.disabled)("readOnly", ctx.options.readonly);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1udW1iZXIuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 7130:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/loading-bar/loading-bar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingBarComponent": () => (/* binding */ LoadingBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const _c0 = ["bar"];
class LoadingBarComponent {
    constructor(router, zone) {
        this.router = router;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    get element() {
        return this.bar.nativeElement;
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.destroy$)).subscribe(event => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
                    this.element.classList.remove('loading-bar--start', 'loading-bar--complete', 'loading-bar--reset');
                    this.element.getBoundingClientRect(); // force reflow
                    this.element.classList.add('loading-bar--start');
                }
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationError || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationCancel) {
                    if (this.element.classList.contains('loading-bar--start')) {
                        this.element.classList.remove('loading-bar--start');
                        this.element.classList.add('loading-bar--complete');
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function LoadingBarComponent_Factory(t) { return new (t || LoadingBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoadingBarComponent, selectors: [["app-loading-bar"]], viewQuery: function LoadingBarComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.bar = _t.first);
        } }, decls: 3, vars: 0, consts: [[1, "loading-bar"], ["bar", ""], [1, "loading-bar__inner"]], template: function LoadingBarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLWJhci5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 }); }
}


/***/ }),

/***/ 2802:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon/icon.component */ 2775);




function PageHeaderComponent_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", breadcrumb_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](breadcrumb_r2.label);
} }
function PageHeaderComponent_ng_container_5_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](breadcrumb_r2.label);
} }
function PageHeaderComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PageHeaderComponent_ng_container_5_li_1_Template, 4, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PageHeaderComponent_ng_container_5_li_2_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !last_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", last_r3);
} }
function PageHeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.header);
} }
class PageHeaderComponent {
    constructor() {
        this.header = '';
        this.breadcrumbs = [];
    }
    static { this.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["app-page-header"]], inputs: { header: "header", breadcrumbs: "breadcrumbs" }, decls: 7, vars: 2, consts: [[1, "page-header"], [1, "page-header__container", "container"], [1, "page-header__breadcrumb"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [4, "ngFor", "ngForOf"], ["class", "page-header__title", 4, "ngIf"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], [1, "breadcrumb-item"], [3, "routerLink"], ["name", "arrow-rounded-right-6x9", "size", "6x9", 1, "breadcrumb-arrow"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "page-header__title"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nav", 3)(4, "ol", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PageHeaderComponent_ng_container_5_Template, 3, 2, "ng-container", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PageHeaderComponent_div_6_Template, 3, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.header);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] }); }
}


/***/ }),

/***/ 3556:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon/icon.component */ 2775);





function PaginationComponent_li_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PaginationComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_li_7_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const page_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.setPage(page_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PaginationComponent_li_7_span_3_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", page_r1 === ctx_r0.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", page_r1 === ctx_r0.current);
} }
class PaginationComponent {
    constructor() {
        this.siblings = 1;
        this.current = 1;
        this.total = 1;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.pages = [];
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.calc();
    }
    ngOnChanges() {
        this.calc();
    }
    setPage(value, emitEvent = true) {
        this.onTouched();
        if (value < 1 || value > this.total || value === this.current) {
            return;
        }
        if (this.current !== value) {
            this.onChange(value);
        }
        this.current = value;
        this.calc();
        if (emitEvent) {
            this.pageChange.emit(this.current);
        }
    }
    trackByFn(index) {
        return index;
    }
    calc() {
        const min = Math.max(1, this.current - this.siblings - Math.max(0, this.siblings - this.total + this.current));
        const max = Math.min(this.total, min + this.siblings * 2);
        this.pages = [];
        for (let i = min; i <= max; i++) {
            this.pages.push(i);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(obj) {
        if (typeof obj === 'number') {
            this.setPage(obj, false);
        }
    }
    static { this.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { siblings: "siblings", current: "current", total: "total" }, outputs: { pageChange: "pageChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => PaginationComponent),
                    multi: true
                }
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 7, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["aria-label", "Previous", 1, "page-link", "page-link--with-arrow", 3, "click"], ["aria-hidden", "true", "name", "arrow-rounded-left-8x13", "size", "8x13", 1, "page-link__arrow", "page-link__arrow--left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["aria-label", "Next", 1, "page-link", "page-link--with-arrow", 3, "click"], ["aria-hidden", "true", "name", "arrow-rounded-right-8x13", "size", "8x13", 1, "page-link__arrow", "page-link__arrow--right"], [1, "page-link", 3, "click"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 2)(4, "li", 3)(5, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_5_listener() { return ctx.setPage(ctx.current - 1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PaginationComponent_li_7_Template, 4, 4, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 3)(9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_9_listener() { return ctx.setPage(ctx.current + 1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.current <= 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages)("ngForTrackBy", ctx.trackByFn);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.current >= ctx.total);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 1368:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/post-card/post-card.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCardComponent": () => (/* binding */ PostCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/root.service */ 1372);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/click.directive */ 7993);





function PostCardComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r0.root.post());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r1);
} }
const _c0 = function () { return ["grid-nl", "grid-lg"]; };
const _c1 = function () { return ["list-nl", "list-sm"]; };
const _c2 = function () { return ["grid-nl", "list-nl"]; };
const _c3 = function (a0, a1, a2, a3, a4) { return { "post-card--layout--grid": a0, "post-card--layout--list": a1, "post-card--size--nl": a2, "post-card--size--lg": a3, "post-card--size--sm": a4 }; };
class PostCardComponent {
    constructor(root) {
        this.root = root;
        this.layout = null;
    }
    static { this.ɵfac = function PostCardComponent_Factory(t) { return new (t || PostCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PostCardComponent, selectors: [["app-post-card"]], inputs: { post: "post", layout: "layout" }, decls: 17, vars: 17, consts: [[1, "post-card", 3, "ngClass"], [1, "post-card__image"], ["appClick", "", 3, "routerLink"], ["alt", "", 3, "src"], [1, "post-card__info"], [1, "post-card__category"], ["appClick", "", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "post-card__name"], [1, "post-card__date"], [1, "post-card__content"], [1, "post-card__read-more"], ["appClick", "", 1, "btn", "btn-secondary", "btn-sm", 3, "routerLink"]], template: function PostCardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PostCardComponent_a_6_Template, 2, 2, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Read More");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](11, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0).includes(ctx.layout || ""), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1).includes(ctx.layout || ""), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c2).includes(ctx.layout || ""), ctx.layout === "grid-lg", ctx.layout === "list-sm"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.root.post());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.post.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.post.categories);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.root.post());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.post.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.post.date);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.root.post());
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _directives_click_directive__WEBPACK_IMPORTED_MODULE_1__.ClickDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 3284:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCardComponent": () => (/* binding */ ProductCardComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/root.service */ 1372);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 5237);
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wishlist.service */ 165);
/* harmony import */ var _services_compare_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/compare.service */ 3940);
/* harmony import */ var _services_quickview_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/quickview.service */ 6018);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/currency.service */ 8910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/click.directive */ 7993);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icon/icon.component */ 2775);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rating/rating.component */ 9453);
/* harmony import */ var _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/currency-format.pipe */ 133);
















function ProductCardComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProductCardComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Hot");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProductCardComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProductCardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductCardComponent_div_7_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProductCardComponent_div_7_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ProductCardComponent_div_7_div_3_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.product.badges.includes("sale"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.product.badges.includes("hot"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.product.badges.includes("new"));
} }
function ProductCardComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx_r1.root.product(ctx_r1.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r1.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function ProductCardComponent_ul_20_li_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function ProductCardComponent_ul_20_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProductCardComponent_ul_20_li_1_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const value_r12 = ctx.$implicit;
    const last_r13 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", value_r12.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !last_r13);
} }
function ProductCardComponent_ul_20_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProductCardComponent_ul_20_li_1_ng_container_2_Template, 3, 2, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attribute_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", attribute_r10.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", attribute_r10.values);
} }
function ProductCardComponent_ul_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductCardComponent_ul_20_li_1_Template, 3, 2, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.featuredAttributes);
} }
function ProductCardComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProductCardComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 3, ctx_r4.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 5, ctx_r4.product.compareAtPrice));
} }
function ProductCardComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r5.product.price), " ");
} }
const _c0 = function (a0, a1, a2, a3, a4) { return { "product-card--layout--grid product-card--size--sm": a0, "product-card--layout--grid product-card--size--nl": a1, "product-card--layout--grid product-card--size--lg": a2, "product-card--layout--list": a3, "product-card--layout--horizontal": a4 }; };
const _c1 = function (a0) { return { "product-card__quickview--preload": a0 }; };
const _c2 = function (a0) { return { "btn-loading": a0 }; };
class ProductCardComponent {
    constructor(cd, root, cart, wishlist, compare, quickview, currency) {
        this.cd = cd;
        this.root = root;
        this.cart = cart;
        this.wishlist = wishlist;
        this.compare = compare;
        this.quickview = quickview;
        this.currency = currency;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.layout = null;
        this.addingToCart = false;
        this.addingToWishlist = false;
        this.addingToCompare = false;
        this.showingQuickview = false;
        this.featuredAttributes = [];
        this.isLog = true;
    }
    ngOnInit() {
        if (this.isLog) {
            console.log('- cmp -- ProductCardComponent.ngOnInit()  url product -> %o', this.root.product(this.product));
        }
        this.currency.changes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe(() => {
            this.cd.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        if ('product' in changes) {
            this.featuredAttributes = !this.product ? [] : this.product.attributes.filter(x => x.featured);
        }
    }
    addToCart() {
        if (this.addingToCart) {
            return;
        }
        this.addingToCart = true;
        this.cart.add(this.product, 1).subscribe({
            complete: () => {
                this.addingToCart = false;
                this.cd.markForCheck();
            }
        });
    }
    addToWishlist() {
        if (this.addingToWishlist) {
            return;
        }
        this.addingToWishlist = true;
        this.wishlist.add(this.product).subscribe({
            complete: () => {
                this.addingToWishlist = false;
                this.cd.markForCheck();
            }
        });
    }
    addToCompare() {
        if (this.addingToCompare) {
            return;
        }
        this.addingToCompare = true;
        this.compare.add(this.product).subscribe({
            complete: () => {
                this.addingToCompare = false;
                this.cd.markForCheck();
            }
        });
    }
    showQuickview() {
        if (this.showingQuickview) {
            return;
        }
        this.showingQuickview = true;
        this.quickview.show(this.product).subscribe({
            complete: () => {
                this.showingQuickview = false;
                this.cd.markForCheck();
            }
        });
    }
    static { this.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__.WishlistService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_compare_service__WEBPACK_IMPORTED_MODULE_3__.CompareService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_quickview_service__WEBPACK_IMPORTED_MODULE_4__.QuickviewService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_currency_service__WEBPACK_IMPORTED_MODULE_5__.CurrencyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product", layout: "layout" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]], decls: 39, vars: 34, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "product-card", 3, "ngClass"], ["type", "button", "appClick", "", 1, "product-card__quickview", 3, "ngClass", "click"], ["name", "quickview-16", "size", "16"], [1, "fake-svg-icon"], ["class", "product-card__badges-list", 4, "ngIf"], [1, "product-card__image", "product-image"], ["appClick", "", "class", "product-image__body", 3, "routerLink", 4, "ngIf"], [1, "product-card__info"], [1, "product-card__name"], ["appClick", "", 3, "routerLink"], [1, "product-card__Marque_name"], [1, "product-card__rating"], [3, "value"], [1, "product-card__rating-legend"], ["class", "product-card__features-list", 4, "ngIf"], [1, "product-card__actions"], [1, "product-card__availability"], ["class", "text-success", 4, "ngIf"], [1, "product-card__prices"], [4, "ngIf"], [1, "product-card__buttons"], ["type", "button", "appClick", "", 1, "btn", "btn-primary", "product-card__addtocart", 3, "ngClass", "click"], ["type", "button", "appClick", "", 1, "btn", "btn-secondary", "product-card__addtocart", "product-card__addtocart--list", 3, "ngClass", "click"], ["type", "button", "appClick", "", 1, "btn", "btn-light", "btn-svg-icon", "btn-svg-icon--fake-svg", "product-card__wishlist", 3, "ngClass", "click"], ["name", "wishlist-16", "size", "16"], [1, "fake-svg-icon", "fake-svg-icon--wishlist-16"], ["type", "button", "appClick", "", 1, "btn", "btn-light", "btn-svg-icon", "btn-svg-icon--fake-svg", "product-card__compare", 3, "ngClass", "click"], ["name", "compare-16", "size", "16"], [1, "fake-svg-icon", "fake-svg-icon--compare-16"], [1, "product-card__badges-list"], ["class", "product-card__badge product-card__badge--sale", 4, "ngIf"], ["class", "product-card__badge product-card__badge--hot", 4, "ngIf"], ["class", "product-card__badge product-card__badge--new", 4, "ngIf"], [1, "product-card__badge", "product-card__badge--sale"], [1, "product-card__badge", "product-card__badge--hot"], [1, "product-card__badge", "product-card__badge--new"], ["appClick", "", 1, "product-image__body", 3, "routerLink"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "product-card__features-list"], [4, "ngFor", "ngForOf"], [1, "text-success"], [1, "product-card__new-price"], [1, "product-card__old-price"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_4_listener() { return ctx.showQuickview(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "app-icon", 4)(6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ProductCardComponent_div_7_Template, 4, 3, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ProductCardComponent_a_9_Template, 2, 2, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "app-rating", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ProductCardComponent_ul_20_Template, 2, 1, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 17)(22, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Availability: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, ProductCardComponent_span_24_Template, 2, 0, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, ProductCardComponent_ng_container_26_Template, 8, 7, "ng-container", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, ProductCardComponent_ng_container_27_Template, 3, 3, "ng-container", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 22)(29, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_29_listener() { return ctx.addToCart(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Add To Cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_31_listener() { return ctx.addToCart(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Add To Cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_33_listener() { return ctx.addToWishlist(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "app-icon", 26)(35, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_36_listener() { return ctx.addToCompare(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "app-icon", 29)(38, "span", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](18, _c0, ctx.layout === "grid-sm", ctx.layout === "grid-nl", ctx.layout === "grid-lg", ctx.layout === "list", ctx.layout === "horizontal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](24, _c1, ctx.showingQuickview));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.product.badges.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.product.images == null ? null : ctx.product.images.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.root.product(ctx.product));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.product.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.product.brandName, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.product.rating);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.product.reviews, " Reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.featuredAttributes.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.product.availability === "in-stock");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.product.compareAtPrice);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.product.compareAtPrice);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](26, _c2, ctx.addingToCart));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](28, _c2, ctx.addingToCart));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](30, _c2, ctx.addingToWishlist));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](32, _c2, ctx.addingToCompare));
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _directives_click_directive__WEBPACK_IMPORTED_MODULE_6__.ClickDirective, _icon_icon_component__WEBPACK_IMPORTED_MODULE_7__.IconComponent, _rating_rating_component__WEBPACK_IMPORTED_MODULE_8__.RatingComponent, _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_9__.CurrencyFormatPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 }); }
}


/***/ }),

/***/ 2273:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/product-gallery/product-gallery.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductGalleryComponent": () => (/* binding */ ProductGalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _services_photo_swipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/photo-swipe.service */ 7);
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/direction.service */ 7341);
/* harmony import */ var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-red-zoom */ 7114);
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/click.directive */ 7993);
/* harmony import */ var _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/fake-slides.directive */ 3210);
/* harmony import */ var _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/owl-prevent-click.directive */ 876);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/icon.component */ 2775);

















const _c0 = ["featuredCarousel"];
const _c1 = ["thumbnailsCarousel"];
const _c2 = ["imageElement"];
function ProductGalleryComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductGalleryComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.openPhotoSwipe(ctx_r7.currentItem)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProductGalleryComponent_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductGalleryComponent_5_ng_template_0_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.onFeaturedImageClick($event, item_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", item_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ProductGalleryComponent_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ProductGalleryComponent_5_ng_template_0_Template, 4, 2, "ng-template", 11);
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", item_r9.id);
} }
function ProductGalleryComponent_10_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductGalleryComponent_10_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.onThumbnailImageClick(item_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("product-gallery__carousel-item--active", item_r16 === ctx_r17.currentItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ProductGalleryComponent_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ProductGalleryComponent_10_ng_template_0_Template, 3, 3, "ng-template", 11);
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", item_r16.id);
} }
function ProductGalleryComponent_11_ng_template_0_Template(rf, ctx) { }
function ProductGalleryComponent_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ProductGalleryComponent_11_ng_template_0_Template, 0, 0, "ng-template", 11);
} if (rf & 2) {
    const i_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", "fake-slide-" + i_r22);
} }
class ProductGalleryComponent {
    constructor(platformId, photoSwipe, direction, router) {
        this.platformId = platformId;
        this.photoSwipe = photoSwipe;
        this.direction = direction;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.items = [];
        this.currentItem = null;
        this.carouselOptions = {
            dots: false,
            autoplay: false,
            responsive: {
                0: { items: 1 }
            },
            rtl: this.direction.isRTL()
        };
        this.thumbnailsCarouselOptions = {
            dots: false,
            autoplay: false,
            margin: 10,
            items: 5,
            responsive: {
                480: { items: 5 },
                380: { items: 4 },
                0: { items: 3 }
            },
            rtl: this.direction.isRTL()
        };
        this.galleryRef = null;
        this.galleryIsClosed = false;
        this.productLayout = 'standard';
        this.classProductGallery = true;
    }
    set images(images) {
        this.items = images.map((image, index) => ({ id: `image-${index}`, image }));
        this.currentItem = this.items[0] || null;
    }
    ngOnInit() {
        if (this.productLayout !== 'quickview' && (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(this.platformId)) {
            this.photoSwipe.load().subscribe();
        }
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationStart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => {
            this.galleryIsClosed = true;
            if (this.galleryRef) {
                this.galleryRef.close();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    featuredCarouselTranslated(event) {
        if (event.slides && event.slides.length) {
            const activeImageId = event.slides[0].id;
            this.currentItem = this.items.find(x => x.id === activeImageId) || this.items[0] || null;
            if (!this.thumbnailsCarousel.slidesData.find(slide => slide.id === activeImageId && slide.isActive)) {
                this.thumbnailsCarousel.to(activeImageId);
            }
        }
    }
    getDirDependentIndex(index) {
        // we need to invert index id direction === 'rtl' because photoswipe do not support rtl
        if (this.direction.isRTL()) {
            return this.items.length - 1 - index;
        }
        return index;
    }
    onFeaturedImageClick(event, image) {
        if (this.productLayout !== 'quickview') {
            event.preventDefault();
            this.openPhotoSwipe(image);
        }
    }
    onThumbnailImageClick(item) {
        this.featuredCarousel.to(item.id);
        this.currentItem = item;
    }
    openPhotoSwipe(item) {
        if (!item) {
            return;
        }
        const imageElements = this.imageElements.map(x => x.nativeElement);
        const images = this.items.map((eachItem, i) => {
            const tag = imageElements[i];
            const width = (tag.dataset['width'] && parseFloat(tag.dataset['width'])) || tag.naturalWidth;
            const height = (tag.dataset['height'] && parseFloat(tag.dataset['height'])) || tag.naturalHeight;
            return {
                src: eachItem.image,
                msrc: eachItem.image,
                w: width,
                h: height,
            };
        });
        if (this.direction.isRTL()) {
            images.reverse();
        }
        // noinspection JSUnusedGlobalSymbols
        const options = {
            getThumbBoundsFn: ((index) => {
                if (this.galleryIsClosed) {
                    return null;
                }
                return this.getThumbBounds(index);
            }),
            index: this.getDirDependentIndex(this.items.indexOf(item)),
            bgOpacity: .9,
            history: false,
        };
        this.photoSwipe.open(images, options).subscribe(galleryRef => {
            galleryRef.listen('beforeChange', () => {
                this.featuredCarousel.to(this.items[this.getDirDependentIndex(galleryRef.getCurrentIndex())].id);
            });
            this.galleryRef = galleryRef;
        });
    }
    getThumbBounds(index) {
        const imageElements = this.imageElements.toArray();
        const dirDependentIndex = this.getDirDependentIndex(index);
        if (!imageElements[dirDependentIndex]) {
            return null;
        }
        const tag = imageElements[dirDependentIndex].nativeElement;
        const width = tag.naturalWidth;
        const height = tag.naturalHeight;
        const rect = tag.getBoundingClientRect();
        const ration = Math.min(rect.width / width, rect.height / height);
        const fitWidth = width * ration;
        const fitHeight = height * ration;
        return {
            x: rect.left + (rect.width - fitWidth) / 2 + window.pageXOffset,
            y: rect.top + (rect.height - fitHeight) / 2 + window.pageYOffset,
            w: fitWidth,
        };
    }
    static { this.ɵfac = function ProductGalleryComponent_Factory(t) { return new (t || ProductGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_photo_swipe_service__WEBPACK_IMPORTED_MODULE_0__.PhotoSwipeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_direction_service__WEBPACK_IMPORTED_MODULE_1__.DirectionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProductGalleryComponent, selectors: [["app-product-gallery"]], viewQuery: function ProductGalleryComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselComponent);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselComponent);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.featuredCarousel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.thumbnailsCarousel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.imageElements = _t);
        } }, hostVars: 2, hostBindings: function ProductGalleryComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("product-gallery", ctx.classProductGallery);
        } }, inputs: { productLayout: "productLayout", images: "images" }, decls: 12, vars: 11, consts: [[1, "product-gallery__featured", 3, "redZoomClass", "redZoom", "redZoomThumb", "redZoomLazy"], [1, "product-gallery__featured-inset"], ["class", "product-gallery__zoom", 3, "click", 4, "ngIf"], ["appOwlPreventClick", "", 3, "options", "changed"], ["featuredCarousel", ""], [4, "ngFor", "ngForOf"], [1, "product-gallery__carousel"], ["appOwlPreventClick", "", 3, "options", "appFakeSlides"], ["fakeSlides", "appFakeSlides", "thumbnailsCarousel", ""], [1, "product-gallery__zoom", 3, "click"], ["name", "zoom-in-24", "size", "24"], ["carouselSlide", "", 3, "id"], [1, "product-image", "product-image--location--gallery"], ["appClick", "", "target", "_blank", 1, "product-image__body", 3, "href", "click"], ["alt", "", 1, "product-image__img", 3, "src"], ["imageElement", ""], ["appClick", "", 1, "product-image", "product-gallery__carousel-item", 3, "click"], [1, "product-image__body"], ["alt", "", 1, "product-image__img", "product-gallery__carousel-image", 3, "src"]], template: function ProductGalleryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProductGalleryComponent_button_2_Template, 2, 0, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "owl-carousel-o", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changed", function ProductGalleryComponent_Template_owl_carousel_o_changed_3_listener($event) { return ctx.featuredCarouselTranslated($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProductGalleryComponent_5_Template, 1, 1, null, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6)(7, "owl-carousel-o", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProductGalleryComponent_10_Template, 1, 1, null, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ProductGalleryComponent_11_Template, 1, 1, null, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("redZoomClass", "product-red-zoom product-red-zoom--layout--", ctx.productLayout, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("redZoom", (ctx.currentItem == null ? null : ctx.currentItem.image) || "")("redZoomThumb", (ctx.currentItem == null ? null : ctx.currentItem.image) || "")("redZoomLazy", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.productLayout !== "quickview");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.carouselOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.thumbnailsCarouselOptions)("appFakeSlides", ctx.items.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _r3.slides);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselSlideDirective, ngx_red_zoom__WEBPACK_IMPORTED_MODULE_13__.RedZoomDirective, _directives_click_directive__WEBPACK_IMPORTED_MODULE_2__.ClickDirective, _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_3__.FakeSlidesDirective, _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_4__.OwlPreventClickDirective, _icon_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWdhbGxlcnkuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 5172:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/product/product.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 5237);
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/wishlist.service */ 165);
/* harmony import */ var _services_compare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/compare.service */ 3940);
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/root.service */ 1372);







function ProductComponent_div_3_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, ctx_r1.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 5, ctx_r1.product.compareAtPrice));
} }
function ProductComponent_div_3_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r2.product.price), " ");
} }
function ProductComponent_div_3_a_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", badge_r4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](badge_r4);
} }
const _c0 = function (a0) { return { "btn-loading": a0 }; };
const _c1 = function () { return { type: "twitter", label: "Tweet" }; };
const _c2 = function (a1) { return ["facebook", a1, "pinterest"]; };
function ProductComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-product-gallery", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6)(5, "div", 7)(6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductComponent_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.addToWishlist()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductComponent_div_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.addToCompare()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 13)(13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-rating", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 16)(16, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Write A Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ul", 19)(27, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Availability: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Brand: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "SKU: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 24)(41, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Availability: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, ProductComponent_div_3_ng_container_46_Template, 8, 7, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, ProductComponent_div_3_ng_container_47_Template, 3, 3, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "form", 28)(49, "div", 29)(50, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 31)(53, "div", 32)(54, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "input", 34)(56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "input", 34)(59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "input", 34)(62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "input", 38)(65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 29)(67, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 39)(70, "div", 40)(71, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Metal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Wood");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Plastic");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 29)(84, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 43)(87, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "app-input-number", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 46)(90, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductComponent_div_3_Template_button_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.addToCart()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 48)(93, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductComponent_div_3_Template_button_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.addToWishlist()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 50)(96, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductComponent_div_3_Template_button_click_96_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.addToCompare()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 52)(99, "div", 53)(100, "div", 54)(101, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](102, ProductComponent_div_3_a_102_Template, 2, 2, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "app-share-buttons", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](104, "absoluteUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](105, "absoluteUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("product product--layout--", ctx_r0.layout, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("productLayout", ctx_r0.layout)("images", ctx_r0.product.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](33, _c0, ctx_r0.addingToWishlist));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](35, _c0, ctx_r0.addingToCompare));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r0.product.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.product.reviews, " Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Marque: ", ctx_r0.product.brandName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.product.overview, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.product.brandName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "https://pim.socoda.fr:4343/pimalion-staging/app-v2/dist/#/mappings/", ctx_r0.product.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.product.sku, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.product.compareAtPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.product.compareAtPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", 1)("formControl", ctx_r0.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](37, _c0, ctx_r0.addingToCart));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](39, _c0, ctx_r0.addingToWishlist));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](41, _c0, ctx_r0.addingToCompare));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.product.badges);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("buttons", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](44, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](43, _c1)))("pageUrl", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](104, 27, ctx_r0.root.product(ctx_r0.product), "angular"))("pageTitle", ctx_r0.product.name)("pageImage", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](105, 30, ctx_r0.product.images[0], "html"));
} }
class ProductComponent {
    constructor(platformId, cart, wishlist, compare, root) {
        this.platformId = platformId;
        this.cart = cart;
        this.wishlist = wishlist;
        this.compare = compare;
        this.root = root;
        this.layout = 'standard';
        this.quantity = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(1);
        this.addingToCart = false;
        this.addingToWishlist = false;
        this.addingToCompare = false;
        this.isLog = true;
    }
    ngOnInit() {
        if (this.isLog) {
            console.log('- cmp -- ProductComponent.ngOnInit() product -> %o ', this.product);
        }
    }
    addToCart() {
        if (!this.addingToCart && this.product && this.quantity.value > 0) {
            this.addingToCart = true;
            this.cart.add(this.product, this.quantity.value).subscribe({ complete: () => this.addingToCart = false });
        }
    }
    addToWishlist() {
        if (!this.addingToWishlist && this.product) {
            this.addingToWishlist = true;
            this.wishlist.add(this.product).subscribe({ complete: () => this.addingToWishlist = false });
        }
    }
    addToCompare() {
        if (!this.addingToCompare && this.product) {
            this.addingToCompare = true;
            this.compare.add(this.product).subscribe({ complete: () => this.addingToCompare = false });
        }
    }
    static { this.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__.WishlistService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_compare_service__WEBPACK_IMPORTED_MODULE_2__.CompareService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_3__.RootService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { layout: "layout", product: "product" }, decls: 4, vars: 2, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "class", 4, "ngIf"], [1, "product__content"], [1, "product__gallery"], [3, "productLayout", "images"], [1, "product__info"], [1, "product__wishlist-compare"], ["type", "button", "data-toggle", "tooltip", "data-placement", "right", "title", "Wishlist", "appClick", "", 1, "btn", "btn-sm", "btn-light", "btn-svg-icon", 3, "ngClass", "click"], ["name", "wishlist-16", "size", "16"], ["type", "button", "data-toggle", "tooltip", "data-placement", "right", "title", "Compare", "appClick", "", 1, "btn", "btn-sm", "btn-light", "btn-svg-icon", 3, "ngClass", "click"], ["name", "compare-16", "size", "16"], [1, "product__name"], [1, "product__rating"], [1, "product__rating-stars"], [3, "value"], [1, "product__rating-legend"], ["href", "", "appClick", ""], [1, "product__description"], [1, "product__meta"], [1, "product__meta-availability"], [1, "text-success"], ["target", "_blank", 3, "href"], [1, "footer-contacts__icon", "fas", "fa-globe-americas"], [1, "product__sidebar"], [1, "product__availability"], [1, "product__prices"], [4, "ngIf"], [1, "product__options"], [1, "form-group", "product__option"], [1, "product__option-label"], [1, "input-radio-color"], [1, "input-radio-color__list"], ["data-toggle", "tooltip", "title", "White", 1, "input-radio-color__item", "input-radio-color__item--white", 2, "color", "#fff"], ["type", "radio", "name", "color"], ["data-toggle", "tooltip", "title", "Yellow", 1, "input-radio-color__item", 2, "color", "#ffd333"], ["data-toggle", "tooltip", "title", "Red", 1, "input-radio-color__item", 2, "color", "#ff4040"], ["data-toggle", "tooltip", "title", "Blue", 1, "input-radio-color__item", "input-radio-color__item--disabled", 2, "color", "#4080ff"], ["type", "radio", "name", "color", "disabled", ""], [1, "input-radio-label"], [1, "input-radio-label__list"], ["type", "radio", "name", "material"], ["type", "radio", "name", "material", "disabled", ""], [1, "product__actions"], [1, "product__actions-item"], ["aria-label", "Quantity", "size", "lg", 1, "product__quantity", 3, "min", "formControl"], [1, "product__actions-item", "product__actions-item--addtocart"], ["type", "button", "appClick", "", 1, "btn", "btn-primary", "btn-lg", 3, "ngClass", "click"], [1, "product__actions-item", "product__actions-item--wishlist"], ["type", "button", "data-toggle", "tooltip", "title", "Wishlist", "appClick", "", 1, "btn", "btn-secondary", "btn-svg-icon", "btn-lg", 3, "ngClass", "click"], [1, "product__actions-item", "product__actions-item--compare"], ["type", "button", "data-toggle", "tooltip", "title", "Compare", "appClick", "", 1, "btn", "btn-secondary", "btn-svg-icon", "btn-lg", 3, "ngClass", "click"], [1, "product__footer"], [1, "product__tags", "tags"], [1, "tags__list"], ["appClick", "", 3, "href", 4, "ngFor", "ngForOf"], [1, "product__share-buttons", 3, "buttons", "pageUrl", "pageTitle", "pageImage"], [1, "product__new-price"], [1, "product__old-price"], ["appClick", "", 3, "href"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductComponent_div_3_Template, 106, 46, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 9873:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/quickview/quickview.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickviewComponent": () => (/* binding */ QuickviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _services_quickview_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/quickview.service */ 6018);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 6528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/click.directive */ 7993);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon.component */ 2775);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/product.component */ 5172);










const _c0 = ["modal"];
function QuickviewComponent_ng_template_0_app_product_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-product", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("product", ctx_r2.product);
} }
function QuickviewComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuickviewComponent_ng_template_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.modalRef && ctx_r3.modalRef.hide()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, QuickviewComponent_ng_template_0_app_product_3_Template, 1, 1, "app-product", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.product);
} }
class QuickviewComponent {
    constructor(quickview, modalService) {
        this.quickview = quickview;
        this.modalService = modalService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    ngAfterViewInit() {
        this.quickview.show$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(product => {
            if (this.modalRef) {
                this.modalRef.hide();
            }
            this.product = product;
            this.modalRef = this.modalService.show(this.template, { class: 'modal-dialog-centered modal-xl' });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function QuickviewComponent_Factory(t) { return new (t || QuickviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_quickview_service__WEBPACK_IMPORTED_MODULE_0__.QuickviewService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QuickviewComponent, selectors: [["app-quickview"]], viewQuery: function QuickviewComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__.TemplateRef);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        } }, decls: 2, vars: 0, consts: [["modal", ""], [1, "quickview"], ["type", "button", "appClick", "", 1, "quickview__close", 3, "click"], ["name", "cross-20", "size", "20"], ["layout", "quickview", 3, "product", 4, "ngIf"], ["layout", "quickview", 3, "product"]], template: function QuickviewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, QuickviewComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _directives_click_directive__WEBPACK_IMPORTED_MODULE_2__.ClickDirective, _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _product_product_component__WEBPACK_IMPORTED_MODULE_4__.ProductComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWlja3ZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 9453:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0) { return { "rating__star--active": a0 }; };
function RatingComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 3)(2, "g", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8)(7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.value >= i_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.value >= i_r1));
} }
const _c1 = function () { return [1, 2, 3, 4, 5]; };
class RatingComponent {
    constructor() {
        this.value = 0;
    }
    static { this.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingComponent, selectors: [["app-rating"]], inputs: { value: "value" }, decls: 3, vars: 2, consts: [[1, "rating"], [1, "rating__body"], [4, "ngFor", "ngForOf"], ["width", "13px", "height", "12px", 1, "rating__star", 3, "ngClass"], [1, "rating__fill"], [0, "xlink", "href", "assets/images/sprite.svg#star-normal"], [1, "rating__stroke"], [0, "xlink", "href", "assets/images/sprite.svg#star-normal-stroke"], [1, "rating__star", "rating__star--only-edge", 3, "ngClass"], [1, "fake-svg-icon"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RatingComponent_ng_container_2_Template, 11, 6, "ng-container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 9727:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 328);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/api/shop.service */ 8781);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 5237);
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/root.service */ 1372);
/* harmony import */ var _api_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/categories.service */ 9383);
/* harmony import */ var _api_filter_option_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/filter-option.service */ 7820);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/icon.component */ 2775);
/* harmony import */ var _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/currency-format.pipe */ 133);















const _c0 = ["input"];

function SearchComponent_select_5_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "option", 16);
  }

  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", category_r5.slug)("innerHTML", ctx_r4.getCategoryName(category_r5), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

function SearchComponent_select_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function SearchComponent_select_5_Template_select_focus_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.closeSuggestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "All Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SearchComponent_select_5_option_3_Template, 1, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
  }
}

function SearchComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.closeButtonClick.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function SearchComponent_li_14_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchComponent_li_14_div_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const product_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.addToCart(product_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("btn-loading", ctx_r11.addedToCartProducts.includes(product_r10));
  }
}

function SearchComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 19)(1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 23)(5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchComponent_li_14_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.closeSuggestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, SearchComponent_li_14_div_12_Template, 3, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", product_r10.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r3.rootService.product(product_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", product_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("SKU: ", product_r10.sku, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 6, product_r10.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.location === "header");
  }
}

class SearchComponent {
  constructor(document, fb, elementRef, zone, shopService, cartService, rootService, categoriesService, // private pageCategoryService: PageCategoryService,
  filterOptionService) {
    this.document = document;
    this.fb = fb;
    this.elementRef = elementRef;
    this.zone = zone;
    this.shopService = shopService;
    this.cartService = cartService;
    this.rootService = rootService;
    this.categoriesService = categoriesService;
    this.filterOptionService = filterOptionService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.isViewConsole = true;
    this.hasSuggestions = false;
    this.categories = [];
    this.suggestedProducts = [];
    this.addedToCartProducts = [];
    this.location = 'header';
    this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.closeButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.classSearch = true;
    this.classSearchSuggestionsOpen = false;
  }

  get classSearchLocationHeader() {
    return this.location === 'header';
  }

  get classSearchLocationIndicator() {
    return this.location === 'indicator';
  }

  get classSearchLocationMobileHeader() {
    return this.location === 'mobile-header';
  }

  get classSearchHasSuggestions() {
    return this.hasSuggestions;
  }

  get element() {
    return this.elementRef.nativeElement;
  }

  get inputElement() {
    return this.inputElementRef.nativeElement;
  }

  ngOnChanges(changes) {
    if (changes['location'] && this.location === 'header') {
      // this.shop.getCategories(null, 1).pipe(
      this.shopService.getCategories(this.categoriesService, null, 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(categories => this.categories = this.getCategoriesWithDepth(categories));
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      category: ['all'],
      query: ['']
    });
    this.form.get('query')?.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.throttleTime)(250, rxjs__WEBPACK_IMPORTED_MODULE_11__.asyncScheduler, {
      leading: true,
      trailing: true
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(query => query.trim()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(query => {
      if (query) {
        const categorySlug = this.form.value.category !== 'all' ? this.form.value.category : null;

        if (this.isViewConsole) {
          console.log('--cmp-- SearchComponent.ngOnInit() categorySlug -> %o', categorySlug);
        } // mak ???

        /*
        const item = [{"key": "brandName.keyword", "value": "NICOLL"}];
        var filterOption_ = new  FilterOptionItem (item);
          this.filterOptionService.next(filterOption_);
        */


        const filterOption = this.filterOptionService.FilterOptionChangedSub$.getValue();

        if (this.isViewConsole) {
          console.log('--cmp-- SearchComponent.ngOnInit() 1 filterOption -> %o', filterOption);
        }

        return this.shopService.getSuggestions(query, 5, categorySlug, filterOption); //  return this.shop.getSuggestions(query, 5, categorySlug);
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(products => {
      this.hasSuggestions = products.length > 0;

      if (this.isViewConsole) {
        console.log('--cmp-- SearchComponent.ngOnInit() products -> %o', products);
      }

      if (products.length > 0) {
        this.suggestedProducts = products;
      }
    });
    this.zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(this.document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(event => {
        const activeElement = this.document.activeElement; // If the inner element still has focus, ignore the click.

        if (activeElement && activeElement.closest('.search') === this.element) {
          return;
        } // Close suggestion if click performed outside of component.


        if (event.target instanceof HTMLElement && this.element !== event.target.closest('.search')) {
          this.zone.run(() => this.closeSuggestion());
        }
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(this.element, 'focusout').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(10), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
        if (this.document.activeElement === this.document.body) {
          return;
        } // Close suggestions if the focus received an external element.


        if (this.document.activeElement && this.document.activeElement.closest('.search') !== this.element) {
          this.zone.run(() => this.closeSuggestion());
        }
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openSuggestion() {
    this.classSearchSuggestionsOpen = true;
  }

  closeSuggestion() {
    this.classSearchSuggestionsOpen = false;
  }

  getCategoryName(category) {
    return '&nbsp;'.repeat(category.depth * 4) + category.name;
  }

  addToCart(product) {
    if (this.addedToCartProducts.includes(product)) {
      return;
    }

    this.addedToCartProducts.push(product); // this.cart.add(product, 1).subscribe({

    this.cartService.add(product, 1).subscribe({
      complete: () => {
        this.addedToCartProducts = this.addedToCartProducts.filter(eachProduct => eachProduct !== product);
      }
    });
  }

  getCategoriesWithDepth(categories, depth = 0) {
    return categories.reduce((acc, category) => [...acc, { ...category,
      depth
    }, ...this.getCategoriesWithDepth(category.children || [], depth + 1)], []);
  }

  static {
    this.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_0__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_2__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_api_categories_service__WEBPACK_IMPORTED_MODULE_3__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_api_filter_option_service__WEBPACK_IMPORTED_MODULE_4__.FilterOptionService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      viewQuery: function SearchComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        }

        if (rf & 2) {
          let _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.inputElementRef = _t.first);
        }
      },
      hostVars: 12,
      hostBindings: function SearchComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("search", ctx.classSearch)("search--location--header", ctx.classSearchLocationHeader)("search--location--indicator", ctx.classSearchLocationIndicator)("search--location--mobile-header", ctx.classSearchLocationMobileHeader)("search--has-suggestions", ctx.classSearchHasSuggestions)("search--suggestions-open", ctx.classSearchSuggestionsOpen);
        }
      },
      inputs: {
        location: "location"
      },
      outputs: {
        escape: "escape",
        closeButtonClick: "closeButtonClick"
      },
      exportAs: ["search"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
      decls: 15,
      vars: 8,
      consts: [[1, "test-border"], [1, "test-name-Component"], [1, "search__body"], [1, "search__form", 3, "formGroup"], ["class", "search__categories", "aria-label", "Category", "formControlName", "category", 3, "focus", 4, "ngIf"], ["name", "search", "placeholder", "Search over 10,000 products", "aria-label", "Site search", "type", "text", "autocomplete", "off", "formControlName", "query", 1, "search__input", 3, "keydown.escape", "focus"], ["input", ""], ["type", "submit", 1, "search__button", "search__button--type--submit"], ["name", "search-20", "size", "20"], ["class", "search__button search__button--type--close", "type", "button", 3, "click", 4, "ngIf"], [1, "search__border"], [1, "suggestions__list"], ["class", "suggestions__item", 4, "ngFor", "ngForOf"], ["aria-label", "Category", "formControlName", "category", 1, "search__categories", 3, "focus"], ["value", "all"], [3, "value", "innerHTML", 4, "ngFor", "ngForOf"], [3, "value", "innerHTML"], ["type", "button", 1, "search__button", "search__button--type--close", 3, "click"], ["name", "cross-20", "size", "20"], [1, "suggestions__item"], [1, "suggestions__item-image", "product-image"], [1, "product-image__body"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "suggestions__item-info"], [1, "suggestions__item-name", 3, "routerLink", "click"], [1, "suggestions__item-meta"], [1, "suggestions__item-price"], ["class", "suggestions__item-actions", 4, "ngIf"], [1, "suggestions__item-actions"], ["type", "button", "title", "Add to cart", 1, "btn", "btn-primary", "btn-sm", "btn-svg-icon", 3, "click"], ["name", "cart-16", "size", "16"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SearchComponent_select_5_Template, 4, 1, "select", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 5, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.escape", function SearchComponent_Template_input_keydown_escape_6_listener() {
            return ctx.escape.next();
          })("focus", function SearchComponent_Template_input_focus_6_listener() {
            return ctx.openSuggestion();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "app-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, SearchComponent_button_10_Template, 2, 0, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div")(13, "ul", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, SearchComponent_li_14_Template, 13, 8, "li", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.location === "header");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.location === "mobile-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("search__suggestions suggestions suggestions--location--", ctx.location, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.suggestedProducts);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkWithHref, _icon_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_6__.CurrencyFormatPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"]
    });
  }
}

/***/ }),

/***/ 3791:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/share-buttons/share-buttons.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareButtonsComponent": () => (/* binding */ ShareButtonsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/click.directive */ 7993);





function ShareButtonsComponent_li_4_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("share-buttons__item-icon ", item_r1.icon, "");
} }
function ShareButtonsComponent_li_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.label);
} }
function ShareButtonsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShareButtonsComponent_li_4_i_2_Template, 1, 3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ShareButtonsComponent_li_4_span_3_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("share-buttons__item share-buttons__item--type--", item_r1.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("share-buttons__item--without-label", !(item_r1.label && ctx_r0.showLabels));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.icon && ctx_r0.showIcons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.label && ctx_r0.showLabels);
} }
const shareButtonsDef = {
    facebook: {
        url: 'https://www.facebook.com/sharer/sharer.php?u=%URL%',
        icon: 'fab fa-facebook-f',
        label: 'Like',
    },
    twitter: {
        url: 'https://twitter.com/share?url=%URL%',
        icon: 'fab fa-twitter',
        label: 'Tweet',
    },
    pinterest: {
        url: 'https://pinterest.com/pin/create/button/?url=%URL%&media=%IMAGE%&description=%TITLE%',
        icon: 'fab fa-pinterest',
        label: 'Pin It',
    },
    whatsapp: {
        url: 'https://wa.me/?text=%URL%',
        icon: 'fab fa-whatsapp',
        label: 'Share',
    },
    linkedin: {
        url: 'https://www.linkedin.com/shareArticle?title=%TITLE%&url=%URL%',
        icon: 'fab fa-linkedin',
        label: 'Share',
    },
    ok: {
        url: 'https://connect.ok.ru/offer?url=%URL%&title=%TITLE%&imageUrl=%IMAGE%',
        icon: 'fab fa-odnoklassniki',
        label: 'Share',
    },
    vk: {
        url: 'https://vk.com/share.php?url=%URL%',
        icon: 'fab fa-vk',
        label: 'Share',
    },
    telegram: {
        url: 'https://telegram.me/share/url?url=%URL%&text=%TITLE%',
        icon: 'fas fa-paper-plane',
        label: 'Share',
    },
    email: {
        url: 'mailto:?to=&subject=%TITLE%&body=%URL%',
        icon: 'fas fa-envelope',
        label: 'Share',
    },
};
class ShareButtonsComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.items = [];
        this.buttons = [];
        this.showIcons = true;
        this.showLabels = true;
        this.pageUrl = '';
        this.pageTitle = '';
        this.pageImage = '';
        this.classShareLinks = true;
    }
    ngOnChanges(changes) {
        if (changes['buttons'] || changes['pageUrl'] || changes['pageTitle'] || changes['pageImage']) {
            this.makeItems();
        }
    }
    makeItems() {
        let value = this.buttons;
        if (typeof value === 'string') {
            value = value.split(',');
        }
        this.items = value.map(x => {
            const userDef = typeof x === 'string' ? { type: x } : x;
            const type = userDef.type;
            const def = shareButtonsDef[type];
            if (!def) {
                return null;
            }
            return {
                type,
                url: this.makeShareUrl(def.url),
                label: typeof userDef.label === 'string' ? userDef.label : def.label,
                icon: typeof userDef.icon === 'string' ? userDef.icon : def.icon,
            };
        }).filter(x => x !== null);
    }
    makeShareUrl(baseUrl) {
        let pageUrl = '';
        let pageTitle = '';
        let pageImage = '';
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            pageUrl = window.location.href;
        }
        pageUrl = this.pageUrl || pageUrl;
        pageTitle = this.pageTitle || pageTitle;
        pageImage = this.pageImage || pageImage;
        return baseUrl
            .replace('%URL%', encodeURIComponent(pageUrl))
            .replace('%TITLE%', encodeURIComponent(pageTitle))
            .replace('%IMAGE%', encodeURIComponent(pageImage));
    }
    static { this.ɵfac = function ShareButtonsComponent_Factory(t) { return new (t || ShareButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShareButtonsComponent, selectors: [["app-share-buttons"]], hostVars: 2, hostBindings: function ShareButtonsComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("share-buttons", ctx.classShareLinks);
        } }, inputs: { buttons: "buttons", showIcons: "showIcons", showLabels: "showLabels", pageUrl: "pageUrl", pageTitle: "pageTitle", pageImage: "pageImage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 2, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "share-buttons__list"], [3, "class", "share-buttons__item--without-label", 4, "ngFor", "ngForOf"], ["target", "_blank", "appClick", ""], [3, "class", 4, "ngIf"], ["class", "share-buttons__item-label", 4, "ngIf"], [1, "share-buttons__item-label"]], template: function ShareButtonsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ShareButtonsComponent_li_4_Template, 4, 8, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _directives_click_directive__WEBPACK_IMPORTED_MODULE_0__.ClickDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 4150:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/social-links/social-links.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialLinksComponent": () => (/* binding */ SocialLinksComponent)
/* harmony export */ });
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/theme */ 7229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function SocialLinksComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("social-links__link social-links__link--type--", item_r1.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r1.icon);
} }
class SocialLinksComponent {
    constructor() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_0__.theme;
        this.items = [
            { type: 'facebook', url: this.theme.author.profile_url, icon: 'fab fa-facebook-f' },
            { type: 'twitter', url: this.theme.author.profile_url, icon: 'fab fa-twitter' },
            { type: 'youtube', url: this.theme.author.profile_url, icon: 'fab fa-youtube' },
            { type: 'instagram', url: this.theme.author.profile_url, icon: 'fab fa-instagram' },
            { type: 'rss', url: this.theme.author.profile_url, icon: 'fas fa-rss' },
        ];
        this.shape = 'circle';
        this.classSocialLinks = true;
    }
    get classSocialLinksShapeCircle() { return this.shape === 'circle'; }
    get classSocialLinksShapeRounded() { return this.shape === 'rounded'; }
    static { this.ɵfac = function SocialLinksComponent_Factory(t) { return new (t || SocialLinksComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SocialLinksComponent, selectors: [["app-social-links"]], hostVars: 6, hostBindings: function SocialLinksComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("social-links", ctx.classSocialLinks)("social-links--shape--circle", ctx.classSocialLinksShapeCircle)("social-links--shape--rounded", ctx.classSocialLinksShapeRounded);
        } }, inputs: { shape: "shape" }, decls: 2, vars: 1, consts: [[1, "social-links__list"], ["class", "social-links__item", 4, "ngFor", "ngForOf"], [1, "social-links__item"], ["target", "_blank", 3, "href"], [3, "ngClass"]], template: function SocialLinksComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SocialLinksComponent_li_1_Template, 3, 5, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtbGlua3MuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 7993:
/*!******************************************************!*\
  !*** ./src/app/shared/directives/click.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickDirective": () => (/* binding */ ClickDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




/**
 * This directive helps to solve issue related to "iOS hover emulation" when first click
 */
class ClickDirective {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        let clicked = false;
        let identifier = null;
        let x = null;
        let y = null;
        this.zone.runOutsideAngular(() => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.element, 'touchstart').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(event => {
                if (event.touches.length !== 1) {
                    return;
                }
                const touch = event.changedTouches[0];
                clicked = true;
                identifier = touch.identifier;
                x = touch.clientX;
                y = touch.clientY;
                setTimeout(() => {
                    clicked = false;
                    identifier = x = y = null;
                }, 300);
            });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.element, 'touchend').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(event => {
                if (clicked && event.changedTouches.length === 1 && event.changedTouches[0].identifier === identifier && x && y) {
                    const touch = event.changedTouches[0];
                    const distance = Math.abs(Math.sqrt(Math.pow(x - touch.clientX, 2) +
                        Math.pow(y - touch.clientY, 2)));
                    if (distance < 15) {
                        event.preventDefault();
                        this.element.click();
                    }
                }
                clicked = false;
                identifier = x = y = null;
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function ClickDirective_Factory(t) { return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone)); }; }
    static { this.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: ClickDirective, selectors: [["", "appClick", ""]] }); }
}


/***/ }),

/***/ 514:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/collapse.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseContentDirective": () => (/* binding */ CollapseContentDirective),
/* harmony export */   "CollapseDirective": () => (/* binding */ CollapseDirective),
/* harmony export */   "CollapseItemDirective": () => (/* binding */ CollapseItemDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class CollapseContentDirective {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.element, 'transitionend').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(event => {
                if (event.propertyName === 'height') {
                    this.element.style.height = '';
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function CollapseContentDirective_Factory(t) { return new (t || CollapseContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone)); }; }
    static { this.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CollapseContentDirective, selectors: [["", "appCollapseContent", ""]] }); }
}
class CollapseItemDirective {
    constructor(el) {
        this.el = el;
        this.appCollapseItem = '';
        this.content = null;
    }
    get class() {
        return this.appCollapseItem;
    }
    get isOpen() {
        return this.element.classList.contains(this.class);
    }
    get element() {
        return this.el.nativeElement;
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    open() {
        if (this.content) {
            const startHeight = this.content.element.getBoundingClientRect().height;
            this.element.classList.add(this.class);
            const endHeight = this.content.element.getBoundingClientRect().height;
            this.content.element.style.height = `${startHeight}px`;
            this.element.getBoundingClientRect(); // force reflow
            this.content.element.style.height = `${endHeight}px`;
        }
        else {
            this.element.classList.add(this.class);
        }
    }
    close() {
        if (this.content) {
            const startHeight = this.content.element.getBoundingClientRect().height;
            this.content.element.style.height = `${startHeight}px`;
            this.element.classList.remove(this.class);
            this.element.getBoundingClientRect(); // force reflow
            this.content.element.style.height = '';
        }
        else {
            this.element.classList.remove(this.class);
        }
    }
    static { this.ɵfac = function CollapseItemDirective_Factory(t) { return new (t || CollapseItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CollapseItemDirective, selectors: [["", "appCollapseItem", ""]], contentQueries: function CollapseItemDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CollapseContentDirective, 5);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        } }, inputs: { appCollapseItem: "appCollapseItem" }, exportAs: ["appCollapseItem"] }); }
}
class CollapseDirective {
    static { this.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CollapseDirective, selectors: [["", "appCollapse", ""]] }); }
}


/***/ }),

/***/ 9337:
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/departments-area.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentsAreaDirective": () => (/* binding */ DepartmentsAreaDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/header.service */ 940);



class DepartmentsAreaDirective {
    constructor(el, header) {
        this.el = el;
        this.header = header;
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        this.header.departmentsArea = this.element;
    }
    ngOnDestroy() {
        this.header.departmentsArea = null;
    }
    static { this.ɵfac = function DepartmentsAreaDirective_Factory(t) { return new (t || DepartmentsAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_0__.HeaderService)); }; }
    static { this.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DepartmentsAreaDirective, selectors: [["", "appDepartmentsArea", ""]] }); }
}


/***/ }),

/***/ 8971:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownDirective": () => (/* binding */ DropdownDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5921);





class DropdownDirective {
    constructor(platformId, el, zone) {
        this.platformId = platformId;
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.appDropdown = '';
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe((event) => {
                    if (!el.nativeElement.contains(event.target)) {
                        this.close();
                    }
                });
            });
        }
    }
    get isOpen() {
        return this.element.classList.contains(this.appDropdown);
    }
    get element() {
        return this.el.nativeElement;
    }
    toggle(force) {
        this.element.classList.toggle(this.appDropdown, force);
    }
    close() {
        this.toggle(false);
    }
    open() {
        this.toggle(true);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone)); }; }
    static { this.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "appDropdown", ""]], inputs: { appDropdown: "appDropdown" }, exportAs: ["appDropdown"] }); }
}


/***/ }),

/***/ 3210:
/*!************************************************************!*\
  !*** ./src/app/shared/directives/fake-slides.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeSlidesDirective": () => (/* binding */ FakeSlidesDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);



class FakeSlidesDirective {
    constructor(eventManager, el) {
        this.eventManager = eventManager;
        this.el = el;
        this.options = null;
        this.appFakeSlides = 0;
        this.slides = [];
        this.slidesCount = 0;
        this.resizeHandler = () => { };
    }
    ngOnInit() {
        this.resizeHandler = this.eventManager.addGlobalEventListener('window', 'resize', () => this.calc());
        this.calc();
    }
    calc() {
        let newFakeSlidesCount = 0;
        if (this.options) {
            let match = -1;
            const viewport = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            const overwrites = this.options.responsive;
            if (overwrites) {
                for (const key in overwrites) {
                    if (overwrites.hasOwnProperty(key)) {
                        if (+key <= viewport && +key > match) {
                            match = Number(key);
                        }
                    }
                }
            }
            if (match >= 0) {
                const items = overwrites[match].items;
                newFakeSlidesCount = Math.max(0, items - this.appFakeSlides);
            }
            else if (this.options.items) {
                newFakeSlidesCount = Math.max(0, this.options.items - this.appFakeSlides);
            }
        }
        if (this.slidesCount !== newFakeSlidesCount) {
            this.slides = [];
            this.slidesCount = newFakeSlidesCount;
            for (let i = 0; i < newFakeSlidesCount; i++) {
                this.slides.push(i);
            }
        }
    }
    ngOnChanges() {
        this.calc();
    }
    ngOnDestroy() {
        if (this.resizeHandler) {
            this.resizeHandler();
        }
    }
    static { this.ɵfac = function FakeSlidesDirective_Factory(t) { return new (t || FakeSlidesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.EventManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FakeSlidesDirective, selectors: [["", "appFakeSlides", ""]], inputs: { options: "options", appFakeSlides: "appFakeSlides" }, exportAs: ["appFakeSlides"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] }); }
}


/***/ }),

/***/ 1230:
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/outside-touch-click.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutsideTouchClickDirective": () => (/* binding */ OutsideTouchClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/rxjs/fromOutsideTouchClick */ 1640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);






class OutsideTouchClickDirective {
    constructor(platformId, elementRef, zone) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.zone = zone;
        this.outsideTouchClickZone = false;
        this.appOutsideTouchClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    get element() {
        return this.elementRef.nativeElement;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                (0,_functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_0__.fromOutsideTouchClick)(this.element).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(event => {
                    if (this.outsideTouchClickZone) {
                        this.zone.run(() => this.appOutsideTouchClick.emit(event));
                    }
                    else {
                        this.appOutsideTouchClick.emit(event);
                    }
                });
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function OutsideTouchClickDirective_Factory(t) { return new (t || OutsideTouchClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone)); }; }
    static { this.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: OutsideTouchClickDirective, selectors: [["", "appOutsideTouchClick", ""]], inputs: { outsideTouchClickZone: "outsideTouchClickZone" }, outputs: { appOutsideTouchClick: "appOutsideTouchClick" } }); }
}


/***/ }),

/***/ 876:
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/owl-prevent-click.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OwlPreventClickDirective": () => (/* binding */ OwlPreventClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9151);





/**
 * This directive adds the "owl-prevent-click" class to the .owl-carousel element when dragging.
 * When the class "owl-prevent-click" is applied to an element, a pseudo-element is created and
 * a mouseup event occurs on it, which prevents clicking.
 */
class OwlPreventClickDirective {
    constructor(platformId, elementRef, zone) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.zone = zone;
    }
    get element() {
        return this.elementRef.nativeElement;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                const children = [].slice.call(this.element.children);
                const owlCarouseElement = children.find(element => element.classList.contains('owl-carousel'));
                if (!owlCarouseElement) {
                    return;
                }
                (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(owlCarouseElement, 'mousedown').subscribe(mouseDownEvent => {
                    const timeout = setTimeout(() => {
                        owlCarouseElement.classList.add('owl-prevent-click');
                    }, 250);
                    const mouseUpEvent$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, 'mouseup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(mouseUpEvent$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(mouseMoveEvent => Math.abs(Math.sqrt(Math.pow(mouseDownEvent.clientX - mouseMoveEvent.clientX, 2) +
                        Math.pow(mouseDownEvent.clientY - mouseMoveEvent.clientY, 2)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(distance => distance > 15), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => {
                        owlCarouseElement.classList.add('owl-prevent-click');
                    });
                    mouseUpEvent$.subscribe(() => {
                        owlCarouseElement.classList.remove('owl-prevent-click');
                        clearTimeout(timeout);
                    });
                });
            });
        }
    }
    static { this.ɵfac = function OwlPreventClickDirective_Factory(t) { return new (t || OwlPreventClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone)); }; }
    static { this.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({ type: OwlPreventClickDirective, selectors: [["", "appOwlPreventClick", ""]] }); }
}


/***/ }),

/***/ 2083:
/*!************************************************************!*\
  !*** ./src/app/shared/directives/touch-click.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TouchClickDirective": () => (/* binding */ TouchClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _functions_rxjs_fromTouchClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/rxjs/fromTouchClick */ 8202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);






class TouchClickDirective {
    constructor(platformId, elementRef, zone) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.zone = zone;
        this.appTouchClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    get element() {
        return this.elementRef.nativeElement;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                (0,_functions_rxjs_fromTouchClick__WEBPACK_IMPORTED_MODULE_0__.fromTouchClick)(this.element).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(event => {
                    this.zone.run(() => this.appTouchClick.emit(event));
                });
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function TouchClickDirective_Factory(t) { return new (t || TouchClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone)); }; }
    static { this.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TouchClickDirective, selectors: [["", "appTouchClick", ""]], outputs: { appTouchClick: "appTouchClick" } }); }
}


/***/ }),

/***/ 6106:
/*!***************************************************************!*\
  !*** ./src/app/shared/functions/rxjs/fromGlobalTouchClick.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromGlobalTouchClick": () => (/* binding */ fromGlobalTouchClick)
/* harmony export */ });
/* harmony import */ var _fromTouchClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromTouchClick */ 8202);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4514);


let globalListener = null;
function fromGlobalTouchClick() {
    if (globalListener === null) {
        globalListener = (0,_fromTouchClick__WEBPACK_IMPORTED_MODULE_0__.fromTouchClick)(document).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.share)());
    }
    return globalListener;
}


/***/ }),

/***/ 3046:
/*!*********************************************************!*\
  !*** ./src/app/shared/functions/rxjs/fromMatchMedia.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromMatchMedia": () => (/* binding */ fromMatchMedia)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);

function fromMatchMedia(query, ignoreInitial = true) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
        const mediaQueryList = matchMedia(query);
        const onChange = () => observer.next(mediaQueryList);
        if (!ignoreInitial) {
            observer.next(mediaQueryList);
        }
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', onChange);
            return () => mediaQueryList.removeEventListener('change', onChange);
        }
        else {
            // noinspection JSDeprecatedSymbols
            mediaQueryList.addListener(onChange);
            // noinspection JSDeprecatedSymbols
            return () => mediaQueryList.removeListener(onChange);
        }
    });
}


/***/ }),

/***/ 1640:
/*!****************************************************************!*\
  !*** ./src/app/shared/functions/rxjs/fromOutsideTouchClick.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromOutsideTouchClick": () => (/* binding */ fromOutsideTouchClick)
/* harmony export */ });
/* harmony import */ var _fromGlobalTouchClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromGlobalTouchClick */ 6106);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9151);


function fromOutsideTouchClick(element) {
    return (0,_fromGlobalTouchClick__WEBPACK_IMPORTED_MODULE_0__.fromGlobalTouchClick)().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => {
        let node = event.target || null;
        while (node) {
            if (node === element) {
                break;
            }
            node = node.parentElement;
        }
        return node === null;
    }));
}


/***/ }),

/***/ 8202:
/*!*********************************************************!*\
  !*** ./src/app/shared/functions/rxjs/fromTouchClick.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromTouchClick": () => (/* binding */ fromTouchClick)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);

function fromTouchClick(element) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
        let touchStartData = null;
        const onTouchStart = (event) => {
            if (!(event instanceof TouchEvent)) {
                return;
            }
            if (event.touches.length !== 1) {
                touchStartData = null;
                return;
            }
            touchStartData = {
                target: event.currentTarget,
                touch: event.changedTouches[0],
                timestamp: (new Date()).getTime(),
            };
        };
        const onTouchEnd = (event) => {
            if (!(event instanceof TouchEvent)) {
                return;
            }
            if (!touchStartData ||
                event.changedTouches.length !== 1 ||
                event.changedTouches[0].identifier !== touchStartData.touch.identifier) {
                return;
            }
            const timestamp = (new Date()).getTime();
            const touch = event.changedTouches[0];
            const distance = Math.abs(Math.sqrt(Math.pow(touchStartData.touch.screenX - touch.screenX, 2) +
                Math.pow(touchStartData.touch.screenY - touch.screenY, 2)));
            if (touchStartData.target === event.currentTarget && timestamp - touchStartData.timestamp < 500 && distance < 10) {
                observer.next(event);
            }
        };
        element.addEventListener('touchstart', onTouchStart);
        element.addEventListener('touchend', onTouchEnd);
        return () => {
            element.removeEventListener('touchstart', onTouchStart);
            element.removeEventListener('touchend', onTouchEnd);
        };
    });
}


/***/ }),

/***/ 4368:
/*!*****************************************!*\
  !*** ./src/app/shared/helpers/color.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorType": () => (/* binding */ colorType),
/* harmony export */   "contrast": () => (/* binding */ contrast),
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb),
/* harmony export */   "luminance": () => (/* binding */ luminance)
/* harmony export */ });
/**
 * https://medium.muz.li/the-science-of-color-contrast-an-expert-designers-guide-33e84c41d156
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
function hexToRgb(hex) {
    if (!/^#(([A-Fa-f0-9]{3}){1,2})$/.test(hex)) {
        return null;
    }
    hex = hex.substr(1);
    let rgb;
    if (hex.length === 3) {
        const matches = hex.match(/./g);
        if (matches === null) {
            return null;
        }
        rgb = matches.map(x => x + x);
    }
    else {
        rgb = hex.match(/.{2}/g);
        if (rgb === null) {
            return null;
        }
    }
    return rgb.map(x => parseInt(x, 16));
}
function luminance(color) {
    let rgb = hexToRgb(color);
    if (!rgb) {
        return null;
    }
    rgb = rgb.map(x => x / 255).map(x => {
        if (x <= 0.03928) {
            return x / 12.92;
        }
        else {
            return Math.pow((x + 0.055) / 1.055, 2.4);
        }
    });
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}
function contrast(color1, color2) {
    const l1 = luminance(color1);
    const l2 = luminance(color2);
    if (l1 === null || l2 === null) {
        return null;
    }
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
const cache = {};
function colorType(color) {
    if (color in cache) {
        return cache[color];
    }
    const whiteContras = contrast(color, '#fff');
    const blackContras = contrast(color, '#000');
    let result;
    if (whiteContras === null || blackContras === null) {
        result = 'white';
    }
    else if (whiteContras === 1 && blackContras === 21) {
        result = 'white';
    }
    else if (whiteContras === 21 && blackContras === 1) {
        result = 'black';
    }
    else if (whiteContras >= 3 && blackContras < 10) {
        result = 'dark';
    }
    else {
        result = 'light';
    }
    return cache[color] = result;
}


/***/ }),

/***/ 4335:
/*!***********************************************!*\
  !*** ./src/app/shared/interfaces/category.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9889:
/*!***********************************************!*\
  !*** ./src/app/shared/interfaces/currency.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7976:
/*!*********************************************!*\
  !*** ./src/app/shared/interfaces/filter.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6355:
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/absolute-url.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbsoluteUrlPipe": () => (/* binding */ AbsoluteUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class AbsoluteUrlPipe {
    constructor(platformId, router, route) {
        this.platformId = platformId;
        this.router = router;
        this.route = route;
    }
    transform(value, scope = 'html') {
        if (!value || !(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            return value;
        }
        if (scope === 'angular') {
            value = this.router.createUrlTree([value], { relativeTo: this.route }).toString().substr(1);
        }
        const a = document.createElement('a');
        a.href = value;
        return a.href;
    }
    static { this.ɵfac = function AbsoluteUrlPipe_Factory(t) { return new (t || AbsoluteUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute, 16)); }; }
    static { this.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "absoluteUrl", type: AbsoluteUrlPipe, pure: true }); }
}


/***/ }),

/***/ 7492:
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/color-type.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorTypePipe": () => (/* binding */ ColorTypePipe)
/* harmony export */ });
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/color */ 4368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ColorTypePipe {
    transform(value) {
        return (0,_helpers_color__WEBPACK_IMPORTED_MODULE_0__.colorType)(value);
    }
    static { this.ɵfac = function ColorTypePipe_Factory(t) { return new (t || ColorTypePipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "colorType", type: ColorTypePipe, pure: true }); }
}


/***/ }),

/***/ 133:
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/currency-format.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyFormatPipe": () => (/* binding */ CurrencyFormatPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/currency.service */ 8910);




class CurrencyFormatPipe {
    constructor(locale, service) {
        this.locale = locale;
        this.service = service;
        this.currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe(this.locale);
        this.isLog = true;
    }
    transform(value, currencyCode, display, digitsInfo, locale) {
        currencyCode = currencyCode || this.service.options.code;
        display = display || this.service.options.display;
        digitsInfo = digitsInfo || this.service.options.digitsInfo;
        locale = locale || this.service.options.locale;
        value = value * this.service.rate;
        if (this.isLog) {
            console.log('- pipe -- CurrencyFormatPipe options -> %o ', this.service.options);
            console.log('- pipe -- CurrencyFormatPipe value -> %o, currencyCode -> %o rate -> %o', value, currencyCode, this.service.rate);
        }
        return this.currencyPipe.transform(value, currencyCode, display, digitsInfo, locale);
    }
    static { this.ɵfac = function CurrencyFormatPipe_Factory(t) { return new (t || CurrencyFormatPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID, 16), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_currency_service__WEBPACK_IMPORTED_MODULE_0__.CurrencyService, 16)); }; }
    static { this.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "currencyFormat", type: CurrencyFormatPipe, pure: false }); }
}


/***/ }),

/***/ 5237:
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





class CartService {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = {
            items: [],
            quantity: 0,
            subtotal: 0,
            totals: [],
            total: 0
        };
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.data.items);
        this.quantitySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.data.quantity);
        this.subtotalSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.data.subtotal);
        this.totalsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.data.totals);
        this.totalSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.data.total);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.items$ = this.itemsSubject$.asObservable();
        this.quantity$ = this.quantitySubject$.asObservable();
        this.subtotal$ = this.subtotalSubject$.asObservable();
        this.totals$ = this.totalsSubject$.asObservable();
        this.total$ = this.totalSubject$.asObservable();
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.load();
            this.calc();
        }
    }
    get items() {
        return this.data.items;
    }
    get quantity() {
        return this.data.quantity;
    }
    add(product, quantity, options = []) {
        // timer only for demo
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => {
            this.onAddingSubject$.next(product);
            let item = this.items.find(eachItem => {
                if (eachItem.product.id !== product.id || eachItem.options.length !== options.length) {
                    return false;
                }
                if (eachItem.options.length) {
                    for (const option of options) {
                        if (!eachItem.options.find(itemOption => itemOption.name === option.name && itemOption.value === option.value)) {
                            return false;
                        }
                    }
                }
                return true;
            });
            if (item) {
                item.quantity += quantity;
            }
            else {
                item = { product, quantity, options };
                this.data.items.push(item);
            }
            this.save();
            this.calc();
            return item;
        }));
    }
    update(updates) {
        // timer only for demo
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => {
            updates.forEach(update => {
                const item = this.items.find(eachItem => eachItem === update.item);
                if (item) {
                    item.quantity = update.quantity;
                }
            });
            this.save();
            this.calc();
        }));
    }
    remove(item) {
        // timer only for demo
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => {
            this.data.items = this.data.items.filter(eachItem => eachItem !== item);
            this.save();
            this.calc();
        }));
    }
    calc() {
        let quantity = 0;
        let subtotal = 0;
        this.data.items.forEach(item => {
            quantity += item.quantity;
            subtotal += item.product.price * item.quantity;
        });
        const totals = [];
        totals.push({
            title: 'Shipping',
            price: 25,
            type: 'shipping'
        });
        totals.push({
            title: 'Tax',
            price: subtotal * 0.20,
            type: 'tax'
        });
        const total = subtotal + totals.reduce((acc, eachTotal) => acc + eachTotal.price, 0);
        this.data.quantity = quantity;
        this.data.subtotal = subtotal;
        this.data.totals = totals;
        this.data.total = total;
        this.itemsSubject$.next(this.data.items);
        this.quantitySubject$.next(this.data.quantity);
        this.subtotalSubject$.next(this.data.subtotal);
        this.totalsSubject$.next(this.data.totals);
        this.totalSubject$.next(this.data.total);
    }
    save() {
        localStorage.setItem('cartItems', JSON.stringify(this.data.items));
    }
    load() {
        const items = localStorage.getItem('cartItems');
        if (items) {
            this.data.items = JSON.parse(items);
        }
    }
    static { this.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 3940:
/*!****************************************************!*\
  !*** ./src/app/shared/services/compare.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareService": () => (/* binding */ CompareService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





class CompareService {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = {
            items: []
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.items$ = this.itemsSubject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            this.load();
        }
    }
    add(product) {
        // timer only for demo
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            this.onAddingSubject$.next(product);
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index === -1) {
                this.data.items.push(product);
                this.save();
            }
        }));
    }
    remove(product) {
        // timer only for demo
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.data.items.splice(index, 1);
                this.save();
            }
        }));
    }
    save() {
        localStorage.setItem('compareItems', JSON.stringify(this.data.items));
        this.itemsSubject$.next(this.data.items);
    }
    load() {
        const items = localStorage.getItem('compareItems');
        if (items) {
            this.data.items = JSON.parse(items);
            this.itemsSubject$.next(this.data.items);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function CompareService_Factory(t) { return new (t || CompareService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: CompareService, factory: CompareService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 8910:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/currency.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyService": () => (/* binding */ CurrencyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class CurrencyService {
    constructor() {
        this.data = {
            options: {}
        };
        this.isLog = true;
        this.changesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.changes$ = this.changesSubject$.asObservable();
        this.rates = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.rates; // {'EUR': 1, 'USD': 1.05};
    }
    get options() {
        return this.data.options;
    }
    set options(value) {
        this.data.options = value;
        if (this.isLog) {
            console.log('- srv -- CurrencyService.set options   options -> %o rate -> %o', this.data.options, this.rate);
        }
        this.changesSubject$.next(value);
    }
    get rate() {
        const code = this.data.options.code;
        let rate = 1;
        if (code in this.rates) {
            rate = this.rates[code];
        }
        return rate;
    }
    static { this.ɵfac = function CurrencyService_Factory(t) { return new (t || CurrencyService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CurrencyService, factory: CurrencyService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 7341:
/*!******************************************************!*\
  !*** ./src/app/shared/services/direction.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectionService": () => (/* binding */ DirectionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4666);



class DirectionService {
    constructor(platformId) {
        this.platformId = platformId;
        this.direction = 'ltr';
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            this.direction = getComputedStyle(document.body).direction;
        }
    }
    get value() {
        return this.direction;
    }
    set value(value) {
        this.direction = value;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            document.dir = this.direction;
        }
    }
    // noinspection JSUnusedGlobalSymbols
    isLTR() {
        return this.value === 'ltr';
    }
    isRTL() {
        return this.value === 'rtl';
    }
    static { this.ɵfac = function DirectionService_Factory(t) { return new (t || DirectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DirectionService, factory: DirectionService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 940:
/*!***************************************************!*\
  !*** ./src/app/shared/services/header.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderService": () => (/* binding */ HeaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class HeaderService {
    constructor() {
        this.departmentsAreaValue = null;
        this.departmentsAreaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.departmentsArea$ = this.departmentsAreaSubject.asObservable();
        this.navPanelPositionValue = 'static';
        this.navPanelPositionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.navPanelPositionState$ = this.navPanelPositionSubject.asObservable();
        this.navPanelVisibilityValue = 'hidden';
        this.navPanelVisibilitySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.navPanelVisibility$ = this.navPanelVisibilitySubject.asObservable();
    }
    get departmentsArea() {
        return this.departmentsAreaValue;
    }
    set departmentsArea(value) {
        if (this.departmentsAreaValue !== value) {
            this.departmentsAreaValue = value;
            this.departmentsAreaSubject.next(value);
        }
    }
    get navPanelPosition() {
        return this.navPanelPositionValue;
    }
    set navPanelPosition(value) {
        if (this.navPanelPositionValue !== value) {
            this.navPanelPositionValue = value;
            this.navPanelPositionSubject.next(value);
        }
    }
    get navPanelVisibility() {
        return this.navPanelVisibilityValue;
    }
    set navPanelVisibility(value) {
        if (this.navPanelVisibilityValue !== value) {
            this.navPanelVisibilityValue = value;
            this.navPanelVisibilitySubject.next(value);
        }
    }
    static { this.ɵfac = function HeaderService_Factory(t) { return new (t || HeaderService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HeaderService, factory: HeaderService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 4785:
/*!********************************************************!*\
  !*** ./src/app/shared/services/mobile-menu.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileMenuService": () => (/* binding */ MobileMenuService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);




class MobileMenuService {
    constructor(platformId) {
        this.platformId = platformId;
        this.openSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.isOpen$ = this.openSubject$.asObservable();
    }
    open() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
            this.openSubject$.next(true);
        }
    }
    close() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
            this.openSubject$.next(false);
        }
    }
    toggle() {
        this.openSubject$.next(!this.openSubject$.value);
    }
    static { this.ɵfac = function MobileMenuService_Factory(t) { return new (t || MobileMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MobileMenuService, factory: MobileMenuService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 6163:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/offcanvas-cart.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffcanvasCartService": () => (/* binding */ OffcanvasCartService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);




class OffcanvasCartService {
    constructor(platformId) {
        this.platformId = platformId;
        this.openSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.isOpen$ = this.openSubject$.asObservable();
    }
    open() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
            this.openSubject$.next(true);
        }
    }
    close() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            this.openSubject$.next(false);
        }
    }
    toggle() {
        this.openSubject$.next(!this.openSubject$.value);
    }
    static { this.ɵfac = function OffcanvasCartService_Factory(t) { return new (t || OffcanvasCartService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OffcanvasCartService, factory: OffcanvasCartService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 7:
/*!********************************************************!*\
  !*** ./src/app/shared/services/photo-swipe.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoSwipeService": () => (/* binding */ PhotoSwipeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.service */ 138);




const template = `
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <!--<button class="pswp__button pswp__button&#45;&#45;share" title="Share"></button>-->
                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>
`;
class PhotoSwipeService {
    constructor(zone, resources) {
        this.zone = zone;
        this.resources = resources;
        this.initialized = false;
    }
    load() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.loadLibrary());
    }
    open(items, options) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
            this.zone.runOutsideAngular(() => {
                this.loadLibrary().then(() => {
                    if (observer.closed) {
                        return;
                    }
                    if (!this.initialized) {
                        this.init();
                    }
                    this.createGallery(observer, items, options);
                });
            });
        });
    }
    ngOnDestroy() {
        if (this.initialized && this.element.parentElement) {
            this.element.parentElement.removeChild(this.element);
        }
    }
    createGallery(observer, items, options) {
        let gallery = null;
        gallery = new PhotoSwipe(this.element, PhotoSwipeUI_Default, items, options);
        gallery.listen('destroy', () => this.zone.run(() => {
            gallery = null;
            this.zone.run(() => observer.complete());
        }));
        gallery.init();
        const modelRef = {
            close: () => {
                if (gallery) {
                    gallery.close();
                }
            },
            listen: (eventName, callbackFn) => gallery.listen(eventName, (...args) => {
                this.zone.run(() => callbackFn(...args));
            }),
            getCurrentIndex: () => gallery.getCurrentIndex()
        };
        observer.add(() => {
            if (gallery) {
                gallery.destroy();
            }
        });
        this.zone.run(() => observer.next(modelRef));
    }
    loadLibrary() {
        return this.resources.loadLibrary('photoSwipe');
    }
    init() {
        this.initialized = true;
        const div = document.createElement('div');
        div.innerHTML = template;
        this.element = div.firstElementChild;
        document.body.appendChild(this.element);
    }
    static { this.ɵfac = function PhotoSwipeService_Factory(t) { return new (t || PhotoSwipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_resources_service__WEBPACK_IMPORTED_MODULE_0__.ResourcesService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PhotoSwipeService, factory: PhotoSwipeService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 6018:
/*!******************************************************!*\
  !*** ./src/app/shared/services/quickview.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickviewService": () => (/* binding */ QuickviewService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);



class QuickviewService {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.showSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.show$ = this.showSubject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.destroy$));
    }
    show(product) {
        // timer only for demo
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
            this.showSubject$.next(product);
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function QuickviewService_Factory(t) { return new (t || QuickviewService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: QuickviewService, factory: QuickviewService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 138:
/*!******************************************************!*\
  !*** ./src/app/shared/services/resources.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesService": () => (/* binding */ ResourcesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ResourcesService {
    constructor() {
        this.loaded = {};
        this.libraries = {
            photoSwipe: ResourcesService.parallel(this.styleTask('assets/vendor/photoswipe/photoswipe.css'), this.styleTask('assets/vendor/photoswipe/default-skin/default-skin.css'), this.scriptTask('assets/vendor/photoswipe/photoswipe.min.js'), this.scriptTask('assets/vendor/photoswipe/photoswipe-ui-default.min.js'))
        };
    }
    static series(...tasks) {
        const task = tasks.shift();
        if (!task) {
            return () => Promise.resolve();
        }
        return () => task().then(ResourcesService.series(...tasks));
    }
    static parallel(...tasks) {
        if (!tasks.length) {
            return () => Promise.resolve();
        }
        return () => Promise.all(tasks.map(task => task())).then(() => { });
    }
    // noinspection JSUnusedGlobalSymbols
    loadScript(url) {
        return this.scriptTask(url)();
    }
    // noinspection JSUnusedGlobalSymbols
    loadStyle(url) {
        return this.styleTask(url)();
    }
    loadLibrary(library) {
        return this.libraries[library]();
    }
    scriptTask(url) {
        return () => {
            if (!this.loaded.hasOwnProperty(url)) {
                this.loaded[url] = new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.onload = () => resolve();
                    script.onerror = () => reject(new Error('Loading error: ' + url));
                    script.src = url;
                    document.head.appendChild(script);
                });
            }
            return this.loaded[url];
        };
    }
    styleTask(url) {
        return () => {
            if (!this.loaded.hasOwnProperty(url)) {
                this.loaded[url] = new Promise((resolve, reject) => {
                    const link = document.createElement('link');
                    link.onload = () => resolve();
                    link.onerror = () => reject(new Error('Loading error: ' + url));
                    link.type = 'text/css';
                    link.rel = 'stylesheet';
                    link.href = url;
                    document.head.appendChild(link);
                });
            }
            return this.loaded[url];
        };
    }
    static { this.ɵfac = function ResourcesService_Factory(t) { return new (t || ResourcesService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResourcesService, factory: ResourcesService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 1372:
/*!*************************************************!*\
  !*** ./src/app/shared/services/root.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootService": () => (/* binding */ RootService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const isRootServiceLog = false;
class RootService {
    constructor() { }
    home() {
        return '/';
    }
    shop() {
        return `/shop/catalog`;
    }
    category(category) {
        if (isRootServiceLog) {
            console.log('- srv -- RootService.category() category -> %o', category);
        }
        if (category.type === 'shop') {
            const basePath = this.shop();
            if ('slug' in category) {
                return `${basePath}/${category.slug}`;
            }
            if ('id' in category) {
                return `${basePath}/${category.id}`;
            }
            throw Error('Provide category with "path", "slug" or "id".');
        }
        if (category.type === 'blog') {
            return this.blog();
        }
        throw Error('Provided category with unknown type.');
    }
    product(product) {
        const basePath = '/shop/products';
        if ('slug' in product) {
            return `${basePath}/${product.slug}`;
        }
        if ('id' in product) {
            return `${basePath}/${product.id}`;
        }
        throw Error('Provide product with "slug" or "id".');
    }
    // noinspection JSUnusedLocalSymbols
    brand(brand) {
        return '/';
    }
    cart() {
        return '/shop/cart';
    }
    checkout() {
        return '/shop/cart/checkout';
    }
    wishlist() {
        return '/shop/wishlist';
    }
    blog() {
        return '/blog';
    }
    post() {
        return `/blog/post-classic`;
    }
    login() {
        return '/account/login';
    }
    terms() {
        return '/site/terms';
    }
    notFound() {
        return `/site/not-found`;
    }
    static { this.ɵfac = function RootService_Factory(t) { return new (t || RootService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RootService, factory: RootService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 5819:
/*!**************************************************!*\
  !*** ./src/app/shared/services/store.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreService": () => (/* binding */ StoreService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StoreService {
    constructor() {
        this.address = '715 Fake Street, New York 10021 USA';
        this.email = 'stroyka@example.com';
        this.phone = ['(800) 060-0730', '(800) 060-0730'];
        this.hours = 'Mon-Sat 10:00pm - 7:00pm';
    }
    get primaryPhone() {
        return this.phone.length > 0 ? this.phone[0] : null;
    }
    static { this.ɵfac = function StoreService_Factory(t) { return new (t || StoreService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreService, factory: StoreService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 165:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/wishlist.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishlistService": () => (/* binding */ WishlistService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





class WishlistService {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = {
            items: []
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.items$ = this.itemsSubject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
        this.count$ = this.itemsSubject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(items => items.length));
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            this.load();
        }
    }
    add(product) {
        // timer only for demo
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
            this.onAddingSubject$.next(product);
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index === -1) {
                this.data.items.push(product);
                this.save();
            }
        }));
    }
    remove(product) {
        // timer only for demo
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.data.items.splice(index, 1);
                this.save();
            }
        }));
    }
    save() {
        localStorage.setItem('wishlistItems', JSON.stringify(this.data.items));
        this.itemsSubject$.next(this.data.items);
    }
    load() {
        const items = localStorage.getItem('wishlistItems');
        if (items) {
            this.data.items = JSON.parse(items);
            this.itemsSubject$.next(this.data.items);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function WishlistService_Factory(t) { return new (t || WishlistService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: WishlistService, factory: WishlistService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ 6528);
/* harmony import */ var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-red-zoom */ 7114);
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/click.directive */ 7993);
/* harmony import */ var _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/collapse.directive */ 514);
/* harmony import */ var _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/departments-area.directive */ 9337);
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/dropdown.directive */ 8971);
/* harmony import */ var _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/fake-slides.directive */ 3210);
/* harmony import */ var _directives_outside_touch_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/outside-touch-click.directive */ 1230);
/* harmony import */ var _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/owl-prevent-click.directive */ 876);
/* harmony import */ var _directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/touch-click.directive */ 2083);
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/alert/alert.component */ 8332);
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/icon/icon.component */ 2775);
/* harmony import */ var _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/input-number/input-number.component */ 6348);
/* harmony import */ var _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/loading-bar/loading-bar.component */ 7130);
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page-header/page-header.component */ 2802);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pagination/pagination.component */ 3556);
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/post-card/post-card.component */ 1368);
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product-card/product-card.component */ 3284);
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/product/product.component */ 5172);
/* harmony import */ var _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/quickview/quickview.component */ 9873);
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/rating/rating.component */ 9453);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/search/search.component */ 9727);
/* harmony import */ var _components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/share-buttons/share-buttons.component */ 3791);
/* harmony import */ var _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/social-links/social-links.component */ 4150);
/* harmony import */ var _pipes_absolute_url_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/absolute-url.pipe */ 6355);
/* harmony import */ var _pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/color-type.pipe */ 7492);
/* harmony import */ var _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/currency-format.pipe */ 133);
/* harmony import */ var _components_product_gallery_product_gallery_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/product-gallery/product-gallery.component */ 2273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 2560);
// modules (angular)




// modules (third-party)



// directives








// components














// pipes








class SharedModule {
    static { this.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: SharedModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule,
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_32__.CarouselModule,
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__.ModalModule.forRoot(),
            ngx_red_zoom__WEBPACK_IMPORTED_MODULE_33__.RedZoomModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [
        // directives
        _directives_click_directive__WEBPACK_IMPORTED_MODULE_1__.ClickDirective,
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_2__.CollapseContentDirective,
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_2__.CollapseDirective,
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_2__.CollapseItemDirective,
        _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_3__.DepartmentsAreaDirective,
        _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_4__.DropdownDirective,
        _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_5__.FakeSlidesDirective,
        _directives_outside_touch_click_directive__WEBPACK_IMPORTED_MODULE_6__.OutsideTouchClickDirective,
        _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_7__.OwlPreventClickDirective,
        _directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_8__.TouchClickDirective,
        // components
        _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__.AlertComponent,
        _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__.IconComponent,
        _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_11__.InputNumberComponent,
        _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_12__.LoadingBarComponent,
        _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__.PageHeaderComponent,
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent,
        _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_15__.PostCardComponent,
        _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_16__.ProductCardComponent,
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_17__.ProductComponent,
        _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_18__.QuickviewComponent,
        _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_19__.RatingComponent,
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_20__.SearchComponent,
        _components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_21__.ShareButtonsComponent,
        _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_22__.SocialLinksComponent,
        // pipes
        _pipes_absolute_url_pipe__WEBPACK_IMPORTED_MODULE_23__.AbsoluteUrlPipe,
        _pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_24__.ColorTypePipe,
        _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_25__.CurrencyFormatPipe,
        _components_product_gallery_product_gallery_component__WEBPACK_IMPORTED_MODULE_26__.ProductGalleryComponent], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule,
        // modules (third-party)
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_32__.CarouselModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__.ModalModule, ngx_red_zoom__WEBPACK_IMPORTED_MODULE_33__.RedZoomModule], exports: [
        // directives
        _directives_click_directive__WEBPACK_IMPORTED_MODULE_1__.ClickDirective,
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_2__.CollapseContentDirective,
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_2__.CollapseDirective,
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_2__.CollapseItemDirective,
        _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_3__.DepartmentsAreaDirective,
        _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_4__.DropdownDirective,
        _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_5__.FakeSlidesDirective,
        _directives_outside_touch_click_directive__WEBPACK_IMPORTED_MODULE_6__.OutsideTouchClickDirective,
        _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_7__.OwlPreventClickDirective,
        _directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_8__.TouchClickDirective,
        // components
        _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__.AlertComponent,
        _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__.IconComponent,
        _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_11__.InputNumberComponent,
        _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_12__.LoadingBarComponent,
        _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__.PageHeaderComponent,
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent,
        _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_15__.PostCardComponent,
        _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_16__.ProductCardComponent,
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_17__.ProductComponent,
        _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_18__.QuickviewComponent,
        _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_19__.RatingComponent,
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_20__.SearchComponent,
        _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_22__.SocialLinksComponent,
        // pipes
        _pipes_absolute_url_pipe__WEBPACK_IMPORTED_MODULE_23__.AbsoluteUrlPipe,
        _pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_24__.ColorTypePipe,
        _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_25__.CurrencyFormatPipe,
        _components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_21__.ShareButtonsComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetComponentScope"](_components_product_product_component__WEBPACK_IMPORTED_MODULE_17__.ProductComponent, function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormControlDirective, 
    // directives
    _directives_click_directive__WEBPACK_IMPORTED_MODULE_1__.ClickDirective,
    _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__.IconComponent,
    _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_11__.InputNumberComponent,
    _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_19__.RatingComponent,
    _components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_21__.ShareButtonsComponent,
    _components_product_gallery_product_gallery_component__WEBPACK_IMPORTED_MODULE_26__.ProductGalleryComponent]; }, function () { return [
    // pipes
    _pipes_absolute_url_pipe__WEBPACK_IMPORTED_MODULE_23__.AbsoluteUrlPipe,
    _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_25__.CurrencyFormatPipe]; });


/***/ }),

/***/ 1622:
/*!********************************!*\
  !*** ./src/data/blog-posts.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "posts": () => (/* binding */ posts)
/* harmony export */ });
const posts = [
    {
        title: 'Philosophy That Addresses Topics Such As Goodness',
        image: 'assets/images/posts/post-1.jpg',
        categories: ['Special Offers'],
        date: 'October 19, 2019'
    },
    {
        title: 'Logic Is The Study Of Reasoning And Argument Part 2',
        image: 'assets/images/posts/post-2.jpg',
        categories: ['Latest News'],
        date: 'September 5, 2019'
    },
    {
        title: 'Some Philosophers Specialize In One Or More Historical Periods',
        image: 'assets/images/posts/post-3.jpg',
        categories: ['New Arrivals'],
        date: 'August 12, 2019'
    },
    {
        title: 'A Variety Of Other Academic And Non-Academic Approaches Have Been Explored',
        image: 'assets/images/posts/post-4.jpg',
        categories: ['Special Offers'],
        date: 'Jule 30, 2019'
    },
    {
        title: 'Germany Was The First Country To Professionalize Philosophy',
        image: 'assets/images/posts/post-5.jpg',
        categories: ['New Arrivals'],
        date: 'June 12, 2019'
    },
    {
        title: 'Logic Is The Study Of Reasoning And Argument Part 1',
        image: 'assets/images/posts/post-6.jpg',
        categories: ['Special Offers'],
        date: 'May 21, 2019'
    },
    {
        title: 'Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense',
        image: 'assets/images/posts/post-7.jpg',
        categories: ['Special Offers'],
        date: 'April 3, 2019'
    },
    {
        title: 'An Advantage Of Digital Circuits When Compared To Analog Circuits',
        image: 'assets/images/posts/post-8.jpg',
        categories: ['Latest News'],
        date: 'Mart 29, 2019'
    },
    {
        title: 'A Digital Circuit Is Typically Constructed From Small Electronic Circuits',
        image: 'assets/images/posts/post-9.jpg',
        categories: ['New Arrivals'],
        date: 'February 10, 2019'
    },
    {
        title: 'Engineers Use Many Methods To Minimize Logic Functions',
        image: 'assets/images/posts/post-10.jpg',
        categories: ['Special Offers'],
        date: 'January 1, 2019'
    }
];


/***/ }),

/***/ 2745:
/*!***************************************!*\
  !*** ./src/data/header-navigation.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigation": () => (/* binding */ navigation)
/* harmony export */ });
const navigation = [
    { label: 'Home', url: '/', menu: {
            type: 'menu',
            items: [
                { label: 'Home 1', url: '/' },
                { label: 'Home 2', url: '/home-two' },
                { label: 'Offcanvas Cart', url: '/offcanvas-cart' }
            ]
        } },
    { label: 'Megamenu', url: '/shop/catalog', menu: {
            type: 'megamenu',
            size: 'nl',
            columns: [
                { size: 6, items: [
                        { label: 'Power Tools', url: '/shop/catalog', items: [
                                { label: 'Engravers', url: '/shop/catalog' },
                                { label: 'Wrenches', url: '/shop/catalog' },
                                { label: 'Wall Chaser', url: '/shop/catalog' },
                                { label: 'Pneumatic Tools', url: '/shop/catalog' }
                            ] },
                        { label: 'Machine Tools', url: '/shop/catalog', items: [
                                { label: 'Thread Cutting', url: '/shop/catalog' },
                                { label: 'Chip Blowers', url: '/shop/catalog' },
                                { label: 'Sharpening Machines', url: '/shop/catalog' },
                                { label: 'Pipe Cutters', url: '/shop/catalog' },
                                { label: 'Slotting machines', url: '/shop/catalog' },
                                { label: 'Lathes', url: '/shop/catalog' }
                            ] }
                    ] },
                { size: 6, items: [
                        { label: 'Hand Tools', url: '/shop/catalog', items: [
                                { label: 'Screwdrivers', url: '/shop/catalog' },
                                { label: 'Handsaws', url: '/shop/catalog' },
                                { label: 'Knives', url: '/shop/catalog' },
                                { label: 'Axes', url: '/shop/catalog' },
                                { label: 'Multitools', url: '/shop/catalog' },
                                { label: 'Paint Tools', url: '/shop/catalog' }
                            ] },
                        { label: 'Garden Equipment', url: '/shop/catalog', items: [
                                { label: 'Motor Pumps', url: '/shop/catalog' },
                                { label: 'Chainsaws', url: '/shop/catalog' },
                                { label: 'Electric Saws', url: '/shop/catalog' },
                                { label: 'Brush Cutters', url: '/shop/catalog' }
                            ] }
                    ] }
            ]
        } },
    // {label: 'Shop', url: '/shop/catalog/power-tools', menu: {
    { label: 'Shop', url: '/shop/catalog', menu: {
            type: 'menu',
            items: [
                // {label: 'Shop Grid', url: '/shop/catalog/power-tools', items: [
                { label: 'Shop Grid', url: '/shop/catalog', items: [
                        // {label: '3 Columns Sidebar', url: '/shop/catalog/power-tools'},
                        { label: '3 Columns Sidebar', url: '/shop/catalog' },
                        { label: '4 Columns Full', url: '/shop/category-grid-4-columns-full' },
                        { label: '5 Columns Full', url: '/shop/category-grid-5-columns-full' }
                    ] },
                { label: 'Shop List', url: '/shop/category-list' },
                { label: 'Shop Right Sidebar', url: '/shop/category-right-sidebar' },
                { label: 'Product', url: '/shop/product-standard', items: [
                        { label: 'Product', url: '/shop/product-standard' },
                        { label: 'Product Alt', url: '/shop/product-columnar' },
                        { label: 'Product Sidebar', url: '/shop/product-sidebar' }
                    ] },
                { label: 'Cart', url: '/shop/cart' },
                { label: 'Checkout', url: '/shop/cart/checkout' },
                { label: 'Order Success', url: '/shop/cart/checkout/success' },
                { label: 'Wishlist', url: '/shop/wishlist' },
                { label: 'Compare', url: '/shop/compare' },
                { label: 'Track Order', url: '/shop/track-order' },
            ]
        } },
    { label: 'Account', url: '/account', menu: {
            type: 'menu',
            items: [
                { label: 'Login', url: '/account/login' },
                { label: 'Dashboard', url: '/account/dashboard' },
                { label: 'Edit Profile', url: '/account/profile' },
                { label: 'Order History', url: '/account/orders' },
                { label: 'Order Details', url: '/account/orders/5' },
                { label: 'Address Book', url: '/account/addresses' },
                { label: 'Edit Address', url: '/account/addresses/5' },
                { label: 'Change Password', url: '/account/password' }
            ]
        } },
    { label: 'Blog', url: '/blog', menu: {
            type: 'menu',
            items: [
                { label: 'Blog Classic', url: '/blog/category-classic' },
                { label: 'Blog Grid', url: '/blog/category-grid' },
                { label: 'Blog List', url: '/blog/category-list' },
                { label: 'Blog Left Sidebar', url: '/blog/category-left-sidebar' },
                { label: 'Post Page', url: '/blog/post-classic' },
                { label: 'Post Without Sidebar', url: '/blog/post-full' }
            ]
        } },
    { label: 'Pages', url: '/site', menu: {
            type: 'menu',
            items: [
                { label: 'About Us', url: '/site/about-us' },
                { label: 'Contact Us', url: '/site/contact-us' },
                { label: 'Contact Us Alt', url: '/site/contact-us-alt' },
                { label: '404', url: '/site/not-found' },
                { label: 'Terms And Conditions', url: '/site/terms' },
                { label: 'FAQ', url: '/site/faq' },
                { label: 'Components', url: '/site/components' },
                { label: 'Typography', url: '/site/typography' }
            ]
        } },
    { label: 'Buy Theme', url: 'https://themeforest.net/item/stroyka-tools-store-angular-7-template/23523630', external: true }
];


/***/ }),

/***/ 9321:
/*!*********************************!*\
  !*** ./src/data/mobile-menu.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileMenu": () => (/* binding */ mobileMenu)
/* harmony export */ });
const mobileMenu = [
    { type: 'link', label: 'Home', url: '/', children: [
            { type: 'link', label: 'Home 1', url: '/' },
            { type: 'link', label: 'Home 2', url: '/home-two' },
            { type: 'link', label: 'Offcanvas Cart', url: '/offcanvas-cart' }
        ] },
    { type: 'link', label: 'Categories', url: '/shop/catalog', children: [
            { type: 'link', label: 'Power Tools', url: '/shop/catalog', children: [
                    { type: 'link', label: 'Engravers', url: '/shop/catalog' },
                    { type: 'link', label: 'Wrenches', url: '/shop/catalog' },
                    { type: 'link', label: 'Wall Chaser', url: '/shop/catalog' },
                    { type: 'link', label: 'Pneumatic Tools', url: '/shop/catalog' }
                ] },
            { type: 'link', label: 'Machine Tools', url: '/shop/catalog', children: [
                    { type: 'link', label: 'Thread Cutting', url: '/shop/catalog' },
                    { type: 'link', label: 'Chip Blowers', url: '/shop/catalog' },
                    { type: 'link', label: 'Sharpening Machines', url: '/shop/catalog' },
                    { type: 'link', label: 'Pipe Cutters', url: '/shop/catalog' },
                    { type: 'link', label: 'Slotting machines', url: '/shop/catalog' },
                    { type: 'link', label: 'Lathes', url: '/shop/catalog' }
                ] }
        ] },
    // {type: 'link', label: 'Shop', url: '/shop/catalog/power-tools', children: [
    { type: 'link', label: 'Shop', url: '/shop/catalog', children: [
            // {type: 'link', label: 'Shop Grid', url: '/shop/catalog/power-tools', children: [
            { type: 'link', label: 'Shop Grid', url: '/shop/catalog', children: [
                    // {type: 'link', label: '3 Columns Sidebar',  url: '/shop/catalog/power-tools'},
                    { type: 'link', label: '3 Columns Sidebar', url: '/shop/catalog' },
                    { type: 'link', label: '4 Columns Full', url: '/shop/category-grid-4-columns-full' },
                    { type: 'link', label: '5 Columns Full', url: '/shop/category-grid-5-columns-full' }
                ] },
            { type: 'link', label: 'Shop List', url: '/shop/category-list' },
            { type: 'link', label: 'Shop Right Sidebar', url: '/shop/category-right-sidebar' },
            { type: 'link', label: 'Product', url: '/shop/product-standard', children: [
                    { type: 'link', label: 'Product', url: '/shop/product-standard' },
                    { type: 'link', label: 'Product Alt', url: '/shop/product-columnar' },
                    { type: 'link', label: 'Product Sidebar', url: '/shop/product-sidebar' }
                ] },
            { type: 'link', label: 'Cart', url: '/shop/cart' },
            { type: 'link', label: 'Checkout', url: '/shop/cart/checkout' },
            { type: 'link', label: 'Order Success', url: '/shop/cart/checkout/success' },
            { type: 'link', label: 'Wishlist', url: '/shop/wishlist' },
            { type: 'link', label: 'Compare', url: '/shop/compare' },
            { type: 'link', label: 'Track Order', url: '/shop/track-order' }
        ] },
    { type: 'link', label: 'Account', url: '/account', children: [
            { type: 'link', label: 'Login', url: '/account/login' },
            { type: 'link', label: 'Dashboard', url: '/account/dashboard' },
            { type: 'link', label: 'Edit Profile', url: '/account/profile' },
            { type: 'link', label: 'Order History', url: '/account/orders' },
            { type: 'link', label: 'Order Details', url: '/account/orders/5' },
            { type: 'link', label: 'Address Book', url: '/account/addresses' },
            { type: 'link', label: 'Edit Address', url: '/account/addresses/5' },
            { type: 'link', label: 'Change Password', url: '/account/password' }
        ] },
    { type: 'link', label: 'Blog', url: '/blog', children: [
            { type: 'link', label: 'Blog Classic', url: '/blog/category-classic' },
            { type: 'link', label: 'Blog Grid', url: '/blog/category-grid' },
            { type: 'link', label: 'Blog List', url: '/blog/category-list' },
            { type: 'link', label: 'Blog Left Sidebar', url: '/blog/category-left-sidebar' },
            { type: 'link', label: 'Post Page', url: '/blog/post-classic' },
            { type: 'link', label: 'Post Without Sidebar', url: '/blog/post-full' }
        ] },
    { type: 'link', label: 'Pages', url: '/site', children: [
            { type: 'link', label: 'About Us', url: '/site/about-us' },
            { type: 'link', label: 'Contact Us', url: '/site/contact-us' },
            { type: 'link', label: 'Contact Us Alt', url: '/site/contact-us-alt' },
            { type: 'link', label: '404', url: '/site/not-found' },
            { type: 'link', label: 'Terms And Conditions', url: '/site/terms' },
            { type: 'link', label: 'FAQ', url: '/site/faq' },
            { type: 'link', label: 'Components', url: '/site/components' },
            { type: 'link', label: 'Typography', url: '/site/typography' }
        ] },
    { type: 'button', label: 'Currency', children: [
            { type: 'button', label: '€ Euro', data: { currency: 'EUR' } },
            { type: 'button', label: '£ Pound Sterling', data: { currency: 'GBP' } },
            { type: 'button', label: '$ US Dollar', data: { currency: 'USD' } },
            { type: 'button', label: '₽ Russian Ruble', data: { currency: 'RUB' } }
        ] },
    { type: 'button', label: 'Language', children: [
            { type: 'button', label: 'English', data: { language: 'EN' } },
            { type: 'button', label: 'French', data: { language: 'FR' } },
            { type: 'button', label: 'German', data: { language: 'DE' } },
            { type: 'button', label: 'Russian', data: { language: 'RU' } },
            { type: 'button', label: 'Italian', data: { language: 'IT' } }
        ] }
];


/***/ }),

/***/ 7229:
/*!***************************!*\
  !*** ./src/data/theme.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
const theme = {
    name: 'Stroyka',
    author: {
        name: 'Kos',
        profile_url: 'https://themeforest.net/user/kos9'
    }
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    pimalionCloudUrl: 'https://demo.sourcing.pm/backend',
    modeApp: 'demo.sourcing.pm',
    currencyCodePrice: 'EUR',
    rates: { 'EUR': 1, 'USD': 1.01 }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 2532:
/*!********************************************!*\
  !*** ./src/fake-server/database/brands.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "brands": () => (/* binding */ brands),
/* harmony export */   "getBrands": () => (/* binding */ getBrands),
/* harmony export */   "getCategoriesName": () => (/* binding */ getCategoriesName),
/* harmony export */   "getCategoriesSlug": () => (/* binding */ getCategoriesSlug),
/* harmony export */   "getModeSource": () => (/* binding */ getModeSource),
/* harmony export */   "getProductStandard": () => (/* binding */ getProductStandard),
/* harmony export */   "getRootCategorySlug": () => (/* binding */ getRootCategorySlug)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);


let lastBrandId = 0;
var brandsDef = [
    { name: 'Brandix', slug: 'brandix', image: 'assets/images/logos/logo-1.png' },
    { name: 'Wakita', slug: 'wakita', image: 'assets/images/logos/logo-2.png' },
    { name: 'Zosch', slug: 'zosch', image: 'assets/images/logos/logo-3.png' },
    { name: 'WeVALT', slug: 'wevalt', image: 'assets/images/logos/logo-4.png' },
    { name: 'Hammer', slug: 'hammer', image: 'assets/images/logos/logo-5.png' },
    { name: 'Mitasia', slug: 'mitasia', image: 'assets/images/logos/logo-6.png' },
    { name: 'Metaggo', slug: 'metaggo', image: 'assets/images/logos/logo-7.png' },
];
const brands = brandsDef.map(brandDef => {
    return {
        ...brandDef,
        id: ++lastBrandId + '',
    };
});
function getBrands() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(brands);
}
// mak
// 'fake-server'; 'json'; 'demo.sourcing.pm';
const modeSource = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.modeApp; //  'fake-server'; // 'demo.sourcing.pm';
function getModeSource() {
    // const mode = 'fake-server'; //
    // const mode = 'json';
    // 'demo.sourcing.pm';
    const mode = modeSource;
    // console.log('- fn -- getModeSource() mode -> %o', mode);
    return mode;
}
var categoriesName = [];
function getCategoriesName() {
    switch (getModeSource()) {
        case 'demo.sourcing.pm':
            categoriesName = ['Sanitaire*', 'ElectricitГ©*', 'Outillage*', 'Chauffage*', 'Test*'];
            break;
        default: // 'fake-server'; 'json':
            categoriesName = ['Power Tools', 'Hand Tools', 'Plumbing', 'Machine Tools', 'Power Machinery', 'Measurement', 'Clothes and Ppe'];
    }
    return categoriesName;
}
var categoriesSlug = [];
function getCategoriesSlug() {
    switch (getModeSource()) {
        case 'demo.sourcing.pm':
            categoriesSlug = ['Sanitaire', 'ElectricitГ©', 'Outillage', 'Chauffage', "Test"];
            break;
        default: // 'fake-server'; 'json':
            categoriesSlug = ['power-tools', 'hand-tools', 'machine-tools', 'power-machinery', 'measurement', 'clothes-and-ppe'];
    }
    return categoriesSlug;
}
function getRootCategorySlug() {
    return getCategoriesSlug()[0];
}
function getProductStandard() {
    let product = '';
    switch (getModeSource()) {
        case 'demo.sourcing.pm':
            product = '2eFgJWgBenVimcVmajlf'; // '2eFgJWgBenVimcVmXyoT';
            break;
        default: // 'fake-server'; 'json':
            product = 'brandix-screwdriver-screw1500acc';
    }
    return product;
}


/***/ }),

/***/ 3515:
/*!************************************************!*\
  !*** ./src/fake-server/database/categories.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blogCategoriesList": () => (/* binding */ blogCategoriesList),
/* harmony export */   "blogCategoriesTree": () => (/* binding */ blogCategoriesTree),
/* harmony export */   "getBlogCategoriesTree": () => (/* binding */ getBlogCategoriesTree),
/* harmony export */   "getCategoriesDef": () => (/* binding */ getCategoriesDef),
/* harmony export */   "getCategoriesTree_": () => (/* binding */ getCategoriesTree_),
/* harmony export */   "getShopCategoriesBySlugs": () => (/* binding */ getShopCategoriesBySlugs),
/* harmony export */   "getShopCategoriesTree": () => (/* binding */ getShopCategoriesTree),
/* harmony export */   "getShopCategory": () => (/* binding */ getShopCategory),
/* harmony export */   "shopCategoriesList": () => (/* binding */ shopCategoriesList),
/* harmony export */   "shopCategoriesTree": () => (/* binding */ shopCategoriesTree),
/* harmony export */   "walkTree": () => (/* binding */ walkTree)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _brands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands */ 2532);



let lastCategoryId = 0;
const isFunCategoriesLog = false;
// mak
let shopCategoriesDefPimalion = [];
// const shopCategoriesDef: CategoryDef[] = [
let shopCategoriesDef = [
    {
        name: 'Instruments',
        slug: 'instruments',
        items: 272,
        children: [
            {
                name: 'Power Tools',
                slug: 'power-tools',
                image: 'assets/images/categories/category-1.jpg',
                items: 370,
                children: [
                    {
                        name: 'Drills & Mixers',
                        slug: 'drills-mixers',
                        items: 57,
                    },
                    {
                        name: 'Cordless Screwdrivers',
                        slug: 'cordless-screwdrivers',
                        items: 15,
                    },
                    {
                        name: 'Screwdrivers',
                        slug: 'screwdrivers',
                        items: 126,
                    },
                    {
                        name: 'Wrenches',
                        slug: 'wrenches',
                        items: 12,
                    },
                    {
                        name: 'Grinding Machines',
                        slug: 'grinding-machines',
                        items: 25,
                    },
                    {
                        name: 'Milling Cutters',
                        slug: 'milling-cutters',
                        items: 78,
                    },
                    {
                        name: 'Electric Spray Guns',
                        slug: 'electric-spray-guns',
                        items: 3,
                    },
                ],
            },
            {
                name: 'Hand Tools',
                slug: 'hand-tools',
                image: 'assets/images/categories/category-2.jpg',
                items: 134,
                children: [
                    {
                        name: 'Tool Kits',
                        slug: 'tool-kits',
                        items: 57,
                    },
                    {
                        name: 'Hammers',
                        slug: 'hammers',
                        items: 15,
                    },
                    {
                        name: 'Spanners',
                        slug: 'spanners',
                        items: 5,
                    },
                    {
                        name: 'Handsaws',
                        slug: 'handsaws',
                        items: 54,
                    },
                    {
                        name: 'Paint Tools',
                        slug: 'paint-tools',
                        items: 13,
                    },
                ],
            },
            {
                name: 'Machine Tools',
                slug: 'machine-tools',
                image: 'assets/images/categories/category-3.jpg',
                items: 302,
                children: [
                    {
                        name: 'Lathes',
                        slug: 'lathes',
                        items: 104,
                    },
                    {
                        name: 'Milling Machines',
                        slug: 'milling-machines',
                        items: 12,
                    },
                    {
                        name: 'Grinding Machines',
                        slug: 'grinding-machines',
                        items: 67,
                    },
                    {
                        name: 'CNC Machines',
                        slug: 'cnc-machines',
                        items: 5,
                    },
                    {
                        name: 'Sharpening Machines',
                        slug: 'sharpening-machines',
                        items: 88,
                    },
                ],
            },
            {
                name: 'Power Machinery',
                slug: 'power-machinery',
                image: 'assets/images/categories/category-4.jpg',
                items: 79,
                children: [
                    {
                        name: 'Generators',
                        slug: 'generators',
                        items: 23,
                    },
                    {
                        name: 'Compressors',
                        slug: 'compressors',
                        items: 76,
                    },
                    {
                        name: 'Winches',
                        slug: 'winches',
                        items: 43,
                    },
                    {
                        name: 'Plasma Cutting',
                        slug: 'plasma-cutting',
                        items: 128,
                    },
                    {
                        name: 'Electric Motors',
                        slug: 'electric-motors',
                        items: 76,
                    },
                ],
            },
            {
                name: 'Measurement',
                slug: 'measurement',
                image: 'assets/images/categories/category-5.jpg',
                items: 366,
                children: [
                    {
                        name: 'Tape Measure',
                        slug: 'tape-measure',
                        items: 57,
                    },
                    {
                        name: 'Theodolites',
                        slug: 'theodolites',
                        items: 5,
                    },
                    {
                        name: 'Thermal Imagers',
                        slug: 'thermal-imagers',
                        items: 3,
                    },
                    {
                        name: 'Calipers',
                        slug: 'calipers',
                        items: 37,
                    },
                    {
                        name: 'Levels',
                        slug: 'levels',
                        items: 14,
                    },
                ],
            },
            {
                name: 'Clothes and PPE',
                slug: 'clothes-and-ppe',
                image: 'assets/images/categories/category-6.jpg',
                items: 82,
                children: [
                    {
                        name: 'Winter Workwear',
                        slug: 'winter-workwear',
                        items: 24,
                    },
                    {
                        name: 'Summer Workwear',
                        slug: 'summer-workwear',
                        items: 87,
                    },
                    {
                        name: 'Helmets',
                        slug: 'helmets',
                        items: 9,
                    },
                    {
                        name: 'Belts and Bags',
                        slug: 'belts-and-bags',
                        items: 1,
                    },
                    {
                        name: 'Work Shoes',
                        slug: 'work-shoes',
                        items: 0,
                    },
                ],
            },
        ],
    },
    {
        name: 'Electronics',
        slug: 'electronics',
        items: 54,
    },
    {
        name: 'Computers',
        slug: 'computers',
        items: 421,
    },
    {
        name: 'Automotive',
        slug: 'automotive',
        items: 182,
    },
    {
        name: 'Furniture & Appliances',
        slug: 'furniture-appliances',
        items: 15,
    },
    {
        name: 'Music & Books',
        slug: 'music-books',
        items: 89,
    },
    {
        name: 'Health & Beauty',
        slug: 'health-beauty',
        items: 201,
    },
];
const blogCategoriesDef = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            }
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Drills and Mixers',
        slug: 'drills-and-mixers',
    },
    {
        name: 'Cordless Screwdrivers',
        slug: 'cordless-screwdrivers',
    },
    {
        name: 'Screwdrivers',
        slug: 'screwdrivers',
    },
    {
        name: 'Wrenches',
        slug: 'wrenches',
    },
];
function getCategoriesDef() {
    var categoriesDef = [];
    switch ((0,_brands__WEBPACK_IMPORTED_MODULE_0__.getModeSource)()) {
        case 'demo.sourcing.pm':
            categoriesDef = shopCategoriesDefPimalion;
            break;
        default: // 'fake-server'; 'json':
            categoriesDef = shopCategoriesDef;
    }
    return categoriesDef;
}
// mak
//     function walkTree(categoriesType: 'shop'|'blog', categoriesDef: CategoryDef[], parents: Category[] = []): [Category[], Category[]] {
function walkTree(categoriesType, categoriesDef, parents = []) {
    let list = [];
    const tree = categoriesDef.map(categoryDef => {
        const category = {
            id: ++lastCategoryId + '',
            type: categoriesType,
            name: categoryDef.name,
            slug: categoryDef.slug,
            path: [...parents.map(x => x.slug), categoryDef.slug].join('/'),
            image: categoryDef.image || null,
            items: categoryDef.items || 0,
            customFields: {},
            parents: parents.slice(),
            children: [],
        };
        const [childrenTree, childrenList] = walkTree(categoriesType, categoryDef.children || [], [...parents, category]);
        category.children = childrenTree;
        list = [...list, category, ...childrenList];
        return category;
    });
    return [tree, list];
}
// mak
// export const [shopCategoriesTree, shopCategoriesList]: [Category[], Category[]] = walkTree('shop', shopCategoriesDef);
const [shopCategoriesTree, shopCategoriesList] = walkTree('shop', getCategoriesDef());
const [blogCategoriesTree, blogCategoriesList] = walkTree('blog', blogCategoriesDef);
function limitDepth(categories, depth) {
    return categories.map(category => {
        return {
            ...category,
            parents: null,
            children: depth !== 0 ? limitDepth(category.children || [], depth - 1) : null,
        };
    });
}
function getCategoriesTree(categoriesType, parentSlug = null, depth = 0) {
    let categories = [];
    const list = categoriesType === 'shop' ? shopCategoriesList : blogCategoriesList;
    const tree = categoriesType === 'shop' ? shopCategoriesTree : blogCategoriesTree;
    if (isFunCategoriesLog) {
        console.log('- fn -- getCategoriesTree list -> %o ', list);
        console.log('- fn -- getCategoriesTree tree -> %o', tree);
    }
    if (parentSlug === null) {
        categories = tree.slice();
    }
    else {
        const parent = list.find(x => x.slug === parentSlug);
        if (!parent) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse({ status: 404, statusText: 'Page Not Found' }));
        }
        categories = (parent.children || []).slice();
    }
    const test = limitDepth(categories, depth);
    if (isFunCategoriesLog) {
        console.log('- fn -- limitDepth(categories, depth) test -> %o ', test);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(limitDepth(categories, depth));
}
function getCategoriesTree_(categoriesType, parentSlug = null, depth = 0) {
    let categories = [];
    const list = categoriesType === 'shop' ? shopCategoriesList : blogCategoriesList;
    const tree = categoriesType === 'shop' ? shopCategoriesTree : blogCategoriesTree;
    if (isFunCategoriesLog) {
        console.log('- fn -- getCategoriesTree list -> %o ', list);
        console.log('- fn -- getCategoriesTree tree -> %o', tree);
    }
    if (parentSlug === null) {
        categories = tree.slice();
    }
    else {
        const parent = list.find(x => x.slug === parentSlug);
        if (!parent) {
            return []; // throwError(new HttpErrorResponse({status: 404, statusText: 'Page Not Found'}));
        }
        categories = (parent.children || []).slice();
    }
    const test = limitDepth(categories, depth);
    if (isFunCategoriesLog) {
        console.log('- fn -- limitDepth(categories, depth) test -> %o ', test);
    }
    return limitDepth(categories, depth);
}
function getShopCategoriesTree(parentSlug = null, depth = 0) {
    return getCategoriesTree('shop', parentSlug, depth);
}
function getBlogCategoriesTree(parentSlug = null, depth = 0) {
    return getCategoriesTree('blog', parentSlug, depth);
}
function getShopCategoriesBySlugs(slugs, depth = 0) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(limitDepth(shopCategoriesList.filter(x => slugs.includes(x.slug)), depth));
}
function getShopCategory(slug) {
    const category = shopCategoriesList.find(x => x.slug === slug);
    if (!category) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse({ status: 404, statusText: 'Page Not Found' }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(JSON.parse(JSON.stringify({
        ...category,
        parents: limitDepth(category.parents || [], 0),
        children: limitDepth(category.children || [], 0),
    })));
}


/***/ }),

/***/ 4590:
/*!**********************************************!*\
  !*** ./src/fake-server/database/products.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attributesDef": () => (/* binding */ attributesDef),
/* harmony export */   "getBestsellers": () => (/* binding */ getBestsellers),
/* harmony export */   "getFeatured": () => (/* binding */ getFeatured),
/* harmony export */   "getLatestProducts": () => (/* binding */ getLatestProducts),
/* harmony export */   "getProduct": () => (/* binding */ getProduct),
/* harmony export */   "getRelatedProducts": () => (/* binding */ getRelatedProducts),
/* harmony export */   "getSpecialOffers": () => (/* binding */ getSpecialOffers),
/* harmony export */   "getSuggestions": () => (/* binding */ getSuggestions),
/* harmony export */   "getTopRated": () => (/* binding */ getTopRated),
/* harmony export */   "products": () => (/* binding */ products)
/* harmony export */ });
/* harmony import */ var _brands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands */ 2532);
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories */ 3515);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);





let lastProductId = 0;
// import { getModeSource } from 'src/fake-server/database/brands';
// const mode: string = getModeSource();
const attributesDef = [
    {
        name: 'Color',
        slug: 'color',
        values: [
            { name: 'White', slug: 'white' },
            { name: 'Silver', slug: 'silver' },
            { name: 'Light Gray', slug: 'light-gray' },
            { name: 'Gray', slug: 'gray' },
            { name: 'Dark Gray', slug: 'dark-gray' },
            { name: 'Coal', slug: 'coal' },
            { name: 'Black', slug: 'black' },
            { name: 'Red', slug: 'red' },
            { name: 'Orange', slug: 'orange' },
            { name: 'Yellow', slug: 'yellow' },
            { name: 'Pear Green', slug: 'pear-green' },
            { name: 'Green', slug: 'green' },
            { name: 'Emerald', slug: 'emerald' },
            { name: 'Shamrock', slug: 'shamrock' },
            { name: 'Shakespeare', slug: 'shakespeare' },
            { name: 'Blue', slug: 'blue' },
            { name: 'Dark Blue', slug: 'dark-blue' },
            { name: 'Violet', slug: 'violet' },
            { name: 'Purple', slug: 'purple' },
            { name: 'Cerise', slug: 'cerise' },
        ],
    },
    {
        name: 'Speed',
        slug: 'speed',
        values: [
            { name: '750 RPM', slug: '750-rpm' },
        ],
    },
    {
        name: 'Power Source',
        slug: 'power-source',
        values: [
            { name: 'Cordless-Electric', slug: 'cordless-electric' },
        ],
    },
    {
        name: 'Battery Cell Type',
        slug: 'battery-cell-type',
        values: [
            { name: 'Lithium', slug: 'lithium' },
        ],
    },
    {
        name: 'Voltage',
        slug: 'voltage',
        values: [
            { name: '20 Volts', slug: '20-volts' },
        ],
    },
    {
        name: 'Battery Capacity',
        slug: 'battery-capacity',
        values: [
            { name: '2 Ah', slug: '2-Ah' },
        ],
    },
];
const productsDef = [
    {
        slug: 'electric-planer-brandix-kl370090g-300-watts',
        name: 'Electric Planer Brandix KL370090G 300 Watts',
        price: 749,
        images: [
            'assets/images/products/product-1.jpg',
            'assets/images/products/product-1-1.jpg',
        ],
        badges: 'new',
        rating: 4,
        reviews: 12,
        availability: 'in-stock',
        brand: 'brandix',
        categories: ['screwdrivers'],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'undefined-tool-iradix-dps3000sy-2700-watts',
        name: 'Undefined Tool IRadix DPS3000SY 2700 Watts',
        price: 1019,
        images: [
            'assets/images/products/product-2.jpg',
            'assets/images/products/product-2-1.jpg',
        ],
        badges: 'hot',
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'zosch',
        categories: [],
        attributes: [
            { slug: 'color', values: ['silver', 'cerise'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'drill-screwdriver-brandix-alx7054-200-watts',
        name: 'Drill Screwdriver Brandix ALX7054 200 Watts',
        price: 850,
        images: [
            'assets/images/products/product-3.jpg',
            'assets/images/products/product-3-1.jpg',
        ],
        rating: 4,
        reviews: 8,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'drill-series-3-brandix-ksr4590pqs-1500-watts',
        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
        price: 949,
        compareAtPrice: 1189,
        images: [
            'assets/images/products/product-4.jpg',
            'assets/images/products/product-4-1.jpg',
        ],
        badges: 'sale',
        rating: 3,
        reviews: 15,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: 'white' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-router-power-tool-2017erxpk',
        name: 'Brandix Router Power Tool 2017ERXPK',
        price: 1700,
        images: [
            'assets/images/products/product-5.jpg',
            'assets/images/products/product-5-1.jpg',
        ],
        rating: 4,
        reviews: 2,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'dark-blue' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-drilling-machine-dm2019kw4-4kw',
        name: 'Brandix Drilling Machine DM2019KW4 4kW',
        price: 3199,
        images: [
            'assets/images/products/product-6.jpg',
            'assets/images/products/product-6-1.jpg',
        ],
        rating: 3,
        reviews: 21,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'orange' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-pliers',
        name: 'Brandix Pliers',
        price: 24,
        images: [
            'assets/images/products/product-7.jpg',
            'assets/images/products/product-7-1.jpg',
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'wevalt',
        categories: [],
        attributes: [
            { slug: 'color', values: 'red' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'water-hose-40cm',
        name: 'Water Hose 40cm',
        price: 15,
        images: [
            'assets/images/products/product-8.jpg',
            'assets/images/products/product-8-1.jpg',
        ],
        rating: 2,
        reviews: 5,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: ['pear-green', 'blue'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'spanner-wrench',
        name: 'Spanner Wrench',
        price: 19,
        images: [
            'assets/images/products/product-9.jpg',
            'assets/images/products/product-9-1.jpg',
        ],
        rating: 4,
        reviews: 34,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'green' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'water-tap',
        name: 'Water Tap',
        price: 15,
        images: [
            'assets/images/products/product-10.jpg',
            'assets/images/products/product-10-1.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'gray' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'hand-tool-kit',
        name: 'Hand Tool Kit',
        price: 149,
        images: [
            'assets/images/products/product-11.jpg',
            'assets/images/products/product-11-1.jpg',
        ],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'black' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'ash-s-chainsaw-3.5kw',
        name: 'Ash\'s Chainsaw 3.5kW',
        price: 666.99,
        images: [
            'assets/images/products/product-12.jpg',
            'assets/images/products/product-12-1.jpg',
        ],
        rating: 5,
        reviews: 17,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'violet' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-angle-grinder-kzx3890pqw',
        name: 'Brandix Angle Grinder KZX3890PQW',
        price: 649,
        images: [
            'assets/images/products/product-13.jpg',
            'assets/images/products/product-13-1.jpg',
        ],
        rating: 2,
        reviews: 8,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'purple' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-air-compressor-deltakx500',
        name: 'Brandix Air Compressor DELTAKX500',
        price: 1800,
        images: [
            'assets/images/products/product-14.jpg',
            'assets/images/products/product-14-1.jpg',
        ],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['light-gray', 'emerald'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-electric-jigsaw-jig7000bq',
        name: 'Brandix Electric Jigsaw JIG7000BQ',
        price: 290,
        images: [
            'assets/images/products/product-15.jpg',
            'assets/images/products/product-15-1.jpg',
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['coal', 'shamrock'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-screwdriver-screw1500acc',
        name: 'Brandix Screwdriver SCREW1500ACC',
        price: 1499,
        images: [
            'assets/images/products/product-16.jpg',
            'assets/images/products/product-16-1.jpg',
            'assets/images/products/product-16-2.jpg',
            'assets/images/products/product-16-3.jpg',
            'assets/images/products/product-16-4.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'metaggo',
        categories: [],
        attributes: [
            { slug: 'color', values: ['dark-gray', 'shakespeare'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    }
];
const products = productsDef.map(productDef => {
    let badges = [];
    if (productDef.badges) {
        badges = typeof productDef.badges === 'string' ? [productDef.badges] : productDef.badges;
    }
    const categories = _categories__WEBPACK_IMPORTED_MODULE_1__.shopCategoriesList.filter(x => productDef.categories.includes(x.slug)).map(x => ({
        ...x,
        parents: null,
        children: null,
    }));
    const attributes = (productDef.attributes || []).map(productAttributeDef => {
        const attributeDef = attributesDef.find(x => x.slug === productAttributeDef.slug);
        if (!attributeDef) {
            return null;
        }
        let valuesDef = [];
        if (typeof productAttributeDef.values === 'string') {
            valuesDef = [productAttributeDef.values];
        }
        else if (productAttributeDef.values) {
            valuesDef = productAttributeDef.values;
        }
        const values = valuesDef.map(valueSlug => {
            const valueDef = attributeDef.values.find(x => x.slug === valueSlug);
            if (!valueDef) {
                return null;
            }
            return {
                ...valueDef,
                customFields: {},
            };
        }).filter(x => x !== null);
        if (!values.length) {
            return null;
        }
        return {
            name: attributeDef.name,
            slug: attributeDef.slug,
            featured: !!productAttributeDef.featured,
            values,
            customFields: {},
        };
    }).filter(x => x !== null);
    return {
        id: ++lastProductId,
        name: productDef.name,
        sku: '83690/32',
        slug: productDef.slug,
        price: productDef.price,
        compareAtPrice: productDef.compareAtPrice || null,
        images: productDef.images.slice(),
        badges: badges.slice(),
        rating: productDef.rating,
        reviews: productDef.reviews,
        availability: productDef.availability,
        brand: _brands__WEBPACK_IMPORTED_MODULE_0__.brands.find(x => x.slug === productDef.brand) || null,
        categories,
        attributes,
        customFields: {},
    };
});
function getBestsellers(limit = null) {
    const start = 0;
    const end = limit ? start + limit : undefined;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(products.slice(start, end));
}
function getTopRated(limit = null) {
    const start = 3;
    const end = limit ? start + limit : undefined;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(products.slice(start, end));
}
function getSpecialOffers(limit = null) {
    const start = 6;
    const end = limit ? start + limit : undefined;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(products.slice(start, end));
}
function getFeatured(categorySlug = null, limit = null) {
    let fakeProducts = products.slice();
    if (categorySlug === 'power-tools') {
        fakeProducts = fakeProducts.reverse();
    }
    else if (categorySlug === 'hand-tools') {
        fakeProducts = [...fakeProducts.slice(8), ...fakeProducts.slice(0, 8)];
    }
    else if (categorySlug === 'plumbing') {
        fakeProducts = [...fakeProducts.slice(8), ...fakeProducts.slice(0, 8)].reverse();
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => fakeProducts.slice(0, limit || undefined)));
}
function getLatestProducts(categorySlug = null, limit = null) {
    return getFeatured(categorySlug, limit);
}
// noinspection JSUnusedLocalSymbols
function getRelatedProducts(product) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(products.slice(0, 7));
}
function getSuggestions(query, limit, categorySlug = null) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(products.filter(x => x.name.toLowerCase().includes(query.toLowerCase())).slice(0, limit));
}
function getProduct(productSlug) {
    const product = products.find(x => x.slug === productSlug);
    if (!product) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse({ status: 404, statusText: 'Page Not Found' }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(JSON.parse(JSON.stringify(product)));
}


/***/ }),

/***/ 4083:
/*!**********************************!*\
  !*** ./src/fake-server/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBestsellers": () => (/* reexport safe */ _database_products__WEBPACK_IMPORTED_MODULE_0__.getBestsellers),
/* harmony export */   "getBlogCategoriesTree": () => (/* reexport safe */ _database_categories__WEBPACK_IMPORTED_MODULE_1__.getBlogCategoriesTree),
/* harmony export */   "getBrands": () => (/* reexport safe */ _database_brands__WEBPACK_IMPORTED_MODULE_2__.getBrands),
/* harmony export */   "getFeatured": () => (/* reexport safe */ _database_products__WEBPACK_IMPORTED_MODULE_0__.getFeatured),
/* harmony export */   "getLatestProducts": () => (/* reexport safe */ _database_products__WEBPACK_IMPORTED_MODULE_0__.getLatestProducts),
/* harmony export */   "getProduct": () => (/* reexport safe */ _database_products__WEBPACK_IMPORTED_MODULE_0__.getProduct),
/* harmony export */   "getProductsList": () => (/* reexport safe */ _products_list__WEBPACK_IMPORTED_MODULE_3__.getProductsList),
/* harmony export */   "getRelatedProducts": () => (/* reexport safe */ _database_products__WEBPACK_IMPORTED_MODULE_0__.getRelatedProducts),
/* harmony export */   "getShopCategoriesBySlugs": () => (/* reexport safe */ _database_categories__WEBPACK_IMPORTED_MODULE_1__.getShopCategoriesBySlugs),
/* harmony export */   "getShopCategoriesTree": () => (/* reexport safe */ _database_categories__WEBPACK_IMPORTED_MODULE_1__.getShopCategoriesTree),
/* harmony export */   "getShopCategory": () => (/* reexport safe */ _database_categories__WEBPACK_IMPORTED_MODULE_1__.getShopCategory),
/* harmony export */   "getSpecialOffers": () => (/* reexport safe */ _database_products__WEBPACK_IMPORTED_MODULE_0__.getSpecialOffers),
/* harmony export */   "getTopRated": () => (/* reexport safe */ _database_products__WEBPACK_IMPORTED_MODULE_0__.getTopRated)
/* harmony export */ });
/* harmony import */ var _database_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database/products */ 4590);
/* harmony import */ var _database_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database/categories */ 3515);
/* harmony import */ var _database_brands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database/brands */ 2532);
/* harmony import */ var _products_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-list */ 4716);






/***/ }),

/***/ 4716:
/*!******************************************!*\
  !*** ./src/fake-server/products-list.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductsList": () => (/* binding */ getProductsList)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _database_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database/products */ 4590);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _database_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database/categories */ 3515);





var isFunGetProductsListLog = false;
/**
 * Returns products list.
 *
 * @param categorySlug Unique human-readable category identifier.
 * @param options Options list.
 */
function getProductsList(categorySlug, options) {
    const page = options.page || 1;
    const limit = options.limit || 12;
    const sort = options.sort || 'default';
    const filterValues = options.filterValues || {};
    const filters = [];
    const filtersDef = [
        { type: 'range', slug: 'price', name: 'Price' },
        { type: 'check', slug: 'brand', name: 'Brand' },
        { type: 'radio', slug: 'discount', name: 'With Discount' },
        { type: 'color', slug: 'color', name: 'Color' },
    ];
    let items = _database_products__WEBPACK_IMPORTED_MODULE_0__.products.slice();
    if (isFunGetProductsListLog) {
        console.log('- fn -- getProductsList()  (1) items -> %o', items);
    }
    ;
    // Make filters.
    if (categorySlug === null) {
        filters.push({
            type: 'categories',
            slug: 'categories',
            name: 'Categories',
            root: true,
            items: [
                ..._database_categories__WEBPACK_IMPORTED_MODULE_1__.shopCategoriesTree.map(x => makeCategoryFilterItem('child', x)),
            ],
        });
    }
    else {
        const category = _database_categories__WEBPACK_IMPORTED_MODULE_1__.shopCategoriesList.find(x => x.slug === categorySlug);
        if (!category) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse({ status: 404, statusText: 'Page Not Found' }));
        }
        filters.push({
            type: 'categories',
            slug: 'categories',
            name: 'Categories',
            root: false,
            items: [
                ...(category.parents || []).map(x => makeCategoryFilterItem('parent', x)),
                makeCategoryFilterItem('current', category),
                ...(category.children || []).map(x => makeCategoryFilterItem('child', x)),
            ],
        });
    }
    if (isFunGetProductsListLog) {
        console.log('- fn -- getProductsList()  (2) filters -> %o', filters);
    }
    ;
    makeFilters(filtersDef, items).forEach(x => filters.push(x));
    // Apply values to filters.
    filters.forEach(filter => {
        if (filter.slug in filterValues && 'value' in filter) {
            filter.value = parseFilterValue(filter, filterValues[filter.slug]);
        }
    });
    // Calculate items count for filter values.
    filters.forEach(filter => {
        if (filter.type !== 'check' && filter.type !== 'color' && filter.type !== 'radio') {
            return;
        }
        const counts = calcProductsForFilterValues(filter, filters, items);
        filter.items.forEach(item => {
            if (item.slug in counts) {
                item.count = counts[item.slug];
            }
        });
    });
    if (isFunGetProductsListLog) {
        console.log('- fn -- getProductsList() (3) filters -> %o', filters);
    }
    // Apply filters to items list.
    items = items.filter(product => {
        return filters.reduce((result, filter) => result && testProduct(filter, product), true);
    });
    // Sort items array.
    items = items.sort((a, b) => {
        if (['name_asc', 'name_desc'].includes(sort)) {
            if (a.name === b.name) {
                return 0;
            }
            return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
        }
        return 0;
    });
    if (isFunGetProductsListLog) {
        console.log('- fn -- getProductsList() (4) items -> %o', items);
    }
    // Preparing data for a response.
    const start = (page - 1) * limit;
    const end = start + limit;
    const total = items.length;
    const pages = Math.ceil(total / limit);
    const from = (page - 1) * limit + 1;
    const to = Math.max(Math.min(page * limit, total), from);
    items = items.slice(start, end);
    const response = {
        items,
        page,
        limit,
        total,
        pages,
        from,
        to,
        sort,
        filters,
        filterValues,
    };
    if (isFunGetProductsListLog) {
        console.log('- fn -- getProductsList() (5) response -> %o', response);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(350).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => JSON.parse(JSON.stringify(response))));
}
function getFilterValue(type, slug, product, defaultValue = null) {
    if (type === 'range' && slug === 'price') {
        return product.price;
    }
    else if (type === 'check' && slug === 'brand') {
        if (product.brand && typeof product.brand === 'object') {
            return [{ slug: product.brand.slug, name: product.brand.name }];
        }
    }
    else if (type === 'check' && slug === 'discount') {
        const items = [
            { slug: 'any', name: 'Any' },
        ];
        if (product.compareAtPrice) {
            items.push({ slug: 'yes', name: 'Yes' });
        }
        else {
            items.push({ slug: 'no', name: 'No' });
        }
        return items;
    }
    else if (type === 'check' || type === 'radio') {
        if (!('attributes' in product) || !Array.isArray(product.attributes)) {
            return defaultValue;
        }
        const attribute = product.attributes.find(x => x.slug === slug);
        if (!attribute) {
            return defaultValue;
        }
        return attribute.values.map(x => ({ slug: x.slug, name: x.name }));
    }
    return defaultValue;
}
function getRangeValue(slug, product, defaultValue = null) {
    return getFilterValue('range', slug, product, defaultValue);
}
function getListValues(slug, product, defaultValue = []) {
    return getFilterValue('check', slug, product, defaultValue);
}
function getColorCode(slug) {
    switch (slug) {
        case 'white': return '#fff';
        case 'silver': return '#d9d9d9';
        case 'light-gray': return '#b3b3b3';
        case 'gray': return '#808080';
        case 'dark-gray': return '#666';
        case 'coal': return '#4d4d4d';
        case 'black': return '#262626';
        case 'red': return '#ff4040';
        case 'orange': return '#ff8126';
        case 'yellow': return '#ffd333';
        case 'pear-green': return '#becc1f';
        case 'green': return '#8fcc14';
        case 'emerald': return '#47cc5e';
        case 'shamrock': return '#47cca0';
        case 'shakespeare': return '#47cccc';
        case 'blue': return '#40bfff';
        case 'dark-blue': return '#3d6dcc';
        case 'violet': return '#7766cc';
        case 'purple': return '#b852cc';
        case 'cerise': return '#e53981';
    }
    return '#000';
}
function parseFilterValue(filter, value) {
    switch (filter.type) {
        case 'range':
            return value.split('-').map(x => parseFloat(x));
        case 'check':
        case 'color':
            return value.trim() === '' ? [] : value.split(',').map(x => x.trim());
    }
    return value;
}
function testProduct(filter, product) {
    if (filter.type === 'range') {
        const value = getRangeValue(filter.slug, product);
        if (value === null || value < filter.value[0] || value > filter.value[1]) {
            return false;
        }
    }
    else if (filter.type === 'check' || filter.type === 'color') {
        const values = getListValues(filter.slug, product);
        // mak ???
        // return filter.value.length < 1 || filter.value.reduce<boolean>(
        return filter.value.length < 1 || filter.value.reduce((isMatched, value) => {
            return isMatched || !!values.find(x => x.slug === value);
        }, false);
    }
    else if (filter.type === 'radio') {
        const values = getListValues(filter.slug, product);
        return !!values.find(x => x.slug === filter.value);
    }
    return true;
}
function calcProductsForFilterValues(filter, allFilters, products) {
    const result = {};
    products = products.filter(product => allFilters.reduce((isMatched, eachFilter) => {
        return isMatched && (filter.slug === eachFilter.slug || testProduct(eachFilter, product));
    }, true));
    products.forEach(product => {
        switch (filter.type) {
            case 'check':
            case 'color':
            case 'radio':
                getListValues(filter.slug, product).forEach(value => {
                    if (!(value.slug in result)) {
                        result[value.slug] = 0;
                    }
                    result[value.slug] += 1;
                });
                break;
        }
    });
    return result;
}
function makeFilters(filtersDef, products) {
    const result = [];
    filtersDef.forEach(filterDef => {
        const filterType = filterDef.type;
        if (filterType === 'range') {
            let max = products.reduce((value, product) => Math.max(value, getRangeValue(filterDef.slug, product, value)), 0);
            let min = products.reduce((value, product) => Math.min(value, getRangeValue(filterDef.slug, product, value)), max);
            /** Calculates the number of digits for rounding. */
            let digit = Math.max(Math.ceil(max).toString().length - 2, 1);
            digit = Math.pow(10, digit);
            max = Math.ceil(max / digit) * digit;
            min = Math.floor(min / digit) * digit;
            result.push({
                type: filterType,
                slug: filterDef.slug,
                name: filterDef.name,
                value: [min, max],
                // options
                min,
                max,
            });
        }
        else if (filterType === 'check' || filterType === 'radio' || filterType === 'color') {
            const itemsBySlug = {};
            let items = [];
            products.forEach(product => {
                getListValues(filterDef.slug, product).forEach(value => {
                    if (value.slug in itemsBySlug) {
                        return;
                    }
                    const item = makeFilterItem(filterType, value);
                    itemsBySlug[value.slug] = item;
                    items.push(item);
                });
            });
            if (items.length < 1 || (filterType === 'radio' && items.length < 2)) {
                return;
            }
            items = sortFilterItems(filterType, filterDef.slug, items);
            result.push({
                type: filterType,
                slug: filterDef.slug,
                name: filterDef.name,
                value: filterType === 'radio' ? items[0].slug : [],
                items,
            });
        }
    });
    return result;
}
function makeFilterItem(filterType, value) {
    switch (filterType) {
        case 'check':
        case 'radio':
            return {
                slug: value.slug,
                name: value.name,
                count: 0,
            };
        case 'color':
            return {
                slug: value.slug,
                name: value.name,
                count: 0,
                color: getColorCode(value.slug),
            };
    }
}
function makeCategoryFilterItem(type, category) {
    return {
        slug: category.slug,
        name: category.name,
        type,
        category: { ...category, children: null, parents: null },
        count: category.items,
    };
}
function sortFilterItems(filterType, filterSlug, items) {
    if (filterType === 'color' && filterSlug === 'color') {
        const attributeDef = _database_products__WEBPACK_IMPORTED_MODULE_0__.attributesDef.find(x => x.slug === filterSlug);
        if (attributeDef) {
            const values = attributeDef.values.map(x => x.slug);
            return items.sort((a, b) => {
                return values.indexOf(a.slug) - values.indexOf(b.slug);
            });
        }
    }
    return items;
}


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map