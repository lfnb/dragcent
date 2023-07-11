import { defineComponent, createVNode, isVNode } from "vue";
import { createNamespace } from "../utils/create.mjs";
import "./style/index.css";
import { SwipeItem } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/swipe-item/index.mjs";
import { Swipe } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/swipe/index.mjs";
import { Icon } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/icon/index.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const [name, bem] = createNamespace("banner");
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
const Banner = /* @__PURE__ */ defineComponent({
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
      const swipeItems = props.data.map((item, index) => {
        const img = item.img ? createVNode("img", {
          "class": bem("img"),
          "src": item.img,
          "alt": item.alt
        }, null) : createVNode("div", {
          "class": bem("img-placeholder")
        }, [createVNode(Icon, {
          "name": "flower-o"
        }, null)]);
        return createVNode(SwipeItem, {
          "key": index
        }, {
          default: () => [createVNode("div", {
            "class": "wrap",
            "onClick": (e) => handleClick(e, item)
          }, [img])]
        });
      });
      const main = createVNode("div", {
        "class": bem()
      }, [createVNode(Swipe, props.config, _isSlot(swipeItems) ? swipeItems : {
        default: () => [swipeItems]
      })]);
      return main;
    };
  }
});
export {
  Banner,
  bannerProps
};
