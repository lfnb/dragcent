/*
 * @Author: liyafei
 * @Date: 2023-02-02 18:22:14
 * @Description:
 */
import { defineComponent } from 'vue';
import { PropType, ExtractPropTypes, reactive } from 'vue';
import { ActionSheet, Icon, Field, Button } from 'vant';

import { createNamespace } from '../utils/create';
import { TFilterDataRow, TFilterConfig } from './types';

import './style/index.less';
import { TTabsDataRow } from '../tabs';

const [name, bem] = createNamespace('filter');

export const filterProps = {
  name: {
    type: String,
    default: 'filter',
  },
  data: {
    type: Array as PropType<Array<TFilterDataRow>>,
    default: [],
  },
  config: {
    type: Object as PropType<TFilterConfig>,
    default: {},
  },
};

export type FilterProps = ExtractPropTypes<typeof filterProps>;

type StateProps = {
  show: boolean;
  active: Record<string, number>;
  list: TFilterDataRow[];
};

export const FilterGoods = defineComponent({
  name,
  type: 'Filter',
  props: filterProps,
  emits: ['confirm'],
  setup(props, { emit, slots, attrs }) {
    const state: StateProps = reactive({
      show: false,
      active: {},
      list: props.data,
    });

    const handleClick = () => {
      state.show = !state.show;
    };

    const handleCancel = () => {
      state.show = false;
    };

    const handleCellClick = (
      groupIndex: number,
      code: string,
      index: number
    ) => {
      state.active[code] = index;
      state.list[groupIndex].value = state.list[groupIndex].options[index];
    };

    const handleReset = () => {
      state.active = {};
      state.list.map((item) => {
        item.value = {};
      });
    };

    const handleConfirm = () => {
      const result: Record<string, object> = {};
      state.list.map((item) => {
        result[item.code] = item.value;
      });

      emit('confirm', result);
      state.show = false;
    };

    const renderShop = (group: TFilterDataRow, groupIndex: number) => {
      return (
        <div class={bem('group')}>
          <div class="title">
            <div class="lbl">{group.name}</div>
          </div>
          <div class="list">
            {group.options?.map((item, index) => {
              return (
                <div
                  class={`cell ${
                    state.active[group.code] === index ? 'active' : ''
                  }`}
                  onClick={() => {
                    handleCellClick(groupIndex, group.code, index);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    const renderDiscount = (group: TFilterDataRow, groupIndex: number) => {
      return (
        <div class={bem('group')}>
          <div class="title">
            <div class="lbl">{group.name}</div>
          </div>
          <div class="list">
            <div class="cell">
              <Field
                type="number"
                placeholder="自定最高折扣"
                inputAlign="center"
                modelValue={group.value.min}
              />
            </div>
            <div class="cell">
              <Field
                type="number"
                placeholder="自定最低折扣"
                inputAlign="center"
                modelValue={group.value.max}
              />
            </div>
            {group.options.map((item, index) => (
              <div
                class={`cell ${
                  state.active[group.code] === index ? 'active' : ''
                }`}
                onClick={() => {
                  handleCellClick(groupIndex, group.code, index);
                }}
              >
                <Field
                  inputAlign="center"
                  readonly
                  modelValue={`${item.min}-${item.max}`}
                />
              </div>
            ))}
          </div>
        </div>
      );
    };
    const renderPrice = (group: TFilterDataRow, groupIndex: number) => {
      return (
        <div class={bem('group')}>
          <div class="title">
            <div class="lbl">{group.name}</div>
          </div>
          <div class="list">
            <div class="cell">
              <Field
                type="number"
                placeholder="最低定价"
                inputAlign="center"
                modelValue={group.value.min}
              />
            </div>
            <div class="cell">
              <Field
                type="number"
                placeholder="最高定价"
                inputAlign="center"
                modelValue={group.value.max}
              />
            </div>
            {group.options.map((item, index) => (
              <div
                class={`cell ${
                  state.active[group.code] === index ? 'active' : ''
                }`}
                onClick={() => {
                  handleCellClick(groupIndex, group.code, index);
                }}
              >
                <Field
                  inputAlign="center"
                  readonly
                  modelValue={`${item.min}-${item.max}`}
                />
              </div>
            ))}
          </div>
        </div>
      );
    };

    const renderItem = (item: TFilterDataRow, index: number) => {
      switch (item.code) {
        case 'shopList':
          return renderShop(item, index);
        case 'discountRange':
          return renderDiscount(item, index);
        case 'priceRange':
          return renderPrice(item, index);
        default:
          return '';
      }
    };

    return () => {
      return (
        <div class={bem()}>
          <span onClick={handleClick}>{slots.default?.()}</span>
          <ActionSheet
            class={bem('dialog')}
            show={state.show}
            // @ts-ignore
            onClickOverlay={handleCancel}
            closeOnClickOverlay
            onCancel={handleCancel}
          >
            <div class={bem('header')} onClick={handleCancel}>
              <span class="title"></span>
              <Icon class="icon" name="cross" />
            </div>
            {state.list.map((item, index) => renderItem(item, index))}
            <div class={bem('action')}>
              <Button class="btn btn-reset" onClick={handleReset}>
                重置
              </Button>
              <Button class="btn btn-confirm" onClick={handleConfirm}>
                确定
              </Button>
            </div>
          </ActionSheet>
        </div>
      );
    };
  },
});
