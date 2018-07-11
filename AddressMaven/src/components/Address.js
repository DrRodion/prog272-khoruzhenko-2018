import React, { Component } from 'react';
import '../App.css';
import AddressList from '../address-list';
import AddressShow from './Address-Show';

class Address extends Component {
  // App constructor - initialize default variables
  constructor(props) {
	super(props);
	
	alert(this.getAddressList);
    
    this.addressIndex=0;        
	this.state = {
		address: AddressList[this.addressIndex]
	};
  }
  
  // Next address 
  nextAddress = () => {  
	if (this.addressIndex < AddressList.length - 1) {
		this.addressIndex+=1;
		this.setState({
			address: AddressList[this.addressIndex]
		})
	}
  };
  
  // Previous address 
  previousAddress = () => {
	if (this.addressIndex > 1) {
		this.addressIndex-=1;
		this.setState({
			address: AddressList[this.addressIndex]
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
