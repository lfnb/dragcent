"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const create = require("../utils/create.js");
require("./style/index.css");
const index = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/icon/index.js");
const [name, bem] = create.createNamespace("image");
const imageProps = {
  name: {
    type: String,
    default: "图片"
  },
  data: {
    type: Array,
    default: []
  },
  config: {
    type: Object,
    default: {
      cols: 1
    }
  }
};
const Image = /* @__PURE__ */ vue.defineComponent({
  name,
  type: "Image",
  props: imageProps,
  emits: ["click"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const handleClick = (e, item) => {
      emit("click", e, item);
    };
    return () => {
      const imgEle = props.data.map((item) => {
        const style = {
          width: `${100 / props.data.length}%`,
          ...props.config.style
        };
        const img = item.img ? vue.createVNode("img", {
          "class": bem("img"),
          "src": item.img,
          "alt": item.alt
        }, null) : vue.createVNode("div", {
          "class": bem("img-placeholder")
        }, [vue.createVNode(index.Icon, {
          "name": "photo-o"
        }, null)]);
        return vue.createVNode("div", {
          "class": bem("wrap"),
          "style": style,
          "onClick": (e) => {
            handleClick(e, item);
          }
        }, [img]);
      });
      const main = vue.createVNode("div", {
        "class": bem()
      }, [imgEle]);
      return main;
    };
  }
});
exports.Image = Image;
exports.imageProps = imageProps;
