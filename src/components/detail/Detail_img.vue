<template>
    <div class="tab">
        <mt-navbar v-model="selected">
            <mt-tab-item :id="item.id" :class="selected==item.id?'active':''" v-for="item of list" :key="item.id">{{item.name}}</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" :class="selected==1?'dis':''">
                <img v-for="item of detail_img[0]" :src="item.src" :key="item.id" @click="cal_show"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="2" :class="selected==2?'dis':''">
                <img v-for="item of detail_img[1]" :src="item.src" :key="item.id" @click="cal_show"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="3" :class="selected==3?'dis':''">
                <img v-for="item of detail_img[2]" :src="item.src" :key="item.id" @click="cal_show"/>
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="cal" v-show="show">
            <mt-swipe :auto="0" :show-indicators="false">
                <mt-swipe-item v-for="item of detail_img[selected-1]" :key="item.id">
                    <p class="order">{{item.id}}/{{detail_img[selected-1].length}}</p>
                    <img :src="item.src"/>
                </mt-swipe-item>
            </mt-swipe>
            <p class="close" @click="cal_hid">X</p>
        </div>
        
    </div>
</template>

<script>
export default {
    props:["detail_img","list"],
    data(){
        return {
            selected:1,
            show:false
        }
    },
    methods: {
        cal_show(e){
            this.show=true;
            console.log(e.target.dataset.index);
            this.cal_index=e.target.dataset.index;
        },
        cal_hid(){
            this.show=false;
        }
    }
}
</script>

<style scoped>
.tab {
    position: absolute;
    top: 3rem;
    width: 100%;
}
.dis {
    display: block !important;
}
/* 顶部选项卡 */
.active {
    color:#0bc071 !important;
    border-bottom: 3px solid #0bc071 !important;
    margin: 0 !important;
}
.mint-tab-item-label {
    font-size: 15px;
}
.mint-tab-container {
    background-color: #fff;
}
/* 图片 */
.tab .mint-tab-container img {
    width: 48%;
    padding: .2rem;
}
/* 轮播图 */
.cal {
    position: fixed;
    top: 0;
    background-color: #000;
    z-index: 20;
    height: 100%;
    width: 100%;
}
.cal img {
    width: 100%;
    text-align: center;
    margin-top: 50%;
}
.cal .close,.cal .order {
    color: #fff;
    font-size: 20px;
    position: absolute;
    left: 50%;
}
/* 关闭X */
.cal .close {
    bottom: 3rem;
    margin-left: -.5rem;
    font-weight: bold;
}
/* 序列 */
.cal .order {
    top: 3rem;
    margin-left: -1rem;
}
.cal_show {
    display: block;
}
.cal_hid {
    display: none;
}
</style>
