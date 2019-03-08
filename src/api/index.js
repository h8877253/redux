import fetch from './fetch'

// example 获取数据json模拟
export function apiGetData() {
    return fetch({
        url: '/api/data/menu-list',
        method: 'get'
    })
}

// 登录校验
export function apiLogin(params) {
    return fetch({
        url: '/api/login/validate',
        method: 'get',
        params
    })
}
