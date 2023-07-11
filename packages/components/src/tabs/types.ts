/*
 * @Author: liyafei
 * @Date: 2023-02-02 18:22:34
 * @Description: 
 */

export enum ETabsPosition {
  TOP = 'top',
  LEFT = 'left',
  BOTTOM = 'bottom',
  RIGHT = 'right'
}

export type TTabsDataRow = {
  name: '',
  icon?: '',
  params?: {
    limit?: number  //用来限制商品显示个数
  }
}

export type TTabsConfig = {
  position: ETabsPosition,
  sticky: boolean,	//是否吸顶
  shrink: boolean,	//是否开启左侧搜索布局
  scrollspy: boolean //是否开启滚动导航
}