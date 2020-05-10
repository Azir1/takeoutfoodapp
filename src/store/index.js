import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{//存储vuex数据
    id:'' //存储商品的id
  },
  getters:{//计算属性

  },
  mutations:{ //操作state数据
    setId(state,payload){
      state.id = payload
      console.log(state.id)
    }
  },
  actions:{//异步操作

  },


})