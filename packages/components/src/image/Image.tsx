/*
 * @Author: liyafei
 * @Date: 2022-12-20 15:55:55
 * @Description:
 */
import { defineComponent } from 'vue';
import type { PropType, ExtractPropTypes } from 'vue';
import { Icon } from 'vant';

import { createNamespace } from '../utils/create';
import { TImageDataRow, TImageConfig } from './types';

import './style/index.less';

const [name, bem] = createNamespace('image');

export const imageProps = {
  name: {
    type: String,
    default: '图片',
  },
  data: {
    type: Array as PropType<Array<TImageDataRow>>,
    default: [],
  },
  config: {
    type: Object as PropType<TImageConfig>,
    default: {
      cols: 1,
    },
  },
};

export type ImageProps = ExtractPropTypes<typeof imageProps>;

export const Image = defineComponent({
  name,
  type: 'Image',
  props: imageProps,
  emits: ['click'],
  setup(props, { emit, slots, attrs }) {
    const handleClick = (e: MouseEvent, item: TImageDataRow) => {
      emit('click', e, item);
    };

    return () => {
      const imgEle = props.data.map((item) => {
        const style = {
          width: `${100 / props.data.length}%`,
          ...props.config.style,
        };
        const img = item.img ? (
          <img class={bem('img')} src={item.img} alt={item.alt} />
        ) : (
          <div class={bem('img-placeholder')}>
            <Icon name="photo-o" />
          </div>
        );
        return (
          <div
            class={bem('wrap')}
            style={style}
            onClick={(e) => {
              handleClick(e, item);
            }}
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
