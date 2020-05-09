<template>
  <div>
   <TopBar title='炸鸡'></TopBar>
   <List :list=list></List>
   <BottomBar></BottomBar>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/topbar'
import List from '@/components/list/list'
import BottomBar from '@/components/bottombar/bottombar'
import {api} from '@/api/index'
export default {
  components:{
    List,
    BottomBar,
    TopBar
  },
  mounted() {
    this.axios({
      method:'get',
      url:api.list
    }).then(ok=>{
      console.log(ok.data.data[0].data)
      this.list = ok.data.data[0].data
    })
  },
  data() {
    return {
      list:[]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>