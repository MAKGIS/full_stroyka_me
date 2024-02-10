import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-page-contact-us-alt',
    templateUrl: './page-contact-us-alt.component.html',
    styleUrls: ['./page-contact-us-alt.component.scss']
})
export class PageContactUsAltComponent {

    tagLang = 'page-contact-us.';

    constructor( public translate: TranslateService) { }

    getLang(text: string): string {

        return this.translate.instant(this.tagLang + text);
    }
}
