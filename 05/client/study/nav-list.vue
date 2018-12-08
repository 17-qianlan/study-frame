<template>
    <nav>
        <ul class="fix">
            <li v-for="item of list" :key="item" class="fl">
                <router-link :to="{ path: '/nav/'+item}">{{item}}</router-link>
            </li>
        </ul>
        <router-view />
    </nav>
</template>

<script>
    export default {
        name: 'nav-list',
        props: ['list']
    };
</script>

<style scoped lang="scss">
    $l-height: 30px;
    nav{
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
