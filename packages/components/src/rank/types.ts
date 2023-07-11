/*
 * @Author: liyafei
 * @Date: 2023-02-02 18:22:34
 * @Description: 
 */
import { TFilterConfig, TFilterDataRow } from '../filter';

export enum EOrderBy {
  DESC = 'desc',
  ASC = 'asc'
}

export type TRankDataRow = {
  name: string,
  code: string,
  list?: Array<any>,
  params: {
    orderField?: string,
    orderBy?: EOrderBy,
    show?: boolean,
  }
}

export type TRankConfig = {
  filter?: {
    data: TFilterDataRow[],
    config: TFilterConfig
  }
}