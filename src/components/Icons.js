import React, { Component } from 'react'
import IconSun from '../icons/IconSun'
import IconMoon from '../icons/IconMoon'
import IconSand from '../icons/IconSand'
import IconWater from '../icons/IconWater'
import IconWind from '../icons/IconWind'
import IconFire from '../icons/IconFire'
import IconStar from '../icons/IconStar'

class Icon extends Component {
  render () {
    switch (this.props.name) {
      case 'sun':
        return <IconSun />
      case 'moon':
        return <IconMoon />
      case 'wind':
        return <IconWind />
      case 'water':
        return <IconWater />
      case 'star':
        return <IconStar/>
      case 'sand':
        return <IconSand/>
      case 'fire':
        return <IconFire/>
      default:
        return <IconSun />
    }
  }
}

export default Icon