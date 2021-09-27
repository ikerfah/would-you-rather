export const AUTHED_USER = 'AUTHED_USER'

export function setAuthedUser(authedUser) {
    return {
        type: AUTHED_USER,
        authedUser
    }
}