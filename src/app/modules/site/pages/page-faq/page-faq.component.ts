import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-faq',
    templateUrl: './page-faq.component.html',
    styleUrls: ['./page-faq.component.scss']
})
export class PageFaqComponent {

    tagLang = 'page-faq.';

    constructor(public translate: TranslateService) { }

    getLang(text: string): string {

        return this.translate.instant(this.tagLang + text);
    }
}
