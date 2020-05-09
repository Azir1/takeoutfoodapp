<template>
  <div>
    <div v-for="(v,i) in list" :key='i'>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
  </div>
</template>

<script>
import { Card } from "vant";
export default {
  components: {
    [Card.name]: Card
  },
  props: ["list"]
};
</script>

<style lang="scss" scoped>
</style>