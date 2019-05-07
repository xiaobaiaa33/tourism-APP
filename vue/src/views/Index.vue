<template>
    <div class="index">
        <index-head></index-head>
        <index-swiper :cal="cal"></index-swiper>
        <index-catalog :catalog="catalog" :server="server"></index-catalog>
        <index-hot :info="info"></index-hot>
        <img class="app" src="images/hot/app.jpg">
        <img class="fixed" src="images/hot/fixed.png">
        <index-week :weeklist="weeklist"></index-week>
        <index-recommend :hot_city="hot_city" :spots="spots"></index-recommend>
        <index-ensure></index-ensure>
        <index-foot></index-foot>
    </div>
</template>

<script>
import IndexHead from '@/components/index/Index-Head.vue'
import IndexSwiper from '@/components/index/Index-Swiper.vue'
import IndexCatalog from '@/components/index/Index-Catalog.vue'
import IndexHot from '@/components/index/Index-Hot.vue'
import IndexWeek from '@/components/index/Index-Week.vue'
import IndexRecommend from '@/components/index/Index-Recommend.vue'
import IndexEnsure from '@/components/index/Index-Ensure.vue'
import IndexFoot from '@/components/index/Index-Foot.vue'
export default {
    data(){
        return {
            // 轮播图
            cal:[
                {id:1,src:"images/carousel/c1.webp",city:"杭州",intr:"超值特惠门票任意玩",color:"color:#0094e1"},
                {id:2,src:"images/carousel/c2.webp",city:"金华",intr:"不可忽视的身边美景",color:"color:#1a936f"},
                {id:3,src:"images/carousel/c3.webp",city:"福冈",intr:"经典邮轮航线 · 超值特惠",color:"color:#fff"},
                {id:4,src:"images/carousel/c4.webp",city:"曼谷",intr:"世界是本书 · 从这里读起",color:"color:#fff"},
                {id:5,src:"images/carousel/c5.jpg",city:"三亚",intr:"一生值得去的国内目的地之一",color:"color:#fff"},
                {id:6,src:"images/carousel/c6.webp",city:"",intr:"",color:""}
            ],
            // 目录1
            catalog:[
                {id:1,src:"images/catalog/ca1.png",name:"火车票"},
                {id:2,src:"images/catalog/ca2.png",name:"机票"},
                {id:3,src:"images/catalog/ca3.png",name:"酒店住宿"},
                {id:4,src:"images/catalog/ca4.png",name:"景点门票"},
            ],
            // 目录2
            server:[
                {id:1,src:"images/catalog/s1.png",name:"汽车票·船票"},
                {id:2,src:"images/catalog/s2.png",name:"周边自由行"},
                {id:3,src:"images/catalog/s3.png",name:"周边跟团游"},
                {id:4,src:"images/catalog/s4.png",name:"国内游"},
                {id:5,src:"images/catalog/s5.png",name:"邮轮"},
                {id:6,src:"images/catalog/s6.png",name:"出境游"},
                {id:7,src:"images/catalog/s7.png",name:"海外玩乐"},
                {id:8,src:"images/catalog/s8.png",name:"签证"},
                {id:9,src:"images/catalog/s9.png",name:"全球WiFi"},
                {id:10,src:"images/catalog/s10.png",name:"全部服务"},
            ],
            // 限时抢购
            info:[
                {id:1,src:"images/hot/h1.jpg",title:"【今日特惠】厚道北京日跟团游<双成人立减800元>",price:1480},
                {id:2,src:"images/hot/h2.jpg",title:"【今日特惠】大连双飞3日自由行<宿2晚酒店 含双早 近中山广场 春航早去晚回 玩足3天 酒店可提供免费接机>",price:795},
            ],
            // 周末出游
            weeklist:[
                {id:1,name:"宜兴竹海",intr:"踏春赏花 万亩竹海",src:"images/week/w1.jpg"},
                {id:2,name:"拈花湾",intr:"禅意假日 古韵风光",src:"images/week/w2.jpg"},
                {id:3,name:"迪士尼",intr:"点亮心中奇梦花",src:"images/week/w3.jpg"},
                {id:4,name:"东方盐湖城",intr:"茅山脚下的逍遥山镇",src:"images/week/w4.jpg"},
                {id:5,name:"天目湖",intr:"竹海 山水 温泉 古街",src:"images/week/w5.jpg"},
                {id:6,name:"宋城千古情",intr:"梦回大宋",src:"images/week/w6.jpg"},
            ],
            // 热门推荐
            hot_city:[
                {id:1,name:"曼谷"},
                {id:2,name:"巴厘岛"},
                {id:3,name:"大阪"},
                {id:4,name:"冲绳"},
            ],
            spots:[
                {id:1,src:"images/recommend/c1.jpg",type:"古镇",title:"今年最火的10大古镇"},
                {id:2,src:"images/recommend/c2.jpg",type:"海岛",title:"适合秋冬出游的海岛"},
                {id:3,src:"images/recommend/c3.jpg",type:"自驾游",title:"中国8大经典自驾线路"},
                {id:4,src:"images/recommend/c4.jpg",type:"盘点",title:"10月旅行目的地推荐"},
            ],
        }
    },
    created() {
        let user=sessionStorage.getItem("user");
    },
    components:{
        IndexHead,
        IndexSwiper,
        IndexCatalog,
        IndexHot,
        IndexWeek,
        IndexRecommend,
        IndexEnsure,
        IndexFoot
    }
}
</script>

<style scoped>
.app {
    width: 100%;
    margin-top: 1rem;
}
.fixed {
    position: fixed;
    right: 0;
    bottom: 5rem;;
    width: 4rem;
    z-index: 10;
}
</style>
