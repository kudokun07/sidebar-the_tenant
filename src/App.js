import React, { Component } from 'react';
import classes from './App.css'
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  

  componentWillMount() {
    console.log('App.js [componentWillMount]')
  }

  componentDidUpdate() {
    console.log('App.js [ComponentDidUpdate]')
  }


  render() {
    return (
      <div className={classes.App}>
        
        <Navigation />
      </div>
    );
  }
}

export default App;
