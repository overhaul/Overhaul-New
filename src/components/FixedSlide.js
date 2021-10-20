import React, {Component} from 'react'
import Img from "gatsby-image"

import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'

class FixedSlide extends Component {
  render () {
    const {title, link, gatsbyImageData } = this.props
    const bgImage = convertToBgImage(gatsbyImageData)
    return (
      <div className="fixed-slide">
        <div className="fixed-slide__clip">
          <BackgroundImage
            Tag="div"
            className="fixed-slide__inner"
            fluid={gatsbyImageData.fluid}
          >
            {/* <Img
              className="fixed-slide__bg"
              {...gatsbyImageData}
            /> */}

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
          </BackgroundImage>
        </div>
      </div>
    )
  }
}

export default FixedSlide