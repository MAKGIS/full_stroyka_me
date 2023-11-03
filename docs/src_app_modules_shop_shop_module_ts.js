"use strict";
(self["webpackChunkstroyka"] = self["webpackChunkstroyka"] || []).push([["src_app_modules_shop_shop_module_ts"],{

/***/ 5597:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-sidebar/product-sidebar.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSidebarComponent": () => (/* binding */ ProductSidebarComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ 8781);
/* harmony import */ var src_app_shared_api_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/api/categories.service */ 9383);
/* harmony import */ var _widgets_widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../widgets/widget-categories/widget-categories.component */ 1963);
/* harmony import */ var _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../widgets/widget-products/widget-products.component */ 6661);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








const _c0 = function () {
  return [];
};

class ProductSidebarComponent {
  constructor(shop, categoriesService) {
    this.shop = shop;
    this.categoriesService = categoriesService;
  }

  ngOnInit() {
    // this.categories$ = this.shop.getCategories(null, 1);
    this.categories$ = this.shop.getCategories(this.categoriesService, null, 1);
    this.bestsellers$ = this.shop.getBestsellers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => x.slice(0, 5)));
  }

  static {
    this.ɵfac = function ProductSidebarComponent_Factory(t) {
      return new (t || ProductSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_0__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_api_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ProductSidebarComponent,
      selectors: [["app-product-sidebar"]],
      decls: 10,
      vars: 9,
      consts: [[1, "test-border"], [1, "test-name-Component"], [1, "block", "block-sidebar"], [1, "block-sidebar__item"], ["location", "shop", 3, "categories"], ["header", "Latest Products", 3, "products"]],
      template: function ProductSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-widget-categories", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-widget-products", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("categories", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, ctx.categories$) || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 5, ctx.bestsellers$) || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c0));
        }
      },
      dependencies: [_widgets_widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_2__.WidgetCategoriesComponent, _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_3__.WidgetProductsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"]
    });
  }
}

/***/ }),

/***/ 5011:
/*!********************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-tabs/product-tabs.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductTabsComponent": () => (/* binding */ ProductTabsComponent)
/* harmony export */ });
/* harmony import */ var _data_shop_product_spec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/shop-product-spec */ 7658);
/* harmony import */ var _data_shop_product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../data/shop-product-reviews */ 4005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ 3556);
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/rating/rating.component */ 9453);







function ProductTabsComponent_div_28_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](feature_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](feature_r4.value);
} }
function ProductTabsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40)(1, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductTabsComponent_div_28_div_3_Template, 5, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", section_r2.features);
} }
function ProductTabsComponent_li_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 46)(1, "div", 47)(2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 50)(5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-rating", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const review_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", review_r5.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](review_r5.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", review_r5.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](review_r5.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](review_r5.date);
} }
const _c0 = function (a0) { return { "product-tabs--layout--sidebar": a0 }; };
const _c1 = function (a0) { return { "product-tabs__item--active": a0 }; };
const _c2 = function (a0) { return { "product-tabs__pane--active": a0 }; };
class ProductTabsComponent {
    constructor() {
        this.withSidebar = false;
        this.tab = 'description';
        this.specification = _data_shop_product_spec__WEBPACK_IMPORTED_MODULE_0__.specification;
        this.reviews = _data_shop_product_reviews__WEBPACK_IMPORTED_MODULE_1__.reviews;
    }
    static { this.ɵfac = function ProductTabsComponent_Factory(t) { return new (t || ProductTabsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProductTabsComponent, selectors: [["app-product-tabs"]], inputs: { withSidebar: "withSidebar", tab: "tab" }, decls: 76, vars: 27, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "product-tabs", 3, "ngClass"], [1, "product-tabs__list"], ["href", "#tab-description", 1, "product-tabs__item", 3, "ngClass", "click"], ["href", "#tab-specification", 1, "product-tabs__item", 3, "ngClass", "click"], ["href", "#tab-reviews", 1, "product-tabs__item", 3, "ngClass", "click"], [1, "product-tabs__content"], ["id", "tab-description", 1, "product-tabs__pane", 3, "ngClass"], [1, "typography"], ["id", "tab-specification", 1, "product-tabs__pane", 3, "ngClass"], [1, "spec"], [1, "spec__header"], ["class", "spec__section", 4, "ngFor", "ngForOf"], [1, "spec__disclaimer"], ["id", "tab-reviews", 1, "product-tabs__pane", 3, "ngClass"], [1, "reviews-view"], [1, "reviews-view__list"], [1, "reviews-view__header"], [1, "reviews-list"], [1, "reviews-list__content"], ["class", "reviews-list__item", 4, "ngFor", "ngForOf"], [1, "reviews-list__pagination"], [3, "current", "siblings", "total"], [1, "reviews-view__form"], [1, "row"], [1, "col-12", "col-lg-9", "col-xl-8"], [1, "form-row"], [1, "form-group", "col-md-4"], ["for", "review-stars"], ["id", "review-stars", 1, "form-control"], ["for", "review-author"], ["type", "text", "id", "review-author", "placeholder", "Your Name", 1, "form-control"], ["for", "review-email"], ["type", "text", "id", "review-email", "placeholder", "Email Address", 1, "form-control"], [1, "form-group"], ["for", "review-text"], ["id", "review-text", "rows", "6", 1, "form-control"], [1, "form-group", "mb-0"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg"], [1, "spec__section"], [1, "spec__section-title"], ["class", "spec__row", 4, "ngFor", "ngForOf"], [1, "spec__row"], [1, "spec__name"], [1, "spec__value"], [1, "reviews-list__item"], [1, "review"], [1, "review__avatar"], ["alt", "", 3, "src"], [1, "review__content"], [1, "review__author"], [1, "review__rating"], [3, "value"], [1, "review__text"], [1, "review__date"]], template: function ProductTabsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductTabsComponent_Template_a_click_5_listener($event) { $event.preventDefault(); return ctx.tab = "description"; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductTabsComponent_Template_a_click_7_listener($event) { $event.preventDefault(); return ctx.tab = "specification"; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Specification");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductTabsComponent_Template_a_click_9_listener($event) { $event.preventDefault(); return ctx.tab = "reviews"; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Product Full Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Etiam lacus lacus mollis in mattis");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan. Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a, rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet fringilla odio scelerisque non. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 10)(25, "div", 11)(26, "h3", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Specification");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ProductTabsComponent_div_28_Template, 4, 2, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Information on technical characteristics, the delivery set, the country of manufacture and the appearance of the goods is for reference only and is based on the latest information available at the time of publication. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 15)(32, "div", 16)(33, "div", 17)(34, "h3", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Customer Reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 19)(37, "ol", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, ProductTabsComponent_li_38_Template, 13, 5, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "app-pagination", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "form", 24)(42, "h3", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Write A Review");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 25)(45, "div", 26)(46, "div", 27)(47, "div", 28)(48, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Review Stars");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "select", 30)(51, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "5 Stars Rating");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "4 Stars Rating");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "3 Stars Rating");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "2 Stars Rating");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "1 Stars Rating");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 28)(62, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Your Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 28)(66, "label", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 35)(70, "label", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Your Review");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "textarea", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 38)(74, "button", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Post Your Review");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx.withSidebar));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, ctx.tab === "description"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, ctx.tab === "specification"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c1, ctx.tab === "reviews"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c2, ctx.tab === "description"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c2, ctx.tab === "specification"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.specification);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c2, ctx.tab === "reviews"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.reviews);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("current", 1)("siblings", 2)("total", 10);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent, _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_3__.RatingComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXRhYnMuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 7643:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shop/components/products-view/products-view.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsViewComponent": () => (/* binding */ ProductsViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ 5376);
/* harmony import */ var _services_page_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/page-category.service */ 4588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ 3556);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/product-card/product-card.component */ 3284);











function ProductsViewComponent_div_6_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.filtersCount);
  }
}

function ProductsViewComponent_div_6_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-product-card", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("product", product_r4);
  }
}

const _c0 = function (a0, a1) {
  return {
    "view-options--offcanvas--always": a0,
    "view-options--offcanvas--mobile": a1
  };
};

const _c1 = function (a0) {
  return {
    "layout-switcher__button--active": a0
  };
};

function ProductsViewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductsViewComponent_div_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.sidebar.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProductsViewComponent_div_6_span_8_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 14)(10, "div", 15)(11, "div", 16)(12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductsViewComponent_div_6_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.setLayout("grid"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductsViewComponent_div_6_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.setLayout("grid-with-features"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "app-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductsViewComponent_div_6_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.setLayout("list"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 25)(22, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Sort By");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div")(25, "select", 27)(26, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Name (A-Z)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Name (Z-A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 25)(33, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div")(36, "select", 32)(37, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "24");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 35)(42, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, ProductsViewComponent_div_6_div_43_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "app-pagination", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](13, _c0, ctx_r0.offcanvas === "always", ctx_r0.offcanvas === "mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.filtersCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c1, ctx_r0.layout === "grid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c1, ctx_r0.layout === "grid-with-features"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c1, ctx_r0.layout === "list"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" Showing ", ctx_r0.pageService.from, "\u2013", ctx_r0.pageService.to, " of ", ctx_r0.pageService.total, " results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-layout", ctx_r0.layout !== "list" ? ctx_r0.grid : ctx_r0.layout)("data-with-features", ctx_r0.layout === "grid-with-features" ? "true" : "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.pageService.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("siblings", 2)("total", ctx_r0.pageService.pages);
  }
}

function ProductsViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No matching items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Try resetting the filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductsViewComponent_div_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Reset filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

const _c2 = function (a0) {
  return {
    "products-view--loading": a0
  };
};

class ProductsViewComponent {
  constructor(fb, sidebar, pageService) {
    this.fb = fb;
    this.sidebar = sidebar;
    this.pageService = pageService;
    this.layout = 'grid';
    this.grid = 'grid-3-sidebar';
    this.offcanvas = 'mobile';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.filtersCount = 0;
    this.isLog = true;
  }

  ngOnInit() {
    this.listOptionsForm = this.fb.group({
      page: this.fb.control(this.pageService.page),
      limit: this.fb.control(this.pageService.limit),
      sort: this.fb.control(this.pageService.sort)
    });
    this.listOptionsForm.valueChanges.subscribe(value => {
      value.limit = parseFloat(value.limit);

      if (this.isLog) {
        console.log('- cmp -- ProductsViewComponent.ngOnInit() listOptionsForm.valueChanges value -> %o', value);
      }

      this.pageService.updateOptions(value);
    });
    this.pageService.list$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(x => x !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(({
      page,
      limit,
      sort,
      filterValues
    }) => {
      this.filtersCount = Object.keys(filterValues).length;
      this.listOptionsForm.setValue({
        page,
        limit,
        sort
      }, {
        emitEvent: false
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setLayout(value) {
    this.layout = value;
  }

  resetFilters() {
    this.pageService.updateOptions({
      filterValues: {}
    });
  }

  static {
    this.ɵfac = function ProductsViewComponent_Factory(t) {
      return new (t || ProductsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.ShopSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_page_category_service__WEBPACK_IMPORTED_MODULE_1__.PageCategoryService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ProductsViewComponent,
      selectors: [["app-products-view"]],
      inputs: {
        layout: "layout",
        grid: "grid",
        offcanvas: "offcanvas"
      },
      decls: 8,
      vars: 9,
      consts: [[1, "test-border"], [1, "test-name-Component"], [1, "products-view", 3, "ngClass", "formGroup"], [1, "products-view__loader"], ["class", "products-view__content", 4, "ngIf"], ["class", "products-view__empty", 4, "ngIf"], [1, "products-view__content"], [1, "products-view__options"], [1, "view-options", 3, "ngClass"], [1, "view-options__filters-button"], ["type", "button", 1, "filters-button", 3, "click"], ["name", "filters-16", "size", "16", 1, "filters-button__icon"], [1, "filters-button__title"], ["class", "filters-button__counter", 4, "ngIf"], [1, "view-options__layout"], [1, "layout-switcher"], [1, "layout-switcher__list"], ["title", "Grid", "type", "button", 1, "layout-switcher__button", 3, "ngClass", "click"], ["name", "layout-grid-16x16", "size", "16"], ["title", "Grid With Features", "type", "button", 1, "layout-switcher__button", 3, "ngClass", "click"], ["name", "layout-grid-with-details-16x16", "size", "16"], ["title", "List", "type", "button", 1, "layout-switcher__button", 3, "ngClass", "click"], ["name", "layout-list-16x16", "size", "16"], [1, "view-options__legend"], [1, "view-options__divider"], [1, "view-options__control"], ["for", "view-options-sort"], ["id", "view-options-sort", "formControlName", "sort", 1, "form-control", "form-control-sm"], ["value", "default"], ["value", "name_asc"], ["value", "name_desc"], ["for", "view-options-limit"], ["id", "view-options-limit", "formControlName", "limit", 1, "form-control", "form-control-sm"], ["value", "12"], ["value", "24"], [1, "products-view__list", "products-list"], [1, "products-list__body"], ["class", "products-list__item", 4, "ngFor", "ngForOf"], [1, "products-view__pagination"], ["formControlName", "page", 3, "siblings", "total"], [1, "filters-button__counter"], [1, "products-list__item"], [3, "product"], [1, "products-view__empty"], [1, "products-view__empty-title"], [1, "products-view__empty-subtitle"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"]],
      template: function ProductsViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProductsViewComponent_div_6_Template, 46, 22, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProductsViewComponent_div_7_Template, 7, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, ctx.pageService.isLoading$)))("formGroup", ctx.listOptionsForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pageService.items == null ? null : ctx.pageService.items.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.pageService.items == null ? null : ctx.pageService.items.length));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__.PaginationComponent, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__.ProductCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
  }
}

/***/ }),

/***/ 9396:
/*!********************************************************************************!*\
  !*** ./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopSidebarComponent": () => (/* binding */ ShopSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromMatchMedia */ 3046);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ 8781);
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ 5376);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _widgets_widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widgets/widget-filters/widget-filters.component */ 5824);
/* harmony import */ var _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widgets/widget-products/widget-products.component */ 6661);













const _c0 = function () {
  return [];
};

function ShopSidebarComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-widget-products", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r0.bestsellers$) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
  }
}

const _c1 = function (a0, a1, a2) {
  return {
    "block-sidebar--offcanvas--always": a0,
    "block-sidebar--offcanvas--mobile": a1,
    "block-sidebar--open": a2
  };
};

class ShopSidebarComponent {
  constructor(shop, sidebar, platformId) {
    this.shop = shop;
    this.sidebar = sidebar;
    this.platformId = platformId;
    /**
     * Indicates when filters will be offcanvas.
     * - always: https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/classic/shop/category-grid-4-columns-full
     * - mobile: https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/classic/shop/category-grid-3-columns-sidebar
     */

    this.offcanvas = 'mobile';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.isOpen = false;
  }

  ngOnInit() {
    this.bestsellers$ = this.shop.getBestsellers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(x => x.slice(0, 5)));
    this.sidebar.isOpen$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(isOpen => {
      if (isOpen) {
        this.open();
      } else {
        this.close();
      }
    });

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformId)) {
      (0,_shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_0__.fromMatchMedia)('(max-width: 991px)').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(media => {
        if (this.offcanvas === 'mobile' && this.isOpen && !media.matches) {
          this.close();
        }
      });
    }
  }

  ngOnDestroy() {
    this.close();
    this.destroy$.next();
    this.destroy$.complete();
  }

  open() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformId)) {
      const bodyWidth = document.body.offsetWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = document.body.offsetWidth - bodyWidth + 'px';
    }

    this.isOpen = true;
  }

  close() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformId)) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    this.isOpen = false;
  }

  static {
    this.ɵfac = function ShopSidebarComponent_Factory(t) {
      return new (t || ShopSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_1__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.ShopSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ShopSidebarComponent,
      selectors: [["app-shop-sidebar"]],
      inputs: {
        offcanvas: "offcanvas"
      },
      decls: 14,
      vars: 8,
      consts: [[1, "test-border"], [1, "test-name-Component"], [1, "block", "block-sidebar", 3, "ngClass"], [1, "block-sidebar__backdrop", 3, "click"], [1, "block-sidebar__body"], [1, "block-sidebar__header"], [1, "block-sidebar__title"], ["type", "button", 1, "block-sidebar__close", 3, "click"], ["name", "cross-20", "size", "20"], [1, "block-sidebar__item"], [3, "offcanvas"], ["class", "block-sidebar__item d-none d-lg-block", 4, "ngIf"], [1, "block-sidebar__item", "d-none", "d-lg-block"], ["header", "Latest Products", 3, "products"]],
      template: function ShopSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ShopSidebarComponent_Template_div_click_4_listener() {
            return ctx.sidebar.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ShopSidebarComponent_Template_button_click_9_listener() {
            return ctx.sidebar.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "app-widget-filters", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ShopSidebarComponent_div_13_Template, 3, 4, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](4, _c1, ctx.offcanvas === "always", ctx.offcanvas === "mobile", ctx.isOpen));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("offcanvas", ctx.offcanvas);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.offcanvas === "mobile");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _widgets_widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_4__.WidgetFiltersComponent, _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_5__.WidgetProductsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"]
    });
  }
}

/***/ }),

/***/ 8642:
/*!*******************************************************!*\
  !*** ./src/app/modules/shop/guards/checkout.guard.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutGuard": () => (/* binding */ CheckoutGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/cart.service */ 5237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class CheckoutGuard {
    constructor(cart, router) {
        this.cart = cart;
        this.router = router;
    }
    canActivate() {
        return this.cart.quantity$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(quantity => {
            if (quantity) {
                return true;
            }
            this.router.navigateByUrl('/cart').then();
            return false;
        }));
    }
    static { this.ɵfac = function CheckoutGuard_Factory(t) { return new (t || CheckoutGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CheckoutGuard, factory: CheckoutGuard.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 5538:
/*!*********************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-cart/page-cart.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageCartComponent": () => (/* binding */ PageCartComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/root.service */ 1372);
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ 5237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/input-number/input-number.component */ 6348);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ 133);














function PageCartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Your shopping cart is empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 9)(6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.root.shop());
  }
}

