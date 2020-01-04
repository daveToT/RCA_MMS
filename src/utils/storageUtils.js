import store from 'store'

// export default {
//     saveUser(user) {
//         localStorage.setItem('user_key', JSON.stringify(user))
//     },
//     getUser() {
//         return JSON.parse(localStorage.getItem('user_key') || '{}')
//     },
//     removeUser() {
//         localStorage.removeItem('user_key')
//     }
// }

export default {
    saveUser(user) {
        store.set('user_key', user)
    },
    getUser() {
        return store.get('user_key') || {}
    },
    removeUser() {
        store.remove('user_key')
    }
}