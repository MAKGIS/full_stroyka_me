
import { Component, OnDestroy, OnInit } from '@angular/core';


import { Observable, Subject, merge } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { ShopService } from 'src/app/shared/api/shop.service';
import { Category } from 'src/app/shared/interfaces/category';

import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-page-categories',
    templateUrl: './page-categories.component.html',
    styleUrls: ['./page-categories.component.scss']
})
export class PageCategoriesComponent implements OnInit, OnDestroy {

    destroy$: Subject<void> = new Subject<void>();

    categories$: Observable<Category[]>;

    tagLang = 'page-categories.';

    constructor(
        private shopService: ShopService,
        public translate: TranslateService
    ) { }

    ngOnInit(): void {

        this.categories$ =  this.shopService.getCategoriesList();
    }

    getLang(text: string): string {

        return this.translate.instant(this.tagLang + text);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
