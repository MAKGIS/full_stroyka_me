import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../../shared/services/cart.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { RootService } from '../../../../shared/services/root.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-checkout',
    templateUrl: './page-checkout.component.html',
    styleUrls: ['./page-checkout.component.scss']
})
export class PageCheckoutComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject();

    isLog = true;
    tagLang = 'page-checkout.';

    // lang_test:any ;

    constructor(
        public root: RootService,
        public cart: CartService,
        private route: ActivatedRoute,
        private router: Router,
        public translate: TranslateService,
    ) { }

    ngOnInit(): void {
        this.cart.quantity$.pipe(takeUntil(this.destroy$)).subscribe(quantity => {
            if (!quantity) {
                this.router.navigate(['../cart'], {relativeTo: this.route}).then();
            }
        });

        /*   Error
        this.lang_test = this.translate.instant(this.tagLang + 'Checkout');

        this.translate.get('page-checkout.Checkout').subscribe( x => {

            console.log("- cmp -- PageCheckoutComponent.ngOnInit() translate -> %o", x);
            this.lang_test = x;
        });
*/
    }

    getLang(text: string): string {

        return this.translate.instant(this.tagLang + text);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
