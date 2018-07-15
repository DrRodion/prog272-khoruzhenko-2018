import React, { Component } from 'react';
import '../App.css';
import styles from './Styles';
import RaisedButton from 'material-ui/RaisedButton'
import ActionAndroid from 'material-ui/svg-icons/action/android';
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
		  <RaisedButton
			id="nextAddress"
			label="Next Address"
			labelPosition="before"
			primary={true}
			icon={<ActionAndroid />}
			style={styles.button}
			onClick={this.props.nextAddress}
		  />
		  <RaisedButton
			id="previousAddress"
			label="Previous Address"
			labelPosition="before"
			primary={true}
			icon={<ActionAndroid />}
			style={styles.button}
			onClick={this.props.previousAddress}
		  />
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
	nextAddress: PropTypes.func,
	previousAddress: PropTypes.func
};

export default AddressShow;
