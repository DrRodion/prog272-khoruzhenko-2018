import React, { Component } from 'react';
import '../App.css';
import styles from './Styles';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';

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
      this.setState({file: 'url-file.js'});
  };
	
  render() {
      return (
          <div className="GetFile">
              <p className="File">
		File: {this.state.file}
              </p>
              <RaisedButton
                  id="getFile"
                  label="Get File Name"
                  labelPosition="before"
                  primary={true}
                  icon={<ActionAndroid />}
                  style={styles.button}
                  onClick={this.getFileName}
              />
          </div>
      );
  }
}

export default GetFile;
