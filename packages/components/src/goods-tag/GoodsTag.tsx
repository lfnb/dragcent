/*
 * @Author: liyafei
 * @Date: 2023-02-02 18:22:14
 * @Description:商品聚合组件：由tabs、rank、filter、goods-list组成的复合组件
 */
import { defineComponent, reactive, watch, ref } from 'vue';
import type { PropType, ExtractPropTypes } from 'vue';

import { createNamespace } from '../utils/create';
import { TGoodsTagConfig, TGoodsTagDataRow } from './types';
import { GoodsList } from '../goods-list';
import { Tabs } from '../tabs';
import { Rank } from '../rank';

import './style/index.less';

const [name, bem] = createNamespace('goods-tag');

export const goodsTagProps = {
  name: {
    type: String,
    default: 'goodsTag',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array as PropType<Array<TGoodsTagDataRow>>,
    default: [],
  },
  config: {
    type: Object as PropType<TGoodsTagConfig>,
    default: {},
  },
};

export type GoodsTagProps = ExtractPropTypes<typeof goodsTagProps>;

export const GoodsTag = defineComponent({
  name,
  type: 'GoodsTag',
  props: goodsTagProps,
  emits: ['update', 'click'],
  setup(props, { emit, slots, attrs }) {
    const data: any = {};

    const handleTabChange = (item: any) => {
      data.tab = item;
      emit('update', data);
    };

    const handleRank = (item: any) => {
      Object.assign(data, item);
      emit('update', data);
    };

    const handleGoodsClick = (e: MouseEvent, item: any) => {
      emit('click', e, item);
    };

    let goodsSlots = ref<Record<string, Function>>({});

    watch(props.data, (val) => {
      if (val.length === 0) return;
      props.data.forEach((item, index) => {
        goodsSlots.value[`goodsRender${index}`] = () => {
          const params = props.config.Tabs.data[index].params;
          const limit: any = params?.limit ? params.limit : undefined;
          const goodsConfig = { ...props.config.GoodsList.config, limit };

          return (
            <div class={bem('goods-list-wrapper')}>
              <GoodsList
                data={item.data}
                config={goodsConfig}
                onClick={handleGoodsClick}
                loading={props.loading}
              />
            </div>
          );
        };
      });
    });

    return () => {
      return (
        <div class={bem()}>
          {
            <Tabs
              data={props.config.Tabs.data}
              config={props.config.Tabs.config}
              onTabClick={handleTabChange}
              v-slots={{
                rank: () => {
                  if (props.config.Rank) {
                    return (
                      <div class={bem('rank-wrapper')}>
                        <Rank
                          data={props.config.Rank.data}
                          config={{
                            ...props.config.Rank.config,
                            filter: props.config.Filter,
                          }}
                          onClick={handleRank}
                        />
                      </div>
                    );
                  }
                  return null;
                },
                ...goodsSlots.value,
              }}
            ></Tabs>
          }
        </div>
      );
    };
  },
});
