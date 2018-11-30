import Vue from "vue";

const component = {
    name: "comp",
    props: {
        props1: String
    },
    render(createElement){
        return createElement("div",{
            style: this.style,
        },[
            this.$slots.default,
            this.props1
        ])
    },
    data(){
        return{
            style: {
                width: "800px",
                height: "200px",
                border: "1px solid #aaa"
            }
        }
    }
}

new Vue({
    components: {
        CompOne: component,
    },
    el: "#app",
    data(){
        return {
            value: "123"
        }
    },
   render(createElement){
        return createElement("comp-one",{
            ref: "comp",
            props: {
                props1: this.value
            },
            nativeOn: {
                click: this.handleClick
            }
        },[
            createElement("span",{
                ref: "span",
                attrs: {
                    id: "test-id"
                }
            },this.value)
        ])
   },
    methods: {
        handleClick(){
            console.log(111111);
        }
    }
})