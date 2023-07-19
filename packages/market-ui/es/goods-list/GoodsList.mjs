import { defineComponent, ref, watch, createVNode, createTextVNode, isVNode } from "vue";
import { createNamespace } from "../utils/create.mjs";
import "./style/index.css";
import { List } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/list/index.mjs";
import { Empty } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/empty/index.mjs";
import { Loading } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/loading/index.mjs";
import { Icon } from "../node_modules/.pnpm/vant@4.0.3_vue@3.2.36/node_modules/vant/es/icon/index.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const [name, bem] = createNamespace("goods-list");
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
const GoodsList = /* @__PURE__ */ defineComponent({
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
    const list = ref(props.data);
    const showCount = ((_a = props.config) == null ? void 0 : _a.limit) ? props.config.limit : props.data.length;
    const refShowCount = ref(showCount);
    const showData = ref(list.value.slice(0, refShowCount.value));
    watch(props.data, (newValue, oldValue) => {
      var _a2;
      list.value = newValue;
      refShowCount.value = ((_a2 = props.config) == null ? void 0 : _a2.limit) ? props.config.limit : newValue.length;
      showData.value = newValue.slice(0, refShowCount.value);
    });
    watch(() => props.config.limit, (newValue) => {
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
      showData.value.forEach((item, index) => {
        item.img = item.picPath ? props.config.domain + item.picPath : item.img;
        const detailEle = createVNode("div", {
          "class": bem("detail"),
          "style": {
            width: `calc(${100 / props.config.cols}% - 10px)`
          },
          "onClick": (e) => handleClick(e, {
            ...item
          })
        }, [item.img ? createVNode("img", {
          "class": "img",
          "src": item.img
        }, null) : createVNode("div", {
          "class": "img-placeholder"
        }, [createVNode(Icon, {
          "name": "bag-o"
        }, null)]), createVNode("div", {
          "class": "title"
        }, [createVNode("span", {
          "class": "discount"
        }, [(item.discount * 1).toFixed(1), createTextVNode("折")]), item.title]), createVNode("div", {
          "class": "price"
        }, [createVNode("span", {
          "class": "cur"
        }, [createTextVNode("¥"), item.promotionPrice]), createVNode("span", {
          "class": "strike"
        }, [createTextVNode("¥"), item.originalPrice])])]);
        cells.push(detailEle);
        if (index + 1 === showData.value.length || index + 1 === rowIndex * props.config.cols) {
          const rowEle = createVNode("div", {
            "class": bem("row")
          }, [cells]);
          listEle.push(rowEle);
          cells = [];
          rowIndex++;
        }
      });
      const main = createVNode("div", {
        "class": bem()
      }, [listEle.length > 0 ? createVNode(List, {
        "finished-text": "没有更多了"
      }, _isSlot(listEle) ? listEle : {
        default: () => [listEle]
      }) : createVNode(Empty, null, {
        default: () => [createTextVNode("没找到您要的内容")]
      }), props.loading && createVNode("div", {
        "class": bem("loading")
      }, [createVNode(Loading, {
        "size": "20",
        "color": "#fff",
        "vertical": true
      }, {
        default: () => [createTextVNode("加载中...")]
      })])]);
      return main;
    };
  }
});
export {
  GoodsList,
  goodsListProps
};
