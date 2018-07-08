import React, { Component } from 'react';
import  { Text, View, Button } from 'react-native';
import Styles from './Styles';

class GetFile extends Component {
  // App constructor - initialize default variables
  constructor() {
	super();
	this.state = {
		file: 'unknown'
	};
  }
  
  // Get the name of the file
  getFileName = () => {  
	console.log('getFile called.');
	this.setState({file: 'url-file.js'})
  };
	
  render() {
    return (
	<View className="GetFile">
		<Text className="File">
		File: {this.state.file}
		</Text>

		<View style={Styles.buttonView}>
			<Button
				id="getFile"
				onPress={this.getFileName}
				title="Get File Name"
				color="#841584"
				accessibilityLabel="Get File Name"
			/>
		</View>
	</View>
    );
  }
}

export default GetFile;
