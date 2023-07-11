import type { PropType, ExtractPropTypes } from 'vue';
import { TCouponPackDataRow, TCouponPackConfig } from './types';
export declare const couponPackProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TCouponPackDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TCouponPackConfig>;
        default: {
            cols: number;
        };
    };
};
export declare type CouponPackProps = ExtractPropTypes<typeof couponPackProps>;
export declare const CouponPack: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TCouponPackDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TCouponPackConfig>;
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
        type: PropType<TCouponPackDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TCouponPackConfig>;
        default: {
            cols: number;
        };
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    data: TCouponPackDataRow[];
    config: TCouponPackConfig;
}>;
