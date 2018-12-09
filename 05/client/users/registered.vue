<template>
    <div class="res">
        <h2>注册</h2>
        <ul>
            <li>
                <span>账号:</span>
                <input type="text">
            </li>
            <li>
                <span>密码:</span>
                <input type="text">
            </li>
            <li>
                <input type="button" value="注册">
                <input type="button" value="重置">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'registered',
        data() {

        }
    };
</script>

<style scoped lang="scss">
    .res{
        width: 600px;
        height: 400px;
        margin: 100px auto;
        font-size: 20px;
        h2{
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
        }
        ul{
            width: 100%;
            height: 100%;
            li{
              width: 100%;
            }
        }
    }
</style>
