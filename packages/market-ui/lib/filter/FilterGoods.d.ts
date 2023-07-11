import { PropType, ExtractPropTypes } from 'vue';
import { TFilterDataRow, TFilterConfig } from './types';
export declare const filterProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TFilterDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TFilterConfig>;
        default: {};
    };
};
export declare type FilterProps = ExtractPropTypes<typeof filterProps>;
export declare const FilterGoods: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TFilterDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TFilterConfig>;
        default: {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "confirm"[], "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TFilterDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TFilterConfig>;
        default: {};
    };
}>> & {
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    data: TFilterDataRow[];
    config: TFilterConfig;
}>;
