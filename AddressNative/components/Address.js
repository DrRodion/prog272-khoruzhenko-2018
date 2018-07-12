import React, { Component } from 'react';
import TempAddress from '../address-list'; // Temporary address list with default "unknown" address.
import {StyleSheet, Text, View} from 'react-native';
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
  }
  
  // Get address list from server
  componentDidMount() {
    fetch('http://localhost:30026/get-address-list')
      .then(response => response.json())
      .then(data => this.setState({ addressList: data }))
      .catch(ex => {
		 console.log(ex);
	  });
  }
  
  // Next address 
  nextAddress = () => {  
	if (this.state.addressIndex < this.state.addressList.length - 1) {
		this.setState({
			addressIndex: 1,
			address: this.addressList[this.addressIndex]
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
		<View>
			<AddressShow address={this.state.address} nextAddress={this.nextAddress} previousAddress={this.previousAddress} />
		</View>
    );
  }
}

export default Address;
