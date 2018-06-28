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
                      [classes.Bar1, classes.Bar2, classes.Bar3].map(
                        style => [style, classes.toggle].join(' ')
                      )
                      :
                      [classes.Bar1, classes.Bar2, classes.Bar3]
  return (
    <div className={classes.Topbar} onClick={props.toggleClick}>
      <div className={classes.AnimateToggle}>
        {toggleStyle.map(style => <div className={style}></div>)}
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