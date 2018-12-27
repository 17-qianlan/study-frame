<template>
    <div class="routing">
        <router-link to="/login">登录</router-link>
        <router-link to="/app">主页</router-link>
        <router-link to="/res">注册</router-link>
    </div>
</template>

<script>
    export default {
        name: 'index'
    };
</script>

<style scoped>
    .routing a{
        display: block;
        font-size: 30px;
    }
    .routing .exact{
        color: green;
    }
</style>
