import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './state/action-creators'
import Classes from './components/Classes';
import Info from './components/Info';

function App(props) {
  const { classes, info } = props

  useEffect(() => {
    props.fetchGeneralInfo()
  }, [])

  return (
    <div className="App">
      <h1>Async Redux Project - Hearthstone Wiki</h1>
      {info && <Info info={info}/>}
      {classes && <Classes classes={classes}/>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    info: {
      patch: state.mainInfo.patch,
    },
    classes: state.mainInfo.classes
  }
}

export default connect(mapStateToProps, actions)(App)