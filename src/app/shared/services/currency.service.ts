import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CurrencyFormatOptions } from '../interfaces/currency-format-options';
import { environment } from 'src/environments/environment';

interface CurrencyServiceData {
    options: CurrencyFormatOptions;
}

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    private data: CurrencyServiceData = {
        options: {}
    };

    isLog = true;

    private changesSubject$: Subject<CurrencyFormatOptions> = new Subject();

    changes$: Observable<CurrencyFormatOptions> = this.changesSubject$.asObservable();

    public rates: any = environment.rates; // {'EUR': 1, 'USD': 1.05};

    get options(): CurrencyFormatOptions {
        return this.data.options;
    }
    set options(value: CurrencyFormatOptions) {

        this.data.options = value;

        if (this.isLog) {
            console.log('- srv -- CurrencyService.set options   options -> %o rate -> %o', this.data.options, this.rate);
        }

        this.changesSubject$.next(value);
    }

    get rate(): number {

        const code = this.data.options.code;

        let rate: number = 1;
        if (code in this.rates) {
             rate = this.rates[code];
        }

        return rate;
    }

    constructor() { }
}
