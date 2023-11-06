import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from '../../shared/shared.module';

// Translate
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { createTranslateLoader } from 'src/app/app.module';

// components
import { AccountMenuComponent } from './components/account-menu/account-menu.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DropcartComponent } from './components/dropcart/dropcart.component';
import { HeaderComponent } from './header.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { LinksComponent } from './components/links/links.component';
import { MegamenuComponent } from './components/megamenu/megamenu.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavComponent } from './components/nav/nav.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
    declarations: [
        // components
        AccountMenuComponent,
        DepartmentsComponent,
        DropcartComponent,
        HeaderComponent,
        IndicatorComponent,
        LinksComponent,
        MegamenuComponent,
        MenuComponent,
        NavComponent,
        TopbarComponent,
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
            }
        })
    ],
    exports: [
        // components
        HeaderComponent,
        DropcartComponent
    ]
})
export class HeaderModule { }
