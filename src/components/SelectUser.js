import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'react-tabs/style/react-tabs.css';
import User from './ItemUser';
class SelectUser extends Component {
    render() {
        return (
            <div>
                <ul className='dashboard-list'>
                    {this.props.usersIds.map((id) => (
                        <li key={id}>
                            <User userId={id} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        usersIds: Object.keys(users).sort((a, b) => users[b].name < users[a].name),
    }
}

export default connect(mapStateToProps)(SelectUser)