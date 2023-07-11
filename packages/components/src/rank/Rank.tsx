/*
 * @Author: liyafei
 * @Date: 2023-02-02 18:22:14
 * @Description:
 */
import { defineComponent, ref, reactive } from 'vue';
import type { PropType, ExtractPropTypes } from 'vue';
import { Icon } from 'vant';

import { createNamespace } from '../utils/create';
import { TRankDataRow, TRankConfig, EOrderBy } from './types';

import { FilterGoods } from '../filter';

import './style/index.less';

const [name, bem] = createNamespace('rank');

export const rankProps = {
  name: {
    type: String,
    default: 'rank',
  },
  data: {
    type: Array as PropType<Array<TRankDataRow>>,
    default: [],
  },
  config: {
    type: Object as PropType<TRankConfig>,
    default: {},
  },
};

export type RankProps = ExtractPropTypes<typeof rankProps>;

export const Rank = defineComponent({
  name,
  type: 'Rank',
  props: rankProps,
  emits: ['click'],
  setup(props, { emit, slots, attrs }) {
    const state = reactive({
      activeItem: props.data[0].list?.[0],
      list: props.data,
    });

    const data: any = {};

    const handleClick = (item: TRankDataRow) => {
      if (item.code === 'filter') return;

      if (item.code !== 'default') {
        if (!item.params.orderBy) {
          item.params.orderBy = EOrderBy.DESC;
        } else if (
          item.code !== 'default' &&
          item.params.orderBy === EOrderBy.ASC
        ) {
          item.params.orderBy = EOrderBy.DESC;
        } else if (
          item.code !== 'default' &&
          item.params.orderBy === EOrderBy.DESC
        ) {
          item.params.orderBy = EOrderBy.ASC;
        }
      }
      data.rank = item;
      emit('click', data);
      state.activeItem = item;
    };

    const handleFilter = (item: any) => {
      data.filter = item;
      emit('click', data);
    };

    return () => {
      const items = state.list.map((item) => {
        if (item.list) {
          return (
            <div
              class={`${bem('cell')} ${
                item.list[0].code === state.activeItem.code ? 'active' : ''
              }`}
              onClick={() => {
                handleClick(item.list?.[0]);
              }}
            >
              <span class="txt">{item.list[0].name}</span>
            </div>
          );
        }
        return item.code !== 'filter' ? (
          <div
            class={`${bem('cell')} ${
              item.code === state.activeItem.code ? 'active' : ''
            }`}
            onClick={() => {
              handleClick(item);
            }}
          >
            <span class="txt">{item.name}</span>
            <div class={`${bem('icon')} ${item.params.orderBy}`}></div>
          </div>
        ) : (
          item.params.show && (
            <div
              class={bem('cell')}
              onClick={() => {
                handleClick(item);
              }}
            >
              <FilterGoods
                data={props.config.filter?.data}
                config={props.config?.filter?.config}
                onConfirm={handleFilter}
              >
                <span class="txt">{item.name}</span>
                <Icon class={bem('vant-icon')} name="filter-o" />
              </FilterGoods>
            </div>
          )
        );
      });
      return <div class={bem()}>{items}</div>;
    };
  },
});
