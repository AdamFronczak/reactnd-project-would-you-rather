export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function receiveAllQuestions(questions) {
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
