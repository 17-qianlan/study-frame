<template>
    <div class="wrap">
        <nav-list :list="list"></nav-list>
    </div>
</template>

<script>
    import NavList from './nav-list.vue';
    export default {
        name: 'index',
        props: ['list'],
        components: {
            NavList
        }
    };
</script>

<style scoped>

</style>
