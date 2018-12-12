export default () => {
    return {
        name: 'registered',
        data() {
            return {
                aInp: {},
                mag: {},
                isShow: false
            };
        },
        mounted() {
            this.aInp = this.$refs;
            this.mag = this.getOffset(this.$refs.user);
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
                    val += item.value + '/';
                }
                console.log(val);
            },
            handleShow(val) {
                this.isShow = val;
                this.aInp.user.focus();
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
            }
        }
    };
};
