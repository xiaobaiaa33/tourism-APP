<template>
    <div :class="{alph_hid:is_show}">
        <ul>
            <p class="con" ref="show" :class="{'dis':p_show}">{{con}}</p>
            <li v-for="(item,i) of alphabetlist" :key="i" @click="dis">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["is_show"],
    data(){
        return {
            alphabetlist:["当前","热门","A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
            con:"",
            p_show:false
        }
    },
    methods: {
        dis(e){
            this.p_show=true;
            this.con=e.target.innerText;
            // 发送数据传到父组件
            this.$emit("change",this.con);
            // 获取元素
            const c=this.$refs.show;
            // 循环，如果寻找当前单击的位置
            for (let i=0;i<this.alphabetlist.length;i++){
                if (this.con==this.alphabetlist[i]){
                    let h=2.3+i*1.5;
                    c.style=`top:${h}rem`;
                }
            }
            setTimeout(()=>{
                this.p_show=false;
            },100);
        }
    }
}
</script>

<style scoped>
ul {
    color: #50b400;
    position: fixed;
    background-color: #eff1f5;
    padding-top: .8rem;
    height: 100%;
    top: 4rem;
    right: 0;
}
ul li {
    font-size: 16px;
    height: 1.1rem;
    margin-bottom: .4rem;
    text-align: center;
}
ul .con {
    display: none;
    position: absolute;
    width:3rem;
    text-align: center;
    right: 2.2rem;
    top : 2.3rem;
    background-color: rgba(80,180,0,.7);
    color: #fff;
    margin-top: -1.5rem;
    padding: 0 .2rem;
    font-size: 20px;
    border-radius: .2rem;
}
ul .dis {
    display: block;
}
.alph_hid {
    display: none;
}
</style>
