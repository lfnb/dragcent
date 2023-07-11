import { defineComponent, ref, watch, createVNode } from "vue";
import { createNamespace } from "../utils/create.mjs";
import { GoodsList } from "../goods-list/GoodsList.mjs";
import { Tabs } from "../tabs/Tabs.mjs";
import { Rank } from "../rank/Rank.mjs";
import "./style/index.css";
const [name, bem] = createNamespace("goods-tag");
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
const GoodsTag = /* @__PURE__ */ defineComponent({
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
    let goodsSlots = ref({});
    watch(props.data, (val) => {
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
          return createVNode("div", {
            "class": bem("goods-list-wrapper")
          }, [createVNode(GoodsList, {
            "data": item.data,
            "config": goodsConfig,
            "onClick": handleGoodsClick,
            "loading": props.loading
          }, null)]);
        };
      });
    });
    return () => {
      return createVNode("div", {
        "class": bem()
      }, [createVNode(Tabs, {
        "data": props.config.Tabs.data,
        "config": props.config.Tabs.config,
        "onTabClick": handleTabChange
      }, {
        rank: () => {
          if (props.config.Rank) {
            return createVNode("div", {
              "class": bem("rank-wrapper")
            }, [createVNode(Rank, {
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
export {
  GoodsTag,
  goodsTagProps
};
