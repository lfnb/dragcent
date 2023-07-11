/*
 * @Author: liyafei
 * @Date: 2023-02-02 18:22:14
 * @Description:
 */
import { defineComponent, reactive, ref, onMounted, onUnmounted } from 'vue';
import type { PropType, ExtractPropTypes } from 'vue';
import { Tabs as VTabs, Tab, Sidebar, SidebarItem, Sticky } from 'vant';

import { createNamespace } from '../utils/create';
import { TTabsDataRow, TTabsConfig, ETabsPosition } from './types';

import './style/index.less';

const [name, bem] = createNamespace('tabs');

export const tabsProps = {
  name: {
    type: String,
    default: 'tabs',
  },
  data: {
    type: Array as PropType<Array<TTabsDataRow>>,
    default: [],
  },
  config: {
    type: Object as PropType<TTabsConfig>,
    default: {
      position: ETabsPosition.TOP,
      sticky: true,
      shrink: false,
      scrollspy: true,
    },
  },
};

export type TabsProps = ExtractPropTypes<typeof tabsProps>;

export const Tabs = defineComponent({
  name,
  type: 'Tabs',
  props: tabsProps,
  emits: ['tabClick'],
  setup(props, { emit, slots, attrs }) {
    const state = reactive({
      activeTabIndex: 0,
    });

    const handleTabChange = ({ name }: any) => {
      state.activeTabIndex = name;
      emit('tabClick', props.data[name]);
    };
    const handleSidebarChange = (index: number) => {
      state.activeTabIndex = index;
      const top =
        (
          refTabs.value?.querySelectorAll('.s-goods-tag-goods-list-wrapper')[
            index
          ] as HTMLElement
        ).offsetTop - 60;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
      emit('tabClick', props.data[index]);
    };

    const refTabs = ref<HTMLElement>();

    const handleScroll = () => {
      const goodsListEle = refTabs.value?.querySelectorAll(
        '.s-goods-tag-goods-list-wrapper'
      );
      goodsListEle?.forEach((item, index) => {
        const top = (item as HTMLElement).offsetTop - 60;
        if (window.scrollY >= top) {
          state.activeTabIndex = index;
        }
      });
    };

    onMounted(() => {
      if (
        props.config.position === ETabsPosition.LEFT ||
        props.config.position === ETabsPosition.RIGHT
      ) {
        window.addEventListener('scroll', handleScroll);
      }
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return () => {
      if (props.config && Object.keys(props.config).length === 0) {
        props.config.position = ETabsPosition.TOP;
        props.config.sticky = true;
        props.config.shrink = false;
      }

      const goodsRender: any = [];

      const items = props.data.map((item, index) => {
        if (
          props.config.position === ETabsPosition.TOP ||
          props.config.position === ETabsPosition.BOTTOM
        ) {
          return (
            <Tab title={item.name}>{slots[`goodsRender${index}`]?.()}</Tab>
          );
        }
        goodsRender.push(slots[`goodsRender${index}`]?.());

        return <SidebarItem title={item.name}></SidebarItem>;
      });

      const content = (position: ETabsPosition) => {
        switch (position) {
          case ETabsPosition.TOP:
          case ETabsPosition.BOTTOM:
            return (
              <div
                class={`${bem('horizontal')} ${bem(`horizontal-${position}`)}`}
              >
                <VTabs
                  sticky={props.config.sticky}
                  shrink={props.config.shrink}
                  scrollspy={true}
                  onClickTab={handleTabChange}
                  v-slots={{
                    'nav-bottom': () => {
                      return slots.rank?.();
                    },
                  }}
                >
                  {items}
                </VTabs>
              </div>
            );
          case ETabsPosition.LEFT:
          case ETabsPosition.RIGHT:
            const sidebar = (
              <Sidebar
                modelValue={state.activeTabIndex}
                onChange={handleSidebarChange}
              >
                {items}
              </Sidebar>
            );

            const rank = slots.rank?.();
            return (
              <div
                ref={refTabs}
                class={`${bem('vertical')} ${bem(`vertical-${position}`)}`}
              >
                <div class={bem('vertical-sidebar-wrapper')}>
                  {props.config.sticky ? (
                    <>
                      <Sticky
                        class={bem('vertical-sticky-sidebar')}
                        container={refTabs.value}
                      >
                        {sidebar}
                      </Sticky>
                    </>
                  ) : (
                    sidebar
                  )}
                </div>
                <div class={bem('wrapper')}>
                  {props.config.sticky ? (
                    <Sticky
                      class={bem('vertical-sticky-rank')}
                      container={refTabs.value}
                    >
                      {rank}
                    </Sticky>
                  ) : (
                    rank
                  )}
                  {goodsRender}
                </div>
              </div>
            );
          default:
            break;
        }
      };

      return <div class={bem()}>{content(props.config.position)}</div>;
    };
  },
});
