import { defineComponent, createVNode } from "vue";
import { createNamespace } from "../utils/create.mjs";
import "./style/index.css";
import { Icon } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/icon/index.mjs";
const [name, bem] = createNamespace("image");
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
const Image = /* @__PURE__ */ defineComponent({
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
        const img = item.img ? createVNode("img", {
          "class": bem("img"),
          "src": item.img,
          "alt": item.alt
        }, null) : createVNode("div", {
          "class": bem("img-placeholder")
        }, [createVNode(Icon, {
          "name": "photo-o"
        }, null)]);
        return createVNode("div", {
          "class": bem("wrap"),
          "style": style,
          "onClick": (e) => {
            handleClick(e, item);
          }
        }, [img]);
      });
      const main = createVNode("div", {
        "class": bem()
      }, [imgEle]);
      return main;
    };
  }
});
export {
  Image,
  imageProps
};
