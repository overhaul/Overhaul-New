import React, {Component} from 'react'
import Img from "gatsby-image"

class FixedSlide extends Component {
  render () {
    const {title, link, gatsbyImageData } = this.props
    return (
      <div className="fixed-slide">
        <div className="fixed-slide__clip">
          <div className="fixed-slide__inner">
            <Img
              className="fixed-slide__bg"
              {...gatsbyImageData}
            />
            <div className="fixed-slide__content">
              <div className="container">
                <h1 className="fixed-slide__title">
                  {title}
                </h1>
                <a className="fixed-slide__link" href={link}>
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FixedSlide