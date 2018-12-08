<template>
    <div class="first">
        <p>我是组件<span>first</span></p>
    </div>
</template>

<script>
    export default {
        name: 'first'
    };
</script>

<style lang="scss" scoped>
    .first{
        p{
            span{
                color: red;
            }
        }
    }
</style>
