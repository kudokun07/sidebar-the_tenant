import React from 'react'

import {Icon} from 'react-icons-kit'

import {xing} from 'react-icons-kit/fa/xing'

import classes from './Logo.css'


const Logo = (props) => {
  const classLogo = classes[Object.keys(classes).find(val => val === props.className)]
  return (
    <div className={classLogo}>
      <Icon size={'30'} icon={xing}/>
    </div>
  )
}

export default Logo