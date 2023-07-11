import { TFilterConfig, TFilterDataRow } from '../filter';
export declare enum EOrderBy {
    DESC = "desc",
    ASC = "asc"
}
export declare type TRankDataRow = {
    name: string;
    code: string;
    list?: Array<any>;
    params: {
        orderField?: string;
        orderBy?: EOrderBy;
        show?: boolean;
    };
};
export declare type TRankConfig = {
    filter?: {
        data: TFilterDataRow[];
        config: TFilterConfig;
    };
};
