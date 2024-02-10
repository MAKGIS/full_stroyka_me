"use strict";
(self["webpackChunkstroyka"] = self["webpackChunkstroyka"] || []).push([["src_app_modules_blog_blog_module_ts"],{

/***/ 1516:
/*!*****************************************************!*\
  !*** ./src/app/modules/blog/blog-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogRoutingModule": () => (/* binding */ BlogRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ 8023);
/* harmony import */ var _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-post/page-post.component */ 8922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category-classic'
    },
    {
        path: 'category-classic',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__.PageCategoryComponent,
        data: {
            sidebarPosition: 'end',
            layout: 'classic' // one of [classic, grid, list]
        }
    },
    {
        path: 'category-grid',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__.PageCategoryComponent,
        data: {
            sidebarPosition: 'end',
            layout: 'grid' // one of [classic, grid, list]
        }
    },
    {
        path: 'category-list',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__.PageCategoryComponent,
        data: {
            sidebarPosition: 'end',
            layout: 'list' // one of [classic, grid, list]
        }
    },
    {
        path: 'category-left-sidebar',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_0__.PageCategoryComponent,
        data: {
            sidebarPosition: 'start',
            layout: 'classic' // one of [classic, grid, list]
        }
    },
    {
        path: 'post-classic',
        component: _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_1__.PagePostComponent,
        data: {
            sidebarPosition: 'end',
            layout: 'classic'
        }
    },
    {
        path: 'post-full',
        component: _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_1__.PagePostComponent,
        data: {
            layout: 'full'
        }
    }
];
class BlogRoutingModule {
    static { this.ɵfac = function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BlogRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6195:
/*!*********************************************!*\
  !*** ./src/app/modules/blog/blog.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogModule": () => (/* binding */ BlogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-routing.module */ 1516);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/widgets.module */ 9346);
/* harmony import */ var _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/comments-list/comments-list.component */ 9323);
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/post/post.component */ 3067);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 2384);
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ 8023);
/* harmony import */ var _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-post/page-post.component */ 8922);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.module */ 6747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
// modules (angular)

// modules



// components



// pages


// Translate





class BlogModule {
    static { this.ɵfac = function BlogModule_Factory(t) { return new (t || BlogModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: BlogModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            // modules
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
                    useFactory: (src_app_app_module__WEBPACK_IMPORTED_MODULE_8__.createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
                }
            })] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [
        // components
        _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_3__.CommentsListComponent,
        _components_post_post_component__WEBPACK_IMPORTED_MODULE_4__.PostComponent,
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent,
        // pages
        _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_6__.PageCategoryComponent,
        _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_7__.PagePostComponent], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        // modules
        _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule] }); })();


/***/ }),

/***/ 9323:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/blog/components/comments-list/comments-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsListComponent": () => (/* binding */ CommentsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);



const _c0 = function () { return []; };
function CommentsListComponent_li_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-comments-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comments", comment_r1.children || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("level", ctx_r2.level + 1);
} }
function CommentsListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1)(1, "div", 2)(2, "div", 3)(3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CommentsListComponent_li_1_div_18_Template, 2, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", comment_r1.avatar + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx_r0.tagLang + "Reply"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r1.children == null ? null : comment_r1.children.length);
} }
class CommentsListComponent {
    constructor() {
        this.comments = [];
        this.level = 0;
        this.tagLang = 'comments-list.';
    }
    static { this.ɵfac = function CommentsListComponent_Factory(t) { return new (t || CommentsListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsListComponent, selectors: [["app-comments-list"]], inputs: { comments: "comments", level: "level" }, decls: 2, vars: 4, consts: [["class", "comments-list__item", 4, "ngFor", "ngForOf"], [1, "comments-list__item"], [1, "comment"], [1, "comment__avatar"], ["href", ""], ["alt", "", 3, "src"], [1, "comment__content"], [1, "comment__header"], [1, "comment__author"], [1, "comment__reply"], ["type", "button", 1, "btn", "btn-xs", "btn-light"], [1, "comment__text"], [1, "comment__date"], ["class", "comment-list__children", 4, "ngIf"], [1, "comment-list__children"], [3, "comments", "level"]], template: function CommentsListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentsListComponent_li_1_Template, 19, 8, "li", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("comments-list comments-list--level--", ctx.level, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, CommentsListComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 3067:
/*!****************************************************************!*\
  !*** ./src/app/modules/blog/components/post/post.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostComponent": () => (/* binding */ PostComponent)
/* harmony export */ });
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/blog-posts */ 1622);
/* harmony import */ var _data_blog_post_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../data/blog-post-comments */ 6602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/share-buttons/share-buttons.component */ 3791);
/* harmony import */ var _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comments-list/comments-list.component */ 9323);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








function PostComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 44)(5, "div", 45)(6, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", post_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](post_r1.date);
} }
const _c0 = function (a0) { return { "typography--expanded": a0 }; };
class PostComponent {
    constructor() {
        this.layout = 'classic';
        this.tagLang = 'post.component.';
        this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__.posts;
        this.comments = _data_blog_post_comments__WEBPACK_IMPORTED_MODULE_1__.postComments;
    }
    static { this.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post-details"]], inputs: { layout: "layout" }, decls: 158, vars: 64, consts: [[1, "post-header__categories"], ["routerLink", "../"], [1, "post-header__title"], [1, "post-header__meta"], [1, "post-header__meta-item"], ["href", ""], [1, "post__featured"], ["src", "assets/images/posts/post-featured.jpg", "alt", ""], [1, "post__content", "typography", 3, "ngClass"], ["href", "#"], [1, "post__footer"], [1, "post__tags-share-buttons"], [1, "post__tags", "tags"], [1, "tags__list"], ["buttons", "facebook,twitter,pinterest", 1, "post__share-buttons"], [1, "post-author"], [1, "post-author__avatar"], ["src", "assets/images/avatars/avatar-1.jpg", "alt", ""], [1, "post-author__info"], [1, "post-author__name"], [1, "post-author__about"], [1, "post__section"], [1, "post__section-title"], [1, "related-posts"], [1, "related-posts__list"], ["class", "related-posts__item post-card post-card--layout--related", 4, "ngFor", "ngForOf"], [3, "comments"], [1, "form-row"], [1, "form-group", "col-md-4"], ["for", "comment-first-name"], ["type", "text", "id", "comment-first-name", 1, "form-control", 3, "placeholder"], ["for", "comment-last-name"], ["type", "text", "id", "comment-last-name", 1, "form-control", 3, "placeholder"], ["for", "comment-email"], ["type", "email", "id", "comment-email", 1, "form-control", 3, "placeholder"], [1, "form-group"], ["for", "comment-content"], ["id", "comment-content", "rows", "6", 1, "form-control"], [1, "form-group", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg"], [1, "related-posts__item", "post-card", "post-card--layout--related"], [1, "post-card__image"], ["routerLink", "./"], ["alt", "", 3, "src"], [1, "post-card__info"], [1, "post-card__name"], [1, "post-card__date"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 0)(3, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Morbi Interdum Velit Quis Magna Placerat Lobortis Eget");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3)(9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "By ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Jessica Moore");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 4)(14, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "November 30, 2018");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 4)(17, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "4 Comments");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6)(20, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8)(23, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit quis magna placerat lobortis eget pharetra magna. Nulla tristique sollicitudin turpis, eget maximus risus faucibus non. Nulla vestibulum ipsum risus, vitae maximus nunc bibendum quis. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " raesent eu consequat nibh. Quisque ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "ullamcorper");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, ", augue eu fringilla sodales, leo metus volutpat risus, at suscipit ipsum diam eget sem. Maecenas dictum elit in enim molestie, ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "vel sollicitudin erat ultricies");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, ". Sed risus tellus, molestie finibus dui quis, suscipit consequat ex. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "blockquote")(34, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Sed a dictum elit. In iaculis porttitor luctus. Maecenas ultricies dolor et semper placerat. Proin at lectus felis. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p")(37, "cite");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "John Mcarthy");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " Vivamus in nisi at turpis rhoncus feugiat. Mauris scelerisque non ante et ultrices. Donec sit amet sem lobortis, ullamcorper felis at, finibus sem. Curabitur tincidunt neque nunc. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Nam Eget Blandit Diam");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Quisque semper magna eget libero maximus, a sollicitudin nunc hendrerit. Cras efficitur, ante vitae fringilla rutrum, mi tortor dapibus metus, in egestas metus erat sit amet orci. Ut faucibus non ante dapibus efficitur. Nam eget blandit diam, imperdiet condimentum neque. Donec risus nisi, aliquet a commodo ac, elementum vitae leo. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit quis magna placerat lobortis eget pharetra magna. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "p")(48, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Nulla fringilla:");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Donec aliquet at felis et dignissim");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "figure")(53, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Nunc viverra, dui nec commodo dignissim, libero arcu.");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, " Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet velit. Suspendisse sed velit nec ante facilisis pharetra. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " Phasellus ut elit vestibulum, dignissim mi non, suscipit ex. Praesent eu consequat nibh. Quisque ullamcorper, augue eu fringilla sodales, leo metus volutpat risus, ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "at suscipit ipsum diam eget sem");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, ". Maecenas dictum elit in enim molestie, vel sollicitudin erat ultricies. Sed risus tellus, molestie finibus dui quis, suscipit consequat ex. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Nunc Dapibus Varius Ligula");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " Maecenas ultrices arcu ut feugiat semper. Praesent dictum tincidunt justo, ac tincidunt ante fermentum at. Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet velit. Suspendisse sed velit nec ante facilisis pharetra. Duis vitae fermentum elit. Integer ac mattis elit. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " Mauris scelerisque non ante et ultrices. Donec sit amet sem lobortis: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "ol")(72, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Duis ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "finibus imperdiet ultricies");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, ". Donec vel pretium turpis. In auctor euismod posuere.");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Praesent dictum tincidunt justo, ac tincidunt ante fermentum at. Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet.");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "li")(80, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "In iaculis porttitor luctus");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, ". Maecenas ultricies dolor et semper placerat. Proin at lectus felis. Quisque dapibus auctor justo id dictum.");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, " Ut faucibus non ante dapibus efficitur. Nam eget blandit diam, imperdiet condimentum neque. Donec risus nisi, aliquet a commodo ac, elementum vitae leo. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 10)(86, "div", 11)(87, "div", 12)(88, "div", 13)(89, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](91, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](94, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](97, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](100, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "app-share-buttons", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 15)(103, "div", 16)(104, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 18)(107, "div", 19)(108, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Jessica Moore");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit mi, non tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "section", 21)(113, "h4", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](115, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 23)(117, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](118, PostComponent_div_118_Template, 10, 3, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](119, "slice");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "section", 21)(121, "h4", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](123, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](124, "app-comments-list", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "section", 21)(126, "h4", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](128, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "form")(130, "div", 27)(131, "div", 28)(132, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](134, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](135, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](136, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "div", 28)(138, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](140, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](141, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](142, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "div", 28)(144, "label", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](146, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](147, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](148, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "div", 35)(150, "label", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](152, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](153, "textarea", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "div", 38)(155, "button", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](157, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("block post post--layout--", ctx.layout, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("post__header post-header post-header--layout--", ctx.layout, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 26, ctx.tagLang + "Latest news"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](62, _c0, ctx.layout === "full"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](91, 28, ctx.tagLang + "Promotion"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](94, 30, ctx.tagLang + "Power Tool"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](97, 32, ctx.tagLang + "Wrench"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](100, 34, ctx.tagLang + "Electrodes"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](115, 36, ctx.tagLang + "Related Posts"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](119, 38, ctx.posts, 0, 2));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](123, 42, ctx.tagLang + "Comments"), " (", ctx.comments.count, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("comments", ctx.comments.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](128, 44, ctx.tagLang + "Write A Comment"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](134, 46, ctx.tagLang + "First Name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](136, 48, ctx.tagLang + "First Name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](140, 50, ctx.tagLang + "Last Name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](142, 52, ctx.tagLang + "Last Name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](146, 54, ctx.tagLang + "Email Address"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](148, 56, ctx.tagLang + "Email Address"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](152, 58, ctx.tagLang + "Comment"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](157, 60, ctx.tagLang + "Post Comment"));
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _shared_components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_2__.ShareButtonsComponent, _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_3__.CommentsListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 2384:
/*!**********************************************************************!*\
  !*** ./src/app/modules/blog/components/sidebar/sidebar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/blog-posts */ 1622);
/* harmony import */ var _data_blog_widget_latest_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../data/blog-widget-latest-comments */ 5468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/blog.service */ 4051);
/* harmony import */ var _widgets_widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../widgets/widget-aboutus/widget-aboutus.component */ 4684);
/* harmony import */ var _widgets_widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widgets/widget-categories/widget-categories.component */ 1963);
/* harmony import */ var _widgets_widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widgets/widget-comments/widget-comments.component */ 497);
/* harmony import */ var _widgets_widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../widgets/widget-newsletter/widget-newsletter.component */ 4204);
/* harmony import */ var _widgets_widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../widgets/widget-posts/widget-posts.component */ 8079);
/* harmony import */ var _widgets_widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../widgets/widget-search/widget-search.component */ 1063);
/* harmony import */ var _widgets_widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../widgets/widget-tags/widget-tags.component */ 8634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);












