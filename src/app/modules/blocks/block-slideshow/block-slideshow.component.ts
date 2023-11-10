import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DirectionService } from '../../../shared/services/direction.service';
import { ShopService } from 'src/app/shared/api/shop.service';
import { BlockSlide } from 'src/app/shared/interfaces/block-header-group';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-block-slideshow',
    templateUrl: './block-slideshow.component.html',
    styleUrls: ['./block-slideshow.component.scss']
})
export class BlockSlideshowComponent {
    @Input() withDepartments = false;

     @Input() slides: BlockSlide[] = [];

    tagLang = 'block-slideshow.';

    options = {
        nav: false,
        dots: true,
        loop: true,
        responsive: {
            0: {items: 1}
        },
        rtl: this.direction.isRTL()
    };
/*  see assets/i18n/data/blockslides_en.json ...
    slides_ = [
        {
            title: 'Big choice of<br>Plumbing products',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
            image_classic: 'assets/images/slides/slide-1.jpg',
            image_full: 'assets/images/slides/slide-1-full.jpg',
            image_mobile: 'assets/images/slides/slide-1-mobile.jpg'
        },
        {
            title: 'Screwdrivers<br>Professional Tools',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
            image_classic: 'assets/images/slides/slide-2.jpg',
            image_full: 'assets/images/slides/slide-2-full.jpg',
            image_mobile: 'assets/images/slides/slide-2-mobile.jpg'
        },
        {
            title: 'One more<br>Unique header',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
            image_classic: 'assets/images/slides/slide-3.jpg',
            image_full: 'assets/images/slides/slide-3-full.jpg',
            image_mobile: 'assets/images/slides/slide-3-mobile.jpg'
        }
    ];
*/
    constructor(
        public sanitizer: DomSanitizer,
        private direction: DirectionService,
        public translate: TranslateService
    ) { }

}
