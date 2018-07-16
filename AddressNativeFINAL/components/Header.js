import React, { Component } from 'react';
import {Link} from 'react-router-native';
import {Text, View} from 'react-native';
import Styles from './Styles';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

  handleToggle = () => this.setState({ open: !this.state.open });
	
  render() {
      return (
          <View style={Styles.nav}>
              <Link
                  to="/"
                  underlayColor='#f0f4f7'
                  style={Styles.navItem}>
                  <Text>Address</Text>
              </Link>
              <Link
                  to="/GetFile"
                  underlayColor='#f0f4f7'
                  style={Styles.navItem}>
                  <Text>Get File</Text>
              </Link>
          </View>
      );
  }
}

export default Header;
