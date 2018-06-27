import React from 'react'
import {androidArrowDropleftCircle} from 'react-icons-kit/ionicons/androidArrowDropleftCircle'
import {androidArrowDroprightCircle} from 'react-icons-kit/ionicons/androidArrowDroprightCircle'

import Icon from 'react-icons-kit'

import classes from './ToggleButton.css'

const ToggleButton = (props) => {
  const toggleIcon = props.expand ? androidArrowDropleftCircle : androidArrowDroprightCircle
  const styles = props.expand ? ['DrawerStyle'] : ['IconStyle']
  if (props.onHover) {
    styles.push('active')
  }
  
  return (
    <div 
      className= {props.expand ? classes.DrawerStyle : classes.IconStyle }
      onClick={props.toggleClick}
    >
      <Icon size={'30'} icon={toggleIcon}/>
    </div>
  )
}

export default ToggleButton