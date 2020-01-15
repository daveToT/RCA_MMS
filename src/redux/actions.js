import { SET_HEADER_TITLE, LOGIN_SUCCESS, LOGIN_Fail, LOG_OUT, SET_LOGS } from './action-types'
import { reqLogin } from '../services'
import storageUtils from '../utils/storageUtils'

export const setHeaderTitle = (headerTitle) => ({ type: SET_HEADER_TITLE, data: headerTitle })

export const login_sucess = (user) => ({ type: LOGIN_SUCCESS, user })

export const login_fail = (errorMsg) => ({ type: LOGIN_Fail, errorMsg })

export const logout = () => {
    storageUtils.removeUser()
    return { type: LOG_OUT }
}

export function login(username, password) {
    return async (dispatch) => {
        const result = await reqLogin(username, password)
        if (result.code === 0) {
            const user = result.data
            storageUtils.saveUser(user)
            dispatch(login_sucess(user))
        } else {
            const errorMsg = result.msg
            dispatch(login_fail(errorMsg))
        }
    }
}

export const setLogs = (data) => ({ type: SET_LOGS, data })