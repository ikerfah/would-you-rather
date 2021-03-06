import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../actions/questions';
import { formatDate } from '../utils/_DATA';
import { Avatar } from './Avatar';

class Question extends Component {

    onChange = (e) => {

        const { dispatch, question } = this.props

        dispatch(handleSaveQuestionAnswer({
            questionId: question.id,
            answer: e.target.value
        }))
    }

    render() {

        const { question, author, isDetailsPage, authedUser } = this.props

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
                <Avatar
                    avatarURL={avatarURL}
                    altName={name}
                />
                <div className='question-info'>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                    </div>
                    <div className='question-options'>
                        <div>
                            <input id='optionOne' onChange={this.onChange} value='optionOne' type='checkbox' name='optionOne' disabled={!isDetailsPage} checked={optionOne.votes.includes(authedUser.id)} />
                            <label htmlFor='optionOne'>{optionOne.text}</label>
                        </div>
                        <div>
                            <input id='optionTwo' onChange={this.onChange} value='optionTwo' type='checkbox' name='optionTwo' disabled={!isDetailsPage} checked={optionTwo.votes.includes(authedUser.id)} />
                            <label htmlFor='optionTwo'>{optionTwo.text}</label>
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