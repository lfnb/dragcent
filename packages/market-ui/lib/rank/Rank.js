"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const create = require("../utils/create.js");
const types = require("./types.js");
const FilterGoods = require("../filter/FilterGoods.js");
require("./style/index.css");
const index = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/icon/index.js");
const [name, bem] = create.createNamespace("rank");
const rankProps = {
  name: {
    type: String,
    default: "rank"
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
const Rank = /* @__PURE__ */ vue.defineComponent({
  name,
  type: "Rank",
  props: rankProps,
  emits: ["click"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    var _a;
    const state = vue.reactive({
      activeItem: (_a = props.data[0].list) == null ? void 0 : _a[0],
      list: props.data
    });
    const data = {};
    const handleClick = (item) => {
      if (item.code === "filter")
        return;
      if (item.code !== "default") {
        if (!item.params.orderBy) {
          item.params.orderBy = types.EOrderBy.DESC;
        } else if (item.code !== "default" && item.params.orderBy === types.EOrderBy.ASC) {
          item.params.orderBy = types.EOrderBy.DESC;
        } else if (item.code !== "default" && item.params.orderBy === types.EOrderBy.DESC) {
          item.params.orderBy = types.EOrderBy.ASC;
        }
      }
      data.rank = item;
      emit("click", data);
      state.activeItem = item;
    };
    const handleFilter = (item) => {
      data.filter = item;
      emit("click", data);
    };
    return () => {
      const items = state.list.map((item) => {
        var _a2, _b, _c;
        if (item.list) {
          return vue.createVNode("div", {
            "class": `${bem("cell")} ${item.list[0].code === state.activeItem.code ? "active" : ""}`,
            "onClick": () => {
              var _a3;
              handleClick((_a3 = item.list) == null ? void 0 : _a3[0]);
            }
          }, [vue.createVNode("span", {
            "class": "txt"
          }, [item.list[0].name])]);
        }
        return item.code !== "filter" ? vue.createVNode("div", {
          "class": `${bem("cell")} ${item.code === state.activeItem.code ? "active" : ""}`,
          "onClick": () => {
            handleClick(item);
          }
        }, [vue.createVNode("span", {
          "class": "txt"
        }, [item.name]), vue.createVNode("div", {
          "class": `${bem("icon")} ${item.params.orderBy}`
        }, null)]) : item.params.show && vue.createVNode("div", {
          "class": bem("cell"),
          "onClick": () => {
            handleClick(item);
          }
        }, [vue.createVNode(FilterGoods.FilterGoods, {
          "data": (_a2 = props.config.filter) == null ? void 0 : _a2.data,
          "config": (_c = (_b = props.config) == null ? void 0 : _b.filter) == null ? void 0 : _c.config,
          "onConfirm": handleFilter
        }, {
          default: () => [vue.createVNode("span", {
            "class": "txt"
          }, [item.name]), vue.createVNode(index.Icon, {
            "class": bem("vant-icon"),
            "name": "filter-o"
          }, null)]
        })]);
      });
      return vue.createVNode("div", {
        "class": bem()
      }, [items]);
    };
  }
});
exports.Rank = Rank;
exports.rankProps = rankProps;
