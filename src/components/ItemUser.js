import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import { handleSaveQuestionAnswer } from '../actions/questions';
import { formatDate } from '../utils/_DATA';
import { Avatar } from './Avatar';

class ItemUser extends Component {

    onClick = (e) => {

        const { dispatch , user} = this.props

        dispatch(setAuthedUser(user))
    }

    render() {

        const { user } = this.props

        return (
            <div className='item-user' onClick={this.onClick}>
                <Avatar
                    avatarURL={user.avatarURL}
                    altName={user.name}
                />
                <div className='item-user-name'>
                    <span>{user.name}</span>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ users }, { userId }) {
    const user = users[userId]
    return {
        user
    }

}
export default connect(mapStateToProps)(ItemUser);