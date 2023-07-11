import type { PropType, ExtractPropTypes } from 'vue';
import { TBannerConfig, TBannerDataRow } from './types';
export declare const bannerProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TBannerDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TBannerConfig>;
        default: {
            cols: number;
        };
    };
};
export declare type BannerProps = ExtractPropTypes<typeof bannerProps>;
export declare const Banner: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TBannerDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TBannerConfig>;
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
        type: PropType<TBannerDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TBannerConfig>;
        default: {
            cols: number;
        };
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    data: TBannerDataRow[];
    config: TBannerConfig;
}>;
