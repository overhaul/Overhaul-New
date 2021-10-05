import * as React from 'react'

class FullWidthImage extends React.Component {
    render() {
        const {image, alt} = this.props
        return (
            <div className="full-width-image">
                <div className="container full-width-image_window gsap-fade-in">
                    <img
                        src={ image } 
                        alt={ alt } 
                        className="full-width-image_img"
                    />
                </div>
            </div>
          )
      }
}

export default FullWidthImage
