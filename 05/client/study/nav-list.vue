<template>
    <nav>
        <ul>
            <li v-for="item of list" :key="item">{{item}}</li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'nav-list',
        props: ['list'],
        mounted() {
            console.log(this.$);
        }
    };
</script>

<style scoped>

</style>
