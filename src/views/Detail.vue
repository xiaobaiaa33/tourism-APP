<template>
    <div>
        <detail-head></detail-head>
        <detail-swipe :swipe_list="swipe_list"></detail-swipe>
        <router-view :map_info="map_info" :list="list" :detail_img="detail_img"></router-view>
        <detail-map></detail-map>
    </div>
</template>

<script>
import DetailHead from '@/components/detail/Detail-Head.vue'
import DetailSwipe from '@/components/detail/Detail-Swipe.vue'
import DetailMap from '@/components/detail/Detail-Map.vue'
export default {
    data(){
        return {
             // 详情页轮播图
            swipe_list:[
                {id:1,url:"images/detail/d1.jpg",day:"两天一晚",num:"101453",sheets:"102张"},
                {id:2,url:"images/detail/d2.jpg",day:"两天一晚",num:"101453",sheets:"102张"},
                {id:3,url:"images/detail/d3.jpg",day:"两天一晚",num:"101453",sheets:"102张"},
            ],
            // 地图信息
            map_info:[
                [
                    {id:0,name:"宜兴帕佛伦斯酒店",road:"宜兴市解放东路888号"}
                ],
                [
                    {id:0,name:"宜兴竹海风景区",road:"江苏省无锡宜兴市湖滏镇竹海村"},
                    {id:1,name:"宜兴善卷洞",road:"江苏省无锡市宜兴城西南25公里的螺岩山中"},
                    {id:2,name:"宜兴张公洞",road:"江苏省无锡市宜兴市湖父镇张阳村"}
                ]
            ],
            // 文字列表
            list:[
                {id:1,name:"宜兴帕佛伦斯酒店"},
                {id:2,name:"宜兴竹海风景区"},
                {id:3,name:"宜兴善卷洞"},
            ],
            // 图片
            detail_img:[
                [
                    {id:1,src:"images/detail/dimg1-1.jpg"},
                    {id:2,src:"images/detail/dimg1-2.jpg"},
                    {id:3,src:"images/detail/dimg1-3.jpg"},
                    {id:4,src:"images/detail/dimg1-4.jpg"}
                ],
                [
                    {id:1,src:"images/detail/dimg2-1.jpg"},
                    {id:2,src:"images/detail/dimg2-2.jpg"},
                    {id:3,src:"images/detail/dimg2-3.jpg"},
                    {id:4,src:"images/detail/dimg2-4.jpg"}
                ],
                [
                    {id:1,src:"images/detail/dimg3-1.jpg"},
                    {id:2,src:"images/detail/dimg3-2.jpg"},
                    {id:3,src:"images/detail/dimg3-3.jpg"},
                    {id:4,src:"images/detail/dimg3-4.jpg"}
                ]
            ]
        }
    },
    components:{
        DetailHead,
        DetailSwipe,
        DetailMap
    }
}
</script>

<style scoped>

</style>
