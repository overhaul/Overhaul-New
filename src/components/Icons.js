import React, { Component } from 'react'
import IconSun from '../icons/IconSun'
import IconMoon from '../icons/IconMoon'

class Icon extends Component {
  render () {
    switch (this.props.name) {
      case 'sun':
        return <IconSun />
      case 'moon':
        return <IconMoon />
      default:
        return <IconSun />
    }
  }
}

export default Icon