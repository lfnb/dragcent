<!--
 * @Author: liyafei
 * @Date: 2022-12-21 18:09:07
 * @Description: 
-->
<template>
  <p>case:空</p>
  <TextAreaView :data="data1.data" :config="data1.config" />  
  <p>case:富文本解析</p>
  <TextAreaView :data="data.data" :config="data.config" />  
</template>

<script setup lang="ts">

import {TextAreaView } from '@shopin/components'

const data = {
  data:[
    {
      htmlContent:'<p style="text-align: center;">富文本解析测试</p><p> fasts上岛咖啡看卡卡卡上飞 </p><p> fasts上岛咖啡看卡卡卡上飞 </p><p> fasts上岛咖啡看卡卡卡上飞 </p><p> <img style="display: block; margin-left: auto; margin-right: auto;" src = "https://shopin-file.oss-cn-zhangjiakou.aliyuncs.com/shopin_cms/2023-06/(20230609141548)龙.jpg" alt="" width="384" height="205" > </p>',
    },
  ],
  config:{
    
  }
}
const data1 = {
  data:[
    {
      htmlContent:'',
    },
  ],
  config:{
    
  }
}


</script>

<style lang="less">
*{
    color:#000;
}
</style>