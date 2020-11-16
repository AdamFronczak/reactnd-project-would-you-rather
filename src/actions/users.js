import { hideLoading, showLoading } from "react-redux-loading"
import { _getUsers } from "utils/_DATA"

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

function receiveAllUsers(users) {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

export function getAllUsers() {
    return dispatch => {
        dispatch(showLoading());

        _getUsers()
            .then(users => dispatch(receiveAllUsers(users)))
            .then(() => dispatch(hideLoading()))
    }
}