class SidebarComponent {
    constructor(blog) {
        this.blog = blog;
        this.position = 'start';
        this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__.posts;
        this.categories = [];
        this.latestComments = _data_blog_widget_latest_comments__WEBPACK_IMPORTED_MODULE_1__.latestComments;
    }
    ngOnInit() {
        this.blog.getCategories(null, 1).subscribe(x => this.categories = x);
    }
    static { this.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_api_blog_service__WEBPACK_IMPORTED_MODULE_2__.BlogService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { position: "position" }, decls: 17, vars: 14, consts: [[1, "block-sidebar__item"], [3, "categories"], [3, "posts"], [3, "comments"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-widget-search");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-widget-aboutus");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "app-widget-categories", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "app-widget-posts", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "slice");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-widget-newsletter");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-widget-comments", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "slice");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "app-widget-tags");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMapInterpolate1"]("block block-sidebar block-sidebar--position--", ctx.position, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("categories", ctx.categories);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("posts", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](9, 6, ctx.posts, 0, 3));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("comments", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](14, 10, ctx.latestComments, 0, 3));
        } }, dependencies: [_widgets_widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_3__.WidgetAboutusComponent, _widgets_widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_4__.WidgetCategoriesComponent, _widgets_widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_5__.WidgetCommentsComponent, _widgets_widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_6__.WidgetNewsletterComponent, _widgets_widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_7__.WidgetPostsComponent, _widgets_widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_8__.WidgetSearchComponent, _widgets_widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_9__.WidgetTagsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 8023:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/blog/pages/page-category/page-category.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageCategoryComponent": () => (/* binding */ PageCategoryComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/blog-posts */ 1622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ 3556);
/* harmony import */ var _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/post-card/post-card.component */ 1368);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ 2384);











function PageCategoryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-sidebar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PageCategoryComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-post-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("post", post_r3)("layout", ctx_r1.getPostCardLayout());
} }
function PageCategoryComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-sidebar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { label: "Home", url: "../../" }; };
const _c1 = function () { return { label: "Blog", url: "../" }; };
const _c2 = function () { return { label: "Latest News", url: "" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class PageCategoryComponent {
    constructor(route, translate) {
        this.route = route;
        this.translate = translate;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.tagLang = 'page-category.';
        this.sidebarPosition = 'end'; // For LTR scripts "start" is "left" and "end" is "right"
        this.layout = 'classic';
        this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__.posts;
        this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(data => {
            this.sidebarPosition = data['sidebarPosition'];
            this.layout = data['layout'];
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    getPostCardLayout() {
        return {
            classic: 'grid-lg',
            grid: 'grid-nl',
            list: 'list-nl'
        }[this.layout];
    }
    getLang(text) {
        return this.translate.instant(this.tagLang + text);
    }
    static { this.ɵfac = function PageCategoryComponent_Factory(t) { return new (t || PageCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PageCategoryComponent, selectors: [["app-category"]], decls: 16, vars: 19, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "header", "breadcrumbs"], [1, "container"], [1, "row"], ["class", "col-12 col-lg-4 order-1 order-lg-0", 4, "ngIf"], [1, "col-12", "col-lg-8"], [1, "block"], [1, "posts-view"], [1, "posts-list__body"], ["class", "posts-list__item", 4, "ngFor", "ngForOf"], [1, "posts-view__pagination"], [3, "current", "siblings", "total"], ["class", "col-12 col-lg-4", 4, "ngIf"], [1, "col-12", "col-lg-4", "order-1", "order-lg-0"], ["position", "start"], [1, "posts-list__item"], [3, "post", "layout"], [1, "col-12", "col-lg-4"], ["position", "end"]], template: function PageCategoryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PageCategoryComponent_div_6_Template, 2, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div")(11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PageCategoryComponent_div_12_Template, 2, 2, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-pagination", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PageCategoryComponent_div_15_Template, 2, 0, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", ctx.getLang("Latest News"))("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](15, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c2)));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sidebarPosition === "start");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("posts-view__list posts-list posts-list--layout--", ctx.layout, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.posts);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("current", 1)("siblings", 2)("total", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sidebarPosition === "end");
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent, _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__.PostCardComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"] }); }
}


/***/ }),

