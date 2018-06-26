import React, { Component } from 'react';
import classes from './App.css'
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  state = {
    sidebarType: true
  }

  render() {
    const {sidebarType} = this.state
    return (
      <div className={classes.App}>
        <Navigation type={sidebarType}/>
      </div>
    );
  }
}

export default App;
