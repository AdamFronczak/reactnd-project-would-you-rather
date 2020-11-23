import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleResult from './SingleResult'

class Results extends Component {
    render() {
        return (
            <div>
                <h3>Asked by {this.props.author.name}</h3>
                <div>
                    <div>
                        <img src={this.props.author.avatarURL} width={160} height={160} />
                    </div>
                    <div>
                        <h2>Results</h2>
                        <SingleResult question={this.props.question.optionOne.text}
                                      votes={this.props.question.optionOne.votes.length}
                                      totalVotes={this.props.question.optionOne.votes.length}
                                      isYourVotes={this.props.question.optionOne.votes.includes(this.props.currentUser.id)} />
                        <SingleResult question={this.props.question.optionTwo.text}
                                      votes={this.props.question.optionTwo.votes.length}
                                      totalVotes={this.props.question.optionTwo.votes.length}
                                      isYourVotes={this.props.question.optionTwo.votes.includes(this.props.currentUser.id)} />                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const question = state.questions[ownProps.questionId]
    const author = state.users[question.author];
    const currentUser = state.currentUser;

    return {
        question,
        author,
        currentUser
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
