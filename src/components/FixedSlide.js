import React, {Component} from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

class FixedSlide extends Component {
  render () {
    const {title, image, link} = this.props
    return (
      <div className="fixed-slide">
        <div class="fixed-slide__clip">
          <div class="fixed-slide__inner">
            <img
              className="fixed-slide__bg"
              alt={image.alt}
              src={image.src}
            />
            <div className="fixed-slide__content">
              <div class="container">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </div>
        <a href={link} className="fixed-slide__link"></a>
      </div>
    )
  }
}

export default FixedSlide