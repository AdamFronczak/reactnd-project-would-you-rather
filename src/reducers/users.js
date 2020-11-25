import { SAVE_QUESTION } from "actions/questions";
import { RECEIVE_ALL_USERS } from "actions/users";
import { SAVE_VOTE } from "actions/votes";

export default function users(state = {}, action) {
    switch (action.type) {

        case RECEIVE_ALL_USERS:
            return { ...state, ...action.users };

        case SAVE_VOTE:
            const vote = action.vote;
            const users = {
                ...state,
                [vote.authedUser]: {
                    ...state[vote.authedUser],
                    answers: {
                        ...state[vote.authedUser].answers,
                        [vote.qid]: vote.answer
                    }
                }
            }
            return { ...state, ...users };

        case SAVE_QUESTION:
            const author = action.question.author;
            const newUsers = {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([action.question.id])
                }
            }
            return { ...state, ...newUsers };

        default:
            return state;
    }
}
