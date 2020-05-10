<template>
  <div>
    <div v-for="(v,i) in list" :key="i">
      <van-swipe-cell>
        <van-card
          :num=v.num
          :price=v.price
          desc="描述信息"
          :title=v.title
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <van-checkbox v-model="checked"></van-checkbox>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import { SwipeCell, Card, Button, Checkbox } from "vant";
import { api } from "@/api/index";
export default {
  components: {
    [SwipeCell.name]: SwipeCell,
    [Card.name]: Card,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox
  },
  data() {
    return {
      checked: "",
      list: []
    };
  },
  mounted() {
    this.axios({
      method: "get",
      url: api.cartlist
    }).then(ok => {
      console.log(ok.data.data);
      this.list = ok.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.goods-card {
  margin: 0;
  background-color: #fff;
  padding-left: 0.4rem;
  margin-top: 0.1rem;
}
.delete-button {
  height: 100%;
}
.van-checkbox {
  position: absolute;
  top: 0.4rem;
  left: 0.1rem;
}
</style>