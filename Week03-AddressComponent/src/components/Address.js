import React, { Component } from 'react';
import '../App.css';

class Address extends Component {
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
			tollfree: address.tollfree,
			website: address.website
		};
	}
	
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
  }
	
  render() {
    return (
      <div className="Address">
		firstName: {this.state.firstName} <br/>
		lastName: {this.state.lastName} <br/>
		streetAddress: {this.state.address} <br/>
		city: {this.state.city} <br/>
		stateName: {this.state.state} <br/>
		zip: {this.state.zip} <br/>
		phone: {this.state.phone} <br/>
		fax: {this.state.fax} <br/>
		tollfree: {this.state.tollfree} <br/><br/>
		<button className="setAddress" onClick={this.setAddress}>Set Address</button>
      </div>
    );
  }
}

export default Address;
