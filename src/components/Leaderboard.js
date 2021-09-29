import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ItemLeaderboard from './ItemLeaderboard';
class Leaderboard extends Component {
    render() {
        return (
            <div>
                <ul className='dashboard-list'>
                    {this.props.usersIds.map((id) => (
                        <li key={id}>
                            <ItemLeaderboard userId={id} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        usersIds: Object.keys(users).sort((a, b) => calculateAnswersAndQuestions(users[b].answers,users[b].questions) - calculateAnswersAndQuestions(users[a].answers,users[a].questions)),
    }
}

function calculateAnswersAndQuestions(answers,questions){
    return Object.keys(answers).length + questions.length
}
export default connect(mapStateToProps)(Leaderboard)