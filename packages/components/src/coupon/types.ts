/*
 * @Author: liyafei
 * @Date: 2022-12-28 10:35:20
 * @Description: 
 */

import { StyleHTMLAttributes } from 'vue';

export type TCouponDataRow = {
  img: string,
  alt?: string,
  link?: string,
  actionType?: string,
  params?: {
    couponId?: string,
  },
  received?: boolean,
}

export type TCouponConfig = {
  cols: number,
  style: StyleHTMLAttributes,
}