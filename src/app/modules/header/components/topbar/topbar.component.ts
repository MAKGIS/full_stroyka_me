import { Component } from '@angular/core';
import { CurrencyService } from '../../../../shared/services/currency.service';

import { TranslateService } from '@ngx-translate/core';
// import { LanguageService } from 'src/app/shared/services/language.service';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

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

   // lang = 'fr';

    languages: LanguageType[] = [
        {name: 'English', image: 'language-1', key: 'en'},
        {name: 'French',  image: 'language-2', key: 'fr'},
        {name: 'Russian', image: 'language-3', key: 'ru'}//,
        // {name: 'German',  image: 'language-4', key: 'gr'},
        // {name: 'Italian', image: 'language-5', key: 'it'}
    ];

    currencies = [
        {name: '€ Euro',           url: '', code: 'EUR', symbol: '€'},
        {name: '£ Pound Sterling', url: '', code: 'GBP', symbol: '£'},
        {name: '$ US Dollar',      url: '', code: 'USD', symbol: '$'},
        {name: '₽ Russian Ruble',  url: '', code: 'RUB', symbol: '₽'}
    ];

    url: string[] = [
         '/account/dashboard', '/account/profile', '/account/orders',
         '/account/addresses', '/account/password','/account/login'
         ];
    myAccount_en: MyAccountType[] = [
        {label: 'Dashboard',    url: this.url[0]},
        {label: 'Edit Profile', url: this.url[1]},
        {label: 'Order History',url: this.url[2]},
        {label: 'Addresses',    url: this.url[3]},
        {label: 'Password',     url: this.url[4]},
        {label: 'Logout',       url: this.url[5]}
    ];
    myAccount_fr: MyAccountType[] = [
        {label: 'Tableau de bord',          url: this.url[0]},
        {label: 'Modifier le profil',       url: this.url[1]},
        {label: 'Historique des commandes', url: this.url[2]},
        {label: 'Adresses',                 url: this.url[3]},
        {label: 'Mot de passe',             url: this.url[4]},
        {label: 'Déconnexion',              url: this.url[5]}
    ];
    myAccount_ru: MyAccountType[] = [
        {label: 'Панель управления',        url: this.url[0]},
        {label: 'Редактировать профиль',    url: this.url[1]},
        {label: 'История заказов',          url: this.url[2]},
        {label: 'Адреса',                   url: this.url[3]},
        {label: 'Пароль',                   url: this.url[4]},
        {label: 'Выход',                    url: this.url[5]}
    ];

    constructor(
        public currencyService: CurrencyService,
        public translate: TranslateService,
        // public languageService: LanguageService
    ) {
        translate.addLangs(this.languages.map(item => item.key));

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

    getMyAccount(): MyAccountType[] {

        switch(this.translate.currentLang)
        {
            case 'fr': return this.myAccount_fr;
            case 'ru': return this.myAccount_ru;
            default: return this.myAccount_en;
        }
/*
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
       */
    }
}
