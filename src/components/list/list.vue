<template>
  <div>
    <div v-for="(v,i) in list" :key='i' @click='fn(v.id)'>
      <van-card
        :price=v.price
        :title=v.title
        :thumb=v.imgpath
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
  props: ["list"],
  methods: {
    fn(i){
      this.$store.commit('setId',i)
      this.$router.push('/detail')
    }
  },
};
</script>

<style lang="scss" scoped>
</style>