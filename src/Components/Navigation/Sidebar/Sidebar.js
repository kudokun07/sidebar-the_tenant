import React from 'react'
import PropTypes from 'prop-types'

import { starO } from 'react-icons-kit/fa/starO'
import { buildingO } from 'react-icons-kit/fa/buildingO'
import { addressBookO } from 'react-icons-kit/fa/addressBookO'
import {clockO} from 'react-icons-kit/fa/clockO'
import {ic_flight_takeoff} from 'react-icons-kit/md/ic_flight_takeoff'
import {filesO} from 'react-icons-kit/fa/filesO'
import {ic_settings} from 'react-icons-kit/md/ic_settings'
import {ic_info_outline} from 'react-icons-kit/md/ic_info_outline'
import {tree} from 'react-icons-kit/icomoon/tree'



import NavigationItem from '../NavigationItem/NavigationItem'

import NavigationItemLv2 from '../NavigationItem/NavigationItemLv2/NavigationItemLv2'

import iconStyle from './IconSidebar.css'
import drawerStyle from './DrawerSidebar.css'
import UserIcon from '../UserIcon/UserIcon';
import Logo from '../../Logo/Logo';

const Sidebar = (props, context) => {
  const styles = context.sidebarType ? drawerStyle : iconStyle
  return (
    <div className={styles.Sidebar}>
      <Logo className="IconBarLogo"/>
      <ul className={styles.NavigationItems}>
        <NavigationItem
          link="/"
          exact
          icon={starO}
          label="Quick Access"
        >
        </NavigationItem>
        <NavigationItem
          link="/organization"
          icon={buildingO}
          label="Organization"
          exact={context.sidebarType ? true : false}
        >
          <NavigationItemLv2
            link="/organization/general-info"
            icon={ic_info_outline}
            label="General Info"
          />
          <NavigationItemLv2
            link="/organization/structure"
            icon={tree}
            label="Structure"
          />
        </NavigationItem>
        <NavigationItem
          link="/employees"
          icon={addressBookO}
          label="Employees"
        ></NavigationItem>
        <NavigationItem
          link="/timeline"
          icon={clockO}
          label="Time Line"
        ></NavigationItem>
        <NavigationItem
          link="/leave"
          icon={ic_flight_takeoff}
          label="Leave"
        ></NavigationItem>
        <NavigationItem
          link="/documents"
          icon={filesO}
          label="Document"
        ></NavigationItem>
        <NavigationItem
          link="/settings"
          icon={ic_settings}
          label="Admin Tenant"
        ></NavigationItem>
      </ul>
      <UserIcon userName="Shin"/>
    </div>
  )
}


Sidebar.contextTypes = {
  sidebarType: PropTypes.bool
}

export default Sidebar