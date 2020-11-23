import { RECEIVE_ALL_VOTES, SAVE_VOTE } from "actions/votes";

export default function votes(state = {}, action) {
    switch (action.type) {

    case RECEIVE_ALL_VOTES:
        return { ...state, ...action.votes };

    case SAVE_VOTE:
        return { ...state, ...action.vote };
    
    default:
        return state;
    }
}
