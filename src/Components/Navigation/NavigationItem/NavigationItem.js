import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'react-icons-kit'
import { NavLink } from 'react-router-dom'

import iconStyle from '../Sidebar/IconSidebar.css'
import drawerStyle from '../Sidebar/DrawerSidebar.css'


const NavigationItem = (props, context) => {
  const styles = context.sidebarType ? drawerStyle : iconStyle
  return (
    <li className={styles.NavigationItem}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={styles.active}
      >
        <div className={styles.Icon}>
          <Icon size={'30'} icon={props.icon}/>
        </div>
        {
          context.sidebarType && <span className={styles.Label}>{props.label}</span>
        }
      </NavLink>
      <div>
        <ul className={styles.SubNavigateItem}>
          {
            !context.sidebarType && <li className={styles.Label}>{props.label}</li>
          }

          {props.children}
        </ul>
      </div>
    </li>
  )
}

NavigationItem.contextTypes = {
  sidebarType: PropTypes.bool
}

export default NavigationItem