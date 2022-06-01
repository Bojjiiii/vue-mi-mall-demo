let baseUrl;
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = 'https://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseUrl = 'https://test-mall-pre.springboot.cn/api'
        break;
    case 'prod':
        baseUrl = 'https://mall-pre.springboot.cn/api'
        break;
    default:
        break;
}
export default {
    baseUrl
}