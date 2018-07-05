import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Address from './components/Address';
import addresses from './address-list';

ReactDOM.render(
	<div>
		<App />
		<hr />
		<Address addressList={addresses} />
	</div>, 
	document.getElementById('root')
);
