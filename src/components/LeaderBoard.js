import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from './LeaderBoardItem'

class LeaderBoard extends Component {
    render() {
        const users = this.props.users.sort((a, b) => 
            Object.values(b.answers).length + b.questions.length
            - (Object.values(a.answers).length + a.questions.length));

        return (
            <div>
                { users.map(u => <LeaderBoardItem user={u} key={u.id} />) }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: Object.values(state.users)
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)
