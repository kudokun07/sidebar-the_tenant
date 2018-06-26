import React, { Component }  from 'react'
import PropTypes from 'prop-types'


import Sidebar from './Sidebar/Sidebar'

import classes from './Navigation.css'

class Navigation extends Component {
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

  render() {
    return (
      <div className={classes.Navigation}>
        <Sidebar/>
      </div> 
    );
  }
}

export default Navigation;