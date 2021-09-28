import React, { Component } from 'react';

import logo from './logo.svg';
import { handleInitialData } from './actions/shared'
import './App.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <div className='container'>
            <Nav />
            <HomePage />
          </div>}
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
