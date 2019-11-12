<template>
    <div class="rec">
        <div class="title" :class="fixed">
            <span class="iconfont">&#xe610;</span>热门推荐
        </div>
        <div class="city">
            <ul>
                <li v-for="item of hot_city" :key="item.id">{{item.name}}</li>
                <li>···</li>
            </ul>
        </div>
        <div class="spots clear">
            <div v-for="spot of spots" :key="spot.id">
                <img :src="spot.src">
                <div>
                    <span class="name">{{spot.type}}</span>
                    <span class="triangle"></span>
                </div>
                <span class="tle">{{spot.title}}</span>
            </div>
        </div>
        <div class="more">查看更多玩法</div>
    </div>
</template>

<script>
export default {
    props:["hot_city","spots"],
    data(){
        return {
            fixed:""
        }
    },
    methods: {
        scroll_change(){
            window.addEventListener("scroll",()=>{
                let h=document.documentElement.scrollTop;
                // console.log(h);
                if (h>890) this.fixed="fixed";
                else this.fixed="";
            });
        }
    },
    created() {
        this.scroll_change();
    },
}
</script>

<style scoped>
.rec {
    padding: 0 1rem;
}
.title {
    text-align: center;
    font-size: 18px;
    color: #fb6419;
}
.title span {
    margin-right: .3rem;
}
.city {
    padding: 1rem 0;
    border-bottom: 1px solid #f4f4f4;
}
.city ul {
    display: flex;
    flex-wrap: wrap;
}
.city ul li {
    width: 25%;
    text-align: center;
    background: #f4f4f4;
    border-radius: 3rem;
    height: 2rem;
    line-height: 2rem;
    margin-bottom: .5rem;
}
.city ul li:last-child {
    font-weight: bold;
    font-size: 25px;
}
.spots {
    margin: 1rem 0;
    position: relative;
}
.spots img {
    width: 100%;
    border-radius: .2rem;
}
.spots>div {
    position: relative;
    width: 46%;
    float: left;
    margin: .4rem;
}
.spots>div::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    position: absolute;
    left: 0;
    top:0;
}
.spots div div {
    position: absolute;
    left:0;
    top:0;
    background: #fc5446;
}
.spots div .name {
    color: #fff;
    border-top-left-radius: .2rem;
    padding: 0 .1rem;
}
.spots div .triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-top:1rem solid #fc5446;
    border-right:1rem solid transparent;
}
.spots div .tle {
    position: absolute;
    bottom: 0;
    left:0;
    color:#fff;
    font-size: 14px;
    padding: .5rem;
}
.more {
    font-size: 16px;
    color: #00a0ff;
    text-align: center;
    margin-bottom: 1.5rem;
}
/* 固定定位 */
.fixed {
    position: fixed;
    top:2.5rem;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: 2.5rem;
    line-height: 2.5rem;
    z-index: 11;
}
</style>
