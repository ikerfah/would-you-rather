export const AUTHED_USER = 'AUTHED_USER'
export const LOGOUT = 'LOGOUT'

export function setAuthedUser(authedUser) {
    return {
        type: AUTHED_USER,
        authedUser
    }
}

export function logout() {
    return {
        type: LOGOUT,
    }
}