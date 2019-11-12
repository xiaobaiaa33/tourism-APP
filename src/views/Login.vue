<template>
    <div>
        <login-head></login-head>
        <login-info></login-info>
    </div>
</template>

<script>
import LoginHead from '@/components/login/Login-Head.vue'
import LoginInfo from '@/components/login/Login-Info.vue'
export default {
    data(){
        return {
            
        }
    },
    components:{
        LoginHead,
        LoginInfo
    }
}
</script>

<style scoped>

</style>