function PageCartComponent_div_5_tr_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50)(1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r6.root.product(item_r5.cartItem.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r5.cartItem.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function PageCartComponent_div_5_tr_17_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", option_r10.name, ": ", option_r10.value, "");
  }
}

function PageCartComponent_div_5_tr_17_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PageCartComponent_div_5_tr_17_ul_6_li_1_Template, 2, 2, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r5.cartItem.options);
  }
}

const _c0 = function (a0) {
  return {
    "btn-loading": a0
  };
};

function PageCartComponent_div_5_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 14)(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PageCartComponent_div_5_tr_17_div_2_Template, 3, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 16)(4, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PageCartComponent_div_5_tr_17_ul_6_Template, 2, 1, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "app-input-number", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 20)(16, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PageCartComponent_div_5_tr_17_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.remove(item_r5.cartItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "app-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r5.cartItem.product.images == null ? null : item_r5.cartItem.product.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r2.root.product(item_r5.cartItem.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r5.cartItem.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r5.cartItem.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 9, item_r5.cartItem.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", item_r5.quantityControl)("min", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 11, item_r5.cartItem.product.price * item_r5.quantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c0, ctx_r2.removedItems.includes(item_r5.cartItem)));
  }
}

function PageCartComponent_div_5_thead_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "thead", 55)(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 3, ctx_r3.cart.subtotal$)));
  }
}

function PageCartComponent_div_5_tbody_39_tr_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 58)(1, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PageCartComponent_div_5_tbody_39_tr_1_div_6_Template_a_click_1_listener($event) {
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Calculate Shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function PageCartComponent_div_5_tbody_39_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PageCartComponent_div_5_tbody_39_tr_1_div_6_Template, 3, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const total_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](total_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, total_r15.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", total_r15.type === "shipping");
  }
}

function PageCartComponent_div_5_tbody_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PageCartComponent_div_5_tbody_39_tr_1_Template, 7, 5, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r4.cart.totals$));
  }
}

function PageCartComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 6)(2, "table", 12)(3, "thead", 13)(4, "tr", 14)(5, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "tbody", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, PageCartComponent_div_5_tr_17_Template, 18, 15, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 23)(19, "form", 24)(20, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Apply Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 28)(26, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Continue Shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PageCartComponent_div_5_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.update());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Update Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 31)(31, "div", 32)(32, "div", 33)(33, "div", 34)(34, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Cart Totals");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, PageCartComponent_div_5_thead_37_Template, 8, 5, "thead", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](38, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, PageCartComponent_div_5_tbody_39_Template, 3, 3, "tbody", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "tfoot", 39)(42, "tr")(43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](48, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Proceed to checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](14, _c0, ctx_r1.updating))("disabled", !ctx_r1.needUpdate());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](38, 6, ctx_r1.cart.totals$)) == null ? null : tmp_3_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 8, ctx_r1.cart.totals$)) == null ? null : tmp_4_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 10, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](48, 12, ctx_r1.cart.total$)));
  }
}

const _c1 = function (a1) {
  return {
    label: "Home",
    url: a1
  };
};

const _c2 = function () {
  return {
    label: "Shopping Cart",
    url: ""
  };
};

const _c3 = function (a0, a1) {
  return [a0, a1];
};

class PageCartComponent {
  constructor(root, cart) {
    this.root = root;
    this.cart = cart;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.removedItems = [];
    this.items = [];
    this.updating = false;
  }

  ngOnInit() {
    this.cart.items$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(cartItems => cartItems.map(cartItem => {
      return {
        cartItem,
        quantity: cartItem.quantity,
        quantityControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(cartItem.quantity, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required)
      };
    }))).subscribe(items => this.items = items);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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

  update() {
    this.updating = true;
    this.cart.update(this.items.filter(item => item.quantityControl.value !== item.quantity).map(item => ({
      item: item.cartItem,
      quantity: item.quantityControl.value
    }))).subscribe({
      complete: () => this.updating = false
    });
  }

  needUpdate() {
    let needUpdate = false;

    for (const item of this.items) {
      if (!item.quantityControl.valid) {
        return false;
      }

      if (item.quantityControl.value !== item.quantity) {
        needUpdate = true;
      }
    }

    return needUpdate;
  }

  static {
    this.ɵfac = function PageCartComponent_Factory(t) {
      return new (t || PageCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: PageCartComponent,
      selectors: [["app-cart"]],
      decls: 6,
      vars: 11,
      consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], ["class", "block block-empty", 4, "ngIf"], ["class", "cart block", 4, "ngIf"], [1, "block", "block-empty"], [1, "container"], [1, "block-empty__body"], [1, "block-empty__message"], [1, "block-empty__actions"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "cart", "block"], [1, "cart__table", "cart-table"], [1, "cart-table__head"], [1, "cart-table__row"], [1, "cart-table__column", "cart-table__column--image"], [1, "cart-table__column", "cart-table__column--product"], [1, "cart-table__column", "cart-table__column--price"], [1, "cart-table__column", "cart-table__column--quantity"], [1, "cart-table__column", "cart-table__column--total"], [1, "cart-table__column", "cart-table__column--remove"], [1, "cart-table__body"], ["class", "cart-table__row", 4, "ngFor", "ngForOf"], [1, "cart__actions"], [1, "cart__coupon-form"], ["for", "input-coupon-code", 1, "sr-only"], ["type", "text", "id", "input-coupon-code", "placeholder", "Coupon Code", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "cart__buttons"], ["routerLink", "/", 1, "btn", "btn-light"], ["type", "button", 1, "btn", "btn-primary", "cart__update-button", 3, "ngClass", "disabled", "click"], [1, "row", "justify-content-end", "pt-5"], [1, "col-12", "col-md-7", "col-lg-6", "col-xl-5"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "cart__totals"], ["class", "cart__totals-header", 4, "ngIf"], ["class", "cart__totals-body", 4, "ngIf"], [1, "cart__totals-footer"], ["routerLink", "./checkout", 1, "btn", "btn-primary", "btn-xl", "btn-block", "cart__checkout-button"], ["class", "product-image", 4, "ngIf"], [1, "cart-table__product-name", 3, "routerLink"], ["class", "cart-table__options", 4, "ngIf"], ["data-title", "Price", 1, "cart-table__column", "cart-table__column--price"], ["data-title", "Quantity", 1, "cart-table__column", "cart-table__column--quantity"], [3, "formControl", "min"], ["data-title", "Total", 1, "cart-table__column", "cart-table__column--total"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "btn-svg-icon", 3, "ngClass", "click"], ["name", "cross-12", "size", "12"], [1, "product-image"], [1, "product-image__body", 3, "routerLink"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "cart-table__options"], [4, "ngFor", "ngForOf"], [1, "cart__totals-header"], [1, "cart__totals-body"], ["class", "cart__calc-shipping", 4, "ngIf"], [1, "cart__calc-shipping"], ["href", "", 3, "click"]],
      template: function PageCartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-page-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PageCartComponent_div_4_Template, 8, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PageCartComponent_div_5_Template, 51, 16, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("header", "Shopping Cart")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, ctx.root.home()), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c2)));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.items.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.items.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__.InputNumberComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_5__.CurrencyFormatPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNhcnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
  }
}

/***/ }),

/***/ 1414:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-category/page-category.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageCategoryComponent": () => (/* binding */ PageCategoryComponent)
/* harmony export */ });
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ 5376);
/* harmony import */ var _services_page_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/page-category.service */ 4588);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 2972);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resolvers/products-list-resolver.service */ 3839);
/* harmony import */ var _shared_helpers_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/helpers/filter */ 5735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ 8781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/products-view/products-view.component */ 7643);
/* harmony import */ var _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shop-sidebar/shop-sidebar.component */ 9396);















function PageCategoryComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-shop-sidebar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PageCategoryComponent_ng_container_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-shop-sidebar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PageCategoryComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 4)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, PageCategoryComponent_ng_container_4_div_3_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 6)(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-products-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, PageCategoryComponent_ng_container_4_div_7_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("shop-layout shop-layout--sidebar--", ctx_r0.sidebarPosition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.sidebarPosition === "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("layout", ctx_r0.viewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.sidebarPosition === "end");
} }
function PageCategoryComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 4)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-products-view", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-shop-sidebar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("layout", ctx_r1.viewMode)("grid", ctx_r1.getProductsViewLayout());
} }
class PageCategoryComponent {
    constructor(root, router, route, pageService, shop, location) {
        this.root = root;
        this.router = router;
        this.route = route;
        this.pageService = pageService;
        this.shop = shop;
        this.location = location;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.columns = 3;
        this.viewMode = 'grid';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
        this.breadcrumbs = [];
        this.pageHeader = '';
        this.route.data.subscribe(data => {
            this.breadcrumbs = [
                { label: 'Home', url: this.root.home() },
                { label: 'Shop', url: this.root.shop() },
            ];
            // If categorySlug is undefined then this is a root catalog page.
            if (!this.getCategorySlug()) {
                this.pageHeader = 'Shop';
            }
            else {
                // mak ???
                if (data['category']) {
                    this.pageHeader = data['category'].name;
                    this.breadcrumbs = this.breadcrumbs.concat([
                        ...data['category'].parents.map((parent) => ({ label: parent.name, url: this.root.category(parent) })),
                        { label: data['category'].name, url: this.root.category(data['category']) },
                    ]);
                }
            }
            this.pageService.setList(data['products']);
            this.columns = 'columns' in data ? data['columns'] : this.columns;
            this.viewMode = 'viewMode' in data ? data['viewMode'] : this.viewMode;
            this.sidebarPosition = 'sidebarPosition' in data ? data['sidebarPosition'] : this.sidebarPosition;
        });
        this.route.queryParams.subscribe(queryParams => {
            this.pageService.setOptions((0,_resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_2__.parseProductsListParams)(queryParams), false);
        });
        this.pageService.optionsChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounce)(changedOptions => {
            return changedOptions.filterValues ? (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(250) : (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(changedOptions);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)(() => {
            this.updateUrl();
            this.pageService.setIsLoading(true);
            return this.shop.getProductsList(this.getCategorySlug(), this.pageService.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.pageService.optionsChange$));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$)).subscribe(list => {
            this.pageService.setList(list);
            this.pageService.setIsLoading(false);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateUrl() {
        const tree = this.router.parseUrl(this.router.url);
        tree.queryParams = this.getQueryParams();
        this.location.replaceState(tree.toString());
    }
    getQueryParams() {
        const params = {};
        const options = this.pageService.options;
        const filterValues = options.filterValues;
        if ('page' in options && options.page !== 1) {
            params['page'] = options.page;
        }
        if ('limit' in options && options.limit !== 12) {
            params['limit'] = options.limit;
        }
        if ('sort' in options && options.sort !== 'default') {
            params['sort'] = options.sort;
        }
        if ('filterValues' in options) {
            this.pageService.filters.forEach(filter => {
                if (!filterValues || !filterValues[filter.slug]) {
                    return;
                }
                const filterValue = (0,_shared_helpers_filter__WEBPACK_IMPORTED_MODULE_3__.parseFilterValue)(filter.type, filterValues[filter.slug]);
                switch (filter.type) {
                    case 'range':
                        if (filter.min !== filterValue[0] || filter.max !== filterValue[1]) {
                            params[`filter_${filter.slug}`] = `${filterValue[0]}-${filterValue[1]}`;
                        }
                        break;
                    case 'check':
                    case 'color':
                        if (filterValue.length > 0) {
                            params[`filter_${filter.slug}`] = filterValues[filter.slug];
                        }
                        break;
                    case 'radio':
                        if (filterValue !== filter.items[0].slug) {
                            params[`filter_${filter.slug}`] = filterValue;
                        }
                        break;
                }
            });
        }
        return params;
    }
    getCategorySlug() {
        return this.route.snapshot.params['categorySlug'] || this.route.snapshot.data['categorySlug'] || null;
    }
    getProductsViewLayout() {
        return 'grid-' + this.columns + '-full';
    }
    static { this.ɵfac = function PageCategoryComponent_Factory(t) { return new (t || PageCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_page_category_service__WEBPACK_IMPORTED_MODULE_1__.PageCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_5__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.Location)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: PageCategoryComponent, selectors: [["app-grid"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([
                { provide: _services_page_category_service__WEBPACK_IMPORTED_MODULE_1__.PageCategoryService, useClass: _services_page_category_service__WEBPACK_IMPORTED_MODULE_1__.PageCategoryService },
                { provide: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.ShopSidebarService, useClass: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.ShopSidebarService },
            ])], decls: 6, vars: 5, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], [4, "ngIf"], [1, "container"], ["class", "shop-layout__sidebar", 4, "ngIf"], [1, "shop-layout__content"], [1, "block"], ["grid", "grid-3-sidebar", "offcanvas", "mobile", 3, "layout"], [1, "shop-layout__sidebar"], ["offcanvas", "mobile"], ["offcanvas", "always", 3, "layout", "grid"], ["offcanvas", "always"]], template: function PageCategoryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, PageCategoryComponent_ng_container_4_Template, 8, 6, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, PageCategoryComponent_ng_container_5_Template, 5, 2, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("header", ctx.pageHeader)("breadcrumbs", ctx.breadcrumbs);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.columns === 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.columns > 3);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__.PageHeaderComponent, _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_7__.ProductsViewComponent, _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.ShopSidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 675:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageCheckoutComponent": () => (/* binding */ PageCheckoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/root.service */ 1372);
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ 5237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/alert/alert.component */ 8332);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ 133);












function PageCheckoutComponent_tr_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", item_r2.product.name, " \u00D7 ", item_r2.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, item_r2.product.price * item_r2.quantity));
  }
}

function PageCheckoutComponent_tbody_128_tr_8_Template(rf, ctx) {
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
    const total_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](total_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, total_r4.price));
  }
}

function PageCheckoutComponent_tbody_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody", 78)(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PageCheckoutComponent_tbody_128_tr_8_Template, 6, 4, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, ctx_r1.cart.subtotal$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 6, ctx_r1.cart.totals$));
  }
}

const _c0 = function (a1) {
  return {
    label: "Home",
    url: a1
  };
};

const _c1 = function (a1) {
  return {
    label: "Shopping Cart",
    url: a1
  };
};

const _c2 = function () {
  return {
    label: "Checkout",
    url: ""
  };
};

const _c3 = function (a0, a1, a2) {
  return [a0, a1, a2];
};

class PageCheckoutComponent {
  constructor(root, cart, route, router) {
    this.root = root;
    this.cart = cart;
    this.route = route;
    this.router = router;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }

  ngOnInit() {
    this.cart.quantity$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(quantity => {
      if (!quantity) {
        this.router.navigate(['../cart'], {
          relativeTo: this.route
        }).then();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  static {
    this.ɵfac = function PageCheckoutComponent_Factory(t) {
      return new (t || PageCheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: PageCheckoutComponent,
      selectors: [["app-checkout"]],
      decls: 199,
      vars: 25,
      consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], [1, "checkout", "block"], [1, "container"], [1, "row"], [1, "col-12", "mb-3"], ["type", "primary", "size", "lg"], [3, "routerLink"], [1, "col-12", "col-lg-6", "col-xl-7"], [1, "card", "mb-lg-0"], [1, "card-body"], [1, "card-title"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "checkout-first-name"], ["type", "text", "id", "checkout-first-name", "placeholder", "First Name", 1, "form-control"], ["for", "checkout-last-name"], ["type", "text", "id", "checkout-last-name", "placeholder", "Last Name", 1, "form-control"], [1, "form-group"], ["for", "checkout-company-name"], [1, "text-muted"], ["type", "text", "id", "checkout-company-name", "placeholder", "Company Name", 1, "form-control"], ["for", "checkout-country"], ["id", "checkout-country", 1, "form-control"], ["for", "checkout-street-address"], ["type", "text", "id", "checkout-street-address", "placeholder", "Street Address", 1, "form-control"], ["for", "checkout-address"], ["type", "text", "id", "checkout-address", 1, "form-control"], ["for", "checkout-city"], ["type", "text", "id", "checkout-city", 1, "form-control"], ["for", "checkout-state"], ["type", "text", "id", "checkout-state", 1, "form-control"], ["for", "checkout-postcode"], ["type", "text", "id", "checkout-postcode", 1, "form-control"], ["for", "checkout-email"], ["type", "email", "id", "checkout-email", "placeholder", "Email address", 1, "form-control"], ["for", "checkout-phone"], ["type", "text", "id", "checkout-phone", "placeholder", "Phone", 1, "form-control"], [1, "form-check"], [1, "form-check-input", "input-check"], [1, "input-check__body"], ["type", "checkbox", "id", "checkout-create-account", 1, "input-check__input"], [1, "input-check__box"], ["width", "9px", "height", "7px", 1, "input-check__icon"], [0, "xlink", "href", "assets/images/sprite.svg#check-9x7"], ["for", "checkout-create-account", 1, "form-check-label"], [1, "card-divider"], ["type", "checkbox", "id", "checkout-different-address", 1, "input-check__input"], ["for", "checkout-different-address", 1, "form-check-label"], ["for", "checkout-comment"], ["id", "checkout-comment", "rows", "4", 1, "form-control"], [1, "col-12", "col-lg-6", "col-xl-5", "mt-4", "mt-lg-0"], [1, "card", "mb-0"], [1, "checkout__totals"], [1, "checkout__totals-header"], [1, "checkout__totals-products"], [4, "ngFor", "ngForOf"], ["class", "checkout__totals-subtotals", 4, "ngIf"], [1, "checkout__totals-footer"], [1, "payment-methods"], [1, "payment-methods__list"], [1, "payment-methods__item", "payment-methods__item--active"], [1, "payment-methods__item-header"], [1, "payment-methods__item-radio", "input-radio"], [1, "input-radio__body"], ["name", "checkout_payment_method", "type", "radio", "checked", "", 1, "input-radio__input"], [1, "input-radio__circle"], [1, "payment-methods__item-title"], [1, "payment-methods__item-container"], [1, "payment-methods__item-description", "text-muted"], [1, "payment-methods__item"], ["name", "checkout_payment_method", "type", "radio", 1, "input-radio__input"], [1, "checkout__agree", "form-group"], ["type", "checkbox", "id", "checkout-terms", 1, "input-check__input"], ["for", "checkout-terms", 1, "form-check-label"], ["target", "_blank", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary", "btn-xl", "btn-block"], [1, "checkout__totals-subtotals"]],
      template: function PageCheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-page-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "app-alert", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Returning customer? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Click here to login");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Billing details");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 14)(23, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 19)(27, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Company Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "(Optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 19)(33, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "select", 24)(36, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Select a country...");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "United States");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Russia");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Italy");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "France");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Ukraine");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Germany");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Australia");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 19)(53, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Street Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 19)(57, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Apartment, suite, unit etc. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "(Optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 19)(63, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Town / City");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 19)(67, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "State / County");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 19)(71, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Postcode / ZIP");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 13)(75, "div", 14)(76, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Email address");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 14)(80, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 19)(84, "div", 39)(85, "span", 40)(86, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "input", 42)(88, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "svg", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "use", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Create an account?");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 11)(95, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Shipping Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 19)(98, "div", 39)(99, "span", 40)(100, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "input", 48)(102, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "svg", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](104, "use", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Ship to a different address?");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 19)(108, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "Order notes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "(Optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](112, "textarea", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 52)(114, "div", 53)(115, "div", 11)(116, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "Your Order");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "table", 54)(119, "thead", 55)(120, "tr")(121, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "tbody", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](126, PageCheckoutComponent_tr_126_Template, 6, 5, "tr", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](127, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](128, PageCheckoutComponent_tbody_128_Template, 10, 8, "tbody", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](129, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "tfoot", 59)(131, "tr")(132, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](136, "currencyFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](137, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "div", 60)(139, "ul", 61)(140, "li", 62)(141, "label", 63)(142, "span", 64)(143, "span", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "input", 66)(145, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "Direct bank transfer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "div", 69)(149, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, " Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "li", 71)(152, "label", 63)(153, "span", 64)(154, "span", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](155, "input", 72)(156, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "Check payments");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div", 69)(160, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, " Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "li", 71)(163, "label", 63)(164, "span", 64)(165, "span", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](166, "input", 72)(167, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "Cash on delivery");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "div", 69)(171, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, " Pay with cash upon delivery. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "li", 71)(174, "label", 63)(175, "span", 64)(176, "span", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](177, "input", 72)(178, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "PayPal");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "div", 69)(182, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](183, " Pay via PayPal; you can pay with your credit card if you don\u2019t have a PayPal account. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "div", 73)(185, "div", 39)(186, "span", 40)(187, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](188, "input", 74)(189, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](190, "svg", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](191, "use", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "label", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193, " I have read and agree to the website ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "a", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "terms and conditions");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "* ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "button", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](198, "Place Order");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        }

        if (rf & 2) {
          let tmp_5_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", "Checkout")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](21, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c0, ctx.root.home()), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c1, ctx.root.cart()), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](20, _c2)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.root.login());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](116);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](127, 8, ctx.cart.items$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](129, 10, ctx.cart.totals$)) == null ? null : tmp_5_0.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](136, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](137, 14, ctx.cart.total$)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.root.terms());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_4__.CurrencyFormatPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
  }
}

