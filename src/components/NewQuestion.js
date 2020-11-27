import { saveQuestion } from 'actions/questions';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    setOptionOne = (e) => {
        this.setState({optionOne: (e.target.value)});
    }

    setOptionTwo = (e) => {
        this.setState({optionTwo: (e.target.value)});
    }

    submitQuestion = () => {
        if (this.state.optionOne && this.state.optionTwo && this.state.optionOne !== this.state.optionTwo) {
            this.props.saveQuestion(this.state.optionOne, this.state.optionTwo, this.props.currentUserId);
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="question-box">
                <h2>Create New Question</h2>
                <p>Complete the question</p>
                <h3>Would You Rather...</h3>
                <div>
                <input type="text" onChange={this.setOptionOne} className="option-input" />
                <div className="separator">OR</div>
                <input type="text" onChange={this.setOptionTwo} className="option-input" />
                </div>
                <input type="submit" onClick={this.submitQuestion} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUserId: state.currentUser.id
})

function mapDispatchToProps(dispatch) {
    return {
          saveQuestion: (optionOneText, optionTwoText, author) => dispatch(saveQuestion(optionOneText, optionTwoText, author))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewQuestion))
