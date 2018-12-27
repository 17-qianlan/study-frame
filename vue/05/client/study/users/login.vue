<template>
    <div class="login" ref="users">
        <h2>登录</h2>
        <ul>
            <!--<li>
                <span>账号:</span>
                <input types="text"  ref="control">
            </li>
            <li>
                <span>密码:</span>
                <input types="text"  ref="pass">
            </li>-->
            <li v-for="(item,index) of userData" :key="index" class="input">
                <input :type="item.type" :ref="item.ref" @focus="focusUser(item,index)" @blur="verification(item,index)" :placeholder="item.placeholder">
                <p v-if="item.msgErr">{{item.msg}}</p>
            </li>
            <li v-if="errMsg" class="msg">{{msg}}</li>
            <li class="btn">
                <input type="button" value="登录" @click="send">
                <input type="button" value="重置" @click="cleanVal">
            </li>
        </ul>
        <alert :mag="mag" :isShow="isShow" @boo="handleShow" v-show="isShow"></alert>
    </div>
</template>

<script>
    import users from './users';
    export default users('login');
</script>

<style scoped lang="scss">
    .login {
        position: relative;
        width: 500px;
        height: 350px;
        margin: 100px auto;
        font-size: 20px;
        h2 {
            width: 95%;
            height: 40px;
            margin: auto;
            text-align: center;
        }
        ul {
            width: 95%;
            height: 70%;
            margin: 20px auto 0;
            font-size: 20px;
            li.input {
                width: 100%;
                min-height: 40px;
                margin: 15px 0 0 5px;
                /*span{
                    display: inline-block;
                    width: 25%;
                    text-align: center;
                }*/
                /*input{
                    display: inline-block;
                    width: 68%;
                    height: 25px;
                    line-height: 20px;
                    text-indent: 10px;
                }*/
                input{
                    display: block;
                    width: 95%;
                    height: 40px;
                    line-height: 40px;
                    text-indent: 10px;
                }
                p {
                    display: block;
                    width: 100%;
                    height: 40px;
                    margin-top: 5px;
                    color: red;
                    line-height: 40px;
                    text-align: left;
                }
            }
            li.btn{
                width: 70%;
                height: 40px;
                margin: 30px auto 0;
                input{
                    width: 40%;
                    height: 100%;
                    margin-left: 20px;
                    cursor: pointer;
                }
            }
            li.msg {
                width: 90%;
                height: 50px;
                margin-left: 10px;
                color: red;
                text-align: left;
                line-height: 50px;
            }
            input{
                border: 1px;
                border-radius: 5px;
                font-size: 20px;
            }
        }
    }
</style>
