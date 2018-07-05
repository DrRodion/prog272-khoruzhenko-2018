import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  // App constructor - initialize default variables
  constructor() {
	super();
	this.state = {
		file: 'unknown'
	};
  }
  
  // Get the name of the file
  getFileName = () => {  
	console.log('getFile called.');
	this.setState({file: 'url-file.js'})
  };
  
  // Render
  render() {
    return (
    <div>
	  <p className="File">
		File: {this.state.file}
	  </p>
	  <button id='getFile' onClick={this.getFileName}>Get File Name</button>
    </div>
    );
  }
}

export default App;
