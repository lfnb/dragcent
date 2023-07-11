import type { PropType, ExtractPropTypes } from 'vue';
import { TRankDataRow, TRankConfig } from './types';
export declare const rankProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TRankDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TRankConfig>;
        default: {};
    };
};
export declare type RankProps = ExtractPropTypes<typeof rankProps>;
export declare const Rank: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TRankDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TRankConfig>;
        default: {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TRankDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TRankConfig>;
        default: {};
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    data: TRankDataRow[];
    config: TRankConfig;
}>;
