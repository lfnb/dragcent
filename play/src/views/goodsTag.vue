<!--
 * @Author: liyafei
 * @Date: 2023-02-03 10:39:35
 * @Description: 
-->
<template>
  <p>case:左侧</p>
    <goods-tag :data="goodsTagData1.data" :config="goodsTagData1.config" @update="handleTabClick" @click="handleGoodsClick" :loading="loading" />
  <p>case:在上面</p>
  <!-- <van-field label="商品列数" v-model="goodsTagData.config.GoodsList.config.cols"></van-field> -->
  <van-checkbox v-model="hasRank" shape="square" @change="handleChangeHasRank">是否包含排序组件</van-checkbox>
  <van-checkbox v-model="hasFilter" shape="square" @change="handleChangeHasFilter">是否包含筛选组件</van-checkbox>
  <goods-tag :data="goodsTagData.data" :config="goodsTagData.config" @update="handleTabClick" @click="handleGoodsClick" :loading="loading" />
</template>

<script setup lang="ts">
import {ref,reactive,computed} from 'vue';
import { GoodsTag, ETabsPosition } from '@moz/components';


const goodsData = [
  {
    name:'运动裤',
    data:[
      {
        productId: "14723312",// 商品id
        title: '运动裤-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
      {
        productId: "14723312",// 商品id
        title: '运动裤-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
      {
        productId: "14723312",// 商品id
        title: '运动裤-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
      {
        productId: "14723312",// 商品id
        title: '运动裤-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
      {
        productId: "14723312",// 商品id
        title: '运动裤-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
      {
        productId: "14723312",// 商品id
        title: '运动裤-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
    ]
  },
  {
    name: '运动鞋',
    data:[
      {
        productId: "14723312",// 商品id
        title: '运动鞋-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
      {
        productId: "14723312",// 商品id
        title: '运动鞋-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
      {
        productId: "14723312",// 商品id
        title: '运动鞋-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
      {
        productId: "14723312",// 商品id
        title: '运动鞋-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
    ]
  },
  {
    name:'外套',
    data:[
      {
        productId: "14723312",// 商品id
        title: '外套-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
      {
        productId: "14723312",// 商品id
        title: '外套-多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
        img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
        currentPrice: 780, //现价
        discount: 0.33, // 折扣
        originalPrice: 2350, // 原价
        productSku: "XTR12502", //商品sku
        supplySid: "103537", // 供应商Id
      },
    ]
  }
]

const goodsData1 = [
  {
    "data": [
      {
        "brandErpId": "B140",
        "currentPrice": 799,
        "discount": 0.57,
        "originalPrice": 1399,
        "picture": "/1008/2016/09/21/f2ae932e911664de71d8120333e4d9ef_0.jpg",
        "productId": "7243671",
        "productSku": "X4198107",
        "promotionPrice": 799,
        "supplySid": "100506",
        "title": "SCALER 户外  秋冬 户外休闲鞋 X4198107",
        "picPath": "/1008/2016/09/21/f2ae932e911664de71d8120333e4d9ef_0.jpg"
      },
      {
        "brandErpId": "B579",
        "currentPrice": 109,
        "discount": 0.27,
        "originalPrice": 398,
        "picture": "/1008/2018/01/27/6fe837db9fb3b4d0dd03f3d2c6090720_0.jpg",
        "productId": "7229261",
        "productSku": "P21067TF-2",
        "promotionPrice": 109,
        "supplySid": "103272",
        "title": "帕兰朵PLANDOO 保暖套装  秋冬 保暖套装 P21067TF-2",
        "picPath": "/1008/2018/01/27/6fe837db9fb3b4d0dd03f3d2c6090720_0.jpg"
      }
    ]
  },
  {
    "data": [
      {
        "brandErpId": "B030",
        "currentPrice": 119,
        "discount": 0.5,
        "originalPrice": 238,
        "picture": "/1004/2018/01/17/5ea153b208d0ace1beeefbc835e2e8e7_0.jpg",
        "productId": "7262281",
        "productSku": "PP-1231006",
        "promotionPrice": 119,
        "supplySid": "102351",
        "title": "暇步士Hush Puppies 内衣多品-男士内裤-平角内裤  不分季节 内裤 PP-1231006",
        "picPath": "/1004/2018/01/17/5ea153b208d0ace1beeefbc835e2e8e7_0.jpg"
      }
    ]
  },
  {
    "data": [
      {
        "brandErpId": "B030",
        "currentPrice": 18,
        "discount": 0.47,
        "originalPrice": 38,
        "picture": "/1005/2016/12/14/481e40d9ee75140eef59569de3ac2d8f_0.jpg",
        "productId": "7260991",
        "productSku": "121-90321",
        "promotionPrice": 18,
        "supplySid": "102351",
        "title": "暇步士Hush Puppies 内衣多品  不分季节 棉袜 121-90321",
        "picPath": "/1005/2016/12/14/481e40d9ee75140eef59569de3ac2d8f_0.jpg"
      }
    ]
  }
]

const handleTabClick = (data:any) => {
  // loading.value = true;
  goodsTagData.value.data.splice(0, goodsTagData.value.data.length)
  setTimeout(() => {
    goodsTagData.value.data.splice(0, 0, ...goodsData1)
    // loading.value = false;
  }, 1000)
}
const handleGoodsClick = (e:MouseEvent ,data:any) => {
  console.log('Goods-click',data);
}

const hasRank = ref(true)
const hasFilter = ref(true)
const loading = ref(false);

const rankData = {
  data: [
    {
      list: [
        {
          name: '综合',
          code: 'default',
          params: {
            orderField: "",
            orderBy: ""
              }
        }
      ]
    },
    {
      name: '时间',
      code: 'time',
      params: {
        orderField: "createDate",
        orderBy: ""
          }
    },
    {
      name: '价格',
      code: 'price',
      params: {
        orderField: "price",
        orderBy: ""
          }
    },
    {
      name: '筛选',
      code: 'filter',
      params: {
        show: true
      }
    }
  ],
  config: { }
}

const filterData = {
  data: [
    {
      name: '出货门店',
      code: 'shopList',
      options: [
        {
          name: '草桥店',
          code: '1001',
        }
      ],
      value: {},
    },
    {
      name: '折扣区间',
      code: 'discountRange',
      options: [
        { min: '0.1', max: '3.0' },
        { min: '3.0', max: '5.0' }
      ],
      value: {}
    },
    {
      name: '价格区间',
      code: 'priceRange',
      options: [
        { min: 0, max: 99 },
        { min: 100, max: 199 },
      ],
      value: {}
    }
  ],
  config: {}
}

const goodsTagData = ref({
  data: [],
  config: {
    Tabs: {
      data: [
        {
          name: '运动裤',
        },
        {
          name: '运动鞋'
        },
        {
          name: '外套'
        },
      ],
      config: {
        // position: ETabsPosition.TOP
      }
    },
    Rank: rankData,
    Filter: filterData,
    GoodsList: {
      config: {
        cols: 2
      }
    }
  }
})
const goodsTagData1 = ref({
  data: [],
  config: {
    Tabs: {
      data: [
        {
          name: '运动裤22',
          params: {
            limit: 3
          }
        },
        {
          name: '运动鞋'
        },
        {
          name: '外套'
        },
      ],
      config: {
        position: ETabsPosition.LEFT,
        sticky: true,
      }
    },
    Rank: rankData,
    Filter: filterData,
    GoodsList: {
      config: {
        cols: 2
      }
    }
  }
})
setTimeout(() => {
  goodsTagData.value.data.splice(0, goodsTagData.value.data.length)
  goodsTagData.value.data.splice(0, 0, ...goodsData)
  goodsTagData1.value.data.splice(0, goodsTagData.value.data.length)
  goodsTagData1.value.data.splice(0, 0, ...goodsData)
})

const handleChangeHasRank =  (val:boolean) => {
  console.log('handleChangeHasRank', val)
  if(!val) {
    delete goodsTagData.config.Rank;
  }
  else {
    goodsTagData.config.Rank = rankData;
  }
}
const handleChangeHasFilter =  (val:boolean) => {
  const index = goodsTagData.value.config.Rank.data.length - 1;
  if(!val) {
    goodsTagData.value.config.Rank.data[index].params.show = false;
  }
  else {
    goodsTagData.value.config.Rank.data[index].params.show = true;
  }
}

</script>

<style>

</style>