import type { PropType, ExtractPropTypes } from 'vue';
import { TTabsDataRow, TTabsConfig, ETabsPosition } from './types';
export declare const tabsProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TTabsDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TTabsConfig>;
        default: {
            position: ETabsPosition;
            sticky: boolean;
            shrink: boolean;
            scrollspy: boolean;
        };
    };
};
export declare type TabsProps = ExtractPropTypes<typeof tabsProps>;
export declare const Tabs: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TTabsDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TTabsConfig>;
        default: {
            position: ETabsPosition;
            sticky: boolean;
            shrink: boolean;
            scrollspy: boolean;
        };
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "tabClick"[], "tabClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<TTabsDataRow[]>;
        default: never[];
    };
    config: {
        type: PropType<TTabsConfig>;
        default: {
            position: ETabsPosition;
            sticky: boolean;
            shrink: boolean;
            scrollspy: boolean;
        };
    };
}>> & {
    onTabClick?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    data: TTabsDataRow[];
    config: TTabsConfig;
}>;
