import { StyleHTMLAttributes } from 'vue';
export declare type TCouponPackDataRow = {
    img: string;
    alt?: string;
    link?: string;
    actionType?: string;
    distribution: 'normal';
    notice: string[];
    params?: {
        normalCouponIds: string[];
        oldCustomerCouponIds: string[];
        newCustomerCouponIds: string[];
    };
    received?: boolean;
};
export declare type TCouponPackConfig = {
    cols: number;
    style: StyleHTMLAttributes;
};
