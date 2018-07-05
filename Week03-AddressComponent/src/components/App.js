import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Address Maven</h1>
        </header>
        <p className="App-intro">
		  file: {}
        </p>
        <button>Get File</button>
      </div>
    );
  }
}

export default App;
