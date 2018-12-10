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
            // First
        }
    };
</script>

<style scoped lang="scss">

    #app{
        width: 500px;
        margin: 100px auto;
        ul {
            li {
                width: 50px;
                height: 30px;
                background: greenyellow;
                border-radius: 5px;
                margin-left: 5px;
                text-align: center;
                line-height: $l-height;
                a {
                    color: black;
                }
            }
        }
    }
</style>
