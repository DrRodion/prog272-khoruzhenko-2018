import React, { Component } from 'react';
import {View} from 'react-native';
import AddressShow from './Address-Show';
import TempAddress from '../address-list';

class Address extends Component {
    // App constructor - initialize default variables
    constructor(props) {
        super(props);

        this.state = {
            addressIndex: 0,
            addressList: TempAddress,
            address: TempAddress[0]
        };
    }
  
    // Get address list from server
    componentDidMount() {
        this.getAddresses();
    }
  
  getAddresses = () => {
      fetch('http://10.0.0.196:30026/get-address-list')
          .then(response => response.json())
          .then(addressListFromServer => {
              this.setState({ addressList: addressListFromServer['result'] });
          })
          .catch(ex => {
              console.log(ex);
          }); 
  }
  
  // Next address 
  nextAddress = () => { 
      if (this.state.addressIndex < this.state.addressList.length - 1) {
          this.setState({
              addressIndex: this.state.addressIndex + 1,
              address: this.state.addressList[this.state.addressIndex]
          });
      }
  };
  
  // Previous address 
  previousAddress = () => {
      if (this.state.addressIndex > 1) {	
          this.setState({
              addressIndex: this.state.addressIndex - 1,
              address: this.state.addressList[this.state.addressIndex]
          });
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
