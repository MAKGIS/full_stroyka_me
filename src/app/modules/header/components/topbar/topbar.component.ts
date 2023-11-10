import { Component } from '@angular/core';
import { CurrencyService } from '../../../../shared/services/currency.service';

import { TranslateService } from '@ngx-translate/core';
// import { LanguageService } from 'src/app/shared/services/language.service';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
import { ShopService } from 'src/app/shared/api/shop.service';
import { take } from 'rxjs/operators';

interface Currency {
    name: string;
    url: string;
    code: string;
    symbol: string;
};

interface LanguageType {
    name: string;
    image: string;
    key: string;
};

interface MyAccountType {
    label: string;
    url: string;
};
/*
export const langSpliter = '#';

export function getLangLabel(label: string, langIndex: number): string {

    const langWords = label.split(langSpliter);

    //console.log('- cmp -- TopbarComponent.getLangLabel() langIndex -> %o langWords -> %o ', langIndex, langWords);

    let word = langWords[0].trim();

    if ( langIndex < langWords.length) {
        if (langWords[langIndex].trim() != '') {
            word = langWords[langIndex].trim();
        }
    }

    return word;
}

export function getLangIndex(languages:LanguageType[], lang: string ): number {

    const index = languages.findIndex(object => {
        return object.key === lang;
      });

    return index;
}
*/
@Component({
    selector: 'app-header-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

    isLog = true;

    tagLang = 'topbar.';

    languages: LanguageType[] = [
        {name: 'English', image: 'language-1', key: 'en'},
        {name: 'French',  image: 'language-2', key: 'fr'},
        {name: 'Russian', image: 'language-3', key: 'ru'}//,
        // {name: 'German',  image: 'language-4', key: 'de'},
        // {name: 'Italian', image: 'language-5', key: 'it'}
    ];

    currencies = [
        {name: '€ Euro',           url: '', code: 'EUR', symbol: '€'},
        {name: '£ Pound Sterling', url: '', code: 'GBP', symbol: '£'},
        {name: '$ US Dollar',      url: '', code: 'USD', symbol: '$'},
        {name: '₽ Russian Ruble',  url: '', code: 'RUB', symbol: '₽'}
    ];

    myAccount: MyAccountType[] = [
        {label: 'Dashboard',    url: '/account/dashboard'},
        {label: 'Edit Profile', url: '/account/profile'},
        {label: 'Order History',url: '/account/orders'},
        {label: 'Addresses',    url: '/account/addresses'},
        {label: 'Password',     url: '/account/password'},
        {label: 'Logout',       url: '/account/login'}
    ];

    constructor(
        public currencyService: CurrencyService,
        public translate: TranslateService,
        public languageService: LanguageService,
        public shopService: ShopService
    ) {
        translate.addLangs(this.languages.map(item => item.key));

        const currentLang = environment.currentLang;

       translate.setDefaultLang(currentLang);
       this.translate.use(currentLang);
       this.languageService.options = currentLang;
     }

    setCurrency(currency: Currency): void {
        this.currencyService.options = {
            code: currency.code,
            display: currency.symbol,
        };
    }

    switchLang(lang: string): void {

        this.translate.use(lang);
        this.languageService.options = lang;

        // ???
        this.shopService.getBlockSlides(lang).pipe(take(1)).subscribe();

        if (this.isLog) {
            console.log('- cmp -- TopbarComponent.switchLang() currentLang -> %o ', this.translate.currentLang);
        }
    }
/*
    getMyAccount(): MyAccountType[] {

      const lang = this.translate.currentLang;
      const langIndex =  getLangIndex(this.languages, lang);

      this.myAccountV = JSON.parse(JSON.stringify(this.myAccount));
      //this.myAccount.map(a => {return {...a}});

      this.myAccountV =  this.myAccountV.map(item => {

            return {
               label:  getLangLabel(item.label, langIndex), url: item.url }
           /// label:  item.label, url: item.url }
        })

       return this.myAccountV;
    }
 */
}
