/*
 * @Author: liyafei
 * @Date: 2022-12-08 18:05:03
 * @Description:
 */
import { defineComponent, watch, ref } from 'vue';
import type { PropType, ExtractPropTypes } from 'vue';
import { List, Icon, Loading, Empty } from 'vant';

import { createNamespace } from '../utils/create';
import type { TGoodsDataRow, TGoodsConfig } from './types';

import './style/index.less';
import emptyImg from '../assets/empty.png';

const [name, bem] = createNamespace('goods-list');

export const goodsListProps = {
  name: {
    type: String,
    default: '商品列表',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array as PropType<Array<TGoodsDataRow>>,
    default: [],
  },
  config: {
    type: Object as PropType<TGoodsConfig>,
    default: {
      cols: 1,
      limit: 1,
    },
  },
};

export type GoodsListProps = ExtractPropTypes<typeof goodsListProps>;

export const GoodsList = defineComponent({
  name,
  type: 'GoodsList',
  props: goodsListProps,
  emits: ['click'],
  setup(props, { attrs, slots, emit }) {
    const list = ref(props.data);

    const showCount = props.config?.limit
      ? props.config.limit
      : props.data.length;

    const refShowCount = ref(showCount);
    const showData = ref<TGoodsDataRow[]>(
      list.value.slice(0, refShowCount.value)
    );

    watch(props.data, (newValue, oldValue) => {
      list.value = newValue;
      refShowCount.value = props.config?.limit
        ? props.config.limit
        : newValue.length;

      showData.value = newValue.slice(0, refShowCount.value);
    });

    watch(
      () => props.config.limit,
      (newValue) => {
        refShowCount.value = newValue;
        showData.value = list.value.slice(0, newValue);
      }
    );

    const handleClick = (e: Event, data: TGoodsDataRow) => {
      emit('click', e, data);
    };

    return () => {
      const listEle: Array<JSX.Element> = [];
      let cells: Array<JSX.Element> = [];
      let rowIndex = 1;

      showData.value.forEach((item, index) => {
        item.img = item.picPath ? props.config.domain + item.picPath : item.img;
        const detailEle = (
          <div
            class={bem('detail')}
            style={{
              width: `calc(${100 / props.config.cols}% - 10px)`,
            }}
            onClick={(e) =>
              handleClick(e, {
                ...item,
              })
            }
          >
            {item.img ? (
              <img class="img" src={item.img} />
            ) : (
              <div class="img-placeholder">
                <Icon name="bag-o" />
              </div>
            )}
            <div class="title">
              <span class="discount">{(item.discount * 1).toFixed(1)}折</span>
              {item.title}
            </div>
            <div class="price">
              <span class="cur">¥{item.promotionPrice}</span>
              <span class="strike">¥{item.originalPrice}</span>
            </div>
          </div>
        );

        cells.push(detailEle);

        if (
          index + 1 === showData.value.length ||
          index + 1 === rowIndex * props.config.cols
        ) {
          const rowEle = <div class={bem('row')}>{cells}</div>;
          listEle.push(rowEle);
          cells = [];
          rowIndex++;
        }
      });
      const main = (
        <div class={bem()}>
          {listEle.length > 0 ? (
            <List finished-text="没有更多了">{listEle}</List>
          ) : (
            <Empty image={emptyImg}>没找到您要的内容</Empty>
          )}
          {props.loading && (
            <div class={bem('loading')}>
              <Loading size="20" color="#fff" vertical>
                加载中...
              </Loading>
            </div>
          )}
        </div>
      );
      return main;
    };
  },
});
