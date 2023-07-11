<template>
  <p>case:占位模式</p>
  <Image :data="imgData.data" :config="imgData.config" @click="handleClick"/>
  <p>case:1张图,无跳转</p>
  <Image :data="imgData1.data" :config="imgData1.config" />
  <p>case:2张图</p>
  <Image :data="imgData2.data" :config="imgData2.config" />
  <p>case:3张图,无跳转</p>
  <Image :data="imgData3.data" :config="imgData3.config" />
  <p>case:4张图</p>
  <Image :data="imgData4.data" :config="imgData4.config" />
</template>

<script setup lang="ts">

import {Image,TImageDataRow} from '@moz/components'

const handleClick = (e:MouseEvent, item:TImageDataRow) => {
  alert(item.actionType)
}

const imgData = {
  data: [
    {
      img: '',
      alt: '图片',
      link: '',
      actionType: 'linkActive'
    },
  ],
  config: {
    cols: 1
  }
}

const imgData1 = {
  data:[
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-11-21/aftmhhnr7ns9ofavg50vqafxy6hmp5yk_.png?sign=c868c079e84a54b0f11d99ab8214c214&t=1669001508',
      alt:'图片',
      link:'',
      actionType: 'linkActive'
    },
  ],
  config:{
    cols:1
  }
}

const imgData2 = {
  data:[
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
    cols:2
  }
}
const imgData3 = {
  data:[
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      link:'',
    },
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      link:'',
    },
    {
      img:'https://7368-shopinplus-7g4doy7q5de10e6f-1304867278.tcb.qcloud.la/cloudbase-cms/upload/2022-12-28/fkl1sjkrf2a9le4ug9vnm9i5x45f5i3d_.png?sign=e18237b565d66dbaac5ea1c6c08115ae&t=1672194504',
      alt:'图片',
      link:'',
    },
  ],
  config:{
    cols:3
  }
}

const imgData4 = {
  data:[
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
    cols:4
  }
}

</script>

<style lang="less">
*{
    color:#000;
}
</style>