import type { PropType, ExtractPropTypes } from 'vue';
import type { TGoodsDataRow, TGoodsConfig } from './types';
export declare const goodsListProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<TGoodsDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TGoodsConfig>;
        default: {
            cols: number;
            limit: number;
        };
    };
};
export declare type GoodsListProps = ExtractPropTypes<typeof goodsListProps>;
export declare const GoodsList: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<TGoodsDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TGoodsConfig>;
        default: {
            cols: number;
            limit: number;
        };
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<TGoodsDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TGoodsConfig>;
        default: {
            cols: number;
            limit: number;
        };
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    data: TGoodsDataRow[];
    config: TGoodsConfig;
    loading: boolean;
}>;
