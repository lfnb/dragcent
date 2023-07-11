"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const create = require("../utils/create.js");
const GoodsList = require("../goods-list/GoodsList.js");
const Rank = require("../rank/Rank.js");
require("./style/index.css");
const index = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/sticky/index.js");
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
}
const [name, bem] = create.createNamespace("goods-rank");
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
const GoodsRank = /* @__PURE__ */ vue.defineComponent({
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
    const refTabs = vue.ref();
    const handleRank = (item) => {
      Object.assign(data, item);
      emit("update", data);
    };
    const handleGoodsClick = (e, item) => {
      emit("click", e, item);
    };
    const rankEle = vue.createVNode(Rank.Rank, {
      "data": props.config.Rank.data,
      "config": {
        ...props.config.Rank.config,
        filter: props.config.Filter
      },
      "onClick": handleRank
    }, null);
    return () => {
      return vue.createVNode("div", {
        "ref": refTabs,
        "class": bem()
      }, [props.config.Rank.config.sticky ? vue.createVNode(index.Sticky, {
        "container": refTabs.value
      }, _isSlot(rankEle) ? rankEle : {
        default: () => [rankEle]
      }) : rankEle, vue.createVNode("div", {
        "class": bem("goods-list-wrapper")
      }, [vue.createVNode(GoodsList.GoodsList, {
        "data": props.data,
        "config": props.config.GoodsList.config,
        "onClick": handleGoodsClick,
        "loading": props.loading
      }, null)])]);
    };
  }
});
exports.GoodsRank = GoodsRank;
exports.goodsRankProps = goodsRankProps;
