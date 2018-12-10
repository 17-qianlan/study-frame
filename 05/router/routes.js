import Login from '../client/users/login';
import Res from '../client/users/registered';

export default [
    {
        path: '/user/login',
        component: Login
    },
    {
        path: '/user/res',
        component: Res
    }
];
