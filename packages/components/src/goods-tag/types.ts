/*
 * @Author: liyafei
 * @Date: 2023-02-02 18:22:34
 * @Description: 
 */
import { TTabsDataRow, TTabsConfig } from '../tabs';
import { TGoodsDataRow, TGoodsConfig } from '../goods-list';
import { TRankDataRow, TRankConfig } from '../rank';
import { TFilterDataRow, TFilterConfig } from '../filter';



export type TGoodsTagConfig = {
  Tabs: {
    data: Array<TTabsDataRow>,
    config: TTabsConfig
  },
  Rank?: {
    data: Array<TRankDataRow>,
    config: TRankConfig
  },
  Filter?: {
    data: Array<TFilterDataRow>,
    config: TFilterConfig
  },
  GoodsList: {
    data: Array<TGoodsDataRow>,
    config: TGoodsConfig
  }
}

export type TGoodsTagDataRow = {
  name: string,
  data: Array<TGoodsDataRow>
}