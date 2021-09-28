import React, { Component } from 'react';

import logo from './logo.svg';
import { handleInitialData } from './actions/shared'
import './App.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import HomePage from './components/HomePage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <LoadingBar />
        <div>
        {this.props.loading === true
          ? null
          : <HomePage />}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
