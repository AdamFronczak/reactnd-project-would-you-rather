import React, { Component } from 'react'
import { connect } from 'react-redux'

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
                        <input name="answer" type="radio">{this.props.question.optionOne.text}</input>
                        <input name="answer" type="radio">{this.props.question.optionTwo.text}</input>
                        <input type="submit">Submit</input>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const question = state.questions[ownProps.params.questionId];
    const author = state.users[question.author];

    return {
        question,
        author,
    };
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
