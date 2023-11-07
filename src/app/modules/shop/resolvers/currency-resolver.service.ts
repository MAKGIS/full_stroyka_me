import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { RootService } from '../../../shared/services/root.service';
import { ShopService } from '../../../shared/api/shop.service';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import { environment } from 'src/environments/environment';
import { CurrencyResponce, RateValue } from 'src/app/shared/interfaces/currency';

@Injectable({
    providedIn: 'root'
})
export class CurrencyResolverService implements Resolve<any> {

    isLog = false;

    constructor(
        private root: RootService,
        private router: Router,
        private shop: ShopService,
        private currencyService: CurrencyService
    ) { }

    resolve(): Observable<any> | Promise<any> | any {

        const codeBase = environment.currencyCodePrice;

        if (this.isLog) {
            console.log('- rsl -- CurrencyResolverService.resolve() codeBase -> %o', codeBase);
        }

        return this.shop.getRateValues(codeBase).pipe(
            tap((rates: RateValue) => {
                if (this.isLog) {
                  //  console.log('- srv -- CurrencyResolverService.resolve() rates -> %O', rates);
                }

                this.currencyService.rates = rates;

                if (this.isLog) {
                    console.log('- srv -- CurrencyResolverService.resolve() codeBase -> %o, -> rates -> %O', codeBase,  this.currencyService.rates);
                }
            }),
            catchError(error => {
                if (error instanceof HttpErrorResponse && error.status === 404) {
                    this.router.navigateByUrl(this.root.notFound()).then();
                }

                return EMPTY;
            })
        );
    }
}
