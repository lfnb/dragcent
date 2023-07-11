"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const create = require("../utils/create.js");
const types = require("./types.js");
require("./style/index.css");
const index = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/tab/index.js");
const index$1 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/sidebar-item/index.js");
const index$2 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/sidebar/index.js");
const index$3 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/sticky/index.js");
const index$4 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/tabs/index.js");
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
}
const [name, bem] = create.createNamespace("tabs");
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
      position: types.ETabsPosition.TOP,
      sticky: true,
      shrink: false,
      scrollspy: true
    }
  }
};
const Tabs = /* @__PURE__ */ vue.defineComponent({
  name,
  type: "Tabs",
  props: tabsProps,
  emits: ["tabClick"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const state = vue.reactive({
      activeTabIndex: 0
    });
    const handleTabChange = ({
      name: name2
    }) => {
      state.activeTabIndex = name2;
      emit("tabClick", props.data[name2]);
    };
    const handleSidebarChange = (index2) => {
      var _a;
      state.activeTabIndex = index2;
      const top = ((_a = refTabs.value) == null ? void 0 : _a.querySelectorAll(".s-goods-tag-goods-list-wrapper")[index2]).offsetTop - 60;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
      emit("tabClick", props.data[index2]);
    };
    const refTabs = vue.ref();
    const handleScroll = () => {
      var _a;
      const goodsListEle = (_a = refTabs.value) == null ? void 0 : _a.querySelectorAll(".s-goods-tag-goods-list-wrapper");
      goodsListEle == null ? void 0 : goodsListEle.forEach((item, index2) => {
        const top = item.offsetTop - 60;
        if (window.scrollY >= top) {
          state.activeTabIndex = index2;
        }
      });
    };
    vue.onMounted(() => {
      if (props.config.position === types.ETabsPosition.LEFT || props.config.position === types.ETabsPosition.RIGHT) {
        window.addEventListener("scroll", handleScroll);
      }
    });
    vue.onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return () => {
      if (props.config && Object.keys(props.config).length === 0) {
        props.config.position = types.ETabsPosition.TOP;
        props.config.sticky = true;
        props.config.shrink = false;
      }
      const goodsRender = [];
      const items = props.data.map((item, index$22) => {
        var _a;
        if (props.config.position === types.ETabsPosition.TOP || props.config.position === types.ETabsPosition.BOTTOM) {
          return vue.createVNode(index.Tab, {
            "title": item.name
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots[`goodsRender${index$22}`]) == null ? void 0 : _a2.call(slots)];
            }
          });
        }
        goodsRender.push((_a = slots[`goodsRender${index$22}`]) == null ? void 0 : _a.call(slots));
        return vue.createVNode(index$1.SidebarItem, {
          "title": item.name
        }, null);
      });
      const content = (position) => {
        var _a;
        switch (position) {
          case types.ETabsPosition.TOP:
          case types.ETabsPosition.BOTTOM:
            return vue.createVNode("div", {
              "class": `${bem("horizontal")} ${bem(`horizontal-${position}`)}`
            }, [vue.createVNode(index$4.Tabs, {
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
          case types.ETabsPosition.LEFT:
          case types.ETabsPosition.RIGHT:
            const sidebar = vue.createVNode(index$2.Sidebar, {
              "modelValue": state.activeTabIndex,
              "onChange": handleSidebarChange
            }, _isSlot(items) ? items : {
              default: () => [items]
            });
            const rank = (_a = slots.rank) == null ? void 0 : _a.call(slots);
            return vue.createVNode("div", {
              "ref": refTabs,
              "class": `${bem("vertical")} ${bem(`vertical-${position}`)}`
            }, [vue.createVNode("div", {
              "class": bem("vertical-sidebar-wrapper")
            }, [props.config.sticky ? vue.createVNode(vue.Fragment, null, [vue.createVNode(index$3.Sticky, {
              "class": bem("vertical-sticky-sidebar"),
              "container": refTabs.value
            }, _isSlot(sidebar) ? sidebar : {
              default: () => [sidebar]
            })]) : sidebar]), vue.createVNode("div", {
              "class": bem("wrapper")
            }, [props.config.sticky ? vue.createVNode(index$3.Sticky, {
              "class": bem("vertical-sticky-rank"),
              "container": refTabs.value
            }, _isSlot(rank) ? rank : {
              default: () => [rank]
            }) : rank, goodsRender])]);
        }
      };
      return vue.createVNode("div", {
        "class": bem()
      }, [content(props.config.position)]);
    };
  }
});
exports.Tabs = Tabs;
exports.tabsProps = tabsProps;
