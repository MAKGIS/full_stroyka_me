// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    pimalionCloudUrl: 'https://pim.socoda.fr:4343/pimalion_socoda_staging_api', // 'http://pimsoushasvr01.dev.pimalion.cloud',
    // pimalionCloudUrl: 'https://demo.sourcing.pm/backend',
    modeApp: 'demo.sourcing.pm',  // 'fake-server'; 'json'; 'demo.sourcing.pm',
    currencyCodePrice: 'EUR', // 'USD', 'EUR', 'GBP',
    rates:  {'EUR': 1, 'USD': 1.01},
    currentLang: 'fr',
    menuFile:  'full-menu.json', // 'full-menu.json'  // 'belg-menu.json',
    mobileMenuFile:  'mobile-menu.json', // 'mobile-menu.json'  // 'mobile-belg-menu.json'
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
