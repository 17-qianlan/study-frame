<template>
    <div class="wrap">
        <nav-list :list="list"></nav-list>
        <!--<First></First>-->
    </div>
</template>

<script>
    import NavList from './nav-list.vue';
    // import First from './first';
    export default {
        name: 'index',
        props: ['list'],
        components: {
            NavList
            // First
        }
    };
</script>

<style scoped lang="scss">
    nav{
        width: 500px;
        margin: 100px auto;
    }
</style>
