"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const create = require("../utils/create.js");
require("./style/index.css");
const index = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/icon/index.js");
const [name, bem] = create.createNamespace("coupon-pack");
const useImg = "https://shopin-cms.oss-cn-beijing.aliyuncs.com/miniapp/coupon-used.png";
const couponPackProps = {
  name: {
    type: String,
    default: "优惠券包"
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
const CouponPack = /* @__PURE__ */ vue.defineComponent({
  name,
  type: "Coupon",
  props: couponPackProps,
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
        const img = item.img ? vue.createVNode("div", {
          "class": bem("box")
        }, [vue.createVNode("img", {
          "class": bem("img"),
          "src": item.img,
          "alt": item.alt
        }, null), item.received ? vue.createVNode("img", {
          "class": bem("received"),
          "src": useImg
        }, null) : ""]) : vue.createVNode("div", {
          "class": bem("img-placeholder")
        }, [vue.createVNode(index.Icon, {
          "name": "gift-card-o"
        }, null)]);
        return vue.createVNode("div", {
          "class": "img-wrap",
          "style": style,
          "onClick": (e) => handleClick(e, item)
        }, [img]);
      });
      const main = vue.createVNode("div", {
        "class": bem()
      }, [imgEle]);
      return main;
    };
  }
});
exports.CouponPack = CouponPack;
exports.couponPackProps = couponPackProps;
