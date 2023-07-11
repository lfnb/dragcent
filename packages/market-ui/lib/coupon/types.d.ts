import { StyleHTMLAttributes } from 'vue';
export declare type TCouponDataRow = {
    img: string;
    alt?: string;
    link?: string;
    actionType?: string;
    params?: {
        couponId?: string;
    };
    received?: boolean;
};
export declare type TCouponConfig = {
    cols: number;
    style: StyleHTMLAttributes;
};
