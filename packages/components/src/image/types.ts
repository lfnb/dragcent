/*
 * @Author: liyafei
 * @Date: 2022-12-20 15:56:04
 * @Description: 
 */
import { StyleHTMLAttributes } from 'vue';

export type TImageDataRow = {
  img: string,
  alt?: string,
  link?: string,
  actionType?: string,
  params?: object,
}

export type TImageConfig = {
  cols: number,
  style?: StyleHTMLAttributes,
}