/***/ 8922:
/*!*********************************************************************!*\
  !*** ./src/app/modules/blog/pages/page-post/page-post.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagePostComponent": () => (/* binding */ PagePostComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/post/post.component */ 3067);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ 2384);








function PagePostComponent_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PagePostComponent_ng_container_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PagePostComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PagePostComponent_ng_container_5_div_2_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-post-details", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PagePostComponent_ng_container_5_div_5_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.sidebarPosition === "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.sidebarPosition === "end");
} }
function PagePostComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-post-details", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return { label: "Home", url: "../../" }; };
const _c1 = function () { return { label: "Blog", url: "../" }; };
const _c2 = function () { return { label: "Latest News", url: "" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class PagePostComponent {
    constructor(route) {
        this.route = route;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.sidebarPosition = 'end'; // For LTR scripts "start" is "left" and "end" is "right"
        this.layout = 'classic';
        this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
            this.sidebarPosition = data['sidebarPosition'];
            this.layout = data['layout'];
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function PagePostComponent_Factory(t) { return new (t || PagePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PagePostComponent, selectors: [["app-post"]], decls: 7, vars: 11, consts: [[1, "test-border"], [1, "test-name-Component"], [3, "breadcrumbs"], [1, "container"], [4, "ngIf"], [1, "row"], ["class", "col-12 col-lg-4 order-1 order-lg-0", 4, "ngIf"], [1, "col-12", "col-lg-8"], ["layout", "classic"], ["class", "col-12 col-lg-4", 4, "ngIf"], [1, "col-12", "col-lg-4", "order-1", "order-lg-0"], ["position", "start"], [1, "col-12", "col-lg-4"], ["position", "end"], [1, "row", "justify-content-center"], [1, "col-md-12", "col-lg-9", "col-xl-8"], ["layout", "full"]], template: function PagePostComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-page-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PagePostComponent_ng_container_5_Template, 6, 2, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PagePostComponent_ng_container_6_Template, 4, 0, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.constructor.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c2)));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.layout === "classic");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.layout === "full");
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, _components_post_post_component__WEBPACK_IMPORTED_MODULE_1__.PostComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXBvc3QuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 4051:
/*!********************************************!*\
  !*** ./src/app/shared/api/blog.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogService": () => (/* binding */ BlogService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var _fake_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../fake-server */ 4083);
/* harmony import */ var src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/fake-server/database/brands */ 2532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);





