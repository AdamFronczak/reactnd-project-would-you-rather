import { logout } from 'actions/currentUser';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class LoggedInUser extends Component {
    logout = () => {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        if (this.props.currentUser === undefined) {
            return <span></span>
        }

        return (
            <span>
                Hello, {this.props.currentUser.name}
                <img src={this.props.currentUser.avatarURL} alt="" width={32} height={32} />
                <button onClick={this.logout}>Logout</button>
            </span>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.users[state.currentUser.id]
})

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInUser))
