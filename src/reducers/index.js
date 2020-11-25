import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import questions from 'reducers/questions'
import users from 'reducers/users'
import currentUser from 'reducers/currentUser'

export default combineReducers({
    loadingBar: loadingBarReducer,
    currentUser,
    questions,
    users,
})
