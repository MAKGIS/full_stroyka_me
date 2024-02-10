import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Category } from 'src/app/shared/interfaces/category'; // '../../../interfaces/category-pimalion';

@Component({
    selector: 'app-block-categories-grid',
    templateUrl: './block-categories-grid.component.html',
    styleUrls: ['./block-categories-grid.component.scss']
})
export class BlockCategoriesGridComponent {
    @Input() header = '';
    @Input() layout: 'classic'|'compact' = 'classic';

    @Input() categories: Category[] = [];

    isLog = true;

    tagLang = 'block-categories-grid.';

    constructor(
        public translate: TranslateService
    ) { }

    ngOnInit(): void {

        if (this.isLog) {
            console.log('- cmp -- BlockCategoriesGridComponent.ngOnInit() categories -> %o', this.categories);
        }
     }
}
