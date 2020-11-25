import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class QuestionPreview extends Component {
    render() {
        return (
            <div className="question-box">
                <h3>{this.props.author.name} asks:</h3>
                <div>
                    <div>
                        <img src={this.props.author.avatarURL} alt="" width={160} height={160} />
                    </div>
                    <div>
                        <h2>Would You Rather...</h2>
                        <p>... {this.props.question.optionOne.text.substr(0, 20)} ...</p>
                        <Link to={'/questions/' + this.props.question.id}>View Poll</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const question = state.questions[ownProps.questionId];
    const author = state.users[question.author];

    return {
        question,
        author,
    };
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPreview)
