<template>
    <div class="map">
        <div id="container" ref="con"></div>
        <p @click="telescopic">v</p>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1" :class="selected==1?'is_selected':''">酒店</mt-tab-item>
            <mt-tab-item id="2" :class="selected==2?'is_selected':''">景点</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" :class="selected==1?'dis':''">
                <mt-cell v-for="item in map_info[0]" :title="item.name" :key="item.id" @click.native="move_map(item.id)"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="2" :class="selected==2?'dis':''">
                <mt-cell v-for="item in map_info[1]" :title="item.name" :key="item.id" @click.native="move_map(item.id)"/>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
    props:["map_info"],
    data(){
        return {
            f:1,
            selected:1
        }
    },
    methods: {
        telescopic(){
            if (this.telescopic_index==0){
                this.$refs.con.style.height="11rem";
                this.telescopic_index=1;
            }else {
                this.$refs.con.style.height="25rem";
                this.telescopic_index=0;
            }
        },
        move_map(id){
            if (this.f==1){
                let m=this.f-1;
                let n=id;
                this.map(m,n);
            }else {
                let m=this.f-1;
                let n=id;
                this.map(m,n);
            }
        },
        map(m,n){
            let map = new BMap.Map("container");
            for (let i=0;i<this.map_info.length;i++){
                for (let j=0;j<this.map_info[i].length;j++){
                    let name=this.map_info[m][n];
                    var myGeo = new BMap.Geocoder();   
                    myGeo.getPoint(this.map_info[i][j].name, function(point){
                        if (point){
                            if (i==m && j==n){
                                map.centerAndZoom(point, 12);
                                var marker = new BMap.Marker(point); 
                                map.addOverlay(marker);
                            }
                            // console.log(point);
                            var opts = {    
                                width : 50,     // 信息窗口宽度    
                                height: 10      // 信息窗口高度 
                            }    
                            var infoWindow = new BMap.InfoWindow(name.name, opts);  // 创建信息窗口对象    
                            map.openInfoWindow(infoWindow, map.getCenter());
                        }else {
                            this.$toask("对不起，找不到！");
                        }
                    });
                }
            }
        }
    },
    mounted() {
        this.map(0,0);
    },
    watch: {
        selected(val){
            if (val==1){
                this.f=1;
            }else {
                this.f=2;
            }
        }
    },
}
</script>

<style scoped>
/* 地图 */
#container {
    width: 100%;
    height: 25rem;
    transition: all .5s;
}
/* 地图信息 */
.map {
    position: absolute;
    width: 100%;
    top:0;
}
.map p {   
    text-align: center; 
    background-color: #fff;
}
.mint-tab-item {
    margin: 0 !important;
}
/* 显示 */
.is_selected {
    border-bottom: 3px solid #23beae !important;
    color:#23beae !important;
}
.dis {
    display: block !important;
}
</style>
