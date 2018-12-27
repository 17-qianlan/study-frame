import tool from '../../assets/js/tool.js';
import api from '../../axios';

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
                ],
                /*
                userErrMsg: false,
                passwordErrMsg: false,
                confirmErrMsg: false
                */
                msg: '',
                errMsg: ''
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
                    if (item[0].value === '') {
                        this.isShow = true;
                        break;
                    }
                    val += item[0].value + '/';
                }
                let _val = val.split('/');
                if (!_val[0]) return;
                /* this.axios.post('/user/' + (type === 'login' ? 'login' : 'res'), {
                    username: _val[0],
                    password: _val[1]
                }).then(({ data }) => {
                    if (data.loginSuccess) {
                        this.$router.push({ // 返回首页
                            path: '/'
                        });
                        this.$store.commit('updateShowLoginState', false);
                        tool.setItem('username', _val[0]);
                    } else if (data.resSuccess) { // 返回到登录页面
                        this.$router.push({
                            path: '/user/login'
                        });
                    } else if (data.userExisted) { // 提示用户名不存在
                        this.msg = '用户名不存在';
                    } else if (data.wrongPassword) { // 提示密码错误
                        this.msg = '密码错误';
                    }
                }).catch(errors => {
                    console.log(errors);
                }); */
                let options = {
                    username: _val[0],
                    password: _val[1]
                };
                if (type === 'login') {
                    // api.userLogin(options).then(({ data }) => {
                    this.$store.dispatch('UserLogin', options).then((data) => {
                        if (data.loginSuccess) {
                            this.$store.commit('updateShowLoginState', false);
                            // tool.setItem('username', _val[0]);
                            // let token = data.token;
                            // let username = _val[0];
                            this.$router.push({ // 返回首页
                                path: '/index'
                            });
                        } else if (data.userExisted) { // 提示用户名不存在
                            this.msg = '用户名不存在';
                            this.errMsg = true;
                        } else if (data.wrongPassword) { // 提示密码错误
                            this.msg = '密码错误';
                            this.errMsg = true;
                        };
                    }).catch(errors => {
                        console.log(errors);
                    });
                } else if (type === 'registered') {
                    api.userRes(options).then(({ data }) => {
                        if (data.resSuccess) { // 返回到登录页面
                            this.$router.push({
                                path: '/control/login'
                            });
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                }
            },
            handleShow(val) {
                this.isShow = val;
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
                this.errMsg = false;
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
                }
                ;
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
                }
                ;
            }
        }
    };
};