/***/ }),

/***/ 1708:
/*!***************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-compare/page-compare.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageCompareComponent": () => (/* binding */ PageCompareComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/root.service */ 1372);
/* harmony import */ var _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/compare.service */ 3940);
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ 5237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/rating/rating.component */ 9453);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ 133);











function PageCompareComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "You have not chosen any products to compare!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 9)(6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} }
function PageCompareComponent_div_5_td_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", product_r9.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function PageCompareComponent_div_5_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PageCompareComponent_div_5_td_8_div_2_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r2.root.product(product_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", product_r9.images == null ? null : product_r9.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r9.name);
} }
function PageCompareComponent_div_5_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-rating", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", product_r12.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", product_r12.reviews, " Reviews ");
} }
function PageCompareComponent_div_5_td_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PageCompareComponent_div_5_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PageCompareComponent_div_5_td_16_span_1_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", product_r13.availability === "in-stock");
} }
function PageCompareComponent_div_5_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, product_r15.price));
} }
const _c0 = function (a0) { return { "btn-loading": a0 }; };
function PageCompareComponent_div_5_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PageCompareComponent_div_5_td_24_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const product_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.addToCart(product_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r16 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, ctx_r6.addedToCartProducts.includes(product_r16)));
} }
function PageCompareComponent_div_5_tr_25_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r21 = ctx.$implicit;
    const feature_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](feature_r19.values[product_r21.id] || "\u2014");
} }
function PageCompareComponent_div_5_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PageCompareComponent_div_5_tr_25_td_3_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r19 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](feature_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.products);
} }
function PageCompareComponent_div_5_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PageCompareComponent_div_5_td_28_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const product_r23 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.remove(product_r23)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r23 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, ctx_r8.removedProducts.includes(product_r23)));
} }
function PageCompareComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 6)(2, "div", 12)(3, "table", 13)(4, "tbody")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PageCompareComponent_div_5_td_8_Template, 5, 3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, PageCompareComponent_div_5_td_12_Template, 5, 2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "tr")(14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, PageCompareComponent_div_5_td_16_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "tr")(18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, PageCompareComponent_div_5_td_20_Template, 3, 3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "tr")(22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, PageCompareComponent_div_5_td_24_Template, 3, 3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, PageCompareComponent_div_5_tr_25_Template, 4, 2, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, PageCompareComponent_div_5_td_28_Template, 3, 3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.products);
} }
const _c1 = function () { return { label: "Home", url: "/" }; };
const _c2 = function () { return { label: "Comparison", url: "" }; };
const _c3 = function (a0, a1) { return [a0, a1]; };
class PageCompareComponent {
    constructor(root, compare, cart) {
        this.root = root;
        this.compare = compare;
        this.cart = cart;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.products = [];
        this.features = [];
        this.addedToCartProducts = [];
        this.removedProducts = [];
    }
    ngOnInit() {
        this.compare.items$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(products => {
            const features = [];
            products.forEach(product => product.attributes.forEach(productAttribute => {
                let feature = features.find(eachFeature => eachFeature.name === productAttribute.name);
                if (!feature) {
                    feature = {
                        name: productAttribute.name,
                        values: {}
                    };
                    features.push(feature);
                }
                feature.values[product.id] = productAttribute.values.map(x => x.name).join(', ');
            }));
            this.products = products;
            this.features = features;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    addToCart(product) {
        if (this.addedToCartProducts.includes(product)) {
            return;
        }
        this.addedToCartProducts.push(product);
        this.cart.add(product, 1).subscribe({
            complete: () => {
                this.addedToCartProducts = this.addedToCartProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
    remove(product) {
        if (this.removedProducts.includes(product)) {
            return;
        }
        this.removedProducts.push(product);
        this.compare.remove(product).subscribe({
            complete: () => {
                this.removedProducts = this.removedProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
    static { this.ɵfac = function PageCompareComponent_Factory(t) { return new (t || PageCompareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_compare_service__WEBPACK_IMPORTED_MODULE_1__.CompareService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PageCompareComponent, selectors: [["app-compare"]], decls: 6, vars: 10, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], ["class", "block block-empty", 4, "ngIf"], ["class", "block", 4, "ngIf"], [1, "block", "block-empty"], [1, "container"], [1, "block-empty__body"], [1, "block-empty__message"], [1, "block-empty__actions"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-sm"], [1, "block"], [1, "table-responsive"], [1, "compare-table"], [4, "ngFor", "ngForOf"], [1, "compare-table__product-link", 3, "routerLink"], ["class", "compare-table__product-image product-image", 4, "ngIf"], [1, "compare-table__product-name"], [1, "compare-table__product-image", "product-image"], [1, "product-image__body"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "compare-table__product-rating"], [3, "value"], [1, "compare-table__product-rating-legend"], ["class", "compare-table__product-badge badge badge-success", 4, "ngIf"], [1, "compare-table__product-badge", "badge", "badge-success"], [1, "btn", "btn-primary", 3, "ngClass", "click"], [1, "btn", "btn-secondary", "btn-sm", 3, "ngClass", "click"]], template: function PageCompareComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PageCompareComponent_div_4_Template, 8, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PageCompareComponent_div_5_Template, 29, 7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("header", "Comparison")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2)));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.products.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.products.length);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__.RatingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_5__.CurrencyFormatPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNvbXBhcmUuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 1189:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-order-success/page-order-success.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageOrderSuccessComponent": () => (/* binding */ PageOrderSuccessComponent)
/* harmony export */ });
/* harmony import */ var _data_account_order_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/account-order-details */ 7405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ 133);







function PageOrderSuccessComponent_tr_50_div_8_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 48)(1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r5.label + ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r5.value);
} }
function PageOrderSuccessComponent_tr_50_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45)(1, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PageOrderSuccessComponent_tr_50_div_8_li_2_Template, 5, 2, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r2.options);
} }
function PageOrderSuccessComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 37)(2, "div", 38)(3, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 41)(6, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, PageOrderSuccessComponent_tr_50_div_8_Template, 3, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r0.root.product(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r0.root.product(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.options && item_r2.options.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 7, item_r2.total));
} }
function PageOrderSuccessComponent_tbody_51_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const line_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](line_r8.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, line_r8.total));
} }
function PageOrderSuccessComponent_tbody_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody", 51)(1, "tr")(2, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PageOrderSuccessComponent_tbody_51_tr_7_Template, 6, 4, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 2, ctx_r1.order.subtotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.order.additionalLines);
} }
class PageOrderSuccessComponent {
    constructor(root) {
        this.root = root;
        this.order = _data_account_order_details__WEBPACK_IMPORTED_MODULE_0__.order;
    }
    static { this.ɵfac = function PageOrderSuccessComponent_Factory(t) { return new (t || PageOrderSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__.RootService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PageOrderSuccessComponent, selectors: [["app-page-order-success"]], decls: 106, vars: 26, consts: [[1, "test-border"], [1, "test-name-Component"], [1, "block", "order-success"], [1, "container"], [1, "order-success__body"], [1, "order-success__header"], ["name", "check-100", "size", "100", 1, "order-success__icon"], [1, "order-success__title"], [1, "order-success__subtitle"], [1, "order-success__actions"], ["routerLink", "/", 1, "btn", "btn-xs", "btn-secondary"], [1, "order-success__meta"], [1, "order-success__meta-list"], [1, "order-success__meta-item"], [1, "order-success__meta-title"], [1, "order-success__meta-value"], [1, "card"], [1, "order-list"], [1, "order-list__header"], ["colspan", "2", 1, "order-list__column-label"], [1, "order-list__column-quantity"], [1, "order-list__column-total"], [1, "order-list__products"], [4, "ngFor", "ngForOf"], ["class", "order-list__subtotals", 4, "ngIf"], [1, "order-list__footer"], ["colspan", "3", 1, "order-list__column-label"], [1, "row", "mt-3", "no-gutters", "mx-n2"], [1, "col-sm-6", "col-12", "px-2"], [1, "card", "address-card"], [1, "address-card__body"], [1, "address-card__badge", "address-card__badge--muted"], [1, "address-card__name"], [1, "address-card__row"], [1, "address-card__row-title"], [1, "address-card__row-content"], [1, "col-sm-6", "col-12", "px-2", "mt-sm-0", "mt-3"], [1, "order-list__column-image"], [1, "product-image"], [1, "product-image__body", 3, "routerLink"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "order-list__column-product"], [3, "routerLink"], ["class", "order-list__options", 4, "ngIf"], ["data-title", "Qty:", 1, "order-list__column-quantity"], [1, "order-list__options"], [1, "order-list__options-list"], ["class", "order-list__options-item", 4, "ngFor", "ngForOf"], [1, "order-list__options-item"], [1, "order-list__options-label"], [1, "order-list__options-value"], [1, "order-list__subtotals"]], template: function PageOrderSuccessComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Thank you");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Your order has been received");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Go To Homepage");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11)(16, "ul", 12)(17, "li", 13)(18, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Order number:");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li", 13)(23, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Created at:");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li", 13)(28, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Total:");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "currencyFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li", 13)(34, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Payment method:");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 16)(39, "div", 17)(40, "table")(41, "thead", 18)(42, "tr")(43, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "th", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Qty");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "th", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "tbody", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, PageOrderSuccessComponent_tr_50_Template, 14, 9, "tr", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, PageOrderSuccessComponent_tbody_51_Template, 8, 4, "tbody", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "tfoot", 25)(53, "tr")(54, "th", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "td", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](58, "currencyFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 27)(60, "div", 28)(61, "div", 29)(62, "div", 30)(63, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Shipping Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 33)(74, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Phone Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 33)(79, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 36)(84, "div", 29)(85, "div", 30)(86, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Billing Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 33)(97, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Phone Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 33)(102, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("#", ctx.order.id, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.order.date);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 22, ctx.order.total));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.order.paymentMethod);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.order.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.order.additionalLines.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](58, 24, ctx.order.total));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.order.shippingAddress.firstName + " " + ctx.order.shippingAddress.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.order.shippingAddress.country, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.order.shippingAddress.postcode, ", ", ctx.order.shippingAddress.city, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.order.shippingAddress.address, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.order.shippingAddress.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.order.shippingAddress.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.order.billingAddress.firstName + " " + ctx.order.billingAddress.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.order.billingAddress.country, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.order.billingAddress.postcode, ", ", ctx.order.billingAddress.city, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.order.billingAddress.address, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.order.billingAddress.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.order.billingAddress.email);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_3__.CurrencyFormatPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW9yZGVyLXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 2826:
/*!***************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-product/page-product.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageProductComponent": () => (/* binding */ PageProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ 8781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/block-products-carousel/block-products-carousel.component */ 4630);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_components_product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/product/product.component */ 5172);
/* harmony import */ var _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/product-tabs/product-tabs.component */ 5011);
/* harmony import */ var _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/product-sidebar/product-sidebar.component */ 5597);










