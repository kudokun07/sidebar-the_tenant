import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Icon } from 'react-icons-kit'

import iconStyle from '../../Sidebar/IconSidebar.css'
import drawerStyle from '../../Sidebar/DrawerSidebar.css'

const NavigationItemLv2 = (props, context) => {
  const styles = context.sidebarType ? drawerStyle : iconStyle
  return (
    <li className={styles.NavigationItemLv2}>
      <NavLink
       to={props.link}
       exact={props.exact}
       activeClassName={styles.active}
      >
        <div className={styles.Link}>
          <Icon size={'24'} icon={props.icon}/>
          <span className={styles.LabelLv2}>{props.label}</span>
        </div>
      </NavLink>
    </li>
  )
}

NavigationItemLv2.contextTypes = {
  sidebarType: PropTypes.bool
}

export default NavigationItemLv2