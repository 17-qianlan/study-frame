import tool from '../../assets/js/tool.js';
export default (type = 'registered') => {
    return {
        name: type,
        data() {
            return {
                aInp: {},
                mag: {},
                isShow: false,
                userData: [
                    {
                        type: 'user',
                        ref: 'user',
                        placeholder: '账号: 5-10位纯数字',
                        msg: '账号格式错误',
                        span: '账号',
                        msgErr: false
                    },
                    {
                        type: 'password',
                        ref: 'password',
                        placeholder: '6-16位数字或字母符号',
                        msg: '密码格式错误',
                        span: '密码',
                        msgErr: false
                    },
                    {
                        type: 'password',
                        ref: 'confirmPassword',
                        placeholder: '请再次输入密码',
                        msg: '两次密码不一致',
                        span: '确认密码',
                        msgErr: false
                    }
                ]
                /*
                userErrMsg: false,
                passwordErrMsg: false,
                confirmErrMsg: false
                */
            };
        },
        mounted() {
            this.aInp = this.$refs;
            this.mag = this.getOffset(this.$refs.users);
            delete this.aInp.users;
            if (type === 'login') {
                this.userData = this.userData.splice(0, 2);
                delete this.aInp.confirmPassword;
            }
        },
        methods: {
            cleanVal() {
                for (const item of Object.values(this.aInp)) {
                    item.value = '';
                }
                this.aInp.user.focus();
            },
            send() {
                let val = '';
                for (const item of Object.values(this.aInp)) {
                    if (item.value === '') {
                        this.isShow = true;
                        break;
                    }
                    val += item[0].value + '/';
                }
                let _val = val.split('/');
                this.axios.post('/user/' + (type === 'login' ? 'login' : 'res'), {
                    username: _val[0],
                    password: _val[1]
                }).then(data => {
                    console.log(data);
                }).catch(errors => {
                    console.log(errors);
                });
            },
            handleShow(val) {
                this.isShow = val;
                this.aInp.user.focus();
            },
            /*
            userInput(e) {
                let val = e.target.value;
                let reg = tool.pattern.control;
                this.userErrMsg = !reg.test(val);
            },
            passwordInput(e) {
                let val = e.target.value;
                let reg = tool.pattern.password;
                this.passwordErrMsg = !reg.test(val);
            },
            confirmPasswordInput(e) {
                let valOne = e.target.value;
                let valTwo = this.aInp.pass.value;
                this.confirmErrMsg = valOne !== valTwo;
            },
            */
            focusUser(item, index) {
                item.msgErr = false;
            },
            getOffset(ele) {
                let obj = {
                    left: 0,
                    top: 0
                };
                while (ele !== document.body) {
                    obj.top += ele.offsetTop + ele.offsetParent.clientTop;
                    obj.left += ele.offsetLeft + ele.offsetParent.clientLeft;
                    ele = ele.offsetParent;
                };
                return obj;
            },
            verification(item, index) {
                let _ref = item.ref;
                let val = this.$refs[_ref][0].value;
                if (index === 0 || index === 1) {
                    let reg = tool.pattern[_ref];
                    item.msgErr = !reg.test(val);
                } else if (index === 2) {
                    let _val = this.$refs.password[0].value;
                    item.msgErr = val !== _val;
                };
            }
        }
    };
};
