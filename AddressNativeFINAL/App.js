import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Header from './components/Header';
import GetFile from './components/GetFile';
import Address from './components/Address';
import Styles from './components/Styles';

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View className="App" style={Styles.container}>
                    <Header />
                    <Route exact path="/" component={Address}/>
                    <Route path="/GetFile" component={GetFile}/>
                </View>
            </NativeRouter>
        );
    }
}
