/*
 * @Author: liyafei
 * @Date: 2022-12-28 10:35:20
 * @Description: 
 */

import { StyleHTMLAttributes } from 'vue';

export type TCouponPackDataRow = {
  img: string,
  alt?: string,
  link?: string,
  actionType?: string,
  distribution: 'normal', //券包发送方式，normal:不区分新老会员；distinguish：区分
  notice: string[],  //  发放须知的email
  params?: {
    normalCouponIds: string[], //正常发放，优惠券id
    oldCustomerCouponIds: string[], //老会员发放，优惠券id
    newCustomerCouponIds: string[],//新会员发放，优惠券id
  },
  received?: boolean, //已经取
}

export type TCouponPackConfig = {
  cols: number,
  style: StyleHTMLAttributes,
}