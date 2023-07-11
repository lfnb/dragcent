<!--
 * @Author: liyafei
 * @Date: 2022-12-28 11:17:20
 * @Description: 
-->
<template>
  <p>case:占位</p>
  <Coupon :data="data.data" :config="data.config" @click="handleClick"/>
  <p>case:1张券,跳转</p>
  <Coupon :data="data1.data" :config="data1.config" />
  <p>case:2张券, 有couponId</p>
  <Coupon :data="data2.data" :config="data2.config" @click="handleClick" />
  <p>case:3张券,跳转</p>
  <Coupon :data="data3.data" :config="data3.config" />
  <p>case:4张券, 有couponId</p>
  <Coupon :data="data4.data" :config="data4.config" @click="handleClick" />
</template>

<script setup lang="ts">

import {Coupon, CouponProps,TCouponDataRow} from '@moz/components';

const data = {
  data:[
    {
      img:'',
      alt:'图片',
      link:'',
      actionType:'linkActive'
    },
    {
      img:'',
      alt:'图片2',
      actionType: 'linkActive'
    },
  ],
  config:{
    cols:2
  }
}
const data1 = {
  data:[
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-11-21/aftmhhnr7ns9ofavg50vqafxy6hmp5yk_.png?sign=c868c079e84a54b0f11d99ab8214c214&t=1669001508',
      alt:'图片',
      actionType: 'linkActive',
      received: true,
    },
  ],
  config:{
    cols:1
  }
}

const data2 = {
  data:[
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      actionType: 'linkActive',
      params:{
        couponId: '10001',
      },
      received: true,
    },
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      actionType: 'linkActive',
      params: {
        couponId: '10002',
      }
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
      received: true,
    },
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      actionType: 'linkActive',
    },
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      actionType: 'linkActive',
    },
  ],
  config:{
    cols:3
  }
}

const data4 = {
  data:[
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      couponId:'10001',
      received: true,
    },
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      couponId:'10001',
    },
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      couponId:'10001',
    },
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      couponId:'10001',
    },
  ],
  config:{
    cols:4
  }
}

const handleClick = (e: MouseEvent, item: TCouponDataRow) => {
  alert(item.actionType);
}


</script>

<style lang="less">
*{
    color:#000;
}
</style>