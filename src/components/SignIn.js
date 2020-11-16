import { login } from 'actions/currentUser'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignInInput from './SignInInput'

class SignIn extends Component {
    userSelected = (e) => {
        this.props.login(e.target.value);
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Welcome to the Would You Rather App</h3>
                    <p>Please sign in to continue</p>
                </div>
                <div>
                    Sign In
                </div>
                <div>
                    <SignInInput users={this.props.users} onSelect={this.userSelected} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

function mapDispatchToProps(dispatch) {
    return {
          login: (user) => dispatch(login(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
