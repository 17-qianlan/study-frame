import tool from '../../assets/js/tool';

export default {
    isShowLoginState: true,
    token: tool.getItem('token', 1) || '',
    username: tool.getItem('username', 1) || ''
};
