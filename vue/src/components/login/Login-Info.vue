<template>
    <div class="info">
        <button @click="login">登录</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            is_login:false,
            user:""
        }
    },
    methods: {
        login(){
            this.$messagebox.prompt(" ","登录",{inputPlaceholder:"用户名"}).then(({value})=>{
                this.$toast(`您好！${value}，欢迎回来`);
                sessionStorage.setItem("user",value);
                this.$router.push(`/index`);
            }).catch(()=>{
                this.$toast("取消登录");
            });
        }
    },
}
</script>

<style scoped>
.info {
    height: 6rem;
    background: #00c8b3;
    text-align: center;
    line-height: 6rem;
}
.info button {
    background: #f3f6fc;
    color: #2c2d30;
    outline: 0;
    border: 0;
    width: 10rem;
    height: 2rem;
}
</style>
