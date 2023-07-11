import type { PropType, ExtractPropTypes } from 'vue';
import { TGoodsRankConfig } from './types';
export declare const goodsRankProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<import("../goods-list").TGoodsDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TGoodsRankConfig>;
        default: {
            sticky: boolean;
        };
    };
};
export declare type GoodsRankProps = ExtractPropTypes<typeof goodsRankProps>;
export declare const GoodsRank: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<import("../goods-list").TGoodsDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TGoodsRankConfig>;
        default: {
            sticky: boolean;
        };
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
        type: PropType<import("../goods-list").TGoodsDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TGoodsRankConfig>;
        default: {
            sticky: boolean;
        };
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    data: import("../goods-list").TGoodsDataRow[];
    config: TGoodsRankConfig;
    loading: boolean;
}>;
