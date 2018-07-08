import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Address from './Address';
import GetFile from './GetFile';

class App extends Component {
  // Render
  render() {
    return (
    <div className="App">
		<Header />
		<Address />
		<GetFile />
	</div>
    );
  }
}

export default App;
