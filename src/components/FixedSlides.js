import React, {Component} from 'react'
import FixedSlide from './FixedSlide'

class FixedSlides extends Component {
  render () {
    return (
      <div className="fixed-slide__slides">
        {this.props.slides.map(slide => <FixedSlide  {...slide} />)}
      </div>
    )
  }
}

export default FixedSlides