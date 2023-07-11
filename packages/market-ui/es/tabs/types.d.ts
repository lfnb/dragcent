export declare enum ETabsPosition {
    TOP = "top",
    LEFT = "left",
    BOTTOM = "bottom",
    RIGHT = "right"
}
export declare type TTabsDataRow = {
    name: '';
    icon?: '';
    params?: {
        limit?: number;
    };
};
export declare type TTabsConfig = {
    position: ETabsPosition;
    sticky: boolean;
    shrink: boolean;
    scrollspy: boolean;
};
