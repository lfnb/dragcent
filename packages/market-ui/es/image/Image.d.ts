import type { PropType, ExtractPropTypes } from 'vue';
import { TImageDataRow, TImageConfig } from './types';
export declare const imageProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TImageDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TImageConfig>;
        default: {
            cols: number;
        };
    };
};
export declare type ImageProps = ExtractPropTypes<typeof imageProps>;
export declare const Image: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TImageDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TImageConfig>;
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
        type: PropType<TImageDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TImageConfig>;
        default: {
            cols: number;
        };
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    data: TImageDataRow[];
    config: TImageConfig;
}>;
