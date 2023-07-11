import { StyleHTMLAttributes } from 'vue';
export declare type TImageDataRow = {
    img: string;
    alt?: string;
    link?: string;
    actionType?: string;
    params?: object;
};
export declare type TImageConfig = {
    cols: number;
    style?: StyleHTMLAttributes;
};
