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

interface LanguageType {
    name: string;
    image: string;
    key: string;
}
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


    myAccount = [
        {label: 'Dashboard # Tableau de bord # Панель управления',
        url: '/account/dashboard'},
        {label: 'Edit Profile # Modifier le profil # Редактировать профиль',
        url: '/account/profile'},
        {label: 'Order History # Historique des commandes # История заказов',
         url: '/account/orders'},
        {label: 'Addresses # Adresses # Адреса',
        url: '/account/addresses'},
        {label: 'Password # Mot de passe # Пароль',
        url: '/account/password'},
        {label: 'Logout # Déconnexion # Выход',
        url: '/account/login'}
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

    getMyAccount(): any[] {

      const lang = this.translate.currentLang;
      const langIndex =  getLangIndex(this.languages, lang);

      let myAccountV = this.myAccount.map(a => {return {...a}});

      myAccountV =  myAccountV.map(item => {

            return {
            label:  getLangLabel(item.label, langIndex), url: item.url }
        })

       if (this.isLog) {
       // console.log('- cmp -- TopbarksComponent.getMyAccount() myAccountV -> %o ', myAccountV);
       }

       return myAccountV;
    }
}
