import tool from '../assets/js/tool';

export default {
    itemArr: [],
    token: tool.getItem('token', 1) || '',
    username: tool.getItem('username', 1) || ''
};
