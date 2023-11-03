import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CurrencyService } from '../services/currency.service';

@Pipe({
    name: 'currencyFormat',
    pure: false
})
export class CurrencyFormatPipe implements PipeTransform {
    currencyPipe: CurrencyPipe = new CurrencyPipe(this.locale);

    isLog = true;

    constructor(
        @Inject(LOCALE_ID) private locale: string,
        private service: CurrencyService
    ) { }

    transform(
        value: any,
        currencyCode?: string,
        display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
        digitsInfo?: string,
        locale?: string
    ): string | null {
        currencyCode = currencyCode || this.service.options.code;
        display = display || this.service.options.display;
        digitsInfo = digitsInfo || this.service.options.digitsInfo;
        locale = locale || this.service.options.locale;

        value = value * this.service.rate;

        if (this.isLog) {
            console.log('- pipe -- CurrencyFormatPipe options -> %o ', this.service.options);
            console.log('- pipe -- CurrencyFormatPipe value -> %o, currencyCode -> %o rate -> %o', value, currencyCode, this.service.rate);
        }

        return this.currencyPipe.transform(value, currencyCode, display, digitsInfo, locale);
    }
}
