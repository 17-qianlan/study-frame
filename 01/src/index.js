import Vue from "vue"
import "./base.css"
import App from "./app.vue"


const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
    render: (h) => h(App)
}).$mount(root);