"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const create = require("../utils/create.js");
const GoodsList = require("../goods-list/GoodsList.js");
const Tabs = require("../tabs/Tabs.js");
const Rank = require("../rank/Rank.js");
require("./style/index.css");
const [name, bem] = create.createNamespace("goods-tag");
const goodsTagProps = {
  name: {
    type: String,
    default: "goodsTag"
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
    default: {}
  }
};
const GoodsTag = /* @__PURE__ */ vue.defineComponent({
  name,
  type: "GoodsTag",
  props: goodsTagProps,
  emits: ["update", "click"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const data = {};
    const handleTabChange = (item) => {
      data.tab = item;
      emit("update", data);
    };
    const handleRank = (item) => {
      Object.assign(data, item);
      emit("update", data);
    };
    const handleGoodsClick = (e, item) => {
      emit("click", e, item);
    };
    let goodsSlots = vue.ref({});
    vue.watch(props.data, (val) => {
      if (val.length === 0)
        return;
      props.data.forEach((item, index) => {
        goodsSlots.value[`goodsRender${index}`] = () => {
          const params = props.config.Tabs.data[index].params;
          const limit = (params == null ? void 0 : params.limit) ? params.limit : void 0;
          const goodsConfig = {
            ...props.config.GoodsList.config,
            limit
          };
          return vue.createVNode("div", {
            "class": bem("goods-list-wrapper")
          }, [vue.createVNode(GoodsList.GoodsList, {
            "data": item.data,
            "config": goodsConfig,
            "onClick": handleGoodsClick,
            "loading": props.loading
          }, null)]);
        };
      });
    });
    return () => {
      return vue.createVNode("div", {
        "class": bem()
      }, [vue.createVNode(Tabs.Tabs, {
        "data": props.config.Tabs.data,
        "config": props.config.Tabs.config,
        "onTabClick": handleTabChange
      }, {
        rank: () => {
          if (props.config.Rank) {
            return vue.createVNode("div", {
              "class": bem("rank-wrapper")
            }, [vue.createVNode(Rank.Rank, {
              "data": props.config.Rank.data,
              "config": {
                ...props.config.Rank.config,
                filter: props.config.Filter
              },
              "onClick": handleRank
            }, null)]);
          }
          return null;
        },
        ...goodsSlots.value
      })]);
    };
  }
});
exports.GoodsTag = GoodsTag;
exports.goodsTagProps = goodsTagProps;
