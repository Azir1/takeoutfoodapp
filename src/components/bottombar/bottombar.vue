<template>
  <div>
    <van-tabbar route active-color="#ff8000" class="bar">
      <van-tabbar-item icon="phone-o" replace to="/home">外卖</van-tabbar-item>
      <van-tabbar-item icon="shop-collect-o" replace to="/sort">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    // [Notify.name]: Notify
  },
  data() {
    return {
    };  
  },
  methods: {
    
  }
};
</script>

<style lang="scss">
.bar{
  border-top: .01rem solid #eee;
}
.van-tabbar-item__icon{
 font-size: 28px;
}

</style>