<template>
    <div class="hot">
        <div class="time">
            <div>
                <img src="images/hot/time.png">
            </div>
            <div class="count-down">
                还剩<span>{{h}}</span>:<span>{{m}}</span>:<span>{{s}}</span>
            </div>
        </div>
        <div class="content">
            <div>
                <img :src="info[i].src">
                <span class="limit">限量100份</span>
            </div>
            <div class="info">
                <div class="title">{{info[i].title}}</div>
                <div class="price">
                    <div>
                        <span class="rmb">￥</span>
                        <span class="num">{{info[i].price.toFixed(2)}}</span>
                        <span>起</span>
                    </div>
                    <div>
                        <span>更多抢购</span>
                        <span class="iconfont">&#xe662;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["info"],
    data(){
        return {
            h:0,
            m:0,
            s:0,
            i:0,
        }
    },
    methods: {
        count_down(){
            this.h=30,this.m="00",this.s="00";
            let time=setInterval(()=>{
                this.s--;
                if (this.s<0){
                    this.s=59;
                    this.m--;
                    if (this.m<0){
                        this.m=59;
                        this.h--;
                        if (this.h<0){
                            this.$toast("限时抢购结束，等待下一轮抢购开始！");
                            this.i++;
                        }else if (this.h<10){
                            this.h="0"+this.h;
                        }
                    }else if (this.m<10){
                        this.m="0"+this.m;
                    }
                }else if (this.s<10){
                    this.s="0"+this.s;
                }
            },1000);
        }
    },
    created() {
        this.count_down();
    },
}   
</script>

<style scoped>
.hot {
    padding: .5rem 1rem;
}
/* 倒计时 */
.hot .time {
    display: flex;
    justify-content: space-between;
    height: 2rem;
    line-height: 2rem;
}
.hot .time span {
    background: #666;
    color: #fff;
    border-radius: .1rem;
    font-size: 16px;
    padding: .1rem .2rem;
}
.hot .time span:first-child {
    margin-left: .5rem;
}
/* 内容 */
.content {
    position: relative;
    display: flex;
    margin-top: .5rem;
    justify-content: space-between;
}
.content img {
    width: 8rem;
    height: 6rem;
}
.content .limit {
    background: #ff5f5f;
    color: #fff;
    padding: .2rem;
    font-size: 12px;
    position: absolute;
    left: 0;
    top: 0;
}
.content .info {
    position: relative;
    margin-left: .5rem;
}
.content .info .title {
    font-size: 14px;
    /* 超出隐藏省略号 */
    overflow: hidden;
    -webkit-line-clamp: 2; /*限制行数*/
    text-overflow: ellipsis;/*移除显示省略号*/
    display: -webkit-box;
}
.content .info .price {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.content .info .price span {
    font-size: 12px;
}
.content .info .price .rmb {
    color: #ff5346;
}
.content .info .price .num {
    color: #ff5346;
    font-size: 16px;
    margin-right: .1rem;
}
</style>
