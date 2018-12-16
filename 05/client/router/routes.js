import Login from '../study/users/login';
import Res from '../study/users/registered';
import Prop from '../study/test/router-props';

export default [
    {
        path: '/control/login',
        component: Login
    },
    {
        path: '/control/res',
        component: Res
    },
    {
        path: '/nav/11',
        component: Prop,
        props: {
            id: 55555
        }
    }
];
