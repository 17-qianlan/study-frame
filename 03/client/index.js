import Vue from "vue"
import VueRouter from "vue-router"
import Vuex from "vuex"

import App from "./app.vue"
import createRouter from "./config/router/router.js"
import createStore from "./store/store.js"

Vue.use(VueRouter);
Vue.use(Vuex);
const router = createRouter();
const store = createStore();

/*
router.beforeEach((to,from,next) => {
    //to && from : name fullPath hash matched meta params query path
    console.log("我是beforeEach");
    next();
})
router.beforeResolve((to,from,next) => {
    console.log("我是beforeResolve");
    next();
})
router.afterEach((to,from,next) => {
    console.log("我是afterEach");
})
*/

new Vue({
    el : "#app",
    router,
    store,
    render : (h) => h(App)
});