<template>
    <div class="input">
        <input type="text" placeholder="接下来干什么" ref="aInp" @keydown.13="saveData"/>
    </div>
</template>

<script>
    export default {
        name: 'todo-input',
        data() {
            return {
                num: 0
            };
        },
        mounted() {
            this.$refs.aInp.focus();
        },
        methods: {
            /* 可以检测一下,查看是否有相同的, (使用forEach就可以进行比较了) 但是这个不是很有必要,因为用户自己想添加什么就添加什么,不需要做过多的限制 */
            saveData(e) {
                this.num++;
                e.target.blur();
                let val = e.target.value;
                if (val) {
                    let _val = {
                        id: 'selected' + this.num,
                        name: 'chosen' + this.num,
                        content: val,
                        completed: false,
                        show: false
                    };
                    this.$store.commit('pushData', _val);
                }
                e.target.value = '';
            }
        }
    };
</script>

<style scoped lang="scss">
    .input{
        display: block;
        width: 90%;
        height: 40px;
        input{
            width: 100%;
            height: 100%;
            border-radius: 5px;
            border: 0;
            border-bottom: 2px solid rgb(248,130,173);
            font-size: 20px;
            text-indent: 20px;
        }
    }
</style>
