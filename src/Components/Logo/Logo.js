import React from 'react'

import {Icon} from 'react-icons-kit'

import {xing} from 'react-icons-kit/fa/xing'

import classes from './Logo.css'


const Logo = (props) => {
  const classLogo = classes[Object.keys(classes).find(val => val === props.className)]
  return (
    <div className={classLogo}>
      <div className={classes.Logo}>
        <Icon size={'40'} icon={xing}/>
      </div>
      <span className={classes.Brand}>TheXernant</span>
    </div>
  )
}

export default Logo