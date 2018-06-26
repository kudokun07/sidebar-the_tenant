import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'react-icons-kit'

import classes from './IconItemLv2.css'

const NavigationItemLv2 = (props) => {
  return (
    <li className={classes.NavigationItemLv2}>
      <NavLink
       to={props.link}
       exact={props.exact}
       activeClassName={classes.active}
      >
        <div className={classes.Link}>
          <Icon size={'24'} icon={props.icon}/>
          <span className={classes.Label}>{props.label}</span>
        </div>
      </NavLink>
    </li>
  )
}

export default NavigationItemLv2