import { hideLoading, showLoading } from "react-redux-loading"
import { _getQuestions } from "utils/_DATA"

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

function receiveAllQuestions(questions) {
    return {
        type: RECEIVE_ALL_QUESTIONS,
        questions
    }
}

export function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function getAllQuestions() {
    return dispatch => {
        dispatch(showLoading());

        _getQuestions()
            .then(users => dispatch(receiveAllQuestions(users)))
            .then(() => dispatch(hideLoading()))
    }
}