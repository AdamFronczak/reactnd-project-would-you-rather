import { saveVote } from 'actions/votes';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom';

class Question extends Component {
    state = {
        answer: null
    }

    submitAnswer = () => {
        if (this.state.answer) {
            this.props.saveVote(this.props.currentUserId, this.props.question.id, this.state.answer);
            this.props.history.push('/results/' + this.props.question.id);
        }
    }

    render() {
        if (this.props.isAnswered) {
            return <Redirect to={"/results/" + this.props.question.id}></Redirect>
        }

        if (this.props.question === undefined) {
            return <Redirect to={"/404"}></Redirect>
        }

        return (
            <div className="question-box">
                <h3>{this.props.author.name} asks:</h3>
                <div>
                    <div>
                        <img src={this.props.author.avatarURL} alt="" width={160} height={160} />
                    </div>
                    <div>
                        <h2>Would You Rather...</h2>
                        <div>
                            <input id="answer1" name="answer" type="radio" onChange={() => this.setState({answer: 'optionOne'})} />
                            <label htmlFor="answer1">{this.props.question.optionOne.text}</label>
                        </div>
                        <div>
                            <input id="answer2" name="answer" type="radio" onChange={() => this.setState({answer: 'optionTwo'})} />
                            <label htmlFor="answer2">{this.props.question.optionTwo.text}</label>
                        </div>
                        <input type="submit" value="Submit" onClick={this.submitAnswer} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const question = state.questions[ownProps.match.params.questionId];
    const author = question ? state.users[question.author] : {};
    const isAnswered = question ? state.users[state.currentUser.id].answers[question.id] !== undefined : false;

    return {
        question,
        author,
        currentUserId: state.currentUser.id,
        isAnswered: isAnswered
    };
}

function mapDispatchToProps(dispatch) {
    return {
          saveVote: (currentUserId, questionId, answer) => dispatch(saveVote(currentUserId, questionId, answer))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question))
