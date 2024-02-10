import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './page-contact-us.component.html',
    styleUrls: ['./page-contact-us.component.scss']
})
export class PageContactUsComponent {

    tagLang = 'page-contact-us.';

    constructor( public translate: TranslateService) { }

    getLang(text: string): string {

        return this.translate.instant(this.tagLang + text);
    }
}
