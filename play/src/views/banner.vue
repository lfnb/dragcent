<!--
 * @Author: liyafei
 * @Date: 2022-12-21 18:09:07
 * @Description: 
-->
<template>
  <p>case:占位</p>
  <Banner :data="data.data" :config="data.config"  @click="handleClick" />
  <p>case:1张图</p>
  <Banner :data="data1.data" :config="data1.config"   />
  <p>case:2张图</p>
  <Banner :data="data2.data" :config="data2.config"   />
  
</template>

<script setup lang="ts">

import {Banner,TBannerDataRow} from '@moz/components'

const handleClick = (e:MouseEvent, item:TBannerDataRow) => {
  alert(item.actionType)
}

const data = {
  data:[
    {
      img:'',
      alt:'图片1',
      link:'http://www.baidu.com',
      actionType: 'linkActive',
    },
    {
      img:'',
      alt:'图片2',
      link:'http://www.baidu.com',
      actionType: 'linkActive',
    },
  ],
  config:{
    height: 100,
  }
}
const data1 = {
  data:[
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-11-21/aftmhhnr7ns9ofavg50vqafxy6hmp5yk_.png?sign=c868c079e84a54b0f11d99ab8214c214&t=1669001508',
      alt:'图片1',
      link:'http://www.baidu.com',
    },
  ],
  config:{
    height: 250,
  }
}

const data2 = {
  data:[
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-11-21/aftmhhnr7ns9ofavg50vqafxy6hmp5yk_.png?sign=c868c079e84a54b0f11d99ab8214c214&t=1669001508',
      alt:'图片1',
      link:'http://www.baidu.com',
    },
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片2',
      link:'',
    },
  ],
  config:{
    height: 250,
  }
}


</script>

<style lang="less">
*{
    color:#000;
}
</style>