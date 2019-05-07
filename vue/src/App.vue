<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  // 百度地图获取地址
  mounted() {
    var map = new BMap.Map("allmap");
    var myCity = new BMap.LocalCity();
    myCity.get((r)=>{
      if (r){
        // 修改store中的数据
        this.$store.state.city=r.name;
      }else {
        this.$store.state.city="杭州";
      }
    });
  },
}
</script>

<style scoped>

</style>
