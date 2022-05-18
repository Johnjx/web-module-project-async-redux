import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './state/action-creators'
import Classes from './components/Classes';

function App(props) {
  const { classes } = props

  useEffect(() => {
    props.fetchGeneralInfo()
  }, [])

  return (
    <div className="App">
      <h1>Async Redux Project - Hearthstone Wiki</h1>
      {classes && <Classes classes={classes}/>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    classes: state.mainInfo.classes
  }
}

export default connect(mapStateToProps, actions)(App)