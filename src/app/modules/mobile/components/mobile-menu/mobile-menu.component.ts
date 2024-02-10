import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { MobileMenuService } from '../../../../shared/services/mobile-menu.service';
import { mobileMenu } from '../../../../../data/mobile-menu';
import { MobileMenuItem } from '../../../../shared/interfaces/mobile-menu-item';
import { TranslateService } from '@ngx-translate/core';
import { ShopService } from 'src/app/shared/api/shop.service';

@Component({
    selector: 'app-mobile-menu',
    templateUrl: './mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnDestroy, OnInit {
    private destroy$: Subject<void> = new Subject();

    @Input() tagLang: string = '';

    isOpen = false;

    links: MobileMenuItem[] = mobileMenu;
    links$: Observable<MobileMenuItem[]>;

    constructor(
        public mobilemenu: MobileMenuService,
        public shopService: ShopService,
        public translate: TranslateService
        ) { }

    ngOnInit(): void {
        this.mobilemenu.isOpen$.pipe(takeUntil(this.destroy$)).subscribe(isOpen => this.isOpen = isOpen);

        this.links$ = this.shopService.getMobileMenu();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onItemClick(event: MobileMenuItem): void {
        if (event.type === 'link') {
            this.mobilemenu.close();
        }

        // if (event.data && event.data.language) {
        //     console.log(event.data.language); // change language
        // }
    }

    getItemLabel(label: string): string {

        return this.tagLang + label;
    }
}