const delayTest = 0;
// const mode: string = getModeSource(); // 'demo.sourcing.pm';  // 'fake-server', 'json',  'demo.sourcing.pm'
class BlogService {
    constructor(http) {
        this.http = http;
        this.isLog = true;
    }
    /**
     * Returns a category tree.
     *
     * @param parent - If a parent is specified then its descendants will be returned.
     * @param depth  - Maximum depth of category tree.
     */
    getCategories(parent = null, depth = 0) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/blog/categories.json?parent=latest-news&depth=1
         *
         * where:
         * - parent = parent.slug
         * - depth  = depth
         */
        // const params: {[param: string]: string} = {
        //     parent: parent.slug,
        //     depth,
        // };
        //
        // return this.http.get<Category[]>('https://example.com/api/blog/categories.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        // return getBlogCategoriesTree(parent ? parent.slug : null, depth);
        switch ((0,src_fake_server_database_brands__WEBPACK_IMPORTED_MODULE_1__.getModeSource)()) {
            case 'fake-server':
                if (this.isLog) {
                    console.log('--srv -- BlogService.getCategories() fake-server parent -> %o depth ->%o', parent, depth);
                }
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_0__.getBlogCategoriesTree)(parent ? parent.slug : null, depth);
                break;
            case 'json':
                return this.http.get('assets/api/blog/categories.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(n => {
                    if (this.isLog) {
                        console.log('- srv -- BlogService.getCategories() delayTest -> %o', delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(delayTest));
                break;
            case 'demo.sourcing.pm':
                return this.http.get('assets/api/blog/categories.json')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(n => {
                    if (this.isLog) {
                        console.log('--srv -- BlogService.getCategories() delayTest -> %o', delayTest);
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(delayTest));
                break;
            default:
                return (0,_fake_server__WEBPACK_IMPORTED_MODULE_0__.getBlogCategoriesTree)(parent ? parent.slug : null, depth);
        }
    }
    static { this.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 6602:
/*!****************************************!*\
  !*** ./src/data/blog-post-comments.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postComments": () => (/* binding */ postComments)
/* harmony export */ });
const postComments = {
    count: 4,
    items: [
        {
            avatar: 'assets/images/avatars/avatar-1',
            author: 'Jessica Moore',
            date: 'November 30, 2018',
            text: 'Aliquam ullamcorper elementum sagittis. Etiam lacus lacus, mollis in mattis in, vehicula eu nulla. ' +
                'Nulla nec tellus pellentesque.',
            children: [
                {
                    avatar: 'assets/images/avatars/avatar-2',
                    author: 'Adam Taylor',
                    date: 'December 4, 2018',
                    text: 'Ut vitae finibus nisl, suscipit porttitor urna. Integer efficitur efficitur velit non pulvinar. ' +
                        'Aliquam blandit volutpat arcu vel tristique. Integer commodo ligula id augue tincidunt faucibus.'
                },
                {
                    avatar: 'assets/images/avatars/avatar-3',
                    author: 'Helena Garcia',
                    date: 'December 12, 2018',
                    text: 'Suspendisse dignissim luctus metus vitae aliquam. Vestibulum sem odio, ullamcorper a imperdiet a, ' +
                        'tincidunt sed lacus. Sed magna felis, consequat a erat ut, rutrum finibus odio.'
                }
            ]
        },
        {
            avatar: 'assets/images/avatars/avatar-4',
            author: 'Ryan Ford',
            date: 'December 5, 2018',
            text: 'Nullam at varius sapien. Sed sit amet condimentum elit.'
        }
    ]
};


/***/ }),

/***/ 5468:
/*!*************************************************!*\
  !*** ./src/data/blog-widget-latest-comments.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "latestComments": () => (/* binding */ latestComments)
/* harmony export */ });
const latestComments = [
    {
        author: 'Emma Williams',
        postTitle: 'Nullam at varius sapien sed sit amet condimentum elit',
        text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
        date: '3 minutes ago'
    },
    {
        author: 'Airic Ford',
        postTitle: 'Integer efficitur efficitur velit non pulvinar pellentesque dictum viverra',
        text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
        date: '25 minutes ago'
    },
    {
        author: 'Loyd Walker',
        postTitle: 'Curabitur quam augue vestibulum in mauris fermentum pellentesque libero',
        text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
        date: '2 hours ago'
    },
    {
        author: 'Jessica Moore',
        postTitle: 'Vestibulum leo sapien sollicitudin at magna eu interdum congue feugiat',
        text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
        date: '3 days ago'
    }
];


/***/ })

}]);
//# sourceMappingURL=src_app_modules_blog_blog_module_ts.js.map