const _c0 = function () {
  return [];
};

function PageProductComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-product", 6)(4, "app-product-tabs");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-block-products-carousel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("product", ctx_r0.product)("layout", ctx_r0.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 4, ctx_r0.relatedProducts$) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0))("rows", 1);
  }
}

function PageProductComponent_ng_container_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-product-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function PageProductComponent_ng_container_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-product-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function PageProductComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PageProductComponent_ng_container_5_div_3_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 9)(5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-product", 6)(7, "app-product-tabs", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-block-products-carousel", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, PageProductComponent_ng_container_5_div_10_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("shop-layout shop-layout--sidebar--", ctx_r1.sidebarPosition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sidebarPosition === "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("product", ctx_r1.product)("layout", ctx_r1.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("withSidebar", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 11, ctx_r1.relatedProducts$) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c0))("rows", 1)("withSidebar", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sidebarPosition === "end");
  }
}

const _c1 = function () {
  return {
    label: "Home",
    url: "/"
  };
};

const _c2 = function () {
  return {
    label: "Screwdrivers",
    url: "/catalog"
  };
};

const _c3 = function (a0) {
  return {
    label: a0,
    url: ""
  };
};

const _c4 = function (a0, a1, a2) {
  return [a0, a1, a2];
};

class PageProductComponent {
  constructor(shop, route) {
    this.shop = shop;
    this.route = route;
    this.layout = 'standard';
    this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.layout = data['layout'] || this.layout;
      this.sidebarPosition = data['sidebarPosition'] || this.sidebarPosition;
      this.product = data['product'];
      this.relatedProducts$ = this.shop.getRelatedProducts(data['product']);
    });
  }

  static {
    this.ɵfac = function PageProductComponent_Factory(t) {
      return new (t || PageProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_0__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: PageProductComponent,
      selectors: [["app-page-product"]],
      decls: 6,
      vars: 12,
      consts: [[1, "test-border"], [1, "test-name-Component"], [3, "breadcrumbs"], [4, "ngIf"], [1, "block"], [1, "container"], [3, "product", "layout"], ["header", "Related Products", "layout", "grid-5", 3, "products", "rows"], ["class", "shop-layout__sidebar", 4, "ngIf"], [1, "shop-layout__content"], [3, "withSidebar"], ["header", "Related Products", "layout", "grid-4-sm", 3, "products", "rows", "withSidebar"], [1, "shop-layout__sidebar"]],
      template: function PageProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-page-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PageProductComponent_ng_container_4_Template, 7, 7, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PageProductComponent_ng_container_5_Template, 11, 14, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](8, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c3, (ctx.product == null ? null : ctx.product.name) || "")));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.layout !== "sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.layout === "sidebar");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_1__.BlockProductsCarouselComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _shared_components_product_product_component__WEBPACK_IMPORTED_MODULE_3__.ProductComponent, _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_4__.ProductTabsComponent, _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.ProductSidebarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MifQ== */"]
    });
  }
}

/***/ }),

/***/ 541:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTrackOrderComponent": () => (/* binding */ PageTrackOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);



const _c0 = function () { return { label: "Home", url: "/" }; };
const _c1 = function () { return { label: "Track Order", url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class PageTrackOrderComponent {
    constructor() { }
    static { this.ɵfac = function PageTrackOrderComponent_Factory(t) { return new (t || PageTrackOrderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageTrackOrderComponent, selectors: [["app-track-order"]], decls: 27, vars: 7, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "breadcrumbs"], [1, "block"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-5", "col-lg-6", "col-md-8"], [1, "card", "flex-grow-1", "mb-0", "mt-5"], [1, "card-body"], [1, "card-title", "text-center"], [1, "mb-4", "pt-2"], [1, "form-group"], ["for", "track-order-id"], ["id", "track-order-id", "type", "text", "placeholder", "Order ID", 1, "form-control"], ["for", "track-email"], ["id", "track-email", "type", "email", "placeholder", "Email address", 1, "form-control"], [1, "pt-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block"]], template: function PageTrackOrderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Track Order");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Vestibulum sem odio, ullamcorper a imperdiet tincidunt sed magna felis, consequat a erat ut, rutrum finibus odio. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form")(16, "div", 11)(17, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Order ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16)(25, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Track");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1)));
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXRyYWNrLW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 1165:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageWishlistComponent": () => (/* binding */ PageWishlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/root.service */ 1372);
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ 165);
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ 5237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/rating/rating.component */ 9453);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ 133);











function PageWishlistComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Your wish list is empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 9)(6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
}

