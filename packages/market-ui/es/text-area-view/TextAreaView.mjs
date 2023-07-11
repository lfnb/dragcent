import { defineComponent, createVNode, createTextVNode, mergeProps } from "vue";
import { createNamespace } from "../utils/create.mjs";
import "./style/index.css";
const [name, bem] = createNamespace("textarea-view");
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
const TextAreaView = /* @__PURE__ */ defineComponent({
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
          return createVNode("div", {
            "class": bem("html-item-empty")
          }, [createTextVNode("空")]);
        }
        return createVNode("div", {
          "class": bem("html-item"),
          "innerHTML": item.htmlContent
        }, null);
      });
      const main = createVNode("div", {
        "class": bem()
      }, [createVNode("div", mergeProps({
        "class": bem("html-list")
      }, props.config), [htmlContentList])]);
      return main;
    };
  }
});
export {
  TextAreaView,
  textAreaViewProps
};
