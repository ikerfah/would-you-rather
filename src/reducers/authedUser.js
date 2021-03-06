import { AUTHED_USER, LOGOUT } from '../actions/authedUser'
import { SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function authedUser(state = null, action) {
    switch (action.type) {
        case AUTHED_USER:
            return action.authedUser
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.qid]: action.answer
                }
            }
        case LOGOUT:
            return null
        default:
            return state
    }
}