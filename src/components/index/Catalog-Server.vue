<template>
    <div class="server">
        <ul class="clear">
            <li v-for="item of server" :key="item.id">
                <img :src="item.src">
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["server"],
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>
.server {
    margin-top: 2rem;
}
ul {
    text-align: center;
    font-size: 15px;
}
ul li {
    width: 20%;
    float: left;
    margin-bottom: 1rem;
}
ul li img {
    width: 45%;
    margin-bottom: .2rem;
}
ul li p {
    font-size: 12px;
}
</style>
