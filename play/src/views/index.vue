<!--
 * @Author: liyafei
 * @Date: 2022-12-21 11:52:31
 * @Description: 
-->
<template>
  <div class="container">
    <van-cell-group>
      <van-cell title="图片组件" to="image" is-link />
      <van-cell title="优惠券组件" to="coupon" is-link />
      <van-cell title="优惠券包组件" to="couponPack" is-link />
      <van-cell title="banner组件" to="banner" is-link />
      <van-cell title="商品列表组件" to="goods" is-link />
      <van-cell title="tabs组件" to="tabs" is-link />
      <van-cell title="rank组件" to="rank" is-link />
      <van-cell title="filter组件" to="filter" is-link />
      <van-cell title="goodsTag组件" to="goodsTag" is-link />
      <van-cell title="goodsRank组件" to="goodsRank" is-link />
      <van-cell title="富文本组件" to="textareaView" is-link />
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
  .container{
    width: 100vw;
    height: 100vh;
  }
</style>>
