import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FormControl } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { CompareService } from '../../services/compare.service';
import { RootService } from '../../services/root.service';

import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
// import { LanguageService } from '../../services/language.service';


export type ProductLayout = 'standard' | 'sidebar' | 'columnar' | 'quickview';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() layout: ProductLayout = 'standard';

    @Input() product!: Product;

    tagLang = 'product.';

    isLog = true;

    quantity: FormControl = new FormControl(1);

    addingToCart = false;
    addingToWishlist = false;
    addingToCompare = false;

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private cart: CartService,
        private wishlist: WishlistService,
        private compare: CompareService,
        public root: RootService,
        public translate: TranslateService,
        // public languageService: LanguageService
    ) { }

    ngOnInit(): void {
        // this.translate.use(this.languageService.options);

        if (this.isLog){
            console.log('- cmp -- ProductComponent.ngOnInit() product -> %o ', this.product);

            // console.log('- cmp -- ProductComponent.ngOnInit() languageService -> %o ', this.languageService.options);
            console.log('- cmp -- ProductComponent.ngOnInit() translate -> %o ', this.translate);
            console.log('- cmp -- ProductComponent.ngOnInit() currentLang -> %o ', this.translate.currentLang);
            console.log('- cmp -- ProductComponent.ngOnInit() currentLoader -> %o ', this.translate.currentLoader);
        }
     }

    addToCart(): void {
        if (!this.addingToCart && this.product && this.quantity.value > 0) {
            this.addingToCart = true;

            this.cart.add(this.product, this.quantity.value).subscribe({complete: () => this.addingToCart = false});
        }
    }

    addToWishlist(): void {
        if (!this.addingToWishlist && this.product) {
            this.addingToWishlist = true;

            this.wishlist.add(this.product).subscribe({complete: () => this.addingToWishlist = false});
        }
    }

    addToCompare(): void {
        if (!this.addingToCompare && this.product) {
            this.addingToCompare = true;

            this.compare.add(this.product).subscribe({complete: () => this.addingToCompare = false});
        }
    }

}
