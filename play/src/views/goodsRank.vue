<!--
 * @Author: liyafei
 * @Date: 2023-02-03 10:39:35
 * @Description: 
-->
<template>
    <goods-rank :data="goodsTagData.data" :config="goodsTagData.config" @update="handleRankClick" @click="handleGoodsClick"
        :loading="loading" />
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { GoodsRank } from '@shopin/components';


const goodsData = [
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

const handleRankClick = (data: any) => {
    // loading.value = true;
    goodsTagData.value.data.splice(0, goodsTagData.value.data.length)
    setTimeout(() => {
        goodsTagData.value.data.splice(0, 0, ...goodsData)
        // loading.value = false;
    }, 1000)
}
const handleGoodsClick = (e: MouseEvent, data: any) => {
    console.log('Goods-click', data);
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
    config: {
        sticky:true
    }
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
})


</script>

<style></style>