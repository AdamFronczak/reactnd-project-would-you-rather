import React, { Component } from 'react'

export default class SignInInput extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.onSelect} defaultValue="<empty>">
                    <option key="<empty>" value="<empty>"></option>
                    {this.props.users && Object.values(this.props.users).map(u => (
                        <option key={u.id} value={u.id}>{u.name}</option>
                    ))}
                </select>
            </div>
        )
    }
}
