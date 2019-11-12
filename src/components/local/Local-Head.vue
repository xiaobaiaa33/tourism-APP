<template>
    <div>
        <div class="search">
            <span class="iconfont">&#xe621;</span>
            <input type="text" placeholder="中文/拼音/首字母" v-focus v-model="change" :class="{change_width:is_show}">
            <span class="cross" :class="{show:is_show}" @click="cross">x</span>
            <span class="cancel" :class="{show:is_show}" @click="cancel">取消</span>
        </div>
        <ul :class="{show:is_show}">
            <li class="tips">{{tips_txt}}</li>
            <li v-for="(item,i) of search_city" :key="i" @click="search_list_city" :data-city="item">{{item}}</li>
        </ul>
    </div>
    
</template>

<script>
export default {
    props:["alph_list"],
    data(){
        return {
            change:"",
            is_show:false,
            // 查询的城市数组
            search_city:[],
            // 提示文字
            tips_txt:"请输入城市名（如北京、bj、beijing）"
        }
    },
    methods: {
        cross(){
            this.change=" ";
        },
        cancel(){
            this.change="";
        },
        sorry(val){
            this.tips_txt="对不起,找不到 "+val;
        },
        // 单击查找出的列表城市，修改store的城市名称
        search_list_city(e){
            this.$store.dispatch("change_city",e.target.dataset.city);
            this.$router.push("/index");
        }
    },
    watch: {
        change(){
            // 获取input的值，监听是否为空
            let val=this.change;
            if (val==""){
                this.is_show=false;
            }else {
                this.is_show=true;
            }
            // 向父组件传值
            this.$emit("show",this.is_show);
            // 去掉左右空格
            val=val.trim();
            // 清空提示框
            this.tips_txt="";
            // 清空城市数组
            this.search_city=[];
            // 如果是数字,显示找不到
            if (/^\d+$/.test(val)){
                this.sorry(val);
            // 如果是字母,检索
            }else if (/^[a-zA-Z]+$/.test(val)){
                // 把val全部转换为小写字母
                val=val.toLowerCase();
                // 判断第一个字母,能找到就找对应字母的数据
                for (let i in this.alph_list){
                    // console.log(val.substr(0,1),i.toLowerCase());
                    // 如果输入的第一位字母和对象的属性相同,遍历对应的数组
                    if (val.substr(0,1)==i.toLowerCase()){
                        // console.log(this.alph_list[i]);
                        // 遍历首字母一样的数组
                        for (let j of this.alph_list[i]){
                            // 如果能找得到,把城市添加到数组中
                            if (j.pinyin.indexOf(val)>-1){
                                this.search_city.push(j.name);
                            }
                        }
                        if (this.search_city.length==0){
                            this.sorry(val);
                        }
                    }
                }
                // console.log(this.alph_list);
            // 如果是汉字,检索
            }else if (/^[\u4e00-\u9fa5]+$/.test(val)){
                // 遍历每个字母
                for (let i in this.alph_list){
                    // 循环每个字母的文字，包含输入的文字添加到城市数组
                    for (let j of this.alph_list[i]){
                        if (j.name.indexOf(val)>-1){
                            this.search_city.push(j.name);
                        }
                    }
                }
                if (this.search_city.length==0){
                    this.sorry(val);
                }
            // 否则找不到(特殊字符)
            }else {
                this.sorry(val);
            }
        }
    },
    directives:{
        // 获取焦点指令
        focus:{
            inserted:function(elem){
                elem.focus();
            }
        }
    }
}
</script>

<style scoped>
.search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing:border-box;
    background: #e0e4ec;
    padding: .5rem;
    z-index: 20;
}
.search_hid {
    display: none;
}
.search span {
    position: absolute;
    top: .9rem;
    left: .8rem;
    font-size: 24px;
    color: #c9c9c9;
}
.search input {
    box-sizing:border-box;
    outline: 0;
    border: 0;
    height: 2.5rem;
    width: 100%;
    padding-left: 2.2rem;
    font-size: 15px;
    border-radius: .2rem;
}
.search .cross {
    display: none;
    position: absolute;
    top: 1.1rem;
    left: 0;
    right: 3rem;
    left: 17.5rem;
    width: 1.3rem;    
    height: 1.3rem;
    line-height: 1.3rem;
    border-radius: 50%;
    background-color: #ccc;
    color: #fff;
    text-align: center;
    font-size: 15px;

}
.search .cancel {
    display: none;
    position: absolute;
    top:1rem;
    left: 0;
    left: 20.5rem;
    line-height: 1.5rem;
    font-size: 18px;
    color: #000;
}
div .show {
    display: inline !important;
}
div ul {
    display: none;
    position: absolute;
    z-index: 15;
    top:3.5rem;
    background-color: #e9ecf1;
    width: 100%;
    height: 92%;
}
div ul .tips {
    font-size: 12px;
    height: .5rem;
    line-height: .5rem;
    color: #999;
}
div ul li {
    padding: .5rem;
    font-size: 15px;
    height: 1.5rem;
    line-height: 1.5rem;
    border-bottom: 1px solid rgba(204,204,204,0.5);
    background-color: #fff;
}
/* 改变搜索框宽度 */
.search .change_width {
    width: 85%;
}
</style>
