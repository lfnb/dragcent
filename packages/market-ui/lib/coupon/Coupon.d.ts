import type { PropType, ExtractPropTypes } from 'vue';
import { TCouponDataRow, TCouponConfig } from './types';
export declare const couponProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TCouponDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TCouponConfig>;
        default: {
            cols: number;
        };
    };
};
export declare type CouponProps = ExtractPropTypes<typeof couponProps>;
export declare const Coupon: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TCouponDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TCouponConfig>;
        default: {
            cols: number;
        };
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TCouponDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TCouponConfig>;
        default: {
            cols: number;
        };
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    data: TCouponDataRow[];
    config: TCouponConfig;
}>;
