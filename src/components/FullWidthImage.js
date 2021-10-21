import * as React from 'react'

class FullWidthImage extends React.Component {
    render() {
        const {image} = this.props
        console.log(image)
        return (
            <div className="full-width-image">
                <div className="container full-width-image_window gsap-fade-in">
                    <picture>
                        <source srcSet={image.srcSet} 
                                sizes="100vw, (min-width: 1920px) 1920px"
                              />
                        <img className="full-width-image_img" 
                            sizes="100vw, (min-width: 1920px) 1920px" 
                            src={image.src} 
                            alt={image.alt} 
                            srcSet={image.srcSet}
                            />
                    </picture>
                </div>
            </div>
          )
      }
}

export default FullWidthImage
