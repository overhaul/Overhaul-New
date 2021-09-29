import * as React from 'react'

class DualImages extends React.Component {
    render() {
        return (
            <div className="dual-images">
	            <div className="container row">
		            {this.props.images.slice(0,2).map((image, index) => (
			            <img src={image.src} alt={image.alt} key={index} className="dual-images_img col-xs-6"/>
		            ))}
                </div>
            </div>
        )
    }
}

export default DualImages