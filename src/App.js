import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './state/action-creators'
import Classes from './components/Classes';
import Info from './components/Info';
import ClassCards from './components/ClassCards';
import axios from "axios";

function App(props) {
  const { classes, info } = props

  useEffect(() => {
    props.fetchGeneralInfo()
  }, [])
 
const handleClassCards = (name) => {
  props.fetchClassCards(name)
}

  return (
    <div className="App">
      <h1>Async Redux - Hearthstone Card Wiki</h1>
      {info && <Info info={info}/>}
      {classes && <Classes classes={classes} handleClassCards={handleClassCards}/>}
      {props.classCards && <ClassCards classCards={props.classCards}/>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    info: {
      patch: state.mainInfo.patch,
    },
    classes: state.mainInfo.classes,
    classCards: state.classCards
  }
}

export default connect(mapStateToProps, actions)(App)