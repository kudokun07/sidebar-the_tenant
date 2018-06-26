import React from 'react'

import classes from './UserIcon.css'

const UserIcon = (props) => {
  const userIcon = props.userName[0];
  return (
    <div className={classes.UserIcon}>
      {userIcon}
    </div>
  )
}

export default UserIcon