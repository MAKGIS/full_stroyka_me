import { Component, Input } from '@angular/core';
import { Link } from '../../../../shared/interfaces/link';
import { TranslateService } from '@ngx-translate/core';

interface LinksType {
    label: string;
    url: string;
};
@Component({
    selector: 'app-footer-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent {
    @Input() header = '';
    @Input() links: Link[] = [];

    @Input() tagLang: string = '';

    constructor(
        public translate: TranslateService
    ) { }

    getItemLabel(label: string): string {

        return this.tagLang + label;
    }
}
