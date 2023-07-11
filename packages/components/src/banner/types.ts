/*
 * @Author: liyafei
 * @Date: 2022-12-08 17:58:01
 * @Description: 
 */
import { StyleHTMLAttributes } from 'vue';

export type TBannerConfig = {
  width: number | string,
  height: number | string,
  'show-indicators': boolean,
  style?: StyleHTMLAttributes,
}

export type TBannerDataRow = {
  img: string,
  alt: string,
  link?: string,
  actionType?: string,
  params?: object,
}