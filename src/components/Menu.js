import { logout } from 'actions/currentUser'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LoggedInUser from './LoggedInUser'

class Menu extends Component {
    render() {
        return (
            <nav>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/add">New Question</Link>
                    <Link to="/leaderboard">Leader Board</Link>
                </div>
                <div>
                    <LoggedInUser />
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
