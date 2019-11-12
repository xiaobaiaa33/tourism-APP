<template>
    <div class="list" :class="{list_hid:is_show}">
        <div>
            <p class="current-title" ref="current">当前</p>
            <p class="current-buttom" @click="current_city" :data-city="this.$store.state.city">{{this.$store.state.city}}</p>
        </div>
        <div>
            <p class="hot-title" ref="hot">热门</p>
            <ul>
                <li v-for="item of hot_list" :key="item.id" @click="hot_city" :data-city="item.name">{{item.name}}</li>
            </ul>
        </div>
        <div v-for="(item,i) of alph_list" :key="i" :ref="i">
            <p class="alph-title">{{i}}</p>
            <ul>
                <li v-for="city of item" :key="city.id" @click="alph_city" :data-city="city.name">{{city.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
// import BMap from 'BMap'
export default {
    props:["con","hot_list","alph_list","is_show"],
    watch: {
        con(e){
            // 获取滚动条的top,赋值给h
            let h=document.documentElement.scrollTop;
            let con_top=0; //点击元素的top
            
            // 如果单击的是热门和当前，单独写跳转
            if (this.con=="当前"){
                const con_current=this.$refs.current;//当前
            }else if (this.con=="热门"){
                const con_hot=this.$refs.hot;//热门
                con_top=con_hot.offsetTop;
            }else {
                // 获取单击对应字母的位置
                const con_i=this.$refs[this.con];
                // console.log(this.con);
                 // 获取当前距离顶部的值 
                con_top=con_i[0].offsetTop;
            }
            // 监测滚动条，滚动到相应的位置
            h=con_top-80;
            // 修改滚动条的top
            document.documentElement.scrollTop=h;
        }
    },
    data(){
        return {
            city:""
        }
    },
    methods: {
        // 单击更改城市名，并跳转到首页
        current_city(e){
            // console.log(e.target.dataset.city);
            this.$store.dispatch("change_city",e.target.dataset.city);
            this.$router.push("/index");
        },
        hot_city(e){
            this.$store.dispatch("change_city",e.target.dataset.city);
            this.$router.push("/index");
        },
        alph_city(e){
            this.$store.dispatch("change_city",e.target.dataset.city);
            this.$router.push("/index");
        }
    },
}
</script>

<style scoped>
.list {
    background-color: #e9ecf1;
    padding: 4rem 0 0 .9rem;
}
.list>div {
    margin: .5rem 0;
}
.current-title,.hot-title,.alph-title {
    color: #777;
    font-size: 18px;
    margin-bottom: .3rem;
    padding-left: .2rem;
}
.current-buttom {
    color: #999;
    background-color: #fff;
    padding: .7rem;
    box-sizing: border-box;
    width: 92%;
}
ul {
    display: flex;
    width: 94%;
    flex-wrap: wrap;
}
ul li{
    color: #666;
    background-color: #fff;
    font-size: 14px;
    width: 30%;
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
    border: 1px solid #dcdcdc;
    margin: 0 .5rem .7rem 0;
    border-radius: .3rem;
}
/* 隐藏列表 */
.list_hid {
    display: none;
}
</style>
