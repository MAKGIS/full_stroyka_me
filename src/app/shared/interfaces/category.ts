import { CustomFields } from './custom-fields';

export interface Category {
    id: string;  // number;  // ???
    type: 'shop'|'blog';
    name: string;
    slug: string;
    path: string;
    image: string|null;
    items: number;
    customFields: CustomFields;
    parents?: Category[]|null;
    children?: Category[]|null;
}


export interface CategoryPimalion {
    filterKey: string,
    filterValue: string,
    filterCount: number
}
