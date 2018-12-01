import Router from "vue-router"
import routes from "./routes.js"

export default () => {
    return new Router({
        mode: "history",
        routes: routes
    })
}
