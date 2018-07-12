import React, { Component } from 'react';
import '../App.css';
import TempAddress from '../address-list'; // Temporary address list with default "unknown" address.
import AddressShow from './Address-Show';

class Address extends Component {
  // App constructor - initialize default variables
  constructor(props) {
	super(props);
	
	this.state = {
		addressIndex: 0,
		address: TempAddress[0],
		addressList: TempAddress
	};
	
	// Trying to run the function here to get the address list from the server.
	this.getAddressList();
  }
  
  // Get address list from server
  // BUGBUG - this "getAddressList" function is key. It's not getting the address from the server.
  
  getAddressList = () => {
	fetch('localhost:30026/get-address-list')
	  .then((response) => response.json())
	  .then((addressListServer) => {
		  // This area does not seem to execute at all - any "alert" here does not work.
		  // I assume I'm not getting a response from the server.
		  this.setState({
			address: this.addressList[this.addressIndex],
			addressList: addressListServer
		  })
	  })
	.catch((ex) => {
	  console.log(ex);
	});
	
	// Debug code, trying to figure out what (if anything) I'm getting from the server.
	alert(this.state.addressList.length);
  }

  // Next address 
  nextAddress = () => {  
	if (this.state.addressIndex < this.state.addressList.length - 1) {
		this.setState({
			addressIndex: 1,
			address: this.addressList[this.state.addressIndex]
		})
	}
  };
  
  // Previous address 
  previousAddress = () => {
	if (this.addressIndex > 1) {
		this.addressIndex-=1;
		this.setState({
			addressIndex: 1,
			address: this.addressList[this.addressIndex]
		})
	}
  };
	
  // Render
  render() {
    return (
		<AddressShow address={this.state.address} nextAddress={this.nextAddress} previousAddress={this.previousAddress} />
    );
  }
}

export default Address;
