<!--
 * @Author: liyafei
 * @Date: 2023-02-03 10:39:35
 * @Description: 
-->
<template>
  <p>case: 包含筛选</p>
  <rank :data="rankData.data" :config="rankData.config" />
  <p>case: 不含筛选</p>
  <rank :data="rankData1.data" :config="rankData1.config" />
</template>

<script setup lang="ts">
import { Rank } from '@shopin/components';

const rankData = {
  data: [
    {
      list:[
        {
          name:'综合',
          code:'default',
          params:{
            orderField: "",
            orderBy: ""
          }
        }
      ]
    },
    {
      name:'时间',
      code:'time',
      params:{
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
        show:true
      }
    }
  ],
  config: {
    filter:{
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
      config:{}
    }
  }
}

const rankData1 = {
  data: [
    {
      list:[
        {
          name:'综合',
          code:'default',
          params:{
            orderField: "",
            orderBy: ""
          }
        }
      ]
    },
    {
      name:'时间',
      code:'time',
      params:{
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
        show:false
      }
    }
  ],
  config: {
  }
}


</script>

<style>

</style>