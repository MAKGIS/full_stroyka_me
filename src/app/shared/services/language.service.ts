import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlockSlide } from '../interfaces/block-header-group';
import { ShopService } from '../api/shop.service';
import { take, takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    name_: string = '';

    isLog = true;

    private changesSubject$: Subject<string> = new Subject();
    changes$: Observable<string> = this.changesSubject$.asObservable();

    // slides: BlockSlide[] = [];
    private changesBlockSlides$: BehaviorSubject<BlockSlide[]> = new BehaviorSubject([]);
    public blockSlides$ = this.changesBlockSlides$.asObservable();

    get options(): string {
        return this.name_;
    }
    set options(value: string) {

        this.name_ = value;

        if (this.isLog) {
            console.log('- srv -- LanguageService.set options()   options -> %o', this.name_);
        }

        this.changesSubject$.next(value);

       this.shopService.getBlockSlides(value).pipe(take(1))
       .subscribe(data => { this.changesBlockSlides$.next(data); });
    }

    constructor(
        private shopService: ShopService,
    ) { }
}
