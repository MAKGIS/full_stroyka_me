import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlockSlide } from '../interfaces/block-header-group';
import { ShopService } from '../api/shop.service';
import { takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LanguageChangedService {

    private blockSlides: BlockSlide[] = [];

    isLog = true;

    // slides: BlockSlide[] = [];
    private changesBlockSlides$: BehaviorSubject<BlockSlide[]> = new BehaviorSubject([]);
    public blockSlides$ = this.changesBlockSlides$.asObservable();
/*
    get optionsBlockSlides(): BlockSlide[] {
        return this.blockSlides;
    }
    */
    set optionsBlockSlides(value: BlockSlide[]) {

        this.blockSlides = value;

        if (this.isLog) {
            console.log('- srv -- LanguageChangedService.set options()   options -> %o', this.blockSlides);
        }

        this.changesBlockSlides$.next(value);
    }

    constructor( ) { }
}
