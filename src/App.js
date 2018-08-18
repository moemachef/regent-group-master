import React, { Component } from 'react';
import './App.css';
import Home from './components/Routes/Home/Home.js';
import Action from './components/Reusable/Action/Action.js'

class App extends Component {
  render() {
    return (
      <div className="app">

        <Home />
        <Action/>
      </div>
    );
  }
}

export default App;
