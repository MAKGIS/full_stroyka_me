import { Component, Input } from '@angular/core';
import { StoreService } from '../../../../shared/services/store.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-footer-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

    @Input() tagLang: string = '';

    constructor(
        public store: StoreService,
        public translate: TranslateService
        ) { }

    getItemLabel(label: string): string {

        return this.tagLang + label;
    }

}
