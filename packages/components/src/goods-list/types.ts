/*
 * @Author: liyafei
 * @Date: 2022-12-08 17:58:01
 * @Description: 
 */
import { StyleHTMLAttributes } from 'vue';

export type TGoodsConfig = {
  cols: number, //列数
  limit: number, //显示个数，配置的商品数据不全部显示，根据该值显示商品个数,如果没有设置该值，则全部显示
  style?: StyleHTMLAttributes,
  domain: string, //商品图片域名
}

export type TGoodsDataRow = {
  title: string, //标题
  img: string, //图片地址
  productId: string, //商品ID
  supplySid: string,    //供应商ID
  discount: number, //折扣
  currentPrice: number,  //现价
  promotionPrice: number,  //活动价
  originalPrice: number, //原价
  picPath?: string,
}