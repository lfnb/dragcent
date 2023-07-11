import { StyleHTMLAttributes } from 'vue';
export declare type TBannerConfig = {
    width: number | string;
    height: number | string;
    'show-indicators': boolean;
    style?: StyleHTMLAttributes;
};
export declare type TBannerDataRow = {
    img: string;
    alt: string;
    link?: string;
    actionType?: string;
    params?: object;
};
