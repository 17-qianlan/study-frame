import Router from "vue-router"
import routes from "./routes.js"

export default () => {
    return new Router({
        mode: "history",
        routes,
        // base: "/base/",//添加到base到默认路由,会重定向时(或使用vue-router的标签)就添加,其他如a标签不会添加
        linkActiveClass: "active",
        linkExactActiveClass: "exact",
        savedBehavior(to,from,savedPosition){
            if(savedPosition){
                return savedPosition;
            }else{
                return {x:0,y:0}
            }
        }
    })
}
