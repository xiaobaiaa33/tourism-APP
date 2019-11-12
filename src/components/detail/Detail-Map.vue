<template>
    <div class="map">
        <div>
            <div>
                <span class="city">无锡宜兴市</span>
                <span class="address">酒店地址</span>
            </div>
            <div>
                <span class="iconfont">&#xe64b;</span>
                <span class="plate">宜兴市解放东路888号</span>
            </div>
        </div>
        <router-link to="deta_map" append>
            <div class="m">
                <span>地图</span>
                <span class="iconfont">&#xe662;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.map {
    display: flex;
    height: 3rem;
    justify-content: space-between;
    padding: 1rem;
}
.map .city {
    font-size: 15px;
}
.map .address {
    border: 1px solid #576b95;
    color: #576b95;
    font-size: 12px;
    margin-left: .5rem;
    padding: 0 .2rem;
}
.map .plate {
    color: #797c8d;
    font-size: 12px;
}
.map .m {
    margin-top: 1rem;
    color: #576b95;
}
</style>
