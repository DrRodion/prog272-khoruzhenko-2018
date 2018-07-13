import React, { Component } from 'react';
import '../App.css';
import AddressShow from './Address-Show';

class Address extends Component {
  // App constructor - initialize default variables
  constructor(props) {
	super(props);
	
	this.state = {
		addressIndex: 0,
		addressList: "",
		address: ""
	};
  }
  
  // Get address list from server
  componentDidMount() {
    this.getAddresses();
  }
  
  getAddresses = () => {
	fetch('/get-address-list')
	.then(response => response.json())
	.then(addressListFromServer => {
		this.setState({ addressList: addressListFromServer["result"] });
	})
	.catch(ex => {
		console.log(ex);
	}); 
  }

  // Next address 
  nextAddress = () => { 
	if (this.state.addressIndex < this.state.addressList.length - 1) {
		this.state.addressIndex = this.state.addressIndex + 1;	
		this.setState({
			address: this.state.addressList[this.state.addressIndex]
		})
	}
  };
  
  // Previous address 
  previousAddress = () => {
	if (this.state.addressIndex > 1) {
		this.state.addressIndex = this.state.addressIndex - 1;	
		this.setState({
			address: this.state.addressList[this.state.addressIndex]
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
