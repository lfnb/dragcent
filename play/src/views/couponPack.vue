<!--
 * @Author: liyafei
 * @Date: 2022-12-28 11:17:20
 * @Description: 
-->
<template>
  <p>case:未领券</p>
  <CouponPack :data="data2.data" :config="data2.config" @click="handleClick" />
  <p>case:已领券</p>
  <CouponPack :data="data3.data" :config="data3.config" @click="handleClick" />
</template>

<script setup lang="ts">

import {CouponPack, CouponPackProps,TCouponPackDataRow} from '@moz/components';

const data2 = {
  data:[
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      actionType: 'linkActive',
      distribution:'normal',
      notice:['test@test.com'],
      params:{
        normalCouponIds: ['10001','10002'],
      },
    },
  ],
  config:{
    cols:1
  }
}
const data3 = {
  data:[
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      actionType: 'linkActive',
      distribution: 'distinguish',
      notice: ['test@test.com'],
      params: {
        oldCustomerCouponIds: ['10001', '10002'],
        newCustomerCouponIds: ['10003', '10004'],
      },
      received: true,
    },
  ],
  config:{
    cols:1
  }
}

const handleClick = (e: MouseEvent, item: TCouponPackDataRow) => {
  console.log(item);
}


</script>

<style lang="less">
*{
    color:#000;
}
</style>