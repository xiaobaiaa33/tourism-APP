import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//重置样式
import '@/assets/css/reset.css'

// 引入iconfont字体库
import '@/assets/css/iconfont.css'

Vue.config.productionTip = false
// axios
import axios from 'axios'
Vue.prototype.axios=axios;
axios.defaults.withCredentials=false;

// mint-ui组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

// mui组件库
// import '@/assets/mui/css/mui.css'
// import '@/assets/mui/css/icons-extra.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
