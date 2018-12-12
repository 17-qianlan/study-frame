<template>
    <div class="alert" :style="styles" @click="clickShow">
        <section class="msg">
            <p>请输入账号或密码</p>
            <input type="button" value="确定" />
        </section>
    </div>
</template>

<script>
    export default {
        name: 'alert',
        props: ['mag', 'isShow'],
        data() {
            return {
                styles: {}
            };
        },
        methods: {
            clickShow() {
                this.isShow = 'false';
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
            },
            styles(val) {
                this.styles = val;
            },
            isShow(val) {
                this.$emit('isShow', val);
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
            margin: 200px auto;
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
