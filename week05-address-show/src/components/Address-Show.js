import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types'

class AddressShow extends Component {
  render() {
    return (
		<div>
		  <div className="Addresses">
			<p id="firstName">firstName: {this.props.address.firstName}</p>
			<p id="lastName">lastName: {this.props.address.lastName}</p>
			<p id="streetAddress">streetAddress: {this.props.address.address}</p>
			<p id="city">city: {this.props.address.city}</p>
			<p id="stateName">stateName: {this.props.address.state}</p>
			<p id="zip">zip: {this.props.address.zip}</p>
			<p id="phone">phone: {this.props.address.phone}</p>
			<p id="fax">fax: {this.props.address.fax}</p>
			<p id="tollfree">tollfree: {this.props.address.tollfree}</p>
		  </div>
		  <button id="setAddress" onClick={this.props.setAddress}>Set Address</button>
		</div>
    );
  }
}

AddressShow.propTypes = {
	address: PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		streetAddress: PropTypes.string,
		city: PropTypes.string,
		stateName: PropTypes.string,
		zip: PropTypes.string,
		phone: PropTypes.string,
		fax: PropTypes.string,
		tollfree: PropTypes.string
	}),
	setAddress: PropTypes.func
};

export default AddressShow;
