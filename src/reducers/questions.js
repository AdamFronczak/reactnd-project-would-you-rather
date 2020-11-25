import { RECEIVE_ALL_QUESTIONS } from "actions/questions"
import { SAVE_VOTE } from "actions/votes";

export default function questions(state = {}, action) {
    switch (action.type) {

        case RECEIVE_ALL_QUESTIONS:
            return { ...state, ...action.questions };

        case SAVE_VOTE:
            const vote = action.vote;
            const questions = {
                ...state,
                [vote.qid]: {
                    ...state[vote.qid],
                    [vote.answer]: {
                        ...state[vote.qid][vote.answer],
                        votes: state[vote.qid][vote.answer].votes.concat([vote.authedUser])
                    }
                }
            }
            
            return { ...state, ...questions};
        
        default:
            return state;
    }
}
