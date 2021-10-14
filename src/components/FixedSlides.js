import React, {Component} from 'react'
import FixedSlide from './FixedSlide'

class FixedSlides extends Component {
  render () {
    return (
      <div className="fixed-slide__slides">
        {this.props.slides.map((slide, i) => <FixedSlide key={`slide_${i}`} {...slide} />)}
      </div>
    )
  }
}


export default FixedSlides