"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const create = require("../utils/create.js");
require("./style/index.css");
const index$1 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/swipe-item/index.js");
const index$2 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/swipe/index.js");
const index = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/icon/index.js");
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
}
const [name, bem] = create.createNamespace("banner");
const bannerProps = {
  name: {
    type: String,
    default: "banner"
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
const Banner = /* @__PURE__ */ vue.defineComponent({
  name,
  type: "Banner",
  props: bannerProps,
  emits: ["click"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const handleClick = (event, item) => {
      emit("click", event, item);
    };
    return () => {
      const swipeItems = props.data.map((item, index$22) => {
        const img = item.img ? vue.createVNode("img", {
          "class": bem("img"),
          "src": item.img,
          "alt": item.alt
        }, null) : vue.createVNode("div", {
          "class": bem("img-placeholder")
        }, [vue.createVNode(index.Icon, {
          "name": "flower-o"
        }, null)]);
        return vue.createVNode(index$1.SwipeItem, {
          "key": index$22
        }, {
          default: () => [vue.createVNode("div", {
            "class": "wrap",
            "onClick": (e) => handleClick(e, item)
          }, [img])]
        });
      });
      const main = vue.createVNode("div", {
        "class": bem()
      }, [vue.createVNode(index$2.Swipe, props.config, _isSlot(swipeItems) ? swipeItems : {
        default: () => [swipeItems]
      })]);
      return main;
    };
  }
});
exports.Banner = Banner;
exports.bannerProps = bannerProps;
