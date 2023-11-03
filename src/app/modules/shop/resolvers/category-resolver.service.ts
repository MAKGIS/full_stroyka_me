import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { RootService } from '../../../shared/services/root.service';
import { ShopService } from '../../../shared/api/shop.service';

@Injectable({
    providedIn: 'root'
})
export class CategoryResolverService implements Resolve<any> {

    isLog = true;

    constructor(
        private root: RootService,
        private router: Router,
        private shop: ShopService,
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        const categorySlug = route.params['categorySlug'] || route.data['categorySlug'] || null;

        if (this.isLog) {
            console.log('- rsl -- CategoryResolverService.resolve() route.params.categorySlug -> %o  route.data.categorySlug -> %o',
                  route.params.categorySlug, route.data.categorySlug);
        }

        if (categorySlug === null) {
            return null;
        }

        return this.shop.getCategory(categorySlug).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse && error.status === 404) {
                    this.router.navigateByUrl(this.root.notFound()).then();
                }

                return EMPTY;
            })
        );
    }
}
