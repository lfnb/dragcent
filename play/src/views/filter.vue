<!--
 * @Author: liyafei
 * @Date: 2023-02-03 10:39:35
 * @Description: 
-->
<template>
  <p>case:</p>
  <filter-goods :data="filterData.data" :config="filterData.config" @confirm="handleConfirm">
    <van-button type="primary">筛选</van-button>
  </filter-goods>
</template>

<script setup lang="ts">
import { FilterGoods } from '@shopin/components';

const handleConfirm = (res) => {
  console.log('res',res)
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
    config: {

    }
  }

</script>

<style>
  
</style>