import Vue from "vue"


const comp = {
    props: {
        prop: String
    },
    data() {
        return {
            text: "88888",
            style: {
                width: "200px",
                height: "200px",
                border: "1px solid #aaa"
            }
        }
    },
    render(createElement) {
        return createElement("div", {
            style: this.style,
            on: {
                click: () => {
                    //this.$emit("click")
                    //现在是不会被触发的了,要用this.$emit告诉父组件你被修改了,否则在父组件内使用nativeOn绑定
                }
            }
        },[
            this.$slots.default,
            this.prop
        ])
    }
}

new Vue({
    name: "App",
    el: "#app",
    components: {
        comp
    },
    data() {
        return {
            spanInner: "我是span标签",
            spanStyle: {
                color: "red"
            }
        }
    },
    methods: {
        handleClick(){
            alert("我被触发了,很开心,这样写可以不用再到子组件里边绑定一次了")
        }
    },
    render(createElement) {
        let that = this;
        return createElement("comp", {
            ref: "comp",
            props: {
                prop: "我从父组件传下来的,你接收到了吗????"
            },
            on: {
                click: this.handleClick
            }
            /*,
            nativeOn: {
                click: this.handleClick
            }*/
        }, [
            createElement("span", {
                style: this.spanStyle
            }, this.spanInner),
            createElement("input", {
                domProps: {
                    value: this.spanInner
                },
                on: {
                    input(e) {
                        that.spanInner = e.target.value
                    }
                }
            })
        ])
    }
})