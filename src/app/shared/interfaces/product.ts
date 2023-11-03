import { Brand } from './brand';
import { Category } from './category';
import { CustomFields } from './custom-fields';

export interface ProductFeature {
    name: string;
    value: string;
}

export interface ProductFeaturesSection {
    name: string;
    features: ProductFeature[];
}



export interface ProductAttributeValue {
    name: string;
    slug: string;
    customFields: CustomFields;
}

export interface ProductAttribute {
    name: string;
    slug: string;
    featured: boolean;
    values: ProductAttributeValue[];
    customFields: CustomFields;
}

// mak
export interface IImagePimalion {
    url: string;
    priority: number;
    label: string;
}

export interface IDocumentPimalion {
    url: string;
    priority: number;
    label: string;
}

export interface ISiteUrl {
    url: string;
    label: string;
    priority: number;
}
export interface IAttributePimalion {
    groupName: string;
    key: number;
    value: string;
}

export interface Product {
    id: string | number;    // "id" number;
    slug: string | number;  // "id"
    name: string;  // "title"

    overview?: string;  // "overview"
    description?: string; // "description"

    sku: string;  // "pimSku"
    supplierReference?: string | null; // supplierReference

    price: number;  // "price"
    compareAtPrice: number|null;  // "price" ???

    images: string[];
    urls?: ISiteUrl[];
    imagesPimalion?: IImagePimalion[];  // "images"

    badges: string[];
    rating: number;
    reviews: number;
    availability: string;

    brandName?: string | null; // "brandName": "ARNOULD",
    brand: Brand|null;

    categories: Category[];

    attributes: ProductAttribute[];
    attributesPimalion?: IAttributePimalion[];  // "attributes"
    attributesGroupName?: string[];

    documents?: IDocumentPimalion[];

    customFields: CustomFields;

    pimalionReviews?: string,   // ???

    pimalionHtml?: string   // ???

    relatedProducts?: any[];
    productVariants?: any[];
}
