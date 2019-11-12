<template>
    <div>
        <div class="item">
            <div class="icon">
                <span class="iconfont">&#xe60f;</span>
            </div>
            <div class="ensure">
                <p class="title">价格公正</p>
                <p>价格公开透明，请安心购买</p>
            </div>
        </div>
        <div class="item">
            <div class="icon">
                <span class="iconfont">&#xe627;</span>
            </div>
            <div class="ensure">
                <p class="title">产品丰富</p>
                <p>出行产品，全品类覆盖，一站式服务</p>
            </div>
        </div>
        <div class="item">
            <div class="icon">
                <span class="iconfont">&#xe811;</span>
            </div>
            <div class="ensure">
                <p class="title">品质保证</p>
                <p>精挑细选，产品优选，放心出行</p>
            </div>
        </div>
        <div class="item">
            <div class="icon">
                <span class="iconfont">&#xe611;</span>
            </div>
            <div class="ensure">
                <p class="title">专业顾问</p>
                <p>24小时专业客服，一对一服务</p>
            </div>
        </div>
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
.item {
    display: flex;
    margin-left: 1rem;
    color:#9f8a70;
    margin-bottom: 1rem;
}
.item .icon {
    margin: 0 1rem;
    line-height: 3rem;
    font-weight: bold;
}
.item .icon span {
    font-size: 20px;
}
.item .ensure .title {
    font-size: 15px;
    margin-bottom: .3rem;
}
.item .ensure p {
    font-size: 12px;
}
</style>
