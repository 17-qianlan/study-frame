<template>
    <div id="app">
        <Header></Header>
        <div class="tab">
            <todo-input></todo-input>
            <Tabs></Tabs>
        </div>
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
    }
</style>
