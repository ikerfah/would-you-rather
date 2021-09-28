import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
class HomePage extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabList className="react-tabs__tab-list-new">
                        <Tab>Unanswered</Tab>
                        <Tab>Answered</Tab>
                    </TabList>

                    <TabPanel>
                        <ul className='dashboard-list'>
                            {this.props.unansweredQuetionsIds.map((id) => (
                                <li key={id}>
                                    <Question id={id} isDetailsPage={false} />
                                </li>
                            ))}
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul className='dashboard-list'>
                            {this.props.answeredQuetionsIds.map((id) => (
                                <li key={id}>
                                    <Question id={id} isDetailsPage={false} />
                                </li>
                            ))}
                        </ul>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

function mapStateToProps({ questions, authedUser }) {
    const unansweredQuetions = Object.keys(questions).filter((questionKey) => questions[questionKey].optionOne.votes.includes(authedUser.id) === false && questions[questionKey].optionTwo.votes.includes(authedUser.id) === false)
    const answeredQuetions = Object.keys(questions).filter((questionKey) => questions[questionKey].optionOne.votes.includes(authedUser.id) === true || questions[questionKey].optionTwo.votes.includes(authedUser.id) === true)
    return {
        unansweredQuetionsIds: unansweredQuetions.sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        answeredQuetionsIds: answeredQuetions.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}
export default connect(mapStateToProps)(HomePage)