<template>
    <div class="foot">
        <ul>
            <li>
                <span class="iconfont">&#xe64a;</span>
                <p>客服电话</p>
            </li>
            <li>
                <span class="iconfont">&#xe630;</span>
                <p>下载客户端</p>
            </li>
            <li>
                <span class="iconfont">&#xe633;</span>
                <p>我的同程</p>
            </li>
        </ul>
        <div class="opin">
            <p>电脑版</p>
            <p>简体中文</p>
            <p>意见反馈</p>
        </div>
        <div class="copy">©2019同程旅游</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.foot {
    padding: 1rem 2rem;
    background: #f0f4f5;
    color:#666;
}
.foot ul {
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.foot ul li {
    /* width: 33.33%; */
}
.foot ul li span {
    font-size: 18px;
}
.foot ul li p {
    margin-top: .3rem;
}
.foot .opin {
    display: flex;
    margin: 1rem 2rem;
    justify-content: center;
}
.foot .opin p+p {
    margin-left: 2.5rem;
}
.foot .opin p,.foot .copy {
    color: #999;
    font-size: 12px;
}
.foot .copy {
    text-align: center; 
}
</style>
