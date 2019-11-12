import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Local from '@/views/Local.vue'
import Login from '@/views/Login.vue'
import Detail from '@/views/Detail.vue'
import Detail_img from '@/components/detail/Detail_img.vue'
import Deta_map from '@/components/detail/Deta_map.vue'

Vue.use(Router)
// 导航守卫
// router.beforeEach((to, from, next) => {
//   if (sessionStorage.getItem("user") && to.path=="/detail"){
//     next();
//   }else {
//     this.$toast("请登录！")
//     this.$router.push("/login");
//   }
// })

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/index',component:Index},
    {path:'/local',component:Local},
    {path:'/login',component:Login},
    {path:'/detail/:id',component:Detail,props:true,children:[
      {path:"detail_img",component:Detail_img},
      {path:"deta_map",component:Deta_map},
    ]},
  ]
})
