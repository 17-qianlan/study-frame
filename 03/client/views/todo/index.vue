<template>
    <div class="routing">
        <a href="/login">登录</a>
        <a href="/app">主页</a>
        <a href="/res">注册</a>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .routing a{
        display: block;
        font-size: 30px;
    }
</style>