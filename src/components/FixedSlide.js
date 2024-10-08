import React, {Component} from 'react'

class FixedSlide extends Component {
  render () {
    const {title, link, gatsbyImageData } = this.props

    const backgroundImage = gatsbyImageData?.fluid
      ? `url(${gatsbyImageData.fluid.src}), url(${gatsbyImageData.fluid.base64})`
      : '';

    return (
      <div className="fixed-slide">
        <div className="fixed-slide__clip">
          <div
            className="fixed-slide__inner"
            style={{
              backgroundImage: backgroundImage,
            }}
            >
            <div className="fixed-slide__content">
              <div className="container">
                <h2 className="fixed-slide__title">
                  {title}
                </h2>
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