import React, { Component } from 'react';
import classes from './App.css'
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  state = {
    sidebarType: true
  }

  onClickHandler = () => {
    const {sidebarType} = this.state
    this.setState({
      sidebarType: !sidebarType
    })
  }


  render() {
    const {sidebarType} = this.state
    return (
      <div className={classes.App}>
        <Navigation 
          type={sidebarType} 
          toggleClick={this.onClickHandler}
        />
      </div>
    );
  }
}

export default App;
