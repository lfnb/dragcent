"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const create = require("../utils/create.js");
require("./style/index.css");
const [name, bem] = create.createNamespace("textarea-view");
const textAreaViewProps = {
  name: {
    type: String,
    default: "TextAreaView"
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
const TextAreaView = /* @__PURE__ */ vue.defineComponent({
  name,
  type: "TextAreaView",
  props: textAreaViewProps,
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    return () => {
      const htmlContentList = props.data.map((item, index) => {
        if (!item.htmlContent) {
          return vue.createVNode("div", {
            "class": bem("html-item-empty")
          }, [vue.createTextVNode("空")]);
        }
        return vue.createVNode("div", {
          "class": bem("html-item"),
          "innerHTML": item.htmlContent
        }, null);
      });
      const main = vue.createVNode("div", {
        "class": bem()
      }, [vue.createVNode("div", vue.mergeProps({
        "class": bem("html-list")
      }, props.config), [htmlContentList])]);
      return main;
    };
  }
});
exports.TextAreaView = TextAreaView;
exports.textAreaViewProps = textAreaViewProps;
