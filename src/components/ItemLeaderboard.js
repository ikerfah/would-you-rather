import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar } from './Avatar';

class ItemLeaderboard extends Component {

    render() {

        const { user } = this.props

        const answered = user.questions.length
        const asked = Object.keys(user.answers).length

        return (
            <div className='question'>
                <Avatar
                    avatarURL={user.avatarURL}
                    altName={user.name}
                />
                <div className='question-info'>
                    <div>
                        <span className='author-name'>{user.name}</span>
                    </div>
                    <div>
                        <span>Asked    {asked}</span>
                    </div>
                    <div>
                        <span>Answered {answered}</span>
                    </div>
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
export default connect(mapStateToProps)(ItemLeaderboard);