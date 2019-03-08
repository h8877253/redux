import { USER_LOGIN, ADD_ORDER_NUM, USER_LOGOU,DELETE_ORDER_NUM } from './actionTypes'
// export function userLogin(payload) {
//     return {
//         type: USER_LOGIN,
//         payload
//     }
// }
// export function logout() {
//     return {
//         type: USER_LOGOUT
//     }
// }
export function addOrderNum() {
    return {
        type: ADD_ORDER_NUM
    }
}
export function deleteOrderNum() {
    return {
        type: DELETE_ORDER_NUM
    }
}