import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  const { count } = props
  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <p>{count}</p>
    </div>
  );
}

export default connect(st => st)(App)