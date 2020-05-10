<template>
  <div>
    <TopBar title="购物车"></TopBar>
    <CartList></CartList>
    <Total></Total>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import TopBar from "@/components/topbar/topbar";
import Total from "./total/total";
import CartList from "./cartlist/cartlist";
import BottomBar from "@/components/bottombar/bottombar";

export default {
  components: {
    Total,
    BottomBar,
    TopBar,
    CartList
  }
};
</script>

<style lang="scss" scoped>
.total{
  margin-bottom: .5rem;
}
</style>