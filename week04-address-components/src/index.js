import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Address from './components/Address';
import App from './components/App';
import addresses from './address-list';

// Render application
ReactDOM.render(
<div className="App">
	<Header />
	<Address addressList={addresses} />
	<App />
</div>,

document.getElementById('root'));
