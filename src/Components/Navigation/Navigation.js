import React, { Component }  from 'react'
import PropTypes from 'prop-types'


import Sidebar from './Sidebar/Sidebar'

import classes from './Navigation.css'

class Navigation extends Component {
  state = {
    isHover: false,
    sidebarType: false
  }

  onClickHandler = () => {
    const {sidebarType, isHover} = this.state
    this.setState({
      sidebarType: !sidebarType,
      isHover: sidebarType ? false : isHover
    })
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
    return this.state.sidebarType
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

  componentWillUpdate() {
    console.log('[componentWillUpdate]')
  }

  componentDidUpdate() {
    console.log('[componentDidUpdate]')
  }

  render() {
    return (
      <div 
        className={classes.Navigation} 
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      >
        <Sidebar toggleClick={this.onClickHandler} isHover={this.state.isHover}/>
      </div> 
    );
  }
}

export default Navigation;