import type { PropType, ExtractPropTypes } from 'vue';
import { TTextAreaViewConfig, TTextAreaViewDataRow } from './types';
export declare const textAreaViewProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TTextAreaViewDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TTextAreaViewConfig>;
        default: {};
    };
};
export declare type TextAreaViewProps = ExtractPropTypes<typeof textAreaViewProps>;
export declare const TextAreaView: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TTextAreaViewDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TTextAreaViewConfig>;
        default: {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TTextAreaViewDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TTextAreaViewConfig>;
        default: {};
    };
}>>, {
    name: string;
    data: TTextAreaViewDataRow[];
    config: TTextAreaViewConfig;
}>;
