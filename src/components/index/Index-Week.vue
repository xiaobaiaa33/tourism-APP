<template>
    <div class="week">
        <div class="title">
            ////////<span>周末出游</span>////////
            <p>致力推荐超完美套餐</p>
        </div>
        <div class="banner">
            <ul class="clear">
                <li v-for="item of weeklist" :key="item.id">
                    <router-link :to="`/detail/${item.id}`">
                        <img :src="item.src">
                        <h1>{{item.name}}</h1>
                        <p>{{item.intr}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:["weeklist"],
    data(){
        return {
            
        }
    },
    methods: {
        to_detail(e){
            console.log(e.target.dataset);
        }
    },
}
</script>

<style scoped>
.week {
    margin-top: 1rem;
}
.title {
    text-align: center;
    color: #fcfcfc;
}
.title span {
    font-size: 17px;
    color: #555;
    font-weight: bold;
}
.title p,.banner ul li p {
    color: #999;
}
.banner ul li h1 {
    color: #000;
}
/* 拖拽轮播 */
.banner {
    overflow: scroll;
}
.banner ul {
    width: 60rem;;
    margin: 0 auto;
    padding: 1rem;
}
.banner ul li {
    border:1px solid #ddd;
    text-align: center;
    padding-bottom: 1rem;
    float: left;
}
.banner ul li+li {
    margin-left: 1rem;
}
.banner ul li img {
    width: 9rem;
    height: 6rem;
}
</style>
