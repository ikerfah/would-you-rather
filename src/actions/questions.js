import { saveQuestion, saveQuestionAnswer } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}


function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        saveQuestion({
            optionOneText,
            optionTwoText,
            'author': authedUser.id
        }).then((question) => dispatch(addQuestion(question)))
    }
}


function saveAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        qid,
        answer,
        authedUser

    }
}

export function handleSaveQuestionAnswer({ questionId, answer }) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        saveQuestionAnswer({
            authedUser: authedUser.id,
            qid: questionId,
            answer
        }).then(() => {
            dispatch(saveAnswer({
                authedUser: authedUser.id,
                qid: questionId,
                answer
            }))
        })
    }
}