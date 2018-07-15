import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Address from './Address';
import GetFile from './GetFile';
import registerServiceWorker from '../registerServiceWorker';

class App extends Component {
  // Render
  render() {
    return (
    <BrowserRouter>
		<div className="App">
			<Header />
			<Route exact path="/" component={Address}/>
            <Route path="/GetFile" component={GetFile}/>
		</div>
	</BrowserRouter>
    );
  }
}

registerServiceWorker();
export default App;
