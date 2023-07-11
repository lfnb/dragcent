/*
 * @Author: liyafei
 * @Date: 2022-12-20 15:55:55
 * @Description:
 */
import { defineComponent } from 'vue';

import type { PropType, ExtractPropTypes } from 'vue';

import { Swipe, SwipeItem, Icon } from 'vant';

import { createNamespace } from '../utils/create';
import { TTextAreaViewConfig, TTextAreaViewDataRow } from './types';

import './style/index.less';

const [name, bem] = createNamespace('textarea-view');

export const textAreaViewProps = {
  name: {
    type: String,
    default: 'TextAreaView',
  },
  data: {
    type: Array as PropType<TTextAreaViewDataRow[]>,
    default: [],
  },
  config: {
    type: Object as PropType<TTextAreaViewConfig>,
    default: {},
  },
};

export type TextAreaViewProps = ExtractPropTypes<typeof textAreaViewProps>;

export const TextAreaView = defineComponent({
  name,
  type: 'TextAreaView',
  props: textAreaViewProps,
  setup(props, { emit, slots, attrs }) {
    return () => {
      const htmlContentList = props.data.map((item, index) => {
        if (!item.htmlContent) {
          return <div class={bem('html-item-empty')}>空</div>;
        }

        return <div class={bem('html-item')} v-html={item.htmlContent}></div>;
      });

      const main = (
        <div class={bem()}>
          <div class={bem('html-list')} {...props.config}>
            {htmlContentList}
          </div>
        </div>
      );

      return main;
    };
  },
});
