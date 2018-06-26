import React from 'react'
import { Icon } from 'react-icons-kit'
import { NavLink } from 'react-router-dom'

import classes from './IconItem.css'


const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
      <div className={classes.Icon}>
        <Icon size={'30'} icon={props.icon}/>
      </div>
    </NavLink>
    <div>
      <ul className={classes.SubNavigateItem}>
        <li className={classes.Label}>
          {props.label}
        </li>
        {props.children}
      </ul>
    </div>
  </li>
)

export default NavigationItem