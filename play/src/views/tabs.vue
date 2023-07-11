<!--
 * @Author: liyafei
 * @Date: 2023-02-03 10:39:35
 * @Description: 
-->
<template>
  <p>case:在上面</p>
  <tabs :data="tabData.data" @tabClick="handleTabClick">
    <template #rank>
      <Rank :data="rankData.data" :config="rankData.config" @tabClick="handleTabClick" />
    </template>
  </tabs>
  <p>case:包含滚动</p>
  <tabs :data="tabData4.data" @tabClick="handleTabClick">
    <template #rank>
      <Rank :data="rankData.data" :config="rankData.config" @tabClick="handleTabClick" />
    </template>
  </tabs>
  <p>case:在下面</p>
  <tabs :data="tabData3.data" :config="tabData3.config">
    <template #rank>
      <Rank :data="rankData.data" :config="rankData.config" />
    </template>
  </tabs>
  <p>case:在左侧</p>
  <tabs :data="tabData1.data" :config="tabData1.config" @tabClick="handleTabClick">
    <template #rank>
      <Rank :data="rankData.data" :config="rankData.config" />
    </template>
    <GoodsList :data="goodsData.data" :config="goodsData.config"/>
  </tabs>
  <p>case:在右侧</p>
  <tabs :data="tabData2.data" :config="tabData2.config" @tabClick="handleTabClick">
    <template #rank>
      <Rank :data="rankData.data" :config="rankData.config" />
    </template>
    <GoodsList :data="goodsData.data" :config="goodsData.config" />
  </tabs>
</template>

<script setup lang="ts">
import { Tabs, ETabsPosition,Rank,GoodsList } from '@moz/components';

const handleTabClick = (data) => {
  console.log('data',data);
}

const tabData = {
  data: [
    {
      name:'运动裤'
    },
    {
      name:'运动鞋'
    },
    {
      name:'日用化妆'
    },
    {
      name: '外套'
    },
  ],
  config: {
    
  }
}
const tabData4 = {
  data: [
    {
      name:'运动裤'
    },
    {
      name:'运动鞋'
    },
    {
      name:'日用化妆'
    },
    {
      name: '外套'
    },
    {
      name: '上衣'
    },
    {
      name: '外套'
    },
    {
      name: '春装'
    },
    {
      name: '夏装'
    },
  ],
  config: {
    
  }
}
const tabData1 = {
  data: [
    {
      name:'运动裤'
    },
    {
      name:'运动鞋'
    },
    {
      name: '日用化妆'
    },
    {
      name: '外套'
    },
  ],
  config: {
    position: ETabsPosition.LEFT,
    sticky:true,
  }
}
const tabData2 = {
  data: [
    {
      name:'运动裤'
    },
    {
      name:'运动鞋'
    },
    {
      name: '外套'
    },
  ],
  config: {
    position: ETabsPosition.RIGHT,
    sticky: true,
  }
}
const tabData3 = {
  data: [
    {
      name:'运动裤'
    },
    {
      name:'运动鞋'
    },
    {
      name: '外套'
    },
  ],
  config: {
    position: ETabsPosition.BOTTOM,
  }
}

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
  config: {
    filter: {
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
  }
}

const goodsData = {
  data: [
    {
      productId: "14723312",// 商品id
      title: '多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title: '多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title: '多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title: '多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title: '多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title: '多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title: '多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title: '多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
    {
      productId: "14723312",// 商品id
      title: '多样屋TAYOHYA家居 厨房用品 爵西餐具餐勺-银色 TA030103140ZZ', // 商品名称
      img: 'http://images.shopin.net/images/1000/2022/12/07/ba375cfe564532934cc576059c91012b_0.jpg',
      currentPrice: 780, //现价
      discount: 0.33, // 折扣
      originalPrice: 2350, // 原价
      productSku: "XTR12502", //商品sku
      supplySid: "103537", // 供应商Id
    },
  ],
  config:{
    cols:2
  }
}

</script>

<style>
#app{
  background: #eaeaea;
}
</style>