function PageWishlistComponent_div_6_tr_16_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r4.root.product(product_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", product_r3.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}

const _c0 = function (a0) {
  return {
    "btn-loading": a0
  };
};

function PageWishlistComponent_div_6_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 14)(1, "td", 15)(2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, PageWishlistComponent_div_6_tr_16_a_3_Template, 2, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 16)(5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-rating", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td", 17)(12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td", 19)(18, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PageWishlistComponent_div_6_tr_16_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const product_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.addToCart(product_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "td", 20)(21, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PageWishlistComponent_div_6_tr_16_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const product_r3 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.remove(product_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "app-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", product_r3.images == null ? null : product_r3.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r2.root.product(product_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", product_r3.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", product_r3.reviews, " Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 8, product_r3.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c0, ctx_r2.addedToCartProducts.includes(product_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c0, ctx_r2.removedProducts.includes(product_r3)));
  }
}

function PageWishlistComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 6)(2, "table", 12)(3, "thead", 13)(4, "tr", 14)(5, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Stock Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "th", 19)(14, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "tbody", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, PageWishlistComponent_div_6_tr_16_Template, 23, 14, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 1, ctx_r1.wishlist.items$));
  }
}

const _c1 = function () {
  return {
    label: "Home",
    url: "/"
  };
};

const _c2 = function () {
  return {
    label: "Wish List",
    url: ""
  };
};

const _c3 = function (a0, a1) {
  return [a0, a1];
};

class PageWishlistComponent {
  constructor(root, wishlist, cart) {
    this.root = root;
    this.wishlist = wishlist;
    this.cart = cart;
    this.addedToCartProducts = [];
    this.removedProducts = [];
  }

  addToCart(product) {
    if (this.addedToCartProducts.includes(product)) {
      return;
    }

    this.addedToCartProducts.push(product);
    this.cart.add(product, 1).subscribe({
      complete: () => {
        this.addedToCartProducts = this.addedToCartProducts.filter(eachProduct => eachProduct !== product);
      }
    });
  }

  remove(product) {
    if (this.removedProducts.includes(product)) {
      return;
    }

    this.removedProducts.push(product);
    this.wishlist.remove(product).subscribe({
      complete: () => {
        this.removedProducts = this.removedProducts.filter(eachProduct => eachProduct !== product);
      }
    });
  }

  static {
    this.ɵfac = function PageWishlistComponent_Factory(t) {
      return new (t || PageWishlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__.WishlistService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: PageWishlistComponent,
      selectors: [["app-wishlist"]],
      decls: 8,
      vars: 14,
      consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], ["class", "block block-empty", 4, "ngIf"], ["class", "block", 4, "ngIf"], [1, "block", "block-empty"], [1, "container"], [1, "block-empty__body"], [1, "block-empty__message"], [1, "block-empty__actions"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-sm"], [1, "block"], [1, "wishlist"], [1, "wishlist__head"], [1, "wishlist__row"], [1, "wishlist__column", "wishlist__column--image"], [1, "wishlist__column", "wishlist__column--product"], [1, "wishlist__column", "wishlist__column--stock"], [1, "wishlist__column", "wishlist__column--price"], [1, "wishlist__column", "wishlist__column--tocart"], [1, "wishlist__column", "wishlist__column--remove"], [1, "wishlist__body"], ["class", "wishlist__row", 4, "ngFor", "ngForOf"], [1, "product-image"], ["class", "product-image__body", 3, "routerLink", 4, "ngIf"], [1, "wishlist__product-name", 3, "routerLink"], [1, "wishlist__product-rating"], [3, "value"], [1, "wishlist__product-rating-legend"], [1, "badge", "badge-success"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "ngClass", "click"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "btn-svg-icon", 3, "ngClass", "click"], ["name", "cross-12", "size", "12"], [1, "product-image__body", 3, "routerLink"], ["alt", "", 1, "product-image__img", 3, "src"]],
      template: function PageWishlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-page-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, PageWishlistComponent_div_4_Template, 8, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, PageWishlistComponent_div_6_Template, 18, 3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          let tmp_3_0;
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.constructor.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", "Wish List")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](11, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c2)));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 5, ctx.wishlist.items$)) == null ? null : tmp_3_0.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 7, ctx.wishlist.items$)) == null ? null : tmp_4_0.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent, _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_5__.RatingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_6__.CurrencyFormatPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXdpc2hsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
  }
}

/***/ }),

/***/ 5259:
/*!*********************************************************************!*\
  !*** ./src/app/modules/shop/resolvers/category-resolver.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryResolverService": () => (/* binding */ CategoryResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/api/shop.service */ 8781);








class CategoryResolverService {
    constructor(root, router, shop) {
        this.root = root;
        this.router = router;
        this.shop = shop;
        this.isLog = true;
    }
    resolve(route) {
        const categorySlug = route.params['categorySlug'] || route.data['categorySlug'] || null;
        if (this.isLog) {
            console.log('- rsl -- CategoryResolverService.resolve() route.params.categorySlug -> %o  route.data.categorySlug -> %o', route.params.categorySlug, route.data.categorySlug);
        }
        if (categorySlug === null) {
            return null;
        }
        return this.shop.getCategory(categorySlug).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse && error.status === 404) {
                this.router.navigateByUrl(this.root.notFound()).then();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
        }));
    }
    static { this.ɵfac = function CategoryResolverService_Factory(t) { return new (t || CategoryResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_0__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_1__.ShopService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CategoryResolverService, factory: CategoryResolverService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 537:
/*!********************************************************************!*\
  !*** ./src/app/modules/shop/resolvers/product-resolver.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductResolverService": () => (/* binding */ ProductResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/fake-server/database/brands */ 2532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/root.service */ 1372);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/shop.service */ 8781);









class ProductResolverService {
    constructor(root, router, shop) {
        this.root = root;
        this.router = router;
        this.shop = shop;
    }
    resolve(route) {
        const productSlug = route.params['productSlug'] || route.data['productSlug'];
        /*
                return this.shop.getProduct(productSlug).pipe(
                    catchError(error => {
                        if (error instanceof HttpErrorResponse && error.status === 404) {
                            this.router.navigate([this.root.notFound()]).then();
                        }
        
                        return EMPTY;
                    })
                );
                */
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_0__.getModeSource)()) {
            case 'demo.sourcing.pm':
                return this.shop.getProductHtml(productSlug).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
                    if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse && error.status === 404) {
                        this.router.navigate([this.root.notFound()]).then();
                    }
                    return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
                }));
                break;
            default: // 'fake-server'; 'json':
                return this.shop.getProduct(productSlug)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
                    if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse && error.status === 404) {
                        this.router.navigate([this.root.notFound()]).then();
                    }
                    return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
                }));
        }
    }
    static { this.ɵfac = function ProductResolverService_Factory(t) { return new (t || ProductResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__.RootService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__.ShopService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ProductResolverService, factory: ProductResolverService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 5376:
/*!***************************************************************!*\
  !*** ./src/app/modules/shop/services/shop-sidebar.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopSidebarService": () => (/* binding */ ShopSidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ShopSidebarService {
    constructor() {
        this.isOpenSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.isOpen$ = this.isOpenSubject$.asObservable();
    }
    open() {
        this.isOpenSubject$.next(true);
    }
    close() {
        this.isOpenSubject$.next(false);
    }
    static { this.ɵfac = function ShopSidebarService_Factory(t) { return new (t || ShopSidebarService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShopSidebarService, factory: ShopSidebarService.ɵfac }); }
}


/***/ }),

/***/ 3443:
/*!*****************************************************!*\
  !*** ./src/app/modules/shop/shop-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopRoutingModule": () => (/* binding */ ShopRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ 1414);
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ 5538);
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ 1165);
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ 675);
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ 1708);
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ 541);
/* harmony import */ var _guards_checkout_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/checkout.guard */ 8642);
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ 2826);
/* harmony import */ var _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/products-list-resolver.service */ 3839);
/* harmony import */ var _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/category-resolver.service */ 5259);
/* harmony import */ var _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolvers/product-resolver.service */ 537);
/* harmony import */ var _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-order-success/page-order-success.component */ 1189);
/* harmony import */ var src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/fake-server/database/brands */ 2532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
















