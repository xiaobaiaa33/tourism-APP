import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:"杭州"
  },
  mutations: {
    // 改变state中的城市
    change(state,city){
      state.city=city;
    }
  },
  actions: {
    // 监听
    change_city(x,city){
      x.commit("change",city);
    }
  }
})
