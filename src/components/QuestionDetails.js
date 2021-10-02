import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnsweredQuestion from './AnsweredQuestion';
import Question from './Question';

class QuestionsDetails extends Component {
    render() {
        const { id, isAnswered } = this.props
        if (isAnswered == null) {
            return <h3>Question with id {id} not found</h3>
        }
        return (
            <div>
                <h3 className='center'>Would You Rather</h3>
                {!isAnswered && <Question id={id} isDetailsPage={true} />}
                {isAnswered && <AnsweredQuestion id={id} />}
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }, props) {
    const { id } = props.match.params
    const question = questions[id]

    const isAnswered = question ? (question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id)) : null
    return {
        id,
        isAnswered
    }
}
export default connect(mapStateToProps)(QuestionsDetails)