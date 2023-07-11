"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const create = require("../utils/create.js");
require("./style/index.css");
const index = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/action-sheet/index.js");
const index$2 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/button/index.js");
const index$3 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/field/index.js");
const index$1 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/icon/index.js");
const [name, bem] = create.createNamespace("filter");
const filterProps = {
  name: {
    type: String,
    default: "filter"
  },
  data: {
    type: Array,
    default: []
  },
  config: {
    type: Object,
    default: {}
  }
};
const FilterGoods = /* @__PURE__ */ vue.defineComponent({
  name,
  type: "Filter",
  props: filterProps,
  emits: ["confirm"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const state = vue.reactive({
      show: false,
      active: {},
      list: props.data
    });
    const handleClick = () => {
      state.show = !state.show;
    };
    const handleCancel = () => {
      state.show = false;
    };
    const handleCellClick = (groupIndex, code, index2) => {
      state.active[code] = index2;
      state.list[groupIndex].value = state.list[groupIndex].options[index2];
    };
    const handleReset = () => {
      state.active = {};
      state.list.map((item) => {
        item.value = {};
      });
    };
    const handleConfirm = () => {
      const result = {};
      state.list.map((item) => {
        result[item.code] = item.value;
      });
      emit("confirm", result);
      state.show = false;
    };
    const renderShop = (group, groupIndex) => {
      var _a;
      return vue.createVNode("div", {
        "class": bem("group")
      }, [vue.createVNode("div", {
        "class": "title"
      }, [vue.createVNode("div", {
        "class": "lbl"
      }, [group.name])]), vue.createVNode("div", {
        "class": "list"
      }, [(_a = group.options) == null ? void 0 : _a.map((item, index2) => {
        return vue.createVNode("div", {
          "class": `cell ${state.active[group.code] === index2 ? "active" : ""}`,
          "onClick": () => {
            handleCellClick(groupIndex, group.code, index2);
          }
        }, [item.name]);
      })])]);
    };
    const renderDiscount = (group, groupIndex) => {
      return vue.createVNode("div", {
        "class": bem("group")
      }, [vue.createVNode("div", {
        "class": "title"
      }, [vue.createVNode("div", {
        "class": "lbl"
      }, [group.name])]), vue.createVNode("div", {
        "class": "list"
      }, [vue.createVNode("div", {
        "class": "cell"
      }, [vue.createVNode(index$3.Field, {
        "type": "number",
        "placeholder": "自定最高折扣",
        "inputAlign": "center",
        "modelValue": group.value.min
      }, null)]), vue.createVNode("div", {
        "class": "cell"
      }, [vue.createVNode(index$3.Field, {
        "type": "number",
        "placeholder": "自定最低折扣",
        "inputAlign": "center",
        "modelValue": group.value.max
      }, null)]), group.options.map((item, index2) => vue.createVNode("div", {
        "class": `cell ${state.active[group.code] === index2 ? "active" : ""}`,
        "onClick": () => {
          handleCellClick(groupIndex, group.code, index2);
        }
      }, [vue.createVNode(index$3.Field, {
        "inputAlign": "center",
        "readonly": true,
        "modelValue": `${item.min}-${item.max}`
      }, null)]))])]);
    };
    const renderPrice = (group, groupIndex) => {
      return vue.createVNode("div", {
        "class": bem("group")
      }, [vue.createVNode("div", {
        "class": "title"
      }, [vue.createVNode("div", {
        "class": "lbl"
      }, [group.name])]), vue.createVNode("div", {
        "class": "list"
      }, [vue.createVNode("div", {
        "class": "cell"
      }, [vue.createVNode(index$3.Field, {
        "type": "number",
        "placeholder": "最低定价",
        "inputAlign": "center",
        "modelValue": group.value.min
      }, null)]), vue.createVNode("div", {
        "class": "cell"
      }, [vue.createVNode(index$3.Field, {
        "type": "number",
        "placeholder": "最高定价",
        "inputAlign": "center",
        "modelValue": group.value.max
      }, null)]), group.options.map((item, index2) => vue.createVNode("div", {
        "class": `cell ${state.active[group.code] === index2 ? "active" : ""}`,
        "onClick": () => {
          handleCellClick(groupIndex, group.code, index2);
        }
      }, [vue.createVNode(index$3.Field, {
        "inputAlign": "center",
        "readonly": true,
        "modelValue": `${item.min}-${item.max}`
      }, null)]))])]);
    };
    const renderItem = (item, index2) => {
      switch (item.code) {
        case "shopList":
          return renderShop(item, index2);
        case "discountRange":
          return renderDiscount(item, index2);
        case "priceRange":
          return renderPrice(item, index2);
        default:
          return "";
      }
    };
    return () => {
      var _a;
      return vue.createVNode("div", {
        "class": bem()
      }, [vue.createVNode("span", {
        "onClick": handleClick
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), vue.createVNode(index.ActionSheet, {
        "class": bem("dialog"),
        "show": state.show,
        "onClickOverlay": handleCancel,
        "closeOnClickOverlay": true,
        "onCancel": handleCancel
      }, {
        default: () => [vue.createVNode("div", {
          "class": bem("header"),
          "onClick": handleCancel
        }, [vue.createVNode("span", {
          "class": "title"
        }, null), vue.createVNode(index$1.Icon, {
          "class": "icon",
          "name": "cross"
        }, null)]), state.list.map((item, index2) => renderItem(item, index2)), vue.createVNode("div", {
          "class": bem("action")
        }, [vue.createVNode(index$2.Button, {
          "class": "btn btn-reset",
          "onClick": handleReset
        }, {
          default: () => [vue.createTextVNode("重置")]
        }), vue.createVNode(index$2.Button, {
          "class": "btn btn-confirm",
          "onClick": handleConfirm
        }, {
          default: () => [vue.createTextVNode("确定")]
        })])]
      })]);
    };
  }
});
exports.FilterGoods = FilterGoods;
exports.filterProps = filterProps;
