<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item of cal" :key="item.id">
                <img :src="item.src">
                <div class="info" :style="item.color">
                    <p class="city">{{item.city}}</p>
                    <p class="intr">{{item.intr}}</p>
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["cal"],
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>
.mint-swipe {
    height: 100px;
    margin-top: 2.6rem;
}
.mint-swipe-item img {
    width: 100%;
    height: 100px;
}
.info {
    position: absolute;
    top: 14%;
    left: 20%;
    text-align: center;
    color: #fff;
}
.info .city {
    font-size: 30px;
}
</style>
