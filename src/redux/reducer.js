import { combineReducers } from 'redux'
import storageUtils from '../utils/storageUtils'
import { SET_HEADER_TITLE, LOGIN_SUCCESS, LOGIN_Fail, LOG_OUT, SET_LOGS } from './action-types'

const initUser = storageUtils.getUser()
function user(state = initUser, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.user
        case LOGIN_Fail:
            return { ...state, merrorMsg: action.errorMsg }
        case LOG_OUT:
            return {}
        default:
            return state
    }
}

const initheaderTitle = '首页'
function headerTitle(state = initheaderTitle, action) {
    switch (action.type) {
        case SET_HEADER_TITLE:
            return action.data
        default:
            return state
    }
}

const initLogs = [{
    id: 0,
    status: 'status_a',
    title: '内容：每周七天阅读五次',
    username: 'spring',
    message: 10
}, {
    id: 1,
    status: 'status_b',
    title: '内容：每周七天健身4次',
    username: 'orange',
    message: 5
}, {
    id: 2,
    status: 'status_a',
    title: '内容：TROWIRO',
    username: 'vivian',
    message: 2
}, {
    id: 3,
    status: 'status_b',
    title: '内容：RERER',
    username: 'shark',
    message: 2
}, {
    id: 4,
    status: 'status_a',
    title: '内容：KLAKD',
    username: 'milly',
    message: 2
}, {
    id: 5,
    status: 'status_b',
    title: '内容：ABC',
    username: 'jack',
    message: 2
}]
function logs(state = initLogs, action) {
    switch (action.type) {
        case SET_LOGS:
            
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    user,
    headerTitle,
    logs
})