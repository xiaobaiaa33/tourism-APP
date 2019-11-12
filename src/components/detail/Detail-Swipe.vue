<template>
    <div>
        <mt-swipe :auto="3000" :show-indicators="false" continuous>
            <mt-swipe-item v-for="item of swipe_list" :key="item.id">
                <router-link to="detail_img" append>
                    <img :src="item.url">
                    <div>
                        <span class="left">{{item.day}}</span>
                        <span class="mid">编号：{{item.num}}</span>
                        <span class="right">{{item.sheets}}</span>
                    </div>
                </router-link>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import Detail_img from '@/components/detail/Detail_img.vue'
export default {
    props:["swipe_list"],
    data(){
        return {
           
        }
    }
}
</script>

<style scoped>
.mint-swipe,.mint-swipe img {
    height: 11rem;
    width: 100%;
}
.mint-swipe-items-wrap {
    position: relative;
}
/* 轮播图文字 */
.left,.mid,.right {
    position: absolute;
    bottom: .5rem;
    color:#fff;
    font-size: 12px;
}
.left {
    left:1rem;
}
.mid {
    right:3.5rem;
}
.right {
    right:0;
    padding: .1rem;
    text-align: center;
    background: rgb(0,0,0,0.5);
    border-radius: .1rem;
}
</style>
