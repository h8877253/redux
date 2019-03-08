import { combineReducers } from 'redux'
import { USER_LOGIN, ADD_ORDER_NUM, USER_LOGOUT,DELETE_ORDER_NUM } from './actionTypes'
import initialState  from './state'
// import { setUserInfo, removeUserInfo } from '../utils/'
// let userReducer = (state = initialState.userReducer, action) => {
//     switch (action.type) {
//         case USER_LOGIN:
//             setUserInfo(action.payload)
//             return {
//                 ...state,
//                 userName: action.payload
//             }
//         case USER_LOGOUT:
//             removeUserInfo()
//             return {
//                 ...state,
//                 userName: null
//             }
//         default:
//             return state
//     }
// }

let orderReducer = (state = initialState.orderReducer, action) => {
    switch (action.type) {
        case ADD_ORDER_NUM:
            return {
                ...state,
                num: ++state.num,
                completed:true
            }
        case DELETE_ORDER_NUM:
            return {
                ...state,
                num: --state.num,
                completed:false
            }
        default:
            return state
    }
}

export default combineReducers({
    // userReducer,
    orderReducer,
})
