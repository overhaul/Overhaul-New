import React from 'react'

class DualImages extends React.Component {
  render() {
    return (
      <div className="dual-images">
        <div className="container row">
          {this.props.images.slice(0,2).map((image, index) => (
            <div className="col-xs-12 col-md-6" key={index}>
              <div className="dual-images_window">
                <img src={image.src} alt={image.alt} className="dual-images_img  gsap-fade-in"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default DualImages