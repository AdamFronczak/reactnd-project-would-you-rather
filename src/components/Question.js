import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Question extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.author.name} asks:</h3>
                <div>
                    <div>
                        <img src={this.props.author.avatarURL} width={160} height={160} />
                    </div>
                    <div>
                        <h2>Would You Rather...</h2>
                        <div>
                            <input id="answer1" name="answer" type="radio" />
                            <label htmlFor="answer1">{this.props.question.optionOne.text}</label>
                        </div>
                        <div>
                            <input id="answer2" name="answer" type="radio" />
                            <label htmlFor="answer2">{this.props.question.optionTwo.text}</label>
                        </div>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const question = state.questions[ownProps.match.params.questionId];
    const author = state.users[question.author];

    return {
        question,
        author,
    };
}

const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question))
