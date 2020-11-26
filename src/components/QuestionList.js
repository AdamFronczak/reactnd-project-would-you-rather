import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview';

class QuestionList extends Component {
    state = {
        isAnswered: false
    }

    setAnswered = (isAnswered) => {
        this.setState({isAnswered});
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li key="unanswered" 
                            className={this.state.isAnswered ? "" : "highlight"} 
                            onClick={() => this.setAnswered(false)}>Unanswered Questions</li>
                        <li key="answered" 
                            className={this.state.isAnswered ? "highlight" : ""} 
                            onClick={() => this.setAnswered(true)}>Answered Questions</li>
                    </ul>
                </div>
                {
                    (this.state.isAnswered
                        ? this.props.answeredQuestions
                        : this.props.unansweredQuestions).map(q => (<QuestionPreview questionId={q.id} key={q.id} />))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const allQuestions = Object.values(state.questions);
    const userId = state.currentUser.id;
    const answeredQuestions =  allQuestions.filter(q => state.users[userId].answers[q.id] !== undefined);
    const unansweredQuestions = allQuestions.filter(q => state.users[userId].answers[q.id] === undefined);

    return {
        answeredQuestions,
        unansweredQuestions,
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
