
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Observable, Subject, merge } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { ShopService } from 'src/app/shared/api/shop.service';

@Component({
    selector: 'app-page-brands',
    templateUrl: './page-brands.component.html',
    styleUrls: ['./page-brands.component.scss']
})
export class PageBrandsComponent implements OnInit, OnDestroy {

    destroy$: Subject<void> = new Subject<void>();

    brands$: Observable<any[]>;

    tagLang = 'page-brands.';

    constructor(
        private shopService: ShopService,
        public translate: TranslateService
    ) { }

    ngOnInit(): void {

        this.brands$ = this.shopService.getPopularBrands();
    }

    getLang(text: string): string {

        return this.translate.instant(this.tagLang + text);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
