import React from 'react';
import Address from './components/Address';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#F5FCFF',
	alignItems: 'center',
	justifyContent: 'center',
  },
});
