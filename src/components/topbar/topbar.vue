<template>
  <div>
    <van-nav-bar
  :title=title
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  components:{
    [NavBar.name]:NavBar
  },
  props:['title'],
  methods: {
    onClickLeft(){
      this.$router.back(-1)
    }
  },
}
</script>

<style lang="scss">
.van-hairline--bottom{
  background: #ff7f00;
}
.van-nav-bar__title{
  color: #fff;
  font-size: .18rem;
}
.van-nav-bar__text{
  color: #fff;
}
.van-nav-bar .van-icon{
  color: #fff;
}
</style>