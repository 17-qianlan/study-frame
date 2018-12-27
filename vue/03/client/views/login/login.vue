<template>
    <div class="login">
        <span>我是login</span>
        <router-link to="/login">走,去登陆</router-link>
    </div>
</template>

<script>
    export default {
        name: 'login'
    };
</script>

<style scoped>
    .login .active{
        display: block;

    }
    .login .exact{
        color: black
    }
</style>
