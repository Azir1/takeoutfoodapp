<template>
  <div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import { SubmitBar, Checkbox } from "vant";
export default {
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox
  },
  methods: {
    onClickEditAddress() {},
    onSubmit() {}
  },
  data() {
    return {
      checked: ""
    };
  }
};
</script>

<style lang="scss" >
.van-submit-bar {
  bottom: .5rem;
}
</style>