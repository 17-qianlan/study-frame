import Vue from "vue"
import App from "./app.vue"

const app = document.createElement("div");
document.body.appendChild(app);

new Vue({
    render: (h) => h(App)
}).$mount(app);