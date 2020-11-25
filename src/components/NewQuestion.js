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
        this.props.saveQuestion(this.state.optionOne, this.state.optionTwo, this.props.currentUserId);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Create New Question</h2>
                <p>Complete the question</p>
                <h3>Would You Rather...</h3>
                <input type="text" onChange={this.setOptionOne} />
                <div className="separator">OR</div>
                <input type="text" onChange={this.setOptionTwo} />
                <input type="submit" onClick={this.submitQuestion} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.currentUser.id,
    history: ownProps.history
})

function mapDispatchToProps(dispatch) {
    return {
          saveQuestion: (optionOneText, optionTwoText, author) => dispatch(saveQuestion(optionOneText, optionTwoText, author))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewQuestion))