const rootCategorySlug = (0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_12__.getRootCategorySlug)(); //'Sanitaire';  // 'power-tools'
const categoryPageData = {
    // Number of products per row. Possible values: 3, 4, 5.
    columns: 3,
    // Shop view mode by default. Possible values: 'grid', 'grid-with-features', 'list'.
    viewMode: 'grid',
    // Sidebar position. Possible values: 'start', 'end'.
    // It does not matter if the value of the 'columns' parameter is not 3.
    // For LTR scripts "start" is "left" and "end" is "right".
    sidebarPosition: 'start'
};
const categoryPageResolvers = {
    category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_9__.CategoryResolverService,
    products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_8__.ProductsListResolverService
};
const routes = [
    {
        path: 'catalog',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__.PageCategoryComponent,
        data: categoryPageData,
        resolve: categoryPageResolvers,
    },
    {
        path: 'catalog/:categorySlug',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__.PageCategoryComponent,
        data: categoryPageData,
        resolve: categoryPageResolvers,
    },
    {
        path: 'products/:productSlug',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_7__.PageProductComponent,
        data: {
            // Product page layout. Possible values: 'standard', 'columnar', 'sidebar'.
            layout: 'standard',
            // Sidebar position. Possible values: 'start', 'end'.
            // It does not matter if the value of the 'layout' parameter is not 'sidebar'.
            // For LTR scripts "start" is "left" and "end" is "right".
            sidebarPosition: 'start'
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_10__.ProductResolverService
        },
    },
    {
        path: 'cart',
        pathMatch: 'full',
        component: _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_1__.PageCartComponent
    },
    {
        path: 'cart/checkout',
        component: _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_3__.PageCheckoutComponent,
        canActivate: [_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_6__.CheckoutGuard],
    },
    {
        path: 'cart/checkout/success',
        component: _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_11__.PageOrderSuccessComponent,
    },
    {
        path: 'wishlist',
        component: _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_2__.PageWishlistComponent
    },
    {
        path: 'compare',
        component: _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_4__.PageCompareComponent
    },
    {
        path: 'track-order',
        component: _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_5__.PageTrackOrderComponent
    },
    // --- START ---
    // The following routes are only needed to demonstrate possible layouts of some pages. You can delete them.
    {
        path: 'category-grid-4-columns-full',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__.PageCategoryComponent,
        data: {
            columns: 4,
            viewMode: 'grid',
            categorySlug: (0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_12__.getRootCategorySlug)(), // 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_9__.CategoryResolverService,
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_8__.ProductsListResolverService
        },
    },
    {
        path: 'category-grid-5-columns-full',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__.PageCategoryComponent,
        data: {
            columns: 5,
            viewMode: 'grid',
            categorySlug: (0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_12__.getRootCategorySlug)(), // 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_9__.CategoryResolverService,
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_8__.ProductsListResolverService
        },
    },
    {
        path: 'category-list',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__.PageCategoryComponent,
        data: {
            columns: 3,
            viewMode: 'list',
            sidebarPosition: 'start',
            categorySlug: (0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_12__.getRootCategorySlug)(), // 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_9__.CategoryResolverService,
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_8__.ProductsListResolverService
        },
    },
    {
        path: 'category-right-sidebar',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__.PageCategoryComponent,
        data: {
            columns: 3,
            viewMode: 'grid',
            sidebarPosition: 'end',
            categorySlug: (0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_12__.getRootCategorySlug)(), // 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_9__.CategoryResolverService,
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_8__.ProductsListResolverService
        },
    },
    {
        path: 'product-standard',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_7__.PageProductComponent,
        data: {
            layout: 'standard',
            sidebarPosition: 'start',
            productSlug: (0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_12__.getProductStandard)(), // 'brandix-screwdriver-screw1500acc',
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_10__.ProductResolverService
        },
    },
    {
        path: 'product-columnar',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_7__.PageProductComponent,
        data: {
            layout: 'columnar',
            productSlug: (0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_12__.getProductStandard)(), // 'brandix-screwdriver-screw1500acc',
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_10__.ProductResolverService
        },
    },
    {
        path: 'product-sidebar',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_7__.PageProductComponent,
        data: {
            layout: 'sidebar',
            sidebarPosition: 'start',
            productSlug: (0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_12__.getProductStandard)(), // 'brandix-screwdriver-screw1500acc',
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_10__.ProductResolverService
        },
    },
    // --- END ---
];
class ShopRoutingModule {
    static { this.ɵfac = function ShopRoutingModule_Factory(t) { return new (t || ShopRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ShopRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ShopRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 5624:
/*!*********************************************!*\
  !*** ./src/app/modules/shop/shop.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopModule": () => (/* binding */ ShopModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/blocks.module */ 7450);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-routing.module */ 3443);
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/widgets.module */ 9346);
/* harmony import */ var _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/products-view/products-view.component */ 7643);
/* harmony import */ var _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-tabs/product-tabs.component */ 5011);
/* harmony import */ var _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shop-sidebar/shop-sidebar.component */ 9396);
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ 5538);
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ 1414);
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ 675);
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ 1708);
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ 2826);
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ 541);
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ 1165);
/* harmony import */ var _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product-sidebar/product-sidebar.component */ 5597);
/* harmony import */ var _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page-order-success/page-order-success.component */ 1189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
// modules (angular)


// modules (third-party)

// modules




// components



// pages










class ShopModule {
    static { this.ɵfac = function ShopModule_Factory(t) { return new (t || ShopModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: ShopModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_19__.CarouselModule,
            // modules
            _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__.BlocksModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_2__.ShopRoutingModule,
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ShopModule, { declarations: [
        // components
        _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_4__.ProductsViewComponent,
        _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_5__.ProductTabsComponent,
        _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.ShopSidebarComponent,
        // pages
        _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_7__.PageCartComponent,
        _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_8__.PageCategoryComponent,
        _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_9__.PageCheckoutComponent,
        _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_10__.PageCompareComponent,
        _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_11__.PageProductComponent,
        _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_12__.PageTrackOrderComponent,
        _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_13__.PageWishlistComponent,
        _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_14__.ProductSidebarComponent,
        _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_15__.PageOrderSuccessComponent], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        // modules (third-party)
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_19__.CarouselModule,
        // modules
        _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__.BlocksModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _shop_routing_module__WEBPACK_IMPORTED_MODULE_2__.ShopRoutingModule,
        _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule] }); })();


/***/ }),

/***/ 5735:
/*!******************************************!*\
  !*** ./src/app/shared/helpers/filter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseFilterValue": () => (/* binding */ parseFilterValue)
/* harmony export */ });
function parseFilterValue(filterType, value) {
    switch (filterType) {
        case 'range':
            return value.split('-').map(x => parseFloat(x));
        case 'check':
        case 'color':
            return value.trim() === '' ? [] : value.split(',');
    }
    return value;
}


/***/ }),

/***/ 4005:
/*!******************************************!*\
  !*** ./src/data/shop-product-reviews.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reviews": () => (/* binding */ reviews)
/* harmony export */ });
const reviews = [
    {
        avatar: 'assets/images/avatars/avatar-1.jpg',
        author: 'Samantha Smith',
        rating: 4,
        date: '27 May, 2018',
        text: 'Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo ' +
            'scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.'
    },
    {
        avatar: 'assets/images/avatars/avatar-2.jpg',
        author: 'Adam Taylor',
        rating: 3,
        date: '12 April, 2018',
        text: 'Aenean non lorem nisl. Duis tempor sollicitudin orci, eget tincidunt ex semper sit amet. Nullam neque justo, ' +
            'sodales congue feugiat ac, facilisis a augue. Donec tempor sapien et fringilla facilisis. Nam maximus consectetur ' +
            'diam. Nulla ut ex mollis, volutpat tellus vitae, accumsan ligula.'
    },
    {
        avatar: 'assets/images/avatars/avatar-3.jpg',
        author: 'Helena Garcia',
        rating: 5,
        date: '2 January, 2018',
        text: 'Duis ac lectus scelerisque quam blandit egestas. Pellentesque hendrerit eros laoreet suscipit ultrices.'
    }
];


/***/ }),

/***/ 7658:
/*!***************************************!*\
  !*** ./src/data/shop-product-spec.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "specification": () => (/* binding */ specification)
/* harmony export */ });
const specification = [
    { name: 'General', features: [
            { name: 'Material', value: 'Aluminium, Plastic' },
            { name: 'Engine Type', value: 'Brushless' },
            { name: 'Battery Voltage', value: '18 V' },
            { name: 'Battery Type', value: 'Li-lon' },
            { name: 'Number of Speeds', value: '2' },
            { name: 'Charge Time', value: '1.08 h' },
            { name: 'Weight', value: '1.5 kg' }
        ] },
    { name: 'Dimensions', features: [
            { name: 'Length', value: '99 mm' },
            { name: 'Width', value: '207 mm' },
            { name: 'Height', value: '208 mm' }
        ] }
];


/***/ }),

/***/ 2972:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounce.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 2831);

function debounce(durationSelector) {
  return source => source.lift(new DebounceOperator(durationSelector));
}

class DebounceOperator {
  constructor(durationSelector) {
    this.durationSelector = durationSelector;
  }

  call(subscriber, source) {
    return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
  }

}

class DebounceSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
  constructor(destination, durationSelector) {
    super(destination);
    this.durationSelector = durationSelector;
    this.hasValue = false;
  }

  _next(value) {
    try {
      const result = this.durationSelector.call(this, value);

      if (result) {
        this._tryNext(value, result);
      }
    } catch (err) {
      this.destination.error(err);
    }
  }

  _complete() {
    this.emitValue();
    this.destination.complete();
  }

  _tryNext(value, duration) {
    let subscription = this.durationSubscription;
    this.value = value;
    this.hasValue = true;

    if (subscription) {
      subscription.unsubscribe();
      this.remove(subscription);
    }

    subscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(this));

    if (subscription && !subscription.closed) {
      this.add(this.durationSubscription = subscription);
    }
  }

  notifyNext() {
    this.emitValue();
  }

  notifyComplete() {
    this.emitValue();
  }

  emitValue() {
    if (this.hasValue) {
      const value = this.value;
      const subscription = this.durationSubscription;

      if (subscription) {
        this.durationSubscription = undefined;
        subscription.unsubscribe();
        this.remove(subscription);
      }

      this.value = undefined;
      this.hasValue = false;

      super._next(value);
    }
  }

}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_shop_shop_module_ts.js.map