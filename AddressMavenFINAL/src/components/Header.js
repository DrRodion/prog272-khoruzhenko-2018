import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
          <header className="App-header">
              <AppBar
                  title="Address Maven"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                  onLeftIconButtonClick={this.handleToggle}
              />
              <Drawer
                  docked={false}
                  width={200}
                  open={this.state.open}
                  onRequestChange={this.handleToggle}
              >
                  <AppBar title="Menu"/>

                  <MenuItem
                      primaryText='Address'
                      containerElement={<Link to="/">Address</Link>}
                      onClick={this.handleToggle}
                  />
                  <MenuItem
                      primaryText='Get File'
                      containerElement={<Link to="/GetFile">Get File</Link>}
                      onClick={this.handleToggle}
                  />
              </Drawer>
          </header>
      );
  }
}

export default Header;
