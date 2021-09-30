import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/_DATA';

const OPTION_ONE_KEY = 'optionOne'
const OPTION_TWO_KEY = 'optionTwo'
class AnsweredQuestion extends React.Component {
    render() {

        const {
            question,
            authedUser,
            numberOfUsersVotedForOptionOne,
            percentageOfPeopleWhoVotedForOptionOne,
            numberOfUsersVotedForOptionTwo,
            percentageOfPeopleWhoVotedForOptionTwo
        } = this.props

        if (question === null) {
            return <p3>Question not found</p3>
        }

        const {
            id,
            timestamp,
            optionOne,
            optionTwo
        } = question


        return (
            <div className='question'>
                <div className='question-info'>
                    <div>
                        <div>{formatDate(timestamp)}</div>
                    </div>
                    <div className='question-options'>
                        <div>
                            <input id='optionOne' onChange={this.onChange} value='optionOne' type='checkbox' disabled={true} checked={optionOne.votes.includes(authedUser.id)} />
                            <label for='optionOne'>{optionOne.text}  <span className='vote-statistics'>{numberOfUsersVotedForOptionOne} Vote{numberOfUsersVotedForOptionOne > 1 ? 's' : ''}, {percentageOfPeopleWhoVotedForOptionOne}%</span></label>
                        </div>
                        <div>
                            <input id='optionTwo' onChange={this.onChange} value='optionTwo' type='checkbox' disabled={true} checked={optionTwo.votes.includes(authedUser.id)} />
                            <label for='optionTwo'>{optionTwo.text} <span className='vote-statistics'>{numberOfUsersVotedForOptionTwo} Vote{numberOfUsersVotedForOptionTwo > 1 ? 's' : ''}, {percentageOfPeopleWhoVotedForOptionTwo}%</span></label>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]

    const valuesForOptionOne = getNumberOfVotesAndPercentageOfPeopleWhoVotedForGivenOption(users, id, OPTION_ONE_KEY)
    const valuesForOptionTwo = getNumberOfVotesAndPercentageOfPeopleWhoVotedForGivenOption(users, id, OPTION_TWO_KEY)
    return {
        'authedUser': authedUser,
        'question': question,
        numberOfUsersVotedForOptionOne: valuesForOptionOne[0],
        percentageOfPeopleWhoVotedForOptionOne: valuesForOptionOne[1],
        numberOfUsersVotedForOptionTwo: valuesForOptionTwo[0],
        percentageOfPeopleWhoVotedForOptionTwo: valuesForOptionTwo[1]
    }
}

function getNumberOfVotesAndPercentageOfPeopleWhoVotedForGivenOption(users, questionId, optionKey) {
    const numberOfUsersVotedForGivenOption = Object.keys(users).filter((userKey) => {
        const answers = Object.keys(users[userKey].answers)
        return answers.filter((answer) => {
            if (answer === questionId && users[userKey].answers[answer] === optionKey) return true
            return false
        }).length >= 1
    }).length
    const percentageOfPeopleWhoVotedForGivenOption = (numberOfUsersVotedForGivenOption / (Object.keys(users).length) * 100).toFixed(2)

    return [
        numberOfUsersVotedForGivenOption,
        percentageOfPeopleWhoVotedForGivenOption
    ]
}
export default connect(mapStateToProps)(AnsweredQuestion);