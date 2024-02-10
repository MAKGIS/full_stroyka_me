import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Brand } from 'src/app/shared/interfaces/brand'; // '../../../interfaces/brand_';

@Component({
    selector: 'app-block-brands-grid',
    templateUrl: './block-brands-grid.component.html',
    styleUrls: ['./block-brands-grid.component.scss']
})
export class BlockBrandsGridComponent  implements OnInit {
    @Input() header = '';
    @Input() layout: 'classic'|'compact' = 'classic';

    @Input() brands: Brand[] = []; // Category[] = [];

    isLog = true;

    tagLang = 'block-brands-grid.';

    constructor(
        public translate: TranslateService
    ) {}

    ngOnInit(): void {

        if (this.isLog) {
            console.log('- cmp -- BlockBrandsGridComponent.ngOnInit() brands -> %o', this.brands);
        }
     }
}
