import { AUTHED_USER_ID } from '../actions/authedUser'

export default function authedUser(state = null, action) {
    switch (action.type) {
        case AUTHED_USER_ID:
            return action.id
        default:
            return state
    }
}