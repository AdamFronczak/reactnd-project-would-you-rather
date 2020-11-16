import { RECEIVE_ALL_USERS } from "actions/users";
import { RECEIVE_ALL_VOTES } from "actions/votes";

export default function votes(state = {}, action) {
    switch (action.type) {

    case RECEIVE_ALL_VOTES:
        return { ...state, ...action.votes };

    default:
        return state;
    }
}
