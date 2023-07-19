"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const create = require("../utils/create.js");
require("./style/index.css");
const index$1 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/list/index.js");
const index$2 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/empty/index.js");
const index$3 = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/loading/index.js");
const index = require("../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/icon/index.js");
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
}
const [name, bem] = create.createNamespace("goods-list");
const goodsListProps = {
  name: {
    type: String,
    default: "商品列表"
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
      cols: 1,
      limit: 1
    }
  }
};
const GoodsList = /* @__PURE__ */ vue.defineComponent({
  name,
  type: "GoodsList",
  props: goodsListProps,
  emits: ["click"],
  setup(props, {
    attrs,
    slots,
    emit
  }) {
    var _a;
    const list = vue.ref(props.data);
    const showCount = ((_a = props.config) == null ? void 0 : _a.limit) ? props.config.limit : props.data.length;
    const refShowCount = vue.ref(showCount);
    const showData = vue.ref(list.value.slice(0, refShowCount.value));
    vue.watch(props.data, (newValue, oldValue) => {
      var _a2;
      list.value = newValue;
      refShowCount.value = ((_a2 = props.config) == null ? void 0 : _a2.limit) ? props.config.limit : newValue.length;
      showData.value = newValue.slice(0, refShowCount.value);
    });
    vue.watch(() => props.config.limit, (newValue) => {
      refShowCount.value = newValue;
      showData.value = list.value.slice(0, newValue);
    });
    const handleClick = (e, data) => {
      emit("click", e, data);
    };
    return () => {
      const listEle = [];
      let cells = [];
      let rowIndex = 1;
      showData.value.forEach((item, index$12) => {
        item.img = item.picPath ? props.config.domain + item.picPath : item.img;
        const detailEle = vue.createVNode("div", {
          "class": bem("detail"),
          "style": {
            width: `calc(${100 / props.config.cols}% - 10px)`
          },
          "onClick": (e) => handleClick(e, {
            ...item
          })
        }, [item.img ? vue.createVNode("img", {
          "class": "img",
          "src": item.img
        }, null) : vue.createVNode("div", {
          "class": "img-placeholder"
        }, [vue.createVNode(index.Icon, {
          "name": "bag-o"
        }, null)]), vue.createVNode("div", {
          "class": "title"
        }, [vue.createVNode("span", {
          "class": "discount"
        }, [(item.discount * 1).toFixed(1), vue.createTextVNode("折")]), item.title]), vue.createVNode("div", {
          "class": "price"
        }, [vue.createVNode("span", {
          "class": "cur"
        }, [vue.createTextVNode("¥"), item.promotionPrice]), vue.createVNode("span", {
          "class": "strike"
        }, [vue.createTextVNode("¥"), item.originalPrice])])]);
        cells.push(detailEle);
        if (index$12 + 1 === showData.value.length || index$12 + 1 === rowIndex * props.config.cols) {
          const rowEle = vue.createVNode("div", {
            "class": bem("row")
          }, [cells]);
          listEle.push(rowEle);
          cells = [];
          rowIndex++;
        }
      });
      const main = vue.createVNode("div", {
        "class": bem()
      }, [listEle.length > 0 ? vue.createVNode(index$1.List, {
        "finished-text": "没有更多了"
      }, _isSlot(listEle) ? listEle : {
        default: () => [listEle]
      }) : vue.createVNode(index$2.Empty, null, {
        default: () => [vue.createTextVNode("没找到您要的内容")]
      }), props.loading && vue.createVNode("div", {
        "class": bem("loading")
      }, [vue.createVNode(index$3.Loading, {
        "size": "20",
        "color": "#fff",
        "vertical": true
      }, {
        default: () => [vue.createTextVNode("加载中...")]
      })])]);
      return main;
    };
  }
});
exports.GoodsList = GoodsList;
exports.goodsListProps = goodsListProps;
