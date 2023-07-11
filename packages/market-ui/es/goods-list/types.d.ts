import { StyleHTMLAttributes } from 'vue';
export declare type TGoodsConfig = {
    cols: number;
    limit: number;
    style?: StyleHTMLAttributes;
    domain: string;
};
export declare type TGoodsDataRow = {
    title: string;
    img: string;
    productId: string;
    supplySid: string;
    discount: number;
    currentPrice: number;
    promotionPrice: number;
    originalPrice: number;
    picPath?: string;
};
