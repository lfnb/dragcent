import type { PropType, ExtractPropTypes } from 'vue';
import { TGoodsTagConfig, TGoodsTagDataRow } from './types';
export declare const goodsTagProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<TGoodsTagDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TGoodsTagConfig>;
        default: {};
    };
};
export declare type GoodsTagProps = ExtractPropTypes<typeof goodsTagProps>;
export declare const GoodsTag: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<TGoodsTagDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TGoodsTagConfig>;
        default: {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update")[], "click" | "update", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<TGoodsTagDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TGoodsTagConfig>;
        default: {};
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    data: TGoodsTagDataRow[];
    config: TGoodsTagConfig;
    loading: boolean;
}>;
