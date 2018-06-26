import React, { Component } from 'react';

import Sidebar from './Sidebar/Sidebar'

import classes from './Navigation.css'

class Navigation extends Component {
  state = {
    version: false,
  }
  render() {
    const { version } = this.state
    return (
      <div className={classes.Navigation}>
        <Sidebar version={version}/>
      </div> 
    );
  }
}

export default Navigation;