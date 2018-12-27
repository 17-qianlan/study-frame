import Vue from "vue";

const component = {
    props: {
        propOne: String
    },
    template: `
        <div class="father"> 
            <input type="text" v-model="propOne">
            <div v-show="propOne">{{msg}}</div>
        </div>
    `,
    data(){
        return{
            text: 222222
        }
    }
}

const component2 = {
    extends: component,
    mounted(){
        console.log();
    },
    data(){
        return {
            text: 666666,
            msg : this.$parent.$options
        }
    }
}
const Comp = Vue.extend(component);

/*new Comp({
    el: "#app",
    propsData: {
        propOne: "xxx"
    },
    data(){
        return {
            text: 444444
        }
    }
})*/

new Vue({
    el: "#app",
    name: "App",
    components: {
        com : component2
    },
    template: `
        <div> 
            <span v-text="text"></span>
            <com :propOne="msg"></com>
        </div>
    `,
    data(){
        return{
            text: 999999,
            msg: "xxx"
        }
    }
})
