import { defineComponent, reactive, createVNode, createTextVNode } from "vue";
import { createNamespace } from "../utils/create.mjs";
import "./style/index.css";
import { ActionSheet } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/action-sheet/index.mjs";
import { Button } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/button/index.mjs";
import { Field } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/field/index.mjs";
import { Icon } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/icon/index.mjs";
const [name, bem] = createNamespace("filter");
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
const FilterGoods = /* @__PURE__ */ defineComponent({
  name,
  type: "Filter",
  props: filterProps,
  emits: ["confirm"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const state = reactive({
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
    const handleCellClick = (groupIndex, code, index) => {
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
      const result = {};
      state.list.map((item) => {
        result[item.code] = item.value;
      });
      emit("confirm", result);
      state.show = false;
    };
    const renderShop = (group, groupIndex) => {
      var _a;
      return createVNode("div", {
        "class": bem("group")
      }, [createVNode("div", {
        "class": "title"
      }, [createVNode("div", {
        "class": "lbl"
      }, [group.name])]), createVNode("div", {
        "class": "list"
      }, [(_a = group.options) == null ? void 0 : _a.map((item, index) => {
        return createVNode("div", {
          "class": `cell ${state.active[group.code] === index ? "active" : ""}`,
          "onClick": () => {
            handleCellClick(groupIndex, group.code, index);
          }
        }, [item.name]);
      })])]);
    };
    const renderDiscount = (group, groupIndex) => {
      return createVNode("div", {
        "class": bem("group")
      }, [createVNode("div", {
        "class": "title"
      }, [createVNode("div", {
        "class": "lbl"
      }, [group.name])]), createVNode("div", {
        "class": "list"
      }, [createVNode("div", {
        "class": "cell"
      }, [createVNode(Field, {
        "type": "number",
        "placeholder": "自定最高折扣",
        "inputAlign": "center",
        "modelValue": group.value.min
      }, null)]), createVNode("div", {
        "class": "cell"
      }, [createVNode(Field, {
        "type": "number",
        "placeholder": "自定最低折扣",
        "inputAlign": "center",
        "modelValue": group.value.max
      }, null)]), group.options.map((item, index) => createVNode("div", {
        "class": `cell ${state.active[group.code] === index ? "active" : ""}`,
        "onClick": () => {
          handleCellClick(groupIndex, group.code, index);
        }
      }, [createVNode(Field, {
        "inputAlign": "center",
        "readonly": true,
        "modelValue": `${item.min}-${item.max}`
      }, null)]))])]);
    };
    const renderPrice = (group, groupIndex) => {
      return createVNode("div", {
        "class": bem("group")
      }, [createVNode("div", {
        "class": "title"
      }, [createVNode("div", {
        "class": "lbl"
      }, [group.name])]), createVNode("div", {
        "class": "list"
      }, [createVNode("div", {
        "class": "cell"
      }, [createVNode(Field, {
        "type": "number",
        "placeholder": "最低定价",
        "inputAlign": "center",
        "modelValue": group.value.min
      }, null)]), createVNode("div", {
        "class": "cell"
      }, [createVNode(Field, {
        "type": "number",
        "placeholder": "最高定价",
        "inputAlign": "center",
        "modelValue": group.value.max
      }, null)]), group.options.map((item, index) => createVNode("div", {
        "class": `cell ${state.active[group.code] === index ? "active" : ""}`,
        "onClick": () => {
          handleCellClick(groupIndex, group.code, index);
        }
      }, [createVNode(Field, {
        "inputAlign": "center",
        "readonly": true,
        "modelValue": `${item.min}-${item.max}`
      }, null)]))])]);
    };
    const renderItem = (item, index) => {
      switch (item.code) {
        case "shopList":
          return renderShop(item, index);
        case "discountRange":
          return renderDiscount(item, index);
        case "priceRange":
          return renderPrice(item, index);
        default:
          return "";
      }
    };
    return () => {
      var _a;
      return createVNode("div", {
        "class": bem()
      }, [createVNode("span", {
        "onClick": handleClick
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), createVNode(ActionSheet, {
        "class": bem("dialog"),
        "show": state.show,
        "onClickOverlay": handleCancel,
        "closeOnClickOverlay": true,
        "onCancel": handleCancel
      }, {
        default: () => [createVNode("div", {
          "class": bem("header"),
          "onClick": handleCancel
        }, [createVNode("span", {
          "class": "title"
        }, null), createVNode(Icon, {
          "class": "icon",
          "name": "cross"
        }, null)]), state.list.map((item, index) => renderItem(item, index)), createVNode("div", {
          "class": bem("action")
        }, [createVNode(Button, {
          "class": "btn btn-reset",
          "onClick": handleReset
        }, {
          default: () => [createTextVNode("重置")]
        }), createVNode(Button, {
          "class": "btn btn-confirm",
          "onClick": handleConfirm
        }, {
          default: () => [createTextVNode("确定")]
        })])]
      })]);
    };
  }
});
export {
  FilterGoods,
  filterProps
};
