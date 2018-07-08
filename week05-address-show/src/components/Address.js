import React, { Component } from 'react';
import '../App.css';
import AddressList from '../address-list';
import AddressShow from './Address-Show';

class Address extends Component {
  // App constructor - initialize default variables
  constructor(props) {
	super(props);
    
    this.addressIndex=0;        
	this.state = {
		address: AddressList[this.addressIndex]
	};
  }
  
  // Set the selected address 
  setAddress = () => {
	this.addressIndex=1;
    this.setState({
		address: AddressList[this.addressIndex]
    })
  };
	
  // Render
  render() {
    return (
		<AddressShow address={this.state.address} setAddress={this.setAddress} />
    );
  }
}

export default Address;
