<template>
    <div class="jump">
        <p>登录成功</p>
        <!--不需要这么做,可以直接使用v-if就可以了-->
    </div>
</template>

<script>
    export default {
        name: 'jump'
    };
</script>

<style scoped lang="scss">
    .jump{
        width: 500px;
        height: 500px;
        p{
            width: 200px;
            height: 100px;
            margin: auto;
            font-size: 30px;
        }
    }
</style>
