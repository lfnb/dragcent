/*
 * @Author: liyafei
 * @Date: 2022-12-28 10:35:08
 * @Description:
 */
import { defineComponent } from 'vue';
import type { PropType, ExtractPropTypes } from 'vue';
import { Icon } from 'vant';

import { createNamespace } from '../utils/create';
import { TCouponPackDataRow, TCouponPackConfig } from './types';

import './style/index.less';

const [name, bem] = createNamespace('coupon-pack');
const useImg =
  'https://shopin-cms.oss-cn-beijing.aliyuncs.com/miniapp/coupon-used.png';

export const couponPackProps = {
  name: {
    type: String,
    default: '优惠券包',
  },
  data: {
    type: Array as PropType<TCouponPackDataRow[]>,
    default: [],
  },
  config: {
    type: Object as PropType<TCouponPackConfig>,
    default: {
      cols: 1,
    },
  },
};

export type CouponPackProps = ExtractPropTypes<typeof couponPackProps>;

export const CouponPack = defineComponent({
  name,
  type: 'Coupon',
  props: couponPackProps,
  emits: ['click'],
  setup(props, { emit, attrs, slots }) {
    const handleClick = (event: MouseEvent, item: TCouponPackDataRow) => {
      emit('click', event, item);
    };

    return () => {
      const imgEle = props.data.map((item) => {
        const style = {
          width: `${100 / props.data.length}%`,
          ...props.config.style,
        };
        const img = item.img ? (
          <div class={bem('box')}>
            <img class={bem('img')} src={item.img} alt={item.alt} />
            {item.received ? <img class={bem('received')} src={useImg} /> : ''}
          </div>
        ) : (
          <div class={bem('img-placeholder')}>
            <Icon name="gift-card-o" />
          </div>
        );

        return (
          <div
            class="img-wrap"
            style={style}
            onClick={(e) => handleClick(e, item)}
          >
            {img}
          </div>
        );
      });
      const main = <div class={bem()}>{imgEle}</div>;
      return main;
    };
  },
});
