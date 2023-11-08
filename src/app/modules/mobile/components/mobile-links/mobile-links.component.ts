import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MobileMenuItem } from '../../../../shared/interfaces/mobile-menu-item';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-mobile-links',
    templateUrl: './mobile-links.component.html',
    styleUrls: ['./mobile-links.component.scss']
})
export class MobileLinksComponent {
    @Input() links: MobileMenuItem[] = [];
    @Input() level = 0;

    @Output() itemClick: EventEmitter<MobileMenuItem> = new EventEmitter();

    @Input() tagLang: string = '';

    constructor(
        public currencyService: CurrencyService,
        public translate: TranslateService,
    ) { }

    onItemClick(item: MobileMenuItem): void {

        if (item.type === 'button') {
            if( item.data['currency']) {
                this.currencyService.options = {
                    code: item.data['currency'],
                    display: item.symbol,
                };
            }
            if( item.data['language']) {
                this.translate.use(item.data['language']);
            }
        }
        this.itemClick.emit(item);
    }

    getItemLabel(label: string): string {

        return this.tagLang + label;
    }

}
