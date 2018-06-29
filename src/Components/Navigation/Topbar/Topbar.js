import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'react-icons-kit'

import {search} from 'react-icons-kit/fa/search'
import {questionCircleO} from 'react-icons-kit/fa/questionCircleO'
import {commentsO} from 'react-icons-kit/fa/commentsO'
import {bellO} from 'react-icons-kit/fa/bellO'



import classes from './Topbar.css'


const Topbar = (props, context) => {
  
  const toggleStyle = context.sidebarType ? 
                      [classes.AnimateToggle, classes.toggle].join(' ')
                      :
                      classes.AnimateToggle    
  console.log(toggleStyle)
  return (
    <div className={classes.Topbar} >
      <div className={toggleStyle} onClick={props.toggleClick}>
        <div className={classes.Bar1}></div>
        <div className={classes.Bar2}></div>
        <div className={classes.Bar3}></div>  
      </div>

      <div className={classes.Header}>
        <p>{props.parent}</p>
        <p>{props.child}</p>
      </div>

      <div className={classes.Utility}>
        <ul>
          <li><Icon size={'24'} icon={search}/></li>
          <li><Icon size={'24'} icon={questionCircleO}/></li>
          <li><Icon size={'24'} icon={commentsO}/></li>
          <li><Icon size={'24'} icon={bellO}/></li>
          <li>{props.userName}</li>
        </ul>
      </div>
    </div>
  )
}

Topbar.contextTypes = {
  sidebarType: PropTypes.bool
}

export default Topbar