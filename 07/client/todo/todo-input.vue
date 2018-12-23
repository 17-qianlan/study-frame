<template>
    <div class="input">
        <input type="text" placeholder="接下来干什么" ref="aInp" @keydown.13="saveData"/>
    </div>
</template>

<script>
    export default {
        name: 'todo-input',
        mounted() {
            this.$refs.aInp.focus();
        },
        methods: {
            saveData(e) {
                e.target.blur();
                let val = e.target.value;
                if (val) {
                    let _val = {
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
