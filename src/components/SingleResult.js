import React, { Component } from 'react'

export default class SingleResult extends Component {
    render() {
        return (
            <div className="vote">
                <h4>{this.props.question}</h4>
                {this.props.isYourVote ? <span className="your-vote">Your vote</span> : ""}
                <div>{Math.round(this.props.votes / this.props.totalVotes * 100)} %</div>
                <div>{this.props.votes} out of {this.props.totalVotes} votes</div>
            </div>
        )
    }
}
