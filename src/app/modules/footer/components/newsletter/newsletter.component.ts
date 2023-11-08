import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-footer-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {

    @Input() tagLang: string = '';

    constructor(
        public translate: TranslateService
    ) { }

    getItemLabel(label: string): string {

        return this.tagLang + label;
    }

}
