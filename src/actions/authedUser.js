export const AUTHED_USER_ID = 'AUTHED_USER_ID'

export function setAuthedUser(id) {
    return {
        type: AUTHED_USER_ID,
        id
    }
}