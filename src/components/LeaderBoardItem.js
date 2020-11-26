import React, { Component } from 'react'

export default class LeaderBoardItem extends Component {
    render() {
        const user = this.props.user;

        return (
            <div className="leaderboard-item">
                <div className="left">
                    <img src={user.avatarURL} alt="" width={120} height={120} />
                </div>
                <div>
                    <h3>{user.name}</h3>
                    <p>Answered questions: {Object.values(user.answers).length}</p>
                    <p>Created questions: {user.questions.length}</p>
                    <p>Score: {Object.values(user.answers).length + user.questions.length}</p>
                </div>
            </div>
        )
    }
}
