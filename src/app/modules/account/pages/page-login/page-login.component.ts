import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {

    tagLang = 'page-login.';

    constructor(public translate: TranslateService) { }

    getLang(text: string): string {

        return this.translate.instant(this.tagLang + text);
    }

}
