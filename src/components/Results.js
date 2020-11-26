import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SingleResult from './SingleResult'

class Results extends Component {
    render() {
        if (this.props.question === undefined) {
            this.props.history.push('/404');
            return <div></div>;
        }

        return (
            <div className="question-box">
                <h3>Asked by {this.props.author.name}</h3>
                <div>
                    <div>
                        <img src={this.props.author.avatarURL} alt="" width={160} height={160} />
                    </div>
                    <div>
                        <h2>Results</h2>
                        <SingleResult question={this.props.question.optionOne.text}
                                      votes={this.props.question.optionOne.votes.length}
                                      totalVotes={this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length}
                                      isYourVote={this.props.question.optionOne.votes.includes(this.props.currentUser.id)} />
                        <SingleResult question={this.props.question.optionTwo.text}
                                      votes={this.props.question.optionTwo.votes.length}
                                      totalVotes={this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length}
                                      isYourVote={this.props.question.optionTwo.votes.includes(this.props.currentUser.id)} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const question = state.questions[ownProps.match.params.questionId];
    const author = question ? state.users[question.author] : {};
    const currentUser = state.currentUser;

    return {
        question,
        author,
        currentUser
    }
}

const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results))
