import { defineComponent, createVNode } from "vue";
import { createNamespace } from "../utils/create.mjs";
import "./style/index.css";
import { Icon } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/icon/index.mjs";
const [name, bem] = createNamespace("coupon");
const useImg = "https://shopin-cms.oss-cn-beijing.aliyuncs.com/miniapp/coupon-used.png";
const couponProps = {
  name: {
    type: String,
    default: "优惠券"
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
const Coupon = /* @__PURE__ */ defineComponent({
  name,
  type: "Coupon",
  props: couponProps,
  emits: ["click"],
  setup(props, {
    emit,
    attrs,
    slots
  }) {
    const handleClick = (event, item) => {
      emit("click", event, item);
    };
    return () => {
      const imgEle = props.data.map((item) => {
        const style = {
          width: `${100 / props.data.length}%`,
          ...props.config.style
        };
        const img = item.img ? createVNode("div", {
          "class": bem("box")
        }, [createVNode("img", {
          "class": bem("img"),
          "src": item.img,
          "alt": item.alt
        }, null), item.received ? createVNode("img", {
          "class": bem("received"),
          "src": useImg
        }, null) : ""]) : createVNode("div", {
          "class": bem("img-placeholder")
        }, [createVNode(Icon, {
          "name": "coupon-o"
        }, null)]);
        return createVNode("div", {
          "class": "img-wrap",
          "style": style,
          "onClick": (e) => handleClick(e, item)
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
  Coupon,
  couponProps
};
