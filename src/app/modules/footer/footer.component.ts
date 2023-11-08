import { Component, Input } from '@angular/core';
import { theme } from '../../../data/theme';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    theme = theme;

    informationLinks = [
        {label: 'About Us',             url: '/site/about-us'},
        {label: 'Delivery Information', url: '/site/terms'},
        {label: 'Privacy Policy',       url: '/site/terms'},
        {label: 'Brands',               url: ''},
        {label: 'Contact Us',           url: '/site/contact-us'},
        {label: 'Returns',              url: ''},
        {label: 'Site Map',             url: ''}
    ];

    myAccountLinks = [
        {label: 'Store Location', url: ''},
        {label: 'Order History',  url: ''},
        {label: 'Wish List',      url: '/shop/wishlist'},
        {label: 'Newsletter',     url: ''},
        {label: 'Specials',       url: ''},
        {label: 'Gift Cards',     url: ''},
        {label: 'Affiliate',      url: ''}
    ]

    constructor() { }
}
