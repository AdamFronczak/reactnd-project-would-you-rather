import { LOGIN, LOGOUT } from "actions/currentUser";

export default function currentUser(state = {}, action) {
    switch (action.type) {

        case LOGIN:
            return { ...state, id: action.userId };

        case LOGOUT:
            return { };

        default:
            return state;
    }
}
