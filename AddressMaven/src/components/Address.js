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
  }
  
  // Get address list from server
  componentDidMount() {
    fetch('/get-address-list')
	.then(response => response.json())
	.then(addressListFromServer => {
		this.setState({ addressList: addressListFromServer });
		this.setState({ addressIndex: 0 });
	})
	.catch(ex => {
		alert(ex);
		//BUGBUG: This dumps whatever error the server returns (or tries to return)
		console.log(ex);
	});
  }

  // Next address 
  nextAddress = () => {  
	alert(JSON.stringify(this.state.addressList));
	//BUGBUG: This simply dumps whatever is currently saved in addressList
	
	/*if (this.state.addressIndex < addressList.length - 1) {
		this.setState({
			addressIndex: 1,
			address: this.addressList[this.state.addressIndex]
		})
	}*/
  };
  
  // Previous address 
  previousAddress = () => {
	/*if (this.addressIndex > 1) {
		this.addressIndex-=1;
		this.setState({
			addressIndex: 1,
			address: this.addressList[this.addressIndex]
		})
	}*/
  };
	
  // Render
  render() {
    return (
		<AddressShow address={this.state.address} nextAddress={this.nextAddress} previousAddress={this.previousAddress} />
    );
  }
}

export default Address;
