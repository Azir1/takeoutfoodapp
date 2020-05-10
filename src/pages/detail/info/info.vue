<template>
  <div>
    <van-loading size=".24rem" v-if="JSON.stringify(list)==='{}'" vertical>加载中...</van-loading>
    <div v-else>
      <van-image width="100%" fit="contain" :src="list.imgpath" />
      <van-panel :title="list.title" :desc="newTel" :status="newPrice">
        <template #footer>
          <div class="footer">
            <van-button size="large" plain hairline type="danger" @click="addCart()">加入购物车</van-button>
            <div class="space"></div>
            <van-button size="large" type="warning">立即购买</van-button>
          </div>
          <div class="intro">简介</div>
          <div>{{list.info}}</div>
        </template>
      </van-panel>
    </div>
  </div>
</template>

<script>
import { Image as VanImage, Panel, Button, Loading } from "vant";
import { api } from "@/api/index";
export default {
  components: {
    [VanImage.name]: VanImage,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [Loading.name]: Loading
  },
  methods: {
    addCart() {
      console.log(this.list.id);
      // 存到每个客户的购物车数据库
      // 发ajax请求，node操作数据库ajax
      this.axios({
        url: api.cart,
        method: "get",
        params: {
          id: this.list.id,
          title: this.list.title,
          price: this.list.price,
          imgpath: this.list.imgpath
        }
      }).then(ok => {
        this.$router.push("/cart");
        console.log(ok);
        // 跳转购物车
      });
    }
  },
  data() {
    return {
      list: {}
    };
  },
  created() {
    this.axios({
      url: api.list,
      method: "get"
    }).then(ok => {
      let obj = ok.data.data[0].data.filter(v => {
        return v.id == this.$store.state.id;
      });
      this.list = obj[0];
    });
  },
  computed: {
    newPrice() {
      return `￥${this.list.price}`;
    },
    newTel() {
      return `外卖电话：${this.list.tel}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  .space {
    width: 0.2rem;
  }
}
.intro {
  margin-top: 0.3rem;
}
</style>