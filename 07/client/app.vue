<template>
    <div id="app">
        <Header></Header>
        <div class="tab">
            <todo-input></todo-input>
            <Tabs></Tabs>
        </div>
        <div class="user">
            <router-link to="/control/login">登录</router-link>
            <router-link to="/control/res">注册</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 1111
            };
        }
    };
</script>

<style scoped lang="scss">
    #app{
        width: 100%;
        height: 100%;
        background: url('./assets/images/bg2.jpg') no-repeat center/cover;
        margin: auto;
        border: 1px solid transparent;
        box-sizing: border-box;
        .tab{
            width: 600px;
            height: 200px;
            margin: auto;
        }
        .user{
            width: 150px;
            height: 30px;
            margin: auto;
            a{
                display: inline-block;
                width: 50px;
                height: 30px;
                background: greenyellow;
                border-radius: 5px;
                color: black;
                font-size: 20px;
                line-height: 30px;
                text-align: center;
            }
        }
    }
</style>
