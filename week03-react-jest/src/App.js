import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // App constructor - initialize default variables
  constructor() {
	super();
	this.state = {
		file: 'unknown',
		firstName: 'unknown'
	};
  }
  
  // Get the name of the file
  getFileName = () => {  
	console.log('getFile called.');
	this.setState({file: 'url-file.js'})
  };
  
  // Set the selected address 
  setAddress = () => {
    this.setState({
        firstName: 'Patty'
    })
  };
	
  // Render application
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <p className="Addresses">
			firstName: {this.state.firstName}
          </p>
          
          <button className="setAddress" onClick={this.setAddress}>Set Address</button>
          
          <hr/>
          
          <p className="File">
			File: {this.state.file}
          </p>
        </div>
        <button id='getFile' onClick={this.getFileName}>Get File Name</button>
      </div>
    );
  }
}

export default App;
