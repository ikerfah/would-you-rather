import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/_DATA';

class Question extends React.Component {
    render() {
        const { question, author, isDetailsPage, authedUser} = this.props

        if (question === null) {
            return <p3>Question not found</p3>
        }

        const {
            id,
            timestamp,
            optionOne,
            optionTwo
        } = question

        const {
            name,
            avatarURL,
        } = author

        return (
            <Link to={`/questions/${id}`} className='question'>
                <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='question-info'>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                    </div>
                    <div className='question-options'>
                        <div>
                            <input id='optionOne' type='checkbox' name='optionOne' disabled={!isDetailsPage} checked={optionOne.votes.includes(authedUser.id)} />
                            <label for='optionOne'>{optionOne.text}</label>
                        </div>
                        <div>
                            <input id='optionTwo' type='checkbox' name='optionTwo' disabled={!isDetailsPage} checked={optionTwo.votes.includes(authedUser.id)} />
                            <label for='optionTwo'>{optionTwo.text}</label>
                        </div>
                    </div>
                </div>
            </Link>)
    }
}
function mapStateToProps({ authedUser, users, questions }, { id, isDetailsPage }) {
    const question = questions[id]
    return {
        'authedUser': authedUser,
        'author': users[question.author],
        'question': question,
        'isDetailsPage': isDetailsPage
    }

}
export default connect(mapStateToProps)(Question);