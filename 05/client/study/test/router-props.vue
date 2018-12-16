<template>
    <div class="prp">
        <p>{{id}}</p>
        <button @click="changed">点击修改id值</button>
    </div>
</template>

<script>
    export default {
        name: 'router-props',
        props: ['id'],
        methods: {
            changed() {
                this.$emit('id', 99999);// 不可修改
            }
        }
    };
</script>

<style scoped>
    .prp{
        width: 500px;
        height: 100px;
        margin: 100px auto;
        color: red;
        font-size: 20px;
        font-weight: bold;
    }
</style>
