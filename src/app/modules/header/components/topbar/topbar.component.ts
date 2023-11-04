import { Component } from '@angular/core';
import { CurrencyService } from '../../../../shared/services/currency.service';

import { TranslateService } from '@ngx-translate/core';
// import { LanguageService } from 'src/app/shared/services/language.service';
import { environment } from 'src/environments/environment';

interface Currency {
    name: string;
    url: string;
    code: string;
    symbol: string;
}

function compare( a, b ) {
    if ( a.key < b.key ){
      return -1;
    }
    if ( a.key > b.key ){
      return 1;
    }
    return 0;
  }

@Component({
    selector: 'app-header-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

    isLog = true;

    languages = [
        {name: 'English', image: 'language-1', key: 'en'},
        {name: 'French',  image: 'language-2', key: 'fr'},
        {name: 'German',  image: 'language-3', key: 'gr'},
        {name: 'Russian', image: 'language-4', key: 'ru'},
        {name: 'Italian', image: 'language-5', key: 'it'}
    ];

    currencies = [
        {name: '€ Euro',           url: '', code: 'EUR', symbol: '€'},
        {name: '£ Pound Sterling', url: '', code: 'GBP', symbol: '£'},
        {name: '$ US Dollar',      url: '', code: 'USD', symbol: '$'},
        {name: '₽ Russian Ruble',  url: '', code: 'RUB', symbol: '₽'}
    ];

    constructor(
        public currencyService: CurrencyService,
        public translate: TranslateService,
        // public languageService: LanguageService
    ) {
        translate.addLangs(['en', 'fr', 'gr', 'ru', 'it']);

        const currentLang = environment.currentLang;

       translate.setDefaultLang(currentLang);
       this.translate.use(currentLang);
       // this.languageService.options = currentLang;
     }

    setCurrency(currency: Currency): void {
        this.currencyService.options = {
            code: currency.code,
            display: currency.symbol,
        };
    }

    switchLang(lang: string): void {

        this.translate.use(lang);
        // this.languageService.options = lang;

        if (this.isLog) {
            console.log('- cmp -- TopbarComponent.switchLang() currentLang -> %o ', this.translate.currentLang);
        }
    }
}
