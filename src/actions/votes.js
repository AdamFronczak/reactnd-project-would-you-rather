export const RECEIVE_ALL_VOTES = 'RECEIVE_ALL_VOTES'
export const SAVE_VOTE = 'SAVE_VOTE'

export function receiveAllVotes(votes) {
    return {
        type: RECEIVE_ALL_VOTES,
        votes
    }
}

export function saveVote(vote) {
    return {
        type: SAVE_VOTE,
        vote
    }
}
