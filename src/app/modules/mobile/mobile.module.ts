import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from '../../shared/shared.module';

// components
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { MobileLinksComponent } from './components/mobile-links/mobile-links.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

/*  not use !!! */
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { createTranslateLoader } from 'src/app/app.module';

/*
export function createTranslateLoader3(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/shop/', '.json');
}
*/
@NgModule({
    declarations: [
        // components
        MobileHeaderComponent,
        MobileLinksComponent,
        MobileMenuComponent
    ],
    imports: [
        // modules (angular)
        CommonModule,
        RouterModule,
        // modules
        SharedModule,

        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            //isolate: true,
            //extend: true
        })
    ],
    exports: [
        // components
        MobileHeaderComponent,
        MobileMenuComponent
    ]
})
export class MobileModule { }
