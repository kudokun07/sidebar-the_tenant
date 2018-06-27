import React, { Component }  from 'react'
import PropTypes from 'prop-types'


import Sidebar from './Sidebar/Sidebar'

import classes from './Navigation.css'

class Navigation extends Component {
  state = {
    isHover: false
  }

  static childContextTypes = {
    sidebarType: PropTypes.bool 
  }
  getChildContext() {
    return (
      { 
        sidebarType: this.getSidebarType()
      }
    )
  }

  getSidebarType = () => {
    return this.props.type
  }

  onMouseEnterHandler = () => {
    this.setState({
      isHover: true
    })
  }

  onMouseLeaveHandler = () => {
    this.setState({
      isHover: false
    })
  }

  render() {
    return (
      <div 
        className={classes.Navigation} 
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      >
        <Sidebar toggleClick={this.props.toggleClick} isHover={this.state.isHover}/>
      </div> 
    );
  }
}

export default Navigation;