<template>
    <div class="res" ref="users">
        <h2>注册</h2>
        <ul>
            <li v-for="(item,index) of userData" :key="index">
                <input :type="item.type" :ref="item.ref" @focus="focusUser(item,index)" @blur="verification(item,index)" :placeholder="item.placeholder">
                <p v-if="item.msgErr">{{item.msg}}</p>
            </li>
            <!--<li>
                &lt;!&ndash;<span>账号:</span>&ndash;&gt;
                <input types="control" ref="control" @focus="focusUser" @blur="userInput" placeholder="5-10位纯数字">
                <p v-if="userErrMsg">账号格式错误;示例: 1122</p>
            </li>
            <li>
                &lt;!&ndash;<span>密码:</span>&ndash;&gt;
                <input types="password" ref="password" @blur="passwordInput" placeholder="6-16位">
                <p v-if="passwordErrMsg">密码格式错误;示例: zf112093</p>
            </li>
            <li>
                &lt;!&ndash;<span>确认密码:</span>&ndash;&gt;
                <input types="password" ref="confirmPassword" @blur="confirmPasswordInput" placeholder="6-16位">
                <p v-if="confirmErrMsg">两次密码不一致</p>
            </li>-->
            <li>
                <input type="button" value="注册" @click="send">
                <input type="button" value="重置" @click="cleanVal">
            </li>
        </ul>
        <alert :mag="mag" :isShow="isShow" @boo="handleShow" v-show="isShow"></alert>
    </div>
</template>

<script>
    import users from './users';
    export default users();

</script>

<style scoped lang="scss">
    .res {
        position: relative;
        width: 500px;
        min-height: 350px;
        height: auto;
        margin: 100px auto;
        font-size: 20px;

        h2 {
            width: 450px;
            height: 40px;
            margin: auto;
            text-align: center;
        }

        ul {
            width: 450px;
            min-height: 240px;
            height: auto;
            margin: 20px auto 0;
            font-size: 20px;

            li:not(:last-of-type) {
                width: 100%;
                min-height: 40px;
                height: auto;
                margin: 15px 0 0 5px;
                /*span {
                    display: inline-block;
                    width: 25%;
                    text-align: center;
                }*/
                /*input {
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

            li:nth-child(4) {
                width: 70%;
                height: 40px;
                margin: 50px auto 0;

                input {
                    width: 40%;
                    height: 100%;
                    margin-left: 20px;
                    cursor: pointer;
                }
            }

            input {
                border: 1px;
                border-radius: 5px;
                font-size: 20px;
            }
        }
    }
</style>
