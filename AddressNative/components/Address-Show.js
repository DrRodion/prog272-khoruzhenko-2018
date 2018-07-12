import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Styles from './Styles';
import PropTypes from 'prop-types'

class AddressShow extends Component {
  render() {
    return (
		<View>
		  <View className="Addresses">
			<Text id="firstName">firstName: {this.props.address.firstName}</Text>
			<Text id="lastName">lastName: {this.props.address.lastName}</Text>
			<Text id="streetAddress">streetAddress: {this.props.address.address}</Text>
			<Text id="city">city: {this.props.address.city}</Text>
			<Text id="stateName">stateName: {this.props.address.state}</Text>
			<Text id="zip">zip: {this.props.address.zip}</Text>
			<Text id="phone">phone: {this.props.address.phone}</Text>
			<Text id="fax">fax: {this.props.address.fax}</Text>
			<Text id="tollfree">tollfree: {this.props.address.tollfree}</Text>
		  </View>
		  
		  <View style={Styles.buttonView}>
			<Button
				id="nextAddress"
				onPress={this.props.nextAddress}
				title="Next Address"
				color="#841584"
				accessibilityLabel="Next Address"
			/>
			<Button
				id="previousAddress"
				onPress={this.props.previousAddress}
				title="Previous Address"
				color="#841584"
				accessibilityLabel="Previous Address"
			/>
		  </View>
		</View>
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
