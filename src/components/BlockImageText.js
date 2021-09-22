import * as React from 'react'
import Icon from '../components/Icons'

class BlockImageText extends React.Component {

    render() {
        const { image, imageAlt, paragraph } = this.props
        return (
            <div className="block-image-text">
                <div className="container row">
                    <div className="col-xs-12 col-md-6 block-image-text_image">
                        <img src={ image } alt={ imageAlt }/>
                    </div>
                    <div className="col-xs-12 col-md-6 block-image-text_text">
                        { paragraph ? <p dangerouslySetInnerHTML={{ __html:paragraph}}></p> : ''}
                    </div>
                </div>
            </div>
            
          )
      }
}

export default BlockImageText