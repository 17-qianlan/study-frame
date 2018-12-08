import Index from '../../views/todo/index.vue';
import Res from '../../views/login/registered.vue';
import Login from '../../views/login/login.vue';
import ResLogin from '../../views/login/reslogin.vue';
import testRouterViewName from '../../views/test/test-router-view-name.vue';

export default [
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app',
        component: Index
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/res',
        components: {
            default: Res,
            testName: testRouterViewName
        }/*,
        beforeEnter(to,from,next){
            console.log("我是beforeEnter");
            next();
        } */
    },
    {
        path: '/user',
        component: ResLogin
    }
];
