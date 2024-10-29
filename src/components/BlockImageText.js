import * as React from 'react'

class BlockImageText extends React.Component {

    render() {
        const { image, children } = this.props
        return (
            <div className="block-image-text gsap-fade-in">
                <div className="container row">
                    <div className="col-xs-12 col-md-6 block-image-text_image">
                      { image.image ? image.image : ''}
                    </div>
                    <div className="col-xs-12 col-md-6 block-image-text_text">
                        { children }
                    </div>
                </div>
            </div>
            
          )
      }
}

export default BlockImageText