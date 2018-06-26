import React from 'react'
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

import classes from './Sidebar.css'
import UserIcon from '../UserIcon/UserIcon';
import Logo from '../../Logo/Logo';

const IconSidebar = (props) => {
  return (
    <div className={classes.IconSidebar}>
      <Logo className="IconBarLogo"/>
      <ul className={classes.NavigationItems}>
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

export default IconSidebar