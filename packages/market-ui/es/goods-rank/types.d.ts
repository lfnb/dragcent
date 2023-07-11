import { TGoodsDataRow, TGoodsConfig } from '../goods-list';
import { TRankDataRow, TRankConfig } from '../rank';
import { TFilterDataRow, TFilterConfig } from '../filter';
export declare type TGoodsRankConfig = {
    Rank: {
        data: Array<TRankDataRow>;
        config: TRankConfig & {
            sticky?: boolean;
        };
    };
    Filter?: {
        data: Array<TFilterDataRow>;
        config: TFilterConfig;
    };
    GoodsList: {
        config: TGoodsConfig & {
            goodsIds?: Array<string | number>;
        };
    };
};
export declare type TGoodsRankDataRow = TGoodsDataRow;
