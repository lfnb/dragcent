import { defineComponent, reactive, ref, onMounted, onUnmounted, createVNode, Fragment, isVNode } from "vue";
import { createNamespace } from "../utils/create.mjs";
import { ETabsPosition } from "./types.mjs";
import "./style/index.css";
import { Tab } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/tab/index.mjs";
import { SidebarItem } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/sidebar-item/index.mjs";
import { Sidebar } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/sidebar/index.mjs";
import { Sticky } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/sticky/index.mjs";
import { Tabs as Tabs$1 } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/tabs/index.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const [name, bem] = createNamespace("tabs");
const tabsProps = {
  name: {
    type: String,
    default: "tabs"
  },
  data: {
    type: Array,
    default: []
  },
  config: {
    type: Object,
    default: {
      position: ETabsPosition.TOP,
      sticky: true,
      shrink: false,
      scrollspy: true
    }
  }
};
const Tabs = /* @__PURE__ */ defineComponent({
  name,
  type: "Tabs",
  props: tabsProps,
  emits: ["tabClick"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const state = reactive({
      activeTabIndex: 0
    });
    const handleTabChange = ({
      name: name2
    }) => {
      state.activeTabIndex = name2;
      emit("tabClick", props.data[name2]);
    };
    const handleSidebarChange = (index) => {
      var _a;
      state.activeTabIndex = index;
      const top = ((_a = refTabs.value) == null ? void 0 : _a.querySelectorAll(".s-goods-tag-goods-list-wrapper")[index]).offsetTop - 60;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
      emit("tabClick", props.data[index]);
    };
    const refTabs = ref();
    const handleScroll = () => {
      var _a;
      const goodsListEle = (_a = refTabs.value) == null ? void 0 : _a.querySelectorAll(".s-goods-tag-goods-list-wrapper");
      goodsListEle == null ? void 0 : goodsListEle.forEach((item, index) => {
        const top = item.offsetTop - 60;
        if (window.scrollY >= top) {
          state.activeTabIndex = index;
        }
      });
    };
    onMounted(() => {
      if (props.config.position === ETabsPosition.LEFT || props.config.position === ETabsPosition.RIGHT) {
        window.addEventListener("scroll", handleScroll);
      }
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return () => {
      if (props.config && Object.keys(props.config).length === 0) {
        props.config.position = ETabsPosition.TOP;
        props.config.sticky = true;
        props.config.shrink = false;
      }
      const goodsRender = [];
      const items = props.data.map((item, index) => {
        var _a;
        if (props.config.position === ETabsPosition.TOP || props.config.position === ETabsPosition.BOTTOM) {
          return createVNode(Tab, {
            "title": item.name
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots[`goodsRender${index}`]) == null ? void 0 : _a2.call(slots)];
            }
          });
        }
        goodsRender.push((_a = slots[`goodsRender${index}`]) == null ? void 0 : _a.call(slots));
        return createVNode(SidebarItem, {
          "title": item.name
        }, null);
      });
      const content = (position) => {
        var _a;
        switch (position) {
          case ETabsPosition.TOP:
          case ETabsPosition.BOTTOM:
            return createVNode("div", {
              "class": `${bem("horizontal")} ${bem(`horizontal-${position}`)}`
            }, [createVNode(Tabs$1, {
              "sticky": props.config.sticky,
              "shrink": props.config.shrink,
              "scrollspy": true,
              "onClickTab": handleTabChange
            }, {
              default: () => [items],
              "nav-bottom": () => {
                var _a2;
                return (_a2 = slots.rank) == null ? void 0 : _a2.call(slots);
              }
            })]);
          case ETabsPosition.LEFT:
          case ETabsPosition.RIGHT:
            const sidebar = createVNode(Sidebar, {
              "modelValue": state.activeTabIndex,
              "onChange": handleSidebarChange
            }, _isSlot(items) ? items : {
              default: () => [items]
            });
            const rank = (_a = slots.rank) == null ? void 0 : _a.call(slots);
            return createVNode("div", {
              "ref": refTabs,
              "class": `${bem("vertical")} ${bem(`vertical-${position}`)}`
            }, [createVNode("div", {
              "class": bem("vertical-sidebar-wrapper")
            }, [props.config.sticky ? createVNode(Fragment, null, [createVNode(Sticky, {
              "class": bem("vertical-sticky-sidebar"),
              "container": refTabs.value
            }, _isSlot(sidebar) ? sidebar : {
              default: () => [sidebar]
            })]) : sidebar]), createVNode("div", {
              "class": bem("wrapper")
            }, [props.config.sticky ? createVNode(Sticky, {
              "class": bem("vertical-sticky-rank"),
              "container": refTabs.value
            }, _isSlot(rank) ? rank : {
              default: () => [rank]
            }) : rank, goodsRender])]);
        }
      };
      return createVNode("div", {
        "class": bem()
      }, [content(props.config.position)]);
    };
  }
});
export {
  Tabs,
  tabsProps
};
