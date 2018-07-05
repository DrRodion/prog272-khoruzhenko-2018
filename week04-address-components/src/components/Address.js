import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Address extends Component {
  // App constructor - initialize default variables
  constructor(props) {
	super(props);
	
    console.log('ADDRESS PROPS', typeof this.props);
    const address = this.props.addressList[0];
    
	this.state = {
		firstName: address.firstName,
		lastName: address.lastName,
		address: address.address,
        city: address.city,
        state: address.state,
        zip: address.zip,
        phone: address.phone,
        fax: address.fax,
        tollfree: address.tollfree
	};
  }
  
  // Set the selected address 
  setAddress = () => {
	const address = this.props.addressList[1];  
	
    this.setState({
		firstName: address.firstName,
		lastName: address.lastName,
		address: address.address,
        city: address.city,
        state: address.state,
        zip: address.zip,
        phone: address.phone,
        fax: address.fax,
        tollfree: address.tollfree
    })
  };
	
  // Render
  render() {
    return (
		<div>
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
		</div>
    );
  }
}

export default Address;
