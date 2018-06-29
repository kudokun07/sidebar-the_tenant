import React, { Component }  from 'react'
import PropTypes from 'prop-types'


import Sidebar from './Sidebar/Sidebar'

import classes from './Navigation.css'
import Topbar from './Topbar/Topbar';

class Navigation extends Component {
  state = {
    isHover: false,
    sidebarType: true
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
      >
        <Topbar 
          toggleClick={this.onClickHandler}
          parent="organization" 
          child="Org Structure" 
          userName="Shin"
        />
        <Sidebar 
          toggleClick={this.onClickHandler} 
          isHover={this.state.isHover}
          mouseEnter={this.onMouseEnterHandler}
          mouseLeave={this.onMouseLeaveHandler}
        />
      </div> 
    );
  }
}

export default Navigation;