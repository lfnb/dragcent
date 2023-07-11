import { defineComponent, ref, createVNode, isVNode } from "vue";
import { createNamespace } from "../utils/create.mjs";
import { GoodsList } from "../goods-list/GoodsList.mjs";
import { Rank } from "../rank/Rank.mjs";
import "./style/index.css";
import { Sticky } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/sticky/index.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const [name, bem] = createNamespace("goods-rank");
const goodsRankProps = {
  name: {
    type: String,
    default: "goodsRank"
  },
  loading: {
    type: Boolean,
    default: false
  },
  data: {
    type: Array,
    default: []
  },
  config: {
    type: Object,
    default: {
      sticky: true
    }
  }
};
const GoodsRank = /* @__PURE__ */ defineComponent({
  name,
  type: "GoodsTag",
  props: goodsRankProps,
  emits: ["update", "click"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const data = {};
    const refTabs = ref();
    const handleRank = (item) => {
      Object.assign(data, item);
      emit("update", data);
    };
    const handleGoodsClick = (e, item) => {
      emit("click", e, item);
    };
    const rankEle = createVNode(Rank, {
      "data": props.config.Rank.data,
      "config": {
        ...props.config.Rank.config,
        filter: props.config.Filter
      },
      "onClick": handleRank
    }, null);
    return () => {
      return createVNode("div", {
        "ref": refTabs,
        "class": bem()
      }, [props.config.Rank.config.sticky ? createVNode(Sticky, {
        "container": refTabs.value
      }, _isSlot(rankEle) ? rankEle : {
        default: () => [rankEle]
      }) : rankEle, createVNode("div", {
        "class": bem("goods-list-wrapper")
      }, [createVNode(GoodsList, {
        "data": props.data,
        "config": props.config.GoodsList.config,
        "onClick": handleGoodsClick,
        "loading": props.loading
      }, null)])]);
    };
  }
});
export {
  GoodsRank,
  goodsRankProps
};
