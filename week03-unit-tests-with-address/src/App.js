import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // App constructor - initialize default variables
  constructor() {
	super();
	this.state = {
		file: 'unknown',
		firstName: 'unknown',
		lastName: 'unknown',
		address: 'unknown',
        city: 'unknown',
        state: 'unknown',
        zip: 'unknown',
        phone: 'unknown',
        fax: 'unknown',
        tollfree: 'unknown'
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
        firstName: 'Patty',
        lastName: 'Murray',
        address: '154 Russell Senate Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 224-2621',
        fax: '(202) 224-0238',
        tollfree: '(866) 481-9186'
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
          <div className="Addresses">
			<p id="firstName">firstName: {this.state.firstName}</p>
			<p id="lastName">lastName: {this.state.lastName}</p>
			<p id="streetAddress">streetAddress: {this.state.address}</p>
			<p id="city">city: {this.state.city}</p>
			<p id="stateName">stateName: {this.state.state}</p>
			<p id="zip">zip: {this.state.zip}</p>
			<p id="phone">phone: {this.state.phone}</p>
			<p id="fax">fax: {this.state.fax}</p>
			<p id="tollfree">tollfree: {this.state.tollfree}</p>
		  </div>
          
          <button id="setAddress" onClick={this.setAddress}>Set Address</button>
          
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
