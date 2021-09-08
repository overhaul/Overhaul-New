import React, {Component} from 'react'

class FixedSlide extends Component {
  render () {
    const {title, image, link} = this.props
    return (
      <div className="fixed-slide">
        <div className="fixed-slide__clip">
          <div className="fixed-slide__inner">
            <img
              className="fixed-slide__bg"
              alt={image.alt}
              src={image.src}
            />
            <div className="fixed-slide__content">
              <div className="container">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6 start-xs">
                    <h1 className="fixed-slide__title ">
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
        </div>
      </div>
    )
  }
}

export default FixedSlide