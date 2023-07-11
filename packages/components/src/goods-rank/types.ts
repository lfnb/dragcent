/*
 * @Author: liyafei
 * @Date: 2023-02-02 18:22:34
 * @Description: 
 */
import { TGoodsDataRow, TGoodsConfig } from '../goods-list';
import { TRankDataRow, TRankConfig } from '../rank';
import { TFilterDataRow, TFilterConfig } from '../filter';



export type TGoodsRankConfig = {
  Rank: {
    data: Array<TRankDataRow>,
    config: TRankConfig & { sticky?: boolean }
  },
  Filter?: {
    data: Array<TFilterDataRow>,
    config: TFilterConfig
  },
  GoodsList: {
    config: TGoodsConfig & { goodsIds?: Array<string | number> }
  }
}

export type TGoodsRankDataRow = TGoodsDataRow