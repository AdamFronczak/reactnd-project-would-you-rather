import { _saveQuestionAnswer } from "utils/_DATA";

export const SAVE_VOTE = 'SAVE_VOTE'

function _saveVote(vote) {
    return {
        type: SAVE_VOTE,
        vote
    }
}

export function saveVote(currentUserId, questionId, answer) {
    return (dispatch) => {
        const vote = {
            authedUser: currentUserId,
            qid: questionId,
            answer: answer
        }

        dispatch(_saveVote(vote));

        return _saveQuestionAnswer(vote)
            .catch(e => {
                alert('There was an error while saving the vote.');
            });
    }
}