/*
 * @Author: liyafei
 * @Date: 2022-12-20 15:55:55
 * @Description:
 */
import { defineComponent } from 'vue';

import type { PropType, ExtractPropTypes } from 'vue';

import { Swipe, SwipeItem, Icon } from 'vant';

import { createNamespace } from '../utils/create';
import { TBannerConfig, TBannerDataRow } from './types';

import './style/index.less';

const [name, bem] = createNamespace('banner');

export const bannerProps = {
  name: {
    type: String,
    default: 'banner',
  },
  data: {
    type: Array as PropType<TBannerDataRow[]>,
    default: [],
  },
  config: {
    type: Object as PropType<TBannerConfig>,
    default: {
      cols: 1,
    },
  },
};

export type BannerProps = ExtractPropTypes<typeof bannerProps>;

export const Banner = defineComponent({
  name,
  type: 'Banner',
  props: bannerProps,
  emits: ['click'],
  setup(props, { emit, slots, attrs }) {
    const handleClick = (event: MouseEvent, item: TBannerDataRow) => {
      emit('click', event, item);
    };
    return () => {
      const swipeItems = props.data.map((item, index) => {
        const img = item.img ? (
          <img class={bem('img')} src={item.img} alt={item.alt} />
        ) : (
          <div class={bem('img-placeholder')}>
            <Icon name="flower-o" />
          </div>
        );
        return (
          <SwipeItem key={index}>
            <div class="wrap" onClick={(e) => handleClick(e, item)}>
              {img}
            </div>
          </SwipeItem>
        );
      });

      const main = (
        <div class={bem()}>
          <Swipe {...props.config}>{swipeItems}</Swipe>
        </div>
      );

      return main;
    };
  },
});
