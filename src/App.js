import React, { Component } from 'react';

import logo from './logo.svg';
import { handleInitialData } from './actions/shared'
import './App.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
import QuestionDetails from './components/QuestionDetails';
import AddQuestion from './components/AddQuestion';
import Leaderboard from './components/Leaderboard';
import SelectUser from './components/SelectUser';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <LoadingBar />
        <div className='container'>

          {this.props.authedUser === null
            ? <SelectUser />
            : <div>
              <Nav />
              <Route path='/' exact component={HomePage} />
              <Route path='/questions/:id' component={QuestionDetails} />
              <Route path='/add' component={AddQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
            </div>
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}
export default connect(mapStateToProps)(App);
