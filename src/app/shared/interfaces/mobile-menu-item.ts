export interface MobileMenuItemBase {
    label: string;
    data?: any;
    children?: MobileMenuItem[];
}

export interface MobileMenuItemLink extends MobileMenuItemBase {
    type: 'link';
    url: string;
}

export interface MobileMenuItemButton extends MobileMenuItemBase {
    type: 'button';
    symbol?: string;
}

export interface MobileMenuItemDivider {
    type: 'divider';
}

export type MobileMenuItem = MobileMenuItemLink | MobileMenuItemButton | MobileMenuItemDivider;
