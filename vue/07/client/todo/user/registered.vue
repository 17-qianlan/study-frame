<template>
    <section class="login">
        <ul class="input">
            <li v-for="(item, index) of userData" :key="index" >
                <span>{{item.span}}</span>
                <input :type="item.type" :placeholder="item.placeholder" :ref="item.ref" />
                <p v-if="item.show">{{item.msgErr}}</p>
                <p v-if="item.loginMsgErr">{{item.loginMsg}}</p>
            </li>
        </ul>
        <ul class="btn">
            <li><input type="button" value="登录" @click="send"></li>
            <li><input type="button" value="重置" @click="reset"></li>
        </ul>
    </section>
</template>

<script>
    import users from './users';
    export default users();
</script>

<style scoped lang="scss">
    section{
        width: 500px;
        height: auto;
        margin: auto;
        .input{
            width: 92%;
            height: auto;
            margin: auto;
            line-height: 30px;
            li{
                width: 100%;
                height: auto;
                margin-top: 10px;
                span{
                    display: inline-block;
                    width: 98px;
                    height: 30px;
                    font-size: 23px;
                }
                input{
                    display: inline-block;
                    width: 350px;
                    height: 30px;
                    border: 0;
                    border-radius: 5px;
                    margin-left: 5px;
                    font-size: 19px;
                    line-height: 30px;
                    text-indent: 15px;
                }
                p{
                    margin-left: 10px;
                    color: red;
                }
            }
        }
        .btn{
            width: 60%;
            height: 40px;
            margin: 30px auto;
            li{
                display: inline-block;
                width: 100px;
                height: 30px;
                background: #eee;
                input{
                    width: 100%;
                    height: 100%;
                    border: 0;
                    border-radius: 5px;
                    font-size: 20px;
                    text-align: center;
                    line-height: 30px;
                    cursor: pointer;
                }
            }
            li:nth-child(2){
                margin-left: 50px;
            }
        }
    }
</style>
