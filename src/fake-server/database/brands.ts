import { BrandDef } from '../interfaces/brand-def';
import { Brand } from '../../app/shared/interfaces/brand';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

let lastBrandId = 0;

var brandsDef: BrandDef[] = [
    {name: 'Brandix', slug: 'brandix', image: 'assets/images/logos/logo-1.png'},
    {name: 'Wakita', slug: 'wakita', image: 'assets/images/logos/logo-2.png'},
    {name: 'Zosch', slug: 'zosch', image: 'assets/images/logos/logo-3.png'},
    {name: 'WeVALT', slug: 'wevalt', image: 'assets/images/logos/logo-4.png'},
    {name: 'Hammer', slug: 'hammer', image: 'assets/images/logos/logo-5.png'},
    {name: 'Mitasia', slug: 'mitasia', image: 'assets/images/logos/logo-6.png'},
    {name: 'Metaggo', slug: 'metaggo', image: 'assets/images/logos/logo-7.png'},
];

export const brands: Brand[] = brandsDef.map(brandDef => {
    return {
        ...brandDef,
        id: ++lastBrandId + '',
    };
});

export function getBrands(): Observable<Brand[]> {
    return of(brands);
}

// mak
// 'fake-server'; 'json'; 'demo.sourcing.pm';
const modeSource: string =  environment.modeApp; //  'fake-server'; // 'demo.sourcing.pm';

export function getModeSource(): string {

    // const mode = 'fake-server'; //
    // const mode = 'json';
    // 'demo.sourcing.pm';
    const mode = modeSource;
    // console.log('- fn -- getModeSource() mode -> %o', mode);
    return mode;
}

var  categoriesName: string[] = [];

export function getCategoriesName(): string[] {

    switch(getModeSource()) {

        case 'demo.sourcing.pm':

            categoriesName =  [ 'Sanitaire*', 'ElectricitГ©*', 'Outillage*', 'Chauffage*', 'Test*' ];
           break;

        default: // 'fake-server'; 'json':

        categoriesName =  [ 'Power Tools', 'Hand Tools', 'Plumbing', 'Machine Tools', 'Power Machinery', 'Measurement', 'Clothes and Ppe'];
    }

    return categoriesName;
}

var  categoriesSlug: string[] = [];

export function getCategoriesSlug(): string[] {

    switch(getModeSource()) {

        case 'demo.sourcing.pm':

            categoriesSlug =  [ 'Sanitaire', 'ElectricitГ©', 'Outillage', 'Chauffage', "Test" ];
           break;

        default: // 'fake-server'; 'json':
        categoriesSlug =  [ 'power-tools', 'hand-tools', 'machine-tools', 'power-machinery', 'measurement', 'clothes-and-ppe'];
    }

    return categoriesSlug;
}


export function getRootCategorySlug(): string {

    return getCategoriesSlug()[0];
}

export function getProductStandard(): string {

     let product = '';
    switch(getModeSource()) {

        case 'demo.sourcing.pm':

            product =   '2eFgJWgBenVimcVmajlf'; // '2eFgJWgBenVimcVmXyoT';
           break;

        default: // 'fake-server'; 'json':
            product =  'brandix-screwdriver-screw1500acc';
    }

    return product;
}
