import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'react-icons-kit'
import { NavLink } from 'react-router-dom'

import iconStyle from '../Sidebar/IconSidebar.css'
import drawerStyle from '../Sidebar/DrawerSidebar.css'


class NavigationItem extends Component {
  static contextTypes = {
    sidebarType: PropTypes.bool
  }

  state= {
    isActived: false
  }

  mouseEnterHandler = () => {
    this.setState({
      isActived: true
    })
  }

  mouseLeaveHandler = () => {
    this.setState({
      isActived: false
    })
  }


  render() {
    const { isActived } = this.state
    const styles = this.context.sidebarType ? drawerStyle : iconStyle
    return (
      <li 
        className={styles.NavigationItem} 
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        <NavLink
          to={this.props.link}
          exact={this.props.exact}
          activeClassName={styles.active}
        >
          <div className={styles.Icon}>
            <Icon size={'30'} icon={this.props.icon}/>
          </div>
          {
            this.context.sidebarType && <span className={styles.Label}>{this.props.label}</span>
          }
        </NavLink>
        <div className={isActived ? styles.active : ""}>
          <ul className={styles.SubNavigateItem}>
            {
              !this.context.sidebarType && <li className={styles.Label}>{this.props.label}</li>
            }
            
            {this.props.children}
          </ul>
        </div>
      </li>
    )
  }
}


export default NavigationItem