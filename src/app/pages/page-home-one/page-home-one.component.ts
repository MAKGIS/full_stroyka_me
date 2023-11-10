import { Component, OnDestroy, OnInit } from '@angular/core';
import { posts } from '../../../data/blog-posts';
import { Brand } from '../../shared/interfaces/brand';
import { Observable, Subject, merge } from 'rxjs';
import { ShopService } from 'src/app/shared/api/shop.service';
import { Product } from '../../shared/interfaces/product';
import { Category } from '../../shared/interfaces/category';
import { BlockHeaderGroup, BlockSlide } from '../../shared/interfaces/block-header-group';
import { takeUntil, tap } from 'rxjs/operators';

import { getCategoriesName, getCategoriesSlug, getModeSource } from 'src/fake-server/database/brands';
import { CategoriesService } from 'src/app/shared/api/categories.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import { LanguageChangedService } from 'src/app/shared/services/language-changed.service';

// const mode: string = getModeSource();


interface ProductsCarouselGroup extends BlockHeaderGroup {
    products$: Observable<Product[]>;
}

interface ProductsCarouselData {
    abort$: Subject<void>;
    loading: boolean;
    products: Product[];
    groups: ProductsCarouselGroup[];
}

@Component({
    selector: 'app-home',
    templateUrl: './page-home-one.component.html',
    styleUrls: ['./page-home-one.component.scss']
})
export class PageHomeOneComponent implements OnInit, OnDestroy {
    destroy$: Subject<void> = new Subject<void>();
    bestsellers$!: Observable<Product[]>;
    brands$!: Observable<Brand[]>;
    popularCategories$!: Observable<Category[]>;

    columnTopRated$!: Observable<Product[]>;
    columnSpecialOffers$!: Observable<Product[]>;
    columnBestsellers$!: Observable<Product[]>;

    posts = posts;

    featuredProducts!: ProductsCarouselData;
    latestProducts!: ProductsCarouselData;

    isLog = true;

    constructor(
        private shop: ShopService,
        public translate: TranslateService,
        private categoriesService: CategoriesService,
        public languageService: LanguageService
    ) { }

    ngOnInit(): void {

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

        switch(getModeSource()) {

            case 'demo.sourcing.pm':

                this.popularCategories$ = this.shop.getCategoriesBySlug(this.categoriesService, categoriesSlug, 1);
               break;

            default: // 'fake-server'; 'json':
                this.popularCategories$ = this.shop.getCategoriesBySlug(this.categoriesService, getCategoriesSlug(), 1);
        }

        this.columnTopRated$ = this.shop.getTopRated(3);
        this.columnSpecialOffers$ = this.shop.getSpecialOffers(3);
        this.columnBestsellers$ = this.shop.getBestsellers(3);



        this.featuredProducts = {
            abort$: new Subject<void>(),
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
                    products$: this.shop.getFeaturedProducts(null, 8),
                },
                {
                    name: categories[0].name,  // getCategoriesName()[0],
                    current: false,
                    // products$: this.shop.getFeaturedProducts(getCategoriesSlug()[0], 8),
                    products$: this.shop.getFeaturedProducts(categories[0].slug, 8),
                },
                {
                    name: categories[1].name, // getCategoriesName()[1],
                    current: false,
                    // products$: this.shop.getFeaturedProducts(getCategoriesSlug()[1], 8),
                    products$: this.shop.getFeaturedProducts(categories[1].slug, 8),
                },
                {
                    name: categories[2].name, // getCategoriesName()[2],
                    current: false,
                    // products$: this.shop.getFeaturedProducts(getCategoriesSlug()[2], 8),
                    products$: this.shop.getFeaturedProducts(categories[2].slug, 8),
                },
            ],
        };

        if (this.isLog) {
            console.log('- cmp -- PageHomeOneComponent.ngOnInit() this.featuredProducts -> %o', this.featuredProducts);
        }
        this.groupChange(this.featuredProducts, this.featuredProducts.groups[0]);

        this.latestProducts = {
            abort$: new Subject<void>(),
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
                    products$: this.shop.getLatestProducts(null, 8),
                },
                {
                    name: categories[0].name, // getCategoriesName()[0],
                    current: false,
                    // products$: this.shop.getLatestProducts(getCategoriesSlug()[0], 8),
                    products$: this.shop.getLatestProducts(categories[0].slug, 8),
                },
                {
                    name: categories[1].name, // getCategoriesName()[1],
                    current: false,
                    // products$: this.shop.getLatestProducts(getCategoriesSlug()[1], 8),
                    products$: this.shop.getLatestProducts(categories[1].slug, 8),
                },
                {
                    name: categories[2].name, // getCategoriesName()[2],
                    current: false,
                    // products$: this.shop.getLatestProducts(getCategoriesSlug()[2], 8),
                    products$: this.shop.getLatestProducts(categories[2].slug, 8),
                },
            ],
        };
        this.groupChange(this.latestProducts, this.latestProducts.groups[0]);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    groupChange(carousel: ProductsCarouselData, group: BlockHeaderGroup): void {
        carousel.loading = true;
        carousel.abort$.next();

        (group as ProductsCarouselGroup).products$.pipe(
            tap(() => carousel.loading = false),
            takeUntil(merge(this.destroy$, carousel.abort$)),
        ).subscribe(x => carousel.products = x);
    }
}
