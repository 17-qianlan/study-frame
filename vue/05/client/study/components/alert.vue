<template>
    <div class="alert" :style="styles">
        <section class="msg" :style="sectionCss">
            <p>请输入账号或密码</p>
            <input type="button" value="确定" @click="clickShow"/>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'alert',
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            mag: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                styles: {},
                sectionCss: {}
            };
        },
        methods: {
            clickShow() {
                this.$emit('boo', false);
            }
        },
        watch: {
            mag(val) {
                this.$emit('mag', val);
                this.styles = {
                    width: window.innerWidth.toString() + 'px',
                    height: window.innerHeight.toString() + 'px',
                    left: -val.left + 'px',
                    top: -val.top + 'px'
                };
                this.sectionCss = {
                    margin: val.top * 2.5 + 'px auto'
                };
            },
            styles(val) {
                this.styles = val;
            }
        }
    };
</script>

<style scoped lang="scss">
    .alert {
        position: absolute;
        background: rgba(56, 114, 116, 0.8);
        .msg {
            width: 200px;
            height: 100px;
            border-radius: 5px;
            background: #c87b98;
            p{
                width: 100%;
                height: 50px;
                text-align: center;
                line-height: 50px;
            }
            input {
                display: block;
                width: 60px;
                height: 30px;
                margin: auto;
                cursor: pointer;
            }
        }
    }
</style>
