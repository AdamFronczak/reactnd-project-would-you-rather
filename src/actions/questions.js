import { hideLoading, showLoading } from "react-redux-loading"
import { _getQuestions, _saveQuestion } from "utils/_DATA"

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

function receiveAllQuestions(questions) {
    return {
        type: RECEIVE_ALL_QUESTIONS,
        questions
    }
}

function saveQuestionAction(question) {
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

export function saveQuestion(optionOneText, optionTwoText, author) {
    return (dispatch) => {
        const question = { optionOneText, optionTwoText, author };
        dispatch(saveQuestionAction(question));

        return _saveQuestion(question)
            .then(e => dispatch(getAllQuestions()))
            .catch(e => {
                alert('There was an error while saving the vote.');
            })
    }
}