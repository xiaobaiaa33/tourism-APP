<template>
    <div class="header">
        <router-link to="/local">
            <div class="header-city">
                {{this.$store.state.city}}
                <span class="iconfont">&#xe613;</span>
            </div>
        </router-link>
        
        <div class="header-search">
            <span class="iconfont">&#xe621;</span>
            目的地/酒店/景点/关键字
        </div>

        <router-link to="/login">
            <div class="header-user">
                <span class="iconfont">&#xe677;</span>
            </div>
        </router-link>
        
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    height: 2.6rem;
    line-height: 2.6rem;
    text-align: center;
    color: #6ad4c8;
    background-color: #fff;
    position: fixed;
    width: 100%;
    margin-top: -2.6rem;
    z-index: 10;
    border-bottom: 1px solid #e4e4e4;
}
.header .header-city {
    margin-left: 1rem;
    color: #6ad4c8;
}
.header .header-search {
    flex:1;
    color: #888 ;
    border-radius: 3rem;
    background: #eaedf1;
    margin:.5rem 1rem;
    height: 1.5rem;
    line-height: 1.5rem;
}
.header .header-user {
    margin-right: 1rem;
    color: #6ad4c8;
}
.header .header-user span {
    font-size: 20px;
}
</style>
