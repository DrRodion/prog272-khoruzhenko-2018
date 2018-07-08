import React, { Component } from 'react';
import { MemoryRouter, BrowserRouter, Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
  render() {
    return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Address Maven</h1>
			<ul>
				<li><Link to="/">Address</Link></li>
				<li><Link to="/GetFile">Get File</Link></li>          
			</ul>
		</header>
    );
  }
}

export default Header;
