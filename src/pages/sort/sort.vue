<template>
  <div>
   <TopBar title='炸鸡'></TopBar>
   <List></List>
   <BottomBar></BottomBar>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/topbar'
import List from '@/components/list/list'
import BottomBar from '@/components/bottombar/bottombar'
export default {
  components:{
    List,
    BottomBar,
    TopBar
  }
}
</script>

<style lang="scss" scoped>

</style>