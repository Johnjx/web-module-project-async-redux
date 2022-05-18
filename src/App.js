import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './state/action-creators'
import Classes from './components/Classes';
import Info from './components/Info';
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/hunter',
  headers: {
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '9fd65bd146mshe4cb4ebeb3d9767p113054jsnf5dbadfcfd50'
  }
};

function App(props) {
  const { classes, info } = props

  useEffect(() => {
    props.fetchGeneralInfo()
  }, [])

  
const handleClassCards = () => {
  props.fetchClassCards()
}


  return (
    <div className="App">
      <h1>Async Redux Project - Hearthstone Wiki</h1>
      {info && <Info info={info}/>}
      {classes && <Classes classes={classes} handleClassCards={handleClassCards}/>}
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