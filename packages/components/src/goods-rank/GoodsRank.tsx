/*
 * @Author: liyafei
 * @Date: 2023-02-02 18:22:14
 * @Description:商品聚合组件：由tabs、rank、filter、goods-list组成的复合组件
 */
import { defineComponent, watch, ref } from 'vue';
import type { PropType, ExtractPropTypes } from 'vue';
import { Sticky } from 'vant';

import { createNamespace } from '../utils/create';
import { TGoodsRankConfig, TGoodsRankDataRow } from './types';
import { GoodsList } from '../goods-list';
import { Rank } from '../rank';

import './style/index.less';

const [name, bem] = createNamespace('goods-rank');

export const goodsRankProps = {
  name: {
    type: String,
    default: 'goodsRank',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array as PropType<Array<TGoodsRankDataRow>>,
    default: [],
  },
  config: {
    type: Object as PropType<TGoodsRankConfig>,
    default: {
      sticky: true,
    },
  },
};

export type GoodsRankProps = ExtractPropTypes<typeof goodsRankProps>;

export const GoodsRank = defineComponent({
  name,
  type: 'GoodsTag',
  props: goodsRankProps,
  emits: ['update', 'click'],
  setup(props, { emit, slots, attrs }) {
    const data: any = {};

    const refTabs = ref<HTMLElement>();

    const handleRank = (item: any) => {
      Object.assign(data, item);
      emit('update', data);
    };

    const handleGoodsClick = (e: MouseEvent, item: any) => {
      emit('click', e, item);
    };

    const rankEle = (
      <Rank
        data={props.config.Rank.data}
        config={{
          ...props.config.Rank.config,
          filter: props.config.Filter,
        }}
        onClick={handleRank}
      />
    );

    return () => {
      return (
        <div ref={refTabs} class={bem()}>
          {props.config.Rank.config.sticky ? (
            <Sticky container={refTabs.value}>{rankEle}</Sticky>
          ) : (
            rankEle
          )}

          <div class={bem('goods-list-wrapper')}>
            <GoodsList
              data={props.data}
              config={props.config.GoodsList.config}
              onClick={handleGoodsClick}
              loading={props.loading}
            />
          </div>
        </div>
      );
    };
  },
});
