import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
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
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({

})

function mapDispatchToProps(dispatch) {
    return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu))
