import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION } from '../actions/questions'
import { SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case ADD_QUESTION:
            const { question } = action
            const { author } = question
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([author])
                }
            }
        default:
            return state
    }
}