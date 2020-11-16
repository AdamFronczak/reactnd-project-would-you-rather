import { RECEIVE_ALL_QUESTIONS, SAVE_QUESTION } from "actions/questions"

export default function questions(state = {}, action) {
    switch (action.type) {

    case RECEIVE_ALL_QUESTIONS:
        return { ...state, ...action.questions };

    case SAVE_QUESTION:
        return { ...state, ...action.question, };
    
    default:
        return state;
    }
}
