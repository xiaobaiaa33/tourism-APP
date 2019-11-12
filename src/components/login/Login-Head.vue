<template>
    <div class="head">
        <div class="back" @click="go_back">
            <span class="iconfont">&#xe68b;</span>
        </div>
        <div class="title">
            <h1>我的同程</h1>
        </div>
        <div class="more">
            <span class="iconfont">&#xe6f3;</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods: {
        go_back(){
            this.$router.go(-1);
        }
    },
}
</script>

<style scoped>
.head {
    display: flex;
    height: 3rem;
    line-height: 3rem;
    font-weight: bold;
}
.back span,.more span{
    color: #35c4b5;
    font-size: 20px;
}
.back {
    margin-left: 1rem;
}
.title {
    flex: 1;
    text-align: center;
}
.title h1 {
    font-size: 18px;
}
.more {
    margin-right: 1rem;
}
</style>
