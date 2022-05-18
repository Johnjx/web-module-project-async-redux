import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './state/action-creators'

function App(props) {
  const { count } = props

  useEffect(() => {
    props.fetchGeneralInfo()
  }, [])

  return (
    <div className="App">
      <h1>Async Redux Project - Hearthstone Wiki</h1>
    </div>
  );
}

export default connect(st => st, actions)(App)