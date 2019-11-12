<template>
    <div class="catalog">
        <ul>
            <li v-for="item of catalog" :key="item.id">
                <img :src="item.src">
                <p>{{item.name}}</p>
            </li>
        </ul>
        <catalog-server :server="server"></catalog-server>
    </div>
</template>

<script>
import CatalogServer from '@/components/index/Catalog-Server.vue'
export default {
    props:["catalog","server"],
    data(){
        return {
            
        }
    },
    components:{
        CatalogServer
    }
}
</script>

<style scoped>
.catalog {
    padding: 1rem;
}
ul {
    display: flex;
    text-align: center;
    /* justify-content: space-between; */
}
ul li {
    width: 25%;
}
ul li img {
    width: 50%;
    margin-bottom: .5rem;
}
ul li p {
    font-size: 15px;
}
</style>
