<!--
 * @Author: liyafei
 * @Date: 2022-12-21 18:09:07
 * @Description: 
-->
<template>
  <p>case:占位</p>
  <GoodsList :data="data.data" :config="data.config" @click="handleClick" />
  <p>case:2张图2列</p>
  <GoodsList :data="data2.data" :config="data2.config" @click="handleClick" />
  <p>case:4张图3列</p>
  <GoodsList :data="data3.data" :config="data3.config" @click="handleClick" />
  <p>case:5张图4列</p>
  <GoodsList :data="data4.data" :config="data4.config" @click="handleClick" />
  <p>case:5张图4列,显示3个</p>
  <GoodsList :data="data5.data" :config="data5.config" @click="handleClick" />
  <p>case:1张图1列</p>
  <GoodsList :data="data1.data" :config="data1.config" @click="handleClick"/>
  <input v-model="data1.config.limit" placeholder="请输入显示个数"/>
  <a @click="handleAdd">增加一个商品</a>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {GoodsList} from '@shopin/components';

const data = {
  data:[
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
  ],
  config: {
    cols:2
  }
}
const data1 = ref({
  data:[
    {
      "productSid": 7229261,
      "productSku": "P21067TF-2",
      "brandErpSid": "B579",
      "brandName": "帕兰朵",
      "categorySid": 1087,
      "categoryName": "保暖套装",
      "shopIds": "1004\t1010\t1011",
      "title": "帕兰朵PLANDOO 保暖套装  秋冬 保暖套装 P21067TF-2",
      "sales": 0,
      "picPath": "/1008/2018/01/27/6fe837db9fb3b4d0dd03f3d2c6090720_0.jpg",
      "promotionPrice": 109,
      "currentPrice": 109,
      "originalPrice": 398,
      "discount": "2.7386934673366836",
      "supplyIds": "103272",
      "listingTime": "2022-08-24 05:53:57",
      "picTime": "2019-09-24 07:50:45"
    },
    {
      "productSid": 7243671,
      "productSku": "X4198107",
      "brandErpSid": "B140",
      "brandName": "思凯乐",
      "categorySid": 1634,
      "categoryName": "户外休闲鞋",
      "shopIds": "1010",
      "title": "SCALER 户外  秋冬 户外休闲鞋 X4198107",
      "sales": 0,
      "picPath": "/1008/2016/09/21/f2ae932e911664de71d8120333e4d9ef_0.jpg",
      "promotionPrice": 799,
      "currentPrice": 799,
      "originalPrice": 1399,
      "discount": "5.711222301644031",
      "supplyIds": "100506",
      "listingTime": "2022-08-24 05:53:57",
      "picTime": "2013-12-31 16:00:00"
    },
    {
      "productSid": 7260991,
      "productSku": "121-90321",
      "brandErpSid": "B030",
      "brandName": "暇步士Hush Puppies",
      "categorySid": 1095,
      "categoryName": "棉袜",
      "shopIds": "1004",
      "title": "暇步士Hush Puppies 内衣多品  不分季节 棉袜 121-90321",
      "sales": 0,
      "picPath": "/1005/2016/12/14/481e40d9ee75140eef59569de3ac2d8f_0.jpg",
      "promotionPrice": 18,
      "currentPrice": 18,
      "originalPrice": 38,
      "discount": "4.7368421052631575",
      "supplyIds": "102351",
      "listingTime": "2022-08-24 05:53:57",
      "picTime": "2017-05-22 12:08:40"
    },
    {
      "productSid": 7262281,
      "productSku": "PP-1231006",
      "brandErpSid": "B030",
      "brandName": "暇步士Hush Puppies",
      "categorySid": 1094,
      "categoryName": "内裤",
      "shopIds": "1004",
      "title": "暇步士Hush Puppies 内衣多品-男士内裤-平角内裤  不分季节 内裤 PP-1231006",
      "sales": 0,
      "picPath": "/1004/2018/01/17/5ea153b208d0ace1beeefbc835e2e8e7_0.jpg",
      "promotionPrice": 119,
      "currentPrice": 119,
      "originalPrice": 238,
      "discount": "5.0",
      "supplyIds": "102351",
      "listingTime": "2022-08-24 05:53:57",
      "picTime": "2017-11-16 09:02:37"
    }
  ],
  config: {
    cols:2,
    limit:3,
    domain: 'http://images.shopin.net/images'
  }
})
const data2 = {
  data:[
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      promotionPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      promotionPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
  ],
  config: {
    cols:2
  }
}
const data3 = {
  data:[
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
  ],
  config: {
    cols:3
  }
}
const data4 = {
  data:[
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
  ],
  config: {
    cols:4
  }
}
const data5 = {
  data:[
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title:'多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img:'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
  ],
  config: {
    cols:4,
    showCount:3,
  }
}

const handleClick = (e,data) => {
  console.log('data', data)
}

const handleAdd = () => {
  data1.value.data.push({
    "productSid": 7229261,
    "productSku": "P21067TF-2",
    "brandErpSid": "B579",
    "brandName": "帕兰朵",
    "categorySid": 1087,
    "categoryName": "保暖套装",
    "shopIds": "1004\t1010\t1011",
    "title": "帕兰朵PLANDOO 保暖套装  秋冬 保暖套装 P21067TF-2",
    "sales": 0,
    "picPath": "/1008/2018/01/27/6fe837db9fb3b4d0dd03f3d2c6090720_0.jpg",
    "promotionPrice": 109,
    "currentPrice": 109,
    "originalPrice": 398,
    "discount": "2.7386934673366836",
    "supplyIds": "103272",
    "listingTime": "2022-08-24 05:53:57",
    "picTime": "2019-09-24 07:50:45"
  })

  console.log('data1', data1.value)
}


</script>

<style lang="less">
*{
    color:#000;
}
</style>