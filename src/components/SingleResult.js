import React, { Component } from 'react'

export default class SingleResult extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.question}</h2>
                {this.props.isYourVote && <b>Your vote</b>}
                <div>{Math.round(this.props.votes / this.props.totalVotes * 100)} %</div>
                <div>{this.props.votes} out of {this.props.totalVotes} votes</div>
            </div>
        )
    }
}
