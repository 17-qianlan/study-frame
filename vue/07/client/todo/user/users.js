import tool from '../../assets/js/tool';
import api from '../../axios';

export default (type = 'registered') => {
    return {
        name: type,
        data() {
            return {
                userData: [
                    {
                        type: 'user',
                        span: '账号:',
                        placeholder: '请输入用户名',
                        msgErr: '用户名类型错误,长度4-10,可以是数字和字母或混合',
                        show: false,
                        loginMsgErr: false,
                        ref: 'user'
                    },
                    {
                        type: 'password',
                        span: '密码:',
                        placeholder: '请输入密码',
                        msgErr: '密码类型错误,长度6-16,可以是数字和字母或混合',
                        loginMsg: '密码或者用户名错误',
                        loginMsgErr: false,
                        show: false,
                        ref: 'password'
                    },
                    {
                        type: 'password',
                        span: '确认密码:',
                        placeholder: '请再次输入密码',
                        msgErr: '两次密码输入不一致',
                        loginMsg: false,
                        show: false,
                        ref: 'confirmPassword'
                    }
                ],
                aInp: [],
                inputRules: tool.pattern
            };
        },
        mounted() {
            if (type === 'login') {
                this.userData.splice(2, 1);
            };
            for (const val of Object.values(this.$refs)) {
                this.aInp.push(val);
            }
        },
        methods: {
            reset() {
                let arr = this.aInp;
                arr.forEach(item => {
                    item[0].value = '';
                });
            },
            send() {
                let opt = this.inputBlur();
                if (opt.isTrue) {
                    api.userRes(opt.options).then(({ data }) => {
                        console.log(data);
                    }).catch(errors => {
                        console.log(errors);
                    });
                }
            },
            opt() {
                let arr = this.aInp;
                let options = {
                    username: arr[0][0].value,
                    password: arr[1][0].value
                };
                return options;
            },
            inputBlur() {
                let options = this.opt();
                if (!options) return false;
                if (!this.inputRules.user.test(options.username)) {
                    this.userData[0].show = true;
                    return false;
                } else {
                    this.userData[0].show = false;
                }
                let isTrue = false;
                if (!this.inputRules.password.test(options.password)) {
                    this.userData[1].show = true;
                    return false;
                } else {
                    this.userData[1].show = false;
                }
                if (type === 'login') {
                    isTrue = true;
                } else {
                    let confirmPassword = this.$refs.confirmPassword[0].value;
                    if (confirmPassword === options.password) {
                        isTrue = true;
                    };
                }
                return {
                    options,
                    isTrue
                };
            }
        }
    };
};
