import Vue from "vue"

const childComponent = {
    template: `
        <div> {{data.value}}</div>
    `,
    inject: ["father","data"]
}

const component = {
    components: {
        childComponent
    },
    /*template: `
        <div :style="styles">
            <div class="header">
                <slot name="header"></slot>
            </div>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    `,*/
    template:`
        <div :style="styles"> 
            <childComponent style="color: red"></childComponent>
            <slot  :value="value"></slot>
        </div>
    `,
    data(){
        return {
            styles:{
                width: "200px",
                height: "200px",
                border: "1px solid #aaa"
            },
            value: "I'm vue-component-child"
        }
    }
}

new Vue({
    el: "#app",
    components: {
        compOne: component
    },
    provide(){
        const data={};
        Object.defineProperty(data,"value",{
            get: () => this.value,
            enumerable: true
        })
        return {
            father: this,
            data
        }
    },
    data(){
        return {
            value: "I'm vue-component"
        }
    },
    template: `
        <div>
            <comp-one>
                <!--<span slot="header">66666</span>-->
                <!--<span slot="footer">777777</span>-->
                <span slot-scope="a">{{a.value}}</span>
            </comp-one>
            <input type="text" v-model="value">
        </div>
    `
})