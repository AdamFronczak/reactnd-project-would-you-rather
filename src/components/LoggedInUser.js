import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoggedInUser extends Component {
    render() {
        return (
            <span>
                Hello, {this.props.currentUser.name}
                <img src={this.props.currentUser.avatarURL} width={32} height={32} />
            </span>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInUser)
